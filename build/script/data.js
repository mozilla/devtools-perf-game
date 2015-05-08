var defs = {

  teamColor: ["#00aaff", "#ff4444"],

  sprites: {
    "fighter-a": [25, 235, 17, 13],
    "bomber-a": [50, 235, 23, 20],
    "satellite-a": [80, 235, 32, 20],
    "cruiser-a": [119, 222, 19, 43],

    "fighter-b": [25, 282, 17, 13],
    "bomber-b": [50, 282, 23, 20],
    "satellite-b": [80, 282, 32, 20],
    "cruiser-b": [119, 269, 19, 43]
  },

  ships: {

    "fighter": {

      preference: ["small"],
      cooldown: 0.5,
      damage: 1,
      hp: 10,
      sprite: [25, 235, 17, 13],
      price: 1

    },

    "bomber": {

      preference: ["big"],
      damage: 4,
      cooldown: 2,
      hp: 20,
      sprite: [50, 235, 23, 23],
      price: 5


    },

    "satellite": {

      orbit: true,
      hp: 20,
      cooldown: 0.5,
      damage: 2,
      sprite: [80, 235, 32, 20]

    },

    "destroyer": {

      hp: 50,
      firerate: 1,
      speed: 60,
      multishoot: 4,
      rotationSpeed: 2,
      damage: 1,
      preference: "small",
      sprite: [119, 225, 18, 37],
      price: 20


    },

    "cruiser": {

      hp: 50,
      firerate: 8,
      speed: 60,      
      rotationSpeed: 2,
      damage: 10,
      preference: "big",
      sprite: [145, 222, 19, 43],
      price: 20


    }

  },

  tooltips: {
    "planet": "Planet produces ships. Keep cursor within for better ships. Each level cost 1 resource. Move cursor away to spawn ship.",
    "fighter": "Fighter cannot attack planets",
    "bomber": "Bomber can deal damage to planets, satellites and cruisers. They are good against cruisers.",
    "satellite": "Satellite has a great firepower, but cannot leave the orbit",
    "cruiser": "Cruiser is a superior anti-ship destroyer but it cannot attack planets",
    "asteroid": "Mine asteroid to get resources",
    "resource": "Collect resources to build ships"
  }

};