app.game = {

  modules: [],

  cursor: {
    x: 0,
    y: 0,
    z: 0,
    key: "default"
  },

  create: function() {

    this.clock = new ENGINE.Clock();

    this.modules.push(this.clock);

  },

  enqueue: function() {
    return this.entities.enqueue.apply(this.entities, arguments);
  },

  add: function() {
    return this.entities.add.apply(this.entities, arguments);
  },

  start: function() {

    ENGINE.TimeFactors.create(this);

    this.cameraPoint = {
      x: app.center.x,
      y: app.center.y
    };

    this.filter = false;
    this.focusPoints = [];

    app.sound.setMaster(0.1);
    app.music.setMaster(0);
    this.music = app.music.play("music", true);

    this.delta = 0;
    this.x = 0;
    this.y = 0;

    this.entities = new ENGINE.Entities;
    this.entities.createGroup("ships");
    this.entities.createGroup("islands");
    this.entities.createGroup("bullets");

    this.collisions = new ENGINE.Collisions(this.entities);
    this.background = "#045";
    this.background = "#054";

    this.shakingLifespan = 0;
    this.shakingAmplitude = 0;

    // this.background = "#002";

    /* grid pattern */

    var temp = cq.temp(128, 128);
    temp.clear();
    temp.a(0.1).strokeStyle("#0ff").lineWidth(3).setLineDash([20, 20]).strokeRect(1, 1, temp.width, temp.height);

    this.gridPattern = app.layer.createPattern(temp.canvas, "repeat");

    /* sea pattern */

    var temp = cq.temp(app.images.water);
    temp.clear(this.background);
    temp.blend(app.images.water, "overlay", 0.2);
    temp.resize(2);

    this.seaPattern = app.layer.createPattern(temp.canvas, "repeat");

    var temp = cq.temp(app.images.WaterFresnel);

    this.seaPatternFresnel = app.layer.createPattern(temp.canvas, "repeat");

    /* clouds pattern */

    var temp = cq.temp(app.images["clouds-alpha"]);
    this.cloudsPattern = app.layer.createPattern(temp.canvas, "repeat");

    var temp = cq.temp(app.images["clouds-black"]);
    this.cloudsPatternBlack = app.layer.createPattern(temp.canvas, "repeat");

    var temp = cq.temp(app.images["clouds-alpha"]);
    temp.shiftHsl(0, 0, -0.9).blend("#0af", "color", 0.5);
    this.cloudsPattern2 = app.layer.createPattern(temp.canvas, "repeat");


    var temp = cq.temp(app.images["sea"]);
    temp.resize(0.5);
    this.seaPattern2 = app.layer.createPattern(temp.canvas, "repeat");

    var temp = cq.temp(app.images["sea"]);
    temp.resize(0.3);
    this.seaPattern3 = app.layer.createPattern(temp.canvas, "repeat");

    /* ships */


    this.players = {};

    var island = this.entities.add(ENGINE.Island, {
      x: 0,
      y: 0
    });

    this.players[1] = new ENGINE.Player({
      team: 1,
      home: island
    });

    var island = this.entities.add(ENGINE.Island, {
      x: 2000,
      y: 0
    });

    this.players[2] = new ENGINE.Player({
      team: 2,
      ai: true,
      home: island
    });

    this.player = this.players[1];

    this.entities.add(ENGINE.Island, {
      x: 1000,
      y: -1000,
      team: 0
    });

    for (var i = 0; i < 10; i++) {
      var pos = Utils.sincos(Utils.random(50, 300));
      this.add(ENGINE.Crate, {
        x: 1000 + pos.x,
        y: pos.y
      })
    }

    for (var i = 0; i < 4; i++) {

      this.entities.add(ENGINE.Cloud, {
        x: Utils.random(-app.width, app.width),
        y: Utils.random(-app.height, app.height)
      })

    }

    /* gui */

    this.gui = new GUI.Element({
      width: app.width,
      height: app.height
    });

    ENGINE.Modules.call(this, "start");

    this.clock.x = this.cards.gui.x - 132;
    this.clock.y = this.cards.gui.y + 48;
    this.clock.setPlayer(this.players[1]);
  },

  flares: {
    "#ffff00": [1.0, 32],
    "#ffffff": [0.6, 64],
    "#cc0000": [0.4, 32]
  },


  renderLensFlare: function() {
    /* render lens flares */
    app.layer.save();

    var mod = this.player.direction;

    app.layer.translate(app.game.follow.x, app.game.follow.y - app.game.follow.z);
    app.layer.rotate(mod);

    var distance = 200;

    var sinmod = distance / 1000;

    app.layer.globalAlpha((0.1 + 0.1 * sinmod));
    app.layer.globalCompositeOperation("lighter");

    for (var color in this.flares) {
      var flare = this.flares[color];
      app.layer.fillStyle(color);
      app.layer.beginPath();
      app.layer.circle(0, flare[0] * distance, flare[1] * (0.6 + 0.4 * sinmod));
      app.layer.fill();
      app.layer.beginPath();
      app.layer.circle(0, -flare[0] * distance * 0.76, flare[1] * (0.6 + 0.4 * sinmod));
      app.layer.fill();
    }

    app.layer.restore();
  },

  xstart: function() {

    this.delta = 0;

    this.entities = new ENGINE.Entities;

    this.collisions = new ENGINE.Collisions(this.entities);

    var upperDeck = [
      [0, 0],
      [64, 0],
      [64, 32],
      [0, 32]
    ];

    var lowerDeck = [
      [0, 0],
      [32, 0],
      [32, 16],
      [0, 16]
    ];

    var chimney = [
      [0, 0],
      [16, 0],
      [16, 16],
      [0, 16]
    ];

    this.model = new ENGINE.Model3D({
      top: upperDeck,
      bottom: lowerDeck,
      height: 32,
      color: "#fa0"
    });

    this.model.add({
      top: chimney,
      bottom: chimney,
      height: 32,
      color: "#fa0"
    });


    this.model2 = new ENGINE.Model3D({
      top: lowerDeck,
      bottom: upperDeck,
      height: 48,
      color: "#0af"
    });



    var star = [];
    var steps = 16;
    var ans = Math.PI * 2 / steps;
    var r = 32;

    for (var i = 0; i < steps; i++) {
      var a = ans * i
      var mod = Math.sin(a * 2);
      star.push([Math.cos(a) * r * mod, Math.sin(a) * r * mod]);
    }

    this.model3 = new ENGINE.Model3D({
      top: star,
      bottom: star,
      height: 80,
      color: "#8c0"
    });

    var star = [];
    var steps = 12;
    var ans = Math.PI * 2 / steps;
    var r = 32;

    for (var i = 0; i < steps; i++) {
      var a = ans * i
      var mod = 1;
      star.push([Math.cos(a) * r * mod, Math.sin(a) * r * mod]);
    }

    this.model4 = new ENGINE.Model3D({
      top: star,
      bottom: star,
      height: 48,
      color: "#c06"
    });

  },

  collisionHandler: function(a, b) {

  },

  sinmod: function(period, max, offset) {
    offset = offset || 0;

    if (!max) max = 1;
    return Math.sin((max * Math.PI) * ((offset + this.delta) % period / period));
  },

  sawmod: function(period, max, offset) {
    offset = offset || 0;

    return Utils.saw((offset + this.delta) % period / period);
  },

  /* events */

  enter: function() {

    this.scale = 1.0;

  },

  step: function(delta) {

    this.cursor.x = app.pointer.x / this.scale + this.x;
    this.cursor.y = app.pointer.y / this.scale + this.y;

    this.delta += delta;

    ENGINE.TimeFactors.step(this, delta);

    this.entities.step(delta);

    this.collisions.step(delta);

    /* update camera */

    if (this.follow) {
      this.updateFollowCamera(delta);
    } else {
      this.updateFreeCamera(delta);
    }

    //    this.x = this.player.x - app.center.x;
    //    this.y = this.player.y - app.center.y;

    ENGINE.Modules.call(this, "step", delta);


    app.sound.setMasterPosition(this.x, this.y, 0);

    this.gui.step(delta);

  },

  renderCursor: function() {
    var data = defs.cursors[this.cursor.key];
    app.layer.drawRegion(app.images.cursors, data, app.pointer.x - data[4], app.pointer.y - data[5]);
  },

  render: function(delta) {

    app.layer.clear(this.background);
    app.layer.textBaseline("top");


    app.layer.save();
    /* sea pattern */
    app.layer.scale(this.scale, this.scale);

    //app.layer.fill();


    var offsetX = (this.delta * 16) - this.x;
    var offsetY = (this.delta * 16) - this.y;

    app.layer.save();
    app.layer.translate(offsetX, offsetY);

    app.layer.fillStyle(this.seaPattern);
    app.layer.rect(-offsetX, -offsetY, app.width / this.scale, app.height / this.scale);
    app.layer.fill();

    app.layer.globalCompositeOperation("lighten").a(0.1 + 0.1 * this.sinmod(2));
    app.layer.fillStyle(this.seaPattern2);
    app.layer.rect(-offsetX, -offsetY, app.width / this.scale, app.height / this.scale);
    app.layer.fill();

    app.layer.globalCompositeOperation("lighten").a(0.1 + 0.1 * this.sinmod(4));
    app.layer.fillStyle(this.seaPattern3);
    app.layer.rect(-offsetX, -offsetY, app.width / this.scale, app.height / this.scale);
    //app.layer.fill();

    app.layer.restore();

    app.layer.save();
    app.layer.translate(-this.x, -this.y);
    app.layer.a(1.0);
    app.layer.fillStyle(this.gridPattern);
    app.layer.rect(-this.x, -this.y, app.width / this.scale, app.height / this.scale);
    app.layer.fill();
    app.layer.restore();

    app.layer.restore();


    // this.renderMoon(delta);

    app.layer.save();
    app.layer.scale(this.scale, this.scale);
    app.layer.translate(-this.x, -this.y);
    this.entities.render(delta);


    ENGINE.Modules.call(this, "render", delta);

    // this.renderLensFlare();

    app.layer.restore();

    ENGINE.Modules.call(this, "postrender", delta);

    if (!this.grad2) {
      this.grad2 = app.layer.createRadialGradient(app.center.x, app.center.y, 64, app.center.x, app.center.y, app.center.x);
      this.grad2.addColorStop(0.0, "transparent");
      this.grad2.addColorStop(1.0, "#000");

    }

    // app.layer.blend("#0af", "color-dodge", 0.4);
    app.layer.fillStyle(this.grad2);
    app.layer.a(0.3).fillRect(0, 0, app.width, app.height).ra();


    for (var i = 0; i < this.modules.length; i++) {
      if (this.modules[i].postrender) this.modules[i].postrender(delta);
    }

    /*

        var offset_x = -app.game.player.x;
        var offset_y = -app.game.player.y;
        var fill_x = app.width; // could be canvas.width
        var fill_y = app.height; // could be canvas.height

        app.layer.translate(offset_x, offset_y);
        //app.layer.fillRect(-offset_x, -offset_y, fill_x, fill_y);
        app.layer.translate(-offset_x, -offset_y);

        */


    /* clouds pattern */
    /*
    var offset = this.delta * 64;

    app.layer.save();
    app.layer.fillStyle(this.cloudsPattern);
    app.layer.translate(offset, offset);
    app.layer.rect(-offset, -offset, app.width, app.height);
    app.layer.fill();
    app.layer.restore();

    var offset = this.delta * 32;

    app.layer.save();
    app.layer.fillStyle(this.cloudsPattern2);
    app.layer.translate(offset, offset);
    app.layer.rect(-offset, -offset, app.width, app.height);
    app.layer.fill();
    app.layer.restore();
*/
    // app.layer.posterize(4);
    // app.layer.drawImage(app.images.model, 0, 0);

    // app.layer.drawImage(this.huj, 0, 0);

    //app.layer.polygon(this.huj);
    //app.layer.stroke();



    /* foggy */

    /*
    app.layer.save();
    app.layer.globalCompositeOperation("hard-light");
    app.layer.a(0.2);
    app.layer.clear("#fa0");
    app.layer.restore();
    */


    if (this.filter) {
      app.layer.save();
      app.layer.globalCompositeOperation("color-dodge");
      // app.layer.a(0.5);
      //  app.layer.clear("#a00");
      app.layer.globalCompositeOperation("hard-light");
      //app.layer.a(0.7).clear("#004");
      app.layer.globalCompositeOperation("hue");
      app.layer.a(0.75).clear("#fa5");

      app.layer.restore();

      app.layer.drawImage(app.scanlines, 0, 0);
    }

    this.gui.render(0, 0, delta);

    this.renderCursor(delta);


  },

  renderMoon: function(delta) {

    if (!this.moon) {
      this.moon = new ENGINE.Animation();

      this.moon.set("moon", {
        x: app.width - 300,
        y: 400,
        loop: true,
        alpha: 0.1,
        scale: 1.0,
        color: "#f80",
        blending: "lighter"
      });
    }

    this.moon.step(delta);

    this.moon.y = app.height - 200;
    this.moon.scale = 1 / app.game.scale;
    this.moon.render(delta);
    this.moon.y -= 20;
    this.moon.scale *= 0.8;
    this.moon.render(delta);
    this.moon.y -= 20;
    this.moon.scale *= 0.8;

    this.moon.render(delta);

  },

  touchmove: function(e) {
    this.gui.mousemove(e);
  },

  touchend: function(e) {
    this.gui.mouseup(e);
  },

  touchstart: function(e) {
    this.gui.mousedown(e);
  },

  mousemove: function(e) {
    this.gui.mousemove(e);
  },

  mouseup: function(e) {
    this.gui.mouseup(e);
  },

  mousedown: function(e) {
    this.gui.mousedown(e);
  },

  proxy: function(name, e) {

    if (e && e.stop) return;

    for (var i = 0; i < this.modules.length; i++) {
      if (this.modules[i][name]) this.modules[i][name](e);
    }

  },

  updateFreeCamera: function(delta) {

    var scaleDelta = this.scale - this.desiredScale;

    if (scaleDelta) {
      // this.cameraPoint.x += (this.cursor.x - this.cameraPoint.x) * delta / this.scale;
      // this.cameraPoint.y += (this.cursor.y - this.cameraPoint.y) * delta / this.scale;
    }

    this.scale = Utils.moveTo(this.scale, this.desiredScale, delta * 2);

    this.cameraWidth = app.width / this.scale;
    this.cameraHeight = app.height / this.scale;

    var follow = this.cameraPoint;

    var followX = (follow.x) - this.cameraWidth / 2;
    var followY = (follow.y) - this.cameraHeight / 2;

    // if (!this.focusPoint && this.focusPoints.length) this.focusPoint = this.focusPoints.pop();

    if (this.focusPoint) {
      if (this.focusPoint._remove) this.focusPoint = false;
      var distance = Utils.distance(follow, this.focusPoint);
      var direction = Utils.lookAt(follow, this.focusPoint);
      var max = app.width / this.scale;
      var mod = Math.max(0, 1 - distance / (max));
      followX += Math.cos(direction) * Utils.limit(distance, 0, max) * mod;
      followY += Math.sin(direction) * Utils.limit(distance, 0, max) * mod;
    }

    var followDistance = Utils.distance(followX, followY, this.x, this.y);

    var followSpeed = Math.max(16, followDistance * 5) * 2;

    if (this.scale !== this.desiredScale) {
      followSpeed = followDistance * (1 / delta);
    }

    var followAngle = Utils.atanxy(followX - this.x, followY - this.y);

    if (followDistance > 10) {
      this.x += Math.cos(followAngle) * followSpeed * delta;
      this.y += Math.sin(followAngle) * followSpeed * delta;
    }

    if ((this.shakingLifespan -= delta) > 0) {
      this.x += Utils.random(-this.shakingAmplitude, this.shakingAmplitude);
      this.y += Utils.random(-this.shakingAmplitude, this.shakingAmplitude);
    } else {
      this.shakingAmplitude = 0;
    }

  },

  updateFollowCamera: function(delta) {

    this.desiredScale = 0.65;

    this.scale = Utils.moveTo(this.scale, this.desiredScale, delta);

    this.cameraWidth = app.width / this.scale;
    this.cameraHeight = app.height / this.scale;

    var follow = this.follow;

    if (this.invokingDialogue) var follow = this.invokeDialogueFrom;

    // var followX = follow.x + (app.mouse.x - app.centerX) * 0.5 - this.cameraWidth / 2;
    // var followY = follow.y + (app.mouse.y - app.centerY) * 0.5 - this.cameraHeight / 2;

    var followX = (follow.x) - this.cameraWidth / 2;
    var followY = (follow.y - follow.z) - this.cameraHeight / 2;

    if (false) {
      followX += Math.cos(follow.direction) * (500);
      followY += Math.sin(follow.direction) * (500);
    }

    if (follow.force) {
      // followX += Math.cos(follow.forceDirection) * (follow.force);
      // followY += Math.sin(follow.forceDirection) * (follow.force);

      // followX += Math.cos(follow.direction) * (follow.velocity);
      // followY += Math.sin(follow.direction) * (follow.velocity);
    }

    if (follow.velocity) {
      followX += Math.cos(follow.direction) * (follow.velocity / 2);
      followY += Math.sin(follow.direction) * (follow.velocity / 2);
    }

    if (follow.target) {
      var max = app.height / this.scale;
      var mod = Math.max(0, 1 - follow.targetDistance / (max));
      followX += Math.cos(follow.targetDirection) * Utils.limit(follow.targetDistance, 0, max) * mod;
      followY += Math.sin(follow.targetDirection) * Utils.limit(follow.targetDistance, 0, max) * mod;
    }

    if (this.focusPoint) {
      if (this.focusPoint._remove) this.focusPoint = false;
      var distance = Utils.distance(follow, this.focusPoint);
      var direction = Utils.lookAt(follow, this.focusPoint);
      var max = app.width / this.scale;
      var mod = Math.max(0, 1 - distance / (max));
      followX += Math.cos(direction) * Utils.limit(distance, 0, max) * mod;
      followY += Math.sin(direction) * Utils.limit(distance, 0, max) * mod;
    }


    // var followSpeed = (this.follow.force + this.follow.velocity) || ;
    /*
    if (this.follow.destination && (follow.velocity + follow.force) >= follow.maxVelocity * 0.5) {
      var distance = utils.distance(follow.destination, follow);
      var distanceX = Math.min(distance, cameraWidth / 3);
      var distanceY = Math.min(distance, cameraHeight / 3);

      followX += Math.cos(follow.direction) * (distanceX);
      followY += Math.sin(follow.direction) * (distanceY);
    }
*/
    var followDistance = Utils.distance(followX, followY, this.x, this.y);

    var followSpeed = Math.min(2000, followDistance); //Math.max(followDistance, follow.velocity + (follow.force  || 0) | 0);

    var followAngle = Utils.atanxy(followX - this.x, followY - this.y);

    if (followDistance > 10) {
      this.x += Math.cos(followAngle) * followSpeed * delta;
      this.y += Math.sin(followAngle) * followSpeed * delta;
    }

  },

  error: function(error, args) {

    this.proxy("globalevent", Utils.extend({
      event: "error",
      error: error
    }, args));

  },

  useCard: function(args) {

    var cardData = CARDS[args.card];

    var player = this.players[args.team];

    if (player.moves <= 0) return "not-enough-moves";
    if (player[cardData.resource] < cardData.cost) {

      app.game.error("not-enough-resources", {
        resource: cardData.resource,
        player: player
      })

      return "not-enough-" + cardData.resource;
    }

    player.removeResources(cardData.resource, cardData.cost);
    player.moves--;

    if (cardData.use) cardData.use(args);
    if (cardData.buff) args.target.buffs.add(cardData.buff);
    if (cardData.spawn) {

      var count = cardData.spawnCount || 1;
      var spawnPosition = cardData.spawnPosition || "home";
      var direction = Math.random() * 6;

      for (var i = 0; i < count; i++) {
        var pos = Utils.sincos(i * 50);

        if (spawnPosition === "home") {
          pos.x += player.home.x;
          pos.y += player.home.y;
        } else if (spawnPosition === "target") {
          pos.x += args.target.x;
          pos.x += args.target.y;
        }

        var ship = app.game.spawn({
          x: pos.x,
          y: pos.y,
          key: cardData.spawn,
          team: player.team,
          home: player.home,
          direction: direction
        });



        ship.setTarget(args.target);

      }


    }

    player.cards[args.card].count--;

    ENGINE.Modules.call(this, "cardused", args);

    this.proxy("globalevent", {
      event: "cardUsed",
      args: args,
      player: player,
      key: args.card
    });

    this.entities.add(ENGINE.DropCardEffect, {
      x: args.target.x,
      y: args.target.y - args.target.z,
      card: args.card,
      player: player
    });

    if (cardData.animation) {
      this.add(ENGINE.Animation, {
        attachedTo: args.target,
        loop: false,
        scale: args.animationScale || 1,
        color: player.color
      }).set("tinker");
    }

    if (cardData.sound) app.playSound(cardData.sound);

    return true;

  },

  spawn: function(args) {

    var entity = app.game.entities.add(ENGINE.Ship, {
      color: defs.teamsColors[args.team],
      ai: true
    }, args);

    return entity;

  },

  shake: function(duration, amplitude) {

    amplitude = amplitude || 10;

    if (this.shakingLifespan < duration) this.shakingLifespan = duration;
    if (this.shakingAmplitude < amplitude) this.shakingAmplitude = amplitude;
  },

  addResources: function(team, resource, amount) {
    this.players[team].addResources(resource, amount);
  },

  keydown: function() {}

};