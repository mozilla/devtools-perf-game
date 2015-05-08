ENGINE.AntiMissile = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    z: 0,
    radius: 30,
    team: 1,
    rotationSpeed: 2,
    velocity: 0,
    maxVelocity: 600,
    delta: 0,
    damage: 10
  }, args);

  this.baseZ = 200;

  this.launchStage = this.launchStageDuration;

  this.create();

  app.game.focusPoints.push(this);

  var launchSound = app.playSound("missileLaunch");
  app.sound.setPlaybackRate(launchSound, 1 + Math.random() * 0.5)

  this.engineLoop = app.playSound("missileLoop", true);
  app.sound.setPlaybackRate(this.engineLoop, 1 + Math.random() * 0.25)
  app.sound.setVolume(this.engineLoop, 0.4);

  this.target.countered = true;
};

ENGINE.AntiMissile.prototype = {

  groups: [],

  constructor: ENGINE.AntiMissile,

  zIndex: 4,

  launchStageDuration: 1.5,

  _kill: function() {
    app.sound.fadeOut(this.engineLoop);
  },

  explode: function() {
   

    this.collection.remove(this);

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

    this.target.collection.remove(this.target);

    var animation1 = this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z
    });

    animation1.set("explosion", {
      loop: false,
      scale: 1,
      duration: 1.5
    });

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
      bottomScaleY: 0.0,
      childrenShadow: false,
      forceShadow: true
    });

    this.model.add({
      surface: polygon,
      globalScale: 150,
      height: 8,
      color: this.color,
      lightingStrength: 1.0,
      childrenShadow: false,
      topScaleY: 0.1
    });

  },

  step: function(delta) {

    delta *= app.game.timeFactor;

    this.delta += delta;

    this.targetDistance = Utils.distance(this, this.target);


    this.model.pivotY = Utils.moveTo(this.model.pivotY, 0, delta * 0.25);

    this.desiredDirection = Utils.lookAt(this, this.target);
    this.model.rotation = this.direction;

    ENGINE.Body.step(this, delta);

    /* smoke */

    if (Utils.interval("smoke", 0.01, this)) {

      var x = this.x + Utils.random(-5, 5);
      var y = this.y - this.z + Utils.random(-5, 5);

      var t = this.collection.add(ENGINE.Trail, {
        x: x,
        y: y,
        gravity: 0,
        zIndex: 3,
        color: Utils.random([this.color, "#aaa"]),
        opacity: 1.0,
        radius: this.radius / 2,
        duration: 0.5
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

      this.velocity = Math.max(this.target.velocity * 2, this.maxVelocity * Math.min(1, this.targetDistance / 300));

      if (this.targetDistance < this.target.radius) {
        this.explode();
      }

      this.z = Utils.moveTo(this.z, this.target.z, delta * 50);
    }

    if(this.target._remove) this.explode();

  },

  render: function() {

    this.model.render(app.layer, this.x, this.y, this.z);

  }

}