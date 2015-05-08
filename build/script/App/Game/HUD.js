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

  postrender: function(delta) {

    this.renderResources(delta);

  },

  render: function(delta) {

    /* navigation */

    var group = app.game.entities.groups.navigables;

    for (var i = 0; i < group.length; i++) {

      var entity = group[i];

      this.renderNav(entity, entity.color);

    }



    /* target */

    /*
        if (player.target && player.targetDistance > 200) {
          var pos = Utils.sincos(player.targetDirection, 200);
          this.targetArrow.color = "#fff";
          player.target.color;
          this.targetArrow.roofColor = player.target.color;
          this.targetArrow.render(app.layer, pos.x + player.x, pos.y + player.y, player.z, player.targetDirection, 0, 0);
        }
    */
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

    var player = app.game.cursor;

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

  },

  renderResource: function(x, y, amount, color, resource) {

    var cardData = app.game.cards.cardData;



    if (cardData && cardData.resource === resource) {

      if (cardData.cost > app.game.player[cardData.resource]) {
        // y += app.game.sinmod(0.25, 2) * 4;
        x += app.game.sinmod(0.15, 2) * 4;
      }      else
        y += app.game.sinmod(1, 2) * 4;

    }

    app.layer.fillStyle(color).fillRect(x, y, 64, 32);
    app.layer.font(32);
    app.layer.fillStyle("#fff").textAlign("center").fillText(amount, x + 32, y + 16 - app.layer.fontHeight() / 2);
  },

  renderResources: function(delta) {
    var x = app.game.cards.gui.x;
    var y = app.game.cards.gui.y - 32;

    if (!this.resourceNotes) {
      var noteHandle = {
        width: 64
      };

      this.resourceNotes = {

        blocks: new ENGINE.StackableNotes(noteHandle, {
          offsetX: 0,
          background: defs.resourcesBackgrounds.blocks
        }),

        cadets: new ENGINE.StackableNotes(noteHandle, {
          offsetX: 64,
          background: defs.resourcesBackgrounds.cadets
        }),

        energy: new ENGINE.StackableNotes(noteHandle, {
          offsetX: 128,
          background: defs.resourcesBackgrounds.energy
        })
      }
    }

    for (var key in this.resourceNotes) {
      this.resourceNotes[key].step(delta);
      this.resourceNotes[key].render(x, y);
    }



    this.renderResource(x + 0, y, app.game.player.blocks, defs.resourcesBackgrounds.blocks, "blocks");
    this.renderResource(x + 64, y, app.game.player.cadets, defs.resourcesBackgrounds.cadets, "cadets");
    this.renderResource(x + 128, y, app.game.player.energy, defs.resourcesBackgrounds.energy, "energy");

  },

  globalevent: function(e) {
    switch (e.event) {

      case "error":

        if (e.player === app.game.player && e.error === "not-enough-resources") {
          this.resourceNotes[e.resource].add("OUT", "#fa0", "#000");
        }

        break;

      case "resources":

        if (e.player.team !== app.game.player.team) return;

        // this.resourceNotes[e.resource].add((e.change > 0 ? "+" : "") + e.change);

        if (e.change < 0) var background = "rgba(255,0,50,0.3)";
        else var background = "rgba(50,50,250,0.2)";

        this.resourceNotes[e.resource].add((e.change > 0 ? "+" : "") + e.change, "#fff", background);

        break;
    }
  }


};

app.game.modules.push(app.game.HUD);