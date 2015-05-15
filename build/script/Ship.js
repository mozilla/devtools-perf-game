ENGINE.Ship = function(args) {

  Utils.extend(this, {
    damage: 1,
    firerate: 0.5,
    speed: 160,
    radius: 16,
    rotationSpeed: 5,
    hp: 10,
    range: 200,
    force: 0,
    forceDirection: 0,
    targetTimeout: 0,
    hitLifespan: 0
  }, args, defs.ships[args.type]);

  this.random = this.game.random();

  this.maxHp = this.hp;

  this.lifetime = this.game.random() * 10;
  this.cooldown = this.firerate;
  this.desiredDirection = this.direction = this.game.random() * 6;

  this.color = defs.teamColor[this.team];

  if (this.orbit) {

    //     this.orbit = this.planet;

  }

  // this.image = app.getColoredImage(app.images.spritesheet, this.color, "source-in")
  this.image = app.images.spritesheet;

  if (this.team) this.applyUpgrades(this.game.player.upgrades);
  else this.applyDifficulty();

};

ENGINE.Ship.prototype = {

  constructor: ENGINE.Ship,

  hoverable: true,

  applyDifficulty: function() {

    var difficulty = this.game.wave / 30;

    this.speed *= 1 + difficulty;
    this.damage *= 1 + difficulty;

  },

  applyUpgrades: function(upgrades) {

    var hpmod = this.hp / this.maxHp;

    this.damage = 1 + upgrades.damage * 0.25;
    this.maxHp = upgrades.life * 10;
    this.hp = hpmod * this.maxHp;
    this.speed = 80 + 10 * upgrades.speed;

  },

  pointerenter: function(cursor) {

    if (!this.team) {

      cursor.hit();

      this.die();
    }

  },

  die: function() {

    if (!this.team) this.game.score++;

    if (this.game.benchmark) {
      this.hp = this.maxHp;
    } else {
      this.dead = true;
    }

    this.game.explosion(this.x, this.y, 32, this.color);


    this.game.add(ENGINE.Resource, {
      x: this.x,
      y: this.y,
      parent: this
    });

    if (this.planet) this.planet.ships--;
    if (!this.team) this.game.onenemydeath(this);

    if (!this.game.benchmark) app.sound.play("planetHit").rate(0.6);

  },

  applyDamage: function(damage) {

    if (this.dead) return;

    this.hitLifespan = 0.1;

    this.hp -= damage;

    if (this.hp <= 0) this.die();

    this.game.explosion(this.x, this.y, 3, this.color);


  },

  step: function(dt) {

    // if (!this.team) dt *= Math.sin((app.lifetime % 2 / 2) * Math.PI);

    this.lifetime += dt;

    if ((this.targetTimeout -= dt) <= 0) {

      this.target = false;
      this.targetTimeout = 2;

    }

    if (!this.target) {

      this.target = this.getTarget();

    } else if (this.target.dead) {

      this.target = null;

    }

    if (this.orbit) this.orbitalMovement(dt);
    else this.linearMovement(dt);

    /* firing mechanics */

    this.cooldown -= dt;

    if (this.canFire()) {

      this.fire();

    }

    if (!this.team && Utils.distance(this, app.center) < this.game.player.planet.radius) {

      if (!this.game.benchmark) {
        this.game.player.planet.applyDamage(1, this);
        this.die();
      }

    }

    this.hitLifespan -= dt;

  },

  orbitalMovement: function(dt) {

    if (this.target) {

      this.desiredDirection = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    } else {

      this.desiredDirection = Math.atan2(this.orbit.y - this.y, this.orbit.x - this.x);

    }

    this.direction = Utils.circWrapTo(this.direction, this.desiredDirection, dt * this.rotationSpeed);

    this.x = this.orbit.x + Math.cos(this.lifetime) * 100;
    this.y = this.orbit.y + Math.sin(this.lifetime) * 100;

  },

  linearMovement: function(dt) {

    this.foresightCollision();

    dt *= this.game.speedMod;

    var destination = false;
    var speed = this.speed;

    var ox = 0;
    var oy = 0;

    if (this.team && this.target) {

      ox = Math.cos(this.random * 6.28) * 100;
      oy = Math.sin(this.random * 6.28) * 100;

      destination = this.target;

    } else destination = this.game.player.planet;

    if (this.team && Utils.distance(this, app.center) > app.center.y) {

      destination = app.center;

    }

    if (this.collisionDanger) {

      /*
            var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI / 2;

            destination = {
              x: this.collisionDanger.x + Math.cos(angle) * 150,
              y: this.collisionDanger.y + Math.cos(angle) * 150
            }

            speed *= 1 - 0.5 * Math.abs(Utils.circDistance(this.direction, angle) / (Math.PI));

            */

      if (this.collisionDistance < 50) {

        var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI;

        this.x = this.collisionDanger.x + Math.cos(angle) * 50;
        this.y = this.collisionDanger.y + Math.sin(angle) * 50;

      }

      // speed *= this.collisionDistance / 200;

    }


    if (destination) {

      this.desiredDirection = Math.atan2(destination.y - this.y + ox, destination.x - this.x + oy);

    }

    if (!this.frozen) {

      this.direction = Utils.circWrapTo(this.direction, this.desiredDirection, dt * this.rotationSpeed);

      this.x += Math.cos(this.direction) * speed * dt;
      this.y += Math.sin(this.direction) * speed * dt;
    }

    if (this.force > 0) {

      this.force -= 200 * dt;
      this.x += Math.cos(this.forceDirection) * this.force * dt;
      this.y += Math.sin(this.forceDirection) * this.force * dt;

    }

  },

  canFire: function() {

    if (this.frozen) return false;

    if (this.cooldown > 0) return;
    if (!this.target) return;
    if (Utils.distance(this, this.target) > this.range) return;

    this.cooldown = this.firerate;

    this.fire();

  },

  fire: function() {

    this.game.add(ENGINE.Bullet, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: this.target,
      damage: this.damage
    });

    if (!this.game.benchmark) app.sound.play("laser");

  },

  render: function() {

    /* sprite */

    var s = 1.0;
    this.game.getScale(this);

    app.layer.save();
    app.layer.translate(this.x, this.y);

    app.layer.align(0.5, 0.5);

    this.renderHUD();

    if (this.hitLifespan > 0) {
      var image = app.getColoredImage(this.image, "#fff", "source-in");
    } else {
      var image = this.image;
    }

    app.layer.rotate(app.roundAngle(this.direction - Math.PI / 2));
    app.layer.scale(s, s);
    app.layer.drawRegion(image, this.sprite, 0, 0);
    app.layer.restore();

    // app.layer.fillStyle(this.color).textAlign("center").font("24px Arial").fillText(this.hp, this.x, this.y - 32);

    if (this.target) {

      // app.layer.strokeStyle(this.color).strokeLine(this.x, this.y, this.target.x, this.target.y)

    }

    if (this.collisionDanger) {

      // app.layer.strokeStyle(this.color).strokeLine(this.x, this.y, this.collisionDanger.x, this.collisionDanger.y)

    }


  },

  renderHUD: function() {

    var w = Math.min(100, (this.maxHp / 160) * 100 | 0);
    var mod = this.hp / this.maxHp;
    app.layer.fillStyle(this.color).strokeStyle(this.color).lineWidth(2);
    app.layer.fillRect(0, 32, w * mod, 8);
    app.layer.strokeRect(0, 32, w, 8);

  },

  collisionRange: 100,

  foresightCollision: function() {

    this.collisionDanger = false;

    var self = this;

    var pool = Utils.filter(this.game.entities, function(e) {

      if (e.type !== "asteroid") return false;

      if (Utils.distance(self, e) > self.collisionRange) return false;

      return true;

    });

    this.collisionDanger = Utils.nearest(this, pool);

    if (this.collisionDanger) this.collisionDistance = Utils.distance(this, this.collisionDanger);

  },

  getTarget: function() {

    var pool = [];

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;

      if (entity.team !== this.team) pool.push(entity);

    }

    return Utils.nearest(this, pool);

  }

};