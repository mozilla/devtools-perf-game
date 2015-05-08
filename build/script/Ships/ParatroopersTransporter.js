defs.ships.paratroopersTransporter = {
  type: "plane",
  image: "bomber",
  radius: 50,
  frontPropeller: true,
  height: 7,

  maxVelocity: 50,
  maxHull: 20,

  rotationSpeed: 0.5,

  antiIsland: "paratroopers",

  behavior: {
    interceptTarget: {
      slowDown: true
    }
  },

  defaultBehavior: ["interceptTarget", "getTarget", "returnHome"],

  removeIfOutOfAmmo: true
  
};