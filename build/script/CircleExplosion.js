ENGINE.CircleExplosion = function(args) {

  Utils.extend(this, {

    attachedTo: false,
    radius: 0,
    alpha: 1.0

  }, args);


  this.image = app.getColoredImage(app.images.spritesheet, "#000", "source-in");

  this.tween = app.tween(this).discard().to({
    radius: args.radius
  }, 0.1).to({
    radius: 0
  }, 0.5, "outSine");

};

ENGINE.CircleExplosion.prototype = {

  constructor: ENGINE.CircleExplosion,

  type: "circleExplosion",

  action: function() {

    app.sound.play("laser");

  },

  step: function() {

    if(this.attachedTo) {
      this.x = this.attachedTo.x;
      this.y = this.attachedTo.y;
    }

    if (this.tween.finished) this.dead = true;

  },

  render: function() {

    if (this.radius) {
      
      app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.radius);

    }

  }

};