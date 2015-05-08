ENGINE.Bomb = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    delta: 0,
    damage: 1,
    damping: 100,
    lifespan: 5,
    z: 20,
    rotationSpeed: 2
  }, args);

  this.desiredDirection = this.direction;

  this.image = app.getColoredImage("bullets", this.parent.color);
  this.box = [0, 0, 0, 0];

  this.loop = app.sound.play("bomb");
  app.sound.setVolume(this.loop, 0.25);
  app.sound.setPlaybackRate(this.loop, 1 + Math.random() * 0.4);
  app.sound.setPlaybackRate(app.playSound("parachute"), 1 + 0.5 * Math.random());

};

ENGINE.Bomb.prototype = {

  groups: ["bombs"],

  constructor: ENGINE.Bomb,

  zIndex: 3,

  radius: 6,

  shape: ENGINE.CIRCLE,

  _kill: function() {

    if (this.loop) app.sound.stop(this.loop);

  },

  render: function(delta) {

    if (this.delay > 0) return;

    app.layer.trs(this.x, this.y - this.z, this.direction, 1.0);
    //    app.layer.drawImage(this.image, -app.images.bullets.width / 2, -app.images.bullets.height / 2);
    app.layer.restore();


    app.layer.fillStyle("rgba(0,0,0,0.25)").fillCircle(this.x, this.y, 8);
    app.layer.fillStyle("#222").fillCircle(this.x, this.y - this.z, 8);
    app.layer.fillStyle("#555").fillCircle(this.x - 3, this.y - this.z - 3, 3);

    // app.layer.fillStyle("rgba(0,0,0,1.0)").fillCircle(this.x, this.y, this.radius);
    // app.layer.fillStyle("#fa0").fillCircle(this.x, this.y - this.z, this.radius);

  },

  hit: function(o) {

    if (!o._remove) {
      o.hit(this.damage, this.parent, this);
    }

    this.collection.remove(this);

    this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z,
      zIndex: 1
    }).set("explosion", {
      loop: false,
      scale: 0.4,
      alignY: 0.6,
      duration: 0.5,
      attachedTo: o,
      rotation: Math.random() * 6,
      offsetX: this.x - o.x,
      offsetY: this.y - o.y
    });

    this.collection.add(ENGINE.Animation, {
      x: this.x,
      y: this.y - this.z,
      zIndex: 1      
    }).set("smokePuff", {
      loop: false,
      scale: 0.6,
      duration: 1
    });

    var sound = app.sound.play("bigExplosion");

    app.sound.setVolume(sound, 0.3);
    app.sound.setPlaybackRate(sound, 0.8 + Math.random() * 0.4);
    /*
        MACROS.cubes({
          x: this.x,
          y: this.y - this.z,
          count: 3,
          color: o.color
        });

        this.collection.add(ENGINE.Trail, {
          x: this.x,
          y: this.y - this.z,
          zIndex: 3,
          radius: 24,
          duration: 0.5,
          color: o.color,
          opacity: 0.7,
          radiusMod: "negative"
        });
    */
  },

  step: function(delta) {

    delta *= app.game.timeFactor;

    if (this.delay > 0) {
      this.delay -= delta;
      return;
    }



    this.z -= 100 * delta;
    Math.max(this.z - 500 * delta, 0);

    if (this.z <= 0) this.hit(this.target);

    this.box[0] = this.x;
    this.box[1] = this.y - this.z;

  }

};