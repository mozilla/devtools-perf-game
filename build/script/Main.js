/* application */

var app = playground({

  width: 640,
  height: 480,

  smoothing: true,

  create: function() {

    this.loadImages('firefox', 'firefox_beta', 'firefox_developer_edition', 'firefox_nightly');
    this.loadImages("spritesheet");
    this.loadSound("action");

    this.keyboard.preventDefault = false;

    this.sound = this.audio.channel("sound");
    this.music = this.audio.channel("music");


  },

  ready: function() {

    this.setState(ENGINE.Benchmark);

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
      image[storekey] = cq(image).clone().blend(color, mode, 1.0).cache();
    }

    return image[storekey];

  },

  roundAngle: function(angle) {

    return Utils.ground(angle - Math.PI / 16, Math.PI / 8);

  }

});


var performance = window.performance || window.webkitPerformance || Date;

Math.sign = Math.sign || function(x) {
  x = +x; // convert to a number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
}