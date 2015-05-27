ENGINE.Button = function(args) {

  Utils.extend(this, {

    radius: 32

  }, args);


  this.image = app.images.spritesheet;

};

ENGINE.Button.prototype = {

  constructor: ENGINE.Button,

  type: "button",

  pointerenter: function() {

    app.tween(this).discard().to({
      radius: 24
    }, 0.1).to({
      radius: 32
    }, 0.2, "outSine");

  },

  action: function() {


    app.sound.play("laser");

  },

  step: function() {

  },

  render: function() {


    if (this.sprite) {
      var scale = this.radius / 32;

      app.ctx.save();

      app.ctx.translate(this.x, this.y);
      app.ctx.drawImage(this.image,
        this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
      );

      app.ctx.restore();

    }

    if (this.count) {
      app.layer.textAlign("center").font("bold 32px Arial").fillStyle(this.color).fillText(this.count, this.x, this.y - this.radius - 48);
    }

  }

};