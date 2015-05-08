CanvasQuery.Layer.prototype.trs = function(x, y, rotation, scale) {

  this.save();
  this.translate(x, y);
  this.rotate(rotation);
  if (scale && scale !== 1) this.scale(scale, scale);

}

CanvasQuery.Layer.prototype.font = function(size, name) {

  if (!size) return this.context.font;

  if (typeof size === "string") {
    this.context.font = size;
  } else {
    this.context.font = size + "px " + (name || cq.defaultFont);
  }

  return this;
};