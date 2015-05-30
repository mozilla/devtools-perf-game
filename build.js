require('shelljs/global');

var files = [

];

var builds = {

  "script.js": [

    "script/data.js",    
    "script/Utils.js",

    "script/Playground.js",
    "script/Playground.Scanlines.js",
    "script/Playground.SoundOnDemand.js",

    "script/Engine.js",
    "script/Benchmark.js",
    "script/BackgroundStars.js",
    "script/CircleExplosion.js",
    "script/Ship.js",
    "script/Bullet.js",
    "script/Asteroid.js",
    "script/Cursor.js",
    "script/Resource.js",
    "script/Button.js",
    "script/Particle.js",
    "script/Planet.js",
    "script/Game.js",
    "script/Powerup.js",
    "script/TextOut.js",
    "script/Trail.js",
    "script/Missile.js",
    "script/Gameover.js",

    "script/Main.js",

    "script/bottlenecks.js"

  ]

};

for (var key in builds) {

  var extra = builds[key];

  var all = files.concat(extra)
  var output = "";

  for (var i = 0; i < all.length; i++) {


    output += "\n\n/* file: " + all[i] + " */\n\n";
    output += cat(all[i]);

  }

  output.to("" + key);

}