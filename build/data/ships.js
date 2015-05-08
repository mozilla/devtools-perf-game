defs.ships = {
  
    "drone": {
    type: "plane",
    image: "plane",
    radius: 10,
    rotationSpeed: 3,
    height: 10
  },

  "boat": {
    type: "boat",
    image: "boat",
    radius: 50,
    height: 40,

    antiShip: true,
    antiIsland: true,
    antiPlane: true
  },



  "stealth": {
    type: "plane",
    image: "stealth",
    radius: 30,
    height: 20

  },

  "heli": {
    type: "plane",
    image: "heli",
    radius: 30,
    topPropeller: true,
    height: 10
  },

  "cargoHelicopter": {
    type: "plane",
    image: "heli",
    radius: 30,
    topPropeller: true,
    height: 10,
    maxVelocity: 100,
    defaultBehavior: ["returnResources", "getCargo", "findCargo"],
    landUponDestination: true
  },

  "sub": {
    type: "sub",
    image: "chimney",
    radius: 30,
    periscope: true,
    height: 10

  }

};