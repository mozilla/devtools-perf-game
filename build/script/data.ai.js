defs.ai = {

  idle: {

    enter: function(cursor) {

      cursor.moveTo(app.center);

    },

    step: function(cursor, dt) {

      /* air superiority */

      var shipType = false;
      var requiredResources = 0;


      if(cursor.getAirPower() < cursor.game.player.getAirPower()) {
        shipType = "fighter";
      } else {
        shipType = "bomber";
      }

      requiredResources = (cursor.planet.queue.indexOf(shipType) + 1);

      if (cursor.resources < requiredResources) {

        cursor.ai.set("mine");

      } else {

        cursor.aiShipType = shipType;
        cursor.aiShipQueue = requiredResources - 1;
        cursor.ai.set("build");

      }

    }

  },

  collectCoin: {

    enter: function(cursor) {

      cursor.aiCoin = cursor.findCoin();

      cursor.moveTo(cursor.aiCoin);

    },

    step: function(cursor, dt) {

      if (!cursor.aiCoin) return cursor.ai.set("idle");
      if (cursor.aiCoin.dead) cursor.ai.set("idle");

    }

  },

  mine: {

    enter: function(cursor) {

      cursor.aiAsteroid = cursor.findAsteroid();

      cursor.moveTo(cursor.aiAsteroid);

    },

    step: function(cursor, dt) {

      if (cursor.aiAsteroid.collectibles) cursor.ai.set("collectCoin");

    }

  },

  build: {

    enter: function(cursor) {

      cursor.moveTo(cursor.planet);

    },

    step: function(cursor, dt) {

      console.log(cursor.aiShipQueue, cursor.planet.queueIndex)

      if (cursor.planet.queueIndex >= cursor.aiShipQueue) cursor.ai.set("idle");

    }

  }

};