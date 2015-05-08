ENGINE.CARDSAI = {

  antiMissile: function(player) {

    var missile = Utils.find(app.game.entities.groups.missiles, function(e) {
      return e.team !== player.team && !e.countered;
    });

    return missile;

  },

  missile: function(player) {

    var island = Utils.find(app.game.entities.groups.islands, function(e) {
      return e.team !== player.team;
    });

    return island;

  },

  fortification: function(player) {
    var island = Utils.find(app.game.entities.groups.islands, function(e) {
      return e.team === player.team;
    });

    return island;
  },

  cargoHelicopter: function(player) {

    var island = Utils.find(app.game.entities.groups.islands, function(e) {
      return e.team === player.team;
    });

    return island;
  },

  interceptor: function(player) {

    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team !== player.team;
    });

    return ship;
  },

  fighter: function(player) {

    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team !== player.team;
    });

    return ship;
  },

  gliders: function(player) {

    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team !== player.team;
    });

    return ship;
  },

  bomber: function(player) {

    var island = Utils.find(app.game.entities.groups.islands, function(e) {
      return e.team !== player.team;
    });

    return island;
  },

  soldiers: function(player) {
    var island = Utils.find(app.game.entities.groups.islands, function(e) {
      return e.team === player.team;
    });

    return island;
  },

  tinkerEngines: function(player) {
    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team === player.team;
    });

    return ship;
  },

  tinkerFirerate: function(player) {
    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team === player.team;
    });

    return ship;
  },

  wrench: function(player) {
    var ship = Utils.find(app.game.entities.groups.ships, function(e) {
      return e.team === player.team;
    });

    return ship;
  }

};