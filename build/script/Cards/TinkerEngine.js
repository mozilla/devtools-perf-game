CARDS.tinkerEngines = {

  tooltip: "+50% speed and maneuverability",

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

  image: [439, 324, 86, 96],

  buff: {
    multiply: {
      maxVelocity: 2,
      rotationSpeed: 2      
    }
  }

};

defs.buffs.multiply = function(object, args) {
    
    for (var key in args) {     
      object[key] *= args[key];
    }

};