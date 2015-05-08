CARDS.paratroopers = {

  tooltip: "Capture island",

  radius: 64,

  cost: 5,
  resource: "cadets",

  accept: {
    entities: [{
      group: "islands",
      enemy: true
    }]
  },

  image: [342, 443, 86, 96],

  // spawn: "paratroopersTransporter"

  use: function(args) {

    for (var i = 0; i < 10; i++) {

      var pos = Utils.sincos(100);
      pos.x += args.target.x;
      pos.y += args.target.y;

      app.game.enqueue(ENGINE.Paratrooper, {
        team: args.team,
        target: args.target,
        z: 200
      }, pos, i * 0.1 + Math.random() * 0.5);

    }

  }

};