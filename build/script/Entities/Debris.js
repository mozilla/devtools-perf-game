ENGINE.Trail = function(args) {

  Utils.extend(this, {
    radius: 16,
    radiusMod: "saw",
    opacity: 1.0,
    fill: true,
    stroke: false,
    gravity: 0,
    opacityMod: "one",
    delta: 0,
    delay: 0
  }, args);

  this.mod = 0;

}

ENGINE.Trail.prototype = {
  constructor: ENGINE.Trail,

  duration: 0.8,

  zIndex: 0,

  render: function(delta) {

    if (this.delay > 0) return;

    var rmod = this.mod;
    if (this.radiusMod === "saw") rmod = Utils.saw(this.mod)
    else if (this.radiusMod === "negative") rmod = this.imod;

    var omod = this.mod;
    if (this.opacityMod === "one") omod = 1.0;
    else if (this.opacityMod === "saw") omod = Utils.saw(this.mod);
    else if (this.opacityMod === "negative") omod = this.imod;

    app.layer.lineWidth(2);
    if (rmod > 0) {
      if (this.fill) app.layer.a(this.opacity * omod).fillStyle(this.color).fillCircle(this.x | 0, this.y | 0, this.radius * (rmod)).ra();
      if (this.stroke) app.layer.a(this.opacity * omod).lineWidth(2).strokeStyle(this.color).strokeCircle(this.x | 0, this.y | 0, this.radius * (rmod)).ra();
    }

  },

  step: function(delta) {


    if (this.delay > 0) {
      this.delay -= delta;
      return;
    }

    this.y += delta * this.gravity;
    this.delta += delta;

    if (this.delta >= this.duration) this.collection.remove(this);

    this.mod = Math.min(1, this.delta / this.duration);
    this.imod = 1 - this.mod;
  }

}