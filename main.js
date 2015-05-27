/* application */

var app = playground({

  scale: 1,

  smoothing: false,

  create: function() {

    this.loadImage("spritesheet");

  },

  ready: function() {

    this.setState(ENGINE.Game);

  }



});