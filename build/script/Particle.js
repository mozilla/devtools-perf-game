ENGINE.Particle = function(args) {

  Utils.extend(this, {
    radius: 4    
  }, args)

  this.size = 2 + this.game.random() * 6;

  this.direction = this.game.random() * 6.28;
  this.speed = 32 + this.game.random() * 128;

  this.speed *= 3;

  this.damping = this.speed * 2;

  this.lifetime = 0;
  this.duration = 1;

};

ENGINE.Particle.prototype = {

  consturctor: ENGINE.Particle,

  step: function(dt) {

    this.lifetime += dt;

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.speed = Math.max(0, this.speed - this.damping * dt);

    this.progress = this.lifetime / this.duration;

    if (this.progress >= 1.0) this.game.remove(this);

  },

  render: function() {

    return;


    var s = this.size * (1 - this.progress);


    if (s > 0) {

      app.layer
        .fillStyle(this.color)
        .fillRect(this.x - s / 2, this.y - s / 2, s, s)

    }

  }

};