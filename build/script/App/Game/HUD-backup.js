app.game.HUD = {

  create: function() {

    var arrow = FLAT.polygonFromImage(app.images["models/arrow"]);

    this.targetArrow = new FLAT.Model({
      surface: arrow,
      height: 2,
      scale: 32,
      color: "#fff",
      shadow: false,
      childrenShadow: true,
      sides: false
    });

  },

  step: function() {

    if (!this.created) {
      this.create();

      this.created = true;
    }

  },

  render: function() {

    var player = app.game.player;

    app.layer.lineWidth(8);

    if (player.targetAhead) {
      app.layer.strokeStyle(player.targetAhead.color).strokeCircle(player.targetAhead.x, player.targetAhead.y - player.targetAhead.z, 48 + app.game.sinmod(0.5) * 16);
    }

    if (player.target) {
      // app.layer.strokeStyle("#fff").strokeCircle(player.target.x, player.target.y - player.target.z, 40 + app.game.sinmod(0.5) * 16);
    }

    /* velocity */

    if (app.game.player.player) {
      app.layer.save();
      app.layer.translate(player.x, player.y - player.z);
      app.layer.rotate(player.direction + Math.PI / 2);
      var h = 200 * player.velocity / player.maxVelocity;
      app.layer.a(0.3).fillStyle(player.color).fillRect(-4, -h, 8, h * 2);
      app.layer.restore();
    }
    /* aiming */

    /*
        if (app.game.player.player) {
          var aimPosition = player.getAimPosition();

          app.layer.beginPath();
          app.layer.strokeStyle("#4aa");
          //app.layer.moveTo(x, y);
          var range = 300;
          var firingArc = 0.2;
          app.layer.arc(aimPosition.x, aimPosition.y - player.z, 40, player.direction + player.aimDirection + firingArc, player.direction + player.aimDirection - firingArc, true);
          app.layer.arc(aimPosition.x, aimPosition.y - player.z, range, player.direction + player.aimDirection - firingArc, player.direction + player.aimDirection + firingArc);
          app.layer.closePath();
          app.layer.a(0.5).stroke().a(1);
        }

        */
    /* navigation */

    var group = app.game.entities.groups.targetable;

    for (var i = 0; i < group.length; i++) {
      var entity = group[i];
      if (entity.player) continue;
      this.renderNav(entity, entity.color);
    }



    /* target */

    if (player.target && player.targetDistance > 200) {
      var pos = Utils.sincos(player.targetDirection, 200);
      this.targetArrow.color = "#fff";
      player.target.color;
      this.targetArrow.roofColor = player.target.color;
      this.targetArrow.render(app.layer, pos.x + player.x, pos.y + player.y, player.z, player.targetDirection, 0, 0);
    }

  },

  getNavline: function(color) {

    if (!color) return app.images.navline;
    if (!this.navlines) this.navlines = {};

    if (!this.navlines[color]) {
      this.navlines[color] = cq.temp(app.images.navline).blend(color, "color", 1.0).cache();
    }

    return this.navlines[color];
  },

  renderNav: function(o, color) {

    var player = app.game.player;

    if (o.ignoreNav) return;
    if (o.navicon === false) return;
    if (o.inView) return;


    var navRadius = app.height / 3 | 0;

    var sx = player.x;
    var sy = player.y - player.z;

    var distance = Utils.distance(player, o);
    //    if(distance < 400) return;
    var radius = Math.min(navRadius, navRadius * (distance / 3000));

    var angle = Utils.ground(Utils.lookAt(player, o), 0.1);
    var x = sx + Math.cos(angle) * radius;
    var y = sy + Math.sin(angle) * radius;
    var s = 1;

    app.layer.save();
    app.layer.translate(x, y);
    app.layer.rotate(angle + 3.14 / 2);
    app.layer.scale(1.0, (radius / 128) * 0.5);
    app.layer.drawImage(this.getNavline(o.color), 0, 0);
    //app.layer.fillStyle("#fff").fillCircle(20, 0, 8);

    app.layer.restore();


    // var icon = defs.navicons[o.navicon];
    // app.layer.drawSprite(this.getNavicons(o.color), icon, x - icon[2] * s / 2 | 0, y - icon[3] * s / 2 | 0, s);

    app.layer.fillStyle(color).fillCircle(x, y, 8);

  }


};

// app.game.modules.push(app.game.HUD);