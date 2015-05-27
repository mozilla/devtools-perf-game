ENGINE.Game = {

  speedMod: 1.0,

  bonuses: {

    magnet: 0.1,
    laser: 0.2,
    shield: 0.4

  },

  checkBonus: function(key) {

    return this.availableCpu >= this.bonuses[key];

  },

  explosion: function(x, y, count, color) {

    if (!this.particlesPool) {

      this.particlesPool = [];

      for (var i = 0; i < 100; i++) {

        var particle = this.add(ENGINE.Particle, {
          x: x,
          y: y
        });

        this.particlesPool.push(particle);

      }

      this.particleIndex = 0;

    }

    for (var i = 0; i <= count; i++) {

      if (++this.particleIndex >= this.particlesPool.length) this.particleIndex = 0;;

      var particle = this.particlesPool[this.particleIndex];

      particle.x = x;
      particle.y = y;
      particle.color = color;

      particle.reset();

    }

  },

  random: function() {

    return this.benchmark ? 0.5 : Math.random();

  },

  add: function(constructor, args) {

    args = args || {};

    args.game = this;

    var entity = new constructor(args);

    this.entities.push(entity);

    return entity;

  },

  remove: function(entity) {

    entity.dead = true;

  },

  enter: function() {

    localStorage.setItem("baseline", app.baseline);

    if (!this.benchmark) app.music.play("ascendancy").loop();

    this.gradient = app.ctx.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);

    this.gradient.addColorStop(0.0, "transparent");
    this.gradient.addColorStop(1.0, "#000");

    this.reset();

  },

  getScale: function(entity) {

    return 1 - Math.min(1.0, Utils.distance(entity, app.center) / (app.width * 0.5)) * 0.75;

  },

  reset: function() {

    this.score = 0;

    this.wave = 0;

    this.tooltip = false;

    this.entities = [];

    this.playerPlanet = this.add(ENGINE.Planet, {
      x: app.center.x,
      y: app.center.y,
      team: 1
    });

    this.player = new ENGINE.Cursor(this, 1, this.playerPlanet);
    this.player.x = app.center.x;
    this.player.y = app.center.y;

    this.stars = new ENGINE.BackgroundStars(this);

    if (!this.benchmark) {
      for (var i = 0; i < 8; i++) {

        var angle = Math.random() * Math.PI * 2;
        var radius = Math.random() * app.width / 2;
        var ox = Math.cos(angle) * radius;
        var oy = Math.sin(angle) * radius;

        this.add(ENGINE.Asteroid, {
          x: app.center.x + ox,
          y: app.center.y + oy
        });
      }
    }

    var buttons = ["fighter", "speed", "life", "damage"];

    this.buttons = {};

    for (var i = 0; i < buttons.length; i++) {

      var key = buttons[i];

      this.buttons[key] = this.add(ENGINE.Button, {
        color: defs.teamColor[1],
        x: app.center.x - 160 + i * 100,
        y: app.height - 100,
        sprite: defs.buttons[key],
        key: key,
        count: 1,
        hoverable: "build",
        tooltip: defs.tooltips[key]
      })
    }

    this.nextWave();


  },


  perfHistory: [],

  step: function(dt) {

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      entity.step(dt);

      if (entity.dead) this.entities.splice(i--, 1);

    }

    this.player.step(dt);

    var frameTime = app.frameTime;
    var perf = app.frameTime / this.entities;

    if (this.perfHistory.push(perf) > 30) {

      this.perfHistory.shift();

    }

    var sample = ENGINE.Benchmark.analyze(this.perfHistory);

    if (sample.rse < 0.1) {

      /* Harald's formula */

      this.performance = Math.round((sample.mean / (8 / app.baseline)) * 6);

      /* Harald's formula as 0.0 to 1.0 value */

      this.availableCpu = 

      this.availableCpu = Math.min(1.0, this.performance / app.baseline);

      /* how many ships can game handle at it's best */

      this.maxShips = 40;

      /* how much CPU is drained by one ship */

      this.cpuPerShip = 1 / this.maxShips;

      /* freeze underpowered ships */

      this.freezeShips();



    }

  },

  freezeShips: function() {

    var cpuUsage = 0;

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;
      if (!entity.team) continue;

      cpuUsage += this.cpuPerShip;

      entity.frozen = cpuUsage > this.availableCpu;
    }

  },

  shake: function() {

    this.shakeLifespan = 0.4;

  },

  render: function(dt) {

    app.ctx.textBaseline = "top";
    app.ctx.save();

    app.ctx.fillStyle = "#161630";
    app.ctx.fillRect(0, 0, app.width, app.height);

    app.ctx.fillStyle = this.gradient;
    app.ctx.fillRect(0, 0, app.width, app.height);

    if (this.shakeLifespan > 0) {
      this.shakeLifespan -= dt;
      var chaos = Utils.random(-6, 6);
      app.ctx.translate(chaos, chaos)
    }

    this.stars.render(dt);

    for (var i = 0; i < this.entities.length; i++) {

      this.entities[i].render();

    }

    this.player.render();

    this.renderTooltip();

    app.ctx.textAlign = "right";
    app.ctx.font = "bold 16px Arial";
    app.ctx.fillStyle = "#fff";
    app.ctx.fillText("SCORE: " + this.score, app.width - 20, 20);
    // app.layer.textAlign("center").font("bold 32px Arial").fillStyle("#fff").fillText("CPU: " + this.maxShips, app.center.x, 40);


    this.renderCPUBar();
    this.renderBonuses();

    app.ctx.textAlign = "center";
    app.ctx.font = "bold 64px Arial";
    app.ctx.fillStyle = "#a04";
    app.ctx.fillText(this.player.resources, app.center.x - 280, app.height - 130);

    app.ctx.restore();

  },

  barWidth: 200,

  renderCPUBar: function() {


    var width = 200;
    var currentWidth = this.barWidth * this.availableCpu;

    app.ctx.drawImage(app.images.spritesheet,
      defs.frozenSprite[0], defs.frozenSprite[1], defs.frozenSprite[2], defs.frozenSprite[3],
      app.center.x - this.barWidth / 2 - 32, 24, defs.frozenSprite[2], defs.frozenSprite[3]);


    app.ctx.strokeStyle = "#fa0";
    app.ctx.fillStyle = "#fa0";
    app.ctx.lineWidth = 2;

    app.ctx.strokeRect(app.center.x - this.barWidth / 2, 16, this.barWidth, 32)
    app.ctx.fillRect(app.center.x - this.barWidth / 2, 16, currentWidth, 32)

    var demandWidth = this.barWidth * (this.playerPlanet.ships / this.maxShips);


    app.ctx.fillStyle = "rgba(255,0,0,0.5)";
    app.ctx.lineWidth = 2;

    app.ctx.fillRect(app.center.x - this.barWidth / 2, 16, demandWidth, 32);


    app.ctx.fillStyle = "#fff";
    app.ctx.textAlign = "center";
    app.fontSize(16);
    app.ctx.fillText("AVAILABLE CPU", app.center.x, 24);

  },


  renderBonuses: function() {

    app.ctx.save();
    app.ctx.translate(app.center.x - this.barWidth / 2, 54);
    app.ctx.textAlign = "left";
    app.ctx.textBaseline = "top";

    var i = Object.keys(this.bonuses).length;

    for (var key in this.bonuses) {

      var threshold = this.bonuses[key];

      var x = this.barWidth * threshold;
      var y = i * 32;

      app.ctx.globalAlpha = this.checkBonus(key) ? 1.0 : 0.4;

      app.ctx.fillStyle = "#fff";
      app.ctx.fillRect(x, 0, 2, y);
      app.ctx.fillRect(x, y, 16, 2);

      app.ctx.fillStyle = "#fff";
      app.fontSize(16);
      app.ctx.fillText(defs.bonuses[key].toUpperCase(), x + 20, y - 10);

      i--;

    }

    app.ctx.restore();

  },


  renderTooltip: function() {

    if (!this.tooltip) return;

    app.layer.textAlign("center").fillStyle("#fff").font("16px Arial").textWithBackground(this.tooltip, app.center.x, app.height - 64, "#000", 16);

  },

  pointermove: function(e) {

    this.player.x = e.x;
    this.player.y = e.y;

  },

  wrap: function(entity) {

    if (entity.x + entity.radius < 0) entity.x = app.width + entity.radius;
    if (entity.x - entity.radius > app.width) entity.x = -entity.radius;
    if (entity.y + entity.radius < 0) entity.y = app.height + entity.radius;
    if (entity.y - entity.radius > app.height) entity.y = -entity.radius;

  },

  keydown: function(e) {
    if ((e.key | 0) > 0) {
      this.speedMod = (e.key | 0) * 0.75;

      /* 9 = 0.5 * 9 */
    }
  },

  nextWave: function() {

    if (this.benchmark) return;

    this.wave++;

    this.shipsLeft = 0;

    var streamsPositions = [
      [0.0, 1.0],
      [0.0, 0.5],
      [0.0, 0.0],
      [1.0, 0.0],
      [1.0, 0.5],
      [1.0, 1.0]
    ];

    var difficulty = this.wave / 20;

    Utils.shuffle(streamsPositions);

    var streamsCount = Math.min(3, 1 + difficulty) + 0.3 | 0;
    var shipsPerStream = Math.min(16, 4 + difficulty * 4) | 0;

    var possibleShips = [];

    if (this.wave > 0) possibleShips.push("creep1");
    if (this.wave > 3) possibleShips.push("creep2");
    if (this.wave > 6) possibleShips.push("creep3");
    if (this.wave > 10) possibleShips.push("creep4");

    for (var i = 0; i < streamsCount; i++) {

      var stream = streamsPositions.pop();

      var x = stream[0] * app.width;
      var y = stream[1] * app.height;

      var ship = Utils.random(possibleShips);
      var angle = Math.atan2(y - app.center.y, x - app.center.x);

      for (var j = 0; j < shipsPerStream; j++) {

        this.add(ENGINE.Ship, {
          type: ship,
          x: x + Math.cos(angle) * j * 100,
          y: y + Math.sin(angle) * j * 100,
          team: 0
        });

        this.shipsLeft++;

      }

    }

  },

  onenemydeath: function(ship) {

    this.shipsLeft--;

    if (this.shipsLeft <= 0) this.nextWave();

  }

};