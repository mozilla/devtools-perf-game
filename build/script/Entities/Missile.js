ENGINE.Missile = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    z: 0,
    radius: 50,
    team: 1,
    rotationSpeed: 1,
    velocity: 0,
    maxVelocity: 200,
    delta: 0,
    damage: 10,
    nuclear: true
  }, args);


  this.baseZ = 200;

  this.launchStage = this.launchStageDuration;

  this.create();

  app.game.focusPoints.push(this);

  var launchSound = app.playSound("missileLaunch");
  app.sound.setPlaybackRate(launchSound, 0.5 + Math.random() * 0.5)

  this.engineLoop = app.playSound("missileLoop", true);
  app.sound.setPlaybackRate(this.engineLoop, 0.5 + Math.random() * 0.25)
  app.sound.setVolume(this.engineLoop, 0.4);

  if (this.target.team === app.game.player.team) {
    this.alarmLoop = app.playSound("missileAlert", true);
    app.sound.setVolume(this.alarmLoop, 0.6);
  }

};

ENGINE.Missile.prototype = {

  groups: ["missiles"],

  constructor: ENGINE.Missile,

  zIndex: 4,

  zReaction: 800,
  launchStageDuration: 4,

  _kill: function() {
    if (this.alarmLoop)
      app.sound.fadeOut(this.alarmLoop);
    app.sound.fadeOut(this.engineLoop);
  },

  explode: function() {

    app.game.shake(0.8, 20);

    this.collection.remove(this);

    var explosion = this.collection.add(ENGINE.Animation, {});

    explosion.set("nuclearExplosion", {
      x: this.x,
      y: this.y + this.radius,
      scale: 1.5,
      zIndex: 2,
      loop: false,
      attachedTo: this.target
    });

    /* debris */

    var debris = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - 16 - this.z
    });

    debris.set("debris", {
      loop: false,
      scale: 0.5,
      alignY: 0.3,
      duration: 1.5,
      color: this.color
    });

    debris.zIndex++;

    debris.dropShadow();

    app.playSound("missileExplosion");

    this.target.applyForce(this.direction, 500, 2000);
    this.target.hit(this.damage, this.parent, this);
  },

  create: function() {

    this.color = defs.teamsColors[this.team];

    var polygon = FLAT.polygonFromImage(app.images["models/missile"]);

    this.color = defs.teamsColors[this.team];

    this.model = new FLAT.Model({
      surface: polygon,
      globalScale: this.radius * 2,
      height: 8,
      color: this.color,
      lightingStrength: 1.0,
      childrenShadow: false,
      topScaleY: 0.2,
      childrenShadow: false,
      forceShadow: true
    });


  },

  step: function(delta) {

    delta *= app.game.timeFactor;

    this.delta += delta;

    this.targetDistance = Utils.distance(this, this.target);

    if (this.targetDistance < this.zReaction) {
      this.z = this.baseZ * (this.targetDistance / this.zReaction);
      this.model.pivotY = 1 - (this.targetDistance / this.zReaction);
      this.rotationSpeed = 3;
    } else {
      this.model.pivotY = Utils.moveTo(this.model.pivotY, 0, delta * 0.25);

    }

    this.desiredDirection = Utils.lookAt3(this, this.target);
    this.model.rotation = this.direction;

    ENGINE.Body.step(this, delta);

    /* smoke */

    if (Utils.interval("smoke", 0.05, this)) {

      var x = this.x + Utils.random(-5, 5);
      var y = this.y - this.z + Utils.random(-5, 5);

      var t = this.collection.add(ENGINE.Trail, {
        x: x,
        y: y,
        gravity: 0,
        zIndex: 3,
        color: "#aaa",
        opacity: 1.0,
        radius: 20,
        duration: 1.0
      });

    };



    if ((this.launchStage -= delta) > 0) {
      this.launchMod = 1 - this.launchStage / this.launchStageDuration;
      this.model.pivotY = -0.7;
      this.direction = Math.PI * 1.5;
      this.velocity = this.launchMod * this.maxVelocity;
      this.z = this.launchMod * this.baseZ;
      app.game.shake(0.2, 1);

    } else {
      if (this.z <= 1) {
        this.explode();
      }
    }

  },

  render: function() {

    this.model.render(app.layer, this.x, this.y, this.z);

  }

}