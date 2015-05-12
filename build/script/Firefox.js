ENGINE.Firefox = function(args) {

  this.max = this.resources = 5;

  Utils.extend(this, {

  }, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32 + Math.random() * 64;

  this.lifetime = 0;

  this.kind = Math.random() > 0.8 ? "gold" : "normal";

  this.sprite = Utils.random(this.sprites[this.kind]);

  this.collectibles = 0;


};

ENGINE.Firefox.prototype = {

  consturctor: ENGINE.Firefox,

  hoverable: "firefox",
  silent: true,
  instant: true,

  type: "firefox",

  sprites: {

    normal: [
      [238, 24, 51, 38],
      [316, 16, 52, 51],
      [248, 82, 59, 59]
    ],

    gold: [
      [331, 96, 51, 38],
      [409, 88, 52, 51],
      [341, 154, 59, 59]
    ]

  },

  pointerenter: function() {

    this.slowdown = true;

  },

  pointerleave: function() {

    this.slowdown = false;

  },

  die: function() {
    app.sound.play("digEnd");

    this.game.remove(this);
    this.game.explosion(this.x, this.y, 32, "#aaa");
    this.game.add(ENGINE.Asteroid, {
      x: 0,
      y: 0
    });

  },

  dig: function() {

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

    app.sound.play("dig");

  },

  step: function(dt) {

    this.lifetime += dt;

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

    var scale = Math.max(0.25, this.resources / this.max);

    app.layer

      .save()
      .align(0.5, 0.5)
      .translate(this.x, this.y)
      .rotate(app.roundAngle(this.lifetime))
      .scale(scale, scale)
      .drawRegion(app.images.spritesheet, this.sprite, 0, 0)
      .restore()

  }

};