CARDS.interceptor = {

  tooltip: "Intercept enemy air forces",

  radius: 64,

  resource: "cadets",
  cost: 2,

  image: [121, 185, 86, 96],

  counters: ["interceptor", "fighter"],

  spawn: "interceptor",

  accept: {
    entities: [{
      group: "ships",
      enemy: true
    }]
  }
  
};