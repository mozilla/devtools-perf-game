app.game.playerController = {

  pressed: {},

  map: {


  },

  ai: {
    press: function() {
      app.game.player.ai = false;
      app.game.player.player = true;
      app.game.player.destination = false;
      app.game.player.maxVelocity = app.game.player.velocity = 400;
    }
  },

  filter: {
    press: function() {
      app.game.filter = !app.game.filter;
    }
  },

  up: {
    set: function(state) {
      app.game.player.accelerate = state;
      app.game.player.brake = !state;
    }
  },

  down: {
    set: function(state) {
      // app.game.player.brake = state;
    }
  },

  left: {

    set: function(state) {
      app.game.player.left = state;
    }

  },


  right: {

    set: function(state) {
      app.game.player.right = state;
    }

  },

  superRotation: function(side, state) {

    if (!state) {

      if (side < 0) {
        app.game.player.superLeft = false;
      } else {
        app.game.player.superRight = false;
      }

    } else {

      app.game.player.dash();

      if (side < 0) {
        app.game.player.superLeft = true;
      } else {
        app.game.player.superRight = true;
      }

    }

  },

  strafeLeft: {

    set: function(state) {

      if (app.game.player.type === "plane") {

        this.superRotation(-1, state);

      }

      app.game.player.aimLeft(state);
      this.strafe(-1, state);

    }

  },

  strafeRight: {

    set: function(state) {
      if (app.game.player.type === "plane") {

        this.superRotation(1, state);

      }

      app.game.player.aimRight(state);
      this.strafe(+1, state);
    }

  },

  strafe: function(direction, state) {
    if (app.game.player.turret && state && app.game.player.target) app.game.player.unsetTarget();
  },

  fire: {

    press: function() {
      app.game.player.lockTarget();
      app.game.player.firing = true;
    },

    release: function() {
      app.game.player.firing = false;
    }

  },

  /* INTERNAL LOGIC */

  create: function() {

    this.keymap = {};

    for (var func in this.map) {

      var keys = this.map[func];

      for (var i = 0; i < keys.length; i++) {
        this.keymap[keys[i]] = func;
      }

    }

  },

  step: function(delta) {

    for (var key in this.pressed) {
      if (this[key] && this[key].hold) this[key].hold(delta);
    }

  },

  press: function(key) {

    var func = this.keymap[key];

    if (!func) return;

    this.pressed[func] = true;

    if (this[func] && this[func].press) this[func].press.call(this);
    if (this[func] && this[func].set) this[func].set.call(this, true);

  },

  release: function(key) {

    var func = this.keymap[key];

    if (!func) return;

    delete this.pressed[func];

    if (this[func] && this[func].release) this[func].release.call(this);
    if (this[func] && this[func].set) this[func].set.call(this, false);

  },



  gamepaddown: function(e) {

    this.press(e.button);

  },

  gamepadup: function(e) {

    this.release(e.button);

  },


  keydown: function(e) {

    this.press(e.key);

  },

  keyup: function(e) {

    this.release(e.key);

  }

};

app.game.playerController.create();
app.game.modules.push(app.game.playerController);