var Utils = {

  extend: function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  },

  distance: function(a, b) {

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);

  },

  nearest: function(from, entities) {

    var min = -1;
    var result = null;

    for (var i = 0; i < entities.length; i++) {

      var to = entities[i];

      if (from === to) continue;

      var distance = this.distance(from, to);

      if (distance < min || min < 0) {
        min = distance;
        result = to;
      }

    }

    return result;
  },

  circWrap: function(val) {

    return this.wrap(val, 0, Math.PI * 2);

  },

  wrap: function(value, min, max) {

    if (value < min) return max + (value % max);
    if (value >= max) return value % max;
    return value;

  },

  wrapTo: function(value, target, max, step) {

    if (value === target) return target;

    var result = value;

    var d = this.wrappedDistance(value, target, max);

    if (Math.abs(d) < step) return target;

    result += (d < 0 ? -1 : 1) * step;

    if (result > max) {
      result = result - max;
    } else if (result < 0) {
      result = max + result;
    }

    return result;

  },

  circWrapTo: function(value, target, step) {

    return this.wrapTo(value, target, Math.PI * 2, step);

  },

  circDistance: function(a, b) {

    return this.wrappedDistance(a, b, Math.PI * 2);

  },

  wrappedDistance: function(a, b, max) {

    if (a === b) return 0;
    else if (a < b) {
      var l = -a - max + b;
      var r = b - a;
    } else {
      var l = b - a;
      var r = max - a + b;
    }

    if (Math.abs(l) > Math.abs(r)) return r;
    else return l;

  },

  random: function(a, b) {

    if (a === undefined) {

      return Math.random();

    } else if (b !== undefined) {

      return Math.floor(a + Math.random() * Math.abs(b - a + 1));

    } else {

      if (a instanceof Array) return a[(a.length + 1) * Math.random() - 1 | 0];
      else {
        return a[this.random(Object.keys(a))];
      }

    }

  },

  sincos: function(angle, radius) {

    if (arguments.length === 1) {
      radius = angle;
      angle = Math.random() * 6.28;
    }

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  },

  ground: function(num, threshold) {

    return (num / threshold | 0) * threshold;

  },

  shuffle: function(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }



};


_.defaults(Utils, _);