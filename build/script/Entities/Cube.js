ENGINE.Cube = function(args) {

  ENGINE.Body.create(this);

  Utils.extend(this, {
    color: "#fff",
    size: 8,
    delta: 0
  }, args);

  this.mod = 0;
  this.desiredDirection = this.direction;
  this.altColor = cq.color(this.color).shiftHsl(0, 0, -0.3).toHex();

}

ENGINE.Cube.prototype = {
  constructor: ENGINE.Cube,

  duration: 3,

  zIndex: 2,

  splash: function() {

    MACROS.splash({
      x: this.x,
      y: this.y,
      radius: 48
    });

    this.collection.remove(this);
  },

  render: function(delta) {

    if (this.delay > 0) return;

    var alt = Math.sin(Math.PI * this.mod) * 100;

    app.layer.fillStyle(this.color).fillRect(this.x, this.y - alt, this.size, this.size);
    app.layer.fillStyle(this.altColor).fillRect(this.x, this.y - alt + this.size * 0.7, this.size, this.size * 0.3);
    app.layer.fillStyle("rgba(0,0,0,0.2)").fillRect(this.x, this.y, this.size * this.imod * 2, Math.max(this.size, this.size * this.imod * 2));


  },

  step: function(delta) {

    if (this.delay > 0) {
      this.delay -= delta;
      return;
    }

    this.delta += delta;

    this.mod = Math.min(1, this.delta / this.duration);
    this.imod = 1 - this.mod;

    if(this.mod >= 1) this.splash();

    ENGINE.Body.step(this, delta);


  }

}