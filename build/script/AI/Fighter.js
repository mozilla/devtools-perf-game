Utils.extend(defs.actions, {

  returnHome: function(ship, delta, data) {

    if (!ship.home) return;

    if (Utils.distance(ship, ship.home) > 1000) {
      ship.destination = ship.home;
      return true;
    }

  },


  escort: function(ship, delta, data) {

    if (!ship.escort) return;

    if (Utils.distance(ship, ship.escort) > 1000) {
      ship.destination = ship.escort;
      return true;
    }

  },

  gainDistance: function(ship, delta, data) {

    if (!ship.target) return false;

    if (!data.init) {
      data.init = true;
      data.distanceGained = true;
      data.timeout = 10;
      data.timestamp = app.game.delta;
    }

    // if (ship.targetDistance > 1000) data.distanceGained = true;

    if (!data.distanceGained) {
      ship.destination = false;
      // ship.desiredDirection = data.desiredDirection + app.game.sinmod(3, 2, ship.random) * (1 / ship.rotationSpeed);
      ship.desiredDirection = ship.target.direction + app.game.sinmod(3, 2, ship.random) * (1 / ship.rotationSpeed) - Math.PI;

      data.timeout -= delta;

      if (app.game.delta - data.timestamp >= data.timeout || ship.targetDistance > 1000) {
        data.distanceGained = true;
        data.timeout = Utils.random(5, 15);
        data.timestamp = app.game.delta;
      }

    } else {
      // data.timeout -= delta;

      if (app.game.delta - data.timestamp >= data.timeout || ship.targetDistance < 100) {
        data.distanceGained = false;
        data.timeout = Utils.random(5, 10);
        data.timestamp = app.game.delta;
        data.desiredDirection = ship.targetDirection - Math.PI;
        ship.desiredDirection = Math.random() * 6
      }
    }


    return !data.distanceGained;

  },

  interceptTarget: function(ship, delta, data, config) {

    if (!ship.target) return false;

    var pos = Utils.sincos(app.game.delta, 100);

    ship.destination = {
      x: ship.target.x + pos.x,
      y: ship.target.y + pos.y
    }


    if (config.slowDown) ship.velocityMod = Math.min(1, 0.5 + 0.5 * ship.targetDistance / 200);
    return true;

  },

  getTarget: function(ship, delta, data) {

    if (ship.target) return;

    if (!ship.player) ship.setTarget(ship.getTarget());
  },

  avoidCollision: function(ship, delta, data) {

    if (!ship.target) return false;
    //    if (ship.type !== this.type) return false;

    var radius = ship.velocity;

    if (ship.targetDistance < radius) {
      var angle = Utils.circWrappedDistance(ship.targetDirection, ship.direction) * 3;

      var angle = ship.direction + Utils.circWrappedDistance(ship.direction, ship.targetDirection - Math.PI) * 0.3;

      ship.destination = {
        x: ship.x + Math.cos(angle) * radius,
        y: ship.y + Math.sin(angle) * radius
      }

      return true;
    }

  }

});