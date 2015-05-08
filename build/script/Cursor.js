ENGINE.Cursor = function(game, team, planet) {

  this.game = game;

  this.actionTimeout = 0;

  this.dotRadius = 8;
  this.capacity = 10;
  this.resources = 4;
  this.x = 0;
  this.y = 0;
  this.hoverTime = 0;
  this.team = team;
  this.color = defs.teamColor[team];
  this.planet = planet;

  /* upgrades */

  this.times = {
    mining: 0.5,
    collect: 0.05,
    build: 0.5
  };

  this.tween = app.tween(this);

  if (!this.team) {

    this.ai = new ENGINE.Ai(this);
    this.ai.set("idle");

  }


};

ENGINE.Cursor.prototype = {

  consturctor: ENGINE.Cursor,

  poke: function() {

    this.tween = app.tween(this).discard()

    .to({
      dotRadius: 16
    }, 0.1, "outSine")

    .to({
      dotRadius: 8
    }, 0.05, "inSine");

  },

  step: function(dt) {

    var prevEntity = this.entity;

    this.entity = this.getHoveredEntity();

    if (this.entity !== prevEntity) {

      if (prevEntity && prevEntity.pointerleave) prevEntity.pointerleave(this);
      if (this.entity && this.entity.pointerenter) this.entity.pointerenter(this);

      this.onentitychange();

    }

    if (this.action) {

      this.hoverTime += dt;

      this.progressAction(dt);

    }

    if (this.ai) {

      this.ai.step(dt);

      if (this.destination) {
        var direction = Math.atan2(this.destination.y - this.y, this.destination.x - this.x);
        var distance = Utils.distance(this, this.destination);

        var speed = Math.max(120, distance) * 2;

        this.x += Math.cos(direction) * speed * dt;
        this.y += Math.sin(direction) * speed * dt;

      }

    }

  },

  onentitychange: function() {

    this.actionComplete = false;

    this.hoverTime = 0;

    if (this.entity) {

      this.action = this.entity.hoverable;
      this.resetAction();

      if (this.entity.instant) this.actionTimeout = 0;

      if (this.team) this.updateTooltip();

    } else this.action = false;

    /*
        if (!this.actionSound) this.actionSound = app.sound.play("action").loop().rate(0.5);

        if (!this.action) {
          this.actionSound.stop();
        } else {
          this.actionSound.fadeIn();
        }
        */


  },

  resetAction: function() {


    this.actionTimeout = this.times[this.action];

    this.actionDuration = this.actionTimeout;

  },

  canProgress: function() {

    switch (this.action) {

      case "build":

        var ship = defs.ships[this.entity.ship];

        if (this.game.playerPlanet.max - this.game.playerPlanet.ships <= 0) return false;

        return this.resources >= ship.price;

        break;

      default:

        return true;

        break;

    }
  },

  progressAction: function(dt) {

    if (this.canProgress() && (this.actionTimeout -= dt) < 0) {

      this.finalizeAction();
      this.resetAction();

    };

    this.progress = 1 - this.actionTimeout / this.actionDuration;


  },

  finalizeAction: function() {

    this.actionComplete = true;

    switch (this.action) {

      case "mining":

        this.entity.dig();

        break;


      case "build":

        var ship = defs.ships[this.entity.ship];

        this.planet.spawnShip(this.entity.ship);
        this.resources -= ship.price;
        app.sound.play("build");

        break;

    }

  },

  getHoveredEntity: function() {

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (entity.hoverable && Utils.distance(entity, this) < entity.radius) return entity;

    }

    return null;

  },

  render: function() {

    app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.dotRadius);

    if (this.action && !this.entity.silent) {

      var mod = Math.min(1, app.ease(2 * this.hoverTime, "outBounce"));

      app.layer.save();
      app.layer.translate(this.entity.x, this.entity.y);

      app.layer
        .strokeStyle(this.color)
        .lineWidth(2)
        .strokeCircle(0, 0, (this.entity.radius + 2) * mod);

      app.layer
        .lineWidth(8)
        .beginPath()
        .a(0.25)
        .arc(0, 0, this.entity.radius + 8, 0, Math.PI * 2)
        .stroke()
        .ra();

      app.layer
        .lineWidth(8)
        .beginPath()
        .arc(0, 0, this.entity.radius + 8, 0, this.progress * Math.PI * 2)
        .stroke();

    }

    app.layer.restore();



  },

  moveTo: function(destination) {

    this.destination = destination;

  },


  findAsteroid: function() {

    var pool = Utils.filter(this.game.entities, function(e) {

      return e instanceof ENGINE.Asteroid;

    });

    return Utils.nearest(this, pool);

  },


  findCoin: function() {

    var pool = Utils.filter(this.game.entities, function(e) {

      return e instanceof ENGINE.Resource;

    });

    return Utils.nearest(this, pool);

  },

  getAirPower: function() {

    return this.planet.ships.fighter * 2 + this.planet.ships.cruiser * 8;

  },

  updateTooltip: function() {

    if (this.entity) {
      this.game.tooltip = defs.tooltips[this.entity.type];
    } else {
      this.game.tooltip = false;
    }

  }

}