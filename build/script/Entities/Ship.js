ENGINE.Ship = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, this.defaults, defs.ships[args.key], args);

  this.current = {};

  this.base = {
    maxHull: this.maxHull,
    maxVelocity: this.maxVelocity,
    rotationSpeed: this.rotationSpeed
  };

  this.random = Math.random();

  this.hull = this.maxHull;

  this.buffs = new ENGINE.Buffs(this);

  ENGINE.Behavior.create(this);

  ENGINE.Behavior.set(this, this.defaultBehavior || ["gainDistance", "interceptTarget", "getTarget", "returnHome"]);

  this.desiredDirection = this.direction;
  this.desiredStrafe = this.strafe;

  this.delta = 0;
  this.lastTap = -10;

  this.aiTimeout = 0;

  this.trail = [];

  /* model */

  var deck = FLAT.polygonFromImage(app.images["models/" + this.image]);

  var desc = {
    color: this.color,
    surface: deck
  };

  desc.height = this.height;

  if (this.type === "plane") {
    desc.roofStyle = "solid";
    desc.topScale = 0.8;
    desc.scale = this.radius * 2;
    desc.sides = false;


    this.pivotRange = 0.5;
    this.pivotSpeed = 1;
    this.z = 100;
    this.smoke = false;
    this.air = true;
    this.zIndex = 4;

  } else if (this.type === "boat") {
    desc.roofStyle = "solid";
    desc.topScale = 1.0;
    desc.bottomScale = 0.6;
    desc.surface = deck;
    desc.scale = this.radius * 4;
    this.pivotRange = 0.2;
    this.pivotSpeed = 2;
    this.z = 0;
    this.smoke = true;

    this.water = true;

  } else if (this.type === "sub") {
    desc.roofStyle = "solid";
    desc.scale = this.radius / 5;
    this.pivotRange = 0.2;
    this.pivotSpeed = 0.5;
    this.z = 0;
    this.smoke = true;

    this.water = true;
    this.stealth = true;
  }

  // desc.sides = false;

  this.model = new FLAT.Model(desc);

  if (this.type === "boat") {

    var turret = FLAT.polygonFromImage(app.images["models/turret"]);

    this.turret = this.model.add({
      surface: turret,
      height: 4,
      scale: 24,
      color: cq.color(this.color).shiftHsl(0, 0, 0.1).toHex(),
      alignX: 0.3,
      x: 0.7,
      sides: true
    });

    var barrel = FLAT.polygonFromImage(app.images["models/barrel"]);

    this.barrel = this.turret.add({
      surface: barrel,
      height: 4,
      scale: 32,
      color: cq.color(this.color).shiftHsl(0, 0, 0.1).toHex(),
      alignX: 0,
      x: 0.6,
      sides: false,
      pre: true
    });

    var chimney = FLAT.polygonFromImage(app.images["models/chimney"]);

    this.chimney = this.model.add({
      surface: chimney,
      height: 24,
      scale: 18,
      color: this.color,
      roofStyle: "opaque",
      x: 0.25
    });


  } else if (this.type === "sub") {

    var chimney = FLAT.polygonFromImage(app.images["models/chimney"]);

    this.chimney = this.model.add({
      surface: chimney,
      height: 16,
      scale: 20,
      color: this.color,
      roofStyle: "opaque",
      y: 8
    });
  }

  this.width = this.radius * 2;
  this.notes = new ENGINE.StackableNotes(this);
  
  

  if (this.key === "heli") {
    this.engineLoop = app.sound.play("helicopter", true);
  }

  if (this.key === "plane") {
    this.engineLoop = app.sound.play("airplane", true);
  }

  this.maxZ = this.z;

  this.darker = cq.color(this.color).shiftHsl(0, 0, -0.1).toHex();
  this.lighter = cq.color(this.color).shiftHsl(0, 0, +0.25).toHex();

  this.box = [0, 0, 0, 0];

  this.desiredZ = this.z;

  this.maxVelocity *= defs.physicsMod;
  this.rotationSpeed *= defs.physicsMod;

  this[this.type] = true;

  this.arm();

  if (this.target) this.setTarget(this.target);

  this.velocity *= 0.5;

  this.update();

  ENGINE.Body.applyForce(this, this.maxVelocity * 2, this.direction);

}

