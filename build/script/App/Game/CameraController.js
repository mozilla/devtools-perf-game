app.game.cameraController = {

  start: function() {

    this.minScale = app.width / (Utils.distance(app.game.players[1].home, app.game.players[2].home) + 500);
    app.game.desiredScale = this.minScale;

    app.game.cameraPoint.x = app.game.players[1].home.x + Math.abs(app.game.players[1].home.x - app.game.players[2].home.x) / 2;
    app.game.cameraPoint.y = app.game.players[1].home.y + Math.abs(app.game.players[1].home.y - app.game.players[2].home.y) / 2;

  },

  mousedown: function(e) {
    this.startX = app.game.cameraPoint.x;
    this.startY = app.game.cameraPoint.y;

    this.mouseStartX = app.mouse.x;
    this.mouseStartY = app.mouse.y;

    if (e.button === "right") {
      app.game.cursor.key = "move";
      app.mouse.lock();

    }
  },

  mousemove: function(e) {
    if (app.mouse.right) {
      var deltaX = e.movementX;
      var deltaY = e.movementY;

      app.game.cameraPoint.x -= deltaX * 4;
      app.game.cameraPoint.y -= deltaY * 4;
    }
  },

  mouseup: function(e) {

    if (e.button === "right") {
      app.mouse.release();
      app.game.cursor.key = "default";
    }

  },
  mousewheel: function(e) {

    app.game.desiredScale = Utils.limit(app.game.desiredScale + e.delta * 0.1, this.minScale, 1);

  }

};

app.game.modules.push(app.game.cameraController);