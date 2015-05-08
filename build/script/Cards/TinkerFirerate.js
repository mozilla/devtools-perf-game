CARDS.tinkerFirerate = {

  tooltip: "50% faster firerate",

  sound: "screw",

  animation: "tinker",
  animationScale: 2,

  radius: 64,

  cost: 2,
  resource: "cadets",

  accept: {
    entities: [{
      group: "ships",
      enemy: false
    }]
  },

  image: [633, 324, 86, 96],

  buff: {
    multiply: {
      firereate: 1.5    
    }
  }

};