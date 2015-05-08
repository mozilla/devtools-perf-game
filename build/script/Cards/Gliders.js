CARDS.gliders = {

  tooltip: "Spawn 3 gliders",

  radius: 64,

  cost: 2,
  resource: "cadets",

  counters: ["gliders"],

  accept: {
    entities: [{
      group: "ships",
      enemy: true
    }]
  },

  image: [121, 565, 86, 96],

  spawn: "glider",
  spawnCount: 3,
  spawnPosition: "home"



};