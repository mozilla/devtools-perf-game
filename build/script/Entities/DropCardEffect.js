ENGINE.DropCardEffect = function(args) {

  Utils.extend(this, {
    lifespan: 2,
    flashLifespan: 0.25,
    delta: 0
  }, args);

  this.cardData = CARDS[this.card];
  this.globalScale = 0.6;

  this.width = this.cardData.image[2] * this.globalScale;
  this.height = this.cardData.image[3] * this.globalScale;

  var halo = this.collection.add(ENGINE.Animation, {
    x: this.x,
    y: this.y
  });

  halo.set("cardHalo", {
    loop: false,
    scale: 1.0,
    duration: 2,
    color: this.player.color,
    zIndex: this.zIndex - 1
  });

  halo.scaleX = this.width / (halo.width - 56);
  halo.scaleY = this.height / (halo.height - 36);

  this.image = app.images.cards;

};

ENGINE.DropCardEffect.prototype = {
  zIndex: 200,
  duration: 2,
  inDuration: 0.5,
  outDuration: 0.5,

  step: function(delta) {

    this.delta += delta;

    if (this.delta > this.duration) this.collection.remove(this);

  },

  render: function() {

    app.layer.save();
    app.layer.translate(this.x, this.y);
    var scale = 1.0;

    if (this.delta > this.duration - this.outDuration) {
      var mod = (this.duration - this.delta) / this.outDuration;
      scale = Utils.saw((mod * 1.5) % 1);
    }

    app.layer.scale(this.globalScale * scale, this.globalScale);
    // app.layer.globalCompositeOperation("hard-light");
    app.layer.a(0.25);
    app.layer.fillStyle("#000");
    app.layer.fillRect(-this.cardData.image[2] / 2 | 0, -this.cardData.image[3] / 2 + 150 | 0, this.cardData.image[2] | 0, this.cardData.image[3] * 0.25 | 0);
    app.layer.ra();

    app.layer.drawRegion(this.image, this.cardData.image, -this.cardData.image[2] / 2 | 0, -this.cardData.image[3] / 2 | 0);

    if (this.delta < this.inDuration) {
      app.layer.a(1 - this.delta / this.inDuration);
      app.layer.fillStyle("#fff"); // this.player.color
      app.layer.fillRect(-this.cardData.image[2] / 2 | 0, -this.cardData.image[3] / 2 | 0, this.cardData.image[2] | 0, this.cardData.image[3] | 0);
      app.layer.ra();
    }

    app.layer.restore();


  }

};