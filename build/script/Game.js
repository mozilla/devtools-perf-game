ENGINE.Game = {

  speedMod: 1.0,

  explosion: function(x, y, count, color) {

    for (var i = 0; i <= count; i++) {

      var particle = this.add(ENGINE.Particle, {
        x: x,
        y: y,
        color: color
      });

    }

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

    app.music.play("ascendancy").loop();

    this.reset();

  },

  getScale: function(entity) {

    return 1 - Math.min(1.0, Utils.distance(entity, app.center) / (app.width * 0.5)) * 0.75;

  },

  reset: function() {

    this.wave = 0;

    this.tooltip = "Hover objects to perform actions.";

    this.entities = [];

    this.playerPlanet = this.add(ENGINE.Planet, {
      x: app.center.x,
      y: app.center.y,
      team: 1
    });

    this.player = new ENGINE.Cursor(this, 1, this.playerPlanet);

    this.stars = new ENGINE.BackgroundStars(this);

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

    var buttons = ["fighter", "bomber", "destroyer", "cruiser"];

    for (var i = 0; i < buttons.length; i++) {

      var key = buttons[i];

      var ship = defs.ships[key];

      this.add(ENGINE.Button, {
        color: "#a04",
        x: app.center.x - 160 + i * 100,
        y: app.height - 100,
        sprite: ship.sprite,
        ship: key,
        count: ship.price,
        hoverable: "build"
      })
    }

    this.spawnTimeout = this.spawnInterval = 2;

  },

  step: function(dt) {

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      entity.step(dt);

      if (entity.dead) this.entities.splice(i--, 1);

    }

    if ((this.spawnTimeout -= dt) <= 0) {

      var ships = [];

      this.wave++;

      this.spawnTimeout = this.spawnInterval;

      var level = Math.min(1.0, this.wave / 100);
      var ship;

      if (level > 0) ship = "fighter";
      if (level > 0.25) ship = "bomber";
      if (level > 0.5) ship = "destroyer";


      this.spawnInterval = 2 - level * 1;

      var pos = Utils.sincos(app.width / 2);



      this.add(ENGINE.Ship, {
        type: ship,
        x: pos.x + app.center.x,
        y: pos.y + app.center.y,
        team: 0
      });

    }

    this.player.step(dt);

  },

  renderGradients: function() {

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      if (entity instanceof Planet) {

        /* gradient */

        var gradient = app.layer.createRadialGradient(entity.x, entity.y, 64, entity.x, entity.y, app.width);

        gradient.addColorStop(0.0, entity.team ? "#048" : "#c42");
        gradient.addColorStop(1.0, "transparent");

        app.layer.a(0.25).fillStyle(gradient).fillRect(0, 0, app.width, app.height).ra();

      }

    }

  },

  render: function(dt) {

    app.layer.clear("#161630");

    var gradient = app.layer.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);

    gradient.addColorStop(0.0, "transparent");
    gradient.addColorStop(1.0, "#000");

    app.layer.fillStyle(gradient).fillRect(0, 0, app.width, app.height);

    this.stars.render(dt);

    for (var i = 0; i < this.entities.length; i++) {

      this.entities[i].render();

    }

    this.player.render();

    // this.renderTooltip();

    app.layer.textAlign("center").font("bold 64px Arial").fillStyle("#a04").fillText(this.player.resources, app.center.x - 280, app.height - 76);

    var shipsCount = this.playerPlanet.ships + " / " + this.playerPlanet.max;
    var shipsCountColor = (this.playerPlanet.ships < this.playerPlanet.max) ? "#ccc" : "#f00";
    
    app.layer.textAlign("center").font("bold 64px Arial").fillStyle(shipsCountColor).fillText(shipsCount, app.center.x + 280, app.height - 76);



  },

  renderTooltip: function() {

    if (!this.tooltip) return;

    app.layer.textAlign("center").fillStyle("#fff").textWithBackground(this.tooltip, app.center.x, app.height - 64, "#000", 16);

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
  }

};