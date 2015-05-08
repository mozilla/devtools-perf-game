ENGINE.Cloud = function(args) {

  Utils.extend(this, {
    velocity: Utils.random(2, 10)
  }, args);

  this.create();

};

ENGINE.Cloud.prototype = {
  zIndex: 5,

  create: function() {

    this.animation = new ENGINE.Animation();

    this.animation.set("cloud", {
      x: 0,
      y: 0,
      frameSkip: 1,
      loop: true,
      alpha: 0.7,
      scale: 0.5 + Math.random() * 1,
      color: "#ccc",
      rotation: Math.random() * 6
    });

    this.shadow = this.animation.clone({
      color: "#000",
      alpha: 0.2
    });

    this.box = [0, 0, 0, 0];
    this.box[2] = this.animation.scale * Math.max(this.animation.width, this.animation.height);
    this.box[3] = this.animation.scale * Math.max(this.animation.width, this.animation.height) + this.z;

  },

  step: function(delta) {

    delta *= app.game.timeFactor;

    // this.x -= delta * this.velocity;

    this.animation.x = this.x;
    this.animation.y = this.y;

    this.shadow.x = this.x;
    this.shadow.y = this.y + 100;

    this.animation.step(delta);

    this.box[0] = this.x - this.box[2] / 2;
    this.box[1] = this.y - this.z - this.box[2] / 2;



  },

  render: function(delta) {
    this.shadow.render(delta);
    this.animation.render(delta);
  }

};