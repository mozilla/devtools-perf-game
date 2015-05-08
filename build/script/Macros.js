var MACROS = {};

MACROS.splash = function(args) {
  for (var i = 0; i < 3; i++) {
    app.game.entities.add(ENGINE.Trail, {
      zIndex: 0,
      color: "#fff",
      opacity: 0.2,
      fill: false,
      stroke: true,
      duration: 1 - i * 0.2,
      radius: 100,
      color: "#fff",
      radiusMod: "mod",
      gravity: 0,
      opacityMod: "negative",
      delta: 0.2,
      delay: 0.1 * i
    }, args);
  }
};


MACROS.cubes = function(args) {
  for (var i = 0; i < args.count; i++) {
    app.game.entities.add(ENGINE.Cube, {
      velocity: Utils.random(10, 100),
      direction: Math.random() * 6,
      duration: 0.5 + Math.random() * 2,
      size: Utils.random(4, 10)
    }, args);
  }
}