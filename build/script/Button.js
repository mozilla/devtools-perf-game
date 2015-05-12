ENGINE.Button = function(args) {

  Utils.extend(this, {

    radius: 32

  }, args);


  this.image = app.getColoredImage(app.images.spritesheet, "#000", "source-in")

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

    app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.radius);

    if (this.sprite) {
      app.layer.drawRegion(this.image, this.sprite, this.x- this.sprite[2] / 2 | 0, this.y - this.sprite[3] / 2 | 0);
    }

    if(this.count) {
      app.layer.textAlign("center").font("bold 32px Arial").fillStyle(this.color).fillText(this.count, this.x, this.y - this.radius - 48);
    }

  }

};