ENGINE.Ship.prototype = {

  groups: ["targetables", "ships", "navigables"],

  shape: ENGINE.CIRCLE,

  collidable: true,

  radius: 42,

  constructor: ENGINE.Ship,
  zIndex: 2,

  damageColors: ["#c00", "#e90", "#4a0"],
  damageNames: ["Critical", "Medium", "Good"],

  defaults: {
    direction: 0,
    maxVelocity: 100,
    maxHull: 25,
    firerate: 1,
    rotationSpeed: 0.6,
    velocity: 120,
    propellerDelta: 0,
    yOffset: 0,
    ai: true,
    turretRotation: 0,
    acceleration: 1000,
    aimingSpeed: 3,
    aimDirection: 0,
    aimDesiredDirection: 0,
    rotationOverload: 0,
    strafe: 0,
    desiredPivotX: 0,
    random: 0,
    name: "Fox",
    hitLifespan: 0,

    antiPlane: false,
    antiBoat: false,
    antiSub: false,
    antiIsland: false,

    damageFactor: 0

  },

  aimLeft: function(state) {
    this.aimingLeft = state;
  },

  aimRight: function(state) {
    this.aimingRight = state;
  },

  renderFlashlight: function(delta) {
    if (this.type !== "plane") return;

    if (!this.moon) {
      this.moon = new ENGINE.Animation();

      this.moon.set("moon", {
        x: 750,
        y: 400,
        frameSkip: 1,
        loop: true,
        alpha: 0.1,
        scale: 1
          //color: "#ff0"
      });
    }

    var pos = Utils.sincos(this.direction, 100);
    this.moon.x = this.x + pos.x;
    this.moon.y = this.y + pos.y;
    this.moon.step(delta);
    this.moon.render(delta);

    var angle = this.direction + Math.PI / 2;
    var r = 20;
    app.layer.a(0.05);
    app.layer.beginPath();
    app.layer.moveTo(this.x, this.y - this.z);
    app.layer.lineTo(this.moon.x + Math.cos(angle) * r, this.moon.y + Math.sin(angle) * r);
    app.layer.lineTo(this.moon.x - Math.cos(angle) * r, this.moon.y - Math.sin(angle) * r);

    app.layer.fillStyle("#fff").closePath().fill();
    app.layer.ra();
  },


  renderFoam: function(delta) {

    return;

    if (!this.foam) {
      this.foam = new ENGINE.Animation();

      this.foam.set("moon", {
        x: 750,
        y: 400,
        loop: true,
        alpha: 0.2,
        scale: (this.radius / 128) * 2 * 1.25,
        color: this.color
      });
    }

    this.foam.rotation = this.direction;
    this.foam.x = this.x;
    this.foam.y = this.y - this.z + this.yOffset;
    this.foam.step(delta);
    this.foam.render(delta);

    if (this.type === "plane") {


    }

  },

  collision: function(o) {

    if (o instanceof ENGINE.Ship) {

      if (o.type !== this.type) return;
      if (o.type === "plane") return;

      //  if (o.player === this.player) return;

      if (o.team === this.team) return;

      this.explode();
      //    return;

      this.x = this.px;
      this.y = this.py;

      this.force = (o.velocity / 2) + this.velocity;
      this.forceDirection = Utils.lookAt(o, this);

      var distance = Utils.distance(this, o);

      if (this.type === "boat") {
        MACROS.splash({
          x: this.x,
          y: this.y,
          radius: 100
        });
      }

    }

  },

  update: function() {

    Utils.extend(this, this.base);

    this.buffs.calculate();

    console.log("update", this.key, this.maxVelocity, this.base.maxVelocity, this)

  },

  die: function() {

    if (this.dying) return;

    app.game.focusPoints.push(this);

    this.dying = true;

    var animation2 = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z
    });

    animation2.set("smokePuff", {
      loop: false,
      scale: 1.0,
      alignY: 0.6,
      duration: 2
    });

    var sound = app.playSound("explosion");
    app.sound.setPlaybackRate(sound, 1.0 + Math.random() * 0.2);

  },

  hit: function(damage, hitter, bullet) {

    this.hitLifespan = 0.15;

    this.hitter = hitter;
    this.hull = Math.max(0, this.hull - damage);

    var sound = app.playSound("hit");

    app.sound.setPlaybackRate(sound, 1.0 + Math.random() * 0.2);

    if (this.hull <= 0) {

      if (!this.dying) {
        this.die();

      }
    }

    var animation2 = this.collection.add(ENGINE.Animation, {
      x: bullet.x,
      y: bullet.y - 16 - this.z
    });

    animation2.set("debris", {
      loop: false,
      scale: 0.4,
      alignY: 0.3,
      duration: 1,
      color: this.color,
      rotation: Math.random() * 6
    });

  },

  explode: function() {

    this.collection.add(ENGINE.Crate, {
      x: this.x,
      y: this.y
    });

    var sound = app.playSound("bigExplosion");
    app.sound.setPlaybackRate(sound, 1.0 + Math.random() * 0.2);


    var animation1 = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y + 16 - this.z
    });

    animation1.set("explosion", {
      loop: false,
      scale: this.radius / 48,
      duration: 1.5
    });

    var animation2 = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - 16 - this.z
    });

    animation2.set("debris", {
      loop: false,
      scale: this.radius / 48,
      alignY: 0.3,
      duration: 1.5,
      color: this.color

    });

    animation2.zIndex++;

    animation1.dropShadow();
    animation2.dropShadow();


    this.collection.remove(this);

    if (this.engineLoop) app.sound.stop(this.engineLoop);

    MACROS.splash({
      x: this.x,
      y: this.y,
      radius: 200
    });

    MACROS.splash({
      x: this.x,
      y: this.y,
      radius: 300
    });



  },

  renderInfo: function() {

    var x = this.x;
    var y = this.y - this.z - 64;
    var s = 48 * this.radius / 32 | 0;
    // app.layer.fillStyle(this.color).fillCircle(x, y, 24);

    this.damageStep = Math.min(2, this.damageFactor / 0.33 | 0);

    // app.layer.textAlign("center").font(s + "px arial").fillStyle(this.damageColors[this.damageStep]).fillText(this.damageNames[this.damageStep] + " : " + this.hull, x, y + 8 - app.layer.fontHeight() / 2);

    // app.layer.fillStyle(app.darker(this.color)).fillCircle(x, y, 24);

    app.layer.textAlign("center").font(24);
    app.layer.fillStyle(app.darker(this.color)).fillText(this.hull, x, y - app.layer.fontHeight() / 2 + 2);
    app.layer.textAlign("center").font(22);
    app.layer.fillStyle(this.color).fillText(this.hull, x, y - app.layer.fontHeight() / 2);

    if (this.weapon && this.weapon.ammo) {

      var y = this.y - this.z + 64;

      app.layer.textAlign("center").font(24);
      app.layer.fillStyle("#444").fillText(this.weapon.ammo, x, y - app.layer.fontHeight() / 2 + 2);
      app.layer.textAlign("center").font(22);
      app.layer.fillStyle("#eee").fillText(this.weapon.ammo, x, y - app.layer.fontHeight() / 2);

    }
    //app.layer.textAlign("center").font(s + "px arial").fillStyle(this.damageColors[this.damageStep]).fillText(this.damageNames[this.damageStep] + " : " + this.hull, x, y + 8 - app.layer.fontHeight() / 2);

  },

  render: function(delta) {

    this.renderInfo();

    var radius = 16;

    var yOffset = 0;
    /*
    if (this.type === "plane" && this.z === 0) {
      this.yOffset = app.game.island.model.wobbleHeight;
    }
    */

    /* shadow */
    /*
        if (this.type === "plane") {
          app.layer.a(0.15).fillStyle("#004").fillCircle(this.x, this.y - 6, this.radius * 0.7).ra();
          app.layer.a(0.15).fillStyle("#000").fillCircle(this.x, this.y, this.radius).ra();
        } else {
          this.renderFoam(delta);
        }
    */
    this.renderFoam(delta);



    // this.renderFlashlight(delta);

    this.renderTrail();

    this.model.render(app.layer, this.x, this.y + this.yOffset, this.z, this.direction, 0, 0);


    this.desiredPivotX = 0;
    this.desiredPivotX += this.strafe * 0.25;

    if (this.desiredDirection !== this.direction) {

      var dirstance = Utils.wrappedDistance(this.direction, this.desiredDirection, 2 * Math.PI);
      this.desiredPivotX += dirstance / Math.PI;

    }

    this.model.pivotX = Utils.moveTo(this.model.pivotX, this.desiredPivotX, delta * this.pivotSpeed);



    this.renderProppelers();

    // app.layer.fillStyle("#fff").font("15px arial").textAlign("center").fillText(this.behavior.currentKey, this.x, this.y - this.z - 32);

    if (false && this.destination) {
      app.layer.beginPath();
      app.layer.moveTo(this.x, this.y);
      app.layer.lineTo(this.destination.x, this.destination.y);
      app.layer.strokeStyle(this.color).stroke();
    }



    // app.layer.fillStyle("#f00").fillCircle(this.x, this.y, 4);

    this.notes.render(this.x, this.y - this.z - 80);

  },

  renderTrail: function() {
    if (this.trail.length) {
      app.layer.save();
      var s = this.superRotation > 0 ? 8 * (Utils.saw(this.superRotation / 2)) : 1;
      app.layer.strokeStyle(this.color);

      for (var i = 1; i < this.trail.length; i++) {
        var p = this.trail[i - 1];
        var n = this.trail[i];
        app.layer.beginPath();
        app.layer.moveTo(p[0], p[1]);
        app.layer.lineTo(n[0], n[1]);
        // app.layer.a(i / 10);
        app.layer.lineWidth(s * i * 0.1 * this.radius / 4);
        app.layer.stroke();
      }
      app.layer.restore();
    }

  },

  renderProppelers: function() {

    if (this.frontPropeller) {
      var pos = Utils.sincos(this.direction, this.radius);

      app.layer.save();
      app.layer.translate(this.x + pos.x + this.model.offsetX, this.y + pos.y - this.z - this.model.height);
      app.layer.rotate(this.direction + Math.PI / 2);
      app.layer.scale(app.game.sinmod(0.1), 1.0);
      app.layer.fillStyle("#888").fillRect(-this.radius / 4, 0, this.radius / 2, 3);

      app.layer.restore();
    }

    if (this.topPropeller) {
      var pos = Utils.sincos(this.direction, this.radius / 2);

      app.layer.save();
      app.layer.translate(this.model.topCenterX, this.model.topCenterY).a(app.game.sinmod(0.1) * 0.1);
      app.layer.strokeStyle(this.lighter).strokeCircle(0, 0, this.radius);
      app.layer.rotate(this.direction + this.propellerDelta * 0.8);
      app.layer.scale(2.0, 2.0).a(0.5);
      app.layer.fillStyle(this.darker).fillRect(-this.radius / 2, -2, this.radius, 4);
      app.layer.fillStyle(this.darker).fillRect(-2, -this.radius / 2, 4, this.radius);

      app.layer.restore();
    }

  },

  getAimPosition: function() {

    if (!this.aimPosition) this.aimPosition = {
      x: 0,
      y: 0
    };

    if (this.turret) {
      this.aimPosition.x = this.turret.topCenterX;
      this.aimPosition.y = this.turret.topCenterY;
    } else {
      this.aimPosition.x = this.x;
      this.aimPosition.y = this.y;
    }


    return this.aimPosition;

  },

  isInFiringArc: function(entity) {

    if (!this.weapon) return false;
    if (!this.aimPosition) return false;

    if (Utils.distance(this, entity) > this.weapon.range) return false;

    var lookAt = Utils.atanxy(entity.x - this.aimPosition.x, (entity.y - entity.z) - (this.aimPosition.y - this.z));

    return Math.abs(Utils.circWrappedDistance(lookAt, this.aimDirection + this.direction)) < this.weapon.arc;

  },

  weaponsGroups: ["antiIsland", "antiPlane", "antiShip"],

  arm: function() {

    /* copy weapons */

    for (var i = 0; i < this.weaponsGroups.length; i++) {

      var group = this.weaponsGroups[i];

      var def = this[group];

      if (!def) continue;

      if (typeof def === "string") def = defs.weapons[def];

      if (!def || def === true) def = defs.weapons.template;

      this.current[group] = Utils.extend({}, def);
      this.current[group].base = def;
    }

  },

  targetToWeaponGroup: function(target) {

    if (target.ship) return "antiShip";
    else if (target.plane) return "antiPlane";
    else if (target instanceof ENGINE.Island) return "antiIsland";

  },

  setTarget: function(target) {

    this.target = target;

    if (!target) {
      this.weapon = false;
      return;
    }

    var group = this.targetToWeaponGroup(target);

    this.weapon = this.current[group];

  },

  getTarget: function() {

    var entities = app.game.entities.groups["targetables"];
    var pool = [];

    for (var i = 0; i < entities.length; i++) {

      var entity = entities[i];

      if (entity === this) continue;
      if (entity.dying) continue;
      if (entity.team === this.team) continue;

      if (entity instanceof ENGINE.Ship) {
        if (!this["anti" + Utils.ucFirst(entity.type)]) continue;
      }

      if (entity instanceof ENGINE.Island && !this.antiIsland) continue;

      pool.push(entity);
    }


    return Utils.closest(this, pool);

  },

  getTargetAhead: function() {

    var entities = app.game.entities.groups["targetables"];
    var pool = [];

    for (var i = 0; i < entities.length; i++) {

      var entity = entities[i];

      if (entity === this) continue;
      if (entity.team === this.team) continue;

      if (this.isInFiringArc(entity)) pool.push(entity);

    }

    return Utils.closest(this, pool);

  },

  fire: function() {

    if (!this.weapon) return;

    if (this.weapon.base.ammo) {
      this.outOfAmmo = this.weapon.ammo <= 0;

      if (this.outOfAmmo) return
      else this.weapon.ammo--;

    };

    var angle = this.direction + Math.PI / 2 - 0.25;
    var chaos = Utils.random(-4, 4);

    this.collection.add(ENGINE[this.weapon.entity], {
      target: this.target,
      direction: this.aimDirection + this.direction,
      parent: this,
      velocity: this.weapon.velocity || 600,
      damping: 24,
      damage: this.weapon.damage,
      x: this.aimPosition.x + chaos,
      y: this.aimPosition.y + chaos,
      z: this.z,
      type: this.type === "boat" ? "surface" : "air",
      radius: this.type === "boat" ? 2 : 2,
      team: this.team,
      sprite: this.weapon.sprite,
      sound: this.weapon.sound
    });



    // this.force = 100;
    // this.forceDirection = angle - Math.PI;

  },

  dash: function() {

    if (this.dashCooldown > 0) return false;

    this.dashCooldown = 4;
    this.forceDirection = this.direction;
    //     this.accelerate = true;
    this.force = 10;
    // this.velocity = 1.0;
    // this.superRotation = 2;


    return true;

  },

  tap: function() {

    if (this.delta - this.lastTap < 0.25) {

      if (Utils.interval("dash", 1, this)) {

        this.forceDirection = this.direction;
        this.force = 400;
      }
    }

    this.lastTap = this.delta;

  },

  aiStep: function(delta) {

    ENGINE.Behavior.step(this, delta);

  },

  step: function(delta) {

    this.velocity = Utils.moveTo(this.velocity, this.maxVelocity, delta * this.maxVelocity);

    this.damageFactor = this.hull / this.maxHull;

    delta *= app.game.timeFactor;

    this.delta += delta;

    this.dashCooldown -= delta;

    this.px = this.x;
    this.py = this.y;

    this.velocityMod = 1.0;

    if ((this.left && this.superRight) || (this.right && this.superLeft)) {
      this.rotationSpeedMod = 1.5;
    }

    if ((this.left && this.superLeft) || (this.right && this.superRight)) {
      // this.velocityMod= 1.5;      
    }

    if (this.dying) {
      this.desiredDirection = this.desiredDirection + app.game.sinmod(2, 2) * 6;
      this.rotationSpeedMod = 2;
    }

    this.velocityRatio = this.velocity / this.maxVelocity;
    // this.z = this.maxz * this.velocityRatio;

    if (this.type === "plane") {

      if (this.velocityRatio <= 0) {
        // this.z = Utils.moveTo(this.z, 0, delta * 30);
      } else {
        // this.z = Utils.moveTo(this.z, this.maxZ, delta * 30);
      }

    }

    this.desiredStrafe = 0;

    if (this.superLeft) {
      this.desiredStrafe = -1;
    }

    if (this.superRight) {
      this.desiredStrafe = 1;
    }

    this.strafe = Utils.moveTo(this.strafe, this.desiredStrafe, delta * 2);

    this.x += Math.cos(this.direction + (Math.PI / 2 + 0.4) * Utils.sign(this.strafe)) * delta * Math.abs(this.strafe) * this.maxVelocity;
    this.y += Math.sin(this.direction + (Math.PI / 2 + 0.4) * Utils.sign(this.strafe)) * delta * Math.abs(this.strafe) * this.maxVelocity;

    if (this.destination) {
      this.desiredDirection = Utils.lookAt(this, this.destination);
    }



    // this.model.rotation = this.direction;

    if (this.inView && this.smoke && Utils.interval("smoke", 0.03 + 0.1 * (1 - this.velocityRatio), this)) {

      var x = this.x + Utils.random(-5, 5);
      var y = this.y - 40 + Utils.random(-5, 5);


      var x = this.chimney.topCenterX + Utils.random(-5, 5);
      var y = this.chimney.topCenterY + Utils.random(-5, 5);

      /*
            this.collection.add(ENGINE.Trail, {
              x: x,
              y: y + 40,
              zIndex: 0,
              color: "#222",
              opacity: 0.1
            });*/


      var t = this.collection.add(ENGINE.Trail, {
        x: x,
        y: y,
        gravity: -60,
        zIndex: 3,
        color: Utils.random(this.smokeColors),
        opacity: 0.7,
        duration: 0.8 + (1 - this.velocityRatio) * 1
      });

    };

    /*
        if (Utils.interval("smoke-damage", 0.05, this)) {
          this.collection.add(ENGINE.Trail, {
            x: this.x + Utils.random(-10, 10),
            y: this.y - this.z + Utils.random(-10, 10),
            gravity: -30,
            zIndex: 3,
            color: Utils.random([this.color, "#888"]),
            opacity: 0.7,
            duration: 0.25 + Math.random(),
            radius: Utils.random(16, 32),
            radiusMod: "saw",
            opacityMod: "one"
          });
        }
        */

    if (this.inView && this.type === "plane" && Utils.interval("trail", 20 / this.maxVelocity, this) && this.model.ready) {
      var p = this.model.getPoint(0.0, 0.5, 1.0);

      this.trail.push([p.x, p.y]);

      if (this.trail.length > 10) this.trail.shift();
    }

    this.propellerDelta += (10 + 10 * this.velocityRatio) * delta;

    var dmod = 1 - Math.min(1, Utils.distance(this.x, this.y, app.game.x + app.center.x * (1 / app.game.scale), app.game.y + app.center.y * (1 / app.game.scale)) / (500 * (1 / app.game.scale)));

    if (this.key === "heli") {
      app.sound.setVolume(this.engineLoop, 1.0 * dmod);
      app.sound.setPlaybackRate(this.engineLoop, 0.25 + this.velocityRatio * 0.9 + app.game.sinmod(2) * 0.1 * this.velocityRatio);
    }

    if (this.key === "plane") {
      //app.sound.setVolume(this.engineLoop, 0.6 * dmod);


      var x = Utils.limit((this.x - app.game.player.x) / 500, -1.0, 1.0);
      var y = Utils.limit((this.y - app.game.player.y) / 500, -1.0, 1.0);

      //app.sound.setPosition(this.engineLoop, x, y, 0);
      app.sound.setPosition(this.engineLoop, this.x, this.y, 0);
      app.sound.setVelocity(this.engineLoop, Math.cos(this.direction) * this.velocity, Math.sin(this.direction) * this.velocity, 0);

      if (this.dying) dmod += 0.25;

      app.sound.setVolume(this.engineLoop, 0.2 * dmod);

      var m = 1.0;

      if (this.superRotation > 0) m += Utils.saw(this.superRotation / 2);
      if (this.dying) m *= 4;

      app.sound.setPlaybackRate(this.engineLoop, 0.5 + this.velocityRatio * 2 * m + app.game.sinmod(2) * 0.2 * this.velocityRatio);
    }


    if (this.turret) {


      // this.turretRotation = this.target ? Utils.lookAt(this, this.target) : this.direction;
      this.turret.rotation = this.aimDirection;

      if (this.target) {
        var distance = Utils.distance(this, this.target);
        var dmod = 1 - distance / 500;
        this.barrel.pivotY = -(this.target.z / 50) * dmod * 0.5;

      }
      // this.barrel.pivotY = -app.game.sinmod(2) * 0.5;
    }

    /* aiming */

    if (this.target) {
      this.targetInFiringArc = this.isInFiringArc(this.target);
    }

    this.aimPosition = this.getAimPosition();

    if (this.turret) {
      if (this.aimingLeft) this.aimDesiredDirection = Utils.circWrap(this.aimDesiredDirection - delta * this.aimingSpeed);
      if (this.aimingRight) this.aimDesiredDirection = Utils.circWrap(this.aimDesiredDirection + delta * this.aimingSpeed);
      if (this.target) this.aimDesiredDirection = Utils.atanxy(this.target.x - this.aimPosition.x, this.target.y - this.target.z - this.aimPosition.y) - this.direction;
    }

    this.aimDirection = Utils.circWrapTo(this.aimDirection, this.aimDesiredDirection, this.aimingSpeed * delta);

    this.targetAhead = this.getTargetAhead();

    if (this.player && !this.ai && !this.target && this.targetAhead) this.lockTarget();
    // if(this.targetAhead) console.log(this.targetAhead)

    if (this.weapon && this.target && !this.dying && Utils.interval("fire", 1 / (this.weapon.firerate * this.firerate), this)) {
      if (this.targetInFiringArc) this.fire();
    }

    /*
    if (this.firing && Utils.interval("fire", this.firerate, this)) {
      this.fire();
    }
    */



    if (this.target && (this.target._remove || this.target.dying)) this.unsetTarget();
    if (this.target) {

      this.targetDirection = Utils.atanxy(this.target.x - this.aimPosition.x, this.target.y - this.target.z - this.aimPosition.y);
      // Utils.lookAt(this, this.target);
      this.targetDistance = Utils.distance(this, this.target);
    }

    if (this.destination) {
      this.destinationDistance = Utils.distance(this, this.destination);
    }


    if (this.ai && !this.dying) this.aiStep(delta);


    /* update box */

    this.box[0] = this.x;
    this.box[1] = this.y - this.z;
    this.box[2] = 32;
    this.box[3] = 32;


    if (app.game.player.target && this.index === app.game.player.target.index) this.model.outline = "#fff";
    else
      this.model.outline = false;

    if (this.hitLifespan > 0) {
      this.hitLifespan -= delta;
      this.model.overrideColor = "#fff";
    } else {
      this.model.overrideColor = false;
    }


    if (this.dying) {
      this.desiredZ = 0;

      if (this.z <= 0) {
        this.explode();
      }
    } else if (this.destination && this.landUponDestination) {
      this.desiredZ = this.maxZ * Math.min(1, this.destinationDistance / 300);
    } else {
      this.desiredZ = this.maxZ;
    }

    this.z = Utils.moveTo(this.z, this.desiredZ, delta * 50);

    if (this.removeIfOutOfAmmo && this.outOfAmmo) this.collection.remove(this);

    ENGINE.Body.step(this, delta);

    this.notes.step(delta);

  },

  enterview: function() {
    this.trail = [];
  },

  unsetTarget: function() {
    this.target = false;
  },

  lockTarget: function() {
    this.target = this.targetAhead;
  },

  setState: function(state) {

  },

  unloadCargo: function() {
    this.hasCargo = false;
    app.game.addResources(this.team, "blocks", 4);

    var a = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z,
      scale: 0.5,
      loop: false,
      zIndex: this.zIndex - 1
    });

    a.set("takeOffDust");

    console.log(a);


  },

  repair: function(amount) {
    this.hull = Math.min(this.maxHull, this.hull + amount);

    this.notes.add("+" + amount, "#fff", this.color);
  },

  /* helpers for array mapping */

  getDistanceFrom: function(o) {

    return Utils.distance(this, o);

  },

  smokeColors: ["#ccc"]
};