CARDS.bomber = {

  tooltip: "Bombing enemy island",

  radius: 64,

  cost: 5,
  resource: "cadets",

  removeIfOutOfAmmo: true,

  image: [121, 324, 86, 96],

  counters: ["interceptor", "fighter"],

  spawn: "bomber",

  accept: {
    entities: [{
      group: "islands",
      enemy: true
    }]
  }
};