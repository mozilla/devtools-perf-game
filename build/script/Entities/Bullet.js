ENGINE.Bullet = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    delta: 0,
    damping: 80,
    lifespan: 5,
    z: 20,
    rotationSpeed: 2
  }, args);

  this.desiredDirection = this.direction;

  this.image = app.getColoredImage("bullets", this.parent.color);
  this.box = [0, 0, 0, 0];

  if (this.sound) {
    var sound = app.playSound(this.sound);
  }

};

ENGINE.Bullet.prototype = {

  groups: ["bullets"],

  sprite: [0, 0, 43, 7],

  constructor: ENGINE.Bullet,

  zIndex: 3,

  radius: 6,

  shape: ENGINE.CIRCLE,

  collision: function(o) {

    if (o instanceof ENGINE.Ship) {

      if (o === this.parent) return;

      this.hit(o);
    }

  },

  render: function(delta) {

    if (this.delay > 0) return;

    app.layer.trs(this.x, this.y - this.z, this.direction, 1.0);
    // app.layer.drawImage(this.image, -app.images.bullets.width / 2, -app.images.bullets.height / 2);
    app.layer.drawRegion(this.image, this.sprite, -this.sprite[2] / 2 | 0, -this.sprite[3] / 2 | 0);
    app.layer.restore();

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
      y: this.y - this.z
    }).set("explosion", {
      loop: false,
      scale: 0.2,
      alignY: 0.6,
      duration: 0.5,
      attachedTo: o,
      rotation: Math.random() * 6,
      offsetX: this.x - o.x,
      offsetY: this.y - o.y
    });

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

  splash: function() {

    if (this.type === "surface") {

      MACROS.splash({
        x: this.x,
        y: this.y,
        radius: 48
      });
    }

    this.collection.remove(this);
  },

  step: function(delta) {

    delta *= app.game.timeFactor;


    if (this.delay > 0) {
      this.delay -= delta;
      return;
    }

    /*
        this.z -= delta * this.damping;

        if (this.z <= 0) this.splash();

        if (this.lifespan) {
          if ((this.lifespan -= delta) <= 0) this.collection.remove(this);
        }
    */

    if (this.rotationSpeed > 0) this.rotationSpeed -= delta * 2;

    if (this.lifespan) {
      if ((this.lifespan -= delta) <= 0) this.collection.remove(this);
    }

    if (this.target) {
      this.direction = this.desiredDirection = Utils.lookAt(this, this.target);
      this.z = Utils.moveTo(this.z, this.target.z, delta * 100);

      if (Utils.distance(this, this.target) < this.target.radius + this.radius) {
        this.hit(this.target);
      }
    }

    ENGINE.Body.step(this, delta);

    this.box[0] = this.x;
    this.box[1] = this.y - this.z;

  }

};