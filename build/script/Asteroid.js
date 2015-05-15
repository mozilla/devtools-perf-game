ENGINE.Asteroid = function(args) {

  this.max = this.resources = 5;

  Utils.extend(this, {

    hitLifespan: 0

  }, args);

  this.radius = 32;

  this.direction = this.game.random() * 6.28;
  this.speed = 32 + this.game.random() * 64;

  this.lifetime = 0;

  this.kind = this.game.random() > 0.8 ? "gold" : "normal";

  this.sprite = Utils.random(this.sprites[this.kind]);

  this.collectibles = 0;


};

ENGINE.Asteroid.prototype = {

  consturctor: ENGINE.Asteroid,

  hoverable: "mining",
  silent: true,
  instant: true,

  type: "asteroid",


  sprites: {

    normal: [
      [341, 239, 52, 39],
      [337, 288, 61, 61],
      [338, 354, 57, 58]
    ],

    gold: [
      [408, 238, 52, 39],
      [404, 287, 59, 61],
      [403, 353, 59, 58]
    ]

  },

  pointerenter: function() {

    this.slowdown = true;

  },

  pointerleave: function() {

    this.slowdown = false;

  },

  die: function() {

    if(!this.game.benchmark) app.sound.play("digEnd");

    this.game.remove(this);
    this.game.explosion(this.x, this.y, 32, "#aaa");
    this.game.add(ENGINE.Asteroid, {
      x: 0,
      y: 0
    });

  },

  dig: function() {

    this.hitLifespan = 0.1;

    this.resources--;

    if (this.resources <= 0) {
      this.die();
    }

    var count = this.kind === "gold" ? 2 : 1;
    for (var i = 0; i < count; i++) {
      this.game.add(ENGINE.Resource, {
        x: this.x,
        y: this.y,
        parent: this
      });
    }

    this.game.explosion(this.x, this.y, 6, "#aaa");

    if(!this.game.benchmark) app.sound.play("dig");

  },

  step: function(dt) {

    this.lifetime += dt;

    this.hitLifespan -= dt;

    var speed = this.speed * (this.slowdown ? 0.25 : 1.0);

    this.x += Math.cos(this.direction) * speed * dt;
    this.y += Math.sin(this.direction) * speed * dt;

    this.game.wrap(this);

    if (Utils.distance(this, app.center) < this.game.player.planet.radius) {

      this.game.player.planet.applyDamage(1, this);
      this.die();

    }

  },

  render: function() {

    if (this.hitLifespan > 0) {
      var image = app.getColoredImage(app.images.spritesheet, "#fff", "source-in");
    } else {
      var image = app.images.spritesheet;
    }

    var scale = Math.max(0.25, this.resources / this.max);

    app.layer

      .save()
      .align(0.5, 0.5)
      .translate(this.x, this.y)
      .rotate(app.roundAngle(this.lifetime))
      .scale(scale, scale)
      .drawRegion(image, this.sprite, 0, 0)
      .restore()

  }

};