ENGINE.Particle = function(args) {

  Utils.extend(this, {
    radius: 4
  }, args)

  this.size = 2 + this.game.random() * 6;

  this.reset();

};

ENGINE.Particle.prototype = {

  consturctor: ENGINE.Particle,

  sprite: [260, 152, 6, 6],

  reset: function() {

    this.lifetime = 0;
    this.duration = 1;

    this.direction = this.game.random() * 6.28;
    this.speed = 32 + this.game.random() * 128;

    this.speed *= 3;

    this.damping = this.speed * 2;

  },

  step: function(dt) {

    this.lifetime += dt;

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.speed = Math.max(0, this.speed - this.damping * dt);

    this.progress = this.lifetime / this.duration;

    if (this.progress >= 1.0) {
      this.x = 0;
      this.y = 0;
    }

  },

  render: function() {


    // var s = this.size * (1 - this.progress);

    // if (s > 0) {

    this.image = app.getColoredImage(app.images.spritesheet, this.color);

    // app.ctx.fillStyle = this.color;
    // app.ctx.fillRect(this.x - s / 2, this.y - s / 2, s, s)

    app.ctx.drawImage(this.image, this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3],
      this.x, this.y, this.sprite[2], this.sprite[3])

    // }

  }

};