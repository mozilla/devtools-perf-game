ENGINE.Island = function(args) {

  Utils.extend(this, {
    fortification: 20,
    z: 0,
    radius: 100,
    team: 1,
    health: 100,
    force: 0,
    forceDirection: 0,
    population: 10,
    maxPopulation: 20,
    soldiers: [0, 0, 0],
    flagsPositions: [{
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }]
  }, args);

  this.create();

  this.refreshWall();

  this.box = [0, 0, this.radius * 2, this.radius * 2];

  this.delta = 0;

  this.notes = new ENGINE.StackableNotes(this);

  this.notes.add("Victory will be ours");
};

ENGINE.Island.prototype = {

  groups: ["islands", "navigables", "targetables"],

  constructor: ENGINE.Island,

  zIndex: 1,

  set: function(args) {
    Utils.extend(this, args);

    this.refresh();
  },

  capture: function(player) {

    this.player = player;
    this.team = this.player.team;
    this.refresh();

  },

  refresh: function() {
    this.color = defs.teamsColors[this.team];
    this.wall.color = this.color;
    this.refreshWall();
    this.wall.roof.stroke = this.color;

    if (this.building) {
      this.building.color = this.color;
      this.building.roof.fill = this.color;
      this.building.roof.stroke = this.color;
    }
  },

  hit: function(damage, hitter, bullet) {

    damage = this.removeFortification(damage);

    if (damage) {
      this.removeSoldiers(damage * 0.25, this.team);
    }

    if (bullet.nuclear) {
      for (var i = 0; i < this.wall.top.length; i++) {

        var debris = this.collection.add(ENGINE.Animation, {
          offsetX: this.wall.top[i][0] - this.radius,
          offsetY: this.wall.top[i][1] - this.radius - this.model.height - this.wall.height,
          attachedTo: this
        });

        debris.set("debris", {
          loop: false,
          scale: 0.5 + 0.5 * Math.random(),
          alignY: 0.3,
          duration: 0.5 + Math.random(),
          color: this.color
        });

      }
    }

  },

  fortificationHighlightDuration: 0.5,

  hitDuration: 0.5,

  removeSoldiers: function(count, team) {
    this.soldiers[team] = Math.max(0, this.soldiers[team] - count);
    this.hitLifespan = this.hitDuration;

    var pos = this.flagsPositions[this.team];

    this.collection.add(ENGINE.Animation, {
      x: pos.x,
      y: pos.y
    }).set("explosion", {
      loop: false,
      scale: 0.2,
      alignY: 0.6,
      duration: 0.5,
      rotation: Math.random() * 6
    });


  },

  addSoldiers: function(count, team) {

    this.soldiers[team] += count;

  },

  addFortification: function(amount) {
    this.fortification += amount;
    this.refreshWall();
    this.fortificationHighlight = this.fortificationHighlightDuration;

    var sound = app.playSound("layingBricks");

    app.sound.setPlaybackRate(sound, 0.8 + Math.random() * 0.4);

    if (this.wall.ready && false) {
      var path = FLAT.copyPolygon(this.wall.bakedTop);
      FLAT.translatePolygon(path, this.x, this.y);

      path.push(path[0]);

      for (var i = 0; i < 3; i++) {

        this.collection.add(ENGINE.Smudge, {
          rotationSpeed: 10,
          color: this.color,
          x: this.x - 300 - i * 100,
          y: this.y + 300,
          path: FLAT.copyPolygon(path)
        });
      }
    }

  },

  removeFortification: function(amount) {

    var result = Math.max(0, amount - this.fortification);

    this.fortification = Math.max(0, this.fortification - amount);
    this.refreshWall();

    this.fortificationHighlight = 0.5;

    return result;
  },

  refreshWall: function() {
    this.fortificationMod = this.fortification / 100;

    this.wall.height = Math.max(1, this.fortification);

    this.wall.setTopScale(this.fortification > 0 ? (1.1 + this.fortificationMod * 0.5) : 1.0);

    // this.wall.hidden = this.fortification <= 0;

  },

  create: function() {

    var polygon = FLAT.randomPolygon(5 + Math.random() * 5 | 0);
    // FLAT.polygonFromImage(app.images["models/island"]);

    this.color = defs.teamsColors[this.team];

    this.foam = Utils.scalePolygon(Utils.clonePolygon(polygon), this.radius * 2.25);
    this.shadow = Utils.scalePolygon(Utils.clonePolygon(polygon), this.radius * 2);

    this.model = new FLAT.Model({
      surface: polygon,
      topScale: 0.8,
      globalScale: this.radius * 2,
      height: 30,
      color: "#580",
      lightingStrength: 0.4,
      childrenShadow: false,
      wiggle: true
    });

    this.wall = this.model.add({
      surface: polygon,
      topScale: 1.2,
      scale: 0.8,
      height: 30,
      color: this.color,
      lightingStrength: 1,
      sides: true,
      roof: {
        lineWidth: 8,
        fill: false
      }
    });

    if (this.team === 2)
      this.model.add({
        surface: polygon,
        topScale: 0.2,
        scale: 0.6,
        height: 0,
        color: "#888",
        lightingStrength: 0.4,
        sides: true,
        height: 100
      }).add({
        surface: polygon,
        topScale: 0.2,
        scale: 0.4,
        height: 0,
        color: "#000",
        lightingStrength: 0.4,
        sides: false
      });
    else
      this.model.add({
        surface: polygon,
        topScale: 0.9,
        scale: 0.6,
        color: "#974",
        lightingStrength: 0.4,
        sides: false,
        height: 10
      });

    this.building = this.model.add(defs.models.factory());
    this.building.add(defs.models.chimney({
      childrenShadow: true
    }));

  },

  launchMissile: function(target) {
    this.missile = this.collection.add(ENGINE.Missile, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: target
    });
  },

  launchAntiMissile: function(target) {
    this.missile = this.collection.add(ENGINE.AntiMissile, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: target
    });
  },


  applyForce: function(direction, force, damping) {
    this.force = Math.max(this.force, force);
    this.forceDirection = direction;
    this.forceDamping = damping || force;
  },

  step: function(delta) {

    this.delta += delta;

    if (this.force) {

      this.force = Utils.moveTo(this.force, 0, this.forceDamping * delta);

      this.x += Math.cos(this.forceDirection) * this.force * delta;
      this.y += Math.sin(this.forceDirection) * this.force * delta;

    }

    this.box[0] = this.x - this.radius;
    this.box[1] = this.y - this.radius - this.model.height;

    this.hitLifespan -= delta;

    if (this.battle) this.stepBattle(delta);

    this.notes.step(delta);
  },

  stepBattle: function() {

    if (!Utils.interval("battle", 1, this)) return;

    var all = 0;

    for (var i = 0; i < this.soldiers.length; i++) {

      if (i === this.team && this.fortification) {
        this.removeFortification(1);
      } else {
        if (i === this.team || this.soldiers[this.team]) this.removeSoldiers(1, i);
      }

      all += this.soldiers[i];

    }

    for (var i = 0; i < this.soldiers.length; i++) {
      if (all && all === this.soldiers[i] && i !== this.team && !this.fortification) this.capture(app.game.players[i]);
    }

    if (this.inView) {
      var sound = app.playSound("rifleBattle");
      app.sound.setPlaybackRate(sound, 0.5 + 0.5 * Math.random());
      app.sound.setVolume(sound, 0.3 + Math.random() * 0.3);
    }

  },

  flagHeight: 100,

  render: function(delta) {

    this.renderStatus();

    this.flagY = this.y - 100 + this.model.scale + this.model.wobbleHeight - this.wall.height;

    this.renderFlags(this.x, this.flagY);

    app.layer.save();
    app.layer.translate(this.x - this.radius, this.y - this.radius);
    app.layer.fillStyle("#000").a(0.1);
    app.layer.polygon(this.foam);
    app.layer.fill();
    app.layer.restore();

    app.layer.save();
    app.layer.translate(this.x - this.radius, this.y - this.radius + this.model.height);
    app.layer.fillStyle("#7a0").a(0.1);
    app.layer.polygon(this.shadow);
    app.layer.fill();
    app.layer.restore();


    this.model.render(app.layer, this.x, this.y, 0);

    if ((this.fortificationHighlight -= delta) > 0) {
      this.fortificationHighlightMod = this.fortificationHighlight / this.fortificationHighlightDuration;
      this.wall.color = cq.color(this.color).mix("#fff", this.fortificationHighlightMod);
    } else {
      this.wall.color = this.color;
    }

    this.notes.render(this.x, this.y - this.z - 80);

  },

  renderStatus: function() {
    app.layer.fillStyle(this.color);
    var x = this.x + this.radius / 2;
    var y = this.y + this.model.wobbleHeight;

    // app.layer.fillRect(x, y, 150, 3);
    // app.layer.textAlign("right").font(24, defs.font).fillText("wall: " + this.fortification, x + 150, y - app.layer.fontHeight() - 2);
  },

  renderFlags: function(x, y) {

    y -= 50;

    var height = this.flagHeight;
    var innerHeight = height - 32;

    var all = 0;

    app.layer.fillStyle("#aaa").fillRect(x, y - height, 2, height);

    for (var i = 0; i < this.soldiers.length; i++) {

      all += this.soldiers[i];

    }

    this.battle = this.soldiers[this.team] < all;

    for (var i = 0; i < this.soldiers.length; i++) {

      var count = this.soldiers[i];

      if (count) {

        var color = defs.teamsColors[i];

        var mod = count / all;

        app.layer.fillStyle(color);

        var fy = y - 32 - mod * innerHeight;
        var fx = i === this.team ? x + 2 : x - 50;

        this.flagsPositions[i].x = fx;
        this.flagsPositions[i].y = fy;

        app.layer.fillRect(fx, fy, 48, 32);

        app.layer.fillStyle(app.darker(color)).textAlign("center").font(24).fillText(count, fx + 24, fy + 16 - app.layer.fontHeight() / 2 - 2);
        app.layer.fillStyle("#fff").textAlign("center").font(24).fillText(count, fx + 24, fy + 16 - app.layer.fontHeight() / 2);

        if (i === this.team && this.fortification > 0) {

          app.layer.fillStyle("#888");
          app.layer.fillRect(fx, fy - 34, 48, 32);

          app.layer.fillStyle("#555").textAlign("center").font(24).fillText(this.fortification, fx + 24, fy - 34 + 16 - app.layer.fontHeight() / 2 - 2);
          app.layer.fillStyle("#fff").textAlign("center").font(24).fillText(this.fortification, fx + 24, fy - 34 + 16 - app.layer.fontHeight() / 2);


        }

        if (i === this.team && this.hitLifespan > 0) {
          app.layer.lineWidth(5).strokeStyle("#fff").a(this.hitLifespan / this.hitDuration).strokeRect(fx, fy, 48, 32).ra();
        }

      }

    }

  }



}