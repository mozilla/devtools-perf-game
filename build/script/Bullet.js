ENGINE.Bullet = function(args) {

  Utils.extend(this, {
    speed: 400
  }, args);

  this.color = defs.teamColor[this.team];
  this.radius = 4;
  this.direction = 0;

  this.image = app.getColoredImage(app.images.spritesheet, this.color, "source-in")

};

ENGINE.Bullet.prototype = {

  sprite: [145, 25, 6, 39],

  constructor: ENGINE.Bullet,

  step: function(dt) {

    this.direction = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    if (Utils.distance(this, this.target) < this.radius + this.target.radius) {
      this.hit(this.target);
    }

  },

  hit: function(target) {

    target.applyDamage(this.damage);

    this.die();

  },

  die: function() {

    this.dead = true;

  },

  render: function() {

    var s = this.game.getScale(this);

    app.ctx.save();

    app.ctx.translate(this.x, this.y);
    app.ctx.rotate(this.direction + Math.PI / 2);
    app.ctx.scale(s, s);
    app.ctx.drawImage(this.image,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3],
      -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};