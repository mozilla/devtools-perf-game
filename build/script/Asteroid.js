ENGINE.Asteroid = function(args) {

  this.max = this.resources = 5;

  Utils.extend(this, {

  }, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32 + Math.random() * 64;

  this.lifetime = 0;

  this.sprite = Utils.random(this.sprites);

  this.collectibles = 0;

};

ENGINE.Asteroid.prototype = {

  consturctor: ENGINE.Asteroid,

  hoverable: "mining",
  silent: true,
  instant: true,
  
  type: "asteroid",


  sprites: [
    [238, 24, 51, 38],
    [316, 16, 52, 51],
    [248, 82, 59, 59]
  ],

  pointerenter: function() {

    this.slowdown = true;

  },

  pointerleave: function() {

    this.slowdown = false;

  },

  dig: function() {

    this.resources--;

    if (this.resources <= 0) {
      app.sound.play("digEnd");

      this.game.remove(this);
      this.game.explosion(this.x, this.y, 32, "#aaa");
      this.game.add(ENGINE.Asteroid, {
        x: 0,
        y: 0
      });

    }

    this.game.add(ENGINE.Resource, {
      x: this.x,
      y: this.y,
      parent: this
    });

    this.game.explosion(this.x, this.y, 6, "#aaa");

    app.sound.play("dig");

  },

  step: function(dt) {

    this.lifetime += dt;

    var speed = this.speed * (this.slowdown ? 0.25 : 1.0);

    this.x += Math.cos(this.direction) * speed * dt;
    this.y += Math.sin(this.direction) * speed * dt;

    this.game.wrap(this);

  },

  render: function() {

    var scale = Math.max(0.25, this.resources / this.max);

    app.layer

      .save()
      .align(0.5, 0.5)
      .translate(this.x, this.y)
      .rotate(this.lifetime)
      .scale(scale, scale)
      .drawRegion(app.images.spritesheet, this.sprite, 0, 0)
      .restore()

  }

};