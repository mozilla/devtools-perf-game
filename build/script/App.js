var app = playground({


  /*  
    scaleToFit: true,
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
    
    width: 800,
    height: 800 * window.innerHeight / window.innerWidth,
  */
  frameskip: 2,
  frameskip: 0,

  smoothing: false,

  createScanlines: function() {

    this.scanlines = cq(this.width, this.height);
    this.scanlines.globalAlpha(0);
    this.scanlines.fillStyle("#224");

    for (var i = 0; i < this.scanlines.canvas.height; i += 4) {
      this.scanlines.fillRect(0, i, this.scanlines.canvas.width, 2);
    }

    this.scanlines.globalAlpha(0.12);
    this.scanlines.fillStyle("#048");

    for (var i = 1; i < this.scanlines.canvas.height; i += 4) {
      this.scanlines.fillRect(0, i, this.scanlines.canvas.width, 2);
    }

    this.scanlines = this.scanlines.cache();

  },

  darkerColors: {},

  darker: function(color) {
    if (!this.darkerColors[color]) this.darkerColors[color] = cq.color(color).shiftHsl(-0.05, 0.1, -0.15).toHex();

    return this.darkerColors[color];
  },

  create: function() {


    cq.defaultFont = defs.font;

    GUI.layer = this.layer;

    this.delta = 0;

    this.loadImages("clouds", "clouds-alpha", "clouds-black", "sea", "bullets", "navline", "water", "WaterFresnel", "cursors", "lava");

    this.loadImages("models/boat", "models/plane", "models/chimney", "models/bomber", "models/stealth", "models/heli", "models/island", "models/turret", "models/barrel", "models/arrow", "models/missile", "models/glider");
    this.loadImages("models/quarry", "models/factory", "models/powerplant");

    this.loadImages("animations/moon", "animations/cloud", "animations/explosion", "animations/debris", "animations/smokePuff", "animations/nuclearExplosion", "animations/takeOffDust", "animations/cardHalo", "animations/tinker");
    this.loadImages("cards", "crate", "paratrooper");

    this.loadSounds("helicopter", "airplane", "bomb");
    this.loadSounds("weapons/heavyMachinegun", "weapons/lightMachinegun", "hit", "explosion", "bigExplosion", "bigExplosion2", "missileExplosion", "missileAlert", "missileLaunch", "missileLoop", "layingBricks");
    this.loadSounds("music", "parachute", "parachuteLand", "rifleBattle", "screw");
    this.loadSounds("tick", "tock", "clock");
    this.loadSounds("pickCard", "cancelCard", "playCard", "disbandCard", "pullCard", "nextMove");

    this.createScanlines();
  },

  playSound: function(source, loop) {

    if (typeof source === "string") return this.sound.play(source, loop);
    else {
      var sound = this.sound.play(source[0], loop);
      app.sound.setPlaybackRate(sound, source[1] + Math.random() * source[2]);

      return sound;
    }

  },

  getColoredImage: function(key, color) {

    if (typeof key === "string") {
      var image = this.images[key];

    } else {
      var image = key;
    }

    if (!image[color]) {
      image[color] = cq.temp(image).blend(color, "hard-light").cache();
    }

    return image[color];

  },

  ready: function() {

    this.game.create();
    this.game.start();

    this.setState(this.game);

  },

  step: function(delta) {

    this.delta += delta;

  },

  keydown: function(event) {

    if (event.key === "f8") this.record();

  },

  keyup: function(event) {

  }

});