ENGINE.Sprite = function(args) {

  Utils.extend(this, args);

  this.delta = 0;

};

ENGINE.Sprite.prototype = {

  set: function(args, more) {

    Utils.extend(this, {
      x: 0,
      y: 0,
      loop: 0,
      delta: 0,
      finished: false
    }, args, more);

    this.framesX = this.image.width / this.width | 0;

    this.image = app.images[args.image];

    this.region = [this.x, this.y, this.width, this.height];

  },

  step: function(delta) {

    this.delta += delta;

    if (this.loop === false) {
      this.finished = this.delta >= this.duration;
      this.frame = Math.min(this.frames - 1, this.delta / this.duration * this.frames | 0);
    } else {
      this.frame = this.delta % this.duration / this.duration * this.frames | 0;
    }

    
    this.region[0] = (this.frame % this.framesX) * this.width;
    this.region[1] = (this.frame / this.framesX | 0) * this.height;


  },

  render: function(x, y, rotation, delta) {

    app.layer.save();
    app.layer.translate(x | 0, y | 0);
    app.layer.rotate(rotation - Math.PI / 2);
    app.layer.drawRegion(this.image, this.region, -this.region[2] / 2 | 0, -this.region[3] / 2 | 0);
    app.layer.restore();


  }

};