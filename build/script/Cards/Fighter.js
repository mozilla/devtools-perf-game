CARDS.fighter = {

  tooltip: "Intercept enemy air forces",

  radius: 64,

  resource: "cadets",
  cost: 5,

  image: [121, 185, 86, 96],

  counters: ["interceptor", "fighter"],

  spawn: "fighter",

  accept: {
    entities: [{
      group: "ships",
      enemy: true
    }]
  },
};