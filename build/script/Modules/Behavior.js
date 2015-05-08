ENGINE.Behavior = {

  create: function(object) {

    if (!object.behavior) object.behavior = {};
    if (!object.behavior.data) object.behavior.data = {};

  },

  set: function(object, sequence) {

    object.behavior.sequence = sequence;

  },

  step: function(object, delta, sequence) {

    if (!sequence) sequence = object.behavior.sequence;

    var data = object.behavior.data;

    for (var i = 0; i < sequence.length; i++) {

      var current = sequence[i];

      if (typeof current === "object") {

        var result = this.step(object, delta, current);

      } else if (current === "if") {

        var condition = defs.actions[sequence[1]];

        if (condition(object, delta, data)) {

          var result = true;
          this.step(object, delta, sequence[2]);

        } else {

          var result = false;

        }

        return result;

      } else {

        var action = defs.actions[current];
        var config = object.behavior[current];

        if(!config) config = object.behavior[current] = { };
        
        var result = action(object, delta, data, config);

        object.behavior.currentKey = current;

        if (result) {

          object.behavior.action = action;

        }

      }

      if (result) {

        return result;
      }
    }
  }

};