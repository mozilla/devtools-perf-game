ENGINE.TimeFactors = {


  create: function(o) {

    o.timeFactors = {};

  },

  step: function(o, delta) {

    o.timeFactor = 1;

    for (var i in o.timeFactors) {
      o.timeFactor = Math.min(o.timeFactor, o.timeFactors[i]);

      if (o.timeFactors[i] === 1.0) delete o.timeFactors[i];
    }

    return delta * o.timeFactor;

  },

  set: function(o, factor, value) {

    o.timeFactors[factor] = value;

  }

};