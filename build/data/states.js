defs.states = { };

defs.states.fugu = {

  idle: {

    enter: function(fish) {
      fish.sprite.set(defs.animations.fuguIdle);
      this.shootTimeout = 1;
    },

    step: function(fish, delta) {

      this.shootTimeout -= delta;

      if ((this.shootTimeout -= delta) <= 0) this.parent.set("pumpingUp");

    }

  },

  pumpingUp: {

    enter: function(fish) {
      fish.sprite.set(defs.animations.fuguPumpingUp, {
        loop: false
      });

    },

    step: function(fish, delta) {
      if (fish.sprite.finished) this.parent.set("pumpedUp");

    }

  },

  pumpedUp: {

    enter: function(fish) {
      fish.sprite.set(defs.animations.fuguPumpedUp);

      this.shootTimeout = 1;

    },

    step: function(fish, delta) {

      if ((this.shootTimeout -= delta) <= 0) this.parent.set("releasing");

    }

  },

  releasing: {

    enter: function(fish) {

      fish.sprite.set(defs.animations.fuguReleasing, {
        loop: false
      });

      fish.shoot();

    },

    step: function(fish, delta) {

      if (fish.sprite.finished) this.parent.set("idle");

    }
  }

};