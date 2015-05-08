var CARDS = {

  fortification: {

    tooltip: "+10 to island's fortification",

    resource: "cadets",
    cost: 5,

    radius: 64,
    accept: "playerIsland",
    image: [234, 185, 86, 96],

    accept: {
      entities: [{
        group: "islands",
        enemy: false
      }]
    },

    use: function(args) {
      args.target.addFortification(10);
    }
  },


  soldiers: {

    tooltip: "+10 to island's defence",

    resource: "cadets",
    cost: 5,

    radius: 64,
    image: [234, 443, 86, 96],

    accept: {
      entities: [{
        group: "islands",
        enemy: false
      }]
    },

    use: function(args) {
      args.target.addSoldiers(10, args.team);
    }
  },


  cargoHelicopter: {

    tooltip: "gather resources",

    accept: "playerIsland",
    image: [234, 324, 86, 96],

    cost: 5,
    resource: "cadets",

    accept: {
      entities: [{
        group: "islands",
        enemy: false
      }]
    },

    use: function(args) {

      app.game.spawn({
        x: args.target.x,
        y: args.target.y,
        hull: 40,
        key: "cargoHelicopter",
        team: args.team,
        rotationSpeed: 2,
        home: args.target
      });

    },

    makesSense: function(player) {

      var a = Utils.filter(app.game.entities.groups.ships, {
        type: "cargoHelicopter",
        team: player.team
      }).length < 3;

      return a && app.game.entities.groups.crates.length > 0;

    }

  },

  missile: {

    tooltip: "launch ballistic missile against enemy island",

    resource: "cadets",
    cost: 5,

    radius: 64,

    counters: ["antiMissile"],

    accept: {
      entities: [{
        group: "islands",
        enemy: true
      }]
    },

    reject: {
      entitiesInRadius: [
        // { group: "ships", radius: 200, enemy: true }
      ]
    },

    image: [342, 185, 86, 96],

    use: function(args) {

      var base = app.game.entities.all({
        team: args.team
      }, "islands")[0];

      base.launchMissile(args.target);

    }
  },

  wrench: {

    tooltip: "repair 50% damage",

    radius: 64,

    cost: 5,
    resource: "cadets",

    accept: {
      entities: [{
        group: "ships",
        enemy: false
      }]
    },

    image: [439, 46, 86, 96],

    use: function(args) {

      args.target.repair(args.target.maxHull / 2 | 0);

    }
  },

  antiMissile: {

    tooltip: "destroy incoming missile",

    radius: 64,

    cost: 5,
    resource: "cadets",

    accept: {
      entities: [{
        group: "missiles",
        enemy: true
      }]
    },

    image: [342, 46, 86, 96],

    use: function(args) {

      var base = app.game.entities.all({
        team: args.team
      }, "islands")[0];

      base.launchAntiMissile(args.target);

    }
  }


};



/*

  podnies karte
  zaznacz dostepny rejon
  upuść kartę

*/