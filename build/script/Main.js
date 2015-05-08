/* application */

var app = playground({

  scale: 1,

  smoothing: false,

  create: function() {

    this.loadImage("spritesheet");
    this.loadSound("action");

    this.sound = this.audio.channel("sound");
    this.music = this.audio.channel("music");

  },

  ready: function() {

    this.setState(ENGINE.Game);

  },

  getColoredImage: function(key, color, mode) {

    if (typeof mode === "undefined") mode = "hard-light";

    if (typeof key === "string") {
      var image = this.images[key];
    } else {
      var image = key;
    }

    var storekey = key + color;

    if (!image[storekey]) {
      image[storekey] = cq(image).clone().blend(color, mode, 0.8).cache();
    }

    return image[storekey];

  },


});