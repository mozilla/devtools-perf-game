ENGINE.Planet = function(args) {

  Utils.extend(this, {

    radius: 48,
    hp: 30,
    max: 8,
    ships: 0

  }, args);

  this.lifetime = 0;

};

ENGINE.Planet.prototype = {

  constructor: ENGINE.Planet,

  type: "planet",

  sprite: [296, 198, 200, 200],


  applyDamage: function(damage, attacker) {

    this.hp--;

    if (this.hp <= 0) this.game.reset();

    app.sound.play("planetHit");


    this.game.add(ENGINE.CircleExplosion, {
      x: attacker.x,
      y: attacker.y,
      color: "#a04",
      radius: 32
    })

  },

  step: function(dt) {

    this.lifetime += dt;

  },

  spawnShip: function(type) {

    var ship = this.game.add(ENGINE.Ship, {
      x: this.x,
      y: this.y,
      type: type,
      team: 1,
      planet: this
    });

    this.ships++;

  },

  render: function() {

    app.layer.fillStyle("#a04").fillCircle(this.x, this.y, this.radius);
    app.layer.textAlign("center").font("bold 48px Arial").fillStyle("#fff").fillText(this.hp, this.x, this.y + 16);


  }

};