/* scanlines plugin for playground's default renderer */

PLAYGROUND.Scanlines = function(app) {

  this.app = app;

  app.on("resize", this.resize.bind(this));
  app.on("postrender", this.postrender.bind(this));

};

PLAYGROUND.Scanlines.plugin = true;

PLAYGROUND.Scanlines.prototype = {

  resize: function() {

    this.image = cq(this.app.width, this.app.height);

    this.image.globalAlpha(0.1);
    this.image.fillStyle("#008");

    for (var i = 1; i < this.image.canvas.height; i += 8){
      
      this.image.fillRect(0, i, this.image.canvas.width, 4);

    }

    this.image = this.image.cache();

  },

  postrender: function() {

    if (this.image) {

      // this.app.layer.drawImage(this.image, 0, 0);

    }

  }

};