defs.ships.bomber = {
  type: "plane",
  image: "bomber",
  radius: 50,
  frontPropeller: true,
  height: 7,

  maxVelocity: 50,
  maxHull: 5,

  rotationSpeed: 0.5,

  antiIsland: "bombs",

  removeIfOutOfAmmo: true,

  behavior: {
    interceptTarget: {
      slowDown: true
    }
  },

  defaultBehavior: ["interceptTarget", "getTarget", "returnHome"]
};