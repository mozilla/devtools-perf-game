ENGINE.TextOut = function(args) {

  Utils.extend(this, {
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: 24,
    scaleX: 0,
    scaleY: 1.0,
    text: "void",
    duration: 2.0
  }, args);

  var textout = this;

  app.tween(this)
    .to({
      scaleX: 1.0
    }, this.duration * 0.25, "outElastic")
    .wait(this.duration * 0.5)
    .to({
      scaleY: 0.0
    }, this.duration * 0.25, "outCirc")
    .on("finish", function() {
      textout.game.remove(textout);
    });

    ttt = this;

};

ENGINE.TextOut.prototype = {

  constructor: ENGINE.TextOut,

  sprite: [216, 159, 14, 14],

  type: "textout",

  step: function(dt) {

  },

  render: function() {

    if (!this.scaleX || !this.scaleY) return;

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.fontSize(this.fontSize);

    app.ctx.fillStyle = this.color;
    app.ctx.textAlign = "center";

    app.ctx.scale(this.scaleX, this.scaleY);
    app.ctx.fillText(this.text, 0, 0)

    app.ctx.restore();

  }

};