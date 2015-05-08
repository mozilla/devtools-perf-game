ENGINE.Paratrooper = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    delta: 0,
    damage: 1,
    damping: 30,
    lifespan: 5,
    z: 20,
    rotationSpeed: 2,
    random: Math.random(),
    ox: 0
  }, args);

  this.desiredDirection = this.direction;

  this.image = app.images.paratrooper;
  this.box = [0, 0, 0, 0];

  app.sound.setPlaybackRate(app.playSound("parachute"), 1 - 0.15 + 0.3 * Math.random());

};

ENGINE.Paratrooper.prototype = {

  groups: ["paratroopers"],

  constructor: ENGINE.Paratrooper,

  zIndex: 3,

  radius: 6,
  zFade: 100,

  shape: ENGINE.CIRCLE,

  _kill: function() {

    if (this.loop) app.sound.stop(this.loop);

  },

  render: function(delta) {

    if (this.delay > 0) return;

    app.layer.trs(this.x, this.y - this.z, 0, 1.0);
    //    app.layer.drawImage(this.image, -app.images.bullets.width / 2, -app.images.bullets.height / 2);

    var mod = 0.8 + 2 * Math.min(1, this.z / this.zFade);

    app.layer.scale(mod, mod);

    app.layer.fillStyle("rgba(0,0,0,0.25)").fillCircle(this.ox, this.z, 8);
    app.layer.drawImage(this.image, this.ox - this.image.width / 2, -this.image.height / 2)
    app.layer.restore();



    // app.layer.fillStyle("rgba(0,0,0,1.0)").fillCircle(this.x, this.y, this.radius);
    // app.layer.fillStyle("#fa0").fillCircle(this.x, this.y - this.z, this.radius);

  },

  hit: function(o) {

    if (!o._remove) {
      o.addSoldiers(1, this.team);
    }

    this.collection.remove(this);

    this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z
    }).set("smokePuff", {
      loop: false,
      scale: 0.1,
      duration: 1
    });

    app.sound.setPlaybackRate(app.playSound("parachuteLand"), 1 - 0.15 + 0.3 * Math.random(0.1));


  },

  step: function(delta) {

    this.ox = app.game.sinmod(4, 2, this.random * 6) * 8;

    delta *= app.game.timeFactor;

    if (this.delay > 0) {
      this.delay -= delta;
      return;
    }

    this.z -= this.damping * delta;

    Math.max(this.z - 500 * delta, 0);

    if (this.z <= 0) this.hit(this.target);

    this.box[0] = this.x;
    this.box[1] = this.y - this.z;


    this.targetDirection = Utils.lookAt(this, this.target);
    this.targetDistance = Utils.distance(this, this.target);

    this.x += Math.cos(this.targetDirection) * this.targetDistance * 0.5 * delta;
    this.y += Math.sin(this.targetDirection) * this.targetDistance * 0.5 * delta;

  }

};