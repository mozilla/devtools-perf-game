ENGINE.Crate = function(args) {

  Utils.extend(this, {
    random: Math.random(),
    z: 0
  }, args);

  this.create();

  this.upper = [0, 0, 26, 30];

  this.waveOffset = Utils.distance(this.x, this.y, 0, 0) / 600;

};

ENGINE.Crate.prototype = {
  zIndex: 1,

  groups: ["crates"],

  lower: [0, 30, 26, 8],

  take: function() {
    MACROS.splash({
      x: this.x,
      y: this.y,
      radius: 100
    });
  },

  create: function() {

    this.image = app.images.crate;


    this.box = [0, 0, 0, 0];

    this.box[2] = this.image.width;
    this.box[3] = this.image.height;

  },

  step: function(delta) {

    delta *= app.game.timeFactor;

    this.box[0] = this.x - this.box[2] / 2;
    this.box[1] = this.y - this.box[3] / 2;

  },

  render: function(delta) {

    this.upper[3] = 25 + 5 * app.game.sinmod(2, 1, this.waveOffset) | 0;


    app.layer.drawRegion(this.image, this.upper, this.x - this.image.width / 2 | 0, this.y - this.upper[3] | 0)
    app.layer.drawRegion(this.image, this.lower, this.x - this.image.width / 2 | 0, this.y)
      // app.layer.drawImage(this.image, this.x - this.image.width / 2 | 0, this.y - this.image.height / 2 - z | 0)

  }

};