var defs = {

  teamColor: ["#ff4444", "#00aaff"],

  frozenSprite: [193, 86, 11, 19],

  buttons: {
    "fighter": [4, 345, 64, 64],
    "speed": [132, 345, 64, 64],
    "life": [68, 345, 64, 64],
    "damage": [196, 345, 64, 64]
  },

  ships: {

    "fighter": {

      preference: ["small"],
      cooldown: 0.5,
      damage: 1,
      hp: 10,
      sprite: [407, 18, 32, 32],
      price: 1,
      speed: 80

    },

    "freelancer": {

      cooldown: 0.5,
      damage: 1,
      hp: 10,
      sprite: [367, 59, 31, 32],
      speed: 80
      
    },


    "creep1": {

      preference: ["big"],
      damage: 2,
      cooldown: 2,
      hp: 4,
      sprite: [444, 23, 22, 21],
      price: 5,
      speed: 60

    },

    "creep2": {

      preference: ["big"],
      damage: 2,
      cooldown: 2,
      hp: 10,
      sprite: [471, 23, 32, 23],
      price: 5,
      speed: 80

    },

    "creep3": {

      preference: ["big"],
      damage: 4,
      cooldown: 2,
      hp: 30,
      sprite: [503, 19, 32, 29],
      price: 5,
      speed: 50

    },

    "creep4": {

      preference: ["big"],
      damage: 6,
      cooldown: 2,
      hp: 50,
      sprite: [535, 18, 32, 32],
      price: 5,
      speed: 50

    },

    "boss": {

      damage: 10,
      cooldown: 2,
      hp: 500,
      sprite: [456, 53, 64, 64],
      speed: 32,
      boss: true

    }

  },

  tooltips: {

    "fighter": "build a fighter",
    "speed": "upgrade fighters speed",
    "life": "upgrade fighters life",
    "damage": "upgrade fighters damage"

  },

  bonuses: {
    shield: "asteroids shield",
    laser: "cursor laser",
    magnet: "coin magnet"
  }

};
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
  },

  sign: function(value) {

    return value / Math.abs(value);

  },

  moveTo: function(value, target, step) {

    if (value < target) {
      value += step;
      if (value > target) value = target;
    }

    if (value > target) {
      value -= step;
      if (value < target) value = target;
    }

    return value;

  },

  interval: function(key, interval, object) {

    if (!object.throttles) object.throttles = {};
    if (!object.throttles[key]) object.throttles[key] = object.lifetime - interval;

    if (object.lifetime - object.throttles[key] >= interval) {
      object.throttles[key] = object.lifetime;
      return true;
    } else return false;

  },

  moveInDirection: function(direction, value) {

    this.x += Math.cos(direction) * value;
    this.y += Math.sin(direction) * value;

  },

  osc: function(time, period) {

    return Math.sin(Math.PI * (time % period / period));

  },

  filter: function(array, test) {

    var result = [];

    for (var i = 0; i < array.length; i++) {
      if (test(array[i])) result.push(array[i]);
    }

    return result;

  }



};
/* file: license.txt */

/*

  PlaygroundJS r4

  http://playgroundjs.com

  (c) 2012-2015 http://rezoner.net

  Playground may be freely distributed under the MIT license.

  latest major changes:

  r4

  + tweens with events
  + context argument for events

  r3

  + pointer = mouse + touch

*/


/* file: src/lib/Whammy.js */

/* whammy - https://github.com/antimatter15/whammy */

window.Whammy = function() {
  function h(a, b) {
    for (var c = r(a), c = [{
        id: 440786851,
        data: [{
          data: 1,
          id: 17030
        }, {
          data: 1,
          id: 17143
        }, {
          data: 4,
          id: 17138
        }, {
          data: 8,
          id: 17139
        }, {
          data: "webm",
          id: 17026
        }, {
          data: 2,
          id: 17031
        }, {
          data: 2,
          id: 17029
        }]
      }, {
        id: 408125543,
        data: [{
          id: 357149030,
          data: [{
            data: 1E6,
            id: 2807729
          }, {
            data: "whammy",
            id: 19840
          }, {
            data: "whammy",
            id: 22337
          }, {
            data: s(c.duration),
            id: 17545
          }]
        }, {
          id: 374648427,
          data: [{
            id: 174,
            data: [{
              data: 1,
              id: 215
            }, {
              data: 1,
              id: 25541
            }, {
              data: 0,
              id: 156
            }, {
              data: "und",
              id: 2274716
            }, {
              data: "V_VP8",
              id: 134
            }, {
              data: "VP8",
              id: 2459272
            }, {
              data: 1,
              id: 131
            }, {
              id: 224,
              data: [{
                data: c.width,
                id: 176
              }, {
                data: c.height,
                id: 186
              }]
            }]
          }]
        }]
      }], e = 0, d = 0; e < a.length;) {
      var g = [],
        f = 0;
      do g.push(a[e]), f += a[e].duration, e++; while (e < a.length && 3E4 > f);
      var h = 0,
        g = {
          id: 524531317,
          data: [{
            data: d,
            id: 231
          }].concat(g.map(function(a) {
            var b = t({
              discardable: 0,
              frame: a.data.slice(4),
              invisible: 0,
              keyframe: 1,
              lacing: 0,
              trackNum: 1,
              timecode: Math.round(h)
            });
            h += a.duration;
            return {
              data: b,
              id: 163
            }
          }))
        };
      c[1].data.push(g);
      d += f
    }
    return m(c, b)
  }

  function r(a) {
    for (var b = a[0].width, c = a[0].height, e = a[0].duration,
        d = 1; d < a.length; d++) {
      if (a[d].width != b) throw "Frame " + (d + 1) + " has a different width";
      if (a[d].height != c) throw "Frame " + (d + 1) + " has a different height";
      if (0 > a[d].duration || 32767 < a[d].duration) throw "Frame " + (d + 1) + " has a weird duration (must be between 0 and 32767)";
      e += a[d].duration
    }
    return {
      duration: e,
      width: b,
      height: c
    }
  }

  function u(a) {
    for (var b = []; 0 < a;) b.push(a & 255), a >>= 8;
    return new Uint8Array(b.reverse())
  }

  function n(a) {
    var b = [];
    a = (a.length % 8 ? Array(9 - a.length % 8).join("0") : "") + a;
    for (var c = 0; c < a.length; c += 8) b.push(parseInt(a.substr(c,
      8), 2));
    return new Uint8Array(b)
  }

  function m(a, b) {
    for (var c = [], e = 0; e < a.length; e++) {
      var d = a[e].data;
      "object" == typeof d && (d = m(d, b));
      "number" == typeof d && (d = n(d.toString(2)));
      if ("string" == typeof d) {
        for (var g = new Uint8Array(d.length), f = 0; f < d.length; f++) g[f] = d.charCodeAt(f);
        d = g
      }
      f = d.size || d.byteLength || d.length;
      g = Math.ceil(Math.ceil(Math.log(f) / Math.log(2)) / 8);
      f = f.toString(2);
      f = Array(7 * g + 8 - f.length).join("0") + f;
      g = Array(g).join("0") + "1" + f;
      c.push(u(a[e].id));
      c.push(n(g));
      c.push(d)
    }
    return b ? (c = p(c), new Uint8Array(c)) :
      new Blob(c, {
        type: "video/webm"
      })
  }

  function p(a, b) {
    null == b && (b = []);
    for (var c = 0; c < a.length; c++) "object" == typeof a[c] ? p(a[c], b) : b.push(a[c]);
    return b
  }

  function t(a) {
    var b = 0;
    a.keyframe && (b |= 128);
    a.invisible && (b |= 8);
    a.lacing && (b |= a.lacing << 1);
    a.discardable && (b |= 1);
    if (127 < a.trackNum) throw "TrackNumber > 127 not supported";
    return [a.trackNum | 128, a.timecode >> 8, a.timecode & 255, b].map(function(a) {
      return String.fromCharCode(a)
    }).join("") + a.frame
  }

  function q(a) {
    for (var b = a.RIFF[0].WEBP[0], c = b.indexOf("\u009d\u0001*"),
        e = 0, d = []; 4 > e; e++) d[e] = b.charCodeAt(c + 3 + e);
    e = d[1] << 8 | d[0];
    c = e & 16383;
    e = d[3] << 8 | d[2];
    return {
      width: c,
      height: e & 16383,
      data: b,
      riff: a
    }
  }

  function k(a) {
    for (var b = 0, c = {}; b < a.length;) {
      var e = a.substr(b, 4),
        d = parseInt(a.substr(b + 4, 4).split("").map(function(a) {
          a = a.charCodeAt(0).toString(2);
          return Array(8 - a.length + 1).join("0") + a
        }).join(""), 2),
        g = a.substr(b + 4 + 4, d),
        b = b + (8 + d);
      c[e] = c[e] || [];
      "RIFF" == e || "LIST" == e ? c[e].push(k(g)) : c[e].push(g)
    }
    return c
  }

  function s(a) {
    return [].slice.call(new Uint8Array((new Float64Array([a])).buffer),
      0).map(function(a) {
      return String.fromCharCode(a)
    }).reverse().join("")
  }

  function l(a, b) {
    this.frames = [];
    this.duration = 1E3 / a;
    this.quality = b || .8
  }
  l.prototype.add = function(a, b) {
    if ("undefined" != typeof b && this.duration) throw "you can't pass a duration if the fps is set";
    if ("undefined" == typeof b && !this.duration) throw "if you don't have the fps set, you ned to have durations here.";
    "canvas" in a && (a = a.canvas);
    if ("toDataURL" in a) a = a.toDataURL("image/webp", this.quality);
    else if ("string" != typeof a) throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
    if (!/^data:image\/webp;base64,/ig.test(a)) throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
    this.frames.push({
      image: a,
      duration: b || this.duration
    })
  };
  l.prototype.compile = function(a) {
    return new h(this.frames.map(function(a) {
      var c = q(k(atob(a.image.slice(23))));
      c.duration = a.duration;
      return c
    }), a)
  };
  return {
    Video: l,
    fromImageArray: function(a, b, c) {
      return h(a.map(function(a) {
        a = q(k(atob(a.slice(23))));
        a.duration = 1E3 / b;
        return a
      }), c)
    },
    toWebM: h
  }
}();

/* file: src/lib/Ease.js */

/*

  Ease 1.0

  http://canvasquery.com

  (c) 2015 by Rezoner - http://rezoner.net

  `ease` may be freely distributed under the MIT license.

*/

(function() {

  var ease = function(progress, easing) {

    if (typeof ease.cache[easing] === "function") {

      return ease.cache[easing](progress);

    } else {

      return ease.spline(progress, easing || ease.defaultEasing);

    }

  };

  var extend = function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  };

  extend(ease, {

    defaultEasing: "016",

    cache: {

      linear: function(t) {
        return t
      },

      inQuad: function(t) {
        return t * t
      },
      outQuad: function(t) {
        return t * (2 - t)
      },
      inOutQuad: function(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
      },
      inCubic: function(t) {
        return t * t * t
      },
      outCubic: function(t) {
        return (--t) * t * t + 1
      },
      inOutCubic: function(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      },
      inQuart: function(t) {
        return t * t * t * t
      },
      outQuart: function(t) {
        return 1 - (--t) * t * t * t
      },
      inOutQuart: function(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t
      },
      inQuint: function(t) {
        return t * t * t * t * t
      },
      outQuint: function(t) {
        return 1 + (--t) * t * t * t * t
      },
      inOutQuint: function(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
      },
      inSine: function(t) {
        return -1 * Math.cos(t / 1 * (Math.PI * 0.5)) + 1;
      },
      outSine: function(t) {
        return Math.sin(t / 1 * (Math.PI * 0.5));
      },
      inOutSine: function(t) {
        return -1 / 2 * (Math.cos(Math.PI * t) - 1);
      },
      inExpo: function(t) {
        return (t == 0) ? 0 : Math.pow(2, 10 * (t - 1));
      },
      outExpo: function(t) {
        return (t == 1) ? 1 : (-Math.pow(2, -10 * t) + 1);
      },
      inOutExpo: function(t) {
        if (t == 0) return 0;
        if (t == 1) return 1;
        if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
        return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
      },
      inCirc: function(t) {
        return -1 * (Math.sqrt(1 - t * t) - 1);
      },
      outCirc: function(t) {
        return Math.sqrt(1 - (t = t - 1) * t);
      },
      inOutCirc: function(t) {
        if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
        return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      inElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if (t == 1) return 1;
        if (!p) p = 0.3;
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
      },
      outElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if (t == 1) return 1;
        if (!p) p = 0.3;
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
      },
      inOutElastic: function(t) {
        var s = 1.70158;
        var p = 0;
        var a = 1;
        if (t == 0) return 0;
        if ((t /= 1 / 2) == 2) return 1;
        if (!p) p = (0.3 * 1.5);
        if (a < 1) {
          a = 1;
          var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(1 / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
      },
      inBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        return 1 * t * t * ((s + 1) * t - s);
      },
      outBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
      },
      inOutBack: function(t, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= (1.525)) + 1) * t - s));
        return 1 / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
      },
      inBounce: function(t) {
        return 1 - this.outBounce(1 - t);
      },
      outBounce: function(t) {
        if ((t /= 1) < (1 / 2.75)) {
          return (7.5625 * t * t);
        } else if (t < (2 / 2.75)) {
          return (7.5625 * (t -= (1.5 / 2.75)) * t + .75);
        } else if (t < (2.5 / 2.75)) {
          return (7.5625 * (t -= (2.25 / 2.75)) * t + .9375);
        } else {
          return (7.5625 * (t -= (2.625 / 2.75)) * t + .984375);
        }
      },
      inOutBounce: function(t) {
        if (t < 1 / 2) return this.inBounce(t * 2) * 0.5;
        return this.outBounce(t * 2 - 1) * 0.5 + 0.5;
      }
    },

    translateEasing: function(key) {

      if (!this.cache[key]) {
        var array = key.split('');

        var sign = 1;
        var signed = false;

        for (var i = 0; i < array.length; i++) {

          var char = array[i];

          if (char === "-") {
            sign = -1;
            signed = true;
            array.splice(i--, 1);
          } else if (char === "+") {
            sign = 1;
            array.splice(i--, 1);
          } else array[i] = parseInt(array[i], 16) * sign;

        }

        var min = Math.min.apply(null, array);
        var max = Math.max.apply(null, array);
        var diff = max - min;
        var cache = [];
        var normalized = [];

        for (var i = 0; i < array.length; i++) {
          if (signed) {
            var diff = Math.max(Math.abs(min), Math.abs(max))
            normalized.push((array[i]) / diff);
          } else {
            var diff = max - min;
            normalized.push((array[i] - min) / diff);
          }
        }

        this.cache[key] = normalized;

      }

      return this.cache[key]

    },

    /*

      Cubic-spline interpolation by Ivan Kuckir

      http://blog.ivank.net/interpolation-with-cubic-splines.html

      With slight modifications by Morgan Herlocker

      https://github.com/morganherlocker/cubic-spline

    */

    splineK: {},
    splineX: {},
    splineY: {},

    insertIntermediateValues: function(a) {
      var result = [];
      for (var i = 0; i < a.length; i++) {
        result.push(a[i]);

        if (i < a.length - 1) result.push(a[i + 1] + (a[i] - a[i + 1]) * 0.6);
      }

      return result;
    },

    spline: function(x, key) {

      if (!this.splineK[key]) {

        var xs = [];
        var ys = this.translateEasing(key);

        // ys = this.insertIntermediateValues(ys);

        if (!ys.length) return 0;

        for (var i = 0; i < ys.length; i++) xs.push(i * (1 / (ys.length - 1)));

        var ks = xs.map(function() {
          return 0
        });

        ks = this.getNaturalKs(xs, ys, ks);

        this.splineX[key] = xs;
        this.splineY[key] = ys;
        this.splineK[key] = ks;

      }

      if (x > 1) return this.splineY[key][this.splineY[key].length - 1];

      var ks = this.splineK[key];
      var xs = this.splineX[key];
      var ys = this.splineY[key];

      var i = 1;

      while (xs[i] < x) i++;

      var t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
      var a = ks[i - 1] * (xs[i] - xs[i - 1]) - (ys[i] - ys[i - 1]);
      var b = -ks[i] * (xs[i] - xs[i - 1]) + (ys[i] - ys[i - 1]);
      var q = (1 - t) * ys[i - 1] + t * ys[i] + t * (1 - t) * (a * (1 - t) + b * t);

      /*
      var py = ys[i - 2];
      var cy = ys[i - 1];
      var ny = (i < ys.length - 1) ? ys[i] : ys[i - 1];

      if (q > ny) {
        var diff = (q - py);
        //q = py + diff;

      }

    if (cy === ny && cy === py) q = py;
    */


      return q;
    },

    getNaturalKs: function(xs, ys, ks) {
      var n = xs.length - 1;
      var A = this.zerosMat(n + 1, n + 2);

      for (var i = 1; i < n; i++) // rows
      {
        A[i][i - 1] = 1 / (xs[i] - xs[i - 1]);
        A[i][i] = 2 * (1 / (xs[i] - xs[i - 1]) + 1 / (xs[i + 1] - xs[i]));
        A[i][i + 1] = 1 / (xs[i + 1] - xs[i]);
        A[i][n + 1] = 3 * ((ys[i] - ys[i - 1]) / ((xs[i] - xs[i - 1]) * (xs[i] - xs[i - 1])) + (ys[i + 1] - ys[i]) / ((xs[i + 1] - xs[i]) * (xs[i + 1] - xs[i])));
      }

      A[0][0] = 2 / (xs[1] - xs[0]);
      A[0][1] = 1 / (xs[1] - xs[0]);
      A[0][n + 1] = 3 * (ys[1] - ys[0]) / ((xs[1] - xs[0]) * (xs[1] - xs[0]));

      A[n][n - 1] = 1 / (xs[n] - xs[n - 1]);
      A[n][n] = 2 / (xs[n] - xs[n - 1]);
      A[n][n + 1] = 3 * (ys[n] - ys[n - 1]) / ((xs[n] - xs[n - 1]) * (xs[n] - xs[n - 1]));

      return this.solve(A, ks);
    },

    solve: function(A, ks) {
      var m = A.length;
      for (var k = 0; k < m; k++) // column
      {
        // pivot for column
        var i_max = 0;
        var vali = Number.NEGATIVE_INFINITY;
        for (var i = k; i < m; i++)
          if (A[i][k] > vali) {
            i_max = i;
            vali = A[i][k];
          }
        this.splineSwapRows(A, k, i_max);

        // for all rows below pivot
        for (var i = k + 1; i < m; i++) {
          for (var j = k + 1; j < m + 1; j++)
            A[i][j] = A[i][j] - A[k][j] * (A[i][k] / A[k][k]);
          A[i][k] = 0;
        }
      }
      for (var i = m - 1; i >= 0; i--) // rows = columns
      {
        var v = A[i][m] / A[i][i];
        ks[i] = v;
        for (var j = i - 1; j >= 0; j--) // rows
        {
          A[j][m] -= A[j][i] * v;
          A[j][i] = 0;
        }
      }
      return ks;
    },

    zerosMat: function(r, c) {
      var A = [];
      for (var i = 0; i < r; i++) {
        A.push([]);
        for (var j = 0; j < c; j++) A[i].push(0);
      }
      return A;
    },

    splineSwapRows: function(m, k, l) {
      var p = m[k];
      m[k] = m[l];
      m[l] = p;
    }
  });

  window.ease = ease;

})();


/* file: src/Playground.js */

PLAYGROUND = {};

function playground(args) {

  return new PLAYGROUND.Application(args);

};

/* file: src/Utils.js */

PLAYGROUND.Utils = {

  extend: function() {

    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];

  },

  merge: function(a) {

    for (var i = 1; i < arguments.length; i++) {

      var b = arguments[i];

      for (var key in b) {

        var value = b[key];

        if (typeof a[key] !== "undefined") {
          if (typeof a[key] === "object") this.merge(a[key], value);
          else a[key] = value;
        } else {
          a[key] = value;
        }
      }
    }
    return a;

  },

  invoke: function(object, methodName) {

    var args = Array.prototype.slice.call(arguments, 2);

    for (var i = 0; i < object.length; i++) {
      var current = object[i];

      if (current[methodName]) current[methodName].apply(current, args);

    }

  },

  throttle: function(fn, threshold) {
    threshold || (threshold = 250);
    var last,
      deferTimer;
    return function() {
      var context = this;

      var now = +new Date,
        args = arguments;
      if (last && now < last + threshold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          fn.apply(context, args);
        }, threshold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

};

PLAYGROUND.Utils.ease = ease;


/* file: src/Events.js */

PLAYGROUND.Events = function() {

  this.listeners = {};

};

PLAYGROUND.Events.prototype = {

  on: function(event, callback, context) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.on(key, event[key], context)
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    var listener = {
      once: false,
      callback: callback,
      context: context
    };

    this.listeners[event].push(listener);

    return listener;
  },

  once: function(event, callback, context) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.once(key, event[key], context)
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    var listener = {
      once: true,
      callback: callback,
      context: context
    };

    this.listeners[event].push(listener);

    return listener;
  },

  off: function(event, callback) {

    for (var i = 0, len = this.listeners[event].length; i < len; i++) {
      if (this.listeners[event][i]._remove) {
        this.listeners[event].splice(i--, 1);
        len--;
      }
    }

  },

  trigger: function(event, data) {

    /* if you prefer events pipe */

    if (this.listeners["event"]) {

      for (var i = 0, len = this.listeners["event"].length; i < len; i++) {

        var listener = this.listeners["event"][i];

        listener.callback.call(listener.context || this, event, data);

      }

    }

    /* or subscribed to single event */

    if (this.listeners[event]) {
      for (var i = 0, len = this.listeners[event].length; i < len; i++) {

        var listener = this.listeners[event][i];

        listener.callback.call(listener.context || this, data);

        if (listener.once) {
          this.listeners[event].splice(i--, 1);
          len--;
        }
      }
    }

  }

};

/* file: src/States.js */

PLAYGROUND.States = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  app.on("step", this.step.bind(this));

};

PLAYGROUND.States.prototype = {

  step: function(delta) {

    if (!this.next) return;

    if (this.current && this.current.locked) return;

    var state = this.next;

    if (typeof state === "function") state = new state;

    /* create state if object has never been used as a state before */

    if (!state.__created) {

      state.__created = true;

      state.app = this.app;

      this.trigger("createstate", {
        state: state
      });

      if (state.create) state.create();

    }

    /* enter new state */

    if (this.current) {
      this.trigger("leavestate", {
        prev: this.current,
        next: state,
        state: this.current
      });
    }

    this.trigger("enterstate", {
      prev: this.current,
      next: state,
      state: state
    });

    this.current = state;

    if (this.current && this.current.enter) {
      this.current.enter();
    }

    this.app.state = this.current;

    this.next = false;


  },

  set: function(state) {

    if (this.current && this.current.leave) this.current.leave();

    this.next = state;

    this.step(0);

  }


};

PLAYGROUND.Utils.extend(PLAYGROUND.States.prototype, PLAYGROUND.Events.prototype);

/* file: src/Application.js */

PLAYGROUND.Application = function(args) {

  var app = this;

  /* events */

  PLAYGROUND.Events.call(this);

  /* defaults */

  PLAYGROUND.Utils.merge(this, this.defaults, args);

  /* guess scaling mode */

  this.autoWidth = this.width ? false : true;
  this.autoHeight = this.height ? false : true;
  this.autoScale = this.scale ? false : true;

  /* get container */

  if (!this.container) this.container = document.body;

  if (this.container !== document.body) this.customContainer = true;

  if (typeof this.container === "string") this.container = document.querySelector(this.container);

  this.updateSize();

  /* events */

  // this.emitLocalEvent = this.emitLocalEvent.bind(this);
  // this.emitGlobalEvent = this.emitGlobalEvent.bind(this);

  /* states manager */

  this.states = new PLAYGROUND.States(this);
  this.states.on("event", this.emitLocalEvent, this);

  /* mouse */

  this.mouse = new PLAYGROUND.Mouse(this, this.container);
  this.mouse.on("event", this.emitGlobalEvent, this);

  /* touch */

  this.touch = new PLAYGROUND.Touch(this, this.container);
  this.touch.on("event", this.emitGlobalEvent, this);

  /* keyboard */

  this.keyboard = new PLAYGROUND.Keyboard();
  this.keyboard.on("event", this.emitGlobalEvent, this);

  /* gamepads */

  this.gamepads = new PLAYGROUND.Gamepads(this);
  this.gamepads.on("event", this.emitGlobalEvent, this);

  /* tweens */

  this.tweens = new PLAYGROUND.TweenManager(this);

  /* ease */

  this.ease = PLAYGROUND.Utils.ease;

  /* video recorder */

  this.videoRecorder = new PLAYGROUND.VideoRecorder(this);

  /* sound */

  PLAYGROUND.Sound(this);

  /* window resize */

  window.addEventListener("resize", this.handleResize.bind(this));

  /* visilibitychange */

  document.addEventListener("visibilitychange", function() {

    app.emitGlobalEvent("visibilitychange", document.visibilityState);


  });

  /* assets containers */

  this.images = {};
  this.atlases = {};
  this.data = {};

  this.loader = new PLAYGROUND.Loader(this);

  this.loadFoo(0.25);

  /* create plugins in the same way */

  this.plugins = [];

  for (var key in PLAYGROUND) {

    var property = PLAYGROUND[key];

    if (property.plugin) this.plugins.push(new property(this));

  }

  /* flow */

  this.emitGlobalEvent("preload");

  this.firstBatch = true;

  function onPreloadEnd() {

    app.loadFoo(0.25);

    /* run everything in the next frame */

    setTimeout(function() {

      app.emitLocalEvent("create");

      app.setState(PLAYGROUND.DefaultState);
      app.handleResize();
      app.setState(PLAYGROUND.LoadingScreen);

      /* game loop */

      PLAYGROUND.GameLoop(app);

    });

    /* stage proper loading step */

    app.loader.once("ready", function() {

      app.firstBatch = false;

      app.setState(PLAYGROUND.DefaultState);

      app.emitLocalEvent("ready");
      app.handleResize();


    });


  };


  this.loader.once("ready", onPreloadEnd);

};

PLAYGROUND.Application.prototype = {

  defaults: {
    smoothing: 1,
    paths: {
      base: "",
      images: "images/"
    },
    offsetX: 0,
    offsetY: 0
  },

  setState: function(state) {

    this.states.set(state);

  },

  getPath: function(to) {

    return this.paths.base + (this.paths[to] || (to + "/"));

  },

  getAssetEntry: function(path, folder, defaultExtension) {

    /* translate folder according to user provided paths
       or leave as is */

    var folder = this.paths[folder] || (folder + "/");

    var fileinfo = path.match(/(.*)\..*/);
    var key = fileinfo ? fileinfo[1] : path;

    var temp = path.split(".");
    var basename = path;

    if (temp.length > 1) {
      var ext = temp.pop();
      path = temp.join(".");
    } else {
      var ext = defaultExtension;
      basename += "." + defaultExtension;
    }

    return {
      key: key,
      url: this.paths.base + folder + basename,
      path: this.paths.base + folder + path,
      ext: ext
    };

  },

  /* events that shouldn't flow down to the state */

  emitLocalEvent: function(event, data) {

    this.trigger(event, data);

    if ((!this.firstBatch || this.loader.ready) && this[event]) this[event](data);

  },

  /* events that should be passed to the state */

  emitGlobalEvent: function(event, data) {

    if (!this.state) return this.emitLocalEvent(event, data);

    this.trigger(event, data);

    if ((!this.firstBatch || this.loader.ready) && this.event) this.event(event, data);

    if ((!this.firstBatch || this.loader.ready) && this[event]) this[event](data);

    if (this.state.event) this.state.event(event, data);

    if (this.state[event]) this.state[event](data);

    this.trigger("post" + event, data);

    // if (this.state.proxy) this.state.proxy(event, data);

  },

  updateSize: function() {

    if (this.customContainer) {

      var containerWidth = this.container.offsetWidth;
      var containerHeight = this.container.offsetHeight;

    } else {

      var containerWidth = window.innerWidth;
      var containerHeight = window.innerHeight;

    }

    if (!this.autoScale && !this.autoWidth && !this.autoHeight) {

    } else if (!this.autoHeight && this.autoWidth) {

      if (this.autoScale) this.scale = containerHeight / this.height;

      this.width = Math.ceil(containerWidth / this.scale);

    } else if (!this.autoWidth && this.autoHeight) {

      if (this.autoScale) this.scale = containerWidth / this.width;

      this.height = Math.ceil(containerHeight / this.scale);


    } else if (this.autoWidth && this.autoHeight && this.autoScale) {

      this.scale = 1;
      this.width = containerWidth;
      this.height = containerHeight;

    } else if (this.autoWidth && this.autoHeight) {

      this.width = Math.ceil(containerWidth / this.scale);
      this.height = Math.ceil(containerHeight / this.scale);

    } else {

      this.scale = Math.min(containerWidth / this.width, containerHeight / this.height);

    }

    this.offsetX = (containerWidth - this.width * this.scale) / 2 | 0;
    this.offsetY = (containerHeight - this.height * this.scale) / 2 | 0;

    this.center = {
      x: this.width / 2 | 0,
      y: this.height / 2 | 0
    };

  },

  handleResize: PLAYGROUND.Utils.throttle(function() {

    this.updateSize();

    this.mouse.handleResize();
    this.touch.handleResize();

    this.emitGlobalEvent("resize", {});

  }, 16),

  /*
    request a file over http
    it shall be later an abstraction using 'fs' in node-webkit

    returns a promise
  */

  request: function(url) {

    function promise(success, fail) {

      var request = new XMLHttpRequest();

      var app = this;

      request.open("GET", url, true);

      request.onload = function(event) {

        var xhr = event.target;

        if (xhr.status !== 200 && xhr.status !== 0) {

          return fail(new Error("Failed to get " + url));

        }

        success(xhr);

      }

      request.send();

    }

    return new Promise(promise);

  },

  /* imaginary timeout to delay loading */

  loadFoo: function(timeout) {

    var loader = this.loader;

    this.loader.add("foo " + timeout);

    setTimeout(function() {
      loader.success("foo " + timeout);
    }, timeout * 1000);

  },

  /* data/json */

  loadData: function() {

    for (var i = 0; i < arguments.length; i++) {

      var arg = arguments[i];

      if (typeof arg === "object") {

        for (var key in arg) this.loadData(arg[key]);

      } else {

        this.loadDataItem(arg);

      }

    }

  },

  loadDataItem: function(name) {

    var entry = this.getAssetEntry(name, "data", "json");

    var app = this;

    this.loader.add();

    this.request(entry.url).then(processData);

    function processData(request) {

      if (entry.ext === "json") {
        app.data[entry.key] = JSON.parse(request.responseText);
      } else {
        app.data[entry.key] = request.responseText;
      }

      app.loader.success(entry.url);

    }

  },

  /* images */

  loadImage: function() {

    return this.loadImages.apply(this, arguments);

  },

  loadImages: function() {

    var promises = [];

    for (var i = 0; i < arguments.length; i++) {

      var arg = arguments[i];

      /* polymorphism at its finest */

      if (typeof arg === "object") {

        for (var key in arg) promises = promises.concat(this.loadImages(arg[key]));

      } else {

        promises.push(this.loadOneImage(arg));

      }

    }

    return Promise.all(promises);

  },

  loadOneImage: function(name) {

    var app = this;

    if (!this._imageLoaders) this._imageLoaders = {};

    if (!this._imageLoaders[name]) {

      var promise = function(resolve, reject) {

        /* if argument is not an object/array let's try to load it */

        var loader = app.loader;

        var entry = app.getAssetEntry(name, "images", "png");

        app.loader.add(entry.path);

        var image = app.images[entry.key] = new Image;

        image.addEventListener("load", function() {

          resolve(image);
          loader.success(entry.url);

        });

        image.addEventListener("error", function() {

          reject("can't load " + entry.url);
          loader.error(entry.url);

        });

        image.src = entry.url;

      };

      app._imageLoaders[name] = new Promise(promise);

    }

    return this._imageLoaders[name];

  },

  render: function() {

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Application.prototype, PLAYGROUND.Events.prototype);



/* file: src/GameLoop.js */

PLAYGROUND.GameLoop = function(app) {

  app.lifetime = 0;
  app.ops = 0;
  app.opcost = 0;

  var lastTick = Date.now();
  var frame = 0;
  var unbounded = false;

  function render(dt) {

    app.emitGlobalEvent("render", dt)
    app.emitGlobalEvent("postrender", dt)

  };

  function step(dt) {

    app.emitGlobalEvent("step", dt)

  };

  function gameLoop() {

    if (!app.unbound) {
      if (app.immidiate) {
        setZeroTimeout(gameLoop);
      } else {
        requestId = requestAnimationFrame(gameLoop);
      }
    }

    var delta = Date.now() - lastTick;

    lastTick = Date.now();

    if (app.unbound) {
      delta = 20;
    }

    if (delta > 1000) return;

    var dt = delta / 1000;

    app.lifetime += dt;
    app.elapsed = dt;

    step(dt);

    render(dt);

    if (app.unbound && !unbounded) {
      unbounded = true;
      while (app.unbound) {
        gameLoop();
      }
      unbounded = false;
    }

  };

  window.addEventListener('blur', function() {

    cancelAnimationFrame(requestId);

  });

  window.addEventListener('focus', function() {

    requestId = requestAnimationFrame(gameLoop);

  });

  var requestId = requestAnimationFrame(gameLoop);

};

// Copyright dbaron, via http://dbaron.org/log/20100309-faster-timeouts
// Only add setZeroTimeout to the window object, and hide everything
// else in a closure.
(function() {
  var timeouts = [];
  var messageName = "zero-timeout-message";

  // Like setTimeout, but only takes a function argument.  There's
  // no time argument (always zero) and no arguments (you have to
  // use a closure).
  function setZeroTimeout(fn) {
    timeouts.push(fn);
    window.postMessage(messageName, "*");
  }

  function handleMessage(event) {

    if (event.source == window && event.data == messageName) {
      event.stopPropagation();
      if (timeouts.length > 0) {
        var fn = timeouts.shift();
        fn();
      }
    }
    
  }

  window.addEventListener("message", handleMessage, true);

  // Add the one thing we want added to the window object.
  window.setZeroTimeout = setZeroTimeout;
})();

/* file: src/Gamepads.js */

PLAYGROUND.Gamepads = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.getGamepads = navigator.getGamepads || navigator.webkitGetGamepads;

  this.gamepadmoveEvent = {};
  this.gamepaddownEvent = {};
  this.gamepadupEvent = {};

  this.gamepads = {};

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.Gamepads.prototype = {

  buttons: {
    0: "1",
    1: "2",
    2: "3",
    3: "4",
    4: "l1",
    5: "r1",
    6: "l2",
    7: "r2",
    8: "select",
    9: "start",
    12: "up",
    13: "down",
    14: "left",
    15: "right"
  },

  zeroState: function() {

    var buttons = [];

    for (var i = 0; i <= 15; i++) {
      buttons.push({
        pressed: false,
        value: 0
      });
    }

    return {
      axes: [],
      buttons: buttons
    };

  },

  createGamepad: function() {

    var result = {
      buttons: {},
      sticks: [{
        x: 0,
        y: 0
      }, {
        x: 0,
        y: 0
      }]
    };


    for (var i = 0; i < 16; i++) {
      var key = this.buttons[i];
      result.buttons[key] = false;
    }

    return result;

  },

  step: function() {

    if (!navigator.getGamepads) return;

    var gamepads = navigator.getGamepads();

    for (var i = 0; i < gamepads.length; i++) {

      var current = gamepads[i];

      if (!current) continue;

      if (!this[i]) this[i] = this.createGamepad();

      /* have to concat the current.buttons because the are read-only */

      var buttons = [].concat(current.buttons);

      /* hack for missing  dpads */

      for (var h = 12; h <= 15; h++) {
        if (!buttons[h]) buttons[h] = {
          pressed: false,
          value: 0
        };
      }

      var previous = this[i];

      /* axes (sticks) to buttons */

      if (current.axes) {

        if (current.axes[0] < 0) buttons[14].pressed = true;
        if (current.axes[0] > 0) buttons[15].pressed = true;
        if (current.axes[1] < 0) buttons[12].pressed = true;
        if (current.axes[1] > 0) buttons[13].pressed = true;

        previous.sticks[0].x = current.axes[0].value;
        previous.sticks[0].y = current.axes[1].value;
        previous.sticks[1].x = current.axes[2].value;
        previous.sticks[1].y = current.axes[3].value;

      }

      /* check buttons changes */

      for (var j = 0; j < buttons.length; j++) {

        var key = this.buttons[j];

        /* gamepad down */

        if (buttons[j].pressed && !previous.buttons[key]) {

          previous.buttons[key] = true;
          this.gamepaddownEvent.button = this.buttons[j];
          this.gamepaddownEvent.gamepad = i;
          this.trigger("gamepaddown", this.gamepaddownEvent);

        }

        /* gamepad up */
        else if (!buttons[j].pressed && previous.buttons[key]) {

          previous.buttons[key] = false;
          this.gamepadupEvent.button = this.buttons[j];
          this.gamepadupEvent.gamepad = i;
          this.trigger("gamepadup", this.gamepadupEvent);

        }

      }

    }

  }
};

PLAYGROUND.Utils.extend(PLAYGROUND.Gamepads.prototype, PLAYGROUND.Events.prototype);


/* file: src/Keyboard.js */

PLAYGROUND.Keyboard = function() {

  PLAYGROUND.Events.call(this);

  this.keys = {};

  document.addEventListener("keydown", this.keydown.bind(this));
  document.addEventListener("keyup", this.keyup.bind(this));
  document.addEventListener("keypress", this.keypress.bind(this));

  this.keydownEvent = {};
  this.keyupEvent = {};

  this.preventDefault = true;

};

PLAYGROUND.Keyboard.prototype = {

  keycodes: {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "capslock",
    27: "escape",
    32: "space",
    33: "pageup",
    34: "pagedown",
    35: "end",
    36: "home",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    144: "numlock",
    145: "scrolllock",
    186: "semicolon",
    187: "equal",
    188: "comma",
    189: "dash",
    190: "period",
    191: "slash",
    192: "graveaccent",
    219: "openbracket",
    220: "backslash",
    221: "closebraket",
    222: "singlequote"
  },

  keypress: function(e) {

  },

  keydown: function(e) {
    if (e.which >= 48 && e.which <= 90) var keyName = String.fromCharCode(e.which).toLowerCase();
    else var keyName = this.keycodes[e.which];

    if (this.keys[keyName]) return;

    this.keydownEvent.key = keyName;
    this.keydownEvent.original = e;

    this.keys[keyName] = true;

    this.trigger("keydown", this.keydownEvent);

    if (this.preventDefault && document.activeElement === document.body) {
      e.returnValue = false;
      e.keyCode = 0;
      e.preventDefault();
      e.stopPropagation();
    }
  },

  keyup: function(e) {

    if (e.which >= 48 && e.which <= 90) var keyName = String.fromCharCode(e.which).toLowerCase();
    else var keyName = this.keycodes[e.which];

    this.keyupEvent.key = keyName;
    this.keyupEvent.original = e;

    this.keys[keyName] = false;

    this.trigger("keyup", this.keyupEvent);
  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Keyboard.prototype, PLAYGROUND.Events.prototype);



/* file: src/Pointer.js */

PLAYGROUND.Pointer = function(app) {

  this.app = app;

  app.on("touchstart", this.touchstart, this);
  app.on("touchend", this.touchend, this);
  app.on("touchmove", this.touchmove, this);

  app.on("mousemove", this.mousemove, this);
  app.on("mousedown", this.mousedown, this);
  app.on("mouseup", this.mouseup, this);

  this.pointers = app.pointers = {};

};

PLAYGROUND.Pointer.plugin = true;

PLAYGROUND.Pointer.prototype = {

  updatePointer: function(pointer) {

    this.pointers[pointer.id] = pointer;

  },

  removePointer: function(pointer) {

    delete this.pointers[pointer.id];

  },

  touchstart: function(e) {

    e.touch = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointerdown", e);

  },

  touchend: function(e) {

    e.touch = true;

    this.removePointer(e);

    this.app.emitGlobalEvent("pointerup", e);

  },

  touchmove: function(e) {

    e.touch = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointermove", e);

  },

  mousemove: function(e) {

    e.mouse = true;

    this.updatePointer(e);

    this.app.emitGlobalEvent("pointermove", e);

  },

  mousedown: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerdown", e);

  },

  mouseup: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerup", e);

  },

  mousewheel: function(e) {

    e.mouse = true;

    this.app.emitGlobalEvent("pointerwheel", e);

  }

};

/* file: src/Loader.js */

/* Loader */

PLAYGROUND.Loader = function(app) {

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.reset();

};

PLAYGROUND.Loader.prototype = {

  /* loader */

  add: function(id) {

    this.queue++;
    this.count++;
    this.ready = false;
    this.trigger("add", id);

    return id;

  },

  error: function(id) {

    this.trigger("error", id);

  },

  success: function(id) {

    this.queue--;

    this.progress = 1 - this.queue / this.count;

    this.trigger("load", id);

    if (this.queue <= 0) {
      this.trigger("ready");
      this.reset();
    }

  },

  reset: function() {

    this.progress = 0;
    this.queue = 0;
    this.count = 0;
    this.ready = true;

  }
};

PLAYGROUND.Utils.extend(PLAYGROUND.Loader.prototype, PLAYGROUND.Events.prototype);

/* file: src/Mouse.js */

PLAYGROUND.Mouse = function(app, element) {

  var self = this;

  this.app = app;

  PLAYGROUND.Events.call(this);

  this.element = element;

  this.buttons = {};

  this.preventContextMenu = true;

  this.mousemoveEvent = {};
  this.mousedownEvent = {};
  this.mouseupEvent = {};
  this.mousewheelEvent = {};

  this.x = 0;
  this.y = 0;

  element.addEventListener("mousemove", this.mousemove.bind(this));
  element.addEventListener("mousedown", this.mousedown.bind(this));
  element.addEventListener("mouseup", this.mouseup.bind(this));

  this.enableMousewheel();

  this.element.addEventListener("contextmenu", function(e) {
    if (self.preventContextMenu) e.preventDefault();
  });

  element.requestPointerLock = element.requestPointerLock ||
    element.mozRequestPointerLock ||
    element.webkitRequestPointerLock;

  document.exitPointerLock = document.exitPointerLock ||
    document.mozExitPointerLock ||
    document.webkitExitPointerLock;


  this.handleResize();
};

PLAYGROUND.Mouse.prototype = {

  lock: function() {

    this.locked = true;
    this.element.requestPointerLock();

  },

  unlock: function() {

    this.locked = false;
    document.exitPointerLock();

  },

  getElementOffset: function(element) {

    var offsetX = 0;
    var offsetY = 0;

    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    }

    while ((element = element.offsetParent));

    return {
      x: offsetX,
      y: offsetY
    };

  },

  handleResize: function() {

    this.elementOffset = this.getElementOffset(this.element);

  },

  mousemove: PLAYGROUND.Utils.throttle(function(e) {

    this.x = this.mousemoveEvent.x = (e.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
    this.y = this.mousemoveEvent.y = (e.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

    this.mousemoveEvent.original = e;

    if (this.locked) {
      this.mousemoveEvent.movementX = e.movementX ||
        e.mozMovementX ||
        e.webkitMovementX ||
        0;

      this.mousemoveEvent.movementY = e.movementY ||
        e.mozMovementY ||
        e.webkitMovementY ||
        0;
    }

    if (this.app.mouseToTouch) {
      //      if (this.left) {
      this.mousemoveEvent.id = this.mousemoveEvent.identifier = 255;
      this.trigger("touchmove", this.mousemoveEvent);
      //      }
    } else {
      this.mousemoveEvent.id = this.mousemoveEvent.identifier = 255;
      this.trigger("mousemove", this.mousemoveEvent);
    }

  }, 16),

  mousedown: function(e) {

    var buttonName = ["left", "middle", "right"][e.button];

    this.mousedownEvent.x = this.mousemoveEvent.x;
    this.mousedownEvent.y = this.mousemoveEvent.y;
    this.mousedownEvent.button = buttonName;
    this.mousedownEvent.original = e;

    this[buttonName] = true;

    this.mousedownEvent.id = this.mousedownEvent.identifier = 255;

    if (this.app.mouseToTouch) {
      this.trigger("touchmove", this.mousedownEvent);
      this.trigger("touchstart", this.mousedownEvent);
    } else {
      this.trigger("mousedown", this.mousedownEvent);
    }

  },

  mouseup: function(e) {

    var buttonName = ["left", "middle", "right"][e.button];

    this.mouseupEvent.x = this.mousemoveEvent.x;
    this.mouseupEvent.y = this.mousemoveEvent.y;
    this.mouseupEvent.button = buttonName;
    this.mouseupEvent.original = e;

    this.mouseupEvent.id = this.mouseupEvent.identifier = 255;

    if (this.app.mouseToTouch) {

      this.trigger("touchend", this.mouseupEvent);

    } else {

      this.trigger("mouseup", this.mouseupEvent);

    }

    this[buttonName] = false;

  },

  mousewheel: function(e) {

    this.mousewheelEvent.x = this.mousemoveEvent.x;
    this.mousewheelEvent.y = this.mousemoveEvent.y;
    this.mousewheelEvent.button = ["none", "left", "middle", "right"][e.button];
    this.mousewheelEvent.original = e;
    this.mousewheelEvent.id = this.mousewheelEvent.identifier = 255;

    this[e.button] = false;

    this.trigger("mousewheel", this.mousewheelEvent);

  },


  enableMousewheel: function() {

    var eventNames = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
    var callback = this.mousewheel.bind(this);
    var self = this;

    for (var i = eventNames.length; i;) {

      self.element.addEventListener(eventNames[--i], PLAYGROUND.Utils.throttle(function(event) {

        var orgEvent = event || window.event,
          args = [].slice.call(arguments, 1),
          delta = 0,
          deltaX = 0,
          deltaY = 0,
          absDelta = 0,
          absDeltaXY = 0,
          fn;

        orgEvent.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
          delta = orgEvent.wheelDelta;
        }

        if (orgEvent.detail) {
          delta = orgEvent.detail * -1;
        }

        // New school wheel delta (wheel event)
        if (orgEvent.deltaY) {
          deltaY = orgEvent.deltaY * -1;
          delta = deltaY;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
          deltaY = orgEvent.wheelDeltaY;
        }

        var result = delta ? delta : deltaY;

        self.mousewheelEvent.x = self.mousemoveEvent.x;
        self.mousewheelEvent.y = self.mousemoveEvent.y;
        self.mousewheelEvent.delta = result / Math.abs(result);
        self.mousewheelEvent.original = orgEvent;

        callback(self.mousewheelEvent);

        orgEvent.preventDefault();

      }, 40), false);
    }

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Mouse.prototype, PLAYGROUND.Events.prototype);

/* file: src/Sound.js */

PLAYGROUND.Sound = function(app) {

  var audioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

  if (audioContext) {

    if (!PLAYGROUND.audioContext) PLAYGROUND.audioContext = new audioContext;

    app.audioContext = PLAYGROUND.audioContext;
    app.sound = new PLAYGROUND.SoundWebAudioAPI(app, app.audioContext);
    app.music = new PLAYGROUND.SoundWebAudioAPI(app, app.audioContext);

  } else {

    app.sound = new PLAYGROUND.SoundAudio(app);
    app.music = new PLAYGROUND.SoundAudio(app);

  }

};

PLAYGROUND.Application.prototype.playSound = function(key, loop) {

  return this.sound.play(key, loop);

};

PLAYGROUND.Application.prototype.stopSound = function(sound) {

  this.sound.stop(sound);

};

PLAYGROUND.Application.prototype.loadSound = function() {

  return this.loadSounds.apply(this, arguments);

};

PLAYGROUND.Application.prototype.loadSounds = function() {

  for (var i = 0; i < arguments.length; i++) {

    var arg = arguments[i];

    /* polymorphism at its finest */

    if (typeof arg === "object") {

      for (var key in arg) this.loadSounds(arg[key]);

    } else {
      this.sound.load(arg);
    }
  }

};

/* file: src/SoundWebAudioAPI.js */

PLAYGROUND.SoundWebAudioAPI = function(app, audioContext) {

  this.app = app;

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.app.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

  this.context = audioContext;

  this.gainNode = this.context.createGain()
  this.gainNode.connect(this.context.destination);

  this.compressor = this.context.createDynamicsCompressor();
  this.compressor.connect(this.gainNode);

  this.output = this.gainNode;

  this.gainNode.gain.value = 1.0;

  this.pool = [];
  this.volume = 1.0;

  this.setMasterPosition(0, 0, 0);

  this.loops = [];

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.SoundWebAudioAPI.prototype = {

  buffers: {},
  aliases: {},

  alias: function(alias, source, volume, rate) {

    this.aliases[alias] = {
      source: source,
      volume: volume,
      rate: rate
    };

  },

  setMaster: function(volume) {

    this.volume = volume;

    this.gainNode.gain.value = volume;

  },

  load: function(file) {

    var entry = this.app.getAssetEntry(file, "sounds", this.audioFormat);

    var sampler = this;

    var request = new XMLHttpRequest();

    request.open("GET", entry.url, true);
    request.responseType = "arraybuffer";

    var id = this.app.loader.add(entry.url);

    request.onload = function() {

      sampler.context.decodeAudioData(this.response, function(decodedBuffer) {
        sampler.buffers[entry.key] = decodedBuffer;
        sampler.app.loader.success(entry.url);
      });

    }

    request.send();

  },

  cleanArray: function(array, property) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i] === null || (property && array[i][property])) {
        array.splice(i--, 1);
        len--;
      }
    }
  },

  setMasterPosition: function(x, y, z) {

    this.masterPosition = {
      x: x,
      y: y,
      z: z
    };

    this.context.listener.setPosition(x, y, z)
      // this.context.listener.setOrientation(0, 0, -1, 0, 1, 0);
      // this.context.listener.dopplerFactor = 1;
      // this.context.listener.speedOfSound = 343.3;
  },

  getSoundBuffer: function() {
    if (!this.pool.length) {
      for (var i = 0; i < 100; i++) {

        var buffer, gain, panner;

        var nodes = [
          buffer = this.context.createBufferSource(),
          gain = this.context.createGain(),
          panner = this.context.createPanner()
        ];

        panner.distanceModel = "linear";

        // 1 - rolloffFactor * (distance - refDistance) / (maxDistance - refDistance)
        // refDistance / (refDistance + rolloffFactor * (distance - refDistance))
        panner.refDistance = 1;
        panner.maxDistance = 600;
        panner.rolloffFactor = 1.0;


        // panner.setOrientation(-1, -1, 0);

        this.pool.push(nodes);

        nodes[0].connect(nodes[1]);
        // nodes[1].connect(nodes[2]);
        nodes[1].connect(this.output);
      }
    }

    return this.pool.pop();
  },

  play: function(name, loop) {

    var alias = this.aliases[name];

    var nodes = this.getSoundBuffer();

    if (alias) name = alias.source;

    bufferSource = nodes[0];
    bufferSource.gainNode = nodes[1];
    bufferSource.pannerNode = nodes[2];
    bufferSource.buffer = this.buffers[name];
    bufferSource.loop = loop || false;
    bufferSource.key = name;

    bufferSource.alias = alias;

    this.setVolume(bufferSource, 1.0);
    this.setPlaybackRate(bufferSource, 1.0);

    if (this.loop) {
      //  bufferSource.loopStart = this.loopStart;
      // bufferSource.loopEnd = this.loopEnd;
    }


    bufferSource.start(0);

    bufferSource.volumeLimit = 1;

    this.setPosition(bufferSource, this.masterPosition.x, this.masterPosition.y, this.masterPosition.z);

    return bufferSource;
  },

  stop: function(what) {

    if (!what) return;

    what.stop(0);

  },

  setPlaybackRate: function(sound, rate) {

    if (!sound) return;

    if (sound.alias) rate *= sound.alias.rate;

    return sound.playbackRate.value = rate;
  },

  setPosition: function(sound, x, y, z) {

    if (!sound) return;

    sound.pannerNode.setPosition(x, y || 0, z || 0);
  },

  setVelocity: function(sound, x, y, z) {

    if (!sound) return;

    sound.pannerNode.setPosition(x, y || 0, z || 0);

  },

  getVolume: function(sound) {

    if (!sound) return;

    return sound.gainNode.gain.value;

  },

  setVolume: function(sound, volume) {

    if (!sound) return;

    if (sound.alias) volume *= sound.alias.volume;

    return sound.gainNode.gain.value = Math.max(0, volume);
  },

  fadeOut: function(sound) {

    if (!sound) return;

    sound.fadeOut = true;

    this.loops.push(sound);

    return sound;

  },

  fadeIn: function(sound) {

    if (!sound) return;

    sound.fadeIn = true;

    this.loops.push(sound);
    this.setVolume(sound, 0);


    return sound;

  },

  step: function(delta) {

    for (var i = 0; i < this.loops.length; i++) {

      var loop = this.loops[i];

      if (loop.fadeIn) {
        var volume = this.getVolume(loop);
        volume = this.setVolume(loop, Math.min(1.0, volume + delta * 0.5));

        if (volume >= 1.0) {
          this.loops.splice(i--, 1);
        }
      }

      if (loop.fadeOut) {
        var volume = this.getVolume(loop);
        volume = this.setVolume(loop, Math.min(1.0, volume - delta * 0.5));

        if (volume <= 0) {
          this.loops.splice(i--, 1);
          this.stop(loop);
        }
      }

    }

  }

};

/* file: src/SoundAudio.js */

PLAYGROUND.SoundAudio = function(app) {

  this.app = app;

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.app.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

};

PLAYGROUND.SoundAudio.prototype = {

  samples: {},

  setMaster: function(volume) {

    this.volume = volume;

  },

  setMasterPosition: function() {

  },

  setPosition: function(x, y, z) {
    return;
  },

  load: function(file) {

    var url = "sounds/" + file + "." + this.audioFormat;

    var loader = this.app.loader;

    this.app.loader.add(url);

    var audio = this.samples[file] = new Audio;

    audio.addEventListener("canplay", function() {
      loader.success(url);
    });

    audio.addEventListener("error", function() {
      loader.error(url);
    });

    audio.src = url;

  },

  play: function(key, loop) {

    var sound = this.samples[key];

    sound.currentTime = 0;
    sound.loop = loop;
    sound.play();

    return sound;

  },

  stop: function(what) {

    if (!what) return;

    what.pause();

  },

  step: function(delta) {

  },

  setPlaybackRate: function(sound, rate) {

    return;
  },

  setVolume: function(sound, volume) {

    sound.volume = volume * this.volume;

  },

  setPosition: function() {

  }

};

/* file: src/Touch.js */

PLAYGROUND.Touch = function(app, element) {

  PLAYGROUND.Events.call(this);

  this.app = app;

  this.element = element;

  this.buttons = {};

  this.touches = {};

  this.x = 0;
  this.y = 0;

  element.addEventListener("touchmove", this.touchmove.bind(this));
  element.addEventListener("touchstart", this.touchstart.bind(this));
  element.addEventListener("touchend", this.touchend.bind(this));

};

PLAYGROUND.Touch.prototype = {

  getElementOffset: function(element) {

    var offsetX = 0;
    var offsetY = 0;

    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    }

    while ((element = element.offsetParent));

    return {
      x: offsetX,
      y: offsetY
    };

  },

  handleResize: function() {

    this.elementOffset = this.getElementOffset(this.element);

  },

  touchmove: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];

      touchmoveEvent = {}

      this.x = touchmoveEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      this.y = touchmoveEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchmoveEvent.original = touch;
      touchmoveEvent.id = touchmoveEvent.identifier = touch.identifier;

      this.touches[touch.identifier].x = touchmoveEvent.x;
      this.touches[touch.identifier].y = touchmoveEvent.y;

      this.trigger("touchmove", touchmoveEvent);

    }

    e.preventDefault();

  },

  touchstart: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];

      var touchstartEvent = {}

      this.x = touchstartEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      this.y = touchstartEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchstartEvent.original = e.touch;
      touchstartEvent.id = touchstartEvent.identifier = touch.identifier;

      this.touches[touch.identifier] = {
        x: touchstartEvent.x,
        y: touchstartEvent.y
      };

      this.trigger("touchstart", touchstartEvent);

    }

    e.preventDefault();

  },

  touchend: function(e) {

    for (var i = 0; i < e.changedTouches.length; i++) {

      var touch = e.changedTouches[i];
      var touchendEvent = {};

      touchendEvent.x = (touch.pageX - this.elementOffset.x - this.app.offsetX) / this.app.scale | 0;
      touchendEvent.y = (touch.pageY - this.elementOffset.y - this.app.offsetY) / this.app.scale | 0;

      touchendEvent.original = touch;
      touchendEvent.id = touchendEvent.identifier = touch.identifier;

      delete this.touches[touch.identifier];

      this.trigger("touchend", touchendEvent);

    }

    e.preventDefault();

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Touch.prototype, PLAYGROUND.Events.prototype);

/* file: src/Tween.js */

PLAYGROUND.Tween = function(manager, context) {

  PLAYGROUND.Events.call(this);

  this.manager = manager;
  this.context = context;

  PLAYGROUND.Utils.extend(this, {

    actions: [],
    index: -1,

    prevEasing: "045",
    prevDuration: 0.5

  });

  this.current = false;

};

PLAYGROUND.Tween.prototype = {

  add: function(properties, duration, easing) {

    if (duration) this.prevDuration = duration;
    else duration = 0.5;
    if (easing) this.prevEasing = easing;
    else easing = "045";

    this.actions.push([properties, duration, easing]);

    return this;

  },

  discard: function() {

    this.manager.discard(this.context, this);

    return this;

  },

  to: function(properties, duration, easing) {
    return this.add(properties, duration, easing);
  },

  loop: function() {

    this.looped = true;

    return this;

  },

  repeat: function(times) {

    this.actions.push(["repeat", times]);

  },

  wait: function(time) {

    this.actions.push(["wait", time]);

    return this;

  },

  delay: function(time) {

    this.actions.push(["wait", time]);

  },

  stop: function() {

    this.manager.remove(this);

    return this;

  },

  play: function() {

    this.manager.add(this);

    this.finished = false;

    return this;

  },


  end: function() {

    var lastAnimationIndex = 0;

    for (var i = this.index + 1; i < this.actions.length; i++) {
      if (typeof this.actions[i][0] === "object") lastAnimationIndex = i;
    }

    this.index = lastAnimationIndex - 1;
    this.next();
    this.delta = this.duration;
    this.step(0);

    return this;

  },

  forward: function() {

    this.delta = this.duration;
    this.step(0);

  },

  rewind: function() {

    this.delta = 0;
    this.step(0);

  },

  next: function() {

    this.delta = 0;

    this.index++;

    if (this.index >= this.actions.length) {

      if (this.looped) {

        this.trigger("loop", {
          tween: this
        });

        this.index = 0;
      } else {

        this.trigger("finished", {
          tween: this
        });

        this.finished = true;
        this.manager.remove(this);
        return;
      }
    }

    this.current = this.actions[this.index];

    if (this.current[0] === "wait") {

      this.duration = this.current[1];
      this.currentAction = "wait";

    } else {

      /* calculate changes */

      var properties = this.current[0];

      /* keep keys as array for 0.0001% performance boost */

      this.keys = Object.keys(properties);

      this.change = [];
      this.before = [];
      this.types = [];

      for (i = 0; i < this.keys.length; i++) {
        var key = this.keys[i];

        if (typeof this.context[key] === "number") {
          this.before.push(this.context[key]);
          this.change.push(properties[key] - this.context[key]);
          this.types.push(0);
        } else {
          var before = cq.color(this.context[key]);

          this.before.push(before);

          var after = cq.color(properties[key]);

          var temp = [];

          for (var j = 0; j < 3; j++) {
            temp.push(after[j] - before[j]);
          }

          this.change.push(temp);

          this.types.push(1);
        }

      }

      this.currentAction = "animate";

      this.duration = this.current[1];
      this.easing = this.current[2];

    }


  },

  prev: function() {

  },

  step: function(delta) {

    this.delta += delta;

    if (!this.current) this.next();

    switch (this.currentAction) {

      case "animate":
        this.doAnimate(delta);
        break;

      case "wait":
        this.doWait(delta);
        break;

    }

    if (this.onstep) this.onstep(this.context);

  },

  doAnimate: function(delta) {

    this.progress = Math.min(1, this.delta / this.duration);

    var mod = PLAYGROUND.Utils.ease(this.progress, this.easing);

    for (var i = 0; i < this.keys.length; i++) {

      var key = this.keys[i];

      switch (this.types[i]) {

        /* number */

        case 0:

          this.context[key] = this.before[i] + this.change[i] * mod;

          break;

          /* color */

        case 1:

          var change = this.change[i];
          var before = this.before[i];
          var color = [];

          for (var j = 0; j < 3; j++) {
            color.push(before[j] + change[j] * mod | 0);
          }

          this.context[key] = "rgb(" + color.join(",") + ")";

          break;
      }
    }

    if (this.progress >= 1) {
      this.next();
    }

  },

  doWait: function(delta) {

    if (this.delta >= this.duration) this.next();

  }

};

PLAYGROUND.Utils.extend(PLAYGROUND.Tween.prototype, PLAYGROUND.Events.prototype);

PLAYGROUND.TweenManager = function(app) {

  this.tweens = [];

  if (app) {
    this.app = app;
    this.app.tween = this.tween.bind(this);
  }

  this.delta = 0;

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.TweenManager.prototype = {

  defaultEasing: "128",

  discard: function(object, safe) {

    for (var i = 0; i < this.tweens.length; i++) {

      var tween = this.tweens[i];

      if (tween.context === object && tween !== safe) this.remove(tween);

    }

  },

  tween: function(context) {

    var tween = new PLAYGROUND.Tween(this, context);

    this.add(tween);

    return tween;

  },

  step: function(delta) {

    this.delta += delta;

    for (var i = 0; i < this.tweens.length; i++) {

      var tween = this.tweens[i];

      if (!tween._remove) tween.step(delta);

      if (tween._remove) this.tweens.splice(i--, 1);

    }

  },

  add: function(tween) {

    tween._remove = false;

    var index = this.tweens.indexOf(tween);

    if (index === -1) this.tweens.push(tween);

  },

  remove: function(tween) {

    tween._remove = true;

  }

};

/* file: src/VideoRecorder.js */

/* Video recorder */

PLAYGROUND.VideoRecorder = function(app, args) {

  this.app = app;

  this.app.on("step", this.step.bind(this));

};

PLAYGROUND.VideoRecorder.prototype = {

  setup: function(args) {

    this.region = false;

    PLAYGROUND.Utils.extend(this, {
      followMouse: false,
      framerate: 20,
      scale: 1.0
    }, args);

    if (!this.region) {
      this.region = [0, 0, this.app.layer.width, this.app.layer.height];
    }

    this.playbackRate = this.framerate / 60;

    this.layer = cq(this.region[2] * this.scale | 0, this.region[3] * this.scale | 0);
  },

  start: function(args) {
    this.setup(args);
    this.encoder = new Whammy.Video(this.framerate);
    this.captureTimeout = 0;
    this.recording = true;
  },

  step: function(delta) {

    if (this.encoder) {

      this.captureTimeout -= delta * 1000;

      if (this.captureTimeout <= 0) {
        this.captureTimeout = 1000 / this.framerate + this.captureTimeout;

        this.layer.drawImage(this.app.layer.canvas, this.region[0], this.region[1], this.region[2], this.region[3], 0, 0, this.layer.width, this.layer.height);
        this.encoder.add(this.layer.canvas);
      }

      this.app.screen.save().lineWidth(8).strokeStyle("#c00").strokeRect(0, 0, this.app.screen.width, this.app.screen.height).restore();
    }

  },

  stop: function() {
    if (!this.encoder) return;
    var output = this.encoder.compile();
    var url = (window.webkitURL || window.URL).createObjectURL(output);
    window.open(url);
    this.recording = false;

    delete this.encoder;
  },

  toggle: function(args) {

    if (this.encoder) this.stop();
    else this.start(args);

  }

};

PLAYGROUND.Application.prototype.record = function(args) {

  this.videoRecorder.toggle(args);

};

/* file: src/Atlases.js */

PLAYGROUND.Application.prototype.loadAtlases = function() {

  for (var i = 0; i < arguments.length; i++) {

    var arg = arguments[i];

    /* polymorphism at its finest */

    if (typeof arg === "object") {

      for (var key in arg) this.loadAtlases(arg[key]);

    } else {

      /* if argument is not an object/array let's try to load it */

      this._loadAtlas(arg)

    }
  }

};

PLAYGROUND.Application.prototype.loadAtlas = function() {

  return this.loadAtlases.apply(this, arguments);

};

PLAYGROUND.Application.prototype._loadAtlas = function(filename) {

  var entry = this.getAssetEntry(filename, "atlases", "png");

  this.loader.add(entry.url);

  var atlas = this.atlases[entry.key] = {};

  var image = atlas.image = new Image;

  image.addEventListener("load", function() {
    loader.success(entry.url);
  });

  image.addEventListener("error", function() {
    loader.error(entry.url);
  });

  image.src = entry.url;

  /* data */

  var request = new XMLHttpRequest();

  request.open("GET", entry.path + ".json", true);

  this.loader.add(entry.path + ".json");

  var loader = this.loader;

  request.onload = function() {

    var data = JSON.parse(this.response);

    atlas.frames = [];

    for (var i = 0; i < data.frames.length; i++) {
      var frame = data.frames[i];

      atlas.frames.push({
        region: [frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h],
        offset: [frame.spriteSourceSize.x || 0, frame.spriteSourceSize.y || 0],
        width: frame.sourceSize.w,
        height: frame.sourceSize.h
      });
    }

    loader.success(entry.path + ".json");

  }

  request.send();
};

/* file: src/Fonts.js */

PLAYGROUND.Application.prototype.loadFont = function(name) {

  var styleNode = document.createElement("style");
  styleNode.type = "text/css";

  var formats = {
    "woff": "woff",
    "ttf": "truetype"
  };

  var sources = "";

  for (var ext in formats) {
    var type = formats[ext];
    sources += " url(\"fonts/" + name + "." + ext + "\") format('" + type + "');"
  }

  styleNode.textContent = "@font-face { font-family: '" + name + "'; src: " + sources + " }";

  document.head.appendChild(styleNode);

  var layer = cq(32, 32);

  layer.font("10px Testing");
  layer.fillText(16, 16, 16).trim();

  var width = layer.width;
  var height = layer.height;

  this.loader.add("font " + name);

  var self = this;

  function check() {

    var layer = cq(32, 32);

    layer.font("10px " + name).fillText(16, 16, 16);
    layer.trim();

    if (layer.width !== width || layer.height !== height) {

      self.loader.ready("font " + name);

    } else {

      setTimeout(check, 250);

    }

  };

  check();

};

/* file: src/DefaultState.js */

PLAYGROUND.DefaultState = {

};

/* file: src/LoadingScreen.js */

PLAYGROUND.LoadingScreen = {

  /* basic loading screen using DOM */

  logoRaw: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAASBAMAAADPiN0xAAAAGFBMVEUAAQAtLixHSUdnaGaJioimqKXMzsv7/fr5shgVAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98EAwkeA4oQWJ4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB9klEQVQ4y72UvW+rMBDAz+FrpVKrrFmesmapWNOlrKjSe1kZ+uoVAvj+/frujG1SaJcqJwU7voOf7xMQzQmsIDi5NPTMsLRntH3U+F6SAZo3NlCvcgBFJz8o+vkDiE63lI95Y/UmpinsZWkgJWJiDbAVQ16htptxSTNloIlugwaw001Ey3ASF3so6L1qLNXzQS5S0UGKL/CI5wWNriE0UH9Yty37LqIVg+wsqu7Ix0MwVBSF/dU+jv2SNnma021LEdPqVnMeU3xAu0kXcSGjmq7Ox4E2Wn88LZ2+EFj3avjixzai6VPVyuYveZLHF2XfdDnvAq27DIHGuq+0DJFsE30OtB1KqOwd8Dr7PcM4b+jfj2g5lp4WyntBK66qua3JzEA+uXJpwH/NlVuzRVPY/kTLB2mjuN+KwdZ8FOy8j2gDbEUSqumnSCY4lf4ibq3IhVM4ycZQRnv+zFqVdJQVn6BxvUqebGpuaNo3sZxwBzjajiMZOoBiwyVF+kCr+nUaJOaGpnAeRPPJZTr4FqmHRXcneEo4DqQ/ftfdnLeDrUAME8xWKPeKCwW6YkEpXfs3p1EWJhdcUAYP0TI/uYaV8cgjwBovaeyWwji2T9rTFIdS/cP/MnkTLRUWxgNNZVin7bT5fqT9miDcUVJzR1gRpfIONMmulU+5Qqr6zXAUqAAAAABJRU5ErkJggg==",

  create: function() {

    var self = this;

    this.logo = new Image;

    this.logo.addEventListener("load", function() {
      self.ready = true;
      self.createElements();
    });

    this.logo.src = this.logoRaw;

    this.background = "#000";

    if (window.getComputedStyle) {
      this.background = window.getComputedStyle(document.body).backgroundColor || "#000";
    }


  },

  enter: function() {

    this.current = 0;

  },

  leave: function() {

    this.locked = true;

    this.animation = this.app.tween(this)
      .to({
        current: 1
      }, 0.5);

  },

  step: function(delta) {

    if (this.locked) {

      if (this.animation.finished) {
        this.locked = false;
        this.wrapper.parentNode.removeChild(this.wrapper);
      }

    } else {

      this.current = this.current + Math.abs(this.app.loader.progress - this.current) * delta;
    }

  },

  createElements: function() {

    this.width = window.innerWidth * 0.6 | 0;
    this.height = window.innerHeight * 0.1 | 0;

    this.wrapper = document.createElement("div");
    this.wrapper.style.width = this.width + "px";
    this.wrapper.style.height = this.height + "px";
    this.wrapper.style.background = "#000";
    this.wrapper.style.border = "4px solid #fff";
    this.wrapper.style.position = "absolute";
    this.wrapper.style.left = (window.innerWidth / 2 - this.width / 2 | 0) + "px";
    this.wrapper.style.top = (window.innerHeight / 2 - this.height / 2 | 0) + "px";
    this.wrapper.style.zIndex = 100;

    this.app.container.appendChild(this.wrapper);

    this.progressBar = document.createElement("div");
    this.progressBar.style.width = "0%";
    this.progressBar.style.height = this.height + "px";
    this.progressBar.style.background = "#fff";

    this.wrapper.appendChild(this.progressBar);

  },


  render: function() {

    if (!this.ready) return;

    this.progressBar.style.width = (this.current * 100 | 0) + "%";


  }

};

/* file: src/lib/CanvasQuery.js */

/*

  Canvas Query r2

  http://canvasquery.com

  (c) 2012-2015 http://rezoner.net

  Canvas Query may be freely distributed under the MIT license.

  ! fixed color parsers

*/


(function() {

  var COCOONJS = false;

  var Canvas = window.HTMLCanvasElement;
  var Image = window.HTMLImageElement;
  var COCOONJS = navigator.isCocoonJS;

  var cq = function(selector) {
    if (arguments.length === 0) {
      var canvas = cq.createCanvas(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", function() {
        // canvas.width = window.innerWidth;
        // canvas.height = window.innerHeight;
      });
    } else if (typeof selector === "string") {
      var canvas = document.querySelector(selector);
    } else if (typeof selector === "number") {
      var canvas = cq.createCanvas(arguments[0], arguments[1]);
    } else if (selector instanceof Image) {
      var canvas = cq.createCanvas(selector);
    } else if (selector instanceof cq.Layer) {
      return selector;
    } else {
      var canvas = selector;
    }

    return new cq.Layer(canvas);
  };

  cq.lineSpacing = 1.0;
  cq.defaultFont = "Arial";

  cq.cocoon = function(selector) {
    if (arguments.length === 0) {
      var canvas = cq.createCocoonCanvas(window.innerWidth, window.innerHeight);
      window.addEventListener("resize", function() {});
    } else if (typeof selector === "string") {
      var canvas = document.querySelector(selector);
    } else if (typeof selector === "number") {
      var canvas = cq.createCocoonCanvas(arguments[0], arguments[1]);
    } else if (selector instanceof Image) {
      var canvas = cq.createCocoonCanvas(selector);
    } else if (selector instanceof cq.Layer) {
      return selector;
    } else {
      var canvas = selector;
    }

    return new cq.Layer(canvas);
  }


  cq.extend = function() {
    for (var i = 1; i < arguments.length; i++) {
      for (var j in arguments[i]) {
        arguments[0][j] = arguments[i][j];
      }
    }

    return arguments[0];
  };

  cq.augment = function() {
    for (var i = 1; i < arguments.length; i++) {
      _.extend(arguments[0], arguments[i]);
      arguments[i](arguments[0]);
    }
  };

  cq.distance = function(x1, y1, x2, y2) {
    if (arguments.length > 2) {
      var dx = x1 - x2;
      var dy = y1 - y2;

      return Math.sqrt(dx * dx + dy * dy);
    } else {
      return Math.abs(x1 - y1);
    }
  };

  /* fast.js */

  cq.fastApply = function(subject, thisContext, args) {

    switch (args.length) {
      case 0:
        return subject.call(thisContext);
      case 1:
        return subject.call(thisContext, args[0]);
      case 2:
        return subject.call(thisContext, args[0], args[1]);
      case 3:
        return subject.call(thisContext, args[0], args[1], args[2]);
      case 4:
        return subject.call(thisContext, args[0], args[1], args[2], args[3]);
      case 5:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      case 8:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
      case 9:
        return subject.call(thisContext, args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
      default:
        return subject.apply(thisContext, args);
    }

  };

  cq.extend(cq, {

    smoothing: true,

    blend: function(below, above, mode, mix) {

      if (typeof mix === "undefined") mix = 1;

      var below = cq(below);
      var mask = below.clone();
      var above = cq(above);

      below.save();
      below.globalAlpha(mix);
      below.globalCompositeOperation(mode);
      below.drawImage(above.canvas, 0, 0);
      below.restore();

      mask.save();
      mask.globalCompositeOperation("source-in");
      mask.drawImage(below.canvas, 0, 0);
      mask.restore();

      return mask;
    },

    matchColor: function(color, palette) {
      var rgbPalette = [];

      for (var i = 0; i < palette.length; i++) {
        rgbPalette.push(cq.color(palette[i]));
      }

      var imgData = cq.color(color);

      var difList = [];
      for (var j = 0; j < rgbPalette.length; j++) {
        var rgbVal = rgbPalette[j];
        var rDif = Math.abs(imgData[0] - rgbVal[0]),
          gDif = Math.abs(imgData[1] - rgbVal[1]),
          bDif = Math.abs(imgData[2] - rgbVal[2]);
        difList.push(rDif + gDif + bDif);
      }

      var closestMatch = 0;
      for (var j = 0; j < palette.length; j++) {
        if (difList[j] < difList[closestMatch]) {
          closestMatch = j;
        }
      }

      return palette[closestMatch];
    },

    temp: function(width, height) {
      if (!this.tempLayer) {
        this.tempLayer = cq(1, 1);
      }

      if (width instanceof Image) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width, 0, 0);
      } else if (width instanceof Canvas) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width, 0, 0);
      } else if (width instanceof CanvasQuery.Layer) {
        this.tempLayer.width = width.width;
        this.tempLayer.height = width.height;
        this.tempLayer.context.drawImage(width.canvas, 0, 0);
      } else {
        this.tempLayer.width = width;
        this.tempLayer.height = height;
      }

      return this.tempLayer;
    },

    wrapValue: function(value, min, max) {
      if (value < min) return max + (value % max);
      if (value >= max) return value % max;
      return value;
    },

    limitValue: function(value, min, max) {
      return value < min ? min : value > max ? max : value;
    },

    mix: function(a, b, amount) {
      return a + (b - a) * amount;
    },

    hexToRgb: function(hex) {
      if (hex.length === 7) return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
      else return ['0x' + hex[1] + hex[1] | 0, '0x' + hex[2] + hex[2] | 0, '0x' + hex[3] + hex[3] | 0];
    },

    rgbToHex: function(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1, 7);
    },

    /* author: http://mjijackson.com/ */

    rgbToHsl: function(r, g, b) {

      if (r instanceof Array) {
        b = r[2];
        g = r[1];
        r = r[0];
      }

      r /= 255, g /= 255, b /= 255;
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h, s, l];
    },

    /* author: http://mjijackson.com/ */

    hue2rgb: function(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    },

    hslToRgb: function(h, s, l) {
      var r, g, b;

      if (s == 0) {
        r = g = b = l; // achromatic
      } else {

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = this.hue2rgb(p, q, h + 1 / 3);
        g = this.hue2rgb(p, q, h);
        b = this.hue2rgb(p, q, h - 1 / 3);
      }

      return [r * 255 | 0, g * 255 | 0, b * 255 | 0];
    },

    rgbToHsv: function(r, g, b) {
      if (r instanceof Array) {
        b = r[2];
        g = r[1];
        r = r[0];
      }

      r = r / 255, g = g / 255, b = b / 255;
      var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max == 0 ? 0 : d / max;

      if (max == min) {
        h = 0; // achromatic
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }

      return [h, s, v];
    },

    hsvToRgb: function(h, s, v) {
      var r, g, b;

      var i = Math.floor(h * 6);
      var f = h * 6 - i;
      var p = v * (1 - s);
      var q = v * (1 - f * s);
      var t = v * (1 - (1 - f) * s);

      switch (i % 6) {
        case 0:
          r = v, g = t, b = p;
          break;
        case 1:
          r = q, g = v, b = p;
          break;
        case 2:
          r = p, g = v, b = t;
          break;
        case 3:
          r = p, g = q, b = v;
          break;
        case 4:
          r = t, g = p, b = v;
          break;
        case 5:
          r = v, g = p, b = q;
          break;
      }

      return [r * 255, g * 255, b * 255];
    },

    color: function() {
      var result = new cq.Color();
      result.parse(arguments[0], arguments[1]);
      return result;
    },

    poolArray: [],

    pool: function() {

      if (!this.poolArray.length) {
        for (var i = 0; i < 100; i++) {
          this.poolArray.push(this.createCanvas(1, 1));
        }
      }

      return this.poolArray.pop();

    },

    createCanvas: function(width, height) {
      var result = document.createElement("canvas");

      if (arguments[0] instanceof Image || arguments[0] instanceof Canvas) {
        var image = arguments[0];
        result.width = image.width;
        result.height = image.height;
        result.getContext("2d").drawImage(image, 0, 0);
      } else {
        result.width = width;
        result.height = height;
      }


      return result;
    },

    createCocoonCanvas: function(width, height) {
      var result = document.createElement("screencanvas");

      if (arguments[0] instanceof Image) {
        var image = arguments[0];
        result.width = image.width;
        result.height = image.height;
        result.getContext("2d").drawImage(image, 0, 0);
      } else {
        result.width = width;
        result.height = height;
      }

      return result;
    },

    createImageData: function(width, height) {
      return cq.createCanvas(width, height).getContext("2d").createImageData(width, height);
    }

  });

  cq.Layer = function(canvas) {
    this.context = canvas.getContext("2d");
    this.canvas = canvas;
    this.alignX = 0;
    this.alignY = 0;
    this.aligned = false;
    this.update();
  };

  cq.Layer.prototype = {

    update: function() {

      var smoothing = cq.smoothing;

      if (typeof this.smoothing !== "undefined") smoothing = this.smoothing;

      this.context.mozImageSmoothingEnabled = smoothing;
      this.context.msImageSmoothingEnabled = smoothing;
      this.context.imageSmoothingEnabled = smoothing;

      if (COCOONJS) Cocoon.Utils.setAntialias(smoothing);
    },

    appendTo: function(selector) {
      if (typeof selector === "object") {
        var element = selector;
      } else {
        var element = document.querySelector(selector);
      }

      element.appendChild(this.canvas);

      return this;
    },

    a: function(a) {
      if (arguments.length) {
        this.previousAlpha = this.globalAlpha();
        return this.globalAlpha(a);
      } else
        return this.globalAlpha();
    },

    ra: function() {
      return this.a(this.previousAlpha);
    },
    /*
        drawImage: function() {

          if (!this.alignX && !this.alignY) {
            this.context.call
          }

            return this;


        },

        restore: function() {
          this.context.restore();
          this.alignX = 0;
          this.alignY = 0;
        },
        */

    realign: function() {

      this.alignX = this.prevAlignX;
      this.alignY = this.prevAlignY;

      return this;

    },

    align: function(x, y) {

      if (typeof y === "undefined") y = x;

      this.alignX = x;
      this.alignY = y;

      return this;
    },


    /* save translate align rotate scale */

    stars: function(x, y, alignX, alignY, rotation, scaleX, scaleY) {

      if (typeof alignX === "undefined") alignX = 0.5;
      if (typeof alignY === "undefined") alignY = 0.5;
      if (typeof rotation === "undefined") rotation = 0;
      if (typeof scaleX === "undefined") scaleX = 1.0;
      if (typeof scaleY === "undefined") scaleY = scaleX;

      this.save();
      this.translate(x, y);
      this.align(alignX, alignY);
      this.rotate(rotation);
      this.scale(scaleX, scaleY);

      return this;
    },

    tars: function(x, y, alignX, alignY, rotation, scaleX, scaleY) {

      if (typeof alignX === "undefined") alignX = 0.5;
      if (typeof alignY === "undefined") alignY = 0.5;
      if (typeof rotation === "undefined") rotation = 0;
      if (typeof scaleX === "undefined") scaleX = 1.0;
      if (typeof scaleY === "undefined") scaleY = scaleX;

      this.translate(x, y);
      this.align(alignX, alignY);
      this.rotate(rotation);
      this.scale(scaleX, scaleY);

      return this;

    },

    fillRect: function() {

      if (this.alignX || this.alignY) {
        arguments[0] -= arguments[2] * this.alignX | 0;
        arguments[1] -= arguments[3] * this.alignY | 0;
      }

      cq.fastApply(this.context.fillRect, this.context, arguments);

      return this;

    },

    strokeRect: function() {

      if (this.alignX || this.alignY) {
        arguments[0] -= arguments[2] * this.alignX | 0;
        arguments[1] -= arguments[3] * this.alignY | 0;
      }

      cq.fastApply(this.context.strokeRect, this.context, arguments);

      return this;

    },

    drawImage: function(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

      if (this.alignX || this.alignY) {
        if (sWidth == null) {
          sx -= image.width * this.alignX | 0;
          sy -= image.height * this.alignY | 0;
        } else {
          dx -= dWidth * this.alignX | 0;
          dy -= dHeight * this.alignY | 0;
        }
      }

      if (sWidth == null) {
        this.context.drawImage(image, sx, sy);
      } else if (dx == null) {
        this.context.drawImage(image, sx, sy, sWidth, sHeight);
      } else {
        this.context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      }

      // cq.fastApply(this.context.drawImage, this.context, arguments);

      return this;

    },

    save: function() {
      this.prevAlignX = this.alignX;
      this.prevAlignY = this.alignY;

      this.context.save();

      return this;
    },

    restore: function() {

      this.realign();
      this.context.restore();
      return this;
    },

    drawTile: function(image, x, y, frameX, frameY, frameWidth, frameHeight, frames, frame) {

    },

    drawAtlasFrame: function(atlas, frame, x, y) {

      var frame = atlas.frames[frame];

      this.drawRegion(
        atlas.image,
        frame.region,
        x - frame.width * this.alignX + frame.offset[0] + frame.region[2] * this.alignX, y - frame.height * this.alignY + frame.offset[1] + frame.region[3] * this.alignY
      );

      return this;

    },


    imageFill: function(image, width, height) {

      var scale = Math.max(width / image.width, height / image.height);

      this.save();
      this.scale(scale, scale);
      this.drawImage(image, 0, 0);
      this.restore();

    },

    drawRegion: function(image, region, x, y, scale) {

      scale = scale || 1;

      var dWidth = region[2] * scale | 0;
      var dHeight = region[3] * scale | 0;

      this.context.drawImage(
        image, region[0], region[1], region[2], region[3],
        x - dWidth * this.alignX | 0, y - dHeight * this.alignY | 0, dWidth, dHeight
      );

      return this;
    },

    cache: function() {
      return this.clone().canvas;

      /* FFS .... image.src is no longer synchronous when assigning dataURL */

      var image = new Image;
      image.src = this.canvas.toDataURL();
      return image;
    },

    blendOn: function(what, mode, mix) {
      cq.blend(what, this, mode, mix);

      return this;
    },

    posterize: function(pc, inc) {
      pc = pc || 32;
      inc = inc || 4;
      var imgdata = this.getImageData(0, 0, this.width, this.height);
      var data = imgdata.data;

      for (var i = 0; i < data.length; i += inc) {
        data[i] -= data[i] % pc; // set value to nearest of 8 possibilities
        data[i + 1] -= data[i + 1] % pc; // set value to nearest of 8 possibilities
        data[i + 2] -= data[i + 2] % pc; // set value to nearest of 8 possibilities
      }

      this.putImageData(imgdata, 0, 0); // put image data to canvas

      return this;
    },


    bw: function(pc) {
      pc = 128;
      var imgdata = this.getImageData(0, 0, this.width, this.height);
      var data = imgdata.data;
      // 8-bit: rrr ggg bb
      for (var i = 0; i < data.length; i += 4) {
        var v = ((data[i] + data[i + 1] + data[i + 2]) / 3);

        v = (v / 128 | 0) * 128;
        //data[i] = v; // set value to nearest of 8 possibilities
        //data[i + 1] = v; // set value to nearest of 8 possibilities
        data[i + 2] = (v / 255) * data[i]; // set value to nearest of 8 possibilities

      }

      this.putImageData(imgdata, 0, 0); // put image data to canvas
    },

    blend: function(what, mode, mix) {
      if (typeof what === "string") {
        var color = what;
        what = cq(this.canvas.width, this.canvas.height);
        what.fillStyle(color).fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      var result = cq.blend(this, what, mode, mix);

      this.canvas = result.canvas;
      this.context = result.context;

      return this;
    },

    textWithBackground: function(text, x, y, background, padding) {
      var w = this.measureText(text).width;
      var h = this.fontHeight() * 0.8;
      var f = this.fillStyle();
      var padding = padding || 2;

      this.fillStyle(background).fillRect(x - w / 2 - padding * 2, y - padding, w + padding * 4, h + padding * 2)
      this.fillStyle(f).textAlign("center").textBaseline("top").fillText(text, x, y);

      return this;
    },

    fillCircle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      this.context.fill();
      return this;
    },

    strokeCircle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      this.context.stroke();
      return this;
    },

    circle: function(x, y, r) {
      this.context.beginPath();
      this.context.arc(x, y, r, 0, Math.PI * 2);
      return this;
    },

    crop: function(x, y, w, h) {

      if (arguments.length === 1) {

        var y = arguments[0][1];
        var w = arguments[0][2];
        var h = arguments[0][3];
        var x = arguments[0][0];
      }

      var canvas = cq.createCanvas(w, h);
      var context = canvas.getContext("2d");

      context.drawImage(this.canvas, x, y, w, h, 0, 0, w, h);
      this.canvas.width = w;
      this.canvas.height = h;
      this.clear();
      this.context.drawImage(canvas, 0, 0);

      return this;
    },

    set: function(properties) {
      cq.extend(this.context, properties);
    },

    resize: function(width, height) {
      var w = width,
        h = height;

      if (arguments.length === 1) {
        w = arguments[0] * this.canvas.width | 0;
        h = arguments[0] * this.canvas.height | 0;
      } else {

        if (height === false) {
          if (this.canvas.width > width) {
            h = this.canvas.height * (width / this.canvas.width) | 0;
            w = width;
          } else {
            w = this.canvas.width;
            h = this.canvas.height;
          }
        } else if (width === false) {
          if (this.canvas.width > width) {
            w = this.canvas.width * (height / this.canvas.height) | 0;
            h = height;
          } else {
            w = this.canvas.width;
            h = this.canvas.height;
          }
        }
      }

      var cqresized = cq(w, h).drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, w, h);
      this.canvas = cqresized.canvas;
      this.context = cqresized.context;

      return this;
    },

    imageLine: function(image, region, x, y, ex, ey, scale) {
      if (!region) region = [0, 0, image.width, image.height];

      var distance = cq.distance(x, y, ex, ey);
      var count = distance / region[3] + 0.5 | 0;
      var angle = Math.atan2(ey - y, ex - x) + Math.PI / 2;

      this.save();

      this.translate(x, y);
      this.rotate(angle);

      if (scale) this.scale(scale, 1.0);

      for (var i = 0; i <= count; i++) {
        this.drawRegion(image, region, -region[2] / 2 | 0, -region[3] * (i + 1));
      }

      this.restore();

      return this;
    },

    trim: function(color, changes) {
      var transparent;

      if (color) {
        color = cq.color(color).toArray();
        transparent = !color[3];
      } else transparent = true;

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var bound = [this.canvas.width, this.canvas.height, 0, 0];

      var width = this.canvas.width;
      var height = this.canvas.height;

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (transparent) {
          if (!sourcePixels[i + 3]) continue;
        } else if (sourcePixels[i + 0] === color[0] && sourcePixels[i + 1] === color[1] && sourcePixels[i + 2] === color[2]) continue;

        var x = (i / 4 | 0) % this.canvas.width | 0;
        var y = (i / 4 | 0) / this.canvas.width | 0;

        if (x < bound[0]) bound[0] = x;
        if (x > bound[2]) bound[2] = x;

        if (y < bound[1]) bound[1] = y;
        if (y > bound[3]) bound[3] = y;
      }


      if (bound[2] === 0 && bound[3] === 0) {} else {
        if (changes) {
          changes.left = bound[0];
          changes.top = bound[1];

          changes.bottom = height - bound[3];
          changes.right = width - bound[2] - bound[0];

          changes.width = bound[2] - bound[0];
          changes.height = bound[3] - bound[1];
        }

        this.crop(bound[0], bound[1], bound[2] - bound[0] + 1, bound[3] - bound[1] + 1);
      }

      return this;
    },

    matchPalette: function(palette) {
      var imgData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

      var rgbPalette = [];

      for (var i = 0; i < palette.length; i++) {
        rgbPalette.push(cq.color(palette[i]));
      }


      for (var i = 0; i < imgData.data.length; i += 4) {
        var difList = [];
        if (!imgData.data[i + 3]) continue;

        for (var j = 0; j < rgbPalette.length; j++) {
          var rgbVal = rgbPalette[j];
          var rDif = Math.abs(imgData.data[i] - rgbVal[0]),
            gDif = Math.abs(imgData.data[i + 1] - rgbVal[1]),
            bDif = Math.abs(imgData.data[i + 2] - rgbVal[2]);
          difList.push(rDif + gDif + bDif);
        }

        var closestMatch = 0;

        for (var j = 0; j < palette.length; j++) {
          if (difList[j] < difList[closestMatch]) {
            closestMatch = j;
          }
        }

        var paletteRgb = cq.hexToRgb(palette[closestMatch]);
        imgData.data[i] = paletteRgb[0];
        imgData.data[i + 1] = paletteRgb[1];
        imgData.data[i + 2] = paletteRgb[2];

        /* dithering */
        //imgData.data[i + 3] = (255 * Math.random() < imgData.data[i + 3]) ? 255 : 0;

        //imgData.data[i + 3] = imgData.data[i + 3] > 128 ? 255 : 0;
        /*
        if (i % 3 === 0) {
          imgData.data[i] -= cq.limitValue(imgData.data[i] - 50, 0, 255);
          imgData.data[i + 1] -= cq.limitValue(imgData.data[i + 1] - 50, 0, 255);
          imgData.data[i + 2] -= cq.limitValue(imgData.data[i + 2] - 50, 0, 255);
        }
        */

      }

      this.context.putImageData(imgData, 0, 0);

      return this;
    },

    getPalette: function() {
      var palette = [];
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (sourcePixels[i + 3]) {
          var hex = cq.rgbToHex(sourcePixels[i + 0], sourcePixels[i + 1], sourcePixels[i + 2]);
          if (palette.indexOf(hex) === -1) palette.push(hex);
        }
      }

      return palette;
    },

    mapPalette: function() {

    },

    polygon: function(array) {

      this.beginPath();

      this.moveTo(array[0][0], array[0][1]);

      for (var i = 1; i < array.length; i++) {
        this.lineTo(array[i][0], array[i][1]);
      }

      this.closePath();

      return this;
    },

    fillPolygon: function(polygon) {
      this.beginPath();
      this.polygon(polygon);
      this.fill();
    },

    strokePolygon: function(polygon) {
      this.beginPath();
      this.polygon(polygon);
      this.stroke();
    },

    colorToMask: function(color, inverted) {
      color = cq.color(color).toArray();
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mask = [];

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        if (sourcePixels[i + 3] > 0) mask.push(inverted ? false : true);
        else mask.push(inverted ? true : false);
      }

      return mask;
    },

    grayscaleToMask: function() {

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mask = [];

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        mask.push(((sourcePixels[i + 0] + sourcePixels[i + 1] + sourcePixels[i + 2]) / 3) / 255);
      }

      return mask;
    },

    applyMask: function(mask) {
      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var mode = typeof mask[0] === "boolean" ? "bool" : "byte";

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        var value = mask[i / 4];
        sourcePixels[i + 3] = value * 255 | 0;
      }

      this.context.putImageData(sourceData, 0, 0);
      return this;
    },

    fillMask: function(mask) {

      var sourceData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var sourcePixels = sourceData.data;

      var maskType = typeof mask[0] === "boolean" ? "bool" : "byte";
      var colorMode = arguments.length === 2 ? "normal" : "gradient";

      var color = cq.color(arguments[1]);
      if (colorMode === "gradient") colorB = cq.color(arguments[2]);

      for (var i = 0, len = sourcePixels.length; i < len; i += 4) {
        var value = mask[i / 4];

        if (maskType === "byte") value /= 255;

        if (colorMode === "normal") {
          if (value) {
            sourcePixels[i + 0] = color[0] | 0;
            sourcePixels[i + 1] = color[1] | 0;
            sourcePixels[i + 2] = color[2] | 0;
            sourcePixels[i + 3] = value * 255 | 0;
          }
        } else {
          sourcePixels[i + 0] = color[0] + (colorB[0] - color[0]) * value | 0;
          sourcePixels[i + 1] = color[1] + (colorB[1] - color[1]) * value | 0;
          sourcePixels[i + 2] = color[2] + (colorB[2] - color[2]) * value | 0;
          sourcePixels[i + 3] = 255;
        }
      }

      this.context.putImageData(sourceData, 0, 0);
      return this;
    },

    clear: function(color) {
      if (color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      } else {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }

      return this;
    },

    clone: function() {

      // var result = cq.createCanvas(this.canvas);

      var result = cq.pool();
      result.width = this.width;
      result.height = this.height;
      result.getContext("2d").drawImage(this.canvas, 0, 0);

      return cq(result);
    },

    gradientText: function(text, x, y, maxWidth, gradient) {

      var words = text.split(" ");

      var h = this.fontHeight() * 2;

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth) {
            lines[++line] = "";
            ox = 0;
          }

          lines[line] += word;

          ox += wordWidth;
        }
      } else var lines = [text];

      for (var i = 0; i < lines.length; i++) {
        var oy = y + i * h * 0.6 | 0;
        var lingrad = this.context.createLinearGradient(0, oy, 0, oy + h * 0.6 | 0);

        for (var j = 0; j < gradient.length; j += 2) {
          lingrad.addColorStop(gradient[j], gradient[j + 1]);
        }

        var text = lines[i];

        this.fillStyle(lingrad).fillText(text, x, oy);
      }

      return this;
    },

    removeColor: function(color) {

      color = cq.color(color);

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;

      for (var x = 0; x < this.canvas.width; x++) {
        for (var y = 0; y < this.canvas.height; y++) {
          var i = (y * this.canvas.width + x) * 4;

          if (pixels[i + 0] === color[0] && pixels[i + 1] === color[1] && pixels[i + 2] === color[2]) {
            pixels[i + 3] = 0;
          }


        }
      }

      this.clear();
      this.context.putImageData(data, 0, 0);

      return this;
    },

    outline: function() {
      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;

      var newData = this.createImageData(this.canvas.width, this.canvas.height);
      var newPixels = newData.data;

      var canvas = this.canvas;

      function check(x, y) {

        if (x < 0) return 0;
        if (x >= canvas.width) return 0;
        if (y < 0) return 0;
        if (y >= canvas.height) return 0;

        var i = (x + y * canvas.width) * 4;

        return pixels[i + 3] > 0;

      }

      for (var x = 0; x < this.canvas.width; x++) {
        for (var y = 0; y < this.canvas.height; y++) {

          var full = 0;
          var i = (y * canvas.width + x) * 4;

          if (!pixels[i + 3]) continue;

          full += check(x - 1, y);
          full += check(x + 1, y);
          full += check(x, y - 1);
          full += check(x, y + 1);

          if (full !== 4) {

            newPixels[i] = 255;
            newPixels[i + 1] = 255;
            newPixels[i + 2] = 255;
            newPixels[i + 3] = 255;
          }

        }
      }

      this.context.putImageData(newData, 0, 0);

      return this;
    },

    setHsl: function() {

      if (arguments.length === 1) {
        var args = arguments[0];
      } else {
        var args = arguments;
      }

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        hsl = cq.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);

        h = args[0] === false ? hsl[0] : cq.limitValue(args[0], 0, 1);
        s = args[1] === false ? hsl[1] : cq.limitValue(args[1], 0, 1);
        l = args[2] === false ? hsl[2] : cq.limitValue(args[2], 0, 1);

        newPixel = cq.hslToRgb(h, s, l);

        pixels[i + 0] = newPixel[0];
        pixels[i + 1] = newPixel[1];
        pixels[i + 2] = newPixel[2];
      }

      this.context.putImageData(data, 0, 0);

      return this;
    },

    shiftHsl: function() {

      if (arguments.length === 1) {
        var args = arguments[0];
      } else {
        var args = arguments;
      }

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        hsl = cq.rgbToHsl(pixels[i + 0], pixels[i + 1], pixels[i + 2]);

        if (pixels[i + 0] !== pixels[i + 1] || pixels[i + 1] !== pixels[i + 2]) {
          h = args[0] === false ? hsl[0] : cq.wrapValue(hsl[0] + args[0], 0, 1);
          s = args[1] === false ? hsl[1] : cq.limitValue(hsl[1] + args[1], 0, 1);
        } else {
          h = hsl[0];
          s = hsl[1];
        }

        l = args[2] === false ? hsl[2] : cq.limitValue(hsl[2] + args[2], 0, 1);

        newPixel = cq.hslToRgb(h, s, l);

        pixels[i + 0] = newPixel[0];
        pixels[i + 1] = newPixel[1];
        pixels[i + 2] = newPixel[2];
      }


      this.context.putImageData(data, 0, 0);

      return this;
    },

    applyColor: function(color) {

      if (COCOONJS) return this;
      this.save();

      this.globalCompositeOperation("source-in");
      this.clear(color);

      this.restore();

      return this;
    },

    negative: function(src, dst) {

      var data = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      var pixels = data.data;
      var r, g, b, a, h, s, l, hsl = [],
        newPixel = [];

      for (var i = 0, len = pixels.length; i < len; i += 4) {
        pixels[i + 0] = 255 - pixels[i + 0];
        pixels[i + 1] = 255 - pixels[i + 1];
        pixels[i + 2] = 255 - pixels[i + 2];
      }

      this.context.putImageData(data, 0, 0);

      return this;
    },

    roundRect: function(x, y, width, height, radius) {

      this.beginPath();
      this.moveTo(x + radius, y);
      this.lineTo(x + width - radius, y);
      this.quadraticCurveTo(x + width, y, x + width, y + radius);
      this.lineTo(x + width, y + height - radius);
      this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      this.lineTo(x + radius, y + height);
      this.quadraticCurveTo(x, y + height, x, y + height - radius);
      this.lineTo(x, y + radius);
      this.quadraticCurveTo(x, y, x + radius, y);
      this.closePath();

      return this;
    },

    markupText: function(text) {


    },

    wrappedText: function(text, x, y, maxWidth, lineHeight) {

      var words = text.split(" ");

      var lineHeight = lineHeight || this.fontHeight();

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth || words[i] === "\n") {
            lines[++line] = "";
            ox = 0;
          }
          if (words[i] !== "\n") {
            lines[line] += word;

            ox += wordWidth;
          }


        }
      } else {
        var lines = [text];
      }

      for (var i = 0; i < lines.length; i++) {
        var oy = y + i * lineHeight | 0;

        var text = lines[i];

        this.fillText(text, x, oy);
      }

      return this;
    },

    fontHeights: {},

    fontHeight: function() {
      var font = this.font();

      if (!this.fontHeights[font]) {
        var temp = cq(100, 100);
        var height = 0;
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("bottom").fillText("gM", 25, 100);
        temp.trim(false, changes);
        height += changes.bottom;

        var temp = cq(100, 100);
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("top").fillText("gM", 25, 0);
        temp.trim(false, changes);
        height += changes.top;

        var temp = cq(100, 100);
        var changes = {};
        temp.font(font).fillStyle("#fff");
        temp.textBaseline("alphabetic").fillText("gM", 50, 50);
        temp.trim(false, changes);
        height += temp.height;

        this.fontHeights[font] = height;
      }

      return this.fontHeights[font];
    },

    textBoundaries: function(text, maxWidth) {
      var words = text.split(" ");

      var h = this.fontHeight();

      var ox = 0;
      var oy = 0;

      if (maxWidth) {
        var line = 0;
        var lines = [""];

        for (var i = 0; i < words.length; i++) {
          var word = words[i] + " ";
          var wordWidth = this.context.measureText(word).width;

          if (ox + wordWidth > maxWidth || words[i] === "\n") {
            lines[++line] = "";
            ox = 0;
          }

          if (words[i] !== "\n") {
            lines[line] += word;
            ox += wordWidth;
          }
        }
      } else {
        var lines = [text];
        maxWidth = this.measureText(text).width;
      }

      return {
        height: lines.length * h,
        width: maxWidth,
        lines: lines.length,
        lineHeight: h
      }
    },

    repeatImageRegion: function(image, sx, sy, sw, sh, dx, dy, dw, dh) {
      this.save();
      this.rect(dx, dy, dw, dh);
      this.clip();

      for (var x = 0, len = Math.ceil(dw / sw); x < len; x++) {
        for (var y = 0, leny = Math.ceil(dh / sh); y < leny; y++) {
          this.drawImage(image, sx, sy, sw, sh, dx + x * sw, dy + y * sh, sw, sh);
        }
      }

      this.restore();

      return this;
    },

    repeatImage: function(image, x, y, w, h) {
      // if (!env.details) return this;

      if (arguments.length < 9) {
        this.repeatImageRegion(image, 0, 0, image.width, image.height, x, y, w, h);
      } else {
        this.repeatImageRegion.apply(this, arguments);
      }

      return this;
    },

    borderImage: function(image, x, y, w, h, t, r, b, l, fill) {

      // if (!env.details) return this;

      if (typeof t === "object") {

        var bottomLeft = t.bottomLeft || [0, 0, 0, 0];
        var bottomRight = t.bottomRight || [0, 0, 0, 0];
        var topLeft = t.topLeft || [0, 0, 0, 0];
        var topRight = t.topRight || [0, 0, 0, 0];

        var clh = bottomLeft[3] + topLeft[3];
        var crh = bottomRight[3] + topRight[3];
        var ctw = topLeft[2] + topRight[2];
        var cbw = bottomLeft[2] + bottomRight[2];

        t.fillPadding = [0, 0, 0, 0];

        if (t.left) t.fillPadding[0] = t.left[2];
        if (t.top) t.fillPadding[1] = t.top[3];
        if (t.right) t.fillPadding[2] = t.right[2];
        if (t.bottom) t.fillPadding[3] = t.bottom[3];

        // if (!t.fillPadding) t.fillPadding = [0, 0, 0, 0];

        if (t.fill) {
          this.drawImage(image, t.fill[0], t.fill[1], t.fill[2], t.fill[3], x + t.fillPadding[0], y + t.fillPadding[1], w - t.fillPadding[2] - t.fillPadding[0], h - t.fillPadding[3] - t.fillPadding[1]);
        } else {
          // this.fillRect(x + t.fillPadding[0], y + t.fillPadding[1], w - t.fillPadding[2] - t.fillPadding[0], h - t.fillPadding[3] - t.fillPadding[1]);
        }

        if (t.left) this[t.left[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.left[0], t.left[1], t.left[2], t.left[3], x, y + topLeft[3], t.left[2], h - clh);
        if (t.right) this[t.right[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.right[0], t.right[1], t.right[2], t.right[3], x + w - t.right[2], y + topRight[3], t.right[2], h - crh);
        if (t.top) this[t.top[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.top[0], t.top[1], t.top[2], t.top[3], x + topLeft[2], y, w - ctw, t.top[3]);
        if (t.bottom) this[t.bottom[4] === "stretch" ? "drawImage" : "repeatImage"](image, t.bottom[0], t.bottom[1], t.bottom[2], t.bottom[3], x + bottomLeft[2], y + h - t.bottom[3], w - cbw, t.bottom[3]);

        if (t.bottomLeft) this.drawImage(image, t.bottomLeft[0], t.bottomLeft[1], t.bottomLeft[2], t.bottomLeft[3], x, y + h - t.bottomLeft[3], t.bottomLeft[2], t.bottomLeft[3]);
        if (t.topLeft) this.drawImage(image, t.topLeft[0], t.topLeft[1], t.topLeft[2], t.topLeft[3], x, y, t.topLeft[2], t.topLeft[3]);
        if (t.topRight) this.drawImage(image, t.topRight[0], t.topRight[1], t.topRight[2], t.topRight[3], x + w - t.topRight[2], y, t.topRight[2], t.topRight[3]);
        if (t.bottomRight) this.drawImage(image, t.bottomRight[0], t.bottomRight[1], t.bottomRight[2], t.bottomRight[3], x + w - t.bottomRight[2], y + h - t.bottomRight[3], t.bottomRight[2], t.bottomRight[3]);


      } else {


        /* top */
        if (t > 0 && w - l - r > 0) this.drawImage(image, l, 0, image.width - l - r, t, x + l, y, w - l - r, t);

        /* bottom */
        if (b > 0 && w - l - r > 0) this.drawImage(image, l, image.height - b, image.width - l - r, b, x + l, y + h - b, w - l - r, b);
        //      console.log(x, y, w, h, t, r, b, l);
        //      console.log(image, 0, t, l, image.height - b - t, x, y + t, l, h - b - t);
        /* left */
        if (l > 0 && h - b - t > 0) this.drawImage(image, 0, t, l, image.height - b - t, x, y + t, l, h - b - t);


        /* right */
        if (r > 0 && h - b - t > 0) this.drawImage(image, image.width - r, t, r, image.height - b - t, x + w - r, y + t, r, h - b - t);

        /* top-left */
        if (l > 0 && t > 0) this.drawImage(image, 0, 0, l, t, x, y, l, t);

        /* top-right */
        if (r > 0 && t > 0) this.drawImage(image, image.width - r, 0, r, t, x + w - r, y, r, t);

        /* bottom-right */
        if (r > 0 && b > 0) this.drawImage(image, image.width - r, image.height - b, r, b, x + w - r, y + h - b, r, b);

        /* bottom-left */
        if (l > 0 && b > 0) this.drawImage(image, 0, image.height - b, l, b, x, y + h - b, l, b);

        if (fill) {
          if (typeof fill === "string") {
            this.fillStyle(fill).fillRect(x + l, y + t, w - l - r, h - t - b);
          } else {
            if (w - l - r > 0 && h - t - b > 0)
              this.drawImage(image, l, t, image.width - r - l, image.height - b - t, x + l, y + t, w - l - r, h - t - b);
          }
        }
      }
    },

    setPixel: function(color, x, y) {

      /* fillRect is slow! */

      return this.fillStyle(color).fillRect(x, y, 1, 1);

      /* this is how it should work - but it does not */

      color = cq.color(color);

      var pixel = this.createImageData(1, 1);

      pixel.data[0] = color[0];
      pixel.data[1] = color[1];
      pixel.data[2] = color[2];
      pixel.data[3] = 1.0;

      this.putImageData(pixel, x, y);

      return this;
    },

    getPixel: function(x, y) {
      var pixel = this.context.getImageData(x, y, 1, 1).data;
      return cq.color([pixel[0], pixel[1], pixel[2], pixel[3]]);
    },

    createImageData: function(width, height) {
      if (false && this.context.createImageData) {
        return this.context.createImageData.apply(this.context, arguments);
      } else {
        if (!this.emptyCanvas) {
          this.emptyCanvas = cq.createCanvas(width, height);
          this.emptyCanvasContext = this.emptyCanvas.getContext("2d");
        }

        this.emptyCanvas.width = width;
        this.emptyCanvas.height = height;
        return this.emptyCanvasContext.getImageData(0, 0, width, height);
      }
    },

    strokeLine: function(x1, y1, x2, y2) {

      this.beginPath();

      if (typeof x2 === "undefined") {
        this.moveTo(x1.x, x1.y);
        this.lineTo(y1.x, y1.y);
      } else {
        this.moveTo(x1, y1);
        this.lineTo(x2, y2);
      }

      this.stroke();

      return this;

    },

    setLineDash: function(dash) {
      if (this.context.setLineDash) {
        this.context.setLineDash(dash);
        return this;
      } else return this;
    },

    measureText: function() {
      return this.context.measureText.apply(this.context, arguments);
    },

    getLineDash: function() {
      return this.context.getLineDash();
    },

    createRadialGradient: function() {
      return this.context.createRadialGradient.apply(this.context, arguments);
    },

    createLinearGradient: function() {
      return this.context.createLinearGradient.apply(this.context, arguments);
    },

    createPattern: function() {
      return this.context.createPattern.apply(this.context, arguments);
    },

    getImageData: function() {
      return this.context.getImageData.apply(this.context, arguments);
    },

    /* If you think that I am retarded because I use fillRect to set
       pixels - read about premultipled alpha in canvas */

    writeMeta: function(data) {

      var json = JSON.stringify(data);

      json = encodeURIComponent(json);

      var bytes = [];

      for (var i = 0; i < json.length; i++) {
        bytes.push(json.charCodeAt(i));
        //      console.log(json[i])
      }

      bytes.push(127);

      var x = this.width - 1;
      var y = this.height - 1;

      var pixel = [];

      while (bytes.length) {

        var byte = bytes.shift();

        pixel.unshift(byte * 2);
        //        console.log(x + String.fromCharCode(byte), byte);

        if (!bytes.length)
          for (var i = 0; i < 3 - pixel.length; i++) pixel.unshift(254);

        if (pixel.length === 3) {
          this.fillStyle(cq.color(pixel).toRgb()).fillRect(x, y, 1, 1);
          pixel = [];
          x--;

          if (x < 0) {
            y--;
            x = this.width - 1;
          }
        }
      }

      return this;

    },

    readMeta: function() {

      var bytes = [];

      var x = this.width - 1;
      var y = this.height - 1;

      while (true) {
        var pixel = this.getPixel(x, y);

        var stop = false;

        for (var i = 0; i < 3; i++) {

          if (pixel[2 - i] === 254) stop = true;

          else bytes.push(pixel[2 - i] / 2 | 0);

        }

        if (stop) break;

        x--;

        if (x < 0) {
          y--;
          x = this.width - 1;
          break;
        }
      }


      var json = "";

      while (bytes.length) {
        json += String.fromCharCode(bytes.shift());
      }

      var data = false;

      console.log(json);

      try {
        data = JSON.parse(decodeURIComponent(json));
      } catch (e) {

      }

      return data;

    },

    get width() {
      return this.canvas.width;
    },

    get height() {
      return this.canvas.height;
    },

    set width(w) {
      this.canvas.width = w;
      this.update();
      return this.canvas.width;
    },

    set height(h) {
      this.canvas.height = h;
      this.update();
      return this.canvas.height;
    }


  };

  /* extend Layer with drawing context methods */

  var methods = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createRadialGradient", "createPattern", "drawFocusRing", "drawImage", "fill", "fillRect", "fillText", "getImageData", "isPointInPath", "lineTo", "measureText", "moveTo", "putImageData", "quadraticCurveTo", "rect", "restore", "rotate", "save", "scale", "setTransform", "stroke", "strokeRect", "strokeText", "transform", "translate", "setLineDash"];

  for (var i = 0; i < methods.length; i++) {
    var name = methods[i];

    if (cq.Layer.prototype[name]) continue;

    cq.Layer.prototype[name] = (function(method) {

      return function() {
        cq.fastApply(method, this.context, arguments);
        return this;
      }

    })(CanvasRenderingContext2D.prototype[name]);


    continue;


    if (!this.debug) {
      // if (!cq.Layer.prototype[name]) cq.Layer.prototype[name] = Function("this.context." + name + ".apply(this.context, arguments); return this;");

      var self = this;

      (function(name) {

        cq.Layer.prototype[name] = function() {
          // this.context[name].apply(this.context, arguments);

          cq.fastApply(this.context[name], this.context, arguments);

          return this;
        }

      })(name);

    } else {

      var self = this;

      (function(name) {

        cq.Layer.prototype[name] = function() {
          try {
            this.context[name].apply(this.context, arguments);
            return this;
          } catch (e) {
            var err = new Error();
            console.log(err.stack);
            throw (e + err.stack);

            console.log(e, name, arguments);
          }
        }

      })(name);

    }

  };

  /* create setters and getters */

  var properties = ["canvas", "fillStyle", "font", "globalAlpha", "globalCompositeOperation", "lineCap", "lineJoin", "lineWidth", "miterLimit", "shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor", "strokeStyle", "textAlign", "textBaseline", "lineDashOffset"];

  for (var i = 0; i < properties.length; i++) {
    var name = properties[i];
    if (!cq.Layer.prototype[name]) cq.Layer.prototype[name] = Function("if(arguments.length) { this.context." + name + " = arguments[0]; return this; } else { return this.context." + name + "; }");
  };

  /* color */

  cq.Color = function(data, type) {

    if (arguments.length) this.parse(data, type);
  }

  cq.Color.prototype = {

    toString: function() {
      return this.toRgb();
    },

    parse: function(args, type) {
      if (args[0] instanceof cq.Color) {
        this[0] = args[0][0];
        this[1] = args[0][1];
        this[2] = args[0][2];
        this[3] = args[0][3];
        return;
      }

      if (typeof args === "string") {
        var match = null;

        if (args[0] === "#") {
          var rgb = cq.hexToRgb(args);
          this[0] = rgb[0];
          this[1] = rgb[1];
          this[2] = rgb[2];
          this[3] = 1.0;
        } else if (match = args.match(/rgb\((.*),(.*),(.*)\)/)) {
          this[0] = match[1] | 0;
          this[1] = match[2] | 0;
          this[2] = match[3] | 0;
          this[3] = 1.0;
        } else if (match = args.match(/rgba\((.*),(.*),(.*)\)/)) {
          this[0] = match[1] | 0;
          this[1] = match[2] | 0;
          this[2] = match[3] | 0;
          this[3] = match[4] | 0;
        } else if (match = args.match(/hsl\((.*),(.*),(.*)\)/)) {
          this.fromHsl(match[1], match[2], match[3]);
        } else if (match = args.match(/hsv\((.*),(.*),(.*)\)/)) {
          this.fromHsv(match[1], match[2], match[3]);
        }
      } else {
        switch (type) {
          case "hsl":
          case "hsla":

            this.fromHsl(args[0], args[1], args[2], args[3]);
            break;

          case "hsv":
          case "hsva":

            this.fromHsv(args[0], args[1], args[2], args[3]);
            break;

          default:
            this[0] = args[0];
            this[1] = args[1];
            this[2] = args[2];
            this[3] = typeof args[3] === "undefined" ? 1.0 : args[3];
            break;
        }
      }
    },

    a: function(a) {
      return this.alpha(a);
    },

    alpha: function(a) {
      this[3] = a;
      return this;
    },

    fromHsl: function() {
      var components = arguments[0] instanceof Array ? arguments[0] : arguments;

      var color = cq.hslToRgb(parseFloat(components[0]), parseFloat(components[1]), parseFloat(components[2]));

      this[0] = color[0];
      this[1] = color[1];
      this[2] = color[2];
      this[3] = typeof arguments[3] === "undefined" ? 1.0 : arguments[3];
    },

    fromHsv: function() {
      var components = arguments[0] instanceof Array ? arguments[0] : arguments;
      var color = cq.hsvToRgb(parseFloat(components[0]), parseFloat(components[1]), parseFloat(components[2]));

      this[0] = color[0];
      this[1] = color[1];
      this[2] = color[2];
      this[3] = typeof arguments[3] === "undefined" ? 1.0 : arguments[3];
    },

    toArray: function() {
      return [this[0], this[1], this[2], this[3]];
    },

    toRgb: function() {
      return "rgb(" + this[0] + ", " + this[1] + ", " + this[2] + ")";
    },

    toRgba: function() {
      return "rgba(" + this[0] + ", " + this[1] + ", " + this[2] + ", " + this[3] + ")";
    },

    toHex: function() {
      return cq.rgbToHex(this[0], this[1], this[2]);
    },

    toHsl: function() {
      var c = cq.rgbToHsl(this[0], this[1], this[2]);
      c[3] = this[3];
      return c;
    },

    toHsv: function() {
      var c = cq.rgbToHsv(this[0], this[1], this[2]);
      c[3] = this[3];
      return c;
    },

    gradient: function(target, steps) {
      var targetColor = cq.color(target);
    },

    shiftHsl: function() {
      var hsl = this.toHsl();

      if (this[0] !== this[1] || this[1] !== this[2]) {
        var h = arguments[0] === false ? hsl[0] : cq.wrapValue(hsl[0] + arguments[0], 0, 1);
        var s = arguments[1] === false ? hsl[1] : cq.limitValue(hsl[1] + arguments[1], 0, 1);
      } else {
        var h = hsl[0];
        var s = hsl[1];
      }

      var l = arguments[2] === false ? hsl[2] : cq.limitValue(hsl[2] + arguments[2], 0, 1);

      this.fromHsl(h, s, l);

      return this;
    },

    setHsl: function() {
      var hsl = this.toHsl();

      var h = arguments[0] === false ? hsl[0] : cq.limitValue(arguments[0], 0, 1);
      var s = arguments[1] === false ? hsl[1] : cq.limitValue(arguments[1], 0, 1);
      var l = arguments[2] === false ? hsl[2] : cq.limitValue(arguments[2], 0, 1);

      this.fromHsl(h, s, l);

      return this;
    },

    mix: function(color, amount) {
      color = cq.color(color);

      for (var i = 0; i < 4; i++)
        this[i] = cq.mix(this[i], color[i], amount);

      return this;
    }

  };

  window["cq"] = window["CanvasQuery"] = cq;


  return cq;

})();

/* file: src/layer/Layer.js */

PLAYGROUND.Renderer = function(app) {

  this.app = app;

  app.on("create", this.create.bind(this));
  app.on("resize", this.resize.bind(this));

  app.renderer = this;

};

PLAYGROUND.Renderer.plugin = true;

PLAYGROUND.Renderer.prototype = {

  create: function(data) {

    this.app.layer = cq().appendTo(this.app.container);

    if (!this.app.customContainer) {
      this.app.container.style.margin = "0px";
      this.app.container.style.overflow = "hidden";
    }

  },

  resize: function(data) {

    var app = this.app;

    var layer = app.layer;

    layer.width = app.width;
    layer.height = app.height;

    layer.canvas.style.transformOrigin = "0 0";
    layer.canvas.style.transform = "translate(" + app.offsetX + "px," + app.offsetY + "px) scale(" + app.scale + ", " + app.scale + ")";
    layer.canvas.style.transformStyle = "preserve-3d";

    layer.canvas.style.webkitTransformOrigin = "0 0";
    layer.canvas.style.webkitTransform = "translate(" + app.offsetX + "px," + app.offsetY + "px) scale(" + app.scale + ", " + app.scale + ")";
    layer.canvas.style.webkitTransformStyle = "preserve-3d";

    layer.smoothing = this.app.smoothing;
    layer.update();

    this.setSmoothing(this.app.smoothing);

  },

  setSmoothing: function(smoothing) {

    var layer = this.app.layer;

    this.app.smoothing = smoothing;


    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {

      layer.canvas.style.imageRendering = smoothing ? "auto" : "-moz-crisp-edges";

    } else {

      layer.canvas.style.imageRendering = smoothing ? "auto" : "pixelated";

    }

    layer.smoothing = smoothing;
    layer.update();

  }

};

/* file: src/layer/Transitions.js */

PLAYGROUND.Transitions = function(app) {

  this.app = app;

  app.on("enterstate", this.enterstate.bind(this));
  app.on("postrender", this.postrender.bind(this));
  app.on("step", this.step.bind(this));

  this.progress = 1;
  this.lifetime = 0;
};

PLAYGROUND.Transitions.plugin = true;

PLAYGROUND.Transitions.prototype = {

  enterstate: function(data) {

    this.screenshot = this.app.layer.cache();

    if (data.prev) {
      this.lifetime = 0;
      this.progress = 0;
    }

  },

  postrender: function() {

    if (this.progress >= 1) return;

    PLAYGROUND.Transitions.Split(this, this.progress);

  },

  step: function(delta) {

    if (this.progress >= 1) return;

    this.lifetime += delta;

    this.progress = Math.min(this.lifetime / 0.5, 1);

  }

};

PLAYGROUND.Transitions.Implode = function(manager, progress) {

  var app = manager.app;
  var layer = app.layer;

  progress = app.ease(progress, "outCubic");

  var negative = 1 - progress;

  layer.save();
  layer.tars(app.center.x, app.center.y, 0.5, 0.5, 0, 0.5 + 0.5 * negative, negative);
  layer.drawImage(manager.screenshot, 0, 0);

  layer.restore();

};

PLAYGROUND.Transitions.Split = function(manager, progress) {

  var app = manager.app;
  var layer = app.layer;

  progress = app.ease(progress, "inOutCubic");

  var negative = 1 - progress;

  layer.save();

  layer.a(negative).clear("#fff").ra();

  layer.drawImage(manager.screenshot, 0, 0, app.width, app.height / 2 | 0, 0, 0, app.width, negative * app.height / 2 | 0);
  layer.drawImage(manager.screenshot, 0, app.height / 2 | 0, app.width, app.height / 2 | 0, 0, app.height / 2 + progress * app.height / 2 + 1 | 0, app.width, Math.max(1, negative * app.height * 0.5 | 0));

  layer.restore();

};

/* file: src/layer/LoadingScreen.js */

PLAYGROUND.LoadingScreen = {

  logoRaw: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAAASBAMAAADPiN0xAAAAGFBMVEUAAQAtLixHSUdnaGaJioimqKXMzsv7/fr5shgVAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB98EAwkeA4oQWJ4AAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB9klEQVQ4y72UvW+rMBDAz+FrpVKrrFmesmapWNOlrKjSe1kZ+uoVAvj+/frujG1SaJcqJwU7voOf7xMQzQmsIDi5NPTMsLRntH3U+F6SAZo3NlCvcgBFJz8o+vkDiE63lI95Y/UmpinsZWkgJWJiDbAVQ16htptxSTNloIlugwaw001Ey3ASF3so6L1qLNXzQS5S0UGKL/CI5wWNriE0UH9Yty37LqIVg+wsqu7Ix0MwVBSF/dU+jv2SNnma021LEdPqVnMeU3xAu0kXcSGjmq7Ox4E2Wn88LZ2+EFj3avjixzai6VPVyuYveZLHF2XfdDnvAq27DIHGuq+0DJFsE30OtB1KqOwd8Dr7PcM4b+jfj2g5lp4WyntBK66qua3JzEA+uXJpwH/NlVuzRVPY/kTLB2mjuN+KwdZ8FOy8j2gDbEUSqumnSCY4lf4ibq3IhVM4ycZQRnv+zFqVdJQVn6BxvUqebGpuaNo3sZxwBzjajiMZOoBiwyVF+kCr+nUaJOaGpnAeRPPJZTr4FqmHRXcneEo4DqQ/ftfdnLeDrUAME8xWKPeKCwW6YkEpXfs3p1EWJhdcUAYP0TI/uYaV8cgjwBovaeyWwji2T9rTFIdS/cP/MnkTLRUWxgNNZVin7bT5fqT9miDcUVJzR1gRpfIONMmulU+5Qqr6zXAUqAAAAABJRU5ErkJggg==",

  create: function() {

    var self = this;

    this.logo = new Image;

    this.logo.addEventListener("load", function() {
      self.ready = true;
    });

    this.logo.src = this.logoRaw;

    this.background = "#282245";

    if (window.getComputedStyle) {
      // this.background = window.getComputedStyle(document.body).backgroundColor || "#000";
    }


  },

  enter: function() {

    this.current = 0;

  },

  leave: function() {

    this.locked = true;

    this.animation = this.app.tween(this)
      .to({
        current: 1
      }, 0.5);

  },

  step: function(delta) {

    if (this.locked) {
      if (this.animation.finished) this.locked = false;
    } else {
      this.current = this.current + Math.abs(this.app.loader.progress - this.current) * delta;
    }

  },

  ready: function() {


  },

  render: function() {

    if (!this.ready) return;

    this.app.layer.clear(this.background);

    this.app.layer.fillStyle("#fff");

    this.app.layer.save();
    this.app.layer.align(0.5, 0.5);
    this.app.layer.globalCompositeOperation("lighter");
    this.app.layer.drawImage(this.logo, this.app.center.x, this.app.center.y);

    var w = this.current * this.logo.width;

    this.app.layer.fillStyle("#fff");

    this.app.layer.fillRect(this.app.center.x, this.app.center.y + 32, w, 12);
    this.app.layer.fillRect(this.app.center.x, this.app.center.y + 32, this.logo.width, 4);

    this.app.layer.restore();

  }

};
/* scanlines plugin for playground's default renderer */

PLAYGROUND.Scanlines = function(app) {

  this.app = app;

  app.on("resize", this.resize.bind(this));
  app.on("postrender", this.postrender.bind(this));

};

PLAYGROUND.Scanlines.plugin = true;

PLAYGROUND.Scanlines.prototype = {

  resize: function() {

    this.image = cq(this.app.width, this.app.height);

    this.image.globalAlpha(0.1);
    this.image.fillStyle("#008");

    for (var i = 1; i < this.image.canvas.height; i += 8){
      
      this.image.fillRect(0, i, this.image.canvas.width, 4);

    }

    this.image = this.image.cache();

  },

  postrender: function() {

    if (this.image) {

      // this.app.layer.drawImage(this.image, 0, 0);

    }

  }

};
/*

  SoundOnDemand r1

  (c) 2012-2015 http://rezoner.net

  This library may be freely distributed under the MIT license.

*/

/* options */

/* output: output node, default */
/* audioContext: audioContext */

SoundOnDemand = function(options) {

  options = options || {};

  var canPlayMp3 = (new Audio).canPlayType("audio/mp3");
  var canPlayOgg = (new Audio).canPlayType('audio/ogg; codecs="vorbis"');

  if (this.preferedAudioFormat === "mp3") {

    if (canPlayMp3) this.audioFormat = "mp3";
    else this.audioFormat = "ogg";

  } else {

    if (canPlayOgg) this.audioFormat = "ogg";
    else this.audioFormat = "mp3";

  }

  if (!options.audioContext) {
    console.warn('Possible duplicated AudioContext, use options.audioContext');
  }
  this.audioContext = options.audioContext || new AudioContext;

  this.compressor = this.audioContext.createDynamicsCompressor();
  this.compressor.connect(this.audioContext.destination);

  this.gainNode = this.audioContext.createGain()
  this.gainNode.connect(this.compressor);

  this.input = this.gainNode;

  this.gainNode.gain.value = 1.0;

  this.buffers = {};

  this.channels = {};
  this.aliases = {};

  var lastTick = Date.now();
  var engine = this;

  setInterval(function() {

    var delta = (Date.now() - lastTick) / 1000;

    lastTick = Date.now();

    engine.step(delta);

  }, 1000 / 60);

};

SoundOnDemand.moveTo = function(value, target, step) {

  if (value < target) {
    value += step;
    if (value > target) value = target;
  }

  if (value > target) {
    value -= step;
    if (value < target) value = target;
  }

  return value;

};

SoundOnDemand.prototype = {

  constructor: SoundOnDemand,

  path: "sounds/",

  channel: function(name) {

    if (!this.channels[name]) this.channels[name] = new SoundOnDemand.Channel(this);

    return this.channels[name];

  },

  getAssetEntry: function(path, defaultExtension) {

    /* translate folder according to user provided paths
       or leave as is */

    var fileinfo = path.match(/(.*)\..*/);
    var key = fileinfo ? fileinfo[1] : path;

    var temp = path.split(".");
    var basename = path;

    if (temp.length > 1) {
      var ext = temp.pop();
      path = temp.join(".");
    } else {
      var ext = defaultExtension;
      basename += "." + defaultExtension;
    }

    return {
      key: key,
      url: this.path + basename,
      path: this.path + path,
      ext: ext
    };

  },

  loaders: {},

  load: function(key) {

    var engine = this;
    var entry = engine.getAssetEntry(key, engine.audioFormat);

    if (!this.loaders[key]) {

      this.loaders[key] = new Promise(function(resolve, reject) {

        if (engine.buffers[entry.key]) return resolve(engine.buffers[entry.key]);

        var request = new XMLHttpRequest();

        request.open("GET", entry.url, true);
        request.responseType = "arraybuffer";

        request.onload = function() {
          engine.audioContext.decodeAudioData(this.response, function(decodedBuffer) {

            engine.buffers[entry.key] = decodedBuffer;
            resolve(decodedBuffer);

          });

        }

        request.send();

      });

    }

    return this.loaders[key];

  },

  step: function(delta) {

    for (var key in this.channels) {

      this.channels[key].step(delta);

    }

  },

  duplicate: function(source, as, volume, rate) {

    var engine = this;

    this.load(source).then(function() {

      engine.buffers[source];

      engine.buffers[as] = engine.buffers[source];

    });

  },

  alias: function(name, source, rate, volume) {

    this.aliases[name] = {
      source: source,
      rate: rate,
      volume: volume
    };

  }

};
SoundOnDemand.Events = function() {

  this.listeners = {};

};

SoundOnDemand.Events.prototype = {

  on: function(event, callback) {

    if (typeof event === "object") {
      var result = {};
      for (var key in event) {
        result[key] = this.on(key, event[key])
      }
      return result;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);

    return callback;
  },

  once: function(event, callback) {

    callback.once = true;

    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);

    return callback;

  },

  off: function(event, callback) {

    for (var i = 0, len = this.listeners[event].length; i < len; i++) {
      if (this.listeners[event][i]._remove) {
        this.listeners[event].splice(i--, 1);
        len--;
      }
    }

  },

  trigger: function(event, data) {

    /* if you prefer events pipe */

    if (this.listeners["event"]) {
      for (var i = 0, len = this.listeners["event"].length; i < len; i++) {
        this.listeners["event"][i](event, data);
      }
    }

    /* or subscribed to single event */

    if (this.listeners[event]) {
      for (var i = 0, len = this.listeners[event].length; i < len; i++) {
        var listener = this.listeners[event][i];
        listener.call(this, data);

        if (listener.once) {
          this.listeners[event].splice(i--, 1);
          len--;
        }
      }
    }

  }

};
SoundOnDemand.Channel = function(engine) {

  this.engine = engine;
  this.audioContext = engine.audioContext;

  /* connection order goes from bottom to top */

  /* gain node */

  this.gainNode = this.audioContext.createGain();

  /* convolver */

  this.convolverWetNode = this.audioContext.createGain();
  this.convolverDryNode = this.audioContext.createGain();
  this.convolverNode = this.audioContext.createConvolver();
  this.convolverEnabled = false;

  this.route();

  this.queue = [];
  this.loops = [];

};

SoundOnDemand.Channel.prototype = {

  constructor: SoundOnDemand.Channel,

  /* get a sound for further usage */

  xroute: function() {

    if (this.currentRoute) {

      for (var i = 0; i < this.currentRoute.length - 1; i++) {

        this.currentRoute[i].disconnect();

      }

    }

    this.currentRoute = [];

    for (var i = 0; i < arguments.length; i++) {

      if (i < arguments.length - 1) {

        var node = arguments[i];

        node.connect(arguments[i + 1]);

      }

      this.currentRoute.push(node);

    }

    this.input = arguments[0];

  },

  get: function(key) {

    return new SoundOnDemand.Sound(key, this);

  },

  play: function(key) {

    var sound = this.get(key);

    this.add(sound);

    return sound;

  },

  remove: function(sound) {

    sound._remove = true;

  },

  add: function(sound) {

    sound._remove = false;

    this.queue.push(sound);

  },

  step: function(delta) {

    /* process queue */

    for (var i = 0; i < this.queue.length; i++) {

      var sound = this.queue[i];

      sound.step(delta);

      if (sound._remove) this.queue.splice(i--, 1);

    }

    /* process sounds being played */

  },

  volume: function(value) {

    if (arguments.length) {

      this.gainNode.gain.value = value;

      return this;

    } else {

      return this.gainNode.gain.value;

    }

  },

  swapConvolver: function(key) {

    var engine = this.engine;
    var channel = this;

    return new Promise(function(resolve, fail) {

      if (channel.currentConvolverImpulse === key) {

        resolve();

      } else {

        engine.load(key).then(function(buffer) {
          channel.currentConvolverImpulse = key;
          channel.convolverNode.buffer = buffer;
          resolve();
        });

      }

    });

  },

  updateConvovlerState: function(enabled) {

    this.convolverEnabled = enabled;
    this.route();

  },

  subroute: function(nodes) {

    for (var i = 0; i < nodes.length; i++) {

      if (i < nodes.length - 1) {

        var node = nodes[i];
        node.disconnect();
        node.connect(nodes[i + 1]);

      }

    }

    this.input = nodes[0];

  },

  route: function() {

    this.gainNode.disconnect();

    if (this.convolverEnabled) {

      this.gainNode.connect(this.convolverDryNode);

      this.gainNode.connect(this.convolverNode);
      this.convolverNode.connect(this.convolverWetNode);

      this.convolverWetNode.connect(this.engine.input);
      this.convolverDryNode.connect(this.engine.input);

    } else {

      this.gainNode.connect(this.engine.input);

    }

    this.input = this.gainNode;

  },

  convolver: function(value, key) {

    var enabled = value > 0;
    var channel = this;

    this.swapConvolver(key).then(function() {

      if (enabled !== channel.convolverEnabled) channel.updateConvovlerState(enabled);

    });

    this.convolverWetNode.gain.value = value;
    this.convolverDryNode.gain.value = 1 - value;

    return this;

  }

};
SoundOnDemand.Sound = function(key, channel) {

  this.key = key;
  this.bufferKey = key;

  if (channel.engine.aliases[key]) {

    this.alias = channel.engine.aliases[key];

    this.bufferKey = this.alias.source;

  }

  if (!channel.engine.buffers[this.bufferKey]) channel.engine.load(this.bufferKey);

  this.channel = channel;
  this.audioContext = this.channel.engine.audioContext;

  this.current = {
    volume: 1.0,
    rate: 1.0
  };

  this.fadeMod = 1.0;

  this.createNodes();

};

SoundOnDemand.Sound.prototype = {

  constructor: SoundOnDemand.Sound,

  alias: {
    volume: 1.0,
    rate: 1.0
  },

  createNodes: function() {

    var bufferSource = this.audioContext.createBufferSource();
    var gainNode = this.audioContext.createGain();
    var panNode = this.audioContext.createStereoPanner();

    bufferSource.connect(panNode);
    panNode.connect(gainNode);
    gainNode.connect(this.channel.input);

    this.bufferSource = bufferSource;
    this.gainNode = gainNode;
    this.panNode = panNode;

  },

  volume: function(volume) {

    volume *= this.alias.volume;

    this.current.volume = volume;

    this.updateVolume();

    return this;

  },

  updateVolume: function() {

    this.gainNode.gain.value = this.current.volume * this.fadeMod;

  },

  pan: function(pan) {

    this.current.pan = pan;

    this.updatePanning();

    return this;

  },

  updatePanning: function() {

    this.panNode.pan.value = this.current.pan;

  },

  loop: function() {

    this.bufferSource.loop = true;
    this.current.loop = true;

    return this;

  },

  rrate: function(range) {

    return this.rate(this.current.rate + (-1 + Math.random() * 2) * range);

  },

  rate: function(rate) {

    rate *= this.alias.rate;

    this.bufferSource.playbackRate.value = rate;

    this.current.rate = rate;

    return this;

  },

  onended: function() {

    if (!this.current.loop) this.stop();

  },

  step: function(delta) {

    if (!this.ready) {

      if (!this.channel.engine.buffers[this.bufferKey]) return;

      this.ready = true;
      this.playing = true;

      this.buffer = this.channel.engine.buffers[this.bufferKey];

      this.bufferSource.buffer = this.buffer;

      this.bufferSource.start(0);
      this.bufferSource.onended = this.onended.bind(this);

      this.currentTime = 0;

      this.currentTime += this.bufferSource.playbackRate.value * delta;
    }

    if (this.fadeTarget !== this.fadeMod) {

      this.fadeMod = SoundOnDemand.moveTo(this.fadeMod, this.fadeTarget, delta * this.fadeSpeed);

      this.updateVolume();

    } else if (this.fadeTarget === 0) {

      this.pause();

    }



  },

  pause: function() {

    this.channel.remove(this);

    this.bufferSource.stop(0);

    this.playing = false;

  },

  stop: function() {

    this.channel.remove(this);

    this.bufferSource.stop(0);

    this.playing = false;

  },

  resume: function() {

    this.createNodes();

    this.bufferSource.buffer = this.buffer;

    this.currentTime = this.currentTime % this.buffer.duration;
    this.bufferSource.start(0, this.currentTime);

    this.rate(this.current.rate);
    this.volume(this.current.volume);
    this.loop(this.current.loop);

    this.channel.add(this);

    this.playing = true;

  },

  fadeTo: function(target, duration) {

    if (!this.playing && this.ready) this.resume();

    duration = duration || 1.0;

    this.fadeTime = 0;
    this.fadeTarget = target;
    this.fadeDuration = duration;

    this.fadeSpeed = Math.abs(target - this.fadeMod) / duration;

    return this;

  },

  fadeIn: function(duration) {

    if (!this.playing && this.ready) this.resume();

    this.fadeMod = 0;
    this.fadeTo(1.0, duration);

    return this;

  },

  fadeOut: function(duration) {

    this.fadeTo(0, duration || 1.0);

    return this;

  },



};

PLAYGROUND.SoundOnDemand = function(app) {
  app.audio = new SoundOnDemand({
    audioContext: app.audioContext
  });

  app.audio.path = app.getPath("sounds");

  app.loadSounds = function() {

    for (var i = 0; i < arguments.length; i++) {

      var key = arguments[i];

      this.loader.add();

      this.audio.load(key).then(
        this.loader.success.bind(this.loader),
        this.loader.error.bind(this.loader)
      );

    }

  };

};

PLAYGROUND.SoundOnDemand.plugin = true;
ENGINE = { };
ga = function() {}

ENGINE.Benchmark = {

  create: function() {

    this.music = app.music.play("gameover").fadeIn(4).loop();

    this.ready = false;

    // this.gradient = app.layer.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);
    // this.gradient.addColorStop(0.0, "transparent");
    // this.gradient.addColorStop(1.0, "#000");

    // JIT warmup
    this.didWarmup = false;
    this.steps = 0;
    this.iotaList = [];
    this.frameTimes = [];
    this.scores = [];
    this.runCount = 0;
    this.skipCount = 0;
    this.skipResetCount = 0;
    this.resetCount = 0;
    this.scoreStack = [];
    this.frameTime = 0.0;
  },


  pointerdown: function() {

    if (this.ready) {

      this.music.fadeOut();

      app.setState(ENGINE.Game);

    }

  },

  enter: function() {

    this.startMod = 0;

    this.iotaCount = this.app.baseline ? Math.floor(this.app.baseline * 0.7) : 1;

    this.app.baseline = 0;

    this.reset();

  },

  // Called between benchmark loops
  reset: function() {
    this.steps = 0;
    this.frameTimes.length = 0;
    this.skipCount = 0;
    // JIT warmup settings (run unbound loops)
    if (!this.didWarmup) {
      // console.time('Warmup');
      this.app.unbound = true;
      this.app.immidiate = false;
    } else {
      this.app.unbound = false;
      this.app.immidiate = true;
    }
    if (this.iotaList.length == 0) {
      this.addIotas(this.didWarmup ? this.iotaCount : 1);
    }
  },

  step: function(dt) {

    var before = performance.now();

    this.iotaList.forEach(function(iota) {
      iota.step(dt);
    });

    this.frameTime = performance.now() - before;

    if (!this.didWarmup) {
      // State: JIT Warmup
      this.stepWarmUp();
    } else if (this.frameTime) {
      // Stresstesting
      this.stepStressTest()
    }

  },

  stepWarmUp: function() {

    this.steps++;

    if (this.steps > 1100) {
      this.didWarmup = true;
      // console.timeEnd('Warmup');
      // console.log('Warmup with %d iotas', this.iotaList.length);
      this.reset();
    }
  },

  stepStressTest: function() {
    var add = 1;
    var frameTimes = this.frameTimes;
    var MAX_FRAMES = 45;
    var MIN_FRAMES = 15;
    var COST = 8;
    var ERROR = 0.25;
    var frameTime = this.frameTime;
    if (frameTimes.unshift(frameTime) > MAX_FRAMES) {
      frameTimes.length = MAX_FRAMES;
    }
    if (frameTimes.length >= MIN_FRAMES) {
      var sample = this.analyze(frameTimes);
      var score = this.iotaList.length;
      if (sample.rse <= ERROR && sample.mean > COST) {
        this.pushScore(score);
        return;
      }
      if (sample.rse > ERROR || sample.mean > COST) {
        // console.log('Skip #' + this.skipCount);
        this.skipCount++;
        if (this.skipCount > 60) {
          console.log(
            '[RESET STEP] High sampling error %f%% or mean %fms for %d entities.',
            sample.rse * 100, sample.mean, score
          );
          this.iotaCount = Math.floor(this.lastScore * 0.7);
          this.skipResetCount++;
          if (this.skipResetCount > 10) {
            this.finalize(false);
            return;
          }
          this.finalize(true);
        }
        return;
      }
      this.skipCount = 0;
      add = Math.round(COST / sample.mean);
    }

    this.addIotas(add);
  },

  pushScore: function(score) {
    var SAVE_SCORES = 3;
    var MIN_SCORES = 5;
    var MAX_SCORES = 10;
    var ERROR = 0.15;

    this.skipResetCount = 0;
    var scores = this.scores;
    this.runCount++;
    if (scores.unshift(score) > MAX_SCORES) {
      scores.length = MAX_SCORES;
    }
    this.iotaCount = Math.ceil(score * 0.7);
    var l = scores.length;
    if (l >= MIN_SCORES) {
      var sample = this.analyze(scores);
      if (sample.rse < ERROR) {
        this.resetCount = 0;
        this.app.baseline = Math.round(sample.mean);
        this.app.baselineErr = sample.rse;
        this.scores.splice(SAVE_SCORES);
        this.finalize(false);
        return;
      } else {
        console.log(
          '[SCORE RESET] Standard error %f%% too high in score samples.',
          sample.rse * 100
        );
        this.resetCount++;
        if (this.resetCount > 10) {
          this.scores.splice(0);
          console.log('[BAIL] Too many [RESET SCORE].');
          this.finalize(false);
          return;
        }
      }
    }
    this.finalize(true);
  },

  finalize: function(restart) {

    if (!restart) {
      // Remove iotas
      this.iotaCount = 0;
      this.runCount = 0;
      // Reset benchmark engine settings
      this.app.unbound = false;
      this.app.immidiate = false;
    }
    // Reduce iotaList to iotaCount
    this.iotaList.splice(this.iotaCount).forEach(function(iota) {
      iota.destroy();
    });
    if (restart) {
      this.reset();
    } else {
      this.ready = true;
      app.tween(this).to({
        startMod: 1.0
      }, 1.0, "outElastic");
    }

  },

  addIotas: function(count) {

    for (var j = 0; j < count; j++) {

      this.iotaList.push(new Iota(this.app, this));

    }

  },

  render: function() {

    /* get reference to the application */

    var app = this.app;

    /* get reference to drawing surface */

    var layer = this.app.layer;

    /* clear screen */

    layer.clear("#282245");


    layer.drawImage(app.images.splash, app.center.x - app.images.splash.width / 2 | 0, app.center.y - app.images.splash.height / 2 | 0)

    layer.save();
    layer.translate(600, 290);

    layer.align(0.5, 0.5);
    layer.scale(4, 4);
    layer.globalAlpha(0.4);
    layer.globalCompositeOperation("lighter");
    layer.drawImage(app.images.flare, 128 * (32 * (app.lifetime % 1.5 / 1.5) | 0), 0, 128, 128, 0, 0, 128, 128);
    layer.restore();


    app.fontSize(48);



    if (!this.ready) {
      var textX = app.center.x;
      var textY = app.center.y - 16;

      layer.fillStyle("rgba(0,0,0,0.5").fillRect(0, textY - 54, app.width, 74);

      layer.fillStyle("#000").textAlign("center").fillText("LOADING... please wait", textX, textY - 4);
      layer.fillStyle("#fff").textAlign("center").fillText("LOADING... please wait", textX, textY);

    } else {

      var textX = app.center.x + 100 + (1 - this.startMod) * 1000;
      var textY = app.center.y - 10;

      layer.a(0.5 + Utils.osc(app.lifetime, 1) * 0.5);
      layer.fillStyle("#000").textAlign("center").fillText("CLICK TO START!", textX, textY - 4);
      layer.fillStyle("#fa0").textAlign("center").fillText("CLICK TO START!", textX, textY);
      layer.a(1.0);

    }


    // app.ctx.fillStyle = this.gradient;
    // app.ctx.fillRect(0, 0, app.width, app.height);

    // this.iotaList.forEach(function(iota) {
    //   iota.render(layer);
    // });

    // layer
    //   .fillStyle('#fff')
    //   .font("14px 'arial'")
    //   .fillText('Stress test #' + this.runCount, 5, 15)
    //   .fillText('Entities: ' + this.iotaList.length, 5, 30)
    //   .fillText('Frametime:' + this.frameTime.toFixed(1), 5, 45);
  },

  analyze: function(population) {

    var l = population.length;
    var sum = 0.0;
    var sumsq = 0.0;
    for (var i = 0; i < l; i++) {
      sum += population[i];
      sumsq += population[i] * population[i];
    }
    var mean = sum / l;
    var sd = Math.sqrt(sumsq / l - sum * sum / (l * l));
    var se = sd / Math.sqrt(l);
    // standard error at 95% confidence
    var se95 = 1.96 * se;
    var rse = se / mean;
    return {
      mean: mean,
      sd: sd,
      se: se,
      se95: se95,
      rse: rse
    }

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

  distance: function(a, b) {

    var dx = a.x - b.x;
    var dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);

  }
};

var images = ['firefox', 'firefox_beta', 'firefox_developer_edition', 'firefox_nightly'];

function Iota(app, parent) {
  this.x = 0.0;
  this.y = 0.0;
  this.vx = 0.0;
  this.vy = 0.0;
  this.vr = 0.0;
  this.alpha = 0.0;
  this.angle = 0.0;
  this.app = app;
  this.parent = parent;
  this.x = Math.random() * app.width;
  this.y = Math.random() * app.height;
  this.maxVel = 100.0;
  this.maxTorq = Math.PI * 10;
  this.vx = Math.random() * this.maxVel * 2 - this.maxVel;
  this.vy = Math.random() * this.maxVel * 2 - this.maxVel;
  this.vr = Math.random() * this.maxTorq * 2 - this.maxTorq;
  this.image = app.images[images[Math.round(Math.random() * 3)]];
  this.region = Utils.random([
    [548, 88, 46, 47],
    [544, 142, 46, 48],
    [544, 200, 46, 47],
    [545, 253, 44, 48]
  ]);
  this.maxForce = 100.0;
  this.alpha = 0.2 + Math.random() * 0.8;
  this.angle = Math.random() * Math.PI;
}

Iota.prototype = {

  step: function(dt) {

    app.state.nearest(this, this.parent.iotaList);

    var iotaList = this.parent.iotaList;
    var forcex = 0.0;
    var forcey = 0.0;
    var forces = 0;
    var maxDist = 60.0;
    for (var i = 0, l = iotaList.length; i < l; i++) {
      var distx = (this.x - iotaList[i].x) / maxDist;
      var disty = (this.y - iotaList[i].y) / maxDist;
      var signx = Math.sign(distx);
      var signy = Math.sign(disty);
      var absx = Math.abs(distx);
      var absy = Math.abs(disty);
      if (absx < 1 && absy < 1) {
        forcex += signx + absx * signx;
        forcey += signy + absy * signy;
        forces++;
      }
    }

    if (forces == 0) {
      forces = 1;
    }
    forcex = Math.max(-this.maxForce, Math.min(this.maxForce, forcex / forces)) * 500;
    forcey = Math.max(-this.maxForce, Math.min(this.maxForce, forcey / forces)) * 500;
    this.vx = this.vx * 0.99 + forcex * 0.01;
    this.vy = this.vy * 0.99 + forcey * 0.01;

    var x = this.x + this.vx * dt;
    if (x < 0 || x > this.app.width) {
      x = Math.random() * this.app.width;
    }
    this.x = x;

    var y = this.y + this.vy * dt;
    if (y < 0 || y > this.app.height) {
      y = Math.random() * this.app.height;
    }
    this.y = y;
    this.angle += this.vr * dt;
  },

  // render: function(layer) {

  //   return;

  //   layer.context.save();
  //   layer.context.translate(this.x | 0, this.y | 0);
  //   // layer.a(this.alpha);
  //   layer.context.fillStyle = "#f00";
  //   layer.context.fillRect(this.x, this.y, 64, 64);
  //   layer.context.fillStyle = "#fff";
  //   layer.context.beginPath();
  //   layer.context.moveTo(this.x, this.y);
  //   layer.context.arc(this.x, this.y, 64, 0, Math.PI * 2);
  //   layer.context.rotate(this.angle);
  //   layer.drawRegion(app.images.spritesheet, this.region, 0, 0);
  //   layer.context.restore();
  // },

  destroy: function() {
    this.app = null;
    this.parent = null;
  }

}
ENGINE.BackgroundStars = function() {

  this.color = "#0af";

  this.count = Math.max(app.height, app.width) / 16 | 0;

  this.x = 0;
  this.y = 0;

  this.populated = false;
  this.image = app.getColoredImage(app.images.spritesheet, this.color);

};

ENGINE.BackgroundStars.prototype = {

  images: {},

  colors: ["#afc", "#fa0"],

  sprites: [
    [260, 165, 5, 5],
    [261, 171, 3, 3]
  ],

  populate: function(fill) {
    this.stars = [];

    for (var i = 0; i < this.count; i++) {
      this.spawnStar(fill);
    }

  },

  spawnStar: function(fill) {

    var star = {
      x: Math.random() * app.width,
      y: Math.random() * app.height,
      z: 0.1 + 0.9 * Math.random(),
      s: Utils.random([1, 2, 3]),
      spriteIndex: Math.random() * this.sprites.length | 0
    };

    star.lx = star.x;
    star.ly = star.y;

    this.stars.push(star);

  },

  render: function(dt) {

    if (!this.populated) {
      this.populated = true;
      this.populate(true);
    }

    var diffX = (10 + app.game.score) * dt;
    var diffY = (10 + app.game.score) * dt;

    for (var i = 0; i < this.stars.length; i++) {

      var star = this.stars[i];

      var sprite = this.sprites[star.spriteIndex];

      app.ctx.drawImage(this.image, sprite[0], sprite[1], sprite[2], sprite[3],
        star.x, star.y, sprite[2], sprite[3]);

      star.x += diffX * star.z;
      star.y += diffY * star.z;

      if (star.x > app.width) star.x = 0;
      if (star.y > app.height) star.y = 0;

      if (star.x < 0) star.x = app.width;
      if (star.y < 0) star.y = app.height;

    }

  }

};
ENGINE.CircleExplosion = function(args) {

  Utils.extend(this, {

    attachedTo: false,
    radius: 0,
    alpha: 1.0,
    duration: 0.5

  }, args);

  this.radius = 0;

  this.image = app.getColoredImage(app.images.spritesheet, "#000", "source-in");

  this.tween = app.tween(this).discard().to({
    radius: args.radius
  }, this.duration, "outElastic").to({
    radius: 0
  }, this.duration, "outElastic");

};

ENGINE.CircleExplosion.prototype = {

  constructor: ENGINE.CircleExplosion,

  type: "circleExplosion",

  action: function() {

    app.sound.play("laser");

  },

  step: function() {

    if(this.attachedTo) {
      this.x = this.attachedTo.x;
      this.y = this.attachedTo.y;
    }

    if (this.tween.finished) this.dead = true;

  },

  render: function() {

    if (this.radius > 0) {
      
      app.ctx.beginPath();
      app.ctx.fillStyle = this.color;
      app.ctx.globalCompositeOperation = "lighter";
      app.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      app.ctx.fill();
      app.ctx.globalCompositeOperation = "source-over";


    }

  }

};
ENGINE.Ship = function(args) {

  Utils.extend(this, {

    damage: 1,
    firerate: 0.5,
    speed: 160,
    radius: 16,
    rotationSpeed: 5,
    hp: 10,
    range: 200,
    force: 0,
    forceDirection: 0,
    targetTimeout: 0,
    hitLifespan: 0,
    scale: 1.0,
    rank: 0,
    kills: 0

  }, defs.ships[args.type], args);

  this.random = this.game.random();

  this.maxHp = this.hp;

  this.lifetime = this.game.random() * 10;
  this.cooldown = this.firerate;
  this.desiredDirection = this.direction = this.game.random() * 6;

  this.color = defs.teamColor[this.team];

  this.image = app.images.spritesheet;

  if (this.team) this.applyUpgrades(this.game.upgrades);
  else this.applyDifficulty();

};

ENGINE.Ship.prototype = {

  constructor: ENGINE.Ship,

  hoverable: true,

  frozenSprite: [193, 86, 11, 19],

  quota: 2,

  pointerenter: function() {

    this.repair();

  },

  ranks: [
    [318, 131, 10, 5],
    [333, 131, 10, 10],
    [348, 131, 10, 15],
    [360, 131, 10, 8],
    [372, 131, 10, 13],
    [384, 131, 10, 18],
    [396, 131, 15, 16]
  ],

  applyDifficulty: function() {

    var difficulty = this.game.wave / 30;

    this.speed *= 1 + difficulty;
    this.damage *= 1 + difficulty;

  },

  applyUpgrades: function(upgrades) {

    var hpmod = this.hp / this.maxHp;

    this.damage = 1 + upgrades.damage * 0.25;
    this.maxHp = upgrades.life * 10;
    this.hp = hpmod * this.maxHp;
    this.speed = 80 + 10 * upgrades.speed;


    if (this.free) {
      this.damage *= 2;
      this.maxHp *= 2;
      this.hp *= 2;
    }

  },

  die: function() {

    if (!this.team) this.game.score++;

    if (this.game.benchmark) {

      this.hp = this.maxHp;

    } else {

      this.dead = true;

    }

    if (this.boss) {

      this.game.shake();

      for (var i = 0; i < 16; i++) {

        this.game.add(ENGINE.Resource, {
          x: this.x,
          y: this.y
        });

      }

    }

    this.game.explosion(this.x, this.y, 16, this.color);

    this.game.add(ENGINE.Resource, {
      x: this.x,
      y: this.y,
      parent: this
    });

    if (this.planet) this.planet.ships--;

    if (!this.team) this.game.onenemydeath(this);

    if (!this.game.benchmark) app.sound.play("planetHit").rate(0.6);

  },

  applyDamage: function(damage, attacker) {

    if (this.dead) return;

    this.hitLifespan = 0.1;

    this.hp -= damage;

    if (this.hp <= 0) {
      this.die();
      if (attacker) attacker.onscore();
    }

    this.game.explosion(this.x, this.y, 3, this.color);


  },

  step: function(dt) {

    dt *= this.game.timeFactor;

    // if (!this.team) dt *= Math.sin((app.lifetime % 2 / 2) * Math.PI);

    this.lifetime += dt;

    if ((this.targetTimeout -= dt) <= 0) {

      this.target = false;
      this.targetTimeout = 0.25;

    }

    if (!this.target) {

      this.target = this.getTarget(this.game.entities);

    } else if (this.target.dead) {

      this.target = null;

    }


    this.foresightCollision();

    var destination = false;
    var speed = this.speed;

    var ox = 0;
    var oy = 0;

    if (this.team && this.target) {

      ox = Math.cos(this.random * 6.28) * 100;
      oy = Math.sin(this.random * 6.28) * 100;

      destination = this.target;

    } else destination = this.game.player.planet;

    if (this.team && Utils.distance(this, app.center) > app.center.y) {

      destination = app.center;

    }

    if (this.collisionDanger) {

      /*

        var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI / 2;

        destination = {
          x: this.collisionDanger.x + Math.cos(angle) * 150,
          y: this.collisionDanger.y + Math.cos(angle) * 150
        }

        speed *= 1 - 0.5 * Math.abs(Utils.circDistance(this.direction, angle) / (Math.PI));

      */

      if (this.collisionDistance < 50) {

        var angle = Math.atan2(this.collisionDanger.y - this.y, this.collisionDanger.x - this.x) - Math.PI;

        this.x = this.collisionDanger.x + Math.cos(angle) * 50;
        this.y = this.collisionDanger.y + Math.sin(angle) * 50;

      }

      // speed *= this.collisionDistance / 200;

    }


    if (destination) {

      this.desiredDirection = Math.atan2(destination.y - this.y + ox, destination.x - this.x + oy);

    }

    if (!this.frozen) {

      this.direction = Utils.circWrapTo(this.direction, this.desiredDirection, dt * this.rotationSpeed);

    }

    this.move(dt);

    /* firing mechanics */

    this.cooldown -= dt;

    if (this.canFire()) {

      this.fire();

    }

    if (!this.team && Utils.distance(this, this.game.playerPlanet) < this.game.playerPlanet.radius) {

      if (!this.game.benchmark) {

        this.game.player.planet.applyDamage(1, this);
        this.die();

      }

    }

    this.hitLifespan -= dt;

  },


  move: function(dt) {

    if (!this.frozen) {

      Utils.moveInDirection.call(this, this.direction, this.speed * dt);

    }

    if (this.force > 0) {

      this.force -= 200 * dt;

      Utils.moveInDirection.call(this, this.forceDirection, this.force * dt);

    }

  },

  canFire: function() {

    if (this.frozen) return false;

    if (this.cooldown > 0) return;
    if (!this.target) return;
    if (Utils.distance(this, this.target) > this.range) return;

    this.cooldown = this.firerate;

    this.fire();

  },

  fire: function() {

    this.game.add(ENGINE.Bullet, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: this.target,
      damage: this.damage,
      parent: this
    });

    if (!this.game.benchmark) app.sound.play("laser");

  },

  render: function() {

    /* sprite */

    app.ctx.save();
    app.ctx.translate(this.x, this.y);

    this.renderHUD();

    if (this.hitLifespan > 0) {

      var image = app.getColoredImage(this.image, "#fff", "source-in");

    } else {

      var image = this.image;

    }

    app.ctx.rotate(this.direction - Math.PI / 2);
    app.ctx.scale(this.scale, this.scale);
    app.ctx.drawImage(image, this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]);
    app.ctx.restore();

    if (this.frozen) {

      app.ctx.drawImage(app.images.spritesheet,
        this.frozenSprite[0], this.frozenSprite[1], this.frozenSprite[2], this.frozenSprite[3],
        this.x - this.frozenSprite[2] / 2, this.y - this.frozenSprite[3] / 2, this.frozenSprite[2], this.frozenSprite[3]);

    }

    if (this.team) {

      var rankSprite = this.ranks[this.rank];

      app.ctx.drawImage(app.images.spritesheet,
        rankSprite[0], rankSprite[1], rankSprite[2], rankSprite[3],
        this.x + 24, this.y - 24, rankSprite[2], rankSprite[3]);


    }

  },

  renderHUD: function() {

    if (this.frozen) return;

    var w = Math.min(100, (this.maxHp / 160) * 100 | 0);

    var mod = this.hp / this.maxHp;

    app.ctx.fillStyle = this.color;
    app.ctx.strokeStyle = this.color;
    app.ctx.lineWidth = 2;
    app.ctx.fillRect(-w * mod / 2 | 0, 32, w * mod, 5);
    app.ctx.strokeRect(-w * 0.5 | 0, 32, w, 5);

  },

  collisionRange: 100,

  foresightCollision: function() {

    this.collisionDanger = false;

    var self = this;

    var pool = Utils.filter(this.game.entities, function(e) {

      if (e.type !== "asteroid") return false;

      if (Utils.distance(self, e) > self.collisionRange) return false;

      return true;

    });

    this.collisionDanger = Utils.nearest(this, pool);

    if (this.collisionDanger) this.collisionDistance = Utils.distance(this, this.collisionDanger);

  },

  getTarget: function() {

    var pool = [];

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;

      if (entity.team !== this.team) pool.push(entity);

    }

    return Utils.nearest(this, pool);

  },

  repair: function() {

    if (this.hp >= this.maxHp) return;

    this.game.add(ENGINE.CircleExplosion, {
      color: "#a04",
      radius: 32,
      attachedTo: this
    });

    this.hp = this.maxHp;

  },

  onscore: function() {

    this.kills++;

    this.rank = Math.min(this.ranks.length - 1, this.kills / 3 | 0);

  }

};
ENGINE.Bullet = function(args) {

  Utils.extend(this, {
    speed: 400
  }, args);

  this.color = defs.teamColor[this.team];
  this.radius = 4;
  this.direction = 0;

  this.sprite = this.sprites[this.team];

};

ENGINE.Bullet.prototype = {

  sprites: [
    [126, 25, 4, 37],
    [133, 25, 4, 37]
  ],

  quota: 0.5,

  constructor: ENGINE.Bullet,

  step: function(dt) {

    dt *= this.game.timeFactor;

    this.direction = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    if (Utils.distance(this, this.target) < this.radius + this.target.radius) {

      this.hit(this.target);

    }

  },

  hit: function(target) {

    target.applyDamage(this.damage, this.parent);

    this.die();

  },

  die: function() {

    this.dead = true;

  },

  render: function() {

    app.ctx.save();

    app.ctx.translate(this.x, this.y);
    app.ctx.rotate(this.direction + Math.PI / 2);
    app.ctx.drawImage(app.images.spritesheet,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.Asteroid = function(args) {

  this.max = this.resources = 5;

  Utils.extend(this, {

    hitLifespan: 0

  }, args);

  this.radius = 32;

  this.direction = Math.atan2(app.center.y - this.y, app.center.x - this.x);
  this.speed = 8 + this.game.random() * 32;

  this.lifetime = 0;

  this.kind = this.game.random() > 0.8 ? "gold" : "normal";

  this.sprite = Utils.random(this.sprites[this.kind]);

  this.collectibles = 0;


};

ENGINE.Asteroid.prototype = {

  constructor: ENGINE.Asteroid,

  quota: 0.5,

  hoverable: "mining",
  silent: true,
  instant: true,

  type: "asteroid",


  sprites: {

    normal: [
      [341, 239, 52, 39],
      [337, 288, 61, 61],
      [338, 354, 57, 58]
    ],

    gold: [
      [408, 238, 52, 39],
      [404, 287, 59, 61],
      [403, 353, 59, 58]
    ],

    hit: [
      [476, 127, 52, 39],
      [472, 176, 61, 61],
      [473, 242, 57, 58]
    ]

  },

  pointerenter: function() {

    this.slowdown = true;

  },

  pointerleave: function() {

    this.slowdown = false;

  },

  die: function() {

    if (!this.game.benchmark) app.sound.play("digEnd");

    if (Math.random() > 0.7) {

      this.game.add(ENGINE.Powerup, {
        x: this.x,
        y: this.y
      });

    }

    this.game.remove(this);
    this.game.explosion(this.x, this.y, 16, "#aaa");
    this.game.spawnAsteroid();

  },

  dig: function() {

    this.hitLifespan = 0.1;

    this.resources--;

    if (this.resources <= 0) {
      this.die();
    }

    var count = this.kind === "gold" ? 2 : 1;

    this.spawnResources(count);

    this.game.explosion(this.x, this.y, 4, "#fa0");

    if (!this.game.benchmark) app.sound.play("dig");

  },

  spawnResources: function(count) {

    for (var i = 0; i < count; i++) {

      this.game.add(ENGINE.Resource, {
        x: this.x,
        y: this.y,
        parent: this
      });

    }

  },

  step: function(dt) {

    dt *= this.game.timeFactor;

    this.lifetime += dt;

    this.hitLifespan -= dt;

    var speed = this.speed * (this.slowdown ? 0.25 : 1.0);

    this.x += Math.cos(this.direction) * speed * dt;
    this.y += Math.sin(this.direction) * speed * dt;

    this.game.wrap(this);

    if (Utils.distance(this, app.center) < this.game.player.planet.radius + this.radius) {

      if (this.game.player.planet.asteroidsShield) {

        this.spawnResources(5);

      } else {

        this.game.player.planet.applyDamage(1, this);

      }

      this.die();

    }

  },

  render: function() {

    if (this.hitLifespan > 0) {
    
      var sprite = this.sprites.hit[this.spriteIndex];
    
    } else {
      
      var sprite = this.sprites[this.kind][this.spriteIndex];

    }

    var scale = 0.5 + 0.5 * this.resources / this.max;

    app.ctx.save();

    app.ctx.translate(this.x, this.y)
    app.ctx.rotate(app.roundAngle(this.lifetime))
    app.ctx.scale(scale, scale)
    app.ctx.drawImage(app.images.spritesheet,
      sprite[0], sprite[1], sprite[2], sprite[3], -sprite[2] / 2, -sprite[3] / 2, sprite[2], sprite[3]
    );
    app.ctx.restore();

  }

};
ENGINE.Cursor = function(game, team, planet) {

  this.game = game;

  this.actionTimeout = 0;

  this.dotRadius = 8;
  this.capacity = 10;
  this.resources = 4;
  this.x = 0;
  this.y = 0;
  this.hoverTime = 0;
  this.team = team;
  this.color = defs.teamColor[team];
  this.planet = planet;

  this.targetTimeout = this.targetInterval = 0.25;
  this.fireCooldown = this.fireInterval = 0.25;

  /* timers */

  this.times = {
    mining: 0.5,
    collect: 0.05,
    build: 0.5,
    repair: 2
  };


  this.tween = app.tween(this);

  if (!this.team) {

    this.ai = new ENGINE.Ai(this);
    this.ai.set("idle");

  }

  this.trail = new ENGINE.Trail(this, {
    interval: 0.05,
    maxPoints: 10,
    color: this.color
  });


};

ENGINE.Cursor.prototype = {

  constructor: ENGINE.Cursor,

  poke: function() {

    this.tween = app.tween(this).discard()

    .to({
      dotRadius: 16
    }, 0.1, "outSine")

    .to({
      dotRadius: 8
    }, 0.05, "inSine");

  },

  step: function(dt) {

    var prevEntity = this.entity;

    this.entity = this.getHoveredEntity();

    if (this.entity !== prevEntity) {

      if (prevEntity && prevEntity.pointerleave) prevEntity.pointerleave(this);
      if (this.entity && this.entity.pointerenter) this.entity.pointerenter(this);

      this.onentitychange();

    }

    if (this.action) {

      this.hoverTime += dt;

      this.progressAction(dt);

    }

    /* firing mechanics */

    if (this.target && this.target.dead) this.target = false;

    if ((this.targetTimeout -= dt) <= 0) {

      this.targetTimeout = 0.5;

      this.target = this.getTarget();

    }


    this.fireCooldown -= dt;

    if (this.canFire()) {

      this.fire();

    }

    this.trail.step(dt);


  },

  getTarget: function() {

    var pool = [];

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;

      if (Utils.distance(entity, this) > 200) continue;
      if (entity.team !== this.team) pool.push(entity);

    }

    return Utils.nearest(this, pool);

  },

  onentitychange: function() {

    this.actionComplete = false;

    this.hoverTime = 0;

    if (this.entity) {

      this.action = this.entity.hoverable;
      this.resetAction();

      if (this.entity.instant) this.actionTimeout = 0;


    } else this.action = false;

    /*
        if (!this.actionSound) this.actionSound = app.sound.play("action").loop().rate(0.5);

        if (!this.action) {
          this.actionSound.stop();
        } else {
          this.actionSound.fadeIn();
        }
        */
    this.updateTooltip();


  },

  resetAction: function() {


    this.actionTimeout = this.times[this.action];

    this.actionDuration = this.actionTimeout;

  },

  upgrade: function(key) {

    this.game.upgrades[key] ++;

    this.game.buttons[key].count = this.getPrice(key);

    var ships = Utils.filter(this.game.entities, function(e) {

      return (e instanceof ENGINE.Ship) && e.team;

    });

    for (var i = 0; i < ships.length; i++) {

      var ship = ships[i];

      this.game.add(ENGINE.CircleExplosion, {
        color: "#0af",
        radius: 32,
        attachedTo: ship
      });

      ship.applyUpgrades(this.game.upgrades)

    }

  },

  getPrice: function(key) {

    return Math.pow(2, this.game.upgrades[key]);

  },

  canProgress: function() {

    switch (this.action) {

      case "repair":

        return this.planet.hp < this.planet.maxHP;

        break;

      case "build":

        if (this.entity.key === "fighter") {

          if (this.game.playerPlanet.max - this.game.playerPlanet.ships <= 0) return false;

          return this.resources > 0;
        } else {

          return this.resources >= this.getPrice(this.entity.key);

        }

        break;

      default:

        return true;

        break;

    }
  },

  progressAction: function(dt) {

    if (this.canProgress() && (this.actionTimeout -= dt) < 0) {

      this.finalizeAction();
      this.resetAction();

    };

    this.progress = 1 - this.actionTimeout / this.actionDuration;


  },

  finalizeAction: function() {

    this.actionComplete = true;

    switch (this.action) {

      case "repair":

        this.planet.repair();

        break;

      case "mining":

        this.entity.dig();

        break;


      case "build":

        switch (this.entity.key) {

          case "fighter":

            this.planet.spawnShip("fighter");
            this.resources -= 1;
            if (!this.game.benchmark) app.sound.play("build");

            break;

          case "life":
          case "damage":
          case "speed":

            this.resources -= this.getPrice(this.entity.key);

            this.upgrade(this.entity.key);

            if (!this.game.benchmark) app.sound.play("upgrade");


            break;

        }

        break;
    }

  },

  hit: function() {

    this.game.shake();

    this.planet.applyDamage(1, this.planet);

    this.game.add(ENGINE.CircleExplosion, {
      x: this.x,
      y: this.y,
      color: "#c02",
      radius: 32
    })

  },

  getHoveredEntity: function() {

    for (var i = 0; i < this.game.entities.length; i++) {

      var entity = this.game.entities[i];

      if (entity.hoverable && Utils.distance(entity, this) < entity.radius) return entity;

    }

    return null;

  },

  render: function() {

    this.trail.render();

    app.layer.fillStyle(this.color).fillCircle(this.x, this.y, this.dotRadius);

    if (this.action && !this.entity.silent) {

      var mod = Math.min(1, app.ease(2 * this.hoverTime, "outBounce"));

      app.ctx.save();
      app.ctx.translate(this.entity.x, this.entity.y);

      app.ctx.strokeStyle = this.color;
      app.ctx.lineWidth = 2;
      app.ctx.beginPath();
      app.ctx.arc(0, 0, (this.entity.radius + 2) * mod, 0, Math.PI * 2);
      app.ctx.stroke();

      app.ctx.lineWidth = 8;
      app.ctx.beginPath();
      app.ctx.globalAlpha = 0.25;
      app.ctx.arc(0, 0, this.entity.radius + 8, 0, Math.PI * 2)
      app.ctx.stroke()
      app.ctx.globalAlpha = 1.0;

      app.ctx.lineWidth = 8;
      app.ctx.beginPath();
      app.ctx.arc(0, 0, this.entity.radius + 8, 0, this.progress * Math.PI * 2)
      app.ctx.stroke();

      app.ctx.restore();

    }



  },

  canFire: function() {

    if (!this.game.checkBonus("laser")) return;

    if (this.fireCooldown > 0) return;
    if (!this.target) return;
    if (Utils.distance(this, this.target) > this.range) return;

    this.fireCooldown = this.fireInterval;

    this.fire();

  },

  fire: function() {

    this.game.add(ENGINE.Bullet, {
      x: this.x,
      y: this.y,
      team: this.team,
      target: this.target,
      damage: 2,
      speed: 1000
    });

    if (!this.game.benchmark) app.sound.play("laser");

  },

  moveTo: function(destination) {

    this.destination = destination;

  },

  updateTooltip: function() {

    if (this.entity) {
      if (this.entity.tooltip) this.game.tooltip = this.entity.tooltip;
    } else {
      this.game.tooltip = false;
    }

  }

}
ENGINE.Resource = function(args) {

  Utils.extend(this, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32;

  this.forceDirection = Math.random() * 6.28;
  this.force = 64 + Math.random() * 128;

  this.force *= 3;
  this.forceDamping = this.force;

  this.lifetime = 0;
  this.duration = 10;

  this.value = Math.random() * 3 | 0;

  this.sprite = this.sprites[this.value];
};

ENGINE.Resource.prototype = {

  constructor: ENGINE.Resource,

  quota: 0.7,

  sprites: [
    [333, 105, 10, 10],
    [320, 104, 12, 12],
    [303, 102, 16, 16]
  ],

  type: "resource",


  collect: function() {

    this.game.remove(this);

    if (!this.game.benchmark) app.sound.play("coin");

    this.game.player.poke();

    this.game.add(ENGINE.CircleExplosion, {
      color: "#fc0",
      radius: 8,
      attachedTo: this,
      duration: 0.25
    });

    this.game.player.resources += this.value;

  },

  step: function(dt) {

    this.lifetime += dt;

    var playerDistance = Utils.distance(this, this.game.player);

    if (this.force) {

      this.x += Math.cos(this.forceDirection) * this.force * dt;
      this.y += Math.sin(this.forceDirection) * this.force * dt;

      this.force = Math.max(0, this.force - this.forceDamping * dt);

    }

    if (this.poked && this.game.checkBonus("magnet")) {

      this.direction = Math.atan2(this.game.player.y - this.y, this.game.player.x - this.x);

      this.x += Math.cos(this.direction) * this.speed * dt;
      this.y += Math.sin(this.direction) * this.speed * dt;


      if (!this.force) {
        this.speed += 256 * dt;
      }

    } else {

      if (playerDistance < 100) {
        this.poked = true;
        this.speed = 128;
      }

    }


    if (this.lifetime > 0.5) {
      if (playerDistance < 32) {
        this.collect();
      }
    }

    if (this.lifetime > this.duration) this.game.remove(this);

  },

  render: function() {

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.ctx.rotate(this.lifetime);

    app.ctx.drawImage(app.images.spritesheet,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.Button = function(args) {

  Utils.extend(this, {

    radius: 32

  }, args);


  this.image = app.images.spritesheet;

};

ENGINE.Button.prototype = {

  constructor: ENGINE.Button,

  type: "button",

  pointerenter: function() {

    app.tween(this).discard().to({
      radius: 24
    }, 0.1).to({
      radius: 32
    }, 0.2, "outSine");

  },

  action: function() {


    app.sound.play("laser");

  },

  step: function() {

  },

  render: function() {


    if (this.sprite) {
      var scale = this.radius / 32;

      app.ctx.save();

      app.ctx.translate(this.x, this.y);
      app.ctx.drawImage(this.image,
        this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
      );

      app.ctx.restore();

    }

    if (this.count) {
      app.layer.textAlign("center").font("bold 32px Arial").fillStyle(this.color).fillText(this.count, this.x, this.y - this.radius - 48);
    }

  }

};
ENGINE.Particle = function(args) {

  Utils.extend(this, {
    radius: 4
  }, args)

  this.spriteIndex = 0;

  this.reset();

};

ENGINE.Particle.prototype = {

  constructor: ENGINE.Particle,

  quota: 0.5,

  sprites: [
    [260, 152, 6, 6],
    [260, 159, 5, 5],
    [260, 165, 5, 5],
    [261, 171, 3, 3]
  ],

  reset: function() {

    this.lifetime = 0;
    this.duration = 0.5;

    this.direction = this.game.random() * 6.28;
    this.speed = 32 + this.game.random() * 128;

    this.speed *= 3;

    this.damping = this.speed * 2;

  },

  step: function(dt) {

    this.lifetime += dt;

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.speed = Math.max(0, this.speed - this.damping * dt);

    this.progress = Math.min(this.lifetime / this.duration, 1.0);

    if (this.progress >= 1.0) {
      this.x = 0;
      this.y = 0;
      this.progress = 0;
    }

    this.spriteIndex = this.progress * this.sprites.length | 0;

  },

  render: function() {


    // var s = this.size * (1 - this.progress);

    // if (s > 0) {
    if (this.progress >= 1.0) return;

    this.image = app.getColoredImage(app.images.spritesheet, this.color);

    // app.ctx.fillStyle = this.color;
    // app.ctx.fillRect(this.x - s / 2, this.y - s / 2, s, s)

    var sprite = this.sprites[this.spriteIndex];

    app.ctx.drawImage(this.image, sprite[0], sprite[1], sprite[2], sprite[3],
      this.x, this.y, sprite[2], sprite[3])

    // }

  }

};
ENGINE.Planet = function(args) {

  Utils.extend(this, {

    radius: 48,
    hp: 20,
    max: 100,
    ships: 0,
    repairProgress: 0,
    repairTime: 4,
    asteroidsShield: true,
    shieldScale: 0.0

  }, args);

  this.maxHP = this.hp;

  this.lifetime = 0;

};

ENGINE.Planet.prototype = {

  constructor: ENGINE.Planet,

  type: "planet",

  hoverable: "repair",

  sprite: [201, 215, 104, 104],

  shieldSprite: [492, 320, 124, 124],

  repair: function() {

    this.hp++;

  },

  applyDamage: function(damage, attacker) {

    this.game.shake();

    this.hp--;

    if (this.hp <= 0 && !this.game.benchmark) this.game.gameover();

    if (!this.game.benchmark) app.sound.play("planetHit");

    this.game.add(ENGINE.CircleExplosion, {
      x: attacker.x,
      y: attacker.y,
      color: "#a04",
      radius: 32
    })

  },

  step: function(dt) {

    this.lifetime += dt;

    var prevShield = this.asteroidsShield;
    this.asteroidsShield = false;this.game.checkBonus("shield");

    if (prevShield !== this.asteroidsShield) {

      app.tween(this).discard().to({
        shieldScale: this.asteroidsShield ? 1.0 : 0.0
      }, 0.5, "outElastic");

    }

  },

  spawnShip: function(type) {

    var ship = this.game.add(ENGINE.Ship, {
      x: this.x,
      y: this.y,
      type: type,
      team: 1,
      planet: this
    });

    ship.forceDirection = Math.random() * 6;
    ship.force = 200;

    this.ships++;

  },

  render: function() {

    app.layer.align(0.5, 0.5);
    app.layer.drawRegion(app.images.spritesheet, this.sprite, this.x, this.y);
    app.layer.textAlign("center").font("bold 48px Arial").fillStyle("#fff").fillText(this.hp, this.x, this.y - 24);
    app.layer.realign();

    if (this.asteroidsShield && this.shieldScale > 0) {
      var scale = this.shieldScale;
      app.ctx.save();
      app.ctx.globalAlpha = 0.5;
      app.ctx.globalCompositeOperation = "lighter";
      app.ctx.translate(this.x, this.y);
      app.ctx.scale(scale, scale);
      app.ctx.drawImage(app.images.spritesheet, this.shieldSprite[0], this.shieldSprite[1], this.shieldSprite[2], this.shieldSprite[3], -this.shieldSprite[2] / 2, -this.shieldSprite[3] / 2, this.shieldSprite[2], this.shieldSprite[3]);
      app.ctx.restore();
    }

  }

};
/* The counter in the top-left corner is:

AVERAGE FRAME TIME |  DEVICE  POWER   | ENTITIES COUNT
                     (baselineFactor)
*/


/* Reference baseline to calculate device power */

REFERENCE_BASELINE = 378;

/* Reference frame time to tell how well the game has been optimized */
/* Make it higher to give user more CPU power */

REFERENCE_FRAME_TIME = 0.8;

/* How much optimization value one ship drains */

SHIP_CPU_COST = 0.1;

ENGINE.Game = {

  bonuses: {

    magnet: 0.1,
    laser: 0.2,
    shield: 0.4

  },

  checkBonus: function(key) {

    return true;

    return this.cpuRatio >= this.bonuses[key];

  },

  explosion: function(x, y, count, color) {

    if (!this.particlesPool) {

      this.particlesPool = [];

      for (var i = 0; i < 100; i++) {

        var particle = this.add(ENGINE.Particle, {
          x: x,
          y: y
        });

        this.particlesPool.push(particle);

      }

      this.particleIndex = 0;

    }

    for (var i = 0; i <= count; i++) {

      if (++this.particleIndex >= this.particlesPool.length) this.particleIndex = 0;;

      var particle = this.particlesPool[this.particleIndex];

      particle.x = x;
      particle.y = y;
      particle.color = color;

      particle.reset();

    }

  },

  random: function() {

    return this.benchmark ? 0.5 : Math.random();

  },

  add: function(constructor, args) {

    args = args || {};

    args.game = this;

    var entity = new constructor(args);

    this.entities.push(entity);

    return entity;

  },

  remove: function(entity) {

    entity.dead = true;

  },

  scaleComicBubble: function() {

    this.comicScale = 1.0;

    $comicbubble = document.body.querySelector("#comicbubble");

    var tween = app.tween(this).to({
      comicScale: 0.5
    });

    tween.onstep = function(app) {

      $comicbubble.style.transform = "scale(" + app.comicScale + "," + app.comicScale + ")";

    }

  },

  enter: function() {

    app.renderer.setSmoothing(false);

    this.scaleComicBubble();

    localStorage.setItem("baseline", app.baseline);

    this.music = app.music.play("dust").volume(0.5).fadeIn(4).loop();

    this.gradient = app.ctx.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);

    this.gradient.addColorStop(0.0, "transparent");
    this.gradient.addColorStop(1.0, "#000");

    this.reset();

  },

  leave: function() {

    this.music.fadeOut(2);

  },

  getScale: function(entity) {

    return 1 - Math.min(1.0, Utils.distance(entity, app.center) / (app.width * 0.5)) * 0.75;

  },

  spawnAsteroid: function() {

    var angle = Math.random() * Math.PI * 2;
    var radius = app.width / 2;
    var ox = Math.cos(angle) * radius;
    var oy = Math.sin(angle) * radius;

    this.add(ENGINE.Asteroid, {
      x: app.center.x + ox,
      y: app.center.y + oy
    });

  },

  resetVirtualPool: function() {

    this.virtualPool = [];

    for (var i = 0; i < 100; i++) {

      this.virtualPool.push(new ENGINE.Ship({
        x: Math.random() * app.width,
        y: Math.random() * app.height,
        game: this,
        team: i % 2
      }));

    }

  },

  reset: function() {

    this.spawnTimeout = 0;
    this.cpuUsage = 0;
    this.cpuBarProgress = 0;

    this.upgrades = {

      speed: 1,
      damage: 1,
      life: 1

    };

    this.resetVirtualPool();

    delete this.particlesPool;

    this.score = 0;

    this.wave = 0;

    this.tooltip = false;

    this.entities = [];

    this.playerPlanet = this.add(ENGINE.Planet, {
      x: app.center.x,
      y: app.center.y,
      team: 1
    });

    this.player = new ENGINE.Cursor(this, 1, this.playerPlanet);
    this.player.x = app.center.x;
    this.player.y = app.center.y;

    this.stars = new ENGINE.BackgroundStars(this);

    for (var i = 0; i < 8; i++) {

      this.spawnAsteroid();

    }

    var buttons = ["speed", "life", "damage"];

    this.buttons = {};

    for (var i = 0; i < buttons.length; i++) {

      var key = buttons[i];

      this.buttons[key] = this.add(ENGINE.Button, {
        color: defs.teamColor[1],
        x: app.center.x - 80 + i * 100,
        y: app.height - 100,
        sprite: defs.buttons[key],
        key: key,
        count: 1,
        hoverable: "build",
        tooltip: defs.tooltips[key]
      })
    }

    this.nextWave();


  },

  cpuHistory: [],

  step: function(dt) {

    var before = performance.now();

    /* slow motion - when you collect freeze powerup */

    this.timeFactor = 1.0;

    if (this.freezeLifespan > 0) {

      this.freezeLifespan -= dt;
      this.timeFactor = 0.1;

    }

    /* update the game 10 times to magnitude results in profiler */

    var MAGNIFY = 10;

    var quota = 0.0;
    for (var i = 0; i < this.entities.length; i++) {
      var entity = this.entities[i];
      quota += entity.quota || 0.7;

      for (var j = 0; j < MAGNIFY; j++) {
        entity.step(dt / MAGNIFY);

        if (entity.dead) {
          this.entities.splice(i--, 1);
          break;
        }
      }
    }

    this.quota = quota;

    var frameTime = (performance.now() - before) / MAGNIFY;

    /* measure optimization */

    /* It's the average of 100 frame times */

    /*

      baselineFactor      - baseline vs reference sample to get device power
                            if the device is over-powered we artificialy
                            make frameTime higher to make it more fair among the players

      optimizationRating  - reference frame time divided by (current) average frame time
                            handicaped by baselineFactor - this gives a factor of
                            how well user optimized the game

                            Make REFERENCE_FRAME_TIME higher to give player MORE cpu output

    */


    this.cpuHistory.push(frameTime / quota);

    if (this.cpuHistory.length > 60) this.cpuHistory.shift();

    this.averageFrameTime = this.average(this.cpuHistory);

    this.optimizationRating = ((0.8 / app.baseline) / (this.averageFrameTime));

    this.player.step(dt);

    /* use optimization results to affect the game */

    this.applyOptimization(dt);


  },

  average: function(array) {

    if (!array.length) return 0;

    var sum = 0;

    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum / array.length;

  },

  applyOptimization: function(dt) {

    var cpuUsage = 0;

    /* calculate (artificial) cpuUsage of ships
       if cpuUsage is greater than optimizationRating
       freeze a ship
    */

    for (var i = 0; i < this.entities.length; i++) {

      var entity = this.entities[i];

      if (!(entity instanceof ENGINE.Ship)) continue;
      if (!entity.team) continue;
      if (entity.free) continue;

      cpuUsage += SHIP_CPU_COST;

      if (cpuUsage < this.optimizationRating) {

        entity.frozen = false;

      } else {

        entity.frozen = true;

      }

    }

    /* tween cpuUsage instead of setting it instantly (less jittering) */

    this.cpuUsage = Utils.moveTo(this.cpuUsage, cpuUsage, Math.abs(this.cpuUsage - cpuUsage) * 0.25 * dt);
    this.realCpuUsage = cpuUsage;

    /* that's the value 0.0 - 1.0 that coresponds with the yellow power bar */

    this.cpuRatio = 1 - Math.min(1.0, this.cpuUsage / this.optimizationRating);
    this.cpuBarProgress = Utils.moveTo(this.cpuBarProgress, this.cpuRatio, 0.2 * dt);

    /* spawn ships if there is enough power */

    if ((this.spawnTimeout -= dt) <= 0) {

      this.spawnTimeout = 0.5;

      //if (this.cpuRatio > 0.5) this.playerPlanet.spawnShip("fighter");
      if (this.optimizationRating > this.realCpuUsage + 0.1) this.playerPlanet.spawnShip("fighter");

    }

  },

  shake: function() {

    this.shakeLifespan = 0.4;

  },

  render: function(dt) {

    if (!this.averageFrameTime) return;

    app.ctx.textBaseline = "top";
    app.ctx.save();

    app.ctx.fillStyle = "#282245";
    app.ctx.fillRect(0, 0, app.width, app.height);

    // app.ctx.fillStyle = this.gradient;
    //app.ctx.fillRect(0, 0, app.width, app.height);

    if (this.shakeLifespan > 0) {
      this.shakeLifespan -= dt;
      var chaos = Utils.random(-6, 6);
      app.ctx.translate(chaos, chaos)
    }

    this.stars.render(dt);

    for (var i = 0; i < this.entities.length; i++) {

      this.entities[i].render();

    }

    this.player.render();

    this.renderTooltip();

    app.ctx.textAlign = "right";
    app.ctx.font = "bold 16px Arial";
    app.ctx.fillStyle = "#fff";
    app.ctx.fillText("SCORE: " + this.score, app.width - 20, 20);


    this.renderCPUBar();
    // this.renderBonuses();

    app.ctx.textAlign = "center";
    app.ctx.font = "bold 64px Arial";
    app.ctx.fillStyle = "#fa0";
    app.ctx.fillText(this.player.resources, app.center.x - 180, app.height - 134);

    app.ctx.textAlign = "left";
    app.ctx.font = "bold 16px Arial";
    app.ctx.fillStyle = "#fff";
    app.ctx.fillText(
      this.optimizationRating.toFixed(2) + " | " +
      // this.baselineFactor.toFixed(2) + " | " +
      this.entities.length + ' + ' +
      this.quota.toFixed(1), 16, 16);

    app.ctx.restore();

  },

  barWidth: 200,

  renderCPUBar: function() {


    var width = 200;
    var currentWidth = this.barWidth * this.cpuBarProgress;

    app.ctx.drawImage(app.images.spritesheet,
      defs.frozenSprite[0], defs.frozenSprite[1], defs.frozenSprite[2], defs.frozenSprite[3],
      app.center.x - this.barWidth / 2 - 32, 24, defs.frozenSprite[2], defs.frozenSprite[3]);


    app.ctx.strokeStyle = "#fa0";
    app.ctx.fillStyle = "#fa0";
    app.ctx.lineWidth = 2;

    app.ctx.strokeRect(app.center.x - this.barWidth / 2, 16, this.barWidth, 32)
    app.ctx.fillRect(app.center.x - this.barWidth / 2, 16, currentWidth, 32)

    app.ctx.fillStyle = "#fff";
    app.ctx.textAlign = "center";
    app.fontSize(16);
    app.ctx.fillText("AVAILABLE CPU", app.center.x, 24);

    app.ctx.textAlign = "left";
    app.ctx.fillStyle = "#fa0";

    app.ctx.fillText("+ " + this.optimizationRating.toFixed(2), app.center.x + width / 2 + 16, 16);

    app.ctx.fillStyle = "#c40";
    app.ctx.fillText("- " + this.realCpuUsage.toFixed(2), app.center.x + width / 2 + 16, 32);

  },


  renderBonuses: function() {

    app.ctx.save();
    app.ctx.translate(app.center.x - this.barWidth / 2, 54);
    app.ctx.textAlign = "left";
    app.ctx.textBaseline = "top";

    var i = Object.keys(this.bonuses).length;

    for (var key in this.bonuses) {

      var threshold = this.bonuses[key];

      var x = this.barWidth * threshold;
      var y = i * 16;

      app.ctx.globalAlpha = this.checkBonus(key) ? 1.0 : 0.4;

      app.ctx.fillStyle = "#fff";
      app.ctx.fillRect(x, 0, 2, y);
      app.ctx.fillRect(x, y, 16, 2);

      app.ctx.fillStyle = "#fff";
      app.fontSize(12);
      app.ctx.fillText(defs.bonuses[key].toUpperCase(), x + 20, y - 6);

      i--;

    }

    app.ctx.restore();

  },


  renderTooltip: function() {

    if (!this.tooltip) return;

    app.layer.textAlign("center").fillStyle("#fff").font("16px Arial").textWithBackground(this.tooltip, app.center.x, app.height - 64, "#000", 16);

  },

  pointermove: function(e) {

    this.player.x = e.x;
    this.player.y = e.y;

  },

  wrap: function(entity) {

    if (entity.x + entity.radius < 0) entity.x = app.width + entity.radius;
    if (entity.x - entity.radius > app.width) entity.x = -entity.radius;
    if (entity.y + entity.radius < 0) entity.y = app.height + entity.radius;
    if (entity.y - entity.radius > app.height) entity.y = -entity.radius;

  },

  keydown: function(e) {

  },

  nextWave: function() {

    if (this.benchmark) return;

    this.wave++;

    this.shipsLeft = 0;

    var streamsPositions = [
      [0.0, 1.0],
      [0.0, 0.5],
      [0.0, 0.0],
      [1.0, 0.0],
      [1.0, 0.5],
      [1.0, 1.0]
    ];

    var difficulty = this.wave / 20;

    Utils.shuffle(streamsPositions);

    var streamsCount = Math.min(3, 1 + difficulty) + 0.3 | 0;
    var shipsPerStream = Math.min(16, 4 + difficulty * 4) | 0;

    var possibleShips = [];

    if (this.wave > 0) possibleShips.push("creep1");
    if (this.wave > 3) possibleShips.push("creep2");
    if (this.wave > 6) possibleShips.push("creep3");
    if (this.wave > 10) possibleShips.push("creep4");

    if (this.wave % 5 === 0) possibleShips = ["boss"];

    for (var i = 0; i < streamsCount; i++) {

      var stream = streamsPositions.pop();

      var x = stream[0] * app.width;
      var y = stream[1] * app.height;

      var ship = Utils.random(possibleShips);
      var shipData = defs.ships[ship];
      var angle = Math.atan2(y - app.center.y, x - app.center.x);

      for (var j = 0; j < shipsPerStream; j++) {

        var entity = this.add(ENGINE.Ship, {
          type: ship,
          x: x + Math.cos(angle) * j * 100,
          y: y + Math.sin(angle) * j * 100,
          team: 0
        });

        this.shipsLeft++;

        if (shipData.boss) {

          entity.hp = entity.maxHp = this.score;
          entity.damage = this.score / 50 | 0;
          entity.scale = 0.5 + this.score / 200;

          break;

        }

      }

    }

  },

  repairShips: function() {

    var ships = Utils.filter(this.entities, function(e) {
      return (e instanceof ENGINE.Ship) && e.team;
    });

    for (var i = 0; i < ships.length; i++) {

      ships[i].repair();

    }

  },

  onenemydeath: function(ship) {

    this.shipsLeft--;

    if (this.shipsLeft <= 0) this.nextWave();

  },

  pointerdown: function(e) {

  },

  gameover: function() {

    ENGINE.Gameover.score = this.score;

    app.setState(ENGINE.Gameover);


  }

};
ENGINE.Powerup = function(args) {

  Utils.extend(this, args);

  this.radius = 32;

  this.direction = Math.random() * 6.28;
  this.speed = 32;

  this.forceDirection = Math.random() * 6.28;
  this.force = 64 + Math.random() * 128;

  this.force *= 3;
  this.forceDamping = this.force;

  this.lifetime = 0;
  this.duration = 10;

  var keys = ["repair", "missiles", "freeze"];

  var freelanersCount = Utils.filter(this.game.entities, function(e) {
    return e.free && e instanceof ENGINE.Ship;
  }).length;

  if (freelanersCount < 2) keys.push("freelancer");

  this.key = Utils.random(keys);
  this.sprite = this.sprites[this.key];

};

ENGINE.Powerup.prototype = {

  constructor: ENGINE.Powerup,

  sprite: [216, 159, 14, 14],

  type: "powerup",

  sprites: {

    "repair": [245, 89, 23, 25],
    "freelancer": [276, 51, 32, 32],
    "freeze": [242, 119, 19, 21],
    "missiles": [311, 13, 28, 32]

  },

  collect: function() {

    this.game.explosion(this.x, this.y, 16, "#fff");

    this.game.remove(this);

    if (!this.game.benchmark) app.sound.play("coin");

    this.game.player.poke();

    this.game.add(ENGINE.TextOut, {
      x: this.x,
      y: this.y,
      text: this.key
    });

    switch (this.key) {

      case "freeze":

        this.game.freezeLifespan = 4.0;

        break;

      case "missiles":

        for (var i = 0; i < 4; i++) this.game.add(ENGINE.Missile, {
          x: this.x,
          y: this.y,
          team: 1
        });

        break;

      case "repair":

        this.game.repairShips();

        break;


      case "freelancer":

        var ship = this.game.add(ENGINE.Ship, {
          x: this.x,
          y: this.y,
          type: "freelancer",
          team: 1,
          free: true,
          planet: this.game.playerPlanet
        });

        ship.forceDirection = Math.random() * 6;
        ship.force = 200;

        break;
    }

  },

  step: function(dt) {

    this.lifetime += dt;

    var playerDistance = Utils.distance(this, this.game.player);

    if (this.force) {

      this.x += Math.cos(this.forceDirection) * this.force * dt;
      this.y += Math.sin(this.forceDirection) * this.force * dt;

      this.force = Math.max(0, this.force - this.forceDamping * dt);

    }

    if (this.lifetime > 0.5) {
      if (playerDistance < 32) {
        this.collect();
        this.game.player.resources++;
      }
    }

    if (this.lifetime > this.duration) this.game.remove(this);

  },

  render: function() {

    var linear = app.lifetime % 0.5 / 0.5;
    var scale = 0.8 + Math.sin(Math.PI * linear) * 0.4;

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.ctx.scale(scale, scale);

    app.ctx.drawImage(app.images.spritesheet,
      this.sprite[0], this.sprite[1], this.sprite[2], this.sprite[3], -this.sprite[2] / 2, -this.sprite[3] / 2, this.sprite[2], this.sprite[3]
    );

    app.ctx.restore();

  }

};
ENGINE.TextOut = function(args) {

  Utils.extend(this, {
    background: "rgba(0,0,0,0.5)",
    color: "#fff",
    fontSize: 24,
    scaleX: 0,
    scaleY: 1.0,
    text: "void",
    duration: 2.0
  }, args);

  var textout = this;

  app.tween(this)
    .to({
      scaleX: 1.0
    }, this.duration * 0.25, "outElastic")
    .wait(this.duration * 0.5)
    .to({
      scaleY: 0.0
    }, this.duration * 0.25, "outCirc")
    .on("finish", function() {
      textout.game.remove(textout);
    });

    ttt = this;

};

ENGINE.TextOut.prototype = {

  constructor: ENGINE.TextOut,

  sprite: [216, 159, 14, 14],

  type: "textout",

  step: function(dt) {

  },

  render: function() {

    if (!this.scaleX || !this.scaleY) return;

    app.ctx.save();

    app.ctx.translate(this.x, this.y);

    app.fontSize(this.fontSize);

    app.ctx.fillStyle = this.color;
    app.ctx.textAlign = "center";

    app.ctx.scale(this.scaleX, this.scaleY);
    app.ctx.fillText(this.text, 0, 0)

    app.ctx.restore();

  }

};
ENGINE.Trail = function(parent, args) {

  this.parent = parent;

  Utils.extend(this, {
    color: "#0fc",
    points: [],
    maxPoints: 5,
    width: 10,
    lifetime: 0,
    lifespan: 0,
    paused: false,
    interval: 0.15,
    stroke: true
  }, args);

};

ENGINE.Trail.prototype = {

  zIndex: 200,

  quota: 0.3,

  reaction: 8,

  clear: function() {

    this.points = [];

  },

  step: function(delta) {

    this.lifetime += delta;

    if (Utils.interval("point", this.interval, this)) {

      if (!this.paused) this.points.push(this.parent.x, this.parent.y);

      if (
        (this.points.length > this.maxPoints * 2) ||
        (this.paused && this.points.length > 0)
      ) {
        this.points.shift();
        this.points.shift();
      }
    }

    this.points[this.points.length - 2] = this.parent.x;
    this.points[this.points.length - 1] = this.parent.y;

    if(this.lifespan && this.lifetime > this.lifespan) {
      this.paused = true;
    }

  },

  render: function() {

    if(this.points.length <= 0) return;

    app.layer.save();
    app.layer.strokeStyle(this.color);
    app.layer.lineCap("square");

    // if (!this.stroke) app.layer.strokeStyle("rgba(0,0,0,0.1)");

    for (var i = 2; i < this.points.length; i += 2) {

      var ratio = i / (2 * this.maxPoints);
      var px = this.points[i - 2];
      var py = this.points[i - 1];
      var nx = this.points[i];
      var ny = this.points[i + 1];
      app.layer.beginPath();
      app.layer.moveTo(px | 0, py | 0);
      app.layer.lineTo(nx | 0, ny | 0);
      app.layer.a(ratio).lineWidth(ratio * this.width);
      app.layer.stroke();
    }

    app.layer.restore();


  }

};
ENGINE.Missile = function(args) {

  Utils.extend(this, {
    speed: 400
  }, args);

  this.color = defs.teamColor[this.team];
  this.radius = 4;
  this.direction = 0;

  this.force = 400;
  this.forceDirection = Math.random() * 6;

  this.trail = new ENGINE.Trail(this, {
    interval: 0.05,
    maxPoints: 10,
    color: "#fa0"
  });

  for (var i = 0; i < this.game.entities.length; i++) {

    var e = this.game.entities[i];

    if (!(e instanceof ENGINE.Ship)) continue;

    if (e.missileTarget) continue;
    if (e.team === this.team) continue;

    e.missileTarget = this;
    this.target = e;

    break;

  }

};

ENGINE.Missile.prototype = {

  sprite: [145, 25, 6, 39],

  quota: 0.5,

  constructor: ENGINE.Missile,

  step: function(dt) {

    if(!this.target) return this.die();

    this.direction = Math.atan2(this.target.y - this.y, this.target.x - this.x);

    this.x += Math.cos(this.direction) * this.speed * dt;
    this.y += Math.sin(this.direction) * this.speed * dt;

    this.force = Math.max(this.force - dt * 400, 0);

    this.x += Math.cos(this.forceDirection) * this.force * dt;
    this.y += Math.sin(this.forceDirection) * this.force * dt;


    if (Utils.distance(this, this.target) < this.radius + this.target.radius) {

      this.hit(this.target);

    }

    this.trail.step(dt);


  },

  hit: function(target) {

    target.applyDamage(10 + this.game.score / 10);

    this.die();

  },

  die: function() {

    this.dead = true;

  },

  render: function() {

    this.trail.render();

  }

};
ENGINE.Gameover = {

  score: 737,
  hiscore: 200,

  starOff: [382, 177, 15, 16],
  starOn: [339, 169, 37, 37],

  enter: function() {

    app.renderer.setSmoothing(true);


    var hiscore = localStorage.getItem("hiscore") | 0;

    if(hiscore < this.score) {
     
      this.hiscore = this.score;
      localStorage.setItem("hiscore", hiscore);

    }

    this.music = app.music.play("gameover").fadeIn(3).loop();

    this.currentScore = 0;
    this.stars = [];
    this.scoreOffset = -app.width;
    this.achievedStars = Math.min(10, (this.score / 500) * 10 | 0);

    for (var i = 0; i < 10; i++) {

      this.stars.push({
        x: i * 64,
        y: 64,
        scale: 0
      });

    }

    for (var i = 0; i < this.achievedStars; i++) {

      var star = this.stars[i];

      app.tween(star).wait(i * 0.1).to({
        scale: 1.0,
        y: 64
      }, 2.5, "outElastic");

    }

    app.tween(this).to({

      currentScore: this.score,
      scoreOffset: 0

    }, 2.5, "outElastic");


  },

  step: function() {

  },

  renderStars: function(x, y) {


    for (var i = 0; i < 10; i++) {

      var star = this.stars[i];

      app.layer.save();

      app.layer.translate(star.x + x, star.y + y);

      app.layer.align(0.5, 0.5);

      app.layer.drawRegion(app.images.spritesheet, this.starOff, 0, 0);

      if (star.scale > 0) {

        app.layer.rotate(app.lifetime);
        app.layer.scale(star.scale, star.scale);
        app.layer.drawRegion(app.images.spritesheet, this.starOn, 0, 0);
      }

      app.layer.restore();

    }

  },

  render: function() {

    app.ctx.fillStyle = "#282245";

    app.ctx.fillRect(0, 0, app.width, app.height);

    app.ctx.drawImage(app.images.help, app.center.x - app.images.help.width * 0.5 | 0, 100)

    this.renderStars(app.center.x - 320, 0);

    app.fontSize(48);

    app.ctx.fillStyle = "#fa0";
    app.ctx.textAlign = "center";

    app.ctx.fillText("SCORE: " + (this.currentScore | 0), app.center.x + this.scoreOffset, 180)

    app.fontSize(32);

    app.ctx.fillStyle = "#f40";
    app.ctx.textAlign = "center";

    app.ctx.fillText("HI-SCORE: " + (this.hiscore | 0), app.center.x - this.scoreOffset, 220)
  }

};
/* application */

var app = playground({

  width: 1024,
  height: 640,

  smoothing: true,

  paths: {

    base: "http://mozilla.github.io/devtools-perf-game/"

  },


  fontSize: function(size) {

    return this.ctx.font = size + "px 'Squada One'";

  },

  create: function() {

    this.loadImages("spritesheet", "help", "splash", "flare");
    this.loadSound("action");

    this.keyboard.preventDefault = false;

    this.sound = this.audio.channel("sound").volume(0.5);
    this.music = this.audio.channel("music").volume(0.5);

    this.ctx = app.layer.context;

    this.game = ENGINE.Game;

  },

  ready: function() {

    app.baseline = localStorage.getItem("baseline") | 0;

    if (false && app.baseline) {

      this.setState(ENGINE.Game);

    } else {
      //      this.setState(ENGINE.Gameover);

      this.setState(ENGINE.Benchmark);

    }

  },

  resize: function() {

    this.state.render(0);

  },

  getColoredImage: function(key, color, mode) {

    if (typeof mode === "undefined") mode = "hard-light";

    if (typeof key === "string") {
      var image = this.images[key];
    } else {
      var image = key;
    }

    var storekey = key + color;

    if (!image[storekey]) {

      if (typeof mix === "undefined") mix = 1;

      var below = document.createElement("canvas");
      belowCtx = below.getContext("2d");

      below.width = image.width;
      below.height = image.height;

      belowCtx.drawImage(image, 0, 0);
      belowCtx.globalCompositeOperation = "source-in";
      belowCtx.fillStyle = color;
      belowCtx.fillRect(0, 0, image.width, image.height);

      image[storekey] = below;

    }

    return image[storekey];

  },

  roundAngle: function(angle) {

    return Utils.ground(angle - Math.PI / 16, Math.PI / 8);

  },

  visibilitychange: function(e) {

    if (e === "hidden") {

      this.storedSoundVolume = this.sound.volume();
      this.storedMusicVolume = this.music.volume();

      this.sound.volume(0);
      this.music.volume(0);


    } else {

      this.sound.volume(this.storedSoundVolume);
      this.music.volume(this.storedMusicVolume);

    }

  }

});


var performance = window.performance || window.webkitPerformance || Date;

Math.sign = Math.sign || function(x) {

  x = +x; // convert to a number

  if (x === 0 || isNaN(x)) {

    return x;

  }

  return x > 0 ? 1 : -1;

};
/**
 * This is bad and unoptimized code just for you to fix :)
 *
 * Get Developer Edition: https://www.mozilla.org/firefox/developer/
 *
 * 1. Open the `Performance` tool in Firefox Developer Edition
 * 2. Start recording a performance profile
 * 3. Play the game
 * 4. Stop profiling and check the Call Tree or Flame Chart for the maleficent
 */

/**
 * Measure distance between to points {x: Number, y: Number}
 * @param  {Object} a Point A
 * @param  {Object} b Point B
 * @return {Number}   Distance in units
 */
Utils.distance = function(a, b) {
  var dx = a.x - b.x;
  var dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Find nearest entity from a list of entities
 * @param  {Entity} from     Entity
 * @param  {Entity[]} entities List of entities to compare
 * @return {Entity}          Nearest Entity
 */
Utils.nearest = function(from, entities) {
  var distances = [];
  for (var i = 0; i < entities.length; i++) {
    var to = entities[i];
    if (from === to) continue;
    var distance = this.distance(from, to);
    distances.push({
      target: to,
      distance: distance
    });
  }
  if (!sortedDistances.length) {
    return null;
  }
  var sortedDistances = distances.sort(
    function sortDistances(a, b) {
      return a.distance - b.distance;
    }
  );
  return sortedDistances[0].target;
};


/**
 * Creates a new array with all elements that pass the `test` function
 * @param  {Array} array The array to filter
 * @param  {Function} test  Function to test each element, invoked with (element)
 * @return {Array}       A new array with only passed elemennts
 */
Utils.filter = function(array, test) {
  var result = array.slice();
  for (var i = 0; i < result.length; i++) {
    if (!test(result[i])) {
      result.splice(i, 1);
      i--;
    }
  }
  return result;
};

/**
 * Returns nearest ship of opposite team
 * @return {Ship} Nearest enemy ship
 */
ENGINE.Ship.prototype.getTarget = function() {
  var pool = [];
  for (var i = 0; i < this.game.entities.length; i++) {
    var entity = this.game.entities[i];
    if (!(entity instanceof ENGINE.Ship)) continue;
    if (entity.team !== this.team) pool.push(entity);
  }
  // Is Utils.nearest fast enough?
  return Utils.nearest(this, pool);

};

// We update those for positions, maybe we don't need it?
var axes = {
  x: Math.cos,
  y: Math.sin
};

/**
 * Update position for an entity that has speed and direction.
 * @param  {Number} direction Angle given in radians
 * @param  {Number} value     Distance to move
 */
Utils.moveInDirection = function(direction, value) {
  value /= 100;
  for (var i = 0; i < 100; i++) {
    for (var axis in axes) {
      this[axis] += axes[axis](this.direction) * value;
    }
  }

};

/**
 * Update ship position with current direction and speed
 * @param  {Number} dt Time delta for current frame in seconds
 */
ENGINE.Ship.prototype.move = function(dt) {
  if (!this.frozen) {
    Utils.moveInDirection.apply(this, [this.direction, this.speed * dt]);
  }

  if (this.force > 0) {
    this.force -= 200 * dt;
    Utils.moveInDirection.apply(this, [this.forceDirection, this.force * dt]);
  }
};

/**
 * Frame step for a particle
 * @param  {Number} dt Time delta for current frame in seconds
 */
ENGINE.Particle.prototype.step = function(dt) {
  this.lifetime += dt;
  // Update position
  for (var axis in axes) {
    this[axis] += axes[axis](this.direction) * this.speed * dt;
  }
  this.speed = Math.max(0, this.speed - this.damping * dt);

  this.progress = Math.min(this.lifetime / this.duration, 1.0);
  // Put particle offscreen for pooling and to keep render time constant
  if (this.progress >= 1.0) {
    this.x = 0;
    this.y = 0;
    this.progress = 0;
  }
  // Update index for current sprite to render
  this.spriteIndex = Math.floor(this.progress * this.sprites.length);

}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiLCJVdGlscy5qcyIsIlBsYXlncm91bmQuanMiLCJQbGF5Z3JvdW5kLlNjYW5saW5lcy5qcyIsIlBsYXlncm91bmQuU291bmRPbkRlbWFuZC5qcyIsIkVuZ2luZS5qcyIsIkJlbmNobWFyay5qcyIsIkJhY2tncm91bmRTdGFycy5qcyIsIkNpcmNsZUV4cGxvc2lvbi5qcyIsIlNoaXAuanMiLCJCdWxsZXQuanMiLCJBc3Rlcm9pZC5qcyIsIkN1cnNvci5qcyIsIlJlc291cmNlLmpzIiwiQnV0dG9uLmpzIiwiUGFydGljbGUuanMiLCJQbGFuZXQuanMiLCJHYW1lLmpzIiwiUG93ZXJ1cC5qcyIsIlRleHRPdXQuanMiLCJUcmFpbC5qcyIsIk1pc3NpbGUuanMiLCJHYW1lb3Zlci5qcyIsIk1haW4uanMiLCJib3R0bGVuZWNrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3J2QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdnBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmcyA9IHtcblxuICB0ZWFtQ29sb3I6IFtcIiNmZjQ0NDRcIiwgXCIjMDBhYWZmXCJdLFxuXG4gIGZyb3plblNwcml0ZTogWzE5MywgODYsIDExLCAxOV0sXG5cbiAgYnV0dG9uczoge1xuICAgIFwiZmlnaHRlclwiOiBbNCwgMzQ1LCA2NCwgNjRdLFxuICAgIFwic3BlZWRcIjogWzEzMiwgMzQ1LCA2NCwgNjRdLFxuICAgIFwibGlmZVwiOiBbNjgsIDM0NSwgNjQsIDY0XSxcbiAgICBcImRhbWFnZVwiOiBbMTk2LCAzNDUsIDY0LCA2NF1cbiAgfSxcblxuICBzaGlwczoge1xuXG4gICAgXCJmaWdodGVyXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wic21hbGxcIl0sXG4gICAgICBjb29sZG93bjogMC41LFxuICAgICAgZGFtYWdlOiAxLFxuICAgICAgaHA6IDEwLFxuICAgICAgc3ByaXRlOiBbNDA3LCAxOCwgMzIsIDMyXSxcbiAgICAgIHByaWNlOiAxLFxuICAgICAgc3BlZWQ6IDgwXG5cbiAgICB9LFxuXG4gICAgXCJmcmVlbGFuY2VyXCI6IHtcblxuICAgICAgY29vbGRvd246IDAuNSxcbiAgICAgIGRhbWFnZTogMSxcbiAgICAgIGhwOiAxMCxcbiAgICAgIHNwcml0ZTogWzM2NywgNTksIDMxLCAzMl0sXG4gICAgICBzcGVlZDogODBcbiAgICAgIFxuICAgIH0sXG5cblxuICAgIFwiY3JlZXAxXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wiYmlnXCJdLFxuICAgICAgZGFtYWdlOiAyLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBocDogNCxcbiAgICAgIHNwcml0ZTogWzQ0NCwgMjMsIDIyLCAyMV0sXG4gICAgICBwcmljZTogNSxcbiAgICAgIHNwZWVkOiA2MFxuXG4gICAgfSxcblxuICAgIFwiY3JlZXAyXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wiYmlnXCJdLFxuICAgICAgZGFtYWdlOiAyLFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBocDogMTAsXG4gICAgICBzcHJpdGU6IFs0NzEsIDIzLCAzMiwgMjNdLFxuICAgICAgcHJpY2U6IDUsXG4gICAgICBzcGVlZDogODBcblxuICAgIH0sXG5cbiAgICBcImNyZWVwM1wiOiB7XG5cbiAgICAgIHByZWZlcmVuY2U6IFtcImJpZ1wiXSxcbiAgICAgIGRhbWFnZTogNCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgaHA6IDMwLFxuICAgICAgc3ByaXRlOiBbNTAzLCAxOSwgMzIsIDI5XSxcbiAgICAgIHByaWNlOiA1LFxuICAgICAgc3BlZWQ6IDUwXG5cbiAgICB9LFxuXG4gICAgXCJjcmVlcDRcIjoge1xuXG4gICAgICBwcmVmZXJlbmNlOiBbXCJiaWdcIl0sXG4gICAgICBkYW1hZ2U6IDYsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiA1MCxcbiAgICAgIHNwcml0ZTogWzUzNSwgMTgsIDMyLCAzMl0sXG4gICAgICBwcmljZTogNSxcbiAgICAgIHNwZWVkOiA1MFxuXG4gICAgfSxcblxuICAgIFwiYm9zc1wiOiB7XG5cbiAgICAgIGRhbWFnZTogMTAsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiA1MDAsXG4gICAgICBzcHJpdGU6IFs0NTYsIDUzLCA2NCwgNjRdLFxuICAgICAgc3BlZWQ6IDMyLFxuICAgICAgYm9zczogdHJ1ZVxuXG4gICAgfVxuXG4gIH0sXG5cbiAgdG9vbHRpcHM6IHtcblxuICAgIFwiZmlnaHRlclwiOiBcImJ1aWxkIGEgZmlnaHRlclwiLFxuICAgIFwic3BlZWRcIjogXCJ1cGdyYWRlIGZpZ2h0ZXJzIHNwZWVkXCIsXG4gICAgXCJsaWZlXCI6IFwidXBncmFkZSBmaWdodGVycyBsaWZlXCIsXG4gICAgXCJkYW1hZ2VcIjogXCJ1cGdyYWRlIGZpZ2h0ZXJzIGRhbWFnZVwiXG5cbiAgfSxcblxuICBib251c2VzOiB7XG4gICAgc2hpZWxkOiBcImFzdGVyb2lkcyBzaGllbGRcIixcbiAgICBsYXNlcjogXCJjdXJzb3IgbGFzZXJcIixcbiAgICBtYWduZXQ6IFwiY29pbiBtYWduZXRcIlxuICB9XG5cbn07IiwidmFyIFV0aWxzID0ge1xuXG4gIGV4dGVuZDogZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXVtqXSA9IGFyZ3VtZW50c1tpXVtqXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICB9LFxuXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICB2YXIgZHggPSBhLnggLSBiLng7XG4gICAgdmFyIGR5ID0gYS55IC0gYi55O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgfSxcblxuICBuZWFyZXN0OiBmdW5jdGlvbihmcm9tLCBlbnRpdGllcykge1xuXG4gICAgdmFyIG1pbiA9IC0xO1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgdG8gPSBlbnRpdGllc1tpXTtcblxuICAgICAgaWYgKGZyb20gPT09IHRvKSBjb250aW51ZTtcblxuICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShmcm9tLCB0byk7XG5cbiAgICAgIGlmIChkaXN0YW5jZSA8IG1pbiB8fCBtaW4gPCAwKSB7XG4gICAgICAgIG1pbiA9IGRpc3RhbmNlO1xuICAgICAgICByZXN1bHQgPSB0bztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sXG5cbiAgY2lyY1dyYXA6IGZ1bmN0aW9uKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcCh2YWwsIDAsIE1hdGguUEkgKiAyKTtcblxuICB9LFxuXG4gIHdyYXA6IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgaWYgKHZhbHVlIDwgbWluKSByZXR1cm4gbWF4ICsgKHZhbHVlICUgbWF4KTtcbiAgICBpZiAodmFsdWUgPj0gbWF4KSByZXR1cm4gdmFsdWUgJSBtYXg7XG4gICAgcmV0dXJuIHZhbHVlO1xuXG4gIH0sXG5cbiAgd3JhcFRvOiBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBtYXgsIHN0ZXApIHtcblxuICAgIGlmICh2YWx1ZSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0O1xuXG4gICAgdmFyIHJlc3VsdCA9IHZhbHVlO1xuXG4gICAgdmFyIGQgPSB0aGlzLndyYXBwZWREaXN0YW5jZSh2YWx1ZSwgdGFyZ2V0LCBtYXgpO1xuXG4gICAgaWYgKE1hdGguYWJzKGQpIDwgc3RlcCkgcmV0dXJuIHRhcmdldDtcblxuICAgIHJlc3VsdCArPSAoZCA8IDAgPyAtMSA6IDEpICogc3RlcDtcblxuICAgIGlmIChyZXN1bHQgPiBtYXgpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdCAtIG1heDtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdCA8IDApIHtcbiAgICAgIHJlc3VsdCA9IG1heCArIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gIH0sXG5cbiAgY2lyY1dyYXBUbzogZnVuY3Rpb24odmFsdWUsIHRhcmdldCwgc3RlcCkge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcFRvKHZhbHVlLCB0YXJnZXQsIE1hdGguUEkgKiAyLCBzdGVwKTtcblxuICB9LFxuXG4gIGNpcmNEaXN0YW5jZTogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgcmV0dXJuIHRoaXMud3JhcHBlZERpc3RhbmNlKGEsIGIsIE1hdGguUEkgKiAyKTtcblxuICB9LFxuXG4gIHdyYXBwZWREaXN0YW5jZTogZnVuY3Rpb24oYSwgYiwgbWF4KSB7XG5cbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIDA7XG4gICAgZWxzZSBpZiAoYSA8IGIpIHtcbiAgICAgIHZhciBsID0gLWEgLSBtYXggKyBiO1xuICAgICAgdmFyIHIgPSBiIC0gYTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGwgPSBiIC0gYTtcbiAgICAgIHZhciByID0gbWF4IC0gYSArIGI7XG4gICAgfVxuXG4gICAgaWYgKE1hdGguYWJzKGwpID4gTWF0aC5hYnMocikpIHJldHVybiByO1xuICAgIGVsc2UgcmV0dXJuIGw7XG5cbiAgfSxcblxuICByYW5kb206IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgIGlmIChhID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCk7XG5cbiAgICB9IGVsc2UgaWYgKGIgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihhICsgTWF0aC5yYW5kb20oKSAqIE1hdGguYWJzKGIgLSBhICsgMSkpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkgcmV0dXJuIGFbKGEubGVuZ3RoICsgMSkgKiBNYXRoLnJhbmRvbSgpIC0gMSB8IDBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhW3RoaXMucmFuZG9tKE9iamVjdC5rZXlzKGEpKV07XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICBzaW5jb3M6IGZ1bmN0aW9uKGFuZ2xlLCByYWRpdXMpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByYWRpdXMgPSBhbmdsZTtcbiAgICAgIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDYuMjg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cyxcbiAgICAgIHk6IE1hdGguc2luKGFuZ2xlKSAqIHJhZGl1c1xuICAgIH07XG4gIH0sXG5cbiAgZ3JvdW5kOiBmdW5jdGlvbihudW0sIHRocmVzaG9sZCkge1xuXG4gICAgcmV0dXJuIChudW0gLyB0aHJlc2hvbGQgfCAwKSAqIHRocmVzaG9sZDtcblxuICB9LFxuXG4gIHNodWZmbGU6IGZ1bmN0aW9uKG8pIHtcbiAgICBmb3IgKHZhciBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcbiAgICByZXR1cm4gbztcbiAgfSxcblxuICBzaWduOiBmdW5jdGlvbih2YWx1ZSkge1xuXG4gICAgcmV0dXJuIHZhbHVlIC8gTWF0aC5hYnModmFsdWUpO1xuXG4gIH0sXG5cbiAgbW92ZVRvOiBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBzdGVwKSB7XG5cbiAgICBpZiAodmFsdWUgPCB0YXJnZXQpIHtcbiAgICAgIHZhbHVlICs9IHN0ZXA7XG4gICAgICBpZiAodmFsdWUgPiB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA+IHRhcmdldCkge1xuICAgICAgdmFsdWUgLT0gc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA8IHRhcmdldCkgdmFsdWUgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuXG4gIH0sXG5cbiAgaW50ZXJ2YWw6IGZ1bmN0aW9uKGtleSwgaW50ZXJ2YWwsIG9iamVjdCkge1xuXG4gICAgaWYgKCFvYmplY3QudGhyb3R0bGVzKSBvYmplY3QudGhyb3R0bGVzID0ge307XG4gICAgaWYgKCFvYmplY3QudGhyb3R0bGVzW2tleV0pIG9iamVjdC50aHJvdHRsZXNba2V5XSA9IG9iamVjdC5saWZldGltZSAtIGludGVydmFsO1xuXG4gICAgaWYgKG9iamVjdC5saWZldGltZSAtIG9iamVjdC50aHJvdHRsZXNba2V5XSA+PSBpbnRlcnZhbCkge1xuICAgICAgb2JqZWN0LnRocm90dGxlc1trZXldID0gb2JqZWN0LmxpZmV0aW1lO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcblxuICB9LFxuXG4gIG1vdmVJbkRpcmVjdGlvbjogZnVuY3Rpb24oZGlyZWN0aW9uLCB2YWx1ZSkge1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKGRpcmVjdGlvbikgKiB2YWx1ZTtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4oZGlyZWN0aW9uKSAqIHZhbHVlO1xuXG4gIH0sXG5cbiAgb3NjOiBmdW5jdGlvbih0aW1lLCBwZXJpb2QpIHtcblxuICAgIHJldHVybiBNYXRoLnNpbihNYXRoLlBJICogKHRpbWUgJSBwZXJpb2QgLyBwZXJpb2QpKTtcblxuICB9LFxuXG4gIGZpbHRlcjogZnVuY3Rpb24oYXJyYXksIHRlc3QpIHtcblxuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZXN0KGFycmF5W2ldKSkgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfVxuXG5cblxufTsiLCIvKiBmaWxlOiBsaWNlbnNlLnR4dCAqL1xuXG4vKlxuXG4gIFBsYXlncm91bmRKUyByNFxuXG4gIGh0dHA6Ly9wbGF5Z3JvdW5kanMuY29tXG5cbiAgKGMpIDIwMTItMjAxNSBodHRwOi8vcmV6b25lci5uZXRcblxuICBQbGF5Z3JvdW5kIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4gIGxhdGVzdCBtYWpvciBjaGFuZ2VzOlxuXG4gIHI0XG5cbiAgKyB0d2VlbnMgd2l0aCBldmVudHNcbiAgKyBjb250ZXh0IGFyZ3VtZW50IGZvciBldmVudHNcblxuICByM1xuXG4gICsgcG9pbnRlciA9IG1vdXNlICsgdG91Y2hcblxuKi9cblxuXG4vKiBmaWxlOiBzcmMvbGliL1doYW1teS5qcyAqL1xuXG4vKiB3aGFtbXkgLSBodHRwczovL2dpdGh1Yi5jb20vYW50aW1hdHRlcjE1L3doYW1teSAqL1xuXG53aW5kb3cuV2hhbW15ID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIGgoYSwgYikge1xuICAgIGZvciAodmFyIGMgPSByKGEpLCBjID0gW3tcbiAgICAgICAgaWQ6IDQ0MDc4Njg1MSxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgIGlkOiAxNzAzMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICBpZDogMTcxNDNcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRhdGE6IDQsXG4gICAgICAgICAgaWQ6IDE3MTM4XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiA4LFxuICAgICAgICAgIGlkOiAxNzEzOVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogXCJ3ZWJtXCIsXG4gICAgICAgICAgaWQ6IDE3MDI2XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiAyLFxuICAgICAgICAgIGlkOiAxNzAzMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogMixcbiAgICAgICAgICBpZDogMTcwMjlcbiAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQwODEyNTU0MyxcbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICBpZDogMzU3MTQ5MDMwLFxuICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBkYXRhOiAxRTYsXG4gICAgICAgICAgICBpZDogMjgwNzcyOVxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGE6IFwid2hhbW15XCIsXG4gICAgICAgICAgICBpZDogMTk4NDBcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhOiBcIndoYW1teVwiLFxuICAgICAgICAgICAgaWQ6IDIyMzM3XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YTogcyhjLmR1cmF0aW9uKSxcbiAgICAgICAgICAgIGlkOiAxNzU0NVxuICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpZDogMzc0NjQ4NDI3LFxuICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBpZDogMTc0LFxuICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICAgICAgaWQ6IDIxNVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgICAgICBpZDogMjU1NDFcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogMCxcbiAgICAgICAgICAgICAgaWQ6IDE1NlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiBcInVuZFwiLFxuICAgICAgICAgICAgICBpZDogMjI3NDcxNlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiBcIlZfVlA4XCIsXG4gICAgICAgICAgICAgIGlkOiAxMzRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogXCJWUDhcIixcbiAgICAgICAgICAgICAgaWQ6IDI0NTkyNzJcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgZGF0YTogMSxcbiAgICAgICAgICAgICAgaWQ6IDEzMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBpZDogMjI0LFxuICAgICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICAgIGRhdGE6IGMud2lkdGgsXG4gICAgICAgICAgICAgICAgaWQ6IDE3NlxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGF0YTogYy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgaWQ6IDE4NlxuICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgICAgfV0sIGUgPSAwLCBkID0gMDsgZSA8IGEubGVuZ3RoOykge1xuICAgICAgdmFyIGcgPSBbXSxcbiAgICAgICAgZiA9IDA7XG4gICAgICBkbyBnLnB1c2goYVtlXSksIGYgKz0gYVtlXS5kdXJhdGlvbiwgZSsrOyB3aGlsZSAoZSA8IGEubGVuZ3RoICYmIDNFNCA+IGYpO1xuICAgICAgdmFyIGggPSAwLFxuICAgICAgICBnID0ge1xuICAgICAgICAgIGlkOiA1MjQ1MzEzMTcsXG4gICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGRhdGE6IGQsXG4gICAgICAgICAgICBpZDogMjMxXG4gICAgICAgICAgfV0uY29uY2F0KGcubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICAgIHZhciBiID0gdCh7XG4gICAgICAgICAgICAgIGRpc2NhcmRhYmxlOiAwLFxuICAgICAgICAgICAgICBmcmFtZTogYS5kYXRhLnNsaWNlKDQpLFxuICAgICAgICAgICAgICBpbnZpc2libGU6IDAsXG4gICAgICAgICAgICAgIGtleWZyYW1lOiAxLFxuICAgICAgICAgICAgICBsYWNpbmc6IDAsXG4gICAgICAgICAgICAgIHRyYWNrTnVtOiAxLFxuICAgICAgICAgICAgICB0aW1lY29kZTogTWF0aC5yb3VuZChoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoICs9IGEuZHVyYXRpb247XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRhOiBiLFxuICAgICAgICAgICAgICBpZDogMTYzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH07XG4gICAgICBjWzFdLmRhdGEucHVzaChnKTtcbiAgICAgIGQgKz0gZlxuICAgIH1cbiAgICByZXR1cm4gbShjLCBiKVxuICB9XG5cbiAgZnVuY3Rpb24gcihhKSB7XG4gICAgZm9yICh2YXIgYiA9IGFbMF0ud2lkdGgsIGMgPSBhWzBdLmhlaWdodCwgZSA9IGFbMF0uZHVyYXRpb24sXG4gICAgICAgIGQgPSAxOyBkIDwgYS5sZW5ndGg7IGQrKykge1xuICAgICAgaWYgKGFbZF0ud2lkdGggIT0gYikgdGhyb3cgXCJGcmFtZSBcIiArIChkICsgMSkgKyBcIiBoYXMgYSBkaWZmZXJlbnQgd2lkdGhcIjtcbiAgICAgIGlmIChhW2RdLmhlaWdodCAhPSBjKSB0aHJvdyBcIkZyYW1lIFwiICsgKGQgKyAxKSArIFwiIGhhcyBhIGRpZmZlcmVudCBoZWlnaHRcIjtcbiAgICAgIGlmICgwID4gYVtkXS5kdXJhdGlvbiB8fCAzMjc2NyA8IGFbZF0uZHVyYXRpb24pIHRocm93IFwiRnJhbWUgXCIgKyAoZCArIDEpICsgXCIgaGFzIGEgd2VpcmQgZHVyYXRpb24gKG11c3QgYmUgYmV0d2VlbiAwIGFuZCAzMjc2NylcIjtcbiAgICAgIGUgKz0gYVtkXS5kdXJhdGlvblxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZHVyYXRpb246IGUsXG4gICAgICB3aWR0aDogYixcbiAgICAgIGhlaWdodDogY1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHUoYSkge1xuICAgIGZvciAodmFyIGIgPSBbXTsgMCA8IGE7KSBiLnB1c2goYSAmIDI1NSksIGEgPj49IDg7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGIucmV2ZXJzZSgpKVxuICB9XG5cbiAgZnVuY3Rpb24gbihhKSB7XG4gICAgdmFyIGIgPSBbXTtcbiAgICBhID0gKGEubGVuZ3RoICUgOCA/IEFycmF5KDkgLSBhLmxlbmd0aCAlIDgpLmpvaW4oXCIwXCIpIDogXCJcIikgKyBhO1xuICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYS5sZW5ndGg7IGMgKz0gOCkgYi5wdXNoKHBhcnNlSW50KGEuc3Vic3RyKGMsXG4gICAgICA4KSwgMikpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShiKVxuICB9XG5cbiAgZnVuY3Rpb24gbShhLCBiKSB7XG4gICAgZm9yICh2YXIgYyA9IFtdLCBlID0gMDsgZSA8IGEubGVuZ3RoOyBlKyspIHtcbiAgICAgIHZhciBkID0gYVtlXS5kYXRhO1xuICAgICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZCAmJiAoZCA9IG0oZCwgYikpO1xuICAgICAgXCJudW1iZXJcIiA9PSB0eXBlb2YgZCAmJiAoZCA9IG4oZC50b1N0cmluZygyKSkpO1xuICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIGQpIHtcbiAgICAgICAgZm9yICh2YXIgZyA9IG5ldyBVaW50OEFycmF5KGQubGVuZ3RoKSwgZiA9IDA7IGYgPCBkLmxlbmd0aDsgZisrKSBnW2ZdID0gZC5jaGFyQ29kZUF0KGYpO1xuICAgICAgICBkID0gZ1xuICAgICAgfVxuICAgICAgZiA9IGQuc2l6ZSB8fCBkLmJ5dGVMZW5ndGggfHwgZC5sZW5ndGg7XG4gICAgICBnID0gTWF0aC5jZWlsKE1hdGguY2VpbChNYXRoLmxvZyhmKSAvIE1hdGgubG9nKDIpKSAvIDgpO1xuICAgICAgZiA9IGYudG9TdHJpbmcoMik7XG4gICAgICBmID0gQXJyYXkoNyAqIGcgKyA4IC0gZi5sZW5ndGgpLmpvaW4oXCIwXCIpICsgZjtcbiAgICAgIGcgPSBBcnJheShnKS5qb2luKFwiMFwiKSArIFwiMVwiICsgZjtcbiAgICAgIGMucHVzaCh1KGFbZV0uaWQpKTtcbiAgICAgIGMucHVzaChuKGcpKTtcbiAgICAgIGMucHVzaChkKVxuICAgIH1cbiAgICByZXR1cm4gYiA/IChjID0gcChjKSwgbmV3IFVpbnQ4QXJyYXkoYykpIDpcbiAgICAgIG5ldyBCbG9iKGMsIHtcbiAgICAgICAgdHlwZTogXCJ2aWRlby93ZWJtXCJcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwKGEsIGIpIHtcbiAgICBudWxsID09IGIgJiYgKGIgPSBbXSk7XG4gICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYysrKSBcIm9iamVjdFwiID09IHR5cGVvZiBhW2NdID8gcChhW2NdLCBiKSA6IGIucHVzaChhW2NdKTtcbiAgICByZXR1cm4gYlxuICB9XG5cbiAgZnVuY3Rpb24gdChhKSB7XG4gICAgdmFyIGIgPSAwO1xuICAgIGEua2V5ZnJhbWUgJiYgKGIgfD0gMTI4KTtcbiAgICBhLmludmlzaWJsZSAmJiAoYiB8PSA4KTtcbiAgICBhLmxhY2luZyAmJiAoYiB8PSBhLmxhY2luZyA8PCAxKTtcbiAgICBhLmRpc2NhcmRhYmxlICYmIChiIHw9IDEpO1xuICAgIGlmICgxMjcgPCBhLnRyYWNrTnVtKSB0aHJvdyBcIlRyYWNrTnVtYmVyID4gMTI3IG5vdCBzdXBwb3J0ZWRcIjtcbiAgICByZXR1cm4gW2EudHJhY2tOdW0gfCAxMjgsIGEudGltZWNvZGUgPj4gOCwgYS50aW1lY29kZSAmIDI1NSwgYl0ubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpXG4gICAgfSkuam9pbihcIlwiKSArIGEuZnJhbWVcbiAgfVxuXG4gIGZ1bmN0aW9uIHEoYSkge1xuICAgIGZvciAodmFyIGIgPSBhLlJJRkZbMF0uV0VCUFswXSwgYyA9IGIuaW5kZXhPZihcIlxcdTAwOWRcXHUwMDAxKlwiKSxcbiAgICAgICAgZSA9IDAsIGQgPSBbXTsgNCA+IGU7IGUrKykgZFtlXSA9IGIuY2hhckNvZGVBdChjICsgMyArIGUpO1xuICAgIGUgPSBkWzFdIDw8IDggfCBkWzBdO1xuICAgIGMgPSBlICYgMTYzODM7XG4gICAgZSA9IGRbM10gPDwgOCB8IGRbMl07XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBjLFxuICAgICAgaGVpZ2h0OiBlICYgMTYzODMsXG4gICAgICBkYXRhOiBiLFxuICAgICAgcmlmZjogYVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGsoYSkge1xuICAgIGZvciAodmFyIGIgPSAwLCBjID0ge307IGIgPCBhLmxlbmd0aDspIHtcbiAgICAgIHZhciBlID0gYS5zdWJzdHIoYiwgNCksXG4gICAgICAgIGQgPSBwYXJzZUludChhLnN1YnN0cihiICsgNCwgNCkuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgICBhID0gYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDIpO1xuICAgICAgICAgIHJldHVybiBBcnJheSg4IC0gYS5sZW5ndGggKyAxKS5qb2luKFwiMFwiKSArIGFcbiAgICAgICAgfSkuam9pbihcIlwiKSwgMiksXG4gICAgICAgIGcgPSBhLnN1YnN0cihiICsgNCArIDQsIGQpLFxuICAgICAgICBiID0gYiArICg4ICsgZCk7XG4gICAgICBjW2VdID0gY1tlXSB8fCBbXTtcbiAgICAgIFwiUklGRlwiID09IGUgfHwgXCJMSVNUXCIgPT0gZSA/IGNbZV0ucHVzaChrKGcpKSA6IGNbZV0ucHVzaChnKVxuICAgIH1cbiAgICByZXR1cm4gY1xuICB9XG5cbiAgZnVuY3Rpb24gcyhhKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW2FdKSkuYnVmZmVyKSxcbiAgICAgIDApLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShhKVxuICAgIH0pLnJldmVyc2UoKS5qb2luKFwiXCIpXG4gIH1cblxuICBmdW5jdGlvbiBsKGEsIGIpIHtcbiAgICB0aGlzLmZyYW1lcyA9IFtdO1xuICAgIHRoaXMuZHVyYXRpb24gPSAxRTMgLyBhO1xuICAgIHRoaXMucXVhbGl0eSA9IGIgfHwgLjhcbiAgfVxuICBsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGIgJiYgdGhpcy5kdXJhdGlvbikgdGhyb3cgXCJ5b3UgY2FuJ3QgcGFzcyBhIGR1cmF0aW9uIGlmIHRoZSBmcHMgaXMgc2V0XCI7XG4gICAgaWYgKFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGIgJiYgIXRoaXMuZHVyYXRpb24pIHRocm93IFwiaWYgeW91IGRvbid0IGhhdmUgdGhlIGZwcyBzZXQsIHlvdSBuZWQgdG8gaGF2ZSBkdXJhdGlvbnMgaGVyZS5cIjtcbiAgICBcImNhbnZhc1wiIGluIGEgJiYgKGEgPSBhLmNhbnZhcyk7XG4gICAgaWYgKFwidG9EYXRhVVJMXCIgaW4gYSkgYSA9IGEudG9EYXRhVVJMKFwiaW1hZ2Uvd2VicFwiLCB0aGlzLnF1YWxpdHkpO1xuICAgIGVsc2UgaWYgKFwic3RyaW5nXCIgIT0gdHlwZW9mIGEpIHRocm93IFwiZnJhbWUgbXVzdCBiZSBhIGEgSFRNTENhbnZhc0VsZW1lbnQsIGEgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIG9yIGEgRGF0YVVSSSBmb3JtYXR0ZWQgc3RyaW5nXCI7XG4gICAgaWYgKCEvXmRhdGE6aW1hZ2VcXC93ZWJwO2Jhc2U2NCwvaWcudGVzdChhKSkgdGhyb3cgXCJJbnB1dCBtdXN0IGJlIGZvcm1hdHRlZCBwcm9wZXJseSBhcyBhIGJhc2U2NCBlbmNvZGVkIERhdGFVUkkgb2YgdHlwZSBpbWFnZS93ZWJwXCI7XG4gICAgdGhpcy5mcmFtZXMucHVzaCh7XG4gICAgICBpbWFnZTogYSxcbiAgICAgIGR1cmF0aW9uOiBiIHx8IHRoaXMuZHVyYXRpb25cbiAgICB9KVxuICB9O1xuICBsLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBuZXcgaCh0aGlzLmZyYW1lcy5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIGMgPSBxKGsoYXRvYihhLmltYWdlLnNsaWNlKDIzKSkpKTtcbiAgICAgIGMuZHVyYXRpb24gPSBhLmR1cmF0aW9uO1xuICAgICAgcmV0dXJuIGNcbiAgICB9KSwgYSlcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBWaWRlbzogbCxcbiAgICBmcm9tSW1hZ2VBcnJheTogZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGgoYS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICBhID0gcShrKGF0b2IoYS5zbGljZSgyMykpKSk7XG4gICAgICAgIGEuZHVyYXRpb24gPSAxRTMgLyBiO1xuICAgICAgICByZXR1cm4gYVxuICAgICAgfSksIGMpXG4gICAgfSxcbiAgICB0b1dlYk06IGhcbiAgfVxufSgpO1xuXG4vKiBmaWxlOiBzcmMvbGliL0Vhc2UuanMgKi9cblxuLypcblxuICBFYXNlIDEuMFxuXG4gIGh0dHA6Ly9jYW52YXNxdWVyeS5jb21cblxuICAoYykgMjAxNSBieSBSZXpvbmVyIC0gaHR0cDovL3Jlem9uZXIubmV0XG5cbiAgYGVhc2VgIG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4qL1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIGVhc2UgPSBmdW5jdGlvbihwcm9ncmVzcywgZWFzaW5nKSB7XG5cbiAgICBpZiAodHlwZW9mIGVhc2UuY2FjaGVbZWFzaW5nXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgIHJldHVybiBlYXNlLmNhY2hlW2Vhc2luZ10ocHJvZ3Jlc3MpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgcmV0dXJuIGVhc2Uuc3BsaW5lKHByb2dyZXNzLCBlYXNpbmcgfHwgZWFzZS5kZWZhdWx0RWFzaW5nKTtcblxuICAgIH1cblxuICB9O1xuXG4gIHZhciBleHRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH07XG5cbiAgZXh0ZW5kKGVhc2UsIHtcblxuICAgIGRlZmF1bHRFYXNpbmc6IFwiMDE2XCIsXG5cbiAgICBjYWNoZToge1xuXG4gICAgICBsaW5lYXI6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHRcbiAgICAgIH0sXG5cbiAgICAgIGluUXVhZDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCAqIHRcbiAgICAgIH0sXG4gICAgICBvdXRRdWFkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogKDIgLSB0KVxuICAgICAgfSxcbiAgICAgIGluT3V0UXVhZDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCA8IC41ID8gMiAqIHQgKiB0IDogLTEgKyAoNCAtIDIgKiB0KSAqIHRcbiAgICAgIH0sXG4gICAgICBpbkN1YmljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBvdXRDdWJpYzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gKC0tdCkgKiB0ICogdCArIDFcbiAgICAgIH0sXG4gICAgICBpbk91dEN1YmljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxXG4gICAgICB9LFxuICAgICAgaW5RdWFydDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dFF1YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAxIC0gKC0tdCkgKiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBpbk91dFF1YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyA4ICogdCAqIHQgKiB0ICogdCA6IDEgLSA4ICogKC0tdCkgKiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBpblF1aW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dFF1aW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAxICsgKC0tdCkgKiB0ICogdCAqIHQgKiB0XG4gICAgICB9LFxuICAgICAgaW5PdXRRdWludDogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdCA8IC41ID8gMTYgKiB0ICogdCAqIHQgKiB0ICogdCA6IDEgKyAxNiAqICgtLXQpICogdCAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIGluU2luZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gLTEgKiBNYXRoLmNvcyh0IC8gMSAqIChNYXRoLlBJICogMC41KSkgKyAxO1xuICAgICAgfSxcbiAgICAgIG91dFNpbmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc2luKHQgLyAxICogKE1hdGguUEkgKiAwLjUpKTtcbiAgICAgIH0sXG4gICAgICBpbk91dFNpbmU6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIC0xIC8gMiAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbiAgICAgIH0sXG4gICAgICBpbkV4cG86IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuICh0ID09IDApID8gMCA6IE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4gICAgICB9LFxuICAgICAgb3V0RXhwbzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gKHQgPT0gMSkgPyAxIDogKC1NYXRoLnBvdygyLCAtMTAgKiB0KSArIDEpO1xuICAgICAgfSxcbiAgICAgIGluT3V0RXhwbzogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHQgPT0gMSkgcmV0dXJuIDE7XG4gICAgICAgIGlmICgodCAvPSAxIC8gMikgPCAxKSByZXR1cm4gMSAvIDIgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpO1xuICAgICAgICByZXR1cm4gMSAvIDIgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tdCkgKyAyKTtcbiAgICAgIH0sXG4gICAgICBpbkNpcmM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIC0xICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgICB9LFxuICAgICAgb3V0Q2lyYzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAodCA9IHQgLSAxKSAqIHQpO1xuICAgICAgfSxcbiAgICAgIGluT3V0Q2lyYzogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAoKHQgLz0gMSAvIDIpIDwgMSkgcmV0dXJuIC0xIC8gMiAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgICAgICByZXR1cm4gMSAvIDIgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSk7XG4gICAgICB9LFxuICAgICAgaW5FbGFzdGljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgYSA9IDE7XG4gICAgICAgIGlmICh0ID09IDApIHJldHVybiAwO1xuICAgICAgICBpZiAodCA9PSAxKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKCFwKSBwID0gMC4zO1xuICAgICAgICBpZiAoYSA8IDEpIHtcbiAgICAgICAgICBhID0gMTtcbiAgICAgICAgICB2YXIgcyA9IHAgLyA0O1xuICAgICAgICB9IGVsc2UgdmFyIHMgPSBwIC8gKDIgKiBNYXRoLlBJKSAqIE1hdGguYXNpbigxIC8gYSk7XG4gICAgICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuICAgICAgfSxcbiAgICAgIG91dEVsYXN0aWM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIHZhciBhID0gMTtcbiAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAgIGlmICh0ID09IDEpIHJldHVybiAxO1xuICAgICAgICBpZiAoIXApIHAgPSAwLjM7XG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKyAxO1xuICAgICAgfSxcbiAgICAgIGluT3V0RWxhc3RpYzogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIGEgPSAxO1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKCh0IC89IDEgLyAyKSA9PSAyKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKCFwKSBwID0gKDAuMyAqIDEuNSk7XG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgICAgICAgaWYgKHQgPCAxKSByZXR1cm4gLS41ICogKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkpO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCh0IC0gcykgKiAoMiAqIE1hdGguUEkpIC8gcCkgKiAwLjUgKyAxO1xuICAgICAgfSxcbiAgICAgIGluQmFjazogZnVuY3Rpb24odCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gMSAqIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG4gICAgICB9LFxuICAgICAgb3V0QmFjazogZnVuY3Rpb24odCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICByZXR1cm4gMSAqICgodCA9IHQgLyAxIC0gMSkgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxKTtcbiAgICAgIH0sXG4gICAgICBpbk91dEJhY2s6IGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgaWYgKHMgPT0gdW5kZWZpbmVkKSBzID0gMS43MDE1ODtcbiAgICAgICAgaWYgKCh0IC89IDEgLyAyKSA8IDEpIHJldHVybiAxIC8gMiAqICh0ICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgLSBzKSk7XG4gICAgICAgIHJldHVybiAxIC8gMiAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9ICgxLjUyNSkpICsgMSkgKiB0ICsgcykgKyAyKTtcbiAgICAgIH0sXG4gICAgICBpbkJvdW5jZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gMSAtIHRoaXMub3V0Qm91bmNlKDEgLSB0KTtcbiAgICAgIH0sXG4gICAgICBvdXRCb3VuY2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKCh0IC89IDEpIDwgKDEgLyAyLjc1KSkge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogdCAqIHQpO1xuICAgICAgICB9IGVsc2UgaWYgKHQgPCAoMiAvIDIuNzUpKSB7XG4gICAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAodCAtPSAoMS41IC8gMi43NSkpICogdCArIC43NSk7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8ICgyLjUgLyAyLjc1KSkge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gKDIuMjUgLyAyLjc1KSkgKiB0ICsgLjkzNzUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gKDIuNjI1IC8gMi43NSkpICogdCArIC45ODQzNzUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaW5PdXRCb3VuY2U6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHRoaXMuaW5Cb3VuY2UodCAqIDIpICogMC41O1xuICAgICAgICByZXR1cm4gdGhpcy5vdXRCb3VuY2UodCAqIDIgLSAxKSAqIDAuNSArIDAuNTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdHJhbnNsYXRlRWFzaW5nOiBmdW5jdGlvbihrZXkpIHtcblxuICAgICAgaWYgKCF0aGlzLmNhY2hlW2tleV0pIHtcbiAgICAgICAgdmFyIGFycmF5ID0ga2V5LnNwbGl0KCcnKTtcblxuICAgICAgICB2YXIgc2lnbiA9IDE7XG4gICAgICAgIHZhciBzaWduZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICB2YXIgY2hhciA9IGFycmF5W2ldO1xuXG4gICAgICAgICAgaWYgKGNoYXIgPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBzaWduID0gLTE7XG4gICAgICAgICAgICBzaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGFyID09PSBcIitcIikge1xuICAgICAgICAgICAgc2lnbiA9IDE7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICB9IGVsc2UgYXJyYXlbaV0gPSBwYXJzZUludChhcnJheVtpXSwgMTYpICogc2lnbjtcblxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluLmFwcGx5KG51bGwsIGFycmF5KTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGFycmF5KTtcbiAgICAgICAgdmFyIGRpZmYgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBjYWNoZSA9IFtdO1xuICAgICAgICB2YXIgbm9ybWFsaXplZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc2lnbmVkKSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IE1hdGgubWF4KE1hdGguYWJzKG1pbiksIE1hdGguYWJzKG1heCkpXG4gICAgICAgICAgICBub3JtYWxpemVkLnB1c2goKGFycmF5W2ldKSAvIGRpZmYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGlmZiA9IG1heCAtIG1pbjtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaCgoYXJyYXlbaV0gLSBtaW4pIC8gZGlmZik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gbm9ybWFsaXplZDtcblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldXG5cbiAgICB9LFxuXG4gICAgLypcblxuICAgICAgQ3ViaWMtc3BsaW5lIGludGVycG9sYXRpb24gYnkgSXZhbiBLdWNraXJcblxuICAgICAgaHR0cDovL2Jsb2cuaXZhbmsubmV0L2ludGVycG9sYXRpb24td2l0aC1jdWJpYy1zcGxpbmVzLmh0bWxcblxuICAgICAgV2l0aCBzbGlnaHQgbW9kaWZpY2F0aW9ucyBieSBNb3JnYW4gSGVybG9ja2VyXG5cbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3JnYW5oZXJsb2NrZXIvY3ViaWMtc3BsaW5lXG5cbiAgICAqL1xuXG4gICAgc3BsaW5lSzoge30sXG4gICAgc3BsaW5lWDoge30sXG4gICAgc3BsaW5lWToge30sXG5cbiAgICBpbnNlcnRJbnRlcm1lZGlhdGVWYWx1ZXM6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChhW2ldKTtcblxuICAgICAgICBpZiAoaSA8IGEubGVuZ3RoIC0gMSkgcmVzdWx0LnB1c2goYVtpICsgMV0gKyAoYVtpXSAtIGFbaSArIDFdKSAqIDAuNik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIHNwbGluZTogZnVuY3Rpb24oeCwga2V5KSB7XG5cbiAgICAgIGlmICghdGhpcy5zcGxpbmVLW2tleV0pIHtcblxuICAgICAgICB2YXIgeHMgPSBbXTtcbiAgICAgICAgdmFyIHlzID0gdGhpcy50cmFuc2xhdGVFYXNpbmcoa2V5KTtcblxuICAgICAgICAvLyB5cyA9IHRoaXMuaW5zZXJ0SW50ZXJtZWRpYXRlVmFsdWVzKHlzKTtcblxuICAgICAgICBpZiAoIXlzLmxlbmd0aCkgcmV0dXJuIDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB5cy5sZW5ndGg7IGkrKykgeHMucHVzaChpICogKDEgLyAoeXMubGVuZ3RoIC0gMSkpKTtcblxuICAgICAgICB2YXIga3MgPSB4cy5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAga3MgPSB0aGlzLmdldE5hdHVyYWxLcyh4cywgeXMsIGtzKTtcblxuICAgICAgICB0aGlzLnNwbGluZVhba2V5XSA9IHhzO1xuICAgICAgICB0aGlzLnNwbGluZVlba2V5XSA9IHlzO1xuICAgICAgICB0aGlzLnNwbGluZUtba2V5XSA9IGtzO1xuXG4gICAgICB9XG5cbiAgICAgIGlmICh4ID4gMSkgcmV0dXJuIHRoaXMuc3BsaW5lWVtrZXldW3RoaXMuc3BsaW5lWVtrZXldLmxlbmd0aCAtIDFdO1xuXG4gICAgICB2YXIga3MgPSB0aGlzLnNwbGluZUtba2V5XTtcbiAgICAgIHZhciB4cyA9IHRoaXMuc3BsaW5lWFtrZXldO1xuICAgICAgdmFyIHlzID0gdGhpcy5zcGxpbmVZW2tleV07XG5cbiAgICAgIHZhciBpID0gMTtcblxuICAgICAgd2hpbGUgKHhzW2ldIDwgeCkgaSsrO1xuXG4gICAgICB2YXIgdCA9ICh4IC0geHNbaSAtIDFdKSAvICh4c1tpXSAtIHhzW2kgLSAxXSk7XG4gICAgICB2YXIgYSA9IGtzW2kgLSAxXSAqICh4c1tpXSAtIHhzW2kgLSAxXSkgLSAoeXNbaV0gLSB5c1tpIC0gMV0pO1xuICAgICAgdmFyIGIgPSAta3NbaV0gKiAoeHNbaV0gLSB4c1tpIC0gMV0pICsgKHlzW2ldIC0geXNbaSAtIDFdKTtcbiAgICAgIHZhciBxID0gKDEgLSB0KSAqIHlzW2kgLSAxXSArIHQgKiB5c1tpXSArIHQgKiAoMSAtIHQpICogKGEgKiAoMSAtIHQpICsgYiAqIHQpO1xuXG4gICAgICAvKlxuICAgICAgdmFyIHB5ID0geXNbaSAtIDJdO1xuICAgICAgdmFyIGN5ID0geXNbaSAtIDFdO1xuICAgICAgdmFyIG55ID0gKGkgPCB5cy5sZW5ndGggLSAxKSA/IHlzW2ldIDogeXNbaSAtIDFdO1xuXG4gICAgICBpZiAocSA+IG55KSB7XG4gICAgICAgIHZhciBkaWZmID0gKHEgLSBweSk7XG4gICAgICAgIC8vcSA9IHB5ICsgZGlmZjtcblxuICAgICAgfVxuXG4gICAgaWYgKGN5ID09PSBueSAmJiBjeSA9PT0gcHkpIHEgPSBweTtcbiAgICAqL1xuXG5cbiAgICAgIHJldHVybiBxO1xuICAgIH0sXG5cbiAgICBnZXROYXR1cmFsS3M6IGZ1bmN0aW9uKHhzLCB5cywga3MpIHtcbiAgICAgIHZhciBuID0geHMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBBID0gdGhpcy56ZXJvc01hdChuICsgMSwgbiArIDIpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG47IGkrKykgLy8gcm93c1xuICAgICAge1xuICAgICAgICBBW2ldW2kgLSAxXSA9IDEgLyAoeHNbaV0gLSB4c1tpIC0gMV0pO1xuICAgICAgICBBW2ldW2ldID0gMiAqICgxIC8gKHhzW2ldIC0geHNbaSAtIDFdKSArIDEgLyAoeHNbaSArIDFdIC0geHNbaV0pKTtcbiAgICAgICAgQVtpXVtpICsgMV0gPSAxIC8gKHhzW2kgKyAxXSAtIHhzW2ldKTtcbiAgICAgICAgQVtpXVtuICsgMV0gPSAzICogKCh5c1tpXSAtIHlzW2kgLSAxXSkgLyAoKHhzW2ldIC0geHNbaSAtIDFdKSAqICh4c1tpXSAtIHhzW2kgLSAxXSkpICsgKHlzW2kgKyAxXSAtIHlzW2ldKSAvICgoeHNbaSArIDFdIC0geHNbaV0pICogKHhzW2kgKyAxXSAtIHhzW2ldKSkpO1xuICAgICAgfVxuXG4gICAgICBBWzBdWzBdID0gMiAvICh4c1sxXSAtIHhzWzBdKTtcbiAgICAgIEFbMF1bMV0gPSAxIC8gKHhzWzFdIC0geHNbMF0pO1xuICAgICAgQVswXVtuICsgMV0gPSAzICogKHlzWzFdIC0geXNbMF0pIC8gKCh4c1sxXSAtIHhzWzBdKSAqICh4c1sxXSAtIHhzWzBdKSk7XG5cbiAgICAgIEFbbl1bbiAtIDFdID0gMSAvICh4c1tuXSAtIHhzW24gLSAxXSk7XG4gICAgICBBW25dW25dID0gMiAvICh4c1tuXSAtIHhzW24gLSAxXSk7XG4gICAgICBBW25dW24gKyAxXSA9IDMgKiAoeXNbbl0gLSB5c1tuIC0gMV0pIC8gKCh4c1tuXSAtIHhzW24gLSAxXSkgKiAoeHNbbl0gLSB4c1tuIC0gMV0pKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc29sdmUoQSwga3MpO1xuICAgIH0sXG5cbiAgICBzb2x2ZTogZnVuY3Rpb24oQSwga3MpIHtcbiAgICAgIHZhciBtID0gQS5sZW5ndGg7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IG07IGsrKykgLy8gY29sdW1uXG4gICAgICB7XG4gICAgICAgIC8vIHBpdm90IGZvciBjb2x1bW5cbiAgICAgICAgdmFyIGlfbWF4ID0gMDtcbiAgICAgICAgdmFyIHZhbGkgPSBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIGZvciAodmFyIGkgPSBrOyBpIDwgbTsgaSsrKVxuICAgICAgICAgIGlmIChBW2ldW2tdID4gdmFsaSkge1xuICAgICAgICAgICAgaV9tYXggPSBpO1xuICAgICAgICAgICAgdmFsaSA9IEFbaV1ba107XG4gICAgICAgICAgfVxuICAgICAgICB0aGlzLnNwbGluZVN3YXBSb3dzKEEsIGssIGlfbWF4KTtcblxuICAgICAgICAvLyBmb3IgYWxsIHJvd3MgYmVsb3cgcGl2b3RcbiAgICAgICAgZm9yICh2YXIgaSA9IGsgKyAxOyBpIDwgbTsgaSsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IGsgKyAxOyBqIDwgbSArIDE7IGorKylcbiAgICAgICAgICAgIEFbaV1bal0gPSBBW2ldW2pdIC0gQVtrXVtqXSAqIChBW2ldW2tdIC8gQVtrXVtrXSk7XG4gICAgICAgICAgQVtpXVtrXSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSBtIC0gMTsgaSA+PSAwOyBpLS0pIC8vIHJvd3MgPSBjb2x1bW5zXG4gICAgICB7XG4gICAgICAgIHZhciB2ID0gQVtpXVttXSAvIEFbaV1baV07XG4gICAgICAgIGtzW2ldID0gdjtcbiAgICAgICAgZm9yICh2YXIgaiA9IGkgLSAxOyBqID49IDA7IGotLSkgLy8gcm93c1xuICAgICAgICB7XG4gICAgICAgICAgQVtqXVttXSAtPSBBW2pdW2ldICogdjtcbiAgICAgICAgICBBW2pdW2ldID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGtzO1xuICAgIH0sXG5cbiAgICB6ZXJvc01hdDogZnVuY3Rpb24ociwgYykge1xuICAgICAgdmFyIEEgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcjsgaSsrKSB7XG4gICAgICAgIEEucHVzaChbXSk7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYzsgaisrKSBBW2ldLnB1c2goMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gQTtcbiAgICB9LFxuXG4gICAgc3BsaW5lU3dhcFJvd3M6IGZ1bmN0aW9uKG0sIGssIGwpIHtcbiAgICAgIHZhciBwID0gbVtrXTtcbiAgICAgIG1ba10gPSBtW2xdO1xuICAgICAgbVtsXSA9IHA7XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuZWFzZSA9IGVhc2U7XG5cbn0pKCk7XG5cblxuLyogZmlsZTogc3JjL1BsYXlncm91bmQuanMgKi9cblxuUExBWUdST1VORCA9IHt9O1xuXG5mdW5jdGlvbiBwbGF5Z3JvdW5kKGFyZ3MpIHtcblxuICByZXR1cm4gbmV3IFBMQVlHUk9VTkQuQXBwbGljYXRpb24oYXJncyk7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9VdGlscy5qcyAqL1xuXG5QTEFZR1JPVU5ELlV0aWxzID0ge1xuXG4gIGV4dGVuZDogZnVuY3Rpb24oKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG5cbiAgfSxcblxuICBtZXJnZTogZnVuY3Rpb24oYSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGIgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gYltrZXldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYVtrZXldICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBhW2tleV0gPT09IFwib2JqZWN0XCIpIHRoaXMubWVyZ2UoYVtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgZWxzZSBhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcblxuICB9LFxuXG4gIGludm9rZTogZnVuY3Rpb24ob2JqZWN0LCBtZXRob2ROYW1lKSB7XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnQgPSBvYmplY3RbaV07XG5cbiAgICAgIGlmIChjdXJyZW50W21ldGhvZE5hbWVdKSBjdXJyZW50W21ldGhvZE5hbWVdLmFwcGx5KGN1cnJlbnQsIGFyZ3MpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uKGZuLCB0aHJlc2hvbGQpIHtcbiAgICB0aHJlc2hvbGQgfHwgKHRocmVzaG9sZCA9IDI1MCk7XG4gICAgdmFyIGxhc3QsXG4gICAgICBkZWZlclRpbWVyO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgdmFyIG5vdyA9ICtuZXcgRGF0ZSxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hvbGQpIHtcbiAgICAgICAgLy8gaG9sZCBvbiB0byBpdFxuICAgICAgICBjbGVhclRpbWVvdXQoZGVmZXJUaW1lcik7XG4gICAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH0sIHRocmVzaG9sZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZWFzZSA9IGVhc2U7XG5cblxuLyogZmlsZTogc3JjL0V2ZW50cy5qcyAqL1xuXG5QTEFZR1JPVU5ELkV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMubGlzdGVuZXJzID0ge307XG5cbn07XG5cblBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSA9IHtcblxuICBvbjogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnQpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLm9uKGtleSwgZXZlbnRba2V5XSwgY29udGV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudF0pIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuXG4gICAgdmFyIGxpc3RlbmVyID0ge1xuICAgICAgb25jZTogZmFsc2UsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBldmVudCkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMub25jZShrZXksIGV2ZW50W2tleV0sIGNvbnRleHQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXTtcblxuICAgIHZhciBsaXN0ZW5lciA9IHtcbiAgICAgIG9uY2U6IHRydWUsXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgICBjb250ZXh0OiBjb250ZXh0XG4gICAgfTtcblxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpXS5fcmVtb3ZlKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG5cbiAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcblxuICAgIC8qIGlmIHlvdSBwcmVmZXIgZXZlbnRzIHBpcGUgKi9cblxuICAgIGlmICh0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdKSB7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbXCJldmVudFwiXVtpXTtcblxuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKGxpc3RlbmVyLmNvbnRleHQgfHwgdGhpcywgZXZlbnQsIGRhdGEpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiBvciBzdWJzY3JpYmVkIHRvIHNpbmdsZSBldmVudCAqL1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpXTtcblxuICAgICAgICBsaXN0ZW5lci5jYWxsYmFjay5jYWxsKGxpc3RlbmVyLmNvbnRleHQgfHwgdGhpcywgZGF0YSk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgbGVuLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59O1xuXG4vKiBmaWxlOiBzcmMvU3RhdGVzLmpzICovXG5cblBMQVlHUk9VTkQuU3RhdGVzID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICBhcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5TdGF0ZXMucHJvdG90eXBlID0ge1xuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAoIXRoaXMubmV4dCkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnQubG9ja2VkKSByZXR1cm47XG5cbiAgICB2YXIgc3RhdGUgPSB0aGlzLm5leHQ7XG5cbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIpIHN0YXRlID0gbmV3IHN0YXRlO1xuXG4gICAgLyogY3JlYXRlIHN0YXRlIGlmIG9iamVjdCBoYXMgbmV2ZXIgYmVlbiB1c2VkIGFzIGEgc3RhdGUgYmVmb3JlICovXG5cbiAgICBpZiAoIXN0YXRlLl9fY3JlYXRlZCkge1xuXG4gICAgICBzdGF0ZS5fX2NyZWF0ZWQgPSB0cnVlO1xuXG4gICAgICBzdGF0ZS5hcHAgPSB0aGlzLmFwcDtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwiY3JlYXRlc3RhdGVcIiwge1xuICAgICAgICBzdGF0ZTogc3RhdGVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RhdGUuY3JlYXRlKSBzdGF0ZS5jcmVhdGUoKTtcblxuICAgIH1cblxuICAgIC8qIGVudGVyIG5ldyBzdGF0ZSAqL1xuXG4gICAgaWYgKHRoaXMuY3VycmVudCkge1xuICAgICAgdGhpcy50cmlnZ2VyKFwibGVhdmVzdGF0ZVwiLCB7XG4gICAgICAgIHByZXY6IHRoaXMuY3VycmVudCxcbiAgICAgICAgbmV4dDogc3RhdGUsXG4gICAgICAgIHN0YXRlOiB0aGlzLmN1cnJlbnRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcihcImVudGVyc3RhdGVcIiwge1xuICAgICAgcHJldjogdGhpcy5jdXJyZW50LFxuICAgICAgbmV4dDogc3RhdGUsXG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcblxuICAgIHRoaXMuY3VycmVudCA9IHN0YXRlO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnQuZW50ZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudC5lbnRlcigpO1xuICAgIH1cblxuICAgIHRoaXMuYXBwLnN0YXRlID0gdGhpcy5jdXJyZW50O1xuXG4gICAgdGhpcy5uZXh0ID0gZmFsc2U7XG5cblxuICB9LFxuXG4gIHNldDogZnVuY3Rpb24oc3RhdGUpIHtcblxuICAgIGlmICh0aGlzLmN1cnJlbnQgJiYgdGhpcy5jdXJyZW50LmxlYXZlKSB0aGlzLmN1cnJlbnQubGVhdmUoKTtcblxuICAgIHRoaXMubmV4dCA9IHN0YXRlO1xuXG4gICAgdGhpcy5zdGVwKDApO1xuXG4gIH1cblxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELlN0YXRlcy5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cbi8qIGZpbGU6IHNyYy9BcHBsaWNhdGlvbi5qcyAqL1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uID0gZnVuY3Rpb24oYXJncykge1xuXG4gIHZhciBhcHAgPSB0aGlzO1xuXG4gIC8qIGV2ZW50cyAqL1xuXG4gIFBMQVlHUk9VTkQuRXZlbnRzLmNhbGwodGhpcyk7XG5cbiAgLyogZGVmYXVsdHMgKi9cblxuICBQTEFZR1JPVU5ELlV0aWxzLm1lcmdlKHRoaXMsIHRoaXMuZGVmYXVsdHMsIGFyZ3MpO1xuXG4gIC8qIGd1ZXNzIHNjYWxpbmcgbW9kZSAqL1xuXG4gIHRoaXMuYXV0b1dpZHRoID0gdGhpcy53aWR0aCA/IGZhbHNlIDogdHJ1ZTtcbiAgdGhpcy5hdXRvSGVpZ2h0ID0gdGhpcy5oZWlnaHQgPyBmYWxzZSA6IHRydWU7XG4gIHRoaXMuYXV0b1NjYWxlID0gdGhpcy5zY2FsZSA/IGZhbHNlIDogdHJ1ZTtcblxuICAvKiBnZXQgY29udGFpbmVyICovXG5cbiAgaWYgKCF0aGlzLmNvbnRhaW5lcikgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xuXG4gIGlmICh0aGlzLmNvbnRhaW5lciAhPT0gZG9jdW1lbnQuYm9keSkgdGhpcy5jdXN0b21Db250YWluZXIgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgdGhpcy5jb250YWluZXIgPT09IFwic3RyaW5nXCIpIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcik7XG5cbiAgdGhpcy51cGRhdGVTaXplKCk7XG5cbiAgLyogZXZlbnRzICovXG5cbiAgLy8gdGhpcy5lbWl0TG9jYWxFdmVudCA9IHRoaXMuZW1pdExvY2FsRXZlbnQuYmluZCh0aGlzKTtcbiAgLy8gdGhpcy5lbWl0R2xvYmFsRXZlbnQgPSB0aGlzLmVtaXRHbG9iYWxFdmVudC5iaW5kKHRoaXMpO1xuXG4gIC8qIHN0YXRlcyBtYW5hZ2VyICovXG5cbiAgdGhpcy5zdGF0ZXMgPSBuZXcgUExBWUdST1VORC5TdGF0ZXModGhpcyk7XG4gIHRoaXMuc3RhdGVzLm9uKFwiZXZlbnRcIiwgdGhpcy5lbWl0TG9jYWxFdmVudCwgdGhpcyk7XG5cbiAgLyogbW91c2UgKi9cblxuICB0aGlzLm1vdXNlID0gbmV3IFBMQVlHUk9VTkQuTW91c2UodGhpcywgdGhpcy5jb250YWluZXIpO1xuICB0aGlzLm1vdXNlLm9uKFwiZXZlbnRcIiwgdGhpcy5lbWl0R2xvYmFsRXZlbnQsIHRoaXMpO1xuXG4gIC8qIHRvdWNoICovXG5cbiAgdGhpcy50b3VjaCA9IG5ldyBQTEFZR1JPVU5ELlRvdWNoKHRoaXMsIHRoaXMuY29udGFpbmVyKTtcbiAgdGhpcy50b3VjaC5vbihcImV2ZW50XCIsIHRoaXMuZW1pdEdsb2JhbEV2ZW50LCB0aGlzKTtcblxuICAvKiBrZXlib2FyZCAqL1xuXG4gIHRoaXMua2V5Ym9hcmQgPSBuZXcgUExBWUdST1VORC5LZXlib2FyZCgpO1xuICB0aGlzLmtleWJvYXJkLm9uKFwiZXZlbnRcIiwgdGhpcy5lbWl0R2xvYmFsRXZlbnQsIHRoaXMpO1xuXG4gIC8qIGdhbWVwYWRzICovXG5cbiAgdGhpcy5nYW1lcGFkcyA9IG5ldyBQTEFZR1JPVU5ELkdhbWVwYWRzKHRoaXMpO1xuICB0aGlzLmdhbWVwYWRzLm9uKFwiZXZlbnRcIiwgdGhpcy5lbWl0R2xvYmFsRXZlbnQsIHRoaXMpO1xuXG4gIC8qIHR3ZWVucyAqL1xuXG4gIHRoaXMudHdlZW5zID0gbmV3IFBMQVlHUk9VTkQuVHdlZW5NYW5hZ2VyKHRoaXMpO1xuXG4gIC8qIGVhc2UgKi9cblxuICB0aGlzLmVhc2UgPSBQTEFZR1JPVU5ELlV0aWxzLmVhc2U7XG5cbiAgLyogdmlkZW8gcmVjb3JkZXIgKi9cblxuICB0aGlzLnZpZGVvUmVjb3JkZXIgPSBuZXcgUExBWUdST1VORC5WaWRlb1JlY29yZGVyKHRoaXMpO1xuXG4gIC8qIHNvdW5kICovXG5cbiAgUExBWUdST1VORC5Tb3VuZCh0aGlzKTtcblxuICAvKiB3aW5kb3cgcmVzaXplICovXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgLyogdmlzaWxpYml0eWNoYW5nZSAqL1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLmVtaXRHbG9iYWxFdmVudChcInZpc2liaWxpdHljaGFuZ2VcIiwgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKTtcblxuXG4gIH0pO1xuXG4gIC8qIGFzc2V0cyBjb250YWluZXJzICovXG5cbiAgdGhpcy5pbWFnZXMgPSB7fTtcbiAgdGhpcy5hdGxhc2VzID0ge307XG4gIHRoaXMuZGF0YSA9IHt9O1xuXG4gIHRoaXMubG9hZGVyID0gbmV3IFBMQVlHUk9VTkQuTG9hZGVyKHRoaXMpO1xuXG4gIHRoaXMubG9hZEZvbygwLjI1KTtcblxuICAvKiBjcmVhdGUgcGx1Z2lucyBpbiB0aGUgc2FtZSB3YXkgKi9cblxuICB0aGlzLnBsdWdpbnMgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gUExBWUdST1VORCkge1xuXG4gICAgdmFyIHByb3BlcnR5ID0gUExBWUdST1VORFtrZXldO1xuXG4gICAgaWYgKHByb3BlcnR5LnBsdWdpbikgdGhpcy5wbHVnaW5zLnB1c2gobmV3IHByb3BlcnR5KHRoaXMpKTtcblxuICB9XG5cbiAgLyogZmxvdyAqL1xuXG4gIHRoaXMuZW1pdEdsb2JhbEV2ZW50KFwicHJlbG9hZFwiKTtcblxuICB0aGlzLmZpcnN0QmF0Y2ggPSB0cnVlO1xuXG4gIGZ1bmN0aW9uIG9uUHJlbG9hZEVuZCgpIHtcblxuICAgIGFwcC5sb2FkRm9vKDAuMjUpO1xuXG4gICAgLyogcnVuIGV2ZXJ5dGhpbmcgaW4gdGhlIG5leHQgZnJhbWUgKi9cblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgIGFwcC5lbWl0TG9jYWxFdmVudChcImNyZWF0ZVwiKTtcblxuICAgICAgYXBwLnNldFN0YXRlKFBMQVlHUk9VTkQuRGVmYXVsdFN0YXRlKTtcbiAgICAgIGFwcC5oYW5kbGVSZXNpemUoKTtcbiAgICAgIGFwcC5zZXRTdGF0ZShQTEFZR1JPVU5ELkxvYWRpbmdTY3JlZW4pO1xuXG4gICAgICAvKiBnYW1lIGxvb3AgKi9cblxuICAgICAgUExBWUdST1VORC5HYW1lTG9vcChhcHApO1xuXG4gICAgfSk7XG5cbiAgICAvKiBzdGFnZSBwcm9wZXIgbG9hZGluZyBzdGVwICovXG5cbiAgICBhcHAubG9hZGVyLm9uY2UoXCJyZWFkeVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgYXBwLmZpcnN0QmF0Y2ggPSBmYWxzZTtcblxuICAgICAgYXBwLnNldFN0YXRlKFBMQVlHUk9VTkQuRGVmYXVsdFN0YXRlKTtcblxuICAgICAgYXBwLmVtaXRMb2NhbEV2ZW50KFwicmVhZHlcIik7XG4gICAgICBhcHAuaGFuZGxlUmVzaXplKCk7XG5cblxuICAgIH0pO1xuXG5cbiAgfTtcblxuXG4gIHRoaXMubG9hZGVyLm9uY2UoXCJyZWFkeVwiLCBvblByZWxvYWRFbmQpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZSA9IHtcblxuICBkZWZhdWx0czoge1xuICAgIHNtb290aGluZzogMSxcbiAgICBwYXRoczoge1xuICAgICAgYmFzZTogXCJcIixcbiAgICAgIGltYWdlczogXCJpbWFnZXMvXCJcbiAgICB9LFxuICAgIG9mZnNldFg6IDAsXG4gICAgb2Zmc2V0WTogMFxuICB9LFxuXG4gIHNldFN0YXRlOiBmdW5jdGlvbihzdGF0ZSkge1xuXG4gICAgdGhpcy5zdGF0ZXMuc2V0KHN0YXRlKTtcblxuICB9LFxuXG4gIGdldFBhdGg6IGZ1bmN0aW9uKHRvKSB7XG5cbiAgICByZXR1cm4gdGhpcy5wYXRocy5iYXNlICsgKHRoaXMucGF0aHNbdG9dIHx8ICh0byArIFwiL1wiKSk7XG5cbiAgfSxcblxuICBnZXRBc3NldEVudHJ5OiBmdW5jdGlvbihwYXRoLCBmb2xkZXIsIGRlZmF1bHRFeHRlbnNpb24pIHtcblxuICAgIC8qIHRyYW5zbGF0ZSBmb2xkZXIgYWNjb3JkaW5nIHRvIHVzZXIgcHJvdmlkZWQgcGF0aHNcbiAgICAgICBvciBsZWF2ZSBhcyBpcyAqL1xuXG4gICAgdmFyIGZvbGRlciA9IHRoaXMucGF0aHNbZm9sZGVyXSB8fCAoZm9sZGVyICsgXCIvXCIpO1xuXG4gICAgdmFyIGZpbGVpbmZvID0gcGF0aC5tYXRjaCgvKC4qKVxcLi4qLyk7XG4gICAgdmFyIGtleSA9IGZpbGVpbmZvID8gZmlsZWluZm9bMV0gOiBwYXRoO1xuXG4gICAgdmFyIHRlbXAgPSBwYXRoLnNwbGl0KFwiLlwiKTtcbiAgICB2YXIgYmFzZW5hbWUgPSBwYXRoO1xuXG4gICAgaWYgKHRlbXAubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGV4dCA9IHRlbXAucG9wKCk7XG4gICAgICBwYXRoID0gdGVtcC5qb2luKFwiLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGV4dCA9IGRlZmF1bHRFeHRlbnNpb247XG4gICAgICBiYXNlbmFtZSArPSBcIi5cIiArIGRlZmF1bHRFeHRlbnNpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGtleToga2V5LFxuICAgICAgdXJsOiB0aGlzLnBhdGhzLmJhc2UgKyBmb2xkZXIgKyBiYXNlbmFtZSxcbiAgICAgIHBhdGg6IHRoaXMucGF0aHMuYmFzZSArIGZvbGRlciArIHBhdGgsXG4gICAgICBleHQ6IGV4dFxuICAgIH07XG5cbiAgfSxcblxuICAvKiBldmVudHMgdGhhdCBzaG91bGRuJ3QgZmxvdyBkb3duIHRvIHRoZSBzdGF0ZSAqL1xuXG4gIGVtaXRMb2NhbEV2ZW50OiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuXG4gICAgdGhpcy50cmlnZ2VyKGV2ZW50LCBkYXRhKTtcblxuICAgIGlmICgoIXRoaXMuZmlyc3RCYXRjaCB8fCB0aGlzLmxvYWRlci5yZWFkeSkgJiYgdGhpc1tldmVudF0pIHRoaXNbZXZlbnRdKGRhdGEpO1xuXG4gIH0sXG5cbiAgLyogZXZlbnRzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgc3RhdGUgKi9cblxuICBlbWl0R2xvYmFsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHJldHVybiB0aGlzLmVtaXRMb2NhbEV2ZW50KGV2ZW50LCBkYXRhKTtcblxuICAgIHRoaXMudHJpZ2dlcihldmVudCwgZGF0YSk7XG5cbiAgICBpZiAoKCF0aGlzLmZpcnN0QmF0Y2ggfHwgdGhpcy5sb2FkZXIucmVhZHkpICYmIHRoaXMuZXZlbnQpIHRoaXMuZXZlbnQoZXZlbnQsIGRhdGEpO1xuXG4gICAgaWYgKCghdGhpcy5maXJzdEJhdGNoIHx8IHRoaXMubG9hZGVyLnJlYWR5KSAmJiB0aGlzW2V2ZW50XSkgdGhpc1tldmVudF0oZGF0YSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5ldmVudCkgdGhpcy5zdGF0ZS5ldmVudChldmVudCwgZGF0YSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZVtldmVudF0pIHRoaXMuc3RhdGVbZXZlbnRdKGRhdGEpO1xuXG4gICAgdGhpcy50cmlnZ2VyKFwicG9zdFwiICsgZXZlbnQsIGRhdGEpO1xuXG4gICAgLy8gaWYgKHRoaXMuc3RhdGUucHJveHkpIHRoaXMuc3RhdGUucHJveHkoZXZlbnQsIGRhdGEpO1xuXG4gIH0sXG5cbiAgdXBkYXRlU2l6ZTogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5jdXN0b21Db250YWluZXIpIHtcblxuICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmF1dG9TY2FsZSAmJiAhdGhpcy5hdXRvV2lkdGggJiYgIXRoaXMuYXV0b0hlaWdodCkge1xuXG4gICAgfSBlbHNlIGlmICghdGhpcy5hdXRvSGVpZ2h0ICYmIHRoaXMuYXV0b1dpZHRoKSB7XG5cbiAgICAgIGlmICh0aGlzLmF1dG9TY2FsZSkgdGhpcy5zY2FsZSA9IGNvbnRhaW5lckhlaWdodCAvIHRoaXMuaGVpZ2h0O1xuXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5jZWlsKGNvbnRhaW5lcldpZHRoIC8gdGhpcy5zY2FsZSk7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmF1dG9XaWR0aCAmJiB0aGlzLmF1dG9IZWlnaHQpIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b1NjYWxlKSB0aGlzLnNjYWxlID0gY29udGFpbmVyV2lkdGggLyB0aGlzLndpZHRoO1xuXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGguY2VpbChjb250YWluZXJIZWlnaHQgLyB0aGlzLnNjYWxlKTtcblxuXG4gICAgfSBlbHNlIGlmICh0aGlzLmF1dG9XaWR0aCAmJiB0aGlzLmF1dG9IZWlnaHQgJiYgdGhpcy5hdXRvU2NhbGUpIHtcblxuICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICB0aGlzLndpZHRoID0gY29udGFpbmVyV2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGNvbnRhaW5lckhlaWdodDtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5hdXRvV2lkdGggJiYgdGhpcy5hdXRvSGVpZ2h0KSB7XG5cbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLmNlaWwoY29udGFpbmVyV2lkdGggLyB0aGlzLnNjYWxlKTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5jZWlsKGNvbnRhaW5lckhlaWdodCAvIHRoaXMuc2NhbGUpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWluKGNvbnRhaW5lcldpZHRoIC8gdGhpcy53aWR0aCwgY29udGFpbmVySGVpZ2h0IC8gdGhpcy5oZWlnaHQpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5vZmZzZXRYID0gKGNvbnRhaW5lcldpZHRoIC0gdGhpcy53aWR0aCAqIHRoaXMuc2NhbGUpIC8gMiB8IDA7XG4gICAgdGhpcy5vZmZzZXRZID0gKGNvbnRhaW5lckhlaWdodCAtIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZSkgLyAyIHwgMDtcblxuICAgIHRoaXMuY2VudGVyID0ge1xuICAgICAgeDogdGhpcy53aWR0aCAvIDIgfCAwLFxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIHwgMFxuICAgIH07XG5cbiAgfSxcblxuICBoYW5kbGVSZXNpemU6IFBMQVlHUk9VTkQuVXRpbHMudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcblxuICAgIHRoaXMubW91c2UuaGFuZGxlUmVzaXplKCk7XG4gICAgdGhpcy50b3VjaC5oYW5kbGVSZXNpemUoKTtcblxuICAgIHRoaXMuZW1pdEdsb2JhbEV2ZW50KFwicmVzaXplXCIsIHt9KTtcblxuICB9LCAxNiksXG5cbiAgLypcbiAgICByZXF1ZXN0IGEgZmlsZSBvdmVyIGh0dHBcbiAgICBpdCBzaGFsbCBiZSBsYXRlciBhbiBhYnN0cmFjdGlvbiB1c2luZyAnZnMnIGluIG5vZGUtd2Via2l0XG5cbiAgICByZXR1cm5zIGEgcHJvbWlzZVxuICAqL1xuXG4gIHJlcXVlc3Q6IGZ1bmN0aW9uKHVybCkge1xuXG4gICAgZnVuY3Rpb24gcHJvbWlzZShzdWNjZXNzLCBmYWlsKSB7XG5cbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIHZhciBhcHAgPSB0aGlzO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcblxuICAgICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciB4aHIgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHhoci5zdGF0dXMgIT09IDIwMCAmJiB4aHIuc3RhdHVzICE9PSAwKSB7XG5cbiAgICAgICAgICByZXR1cm4gZmFpbChuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IFwiICsgdXJsKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHN1Y2Nlc3MoeGhyKTtcblxuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShwcm9taXNlKTtcblxuICB9LFxuXG4gIC8qIGltYWdpbmFyeSB0aW1lb3V0IHRvIGRlbGF5IGxvYWRpbmcgKi9cblxuICBsb2FkRm9vOiBmdW5jdGlvbih0aW1lb3V0KSB7XG5cbiAgICB2YXIgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG5cbiAgICB0aGlzLmxvYWRlci5hZGQoXCJmb28gXCIgKyB0aW1lb3V0KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkZXIuc3VjY2VzcyhcImZvbyBcIiArIHRpbWVvdXQpO1xuICAgIH0sIHRpbWVvdXQgKiAxMDAwKTtcblxuICB9LFxuXG4gIC8qIGRhdGEvanNvbiAqL1xuXG4gIGxvYWREYXRhOiBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGFyZykgdGhpcy5sb2FkRGF0YShhcmdba2V5XSk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YUl0ZW0oYXJnKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH0sXG5cbiAgbG9hZERhdGFJdGVtOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICB2YXIgZW50cnkgPSB0aGlzLmdldEFzc2V0RW50cnkobmFtZSwgXCJkYXRhXCIsIFwianNvblwiKTtcblxuICAgIHZhciBhcHAgPSB0aGlzO1xuXG4gICAgdGhpcy5sb2FkZXIuYWRkKCk7XG5cbiAgICB0aGlzLnJlcXVlc3QoZW50cnkudXJsKS50aGVuKHByb2Nlc3NEYXRhKTtcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKHJlcXVlc3QpIHtcblxuICAgICAgaWYgKGVudHJ5LmV4dCA9PT0gXCJqc29uXCIpIHtcbiAgICAgICAgYXBwLmRhdGFbZW50cnkua2V5XSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwLmRhdGFbZW50cnkua2V5XSA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xuICAgICAgfVxuXG4gICAgICBhcHAubG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcblxuICAgIH1cblxuICB9LFxuXG4gIC8qIGltYWdlcyAqL1xuXG4gIGxvYWRJbWFnZTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gdGhpcy5sb2FkSW1hZ2VzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgfSxcblxuICBsb2FkSW1hZ2VzOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgLyogcG9seW1vcnBoaXNtIGF0IGl0cyBmaW5lc3QgKi9cblxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJnKSBwcm9taXNlcyA9IHByb21pc2VzLmNvbmNhdCh0aGlzLmxvYWRJbWFnZXMoYXJnW2tleV0pKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMubG9hZE9uZUltYWdlKGFyZykpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gIH0sXG5cbiAgbG9hZE9uZUltYWdlOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gdGhpcztcblxuICAgIGlmICghdGhpcy5faW1hZ2VMb2FkZXJzKSB0aGlzLl9pbWFnZUxvYWRlcnMgPSB7fTtcblxuICAgIGlmICghdGhpcy5faW1hZ2VMb2FkZXJzW25hbWVdKSB7XG5cbiAgICAgIHZhciBwcm9taXNlID0gZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgLyogaWYgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9hcnJheSBsZXQncyB0cnkgdG8gbG9hZCBpdCAqL1xuXG4gICAgICAgIHZhciBsb2FkZXIgPSBhcHAubG9hZGVyO1xuXG4gICAgICAgIHZhciBlbnRyeSA9IGFwcC5nZXRBc3NldEVudHJ5KG5hbWUsIFwiaW1hZ2VzXCIsIFwicG5nXCIpO1xuXG4gICAgICAgIGFwcC5sb2FkZXIuYWRkKGVudHJ5LnBhdGgpO1xuXG4gICAgICAgIHZhciBpbWFnZSA9IGFwcC5pbWFnZXNbZW50cnkua2V5XSA9IG5ldyBJbWFnZTtcblxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuICAgICAgICAgIGxvYWRlci5zdWNjZXNzKGVudHJ5LnVybCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgcmVqZWN0KFwiY2FuJ3QgbG9hZCBcIiArIGVudHJ5LnVybCk7XG4gICAgICAgICAgbG9hZGVyLmVycm9yKGVudHJ5LnVybCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2Uuc3JjID0gZW50cnkudXJsO1xuXG4gICAgICB9O1xuXG4gICAgICBhcHAuX2ltYWdlTG9hZGVyc1tuYW1lXSA9IG5ldyBQcm9taXNlKHByb21pc2UpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlTG9hZGVyc1tuYW1lXTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuXG5cbi8qIGZpbGU6IHNyYy9HYW1lTG9vcC5qcyAqL1xuXG5QTEFZR1JPVU5ELkdhbWVMb29wID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgYXBwLmxpZmV0aW1lID0gMDtcbiAgYXBwLm9wcyA9IDA7XG4gIGFwcC5vcGNvc3QgPSAwO1xuXG4gIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG4gIHZhciBmcmFtZSA9IDA7XG4gIHZhciB1bmJvdW5kZWQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiByZW5kZXIoZHQpIHtcblxuICAgIGFwcC5lbWl0R2xvYmFsRXZlbnQoXCJyZW5kZXJcIiwgZHQpXG4gICAgYXBwLmVtaXRHbG9iYWxFdmVudChcInBvc3RyZW5kZXJcIiwgZHQpXG5cbiAgfTtcblxuICBmdW5jdGlvbiBzdGVwKGR0KSB7XG5cbiAgICBhcHAuZW1pdEdsb2JhbEV2ZW50KFwic3RlcFwiLCBkdClcblxuICB9O1xuXG4gIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuXG4gICAgaWYgKCFhcHAudW5ib3VuZCkge1xuICAgICAgaWYgKGFwcC5pbW1pZGlhdGUpIHtcbiAgICAgICAgc2V0WmVyb1RpbWVvdXQoZ2FtZUxvb3ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGEgPSBEYXRlLm5vdygpIC0gbGFzdFRpY2s7XG5cbiAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICBpZiAoYXBwLnVuYm91bmQpIHtcbiAgICAgIGRlbHRhID0gMjA7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhID4gMTAwMCkgcmV0dXJuO1xuXG4gICAgdmFyIGR0ID0gZGVsdGEgLyAxMDAwO1xuXG4gICAgYXBwLmxpZmV0aW1lICs9IGR0O1xuICAgIGFwcC5lbGFwc2VkID0gZHQ7XG5cbiAgICBzdGVwKGR0KTtcblxuICAgIHJlbmRlcihkdCk7XG5cbiAgICBpZiAoYXBwLnVuYm91bmQgJiYgIXVuYm91bmRlZCkge1xuICAgICAgdW5ib3VuZGVkID0gdHJ1ZTtcbiAgICAgIHdoaWxlIChhcHAudW5ib3VuZCkge1xuICAgICAgICBnYW1lTG9vcCgpO1xuICAgICAgfVxuICAgICAgdW5ib3VuZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gIH07XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcblxuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XG5cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XG5cbiAgICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG4gIH0pO1xuXG4gIHZhciByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG59O1xuXG4vLyBDb3B5cmlnaHQgZGJhcm9uLCB2aWEgaHR0cDovL2RiYXJvbi5vcmcvbG9nLzIwMTAwMzA5LWZhc3Rlci10aW1lb3V0c1xuLy8gT25seSBhZGQgc2V0WmVyb1RpbWVvdXQgdG8gdGhlIHdpbmRvdyBvYmplY3QsIGFuZCBoaWRlIGV2ZXJ5dGhpbmdcbi8vIGVsc2UgaW4gYSBjbG9zdXJlLlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgdGltZW91dHMgPSBbXTtcbiAgdmFyIG1lc3NhZ2VOYW1lID0gXCJ6ZXJvLXRpbWVvdXQtbWVzc2FnZVwiO1xuXG4gIC8vIExpa2Ugc2V0VGltZW91dCwgYnV0IG9ubHkgdGFrZXMgYSBmdW5jdGlvbiBhcmd1bWVudC4gIFRoZXJlJ3NcbiAgLy8gbm8gdGltZSBhcmd1bWVudCAoYWx3YXlzIHplcm8pIGFuZCBubyBhcmd1bWVudHMgKHlvdSBoYXZlIHRvXG4gIC8vIHVzZSBhIGNsb3N1cmUpLlxuICBmdW5jdGlvbiBzZXRaZXJvVGltZW91dChmbikge1xuICAgIHRpbWVvdXRzLnB1c2goZm4pO1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShtZXNzYWdlTmFtZSwgXCIqXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xuXG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PSB3aW5kb3cgJiYgZXZlbnQuZGF0YSA9PSBtZXNzYWdlTmFtZSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAodGltZW91dHMubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgZm4gPSB0aW1lb3V0cy5zaGlmdCgpO1xuICAgICAgICBmbigpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBoYW5kbGVNZXNzYWdlLCB0cnVlKTtcblxuICAvLyBBZGQgdGhlIG9uZSB0aGluZyB3ZSB3YW50IGFkZGVkIHRvIHRoZSB3aW5kb3cgb2JqZWN0LlxuICB3aW5kb3cuc2V0WmVyb1RpbWVvdXQgPSBzZXRaZXJvVGltZW91dDtcbn0pKCk7XG5cbi8qIGZpbGU6IHNyYy9HYW1lcGFkcy5qcyAqL1xuXG5QTEFZR1JPVU5ELkdhbWVwYWRzID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLmdldEdhbWVwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzIHx8IG5hdmlnYXRvci53ZWJraXRHZXRHYW1lcGFkcztcblxuICB0aGlzLmdhbWVwYWRtb3ZlRXZlbnQgPSB7fTtcbiAgdGhpcy5nYW1lcGFkZG93bkV2ZW50ID0ge307XG4gIHRoaXMuZ2FtZXBhZHVwRXZlbnQgPSB7fTtcblxuICB0aGlzLmdhbWVwYWRzID0ge307XG5cbiAgdGhpcy5hcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5HYW1lcGFkcy5wcm90b3R5cGUgPSB7XG5cbiAgYnV0dG9uczoge1xuICAgIDA6IFwiMVwiLFxuICAgIDE6IFwiMlwiLFxuICAgIDI6IFwiM1wiLFxuICAgIDM6IFwiNFwiLFxuICAgIDQ6IFwibDFcIixcbiAgICA1OiBcInIxXCIsXG4gICAgNjogXCJsMlwiLFxuICAgIDc6IFwicjJcIixcbiAgICA4OiBcInNlbGVjdFwiLFxuICAgIDk6IFwic3RhcnRcIixcbiAgICAxMjogXCJ1cFwiLFxuICAgIDEzOiBcImRvd25cIixcbiAgICAxNDogXCJsZWZ0XCIsXG4gICAgMTU6IFwicmlnaHRcIlxuICB9LFxuXG4gIHplcm9TdGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgYnV0dG9ucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMTU7IGkrKykge1xuICAgICAgYnV0dG9ucy5wdXNoKHtcbiAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgIHZhbHVlOiAwXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXhlczogW10sXG4gICAgICBidXR0b25zOiBidXR0b25zXG4gICAgfTtcblxuICB9LFxuXG4gIGNyZWF0ZUdhbWVwYWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgIGJ1dHRvbnM6IHt9LFxuICAgICAgc3RpY2tzOiBbe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH1dXG4gICAgfTtcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy5idXR0b25zW2ldO1xuICAgICAgcmVzdWx0LmJ1dHRvbnNba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghbmF2aWdhdG9yLmdldEdhbWVwYWRzKSByZXR1cm47XG5cbiAgICB2YXIgZ2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2FtZXBhZHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGN1cnJlbnQgPSBnYW1lcGFkc1tpXTtcblxuICAgICAgaWYgKCFjdXJyZW50KSBjb250aW51ZTtcblxuICAgICAgaWYgKCF0aGlzW2ldKSB0aGlzW2ldID0gdGhpcy5jcmVhdGVHYW1lcGFkKCk7XG5cbiAgICAgIC8qIGhhdmUgdG8gY29uY2F0IHRoZSBjdXJyZW50LmJ1dHRvbnMgYmVjYXVzZSB0aGUgYXJlIHJlYWQtb25seSAqL1xuXG4gICAgICB2YXIgYnV0dG9ucyA9IFtdLmNvbmNhdChjdXJyZW50LmJ1dHRvbnMpO1xuXG4gICAgICAvKiBoYWNrIGZvciBtaXNzaW5nICBkcGFkcyAqL1xuXG4gICAgICBmb3IgKHZhciBoID0gMTI7IGggPD0gMTU7IGgrKykge1xuICAgICAgICBpZiAoIWJ1dHRvbnNbaF0pIGJ1dHRvbnNbaF0gPSB7XG4gICAgICAgICAgcHJlc3NlZDogZmFsc2UsXG4gICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZXZpb3VzID0gdGhpc1tpXTtcblxuICAgICAgLyogYXhlcyAoc3RpY2tzKSB0byBidXR0b25zICovXG5cbiAgICAgIGlmIChjdXJyZW50LmF4ZXMpIHtcblxuICAgICAgICBpZiAoY3VycmVudC5heGVzWzBdIDwgMCkgYnV0dG9uc1sxNF0ucHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGlmIChjdXJyZW50LmF4ZXNbMF0gPiAwKSBidXR0b25zWzE1XS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGN1cnJlbnQuYXhlc1sxXSA8IDApIGJ1dHRvbnNbMTJdLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY3VycmVudC5heGVzWzFdID4gMCkgYnV0dG9uc1sxM10ucHJlc3NlZCA9IHRydWU7XG5cbiAgICAgICAgcHJldmlvdXMuc3RpY2tzWzBdLnggPSBjdXJyZW50LmF4ZXNbMF0udmFsdWU7XG4gICAgICAgIHByZXZpb3VzLnN0aWNrc1swXS55ID0gY3VycmVudC5heGVzWzFdLnZhbHVlO1xuICAgICAgICBwcmV2aW91cy5zdGlja3NbMV0ueCA9IGN1cnJlbnQuYXhlc1syXS52YWx1ZTtcbiAgICAgICAgcHJldmlvdXMuc3RpY2tzWzFdLnkgPSBjdXJyZW50LmF4ZXNbM10udmFsdWU7XG5cbiAgICAgIH1cblxuICAgICAgLyogY2hlY2sgYnV0dG9ucyBjaGFuZ2VzICovXG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYnV0dG9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1dHRvbnNbal07XG5cbiAgICAgICAgLyogZ2FtZXBhZCBkb3duICovXG5cbiAgICAgICAgaWYgKGJ1dHRvbnNbal0ucHJlc3NlZCAmJiAhcHJldmlvdXMuYnV0dG9uc1trZXldKSB7XG5cbiAgICAgICAgICBwcmV2aW91cy5idXR0b25zW2tleV0gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZ2FtZXBhZGRvd25FdmVudC5idXR0b24gPSB0aGlzLmJ1dHRvbnNbal07XG4gICAgICAgICAgdGhpcy5nYW1lcGFkZG93bkV2ZW50LmdhbWVwYWQgPSBpO1xuICAgICAgICAgIHRoaXMudHJpZ2dlcihcImdhbWVwYWRkb3duXCIsIHRoaXMuZ2FtZXBhZGRvd25FdmVudCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGdhbWVwYWQgdXAgKi9cbiAgICAgICAgZWxzZSBpZiAoIWJ1dHRvbnNbal0ucHJlc3NlZCAmJiBwcmV2aW91cy5idXR0b25zW2tleV0pIHtcblxuICAgICAgICAgIHByZXZpb3VzLmJ1dHRvbnNba2V5XSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuZ2FtZXBhZHVwRXZlbnQuYnV0dG9uID0gdGhpcy5idXR0b25zW2pdO1xuICAgICAgICAgIHRoaXMuZ2FtZXBhZHVwRXZlbnQuZ2FtZXBhZCA9IGk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyKFwiZ2FtZXBhZHVwXCIsIHRoaXMuZ2FtZXBhZHVwRXZlbnQpO1xuXG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuR2FtZXBhZHMucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG5cbi8qIGZpbGU6IHNyYy9LZXlib2FyZC5qcyAqL1xuXG5QTEFZR1JPVU5ELktleWJvYXJkID0gZnVuY3Rpb24oKSB7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLmtleXMgPSB7fTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleWRvd24uYmluZCh0aGlzKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwLmJpbmQodGhpcykpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdGhpcy5rZXlwcmVzcy5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmtleWRvd25FdmVudCA9IHt9O1xuICB0aGlzLmtleXVwRXZlbnQgPSB7fTtcblxuICB0aGlzLnByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcblxufTtcblxuUExBWUdST1VORC5LZXlib2FyZC5wcm90b3R5cGUgPSB7XG5cbiAga2V5Y29kZXM6IHtcbiAgICAzNzogXCJsZWZ0XCIsXG4gICAgMzg6IFwidXBcIixcbiAgICAzOTogXCJyaWdodFwiLFxuICAgIDQwOiBcImRvd25cIixcbiAgICA0NTogXCJpbnNlcnRcIixcbiAgICA0NjogXCJkZWxldGVcIixcbiAgICA4OiBcImJhY2tzcGFjZVwiLFxuICAgIDk6IFwidGFiXCIsXG4gICAgMTM6IFwiZW50ZXJcIixcbiAgICAxNjogXCJzaGlmdFwiLFxuICAgIDE3OiBcImN0cmxcIixcbiAgICAxODogXCJhbHRcIixcbiAgICAxOTogXCJwYXVzZVwiLFxuICAgIDIwOiBcImNhcHNsb2NrXCIsXG4gICAgMjc6IFwiZXNjYXBlXCIsXG4gICAgMzI6IFwic3BhY2VcIixcbiAgICAzMzogXCJwYWdldXBcIixcbiAgICAzNDogXCJwYWdlZG93blwiLFxuICAgIDM1OiBcImVuZFwiLFxuICAgIDM2OiBcImhvbWVcIixcbiAgICAxMTI6IFwiZjFcIixcbiAgICAxMTM6IFwiZjJcIixcbiAgICAxMTQ6IFwiZjNcIixcbiAgICAxMTU6IFwiZjRcIixcbiAgICAxMTY6IFwiZjVcIixcbiAgICAxMTc6IFwiZjZcIixcbiAgICAxMTg6IFwiZjdcIixcbiAgICAxMTk6IFwiZjhcIixcbiAgICAxMjA6IFwiZjlcIixcbiAgICAxMjE6IFwiZjEwXCIsXG4gICAgMTIyOiBcImYxMVwiLFxuICAgIDEyMzogXCJmMTJcIixcbiAgICAxNDQ6IFwibnVtbG9ja1wiLFxuICAgIDE0NTogXCJzY3JvbGxsb2NrXCIsXG4gICAgMTg2OiBcInNlbWljb2xvblwiLFxuICAgIDE4NzogXCJlcXVhbFwiLFxuICAgIDE4ODogXCJjb21tYVwiLFxuICAgIDE4OTogXCJkYXNoXCIsXG4gICAgMTkwOiBcInBlcmlvZFwiLFxuICAgIDE5MTogXCJzbGFzaFwiLFxuICAgIDE5MjogXCJncmF2ZWFjY2VudFwiLFxuICAgIDIxOTogXCJvcGVuYnJhY2tldFwiLFxuICAgIDIyMDogXCJiYWNrc2xhc2hcIixcbiAgICAyMjE6IFwiY2xvc2VicmFrZXRcIixcbiAgICAyMjI6IFwic2luZ2xlcXVvdGVcIlxuICB9LFxuXG4gIGtleXByZXNzOiBmdW5jdGlvbihlKSB7XG5cbiAgfSxcblxuICBrZXlkb3duOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkgdmFyIGtleU5hbWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgZWxzZSB2YXIga2V5TmFtZSA9IHRoaXMua2V5Y29kZXNbZS53aGljaF07XG5cbiAgICBpZiAodGhpcy5rZXlzW2tleU5hbWVdKSByZXR1cm47XG5cbiAgICB0aGlzLmtleWRvd25FdmVudC5rZXkgPSBrZXlOYW1lO1xuICAgIHRoaXMua2V5ZG93bkV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIHRoaXMua2V5c1trZXlOYW1lXSA9IHRydWU7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bkV2ZW50KTtcblxuICAgIGlmICh0aGlzLnByZXZlbnREZWZhdWx0ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgIGUua2V5Q29kZSA9IDA7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfSxcblxuICBrZXl1cDogZnVuY3Rpb24oZSkge1xuXG4gICAgaWYgKGUud2hpY2ggPj0gNDggJiYgZS53aGljaCA8PSA5MCkgdmFyIGtleU5hbWUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCk7XG4gICAgZWxzZSB2YXIga2V5TmFtZSA9IHRoaXMua2V5Y29kZXNbZS53aGljaF07XG5cbiAgICB0aGlzLmtleXVwRXZlbnQua2V5ID0ga2V5TmFtZTtcbiAgICB0aGlzLmtleXVwRXZlbnQub3JpZ2luYWwgPSBlO1xuXG4gICAgdGhpcy5rZXlzW2tleU5hbWVdID0gZmFsc2U7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJrZXl1cFwiLCB0aGlzLmtleXVwRXZlbnQpO1xuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuS2V5Ym9hcmQucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG5cblxuLyogZmlsZTogc3JjL1BvaW50ZXIuanMgKi9cblxuUExBWUdST1VORC5Qb2ludGVyID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgYXBwLm9uKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoc3RhcnQsIHRoaXMpO1xuICBhcHAub24oXCJ0b3VjaGVuZFwiLCB0aGlzLnRvdWNoZW5kLCB0aGlzKTtcbiAgYXBwLm9uKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2htb3ZlLCB0aGlzKTtcblxuICBhcHAub24oXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmUsIHRoaXMpO1xuICBhcHAub24oXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24sIHRoaXMpO1xuICBhcHAub24oXCJtb3VzZXVwXCIsIHRoaXMubW91c2V1cCwgdGhpcyk7XG5cbiAgdGhpcy5wb2ludGVycyA9IGFwcC5wb2ludGVycyA9IHt9O1xuXG59O1xuXG5QTEFZR1JPVU5ELlBvaW50ZXIucGx1Z2luID0gdHJ1ZTtcblxuUExBWUdST1VORC5Qb2ludGVyLnByb3RvdHlwZSA9IHtcblxuICB1cGRhdGVQb2ludGVyOiBmdW5jdGlvbihwb2ludGVyKSB7XG5cbiAgICB0aGlzLnBvaW50ZXJzW3BvaW50ZXIuaWRdID0gcG9pbnRlcjtcblxuICB9LFxuXG4gIHJlbW92ZVBvaW50ZXI6IGZ1bmN0aW9uKHBvaW50ZXIpIHtcblxuICAgIGRlbGV0ZSB0aGlzLnBvaW50ZXJzW3BvaW50ZXIuaWRdO1xuXG4gIH0sXG5cbiAgdG91Y2hzdGFydDogZnVuY3Rpb24oZSkge1xuXG4gICAgZS50b3VjaCA9IHRydWU7XG5cbiAgICB0aGlzLnVwZGF0ZVBvaW50ZXIoZSk7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVyZG93blwiLCBlKTtcblxuICB9LFxuXG4gIHRvdWNoZW5kOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnRvdWNoID0gdHJ1ZTtcblxuICAgIHRoaXMucmVtb3ZlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJ1cFwiLCBlKTtcblxuICB9LFxuXG4gIHRvdWNobW92ZTogZnVuY3Rpb24oZSkge1xuXG4gICAgZS50b3VjaCA9IHRydWU7XG5cbiAgICB0aGlzLnVwZGF0ZVBvaW50ZXIoZSk7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVybW92ZVwiLCBlKTtcblxuICB9LFxuXG4gIG1vdXNlbW92ZTogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5tb3VzZSA9IHRydWU7XG5cbiAgICB0aGlzLnVwZGF0ZVBvaW50ZXIoZSk7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVybW92ZVwiLCBlKTtcblxuICB9LFxuXG4gIG1vdXNlZG93bjogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5tb3VzZSA9IHRydWU7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVyZG93blwiLCBlKTtcblxuICB9LFxuXG4gIG1vdXNldXA6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUubW91c2UgPSB0cnVlO1xuXG4gICAgdGhpcy5hcHAuZW1pdEdsb2JhbEV2ZW50KFwicG9pbnRlcnVwXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2V3aGVlbDogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5tb3VzZSA9IHRydWU7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVyd2hlZWxcIiwgZSk7XG5cbiAgfVxuXG59O1xuXG4vKiBmaWxlOiBzcmMvTG9hZGVyLmpzICovXG5cbi8qIExvYWRlciAqL1xuXG5QTEFZR1JPVU5ELkxvYWRlciA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIFBMQVlHUk9VTkQuRXZlbnRzLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5yZXNldCgpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkxvYWRlci5wcm90b3R5cGUgPSB7XG5cbiAgLyogbG9hZGVyICovXG5cbiAgYWRkOiBmdW5jdGlvbihpZCkge1xuXG4gICAgdGhpcy5xdWV1ZSsrO1xuICAgIHRoaXMuY291bnQrKztcbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy50cmlnZ2VyKFwiYWRkXCIsIGlkKTtcblxuICAgIHJldHVybiBpZDtcblxuICB9LFxuXG4gIGVycm9yOiBmdW5jdGlvbihpZCkge1xuXG4gICAgdGhpcy50cmlnZ2VyKFwiZXJyb3JcIiwgaWQpO1xuXG4gIH0sXG5cbiAgc3VjY2VzczogZnVuY3Rpb24oaWQpIHtcblxuICAgIHRoaXMucXVldWUtLTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSAxIC0gdGhpcy5xdWV1ZSAvIHRoaXMuY291bnQ7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJsb2FkXCIsIGlkKTtcblxuICAgIGlmICh0aGlzLnF1ZXVlIDw9IDApIHtcbiAgICAgIHRoaXMudHJpZ2dlcihcInJlYWR5XCIpO1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMucXVldWUgPSAwO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuXG4gIH1cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuTG9hZGVyLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuLyogZmlsZTogc3JjL01vdXNlLmpzICovXG5cblBMQVlHUk9VTkQuTW91c2UgPSBmdW5jdGlvbihhcHAsIGVsZW1lbnQpIHtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIHRoaXMuYnV0dG9ucyA9IHt9O1xuXG4gIHRoaXMucHJldmVudENvbnRleHRNZW51ID0gdHJ1ZTtcblxuICB0aGlzLm1vdXNlbW92ZUV2ZW50ID0ge307XG4gIHRoaXMubW91c2Vkb3duRXZlbnQgPSB7fTtcbiAgdGhpcy5tb3VzZXVwRXZlbnQgPSB7fTtcbiAgdGhpcy5tb3VzZXdoZWVsRXZlbnQgPSB7fTtcblxuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZS5iaW5kKHRoaXMpKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duLmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMubW91c2V1cC5iaW5kKHRoaXMpKTtcblxuICB0aGlzLmVuYWJsZU1vdXNld2hlZWwoKTtcblxuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoc2VsZi5wcmV2ZW50Q29udGV4dE1lbnUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgZWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2sgPSBlbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jayB8fFxuICAgIGVsZW1lbnQubW96UmVxdWVzdFBvaW50ZXJMb2NrIHx8XG4gICAgZWxlbWVudC53ZWJraXRSZXF1ZXN0UG9pbnRlckxvY2s7XG5cbiAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrID0gZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrIHx8XG4gICAgZG9jdW1lbnQubW96RXhpdFBvaW50ZXJMb2NrIHx8XG4gICAgZG9jdW1lbnQud2Via2l0RXhpdFBvaW50ZXJMb2NrO1xuXG5cbiAgdGhpcy5oYW5kbGVSZXNpemUoKTtcbn07XG5cblBMQVlHUk9VTkQuTW91c2UucHJvdG90eXBlID0ge1xuXG4gIGxvY2s6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuICAgIHRoaXMuZWxlbWVudC5yZXF1ZXN0UG9pbnRlckxvY2soKTtcblxuICB9LFxuXG4gIHVubG9jazogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuXG4gIH0sXG5cbiAgZ2V0RWxlbWVudE9mZnNldDogZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgdmFyIG9mZnNldFggPSAwO1xuICAgIHZhciBvZmZzZXRZID0gMDtcblxuICAgIGRvIHtcbiAgICAgIG9mZnNldFggKz0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgb2Zmc2V0WSArPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG5cbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9mZnNldFgsXG4gICAgICB5OiBvZmZzZXRZXG4gICAgfTtcblxuICB9LFxuXG4gIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmVsZW1lbnRPZmZzZXQgPSB0aGlzLmdldEVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50KTtcblxuICB9LFxuXG4gIG1vdXNlbW92ZTogUExBWUdST1VORC5VdGlscy50aHJvdHRsZShmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLnggPSB0aGlzLm1vdXNlbW92ZUV2ZW50LnggPSAoZS5wYWdlWCAtIHRoaXMuZWxlbWVudE9mZnNldC54IC0gdGhpcy5hcHAub2Zmc2V0WCkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG4gICAgdGhpcy55ID0gdGhpcy5tb3VzZW1vdmVFdmVudC55ID0gKGUucGFnZVkgLSB0aGlzLmVsZW1lbnRPZmZzZXQueSAtIHRoaXMuYXBwLm9mZnNldFkpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuXG4gICAgdGhpcy5tb3VzZW1vdmVFdmVudC5vcmlnaW5hbCA9IGU7XG5cbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlRXZlbnQubW92ZW1lbnRYID0gZS5tb3ZlbWVudFggfHxcbiAgICAgICAgZS5tb3pNb3ZlbWVudFggfHxcbiAgICAgICAgZS53ZWJraXRNb3ZlbWVudFggfHxcbiAgICAgICAgMDtcblxuICAgICAgdGhpcy5tb3VzZW1vdmVFdmVudC5tb3ZlbWVudFkgPSBlLm1vdmVtZW50WSB8fFxuICAgICAgICBlLm1vek1vdmVtZW50WSB8fFxuICAgICAgICBlLndlYmtpdE1vdmVtZW50WSB8fFxuICAgICAgICAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFwcC5tb3VzZVRvVG91Y2gpIHtcbiAgICAgIC8vICAgICAgaWYgKHRoaXMubGVmdCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmVFdmVudC5pZCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlbW92ZUV2ZW50KTtcbiAgICAgIC8vICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZUV2ZW50LmlkID0gdGhpcy5tb3VzZW1vdmVFdmVudC5pZGVudGlmaWVyID0gMjU1O1xuICAgICAgdGhpcy50cmlnZ2VyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlRXZlbnQpO1xuICAgIH1cblxuICB9LCAxNiksXG5cbiAgbW91c2Vkb3duOiBmdW5jdGlvbihlKSB7XG5cbiAgICB2YXIgYnV0dG9uTmFtZSA9IFtcImxlZnRcIiwgXCJtaWRkbGVcIiwgXCJyaWdodFwiXVtlLmJ1dHRvbl07XG5cbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50LnggPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lng7XG4gICAgdGhpcy5tb3VzZWRvd25FdmVudC55ID0gdGhpcy5tb3VzZW1vdmVFdmVudC55O1xuICAgIHRoaXMubW91c2Vkb3duRXZlbnQuYnV0dG9uID0gYnV0dG9uTmFtZTtcbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIHRoaXNbYnV0dG9uTmFtZV0gPSB0cnVlO1xuXG4gICAgdGhpcy5tb3VzZWRvd25FdmVudC5pZCA9IHRoaXMubW91c2Vkb3duRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcblxuICAgIGlmICh0aGlzLmFwcC5tb3VzZVRvVG91Y2gpIHtcbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNobW92ZVwiLCB0aGlzLm1vdXNlZG93bkV2ZW50KTtcbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNoc3RhcnRcIiwgdGhpcy5tb3VzZWRvd25FdmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJpZ2dlcihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlZG93bkV2ZW50KTtcbiAgICB9XG5cbiAgfSxcblxuICBtb3VzZXVwOiBmdW5jdGlvbihlKSB7XG5cbiAgICB2YXIgYnV0dG9uTmFtZSA9IFtcImxlZnRcIiwgXCJtaWRkbGVcIiwgXCJyaWdodFwiXVtlLmJ1dHRvbl07XG5cbiAgICB0aGlzLm1vdXNldXBFdmVudC54ID0gdGhpcy5tb3VzZW1vdmVFdmVudC54O1xuICAgIHRoaXMubW91c2V1cEV2ZW50LnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgdGhpcy5tb3VzZXVwRXZlbnQuYnV0dG9uID0gYnV0dG9uTmFtZTtcbiAgICB0aGlzLm1vdXNldXBFdmVudC5vcmlnaW5hbCA9IGU7XG5cbiAgICB0aGlzLm1vdXNldXBFdmVudC5pZCA9IHRoaXMubW91c2V1cEV2ZW50LmlkZW50aWZpZXIgPSAyNTU7XG5cbiAgICBpZiAodGhpcy5hcHAubW91c2VUb1RvdWNoKSB7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNoZW5kXCIsIHRoaXMubW91c2V1cEV2ZW50KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMudHJpZ2dlcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgdGhpc1tidXR0b25OYW1lXSA9IGZhbHNlO1xuXG4gIH0sXG5cbiAgbW91c2V3aGVlbDogZnVuY3Rpb24oZSkge1xuXG4gICAgdGhpcy5tb3VzZXdoZWVsRXZlbnQueCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueDtcbiAgICB0aGlzLm1vdXNld2hlZWxFdmVudC55ID0gdGhpcy5tb3VzZW1vdmVFdmVudC55O1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50LmJ1dHRvbiA9IFtcIm5vbmVcIiwgXCJsZWZ0XCIsIFwibWlkZGxlXCIsIFwicmlnaHRcIl1bZS5idXR0b25dO1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50Lm9yaWdpbmFsID0gZTtcbiAgICB0aGlzLm1vdXNld2hlZWxFdmVudC5pZCA9IHRoaXMubW91c2V3aGVlbEV2ZW50LmlkZW50aWZpZXIgPSAyNTU7XG5cbiAgICB0aGlzW2UuYnV0dG9uXSA9IGZhbHNlO1xuXG4gICAgdGhpcy50cmlnZ2VyKFwibW91c2V3aGVlbFwiLCB0aGlzLm1vdXNld2hlZWxFdmVudCk7XG5cbiAgfSxcblxuXG4gIGVuYWJsZU1vdXNld2hlZWw6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGV2ZW50TmFtZXMgPSAnb253aGVlbCcgaW4gZG9jdW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IDkgPyBbJ3doZWVsJ10gOiBbJ21vdXNld2hlZWwnLCAnRG9tTW91c2VTY3JvbGwnLCAnTW96TW91c2VQaXhlbFNjcm9sbCddO1xuICAgIHZhciBjYWxsYmFjayA9IHRoaXMubW91c2V3aGVlbC5iaW5kKHRoaXMpO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZvciAodmFyIGkgPSBldmVudE5hbWVzLmxlbmd0aDsgaTspIHtcblxuICAgICAgc2VsZi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lc1stLWldLCBQTEFZR1JPVU5ELlV0aWxzLnRocm90dGxlKGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIG9yZ0V2ZW50ID0gZXZlbnQgfHwgd2luZG93LmV2ZW50LFxuICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgZGVsdGEgPSAwLFxuICAgICAgICAgIGRlbHRhWCA9IDAsXG4gICAgICAgICAgZGVsdGFZID0gMCxcbiAgICAgICAgICBhYnNEZWx0YSA9IDAsXG4gICAgICAgICAgYWJzRGVsdGFYWSA9IDAsXG4gICAgICAgICAgZm47XG5cbiAgICAgICAgb3JnRXZlbnQudHlwZSA9IFwibW91c2V3aGVlbFwiO1xuXG4gICAgICAgIC8vIE9sZCBzY2hvb2wgc2Nyb2xsd2hlZWwgZGVsdGFcbiAgICAgICAgaWYgKG9yZ0V2ZW50LndoZWVsRGVsdGEpIHtcbiAgICAgICAgICBkZWx0YSA9IG9yZ0V2ZW50LndoZWVsRGVsdGE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JnRXZlbnQuZGV0YWlsKSB7XG4gICAgICAgICAgZGVsdGEgPSBvcmdFdmVudC5kZXRhaWwgKiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5ldyBzY2hvb2wgd2hlZWwgZGVsdGEgKHdoZWVsIGV2ZW50KVxuICAgICAgICBpZiAob3JnRXZlbnQuZGVsdGFZKSB7XG4gICAgICAgICAgZGVsdGFZID0gb3JnRXZlbnQuZGVsdGFZICogLTE7XG4gICAgICAgICAgZGVsdGEgPSBkZWx0YVk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZWJraXRcbiAgICAgICAgaWYgKG9yZ0V2ZW50LndoZWVsRGVsdGFZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBkZWx0YVkgPSBvcmdFdmVudC53aGVlbERlbHRhWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBkZWx0YSA/IGRlbHRhIDogZGVsdGFZO1xuXG4gICAgICAgIHNlbGYubW91c2V3aGVlbEV2ZW50LnggPSBzZWxmLm1vdXNlbW92ZUV2ZW50Lng7XG4gICAgICAgIHNlbGYubW91c2V3aGVlbEV2ZW50LnkgPSBzZWxmLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgICAgIHNlbGYubW91c2V3aGVlbEV2ZW50LmRlbHRhID0gcmVzdWx0IC8gTWF0aC5hYnMocmVzdWx0KTtcbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQub3JpZ2luYWwgPSBvcmdFdmVudDtcblxuICAgICAgICBjYWxsYmFjayhzZWxmLm1vdXNld2hlZWxFdmVudCk7XG5cbiAgICAgICAgb3JnRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgfSwgNDApLCBmYWxzZSk7XG4gICAgfVxuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5Nb3VzZS5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cbi8qIGZpbGU6IHNyYy9Tb3VuZC5qcyAqL1xuXG5QTEFZR1JPVU5ELlNvdW5kID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdmFyIGF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCB8fCB3aW5kb3cubW96QXVkaW9Db250ZXh0O1xuXG4gIGlmIChhdWRpb0NvbnRleHQpIHtcblxuICAgIGlmICghUExBWUdST1VORC5hdWRpb0NvbnRleHQpIFBMQVlHUk9VTkQuYXVkaW9Db250ZXh0ID0gbmV3IGF1ZGlvQ29udGV4dDtcblxuICAgIGFwcC5hdWRpb0NvbnRleHQgPSBQTEFZR1JPVU5ELmF1ZGlvQ29udGV4dDtcbiAgICBhcHAuc291bmQgPSBuZXcgUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJKGFwcCwgYXBwLmF1ZGlvQ29udGV4dCk7XG4gICAgYXBwLm11c2ljID0gbmV3IFBMQVlHUk9VTkQuU291bmRXZWJBdWRpb0FQSShhcHAsIGFwcC5hdWRpb0NvbnRleHQpO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBhcHAuc291bmQgPSBuZXcgUExBWUdST1VORC5Tb3VuZEF1ZGlvKGFwcCk7XG4gICAgYXBwLm11c2ljID0gbmV3IFBMQVlHUk9VTkQuU291bmRBdWRpbyhhcHApO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUucGxheVNvdW5kID0gZnVuY3Rpb24oa2V5LCBsb29wKSB7XG5cbiAgcmV0dXJuIHRoaXMuc291bmQucGxheShrZXksIGxvb3ApO1xuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5zdG9wU291bmQgPSBmdW5jdGlvbihzb3VuZCkge1xuXG4gIHRoaXMuc291bmQuc3RvcChzb3VuZCk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLmxvYWRTb3VuZCA9IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB0aGlzLmxvYWRTb3VuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxufTtcblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZFNvdW5kcyA9IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgLyogcG9seW1vcnBoaXNtIGF0IGl0cyBmaW5lc3QgKi9cblxuICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhcmcpIHRoaXMubG9hZFNvdW5kcyhhcmdba2V5XSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3VuZC5sb2FkKGFyZyk7XG4gICAgfVxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Tb3VuZFdlYkF1ZGlvQVBJLmpzICovXG5cblBMQVlHUk9VTkQuU291bmRXZWJBdWRpb0FQSSA9IGZ1bmN0aW9uKGFwcCwgYXVkaW9Db250ZXh0KSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgdmFyIGNhblBsYXlNcDMgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZShcImF1ZGlvL21wM1wiKTtcbiAgdmFyIGNhblBsYXlPZ2cgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpO1xuXG4gIGlmICh0aGlzLmFwcC5wcmVmZXJlZEF1ZGlvRm9ybWF0ID09PSBcIm1wM1wiKSB7XG5cbiAgICBpZiAoY2FuUGxheU1wMykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcblxuICB9IGVsc2Uge1xuXG4gICAgaWYgKGNhblBsYXlPZ2cpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG5cbiAgfVxuXG4gIHRoaXMuY29udGV4dCA9IGF1ZGlvQ29udGV4dDtcblxuICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKVxuICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICB0aGlzLmNvbXByZXNzb3IgPSB0aGlzLmNvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gIHRoaXMuY29tcHJlc3Nvci5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuXG4gIHRoaXMub3V0cHV0ID0gdGhpcy5nYWluTm9kZTtcblxuICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAxLjA7XG5cbiAgdGhpcy5wb29sID0gW107XG4gIHRoaXMudm9sdW1lID0gMS4wO1xuXG4gIHRoaXMuc2V0TWFzdGVyUG9zaXRpb24oMCwgMCwgMCk7XG5cbiAgdGhpcy5sb29wcyA9IFtdO1xuXG4gIHRoaXMuYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuU291bmRXZWJBdWRpb0FQSS5wcm90b3R5cGUgPSB7XG5cbiAgYnVmZmVyczoge30sXG4gIGFsaWFzZXM6IHt9LFxuXG4gIGFsaWFzOiBmdW5jdGlvbihhbGlhcywgc291cmNlLCB2b2x1bWUsIHJhdGUpIHtcblxuICAgIHRoaXMuYWxpYXNlc1thbGlhc10gPSB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgcmF0ZTogcmF0ZVxuICAgIH07XG5cbiAgfSxcblxuICBzZXRNYXN0ZXI6IGZ1bmN0aW9uKHZvbHVtZSkge1xuXG4gICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG5cbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2b2x1bWU7XG5cbiAgfSxcblxuICBsb2FkOiBmdW5jdGlvbihmaWxlKSB7XG5cbiAgICB2YXIgZW50cnkgPSB0aGlzLmFwcC5nZXRBc3NldEVudHJ5KGZpbGUsIFwic291bmRzXCIsIHRoaXMuYXVkaW9Gb3JtYXQpO1xuXG4gICAgdmFyIHNhbXBsZXIgPSB0aGlzO1xuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlbnRyeS51cmwsIHRydWUpO1xuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgdmFyIGlkID0gdGhpcy5hcHAubG9hZGVyLmFkZChlbnRyeS51cmwpO1xuXG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgc2FtcGxlci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YSh0aGlzLnJlc3BvbnNlLCBmdW5jdGlvbihkZWNvZGVkQnVmZmVyKSB7XG4gICAgICAgIHNhbXBsZXIuYnVmZmVyc1tlbnRyeS5rZXldID0gZGVjb2RlZEJ1ZmZlcjtcbiAgICAgICAgc2FtcGxlci5hcHAubG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgfSxcblxuICBjbGVhbkFycmF5OiBmdW5jdGlvbihhcnJheSwgcHJvcGVydHkpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYXJyYXkubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChhcnJheVtpXSA9PT0gbnVsbCB8fCAocHJvcGVydHkgJiYgYXJyYXlbaV1bcHJvcGVydHldKSkge1xuICAgICAgICBhcnJheS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldE1hc3RlclBvc2l0aW9uOiBmdW5jdGlvbih4LCB5LCB6KSB7XG5cbiAgICB0aGlzLm1hc3RlclBvc2l0aW9uID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHksXG4gICAgICB6OiB6XG4gICAgfTtcblxuICAgIHRoaXMuY29udGV4dC5saXN0ZW5lci5zZXRQb3NpdGlvbih4LCB5LCB6KVxuICAgICAgLy8gdGhpcy5jb250ZXh0Lmxpc3RlbmVyLnNldE9yaWVudGF0aW9uKDAsIDAsIC0xLCAwLCAxLCAwKTtcbiAgICAgIC8vIHRoaXMuY29udGV4dC5saXN0ZW5lci5kb3BwbGVyRmFjdG9yID0gMTtcbiAgICAgIC8vIHRoaXMuY29udGV4dC5saXN0ZW5lci5zcGVlZE9mU291bmQgPSAzNDMuMztcbiAgfSxcblxuICBnZXRTb3VuZEJ1ZmZlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBvb2wubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIGJ1ZmZlciwgZ2FpbiwgcGFubmVyO1xuXG4gICAgICAgIHZhciBub2RlcyA9IFtcbiAgICAgICAgICBidWZmZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCksXG4gICAgICAgICAgZ2FpbiA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCksXG4gICAgICAgICAgcGFubmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZVBhbm5lcigpXG4gICAgICAgIF07XG5cbiAgICAgICAgcGFubmVyLmRpc3RhbmNlTW9kZWwgPSBcImxpbmVhclwiO1xuXG4gICAgICAgIC8vIDEgLSByb2xsb2ZmRmFjdG9yICogKGRpc3RhbmNlIC0gcmVmRGlzdGFuY2UpIC8gKG1heERpc3RhbmNlIC0gcmVmRGlzdGFuY2UpXG4gICAgICAgIC8vIHJlZkRpc3RhbmNlIC8gKHJlZkRpc3RhbmNlICsgcm9sbG9mZkZhY3RvciAqIChkaXN0YW5jZSAtIHJlZkRpc3RhbmNlKSlcbiAgICAgICAgcGFubmVyLnJlZkRpc3RhbmNlID0gMTtcbiAgICAgICAgcGFubmVyLm1heERpc3RhbmNlID0gNjAwO1xuICAgICAgICBwYW5uZXIucm9sbG9mZkZhY3RvciA9IDEuMDtcblxuXG4gICAgICAgIC8vIHBhbm5lci5zZXRPcmllbnRhdGlvbigtMSwgLTEsIDApO1xuXG4gICAgICAgIHRoaXMucG9vbC5wdXNoKG5vZGVzKTtcblxuICAgICAgICBub2Rlc1swXS5jb25uZWN0KG5vZGVzWzFdKTtcbiAgICAgICAgLy8gbm9kZXNbMV0uY29ubmVjdChub2Rlc1syXSk7XG4gICAgICAgIG5vZGVzWzFdLmNvbm5lY3QodGhpcy5vdXRwdXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnBvb2wucG9wKCk7XG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24obmFtZSwgbG9vcCkge1xuXG4gICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhc2VzW25hbWVdO1xuXG4gICAgdmFyIG5vZGVzID0gdGhpcy5nZXRTb3VuZEJ1ZmZlcigpO1xuXG4gICAgaWYgKGFsaWFzKSBuYW1lID0gYWxpYXMuc291cmNlO1xuXG4gICAgYnVmZmVyU291cmNlID0gbm9kZXNbMF07XG4gICAgYnVmZmVyU291cmNlLmdhaW5Ob2RlID0gbm9kZXNbMV07XG4gICAgYnVmZmVyU291cmNlLnBhbm5lck5vZGUgPSBub2Rlc1syXTtcbiAgICBidWZmZXJTb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXJzW25hbWVdO1xuICAgIGJ1ZmZlclNvdXJjZS5sb29wID0gbG9vcCB8fCBmYWxzZTtcbiAgICBidWZmZXJTb3VyY2Uua2V5ID0gbmFtZTtcblxuICAgIGJ1ZmZlclNvdXJjZS5hbGlhcyA9IGFsaWFzO1xuXG4gICAgdGhpcy5zZXRWb2x1bWUoYnVmZmVyU291cmNlLCAxLjApO1xuICAgIHRoaXMuc2V0UGxheWJhY2tSYXRlKGJ1ZmZlclNvdXJjZSwgMS4wKTtcblxuICAgIGlmICh0aGlzLmxvb3ApIHtcbiAgICAgIC8vICBidWZmZXJTb3VyY2UubG9vcFN0YXJ0ID0gdGhpcy5sb29wU3RhcnQ7XG4gICAgICAvLyBidWZmZXJTb3VyY2UubG9vcEVuZCA9IHRoaXMubG9vcEVuZDtcbiAgICB9XG5cblxuICAgIGJ1ZmZlclNvdXJjZS5zdGFydCgwKTtcblxuICAgIGJ1ZmZlclNvdXJjZS52b2x1bWVMaW1pdCA9IDE7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKGJ1ZmZlclNvdXJjZSwgdGhpcy5tYXN0ZXJQb3NpdGlvbi54LCB0aGlzLm1hc3RlclBvc2l0aW9uLnksIHRoaXMubWFzdGVyUG9zaXRpb24ueik7XG5cbiAgICByZXR1cm4gYnVmZmVyU291cmNlO1xuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKHdoYXQpIHtcblxuICAgIGlmICghd2hhdCkgcmV0dXJuO1xuXG4gICAgd2hhdC5zdG9wKDApO1xuXG4gIH0sXG5cbiAgc2V0UGxheWJhY2tSYXRlOiBmdW5jdGlvbihzb3VuZCwgcmF0ZSkge1xuXG4gICAgaWYgKCFzb3VuZCkgcmV0dXJuO1xuXG4gICAgaWYgKHNvdW5kLmFsaWFzKSByYXRlICo9IHNvdW5kLmFsaWFzLnJhdGU7XG5cbiAgICByZXR1cm4gc291bmQucGxheWJhY2tSYXRlLnZhbHVlID0gcmF0ZTtcbiAgfSxcblxuICBzZXRQb3NpdGlvbjogZnVuY3Rpb24oc291bmQsIHgsIHksIHopIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHNvdW5kLnBhbm5lck5vZGUuc2V0UG9zaXRpb24oeCwgeSB8fCAwLCB6IHx8IDApO1xuICB9LFxuXG4gIHNldFZlbG9jaXR5OiBmdW5jdGlvbihzb3VuZCwgeCwgeSwgeikge1xuXG4gICAgaWYgKCFzb3VuZCkgcmV0dXJuO1xuXG4gICAgc291bmQucGFubmVyTm9kZS5zZXRQb3NpdGlvbih4LCB5IHx8IDAsIHogfHwgMCk7XG5cbiAgfSxcblxuICBnZXRWb2x1bWU6IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICByZXR1cm4gc291bmQuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZTtcblxuICB9LFxuXG4gIHNldFZvbHVtZTogZnVuY3Rpb24oc291bmQsIHZvbHVtZSkge1xuXG4gICAgaWYgKCFzb3VuZCkgcmV0dXJuO1xuXG4gICAgaWYgKHNvdW5kLmFsaWFzKSB2b2x1bWUgKj0gc291bmQuYWxpYXMudm9sdW1lO1xuXG4gICAgcmV0dXJuIHNvdW5kLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSBNYXRoLm1heCgwLCB2b2x1bWUpO1xuICB9LFxuXG4gIGZhZGVPdXQ6IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBzb3VuZC5mYWRlT3V0ID0gdHJ1ZTtcblxuICAgIHRoaXMubG9vcHMucHVzaChzb3VuZCk7XG5cbiAgICByZXR1cm4gc291bmQ7XG5cbiAgfSxcblxuICBmYWRlSW46IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBzb3VuZC5mYWRlSW4gPSB0cnVlO1xuXG4gICAgdGhpcy5sb29wcy5wdXNoKHNvdW5kKTtcbiAgICB0aGlzLnNldFZvbHVtZShzb3VuZCwgMCk7XG5cblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubG9vcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGxvb3AgPSB0aGlzLmxvb3BzW2ldO1xuXG4gICAgICBpZiAobG9vcC5mYWRlSW4pIHtcbiAgICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lKGxvb3ApO1xuICAgICAgICB2b2x1bWUgPSB0aGlzLnNldFZvbHVtZShsb29wLCBNYXRoLm1pbigxLjAsIHZvbHVtZSArIGRlbHRhICogMC41KSk7XG5cbiAgICAgICAgaWYgKHZvbHVtZSA+PSAxLjApIHtcbiAgICAgICAgICB0aGlzLmxvb3BzLnNwbGljZShpLS0sIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb29wLmZhZGVPdXQpIHtcbiAgICAgICAgdmFyIHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lKGxvb3ApO1xuICAgICAgICB2b2x1bWUgPSB0aGlzLnNldFZvbHVtZShsb29wLCBNYXRoLm1pbigxLjAsIHZvbHVtZSAtIGRlbHRhICogMC41KSk7XG5cbiAgICAgICAgaWYgKHZvbHVtZSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5sb29wcy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICB0aGlzLnN0b3AobG9vcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Tb3VuZEF1ZGlvLmpzICovXG5cblBMQVlHUk9VTkQuU291bmRBdWRpbyA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHZhciBjYW5QbGF5TXAzID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoXCJhdWRpby9tcDNcIik7XG4gIHZhciBjYW5QbGF5T2dnID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKTtcblxuICBpZiAodGhpcy5hcHAucHJlZmVyZWRBdWRpb0Zvcm1hdCA9PT0gXCJtcDNcIikge1xuXG4gICAgaWYgKGNhblBsYXlNcDMpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm1wM1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwib2dnXCI7XG5cbiAgfSBlbHNlIHtcblxuICAgIGlmIChjYW5QbGF5T2dnKSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcbiAgICBlbHNlIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm1wM1wiO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5Tb3VuZEF1ZGlvLnByb3RvdHlwZSA9IHtcblxuICBzYW1wbGVzOiB7fSxcblxuICBzZXRNYXN0ZXI6IGZ1bmN0aW9uKHZvbHVtZSkge1xuXG4gICAgdGhpcy52b2x1bWUgPSB2b2x1bWU7XG5cbiAgfSxcblxuICBzZXRNYXN0ZXJQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cbiAgfSxcblxuICBzZXRQb3NpdGlvbjogZnVuY3Rpb24oeCwgeSwgeikge1xuICAgIHJldHVybjtcbiAgfSxcblxuICBsb2FkOiBmdW5jdGlvbihmaWxlKSB7XG5cbiAgICB2YXIgdXJsID0gXCJzb3VuZHMvXCIgKyBmaWxlICsgXCIuXCIgKyB0aGlzLmF1ZGlvRm9ybWF0O1xuXG4gICAgdmFyIGxvYWRlciA9IHRoaXMuYXBwLmxvYWRlcjtcblxuICAgIHRoaXMuYXBwLmxvYWRlci5hZGQodXJsKTtcblxuICAgIHZhciBhdWRpbyA9IHRoaXMuc2FtcGxlc1tmaWxlXSA9IG5ldyBBdWRpbztcblxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZGVyLnN1Y2Nlc3ModXJsKTtcbiAgICB9KTtcblxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRlci5lcnJvcih1cmwpO1xuICAgIH0pO1xuXG4gICAgYXVkaW8uc3JjID0gdXJsO1xuXG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24oa2V5LCBsb29wKSB7XG5cbiAgICB2YXIgc291bmQgPSB0aGlzLnNhbXBsZXNba2V5XTtcblxuICAgIHNvdW5kLmN1cnJlbnRUaW1lID0gMDtcbiAgICBzb3VuZC5sb29wID0gbG9vcDtcbiAgICBzb3VuZC5wbGF5KCk7XG5cbiAgICByZXR1cm4gc291bmQ7XG5cbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbih3aGF0KSB7XG5cbiAgICBpZiAoIXdoYXQpIHJldHVybjtcblxuICAgIHdoYXQucGF1c2UoKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgfSxcblxuICBzZXRQbGF5YmFja1JhdGU6IGZ1bmN0aW9uKHNvdW5kLCByYXRlKSB7XG5cbiAgICByZXR1cm47XG4gIH0sXG5cbiAgc2V0Vm9sdW1lOiBmdW5jdGlvbihzb3VuZCwgdm9sdW1lKSB7XG5cbiAgICBzb3VuZC52b2x1bWUgPSB2b2x1bWUgKiB0aGlzLnZvbHVtZTtcblxuICB9LFxuXG4gIHNldFBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Ub3VjaC5qcyAqL1xuXG5QTEFZR1JPVU5ELlRvdWNoID0gZnVuY3Rpb24oYXBwLCBlbGVtZW50KSB7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIHRoaXMuYnV0dG9ucyA9IHt9O1xuXG4gIHRoaXMudG91Y2hlcyA9IHt9O1xuXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2htb3ZlLmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2hzdGFydC5iaW5kKHRoaXMpKTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaGVuZC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5Ub3VjaC5wcm90b3R5cGUgPSB7XG5cbiAgZ2V0RWxlbWVudE9mZnNldDogZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgdmFyIG9mZnNldFggPSAwO1xuICAgIHZhciBvZmZzZXRZID0gMDtcblxuICAgIGRvIHtcbiAgICAgIG9mZnNldFggKz0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgICAgb2Zmc2V0WSArPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICB9XG5cbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IG9mZnNldFgsXG4gICAgICB5OiBvZmZzZXRZXG4gICAgfTtcblxuICB9LFxuXG4gIGhhbmRsZVJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmVsZW1lbnRPZmZzZXQgPSB0aGlzLmdldEVsZW1lbnRPZmZzZXQodGhpcy5lbGVtZW50KTtcblxuICB9LFxuXG4gIHRvdWNobW92ZTogZnVuY3Rpb24oZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG5cbiAgICAgIHRvdWNobW92ZUV2ZW50ID0ge31cblxuICAgICAgdGhpcy54ID0gdG91Y2htb3ZlRXZlbnQueCA9ICh0b3VjaC5wYWdlWCAtIHRoaXMuZWxlbWVudE9mZnNldC54IC0gdGhpcy5hcHAub2Zmc2V0WCkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG4gICAgICB0aGlzLnkgPSB0b3VjaG1vdmVFdmVudC55ID0gKHRvdWNoLnBhZ2VZIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnkgLSB0aGlzLmFwcC5vZmZzZXRZKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcblxuICAgICAgdG91Y2htb3ZlRXZlbnQub3JpZ2luYWwgPSB0b3VjaDtcbiAgICAgIHRvdWNobW92ZUV2ZW50LmlkID0gdG91Y2htb3ZlRXZlbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cbiAgICAgIHRoaXMudG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXS54ID0gdG91Y2htb3ZlRXZlbnQueDtcbiAgICAgIHRoaXMudG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXS55ID0gdG91Y2htb3ZlRXZlbnQueTtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2htb3ZlXCIsIHRvdWNobW92ZUV2ZW50KTtcblxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9LFxuXG4gIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzW2ldO1xuXG4gICAgICB2YXIgdG91Y2hzdGFydEV2ZW50ID0ge31cblxuICAgICAgdGhpcy54ID0gdG91Y2hzdGFydEV2ZW50LnggPSAodG91Y2gucGFnZVggLSB0aGlzLmVsZW1lbnRPZmZzZXQueCAtIHRoaXMuYXBwLm9mZnNldFgpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuICAgICAgdGhpcy55ID0gdG91Y2hzdGFydEV2ZW50LnkgPSAodG91Y2gucGFnZVkgLSB0aGlzLmVsZW1lbnRPZmZzZXQueSAtIHRoaXMuYXBwLm9mZnNldFkpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuXG4gICAgICB0b3VjaHN0YXJ0RXZlbnQub3JpZ2luYWwgPSBlLnRvdWNoO1xuICAgICAgdG91Y2hzdGFydEV2ZW50LmlkID0gdG91Y2hzdGFydEV2ZW50LmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG4gICAgICB0aGlzLnRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl0gPSB7XG4gICAgICAgIHg6IHRvdWNoc3RhcnRFdmVudC54LFxuICAgICAgICB5OiB0b3VjaHN0YXJ0RXZlbnQueVxuICAgICAgfTtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2hzdGFydFwiLCB0b3VjaHN0YXJ0RXZlbnQpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH0sXG5cbiAgdG91Y2hlbmQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzW2ldO1xuICAgICAgdmFyIHRvdWNoZW5kRXZlbnQgPSB7fTtcblxuICAgICAgdG91Y2hlbmRFdmVudC54ID0gKHRvdWNoLnBhZ2VYIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnggLSB0aGlzLmFwcC5vZmZzZXRYKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcbiAgICAgIHRvdWNoZW5kRXZlbnQueSA9ICh0b3VjaC5wYWdlWSAtIHRoaXMuZWxlbWVudE9mZnNldC55IC0gdGhpcy5hcHAub2Zmc2V0WSkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG5cbiAgICAgIHRvdWNoZW5kRXZlbnQub3JpZ2luYWwgPSB0b3VjaDtcbiAgICAgIHRvdWNoZW5kRXZlbnQuaWQgPSB0b3VjaGVuZEV2ZW50LmlkZW50aWZpZXIgPSB0b3VjaC5pZGVudGlmaWVyO1xuXG4gICAgICBkZWxldGUgdGhpcy50b3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0b3VjaGVuZFwiLCB0b3VjaGVuZEV2ZW50KTtcblxuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuVG91Y2gucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG4vKiBmaWxlOiBzcmMvVHdlZW4uanMgKi9cblxuUExBWUdST1VORC5Ud2VlbiA9IGZ1bmN0aW9uKG1hbmFnZXIsIGNvbnRleHQpIHtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgUExBWUdST1VORC5VdGlscy5leHRlbmQodGhpcywge1xuXG4gICAgYWN0aW9uczogW10sXG4gICAgaW5kZXg6IC0xLFxuXG4gICAgcHJldkVhc2luZzogXCIwNDVcIixcbiAgICBwcmV2RHVyYXRpb246IDAuNVxuXG4gIH0pO1xuXG4gIHRoaXMuY3VycmVudCA9IGZhbHNlO1xuXG59O1xuXG5QTEFZR1JPVU5ELlR3ZWVuLnByb3RvdHlwZSA9IHtcblxuICBhZGQ6IGZ1bmN0aW9uKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcblxuICAgIGlmIChkdXJhdGlvbikgdGhpcy5wcmV2RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICBlbHNlIGR1cmF0aW9uID0gMC41O1xuICAgIGlmIChlYXNpbmcpIHRoaXMucHJldkVhc2luZyA9IGVhc2luZztcbiAgICBlbHNlIGVhc2luZyA9IFwiMDQ1XCI7XG5cbiAgICB0aGlzLmFjdGlvbnMucHVzaChbcHJvcGVydGllcywgZHVyYXRpb24sIGVhc2luZ10pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBkaXNjYXJkOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubWFuYWdlci5kaXNjYXJkKHRoaXMuY29udGV4dCwgdGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHRvOiBmdW5jdGlvbihwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNpbmcpO1xuICB9LFxuXG4gIGxvb3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb29wZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICByZXBlYXQ6IGZ1bmN0aW9uKHRpbWVzKSB7XG5cbiAgICB0aGlzLmFjdGlvbnMucHVzaChbXCJyZXBlYXRcIiwgdGltZXNdKTtcblxuICB9LFxuXG4gIHdhaXQ6IGZ1bmN0aW9uKHRpbWUpIHtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKFtcIndhaXRcIiwgdGltZV0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBkZWxheTogZnVuY3Rpb24odGltZSkge1xuXG4gICAgdGhpcy5hY3Rpb25zLnB1c2goW1wid2FpdFwiLCB0aW1lXSk7XG5cbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubWFuYWdlci5yZW1vdmUodGhpcyk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHBsYXk6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5tYW5hZ2VyLmFkZCh0aGlzKTtcblxuICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cblxuICBlbmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGxhc3RBbmltYXRpb25JbmRleCA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB0aGlzLmFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5hY3Rpb25zW2ldWzBdID09PSBcIm9iamVjdFwiKSBsYXN0QW5pbWF0aW9uSW5kZXggPSBpO1xuICAgIH1cblxuICAgIHRoaXMuaW5kZXggPSBsYXN0QW5pbWF0aW9uSW5kZXggLSAxO1xuICAgIHRoaXMubmV4dCgpO1xuICAgIHRoaXMuZGVsdGEgPSB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RlcCgwKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgZm9yd2FyZDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmRlbHRhID0gdGhpcy5kdXJhdGlvbjtcbiAgICB0aGlzLnN0ZXAoMCk7XG5cbiAgfSxcblxuICByZXdpbmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgdGhpcy5zdGVwKDApO1xuXG4gIH0sXG5cbiAgbmV4dDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmRlbHRhID0gMDtcblxuICAgIHRoaXMuaW5kZXgrKztcblxuICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMuYWN0aW9ucy5sZW5ndGgpIHtcblxuICAgICAgaWYgKHRoaXMubG9vcGVkKSB7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKFwibG9vcFwiLCB7XG4gICAgICAgICAgdHdlZW46IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMudHJpZ2dlcihcImZpbmlzaGVkXCIsIHtcbiAgICAgICAgICB0d2VlbjogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuYWN0aW9uc1t0aGlzLmluZGV4XTtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRbMF0gPT09IFwid2FpdFwiKSB7XG5cbiAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmN1cnJlbnRbMV07XG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBcIndhaXRcIjtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIGNhbGN1bGF0ZSBjaGFuZ2VzICovXG5cbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5jdXJyZW50WzBdO1xuXG4gICAgICAvKiBrZWVwIGtleXMgYXMgYXJyYXkgZm9yIDAuMDAwMSUgcGVyZm9ybWFuY2UgYm9vc3QgKi9cblxuICAgICAgdGhpcy5rZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICAgIHRoaXMuY2hhbmdlID0gW107XG4gICAgICB0aGlzLmJlZm9yZSA9IFtdO1xuICAgICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5rZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmtleXNbaV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRleHRba2V5XSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHRoaXMuYmVmb3JlLnB1c2godGhpcy5jb250ZXh0W2tleV0pO1xuICAgICAgICAgIHRoaXMuY2hhbmdlLnB1c2gocHJvcGVydGllc1trZXldIC0gdGhpcy5jb250ZXh0W2tleV0pO1xuICAgICAgICAgIHRoaXMudHlwZXMucHVzaCgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgYmVmb3JlID0gY3EuY29sb3IodGhpcy5jb250ZXh0W2tleV0pO1xuXG4gICAgICAgICAgdGhpcy5iZWZvcmUucHVzaChiZWZvcmUpO1xuXG4gICAgICAgICAgdmFyIGFmdGVyID0gY3EuY29sb3IocHJvcGVydGllc1trZXldKTtcblxuICAgICAgICAgIHZhciB0ZW1wID0gW107XG5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgdGVtcC5wdXNoKGFmdGVyW2pdIC0gYmVmb3JlW2pdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNoYW5nZS5wdXNoKHRlbXApO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKDEpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50QWN0aW9uID0gXCJhbmltYXRlXCI7XG5cbiAgICAgIHRoaXMuZHVyYXRpb24gPSB0aGlzLmN1cnJlbnRbMV07XG4gICAgICB0aGlzLmVhc2luZyA9IHRoaXMuY3VycmVudFsyXTtcblxuICAgIH1cblxuXG4gIH0sXG5cbiAgcHJldjogZnVuY3Rpb24oKSB7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgdGhpcy5kZWx0YSArPSBkZWx0YTtcblxuICAgIGlmICghdGhpcy5jdXJyZW50KSB0aGlzLm5leHQoKTtcblxuICAgIHN3aXRjaCAodGhpcy5jdXJyZW50QWN0aW9uKSB7XG5cbiAgICAgIGNhc2UgXCJhbmltYXRlXCI6XG4gICAgICAgIHRoaXMuZG9BbmltYXRlKGRlbHRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ3YWl0XCI6XG4gICAgICAgIHRoaXMuZG9XYWl0KGRlbHRhKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbnN0ZXApIHRoaXMub25zdGVwKHRoaXMuY29udGV4dCk7XG5cbiAgfSxcblxuICBkb0FuaW1hdGU6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICB0aGlzLnByb2dyZXNzID0gTWF0aC5taW4oMSwgdGhpcy5kZWx0YSAvIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgdmFyIG1vZCA9IFBMQVlHUk9VTkQuVXRpbHMuZWFzZSh0aGlzLnByb2dyZXNzLCB0aGlzLmVhc2luZyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua2V5cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIga2V5ID0gdGhpcy5rZXlzW2ldO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMudHlwZXNbaV0pIHtcblxuICAgICAgICAvKiBudW1iZXIgKi9cblxuICAgICAgICBjYXNlIDA6XG5cbiAgICAgICAgICB0aGlzLmNvbnRleHRba2V5XSA9IHRoaXMuYmVmb3JlW2ldICsgdGhpcy5jaGFuZ2VbaV0gKiBtb2Q7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIC8qIGNvbG9yICovXG5cbiAgICAgICAgY2FzZSAxOlxuXG4gICAgICAgICAgdmFyIGNoYW5nZSA9IHRoaXMuY2hhbmdlW2ldO1xuICAgICAgICAgIHZhciBiZWZvcmUgPSB0aGlzLmJlZm9yZVtpXTtcbiAgICAgICAgICB2YXIgY29sb3IgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICBjb2xvci5wdXNoKGJlZm9yZVtqXSArIGNoYW5nZVtqXSAqIG1vZCB8IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY29udGV4dFtrZXldID0gXCJyZ2IoXCIgKyBjb2xvci5qb2luKFwiLFwiKSArIFwiKVwiO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgZG9XYWl0OiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKHRoaXMuZGVsdGEgPj0gdGhpcy5kdXJhdGlvbikgdGhpcy5uZXh0KCk7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELlR3ZWVuLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuUExBWUdST1VORC5Ud2Vlbk1hbmFnZXIgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLnR3ZWVucyA9IFtdO1xuXG4gIGlmIChhcHApIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLmFwcC50d2VlbiA9IHRoaXMudHdlZW4uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRoaXMuZGVsdGEgPSAwO1xuXG4gIHRoaXMuYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuVHdlZW5NYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICBkZWZhdWx0RWFzaW5nOiBcIjEyOFwiLFxuXG4gIGRpc2NhcmQ6IGZ1bmN0aW9uKG9iamVjdCwgc2FmZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnR3ZWVucy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgdHdlZW4gPSB0aGlzLnR3ZWVuc1tpXTtcblxuICAgICAgaWYgKHR3ZWVuLmNvbnRleHQgPT09IG9iamVjdCAmJiB0d2VlbiAhPT0gc2FmZSkgdGhpcy5yZW1vdmUodHdlZW4pO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgdHdlZW46IGZ1bmN0aW9uKGNvbnRleHQpIHtcblxuICAgIHZhciB0d2VlbiA9IG5ldyBQTEFZR1JPVU5ELlR3ZWVuKHRoaXMsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQodHdlZW4pO1xuXG4gICAgcmV0dXJuIHR3ZWVuO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIHRoaXMuZGVsdGEgKz0gZGVsdGE7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHdlZW5zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0d2VlbiA9IHRoaXMudHdlZW5zW2ldO1xuXG4gICAgICBpZiAoIXR3ZWVuLl9yZW1vdmUpIHR3ZWVuLnN0ZXAoZGVsdGEpO1xuXG4gICAgICBpZiAodHdlZW4uX3JlbW92ZSkgdGhpcy50d2VlbnMuc3BsaWNlKGktLSwgMSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBhZGQ6IGZ1bmN0aW9uKHR3ZWVuKSB7XG5cbiAgICB0d2Vlbi5fcmVtb3ZlID0gZmFsc2U7XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLnR3ZWVucy5pbmRleE9mKHR3ZWVuKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHRoaXMudHdlZW5zLnB1c2godHdlZW4pO1xuXG4gIH0sXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbih0d2Vlbikge1xuXG4gICAgdHdlZW4uX3JlbW92ZSA9IHRydWU7XG5cbiAgfVxuXG59O1xuXG4vKiBmaWxlOiBzcmMvVmlkZW9SZWNvcmRlci5qcyAqL1xuXG4vKiBWaWRlbyByZWNvcmRlciAqL1xuXG5QTEFZR1JPVU5ELlZpZGVvUmVjb3JkZXIgPSBmdW5jdGlvbihhcHAsIGFyZ3MpIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICB0aGlzLmFwcC5vbihcInN0ZXBcIiwgdGhpcy5zdGVwLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlZpZGVvUmVjb3JkZXIucHJvdG90eXBlID0ge1xuXG4gIHNldHVwOiBmdW5jdGlvbihhcmdzKSB7XG5cbiAgICB0aGlzLnJlZ2lvbiA9IGZhbHNlO1xuXG4gICAgUExBWUdST1VORC5VdGlscy5leHRlbmQodGhpcywge1xuICAgICAgZm9sbG93TW91c2U6IGZhbHNlLFxuICAgICAgZnJhbWVyYXRlOiAyMCxcbiAgICAgIHNjYWxlOiAxLjBcbiAgICB9LCBhcmdzKTtcblxuICAgIGlmICghdGhpcy5yZWdpb24pIHtcbiAgICAgIHRoaXMucmVnaW9uID0gWzAsIDAsIHRoaXMuYXBwLmxheWVyLndpZHRoLCB0aGlzLmFwcC5sYXllci5oZWlnaHRdO1xuICAgIH1cblxuICAgIHRoaXMucGxheWJhY2tSYXRlID0gdGhpcy5mcmFtZXJhdGUgLyA2MDtcblxuICAgIHRoaXMubGF5ZXIgPSBjcSh0aGlzLnJlZ2lvblsyXSAqIHRoaXMuc2NhbGUgfCAwLCB0aGlzLnJlZ2lvblszXSAqIHRoaXMuc2NhbGUgfCAwKTtcbiAgfSxcblxuICBzdGFydDogZnVuY3Rpb24oYXJncykge1xuICAgIHRoaXMuc2V0dXAoYXJncyk7XG4gICAgdGhpcy5lbmNvZGVyID0gbmV3IFdoYW1teS5WaWRlbyh0aGlzLmZyYW1lcmF0ZSk7XG4gICAgdGhpcy5jYXB0dXJlVGltZW91dCA9IDA7XG4gICAgdGhpcy5yZWNvcmRpbmcgPSB0cnVlO1xuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5lbmNvZGVyKSB7XG5cbiAgICAgIHRoaXMuY2FwdHVyZVRpbWVvdXQgLT0gZGVsdGEgKiAxMDAwO1xuXG4gICAgICBpZiAodGhpcy5jYXB0dXJlVGltZW91dCA8PSAwKSB7XG4gICAgICAgIHRoaXMuY2FwdHVyZVRpbWVvdXQgPSAxMDAwIC8gdGhpcy5mcmFtZXJhdGUgKyB0aGlzLmNhcHR1cmVUaW1lb3V0O1xuXG4gICAgICAgIHRoaXMubGF5ZXIuZHJhd0ltYWdlKHRoaXMuYXBwLmxheWVyLmNhbnZhcywgdGhpcy5yZWdpb25bMF0sIHRoaXMucmVnaW9uWzFdLCB0aGlzLnJlZ2lvblsyXSwgdGhpcy5yZWdpb25bM10sIDAsIDAsIHRoaXMubGF5ZXIud2lkdGgsIHRoaXMubGF5ZXIuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5lbmNvZGVyLmFkZCh0aGlzLmxheWVyLmNhbnZhcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBwLnNjcmVlbi5zYXZlKCkubGluZVdpZHRoKDgpLnN0cm9rZVN0eWxlKFwiI2MwMFwiKS5zdHJva2VSZWN0KDAsIDAsIHRoaXMuYXBwLnNjcmVlbi53aWR0aCwgdGhpcy5hcHAuc2NyZWVuLmhlaWdodCkucmVzdG9yZSgpO1xuICAgIH1cblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5lbmNvZGVyKSByZXR1cm47XG4gICAgdmFyIG91dHB1dCA9IHRoaXMuZW5jb2Rlci5jb21waWxlKCk7XG4gICAgdmFyIHVybCA9ICh3aW5kb3cud2Via2l0VVJMIHx8IHdpbmRvdy5VUkwpLmNyZWF0ZU9iamVjdFVSTChvdXRwdXQpO1xuICAgIHdpbmRvdy5vcGVuKHVybCk7XG4gICAgdGhpcy5yZWNvcmRpbmcgPSBmYWxzZTtcblxuICAgIGRlbGV0ZSB0aGlzLmVuY29kZXI7XG4gIH0sXG5cbiAgdG9nZ2xlOiBmdW5jdGlvbihhcmdzKSB7XG5cbiAgICBpZiAodGhpcy5lbmNvZGVyKSB0aGlzLnN0b3AoKTtcbiAgICBlbHNlIHRoaXMuc3RhcnQoYXJncyk7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5yZWNvcmQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgdGhpcy52aWRlb1JlY29yZGVyLnRvZ2dsZShhcmdzKTtcblxufTtcblxuLyogZmlsZTogc3JjL0F0bGFzZXMuanMgKi9cblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZEF0bGFzZXMgPSBmdW5jdGlvbigpIHtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgIC8qIHBvbHltb3JwaGlzbSBhdCBpdHMgZmluZXN0ICovXG5cbiAgICBpZiAodHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIikge1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gYXJnKSB0aGlzLmxvYWRBdGxhc2VzKGFyZ1trZXldKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIC8qIGlmIGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvYXJyYXkgbGV0J3MgdHJ5IHRvIGxvYWQgaXQgKi9cblxuICAgICAgdGhpcy5fbG9hZEF0bGFzKGFyZylcblxuICAgIH1cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkQXRsYXMgPSBmdW5jdGlvbigpIHtcblxuICByZXR1cm4gdGhpcy5sb2FkQXRsYXNlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5fbG9hZEF0bGFzID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcblxuICB2YXIgZW50cnkgPSB0aGlzLmdldEFzc2V0RW50cnkoZmlsZW5hbWUsIFwiYXRsYXNlc1wiLCBcInBuZ1wiKTtcblxuICB0aGlzLmxvYWRlci5hZGQoZW50cnkudXJsKTtcblxuICB2YXIgYXRsYXMgPSB0aGlzLmF0bGFzZXNbZW50cnkua2V5XSA9IHt9O1xuXG4gIHZhciBpbWFnZSA9IGF0bGFzLmltYWdlID0gbmV3IEltYWdlO1xuXG4gIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRlci5zdWNjZXNzKGVudHJ5LnVybCk7XG4gIH0pO1xuXG4gIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbigpIHtcbiAgICBsb2FkZXIuZXJyb3IoZW50cnkudXJsKTtcbiAgfSk7XG5cbiAgaW1hZ2Uuc3JjID0gZW50cnkudXJsO1xuXG4gIC8qIGRhdGEgKi9cblxuICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlbnRyeS5wYXRoICsgXCIuanNvblwiLCB0cnVlKTtcblxuICB0aGlzLmxvYWRlci5hZGQoZW50cnkucGF0aCArIFwiLmpzb25cIik7XG5cbiAgdmFyIGxvYWRlciA9IHRoaXMubG9hZGVyO1xuXG4gIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZSk7XG5cbiAgICBhdGxhcy5mcmFtZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5mcmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmcmFtZSA9IGRhdGEuZnJhbWVzW2ldO1xuXG4gICAgICBhdGxhcy5mcmFtZXMucHVzaCh7XG4gICAgICAgIHJlZ2lvbjogW2ZyYW1lLmZyYW1lLngsIGZyYW1lLmZyYW1lLnksIGZyYW1lLmZyYW1lLncsIGZyYW1lLmZyYW1lLmhdLFxuICAgICAgICBvZmZzZXQ6IFtmcmFtZS5zcHJpdGVTb3VyY2VTaXplLnggfHwgMCwgZnJhbWUuc3ByaXRlU291cmNlU2l6ZS55IHx8IDBdLFxuICAgICAgICB3aWR0aDogZnJhbWUuc291cmNlU2l6ZS53LFxuICAgICAgICBoZWlnaHQ6IGZyYW1lLnNvdXJjZVNpemUuaFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZGVyLnN1Y2Nlc3MoZW50cnkucGF0aCArIFwiLmpzb25cIik7XG5cbiAgfVxuXG4gIHJlcXVlc3Quc2VuZCgpO1xufTtcblxuLyogZmlsZTogc3JjL0ZvbnRzLmpzICovXG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLmxvYWRGb250ID0gZnVuY3Rpb24obmFtZSkge1xuXG4gIHZhciBzdHlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlTm9kZS50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG4gIHZhciBmb3JtYXRzID0ge1xuICAgIFwid29mZlwiOiBcIndvZmZcIixcbiAgICBcInR0ZlwiOiBcInRydWV0eXBlXCJcbiAgfTtcblxuICB2YXIgc291cmNlcyA9IFwiXCI7XG5cbiAgZm9yICh2YXIgZXh0IGluIGZvcm1hdHMpIHtcbiAgICB2YXIgdHlwZSA9IGZvcm1hdHNbZXh0XTtcbiAgICBzb3VyY2VzICs9IFwiIHVybChcXFwiZm9udHMvXCIgKyBuYW1lICsgXCIuXCIgKyBleHQgKyBcIlxcXCIpIGZvcm1hdCgnXCIgKyB0eXBlICsgXCInKTtcIlxuICB9XG5cbiAgc3R5bGVOb2RlLnRleHRDb250ZW50ID0gXCJAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICdcIiArIG5hbWUgKyBcIic7IHNyYzogXCIgKyBzb3VyY2VzICsgXCIgfVwiO1xuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVOb2RlKTtcblxuICB2YXIgbGF5ZXIgPSBjcSgzMiwgMzIpO1xuXG4gIGxheWVyLmZvbnQoXCIxMHB4IFRlc3RpbmdcIik7XG4gIGxheWVyLmZpbGxUZXh0KDE2LCAxNiwgMTYpLnRyaW0oKTtcblxuICB2YXIgd2lkdGggPSBsYXllci53aWR0aDtcbiAgdmFyIGhlaWdodCA9IGxheWVyLmhlaWdodDtcblxuICB0aGlzLmxvYWRlci5hZGQoXCJmb250IFwiICsgbmFtZSk7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGNoZWNrKCkge1xuXG4gICAgdmFyIGxheWVyID0gY3EoMzIsIDMyKTtcblxuICAgIGxheWVyLmZvbnQoXCIxMHB4IFwiICsgbmFtZSkuZmlsbFRleHQoMTYsIDE2LCAxNik7XG4gICAgbGF5ZXIudHJpbSgpO1xuXG4gICAgaWYgKGxheWVyLndpZHRoICE9PSB3aWR0aCB8fCBsYXllci5oZWlnaHQgIT09IGhlaWdodCkge1xuXG4gICAgICBzZWxmLmxvYWRlci5yZWFkeShcImZvbnQgXCIgKyBuYW1lKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHNldFRpbWVvdXQoY2hlY2ssIDI1MCk7XG5cbiAgICB9XG5cbiAgfTtcblxuICBjaGVjaygpO1xuXG59O1xuXG4vKiBmaWxlOiBzcmMvRGVmYXVsdFN0YXRlLmpzICovXG5cblBMQVlHUk9VTkQuRGVmYXVsdFN0YXRlID0ge1xuXG59O1xuXG4vKiBmaWxlOiBzcmMvTG9hZGluZ1NjcmVlbi5qcyAqL1xuXG5QTEFZR1JPVU5ELkxvYWRpbmdTY3JlZW4gPSB7XG5cbiAgLyogYmFzaWMgbG9hZGluZyBzY3JlZW4gdXNpbmcgRE9NICovXG5cbiAgbG9nb1JhdzogXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU5vQUFBQVNCQU1BQUFEUGlOMHhBQUFBR0ZCTVZFVUFBUUF0TGl4SFNVZG5hR2FKaW9pbXFLWE16c3Y3L2ZyNXNoZ1ZBQUFBQVdKTFIwUUFpQVVkU0FBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBQWQwU1UxRkI5OEVBd2tlQTRvUVdKNEFBQUFaZEVWWWRFTnZiVzFsYm5RQVEzSmxZWFJsWkNCM2FYUm9JRWRKVFZCWGdRNFhBQUFCOWtsRVFWUTR5NzJVdlcrck1CREF6K0ZycFZLcnJGbWVzbWFwV05PbHJLalNlMWtaK3VvVkF2aisvZnJ1akcxU2FKY3FKd1U3dm9PZjd4TVF6UW1zSURpNU5QVE1zTFJudEgzVStGNlNBWm8zTmxDdmNnQkZKejhvK3ZrRGlFNjNsSTk1WS9VbXBpbnNaV2tnSldKaURiQVZRMTZodHB0eFNUTmxvSWx1Z3dhdzAwMUV5M0FTRjNzbzZMMXFMTlh6UVM1UzBVR0tML0NJNXdXTnJpRTBVSDlZdHkzN0xxSVZnK3dzcXU3SXgwTXdWQlNGL2RVK2p2MlNObm1hMDIxTEVkUHFWbk1lVTN4QXUwa1hjU0dqbXE3T3g0RTJXbjg4TFoyK0VGajNhdmppeHphaTZWUFZ5dVl2ZVpMSEYyWGZkRG52QXEyN0RJSEd1cSswREpGc0UzME90QjFLcU93ZDhEcjdQY000YitqZmoyZzVscDRXeW50Qks2NnF1YTNKekVBK3VYSnB3SC9ObFZ1elJWUFkva1RMQjJtanVOK0t3ZFo4Rk95OGoyZ0RiRVVTcXVtblNDWTRsZjRpYnEzSWhWTTR5Y1pRUm52K3pGcVZkSlFWbjZCeHZVcWViR3B1YU5vM3NaeHdCemphamlNWk9vQml3eVZGK2tDcituVWFKT2FHcG5BZVJQUEpaVHI0RnFtSFJYY25lRW80RHFRL2Z0ZmRuTGVEclVBTUU4eFdLUGVLQ3dXNllrRXBYZnMzcDFFV0poZGNVQVlQMFRJL3VZYVY4Y2dqd0JvdmFleVd3amkyVDlyVEZJZFMvY1AvTW5rVExSVVd4Z05OWlZpbjdiVDVmcVQ5bWlEY1VWSnpSMWdScGZJT05NbXVsVSs1UXFyNnpYQVVxQUFBQUFCSlJVNUVya0pnZ2c9PVwiLFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmxvZ28gPSBuZXcgSW1hZ2U7XG5cbiAgICB0aGlzLmxvZ28uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHNlbGYuY3JlYXRlRWxlbWVudHMoKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9nby5zcmMgPSB0aGlzLmxvZ29SYXc7XG5cbiAgICB0aGlzLmJhY2tncm91bmQgPSBcIiMwMDBcIjtcblxuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkge1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuYmFja2dyb3VuZENvbG9yIHx8IFwiIzAwMFwiO1xuICAgIH1cblxuXG4gIH0sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jdXJyZW50ID0gMDtcblxuICB9LFxuXG4gIGxlYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubG9ja2VkID0gdHJ1ZTtcblxuICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5hcHAudHdlZW4odGhpcylcbiAgICAgIC50byh7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICAgIH0sIDAuNSk7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKHRoaXMubG9ja2VkKSB7XG5cbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbi5maW5pc2hlZCkge1xuICAgICAgICB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLndyYXBwZXIpO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgTWF0aC5hYnModGhpcy5hcHAubG9hZGVyLnByb2dyZXNzIC0gdGhpcy5jdXJyZW50KSAqIGRlbHRhO1xuICAgIH1cblxuICB9LFxuXG4gIGNyZWF0ZUVsZW1lbnRzOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuNiB8IDA7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjEgfCAwO1xuXG4gICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUud2lkdGggPSB0aGlzLndpZHRoICsgXCJweFwiO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzAwMFwiO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS5ib3JkZXIgPSBcIjRweCBzb2xpZCAjZmZmXCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS5sZWZ0ID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyIHwgMCkgKyBcInB4XCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyIHwgMCkgKyBcInB4XCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLnpJbmRleCA9IDEwMDtcblxuICAgIHRoaXMuYXBwLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLndyYXBwZXIpO1xuXG4gICAgdGhpcy5wcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IFwiMCVcIjtcbiAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2ZmZlwiO1xuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMucHJvZ3Jlc3NCYXIpO1xuXG4gIH0sXG5cblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG5cbiAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gKHRoaXMuY3VycmVudCAqIDEwMCB8IDApICsgXCIlXCI7XG5cblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9saWIvQ2FudmFzUXVlcnkuanMgKi9cblxuLypcblxuICBDYW52YXMgUXVlcnkgcjJcblxuICBodHRwOi8vY2FudmFzcXVlcnkuY29tXG5cbiAgKGMpIDIwMTItMjAxNSBodHRwOi8vcmV6b25lci5uZXRcblxuICBDYW52YXMgUXVlcnkgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbiAgISBmaXhlZCBjb2xvciBwYXJzZXJzXG5cbiovXG5cblxuKGZ1bmN0aW9uKCkge1xuXG4gIHZhciBDT0NPT05KUyA9IGZhbHNlO1xuXG4gIHZhciBDYW52YXMgPSB3aW5kb3cuSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHZhciBJbWFnZSA9IHdpbmRvdy5IVE1MSW1hZ2VFbGVtZW50O1xuICB2YXIgQ09DT09OSlMgPSBuYXZpZ2F0b3IuaXNDb2Nvb25KUztcblxuICB2YXIgY3EgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAvLyBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNhbnZhcyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ2FudmFzKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgY3EuTGF5ZXIpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNhbnZhcyA9IHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgY3EuTGF5ZXIoY2FudmFzKTtcbiAgfTtcblxuICBjcS5saW5lU3BhY2luZyA9IDEuMDtcbiAgY3EuZGVmYXVsdEZvbnQgPSBcIkFyaWFsXCI7XG5cbiAgY3EuY29jb29uID0gZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNvY29vbkNhbnZhcyh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge30pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDb2Nvb25DYW52YXMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNvY29vbkNhbnZhcyhzZWxlY3Rvcik7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIGNxLkxheWVyKSB7XG4gICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjYW52YXMgPSBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IGNxLkxheWVyKGNhbnZhcyk7XG4gIH1cblxuXG4gIGNxLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICBhcmd1bWVudHNbMF1bal0gPSBhcmd1bWVudHNbaV1bal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgfTtcblxuICBjcS5hdWdtZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIF8uZXh0ZW5kKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzW2ldKTtcbiAgICAgIGFyZ3VtZW50c1tpXShhcmd1bWVudHNbMF0pO1xuICAgIH1cbiAgfTtcblxuICBjcS5kaXN0YW5jZSA9IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICB2YXIgZHggPSB4MSAtIHgyO1xuICAgICAgdmFyIGR5ID0geTEgLSB5MjtcblxuICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmFicyh4MSAtIHkxKTtcbiAgICB9XG4gIH07XG5cbiAgLyogZmFzdC5qcyAqL1xuXG4gIGNxLmZhc3RBcHBseSA9IGZ1bmN0aW9uKHN1YmplY3QsIHRoaXNDb250ZXh0LCBhcmdzKSB7XG5cbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQpO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0pO1xuICAgICAgY2FzZSA3OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdKTtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSwgYXJnc1s2XSwgYXJnc1s3XSk7XG4gICAgICBjYXNlIDk6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0sIGFyZ3NbN10sIGFyZ3NbOF0pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuYXBwbHkodGhpc0NvbnRleHQsIGFyZ3MpO1xuICAgIH1cblxuICB9O1xuXG4gIGNxLmV4dGVuZChjcSwge1xuXG4gICAgc21vb3RoaW5nOiB0cnVlLFxuXG4gICAgYmxlbmQ6IGZ1bmN0aW9uKGJlbG93LCBhYm92ZSwgbW9kZSwgbWl4KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgbWl4ID09PSBcInVuZGVmaW5lZFwiKSBtaXggPSAxO1xuXG4gICAgICB2YXIgYmVsb3cgPSBjcShiZWxvdyk7XG4gICAgICB2YXIgbWFzayA9IGJlbG93LmNsb25lKCk7XG4gICAgICB2YXIgYWJvdmUgPSBjcShhYm92ZSk7XG5cbiAgICAgIGJlbG93LnNhdmUoKTtcbiAgICAgIGJlbG93Lmdsb2JhbEFscGhhKG1peCk7XG4gICAgICBiZWxvdy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24obW9kZSk7XG4gICAgICBiZWxvdy5kcmF3SW1hZ2UoYWJvdmUuY2FudmFzLCAwLCAwKTtcbiAgICAgIGJlbG93LnJlc3RvcmUoKTtcblxuICAgICAgbWFzay5zYXZlKCk7XG4gICAgICBtYXNrLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbihcInNvdXJjZS1pblwiKTtcbiAgICAgIG1hc2suZHJhd0ltYWdlKGJlbG93LmNhbnZhcywgMCwgMCk7XG4gICAgICBtYXNrLnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSxcblxuICAgIG1hdGNoQ29sb3I6IGZ1bmN0aW9uKGNvbG9yLCBwYWxldHRlKSB7XG4gICAgICB2YXIgcmdiUGFsZXR0ZSA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhbGV0dGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmdiUGFsZXR0ZS5wdXNoKGNxLmNvbG9yKHBhbGV0dGVbaV0pKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGltZ0RhdGEgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIHZhciBkaWZMaXN0ID0gW107XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJnYlBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIHJnYlZhbCA9IHJnYlBhbGV0dGVbal07XG4gICAgICAgIHZhciByRGlmID0gTWF0aC5hYnMoaW1nRGF0YVswXSAtIHJnYlZhbFswXSksXG4gICAgICAgICAgZ0RpZiA9IE1hdGguYWJzKGltZ0RhdGFbMV0gLSByZ2JWYWxbMV0pLFxuICAgICAgICAgIGJEaWYgPSBNYXRoLmFicyhpbWdEYXRhWzJdIC0gcmdiVmFsWzJdKTtcbiAgICAgICAgZGlmTGlzdC5wdXNoKHJEaWYgKyBnRGlmICsgYkRpZik7XG4gICAgICB9XG5cbiAgICAgIHZhciBjbG9zZXN0TWF0Y2ggPSAwO1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWxldHRlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChkaWZMaXN0W2pdIDwgZGlmTGlzdFtjbG9zZXN0TWF0Y2hdKSB7XG4gICAgICAgICAgY2xvc2VzdE1hdGNoID0gajtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFsZXR0ZVtjbG9zZXN0TWF0Y2hdO1xuICAgIH0sXG5cbiAgICB0ZW1wOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICBpZiAoIXRoaXMudGVtcExheWVyKSB7XG4gICAgICAgIHRoaXMudGVtcExheWVyID0gY3EoMSwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aWR0aCBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICAgIHRoaXMudGVtcExheWVyLndpZHRoID0gd2lkdGgud2lkdGg7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmhlaWdodCA9IHdpZHRoLmhlaWdodDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuY29udGV4dC5kcmF3SW1hZ2Uod2lkdGgsIDAsIDApO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCBpbnN0YW5jZW9mIENhbnZhcykge1xuICAgICAgICB0aGlzLnRlbXBMYXllci53aWR0aCA9IHdpZHRoLndpZHRoO1xuICAgICAgICB0aGlzLnRlbXBMYXllci5oZWlnaHQgPSB3aWR0aC5oZWlnaHQ7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmNvbnRleHQuZHJhd0ltYWdlKHdpZHRoLCAwLCAwKTtcbiAgICAgIH0gZWxzZSBpZiAod2lkdGggaW5zdGFuY2VvZiBDYW52YXNRdWVyeS5MYXllcikge1xuICAgICAgICB0aGlzLnRlbXBMYXllci53aWR0aCA9IHdpZHRoLndpZHRoO1xuICAgICAgICB0aGlzLnRlbXBMYXllci5oZWlnaHQgPSB3aWR0aC5oZWlnaHQ7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmNvbnRleHQuZHJhd0ltYWdlKHdpZHRoLmNhbnZhcywgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlbXBMYXllci53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLnRlbXBMYXllci5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnRlbXBMYXllcjtcbiAgICB9LFxuXG4gICAgd3JhcFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgIGlmICh2YWx1ZSA8IG1pbikgcmV0dXJuIG1heCArICh2YWx1ZSAlIG1heCk7XG4gICAgICBpZiAodmFsdWUgPj0gbWF4KSByZXR1cm4gdmFsdWUgJSBtYXg7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIGxpbWl0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDogdmFsdWUgPiBtYXggPyBtYXggOiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgbWl4OiBmdW5jdGlvbihhLCBiLCBhbW91bnQpIHtcbiAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGFtb3VudDtcbiAgICB9LFxuXG4gICAgaGV4VG9SZ2I6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaWYgKGhleC5sZW5ndGggPT09IDcpIHJldHVybiBbJzB4JyArIGhleFsxXSArIGhleFsyXSB8IDAsICcweCcgKyBoZXhbM10gKyBoZXhbNF0gfCAwLCAnMHgnICsgaGV4WzVdICsgaGV4WzZdIHwgMF07XG4gICAgICBlbHNlIHJldHVybiBbJzB4JyArIGhleFsxXSArIGhleFsxXSB8IDAsICcweCcgKyBoZXhbMl0gKyBoZXhbMl0gfCAwLCAnMHgnICsgaGV4WzNdICsgaGV4WzNdIHwgMF07XG4gICAgfSxcblxuICAgIHJnYlRvSGV4OiBmdW5jdGlvbihyLCBnLCBiKSB7XG4gICAgICByZXR1cm4gXCIjXCIgKyAoKDEgPDwgMjQpICsgKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiKS50b1N0cmluZygxNikuc2xpY2UoMSwgNyk7XG4gICAgfSxcblxuICAgIC8qIGF1dGhvcjogaHR0cDovL21qaWphY2tzb24uY29tLyAqL1xuXG4gICAgcmdiVG9Ic2w6IGZ1bmN0aW9uKHIsIGcsIGIpIHtcblxuICAgICAgaWYgKHIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBiID0gclsyXTtcbiAgICAgICAgZyA9IHJbMV07XG4gICAgICAgIHIgPSByWzBdO1xuICAgICAgfVxuXG4gICAgICByIC89IDI1NSwgZyAvPSAyNTUsIGIgLz0gMjU1O1xuICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpLFxuICAgICAgICBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgIHZhciBoLCBzLCBsID0gKG1heCArIG1pbikgLyAyO1xuXG4gICAgICBpZiAobWF4ID09IG1pbikge1xuICAgICAgICBoID0gcyA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgICBzID0gbCA+IDAuNSA/IGQgLyAoMiAtIG1heCAtIG1pbikgOiBkIC8gKG1heCArIG1pbik7XG4gICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbaCwgcywgbF07XG4gICAgfSxcblxuICAgIC8qIGF1dGhvcjogaHR0cDovL21qaWphY2tzb24uY29tLyAqL1xuXG4gICAgaHVlMnJnYjogZnVuY3Rpb24ocCwgcSwgdCkge1xuICAgICAgaWYgKHQgPCAwKSB0ICs9IDE7XG4gICAgICBpZiAodCA+IDEpIHQgLT0gMTtcbiAgICAgIGlmICh0IDwgMSAvIDYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgICAgaWYgKHQgPCAxIC8gMikgcmV0dXJuIHE7XG4gICAgICBpZiAodCA8IDIgLyAzKSByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XG4gICAgICByZXR1cm4gcDtcbiAgICB9LFxuXG4gICAgaHNsVG9SZ2I6IGZ1bmN0aW9uKGgsIHMsIGwpIHtcbiAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICBpZiAocyA9PSAwKSB7XG4gICAgICAgIHIgPSBnID0gYiA9IGw7IC8vIGFjaHJvbWF0aWNcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcbiAgICAgICAgciA9IHRoaXMuaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xuICAgICAgICBnID0gdGhpcy5odWUycmdiKHAsIHEsIGgpO1xuICAgICAgICBiID0gdGhpcy5odWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbciAqIDI1NSB8IDAsIGcgKiAyNTUgfCAwLCBiICogMjU1IHwgMF07XG4gICAgfSxcblxuICAgIHJnYlRvSHN2OiBmdW5jdGlvbihyLCBnLCBiKSB7XG4gICAgICBpZiAociBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGIgPSByWzJdO1xuICAgICAgICBnID0gclsxXTtcbiAgICAgICAgciA9IHJbMF07XG4gICAgICB9XG5cbiAgICAgIHIgPSByIC8gMjU1LCBnID0gZyAvIDI1NSwgYiA9IGIgLyAyNTU7XG4gICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgdmFyIGgsIHMsIHYgPSBtYXg7XG5cbiAgICAgIHZhciBkID0gbWF4IC0gbWluO1xuICAgICAgcyA9IG1heCA9PSAwID8gMCA6IGQgLyBtYXg7XG5cbiAgICAgIGlmIChtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSAwOyAvLyBhY2hyb21hdGljXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKG1heCkge1xuICAgICAgICAgIGNhc2UgcjpcbiAgICAgICAgICAgIGggPSAoZyAtIGIpIC8gZCArIChnIDwgYiA/IDYgOiAwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgZzpcbiAgICAgICAgICAgIGggPSAoYiAtIHIpIC8gZCArIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGI6XG4gICAgICAgICAgICBoID0gKHIgLSBnKSAvIGQgKyA0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaCAvPSA2O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW2gsIHMsIHZdO1xuICAgIH0sXG5cbiAgICBoc3ZUb1JnYjogZnVuY3Rpb24oaCwgcywgdikge1xuICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcihoICogNik7XG4gICAgICB2YXIgZiA9IGggKiA2IC0gaTtcbiAgICAgIHZhciBwID0gdiAqICgxIC0gcyk7XG4gICAgICB2YXIgcSA9IHYgKiAoMSAtIGYgKiBzKTtcbiAgICAgIHZhciB0ID0gdiAqICgxIC0gKDEgLSBmKSAqIHMpO1xuXG4gICAgICBzd2l0Y2ggKGkgJSA2KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICByID0gdiwgZyA9IHQsIGIgPSBwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgciA9IHEsIGcgPSB2LCBiID0gcDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHIgPSBwLCBnID0gdiwgYiA9IHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByID0gcCwgZyA9IHEsIGIgPSB2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgciA9IHQsIGcgPSBwLCBiID0gdjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIHIgPSB2LCBnID0gcCwgYiA9IHE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbciAqIDI1NSwgZyAqIDI1NSwgYiAqIDI1NV07XG4gICAgfSxcblxuICAgIGNvbG9yOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHQgPSBuZXcgY3EuQ29sb3IoKTtcbiAgICAgIHJlc3VsdC5wYXJzZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBwb29sQXJyYXk6IFtdLFxuXG4gICAgcG9vbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmICghdGhpcy5wb29sQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgICB0aGlzLnBvb2xBcnJheS5wdXNoKHRoaXMuY3JlYXRlQ2FudmFzKDEsIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wb29sQXJyYXkucG9wKCk7XG5cbiAgICB9LFxuXG4gICAgY3JlYXRlQ2FudmFzOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcblxuICAgICAgaWYgKGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIEltYWdlIHx8IGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIENhbnZhcykge1xuICAgICAgICB2YXIgaW1hZ2UgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICByZXN1bHQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cblxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBjcmVhdGVDb2Nvb25DYW52YXM6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyZWVuY2FudmFzXCIpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgICAgdmFyIGltYWdlID0gYXJndW1lbnRzWzBdO1xuICAgICAgICByZXN1bHQud2lkdGggPSBpbWFnZS53aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGltYWdlLmhlaWdodDtcbiAgICAgICAgcmVzdWx0LmdldENvbnRleHQoXCIyZFwiKS5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZUltYWdlRGF0YTogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgcmV0dXJuIGNxLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KS5nZXRDb250ZXh0KFwiMmRcIikuY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICB9KTtcblxuICBjcS5MYXllciA9IGZ1bmN0aW9uKGNhbnZhcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5hbGlnblggPSAwO1xuICAgIHRoaXMuYWxpZ25ZID0gMDtcbiAgICB0aGlzLmFsaWduZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9O1xuXG4gIGNxLkxheWVyLnByb3RvdHlwZSA9IHtcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBzbW9vdGhpbmcgPSBjcS5zbW9vdGhpbmc7XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zbW9vdGhpbmcgIT09IFwidW5kZWZpbmVkXCIpIHNtb290aGluZyA9IHRoaXMuc21vb3RoaW5nO1xuXG4gICAgICB0aGlzLmNvbnRleHQubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuICAgICAgdGhpcy5jb250ZXh0Lm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHNtb290aGluZztcblxuICAgICAgaWYgKENPQ09PTkpTKSBDb2Nvb24uVXRpbHMuc2V0QW50aWFsaWFzKHNtb290aGluZyk7XG4gICAgfSxcblxuICAgIGFwcGVuZFRvOiBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHNlbGVjdG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhOiBmdW5jdGlvbihhKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnByZXZpb3VzQWxwaGEgPSB0aGlzLmdsb2JhbEFscGhhKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbEFscGhhKGEpO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbEFscGhhKCk7XG4gICAgfSxcblxuICAgIHJhOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmEodGhpcy5wcmV2aW91c0FscGhhKTtcbiAgICB9LFxuICAgIC8qXG4gICAgICAgIGRyYXdJbWFnZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuYWxpZ25YICYmICF0aGlzLmFsaWduWSkge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNhbGxcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG5cbiAgICAgICAgfSxcblxuICAgICAgICByZXN0b3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICAgIHRoaXMuYWxpZ25YID0gMDtcbiAgICAgICAgICB0aGlzLmFsaWduWSA9IDA7XG4gICAgICAgIH0sXG4gICAgICAgICovXG5cbiAgICByZWFsaWduOiBmdW5jdGlvbigpIHtcblxuICAgICAgdGhpcy5hbGlnblggPSB0aGlzLnByZXZBbGlnblg7XG4gICAgICB0aGlzLmFsaWduWSA9IHRoaXMucHJldkFsaWduWTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgYWxpZ246IGZ1bmN0aW9uKHgsIHkpIHtcblxuICAgICAgaWYgKHR5cGVvZiB5ID09PSBcInVuZGVmaW5lZFwiKSB5ID0geDtcblxuICAgICAgdGhpcy5hbGlnblggPSB4O1xuICAgICAgdGhpcy5hbGlnblkgPSB5O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG5cbiAgICAvKiBzYXZlIHRyYW5zbGF0ZSBhbGlnbiByb3RhdGUgc2NhbGUgKi9cblxuICAgIHN0YXJzOiBmdW5jdGlvbih4LCB5LCBhbGlnblgsIGFsaWduWSwgcm90YXRpb24sIHNjYWxlWCwgc2NhbGVZKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgYWxpZ25YID09PSBcInVuZGVmaW5lZFwiKSBhbGlnblggPSAwLjU7XG4gICAgICBpZiAodHlwZW9mIGFsaWduWSA9PT0gXCJ1bmRlZmluZWRcIikgYWxpZ25ZID0gMC41O1xuICAgICAgaWYgKHR5cGVvZiByb3RhdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikgcm90YXRpb24gPSAwO1xuICAgICAgaWYgKHR5cGVvZiBzY2FsZVggPT09IFwidW5kZWZpbmVkXCIpIHNjYWxlWCA9IDEuMDtcbiAgICAgIGlmICh0eXBlb2Ygc2NhbGVZID09PSBcInVuZGVmaW5lZFwiKSBzY2FsZVkgPSBzY2FsZVg7XG5cbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICB0aGlzLmFsaWduKGFsaWduWCwgYWxpZ25ZKTtcbiAgICAgIHRoaXMucm90YXRlKHJvdGF0aW9uKTtcbiAgICAgIHRoaXMuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdGFyczogZnVuY3Rpb24oeCwgeSwgYWxpZ25YLCBhbGlnblksIHJvdGF0aW9uLCBzY2FsZVgsIHNjYWxlWSkge1xuXG4gICAgICBpZiAodHlwZW9mIGFsaWduWCA9PT0gXCJ1bmRlZmluZWRcIikgYWxpZ25YID0gMC41O1xuICAgICAgaWYgKHR5cGVvZiBhbGlnblkgPT09IFwidW5kZWZpbmVkXCIpIGFsaWduWSA9IDAuNTtcbiAgICAgIGlmICh0eXBlb2Ygcm90YXRpb24gPT09IFwidW5kZWZpbmVkXCIpIHJvdGF0aW9uID0gMDtcbiAgICAgIGlmICh0eXBlb2Ygc2NhbGVYID09PSBcInVuZGVmaW5lZFwiKSBzY2FsZVggPSAxLjA7XG4gICAgICBpZiAodHlwZW9mIHNjYWxlWSA9PT0gXCJ1bmRlZmluZWRcIikgc2NhbGVZID0gc2NhbGVYO1xuXG4gICAgICB0aGlzLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgIHRoaXMuYWxpZ24oYWxpZ25YLCBhbGlnblkpO1xuICAgICAgdGhpcy5yb3RhdGUocm90YXRpb24pO1xuICAgICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfSxcblxuICAgIGZpbGxSZWN0OiBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKHRoaXMuYWxpZ25YIHx8IHRoaXMuYWxpZ25ZKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXSAtPSBhcmd1bWVudHNbMl0gKiB0aGlzLmFsaWduWCB8IDA7XG4gICAgICAgIGFyZ3VtZW50c1sxXSAtPSBhcmd1bWVudHNbM10gKiB0aGlzLmFsaWduWSB8IDA7XG4gICAgICB9XG5cbiAgICAgIGNxLmZhc3RBcHBseSh0aGlzLmNvbnRleHQuZmlsbFJlY3QsIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgc3Ryb2tlUmVjdDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmICh0aGlzLmFsaWduWCB8fCB0aGlzLmFsaWduWSkge1xuICAgICAgICBhcmd1bWVudHNbMF0gLT0gYXJndW1lbnRzWzJdICogdGhpcy5hbGlnblggfCAwO1xuICAgICAgICBhcmd1bWVudHNbMV0gLT0gYXJndW1lbnRzWzNdICogdGhpcy5hbGlnblkgfCAwO1xuICAgICAgfVxuXG4gICAgICBjcS5mYXN0QXBwbHkodGhpcy5jb250ZXh0LnN0cm9rZVJlY3QsIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgZHJhd0ltYWdlOiBmdW5jdGlvbihpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KSB7XG5cbiAgICAgIGlmICh0aGlzLmFsaWduWCB8fCB0aGlzLmFsaWduWSkge1xuICAgICAgICBpZiAoc1dpZHRoID09IG51bGwpIHtcbiAgICAgICAgICBzeCAtPSBpbWFnZS53aWR0aCAqIHRoaXMuYWxpZ25YIHwgMDtcbiAgICAgICAgICBzeSAtPSBpbWFnZS5oZWlnaHQgKiB0aGlzLmFsaWduWSB8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZHggLT0gZFdpZHRoICogdGhpcy5hbGlnblggfCAwO1xuICAgICAgICAgIGR5IC09IGRIZWlnaHQgKiB0aGlzLmFsaWduWSB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNXaWR0aCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSk7XG4gICAgICB9IGVsc2UgaWYgKGR4ID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzV2lkdGgsIHNIZWlnaHQsIGR4LCBkeSwgZFdpZHRoLCBkSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgLy8gY3EuZmFzdEFwcGx5KHRoaXMuY29udGV4dC5kcmF3SW1hZ2UsIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnByZXZBbGlnblggPSB0aGlzLmFsaWduWDtcbiAgICAgIHRoaXMucHJldkFsaWduWSA9IHRoaXMuYWxpZ25ZO1xuXG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVzdG9yZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHRoaXMucmVhbGlnbigpO1xuICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBkcmF3VGlsZTogZnVuY3Rpb24oaW1hZ2UsIHgsIHksIGZyYW1lWCwgZnJhbWVZLCBmcmFtZVdpZHRoLCBmcmFtZUhlaWdodCwgZnJhbWVzLCBmcmFtZSkge1xuXG4gICAgfSxcblxuICAgIGRyYXdBdGxhc0ZyYW1lOiBmdW5jdGlvbihhdGxhcywgZnJhbWUsIHgsIHkpIHtcblxuICAgICAgdmFyIGZyYW1lID0gYXRsYXMuZnJhbWVzW2ZyYW1lXTtcblxuICAgICAgdGhpcy5kcmF3UmVnaW9uKFxuICAgICAgICBhdGxhcy5pbWFnZSxcbiAgICAgICAgZnJhbWUucmVnaW9uLFxuICAgICAgICB4IC0gZnJhbWUud2lkdGggKiB0aGlzLmFsaWduWCArIGZyYW1lLm9mZnNldFswXSArIGZyYW1lLnJlZ2lvblsyXSAqIHRoaXMuYWxpZ25YLCB5IC0gZnJhbWUuaGVpZ2h0ICogdGhpcy5hbGlnblkgKyBmcmFtZS5vZmZzZXRbMV0gKyBmcmFtZS5yZWdpb25bM10gKiB0aGlzLmFsaWduWVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG5cbiAgICBpbWFnZUZpbGw6IGZ1bmN0aW9uKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgICAgIHZhciBzY2FsZSA9IE1hdGgubWF4KHdpZHRoIC8gaW1hZ2Uud2lkdGgsIGhlaWdodCAvIGltYWdlLmhlaWdodCk7XG5cbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgdGhpcy5yZXN0b3JlKCk7XG5cbiAgICB9LFxuXG4gICAgZHJhd1JlZ2lvbjogZnVuY3Rpb24oaW1hZ2UsIHJlZ2lvbiwgeCwgeSwgc2NhbGUpIHtcblxuICAgICAgc2NhbGUgPSBzY2FsZSB8fCAxO1xuXG4gICAgICB2YXIgZFdpZHRoID0gcmVnaW9uWzJdICogc2NhbGUgfCAwO1xuICAgICAgdmFyIGRIZWlnaHQgPSByZWdpb25bM10gKiBzY2FsZSB8IDA7XG5cbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgIGltYWdlLCByZWdpb25bMF0sIHJlZ2lvblsxXSwgcmVnaW9uWzJdLCByZWdpb25bM10sXG4gICAgICAgIHggLSBkV2lkdGggKiB0aGlzLmFsaWduWCB8IDAsIHkgLSBkSGVpZ2h0ICogdGhpcy5hbGlnblkgfCAwLCBkV2lkdGgsIGRIZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjYWNoZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLmNhbnZhcztcblxuICAgICAgLyogRkZTIC4uLi4gaW1hZ2Uuc3JjIGlzIG5vIGxvbmdlciBzeW5jaHJvbm91cyB3aGVuIGFzc2lnbmluZyBkYXRhVVJMICovXG5cbiAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZTtcbiAgICAgIGltYWdlLnNyYyA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH0sXG5cbiAgICBibGVuZE9uOiBmdW5jdGlvbih3aGF0LCBtb2RlLCBtaXgpIHtcbiAgICAgIGNxLmJsZW5kKHdoYXQsIHRoaXMsIG1vZGUsIG1peCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBwb3N0ZXJpemU6IGZ1bmN0aW9uKHBjLCBpbmMpIHtcbiAgICAgIHBjID0gcGMgfHwgMzI7XG4gICAgICBpbmMgPSBpbmMgfHwgNDtcbiAgICAgIHZhciBpbWdkYXRhID0gdGhpcy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdmFyIGRhdGEgPSBpbWdkYXRhLmRhdGE7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gaW5jKSB7XG4gICAgICAgIGRhdGFbaV0gLT0gZGF0YVtpXSAlIHBjOyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcbiAgICAgICAgZGF0YVtpICsgMV0gLT0gZGF0YVtpICsgMV0gJSBwYzsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICAgIGRhdGFbaSArIDJdIC09IGRhdGFbaSArIDJdICUgcGM7IC8vIHNldCB2YWx1ZSB0byBuZWFyZXN0IG9mIDggcG9zc2liaWxpdGllc1xuICAgICAgfVxuXG4gICAgICB0aGlzLnB1dEltYWdlRGF0YShpbWdkYXRhLCAwLCAwKTsgLy8gcHV0IGltYWdlIGRhdGEgdG8gY2FudmFzXG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIGJ3OiBmdW5jdGlvbihwYykge1xuICAgICAgcGMgPSAxMjg7XG4gICAgICB2YXIgaW1nZGF0YSA9IHRoaXMuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgIHZhciBkYXRhID0gaW1nZGF0YS5kYXRhO1xuICAgICAgLy8gOC1iaXQ6IHJyciBnZ2cgYmJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gNCkge1xuICAgICAgICB2YXIgdiA9ICgoZGF0YVtpXSArIGRhdGFbaSArIDFdICsgZGF0YVtpICsgMl0pIC8gMyk7XG5cbiAgICAgICAgdiA9ICh2IC8gMTI4IHwgMCkgKiAxMjg7XG4gICAgICAgIC8vZGF0YVtpXSA9IHY7IC8vIHNldCB2YWx1ZSB0byBuZWFyZXN0IG9mIDggcG9zc2liaWxpdGllc1xuICAgICAgICAvL2RhdGFbaSArIDFdID0gdjsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICAgIGRhdGFbaSArIDJdID0gKHYgLyAyNTUpICogZGF0YVtpXTsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5wdXRJbWFnZURhdGEoaW1nZGF0YSwgMCwgMCk7IC8vIHB1dCBpbWFnZSBkYXRhIHRvIGNhbnZhc1xuICAgIH0sXG5cbiAgICBibGVuZDogZnVuY3Rpb24od2hhdCwgbW9kZSwgbWl4KSB7XG4gICAgICBpZiAodHlwZW9mIHdoYXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIGNvbG9yID0gd2hhdDtcbiAgICAgICAgd2hhdCA9IGNxKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB3aGF0LmZpbGxTdHlsZShjb2xvcikuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBjcS5ibGVuZCh0aGlzLCB3aGF0LCBtb2RlLCBtaXgpO1xuXG4gICAgICB0aGlzLmNhbnZhcyA9IHJlc3VsdC5jYW52YXM7XG4gICAgICB0aGlzLmNvbnRleHQgPSByZXN1bHQuY29udGV4dDtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHRleHRXaXRoQmFja2dyb3VuZDogZnVuY3Rpb24odGV4dCwgeCwgeSwgYmFja2dyb3VuZCwgcGFkZGluZykge1xuICAgICAgdmFyIHcgPSB0aGlzLm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgICAgdmFyIGggPSB0aGlzLmZvbnRIZWlnaHQoKSAqIDAuODtcbiAgICAgIHZhciBmID0gdGhpcy5maWxsU3R5bGUoKTtcbiAgICAgIHZhciBwYWRkaW5nID0gcGFkZGluZyB8fCAyO1xuXG4gICAgICB0aGlzLmZpbGxTdHlsZShiYWNrZ3JvdW5kKS5maWxsUmVjdCh4IC0gdyAvIDIgLSBwYWRkaW5nICogMiwgeSAtIHBhZGRpbmcsIHcgKyBwYWRkaW5nICogNCwgaCArIHBhZGRpbmcgKiAyKVxuICAgICAgdGhpcy5maWxsU3R5bGUoZikudGV4dEFsaWduKFwiY2VudGVyXCIpLnRleHRCYXNlbGluZShcInRvcFwiKS5maWxsVGV4dCh0ZXh0LCB4LCB5KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZpbGxDaXJjbGU6IGZ1bmN0aW9uKHgsIHksIHIpIHtcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzdHJva2VDaXJjbGU6IGZ1bmN0aW9uKHgsIHksIHIpIHtcbiAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNpcmNsZTogZnVuY3Rpb24oeCwgeSwgcikge1xuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY3JvcDogZnVuY3Rpb24oeCwgeSwgdywgaCkge1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgIHZhciB5ID0gYXJndW1lbnRzWzBdWzFdO1xuICAgICAgICB2YXIgdyA9IGFyZ3VtZW50c1swXVsyXTtcbiAgICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF1bM107XG4gICAgICAgIHZhciB4ID0gYXJndW1lbnRzWzBdWzBdO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ2FudmFzKHcsIGgpO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgeCwgeSwgdywgaCwgMCwgMCwgdywgaCk7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHc7XG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoO1xuICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShjYW52YXMsIDAsIDApO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG4gICAgICBjcS5leHRlbmQodGhpcy5jb250ZXh0LCBwcm9wZXJ0aWVzKTtcbiAgICB9LFxuXG4gICAgcmVzaXplOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgdyA9IHdpZHRoLFxuICAgICAgICBoID0gaGVpZ2h0O1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB3ID0gYXJndW1lbnRzWzBdICogdGhpcy5jYW52YXMud2lkdGggfCAwO1xuICAgICAgICBoID0gYXJndW1lbnRzWzBdICogdGhpcy5jYW52YXMuaGVpZ2h0IHwgMDtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgaWYgKGhlaWdodCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAodGhpcy5jYW52YXMud2lkdGggPiB3aWR0aCkge1xuICAgICAgICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodCAqICh3aWR0aCAvIHRoaXMuY2FudmFzLndpZHRoKSB8IDA7XG4gICAgICAgICAgICB3ID0gd2lkdGg7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICB3ID0gdGhpcy5jYW52YXMud2lkdGggKiAoaGVpZ2h0IC8gdGhpcy5jYW52YXMuaGVpZ2h0KSB8IDA7XG4gICAgICAgICAgICBoID0gaGVpZ2h0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3ID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgICAgICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3FyZXNpemVkID0gY3EodywgaCkuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0LCAwLCAwLCB3LCBoKTtcbiAgICAgIHRoaXMuY2FudmFzID0gY3FyZXNpemVkLmNhbnZhcztcbiAgICAgIHRoaXMuY29udGV4dCA9IGNxcmVzaXplZC5jb250ZXh0O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaW1hZ2VMaW5lOiBmdW5jdGlvbihpbWFnZSwgcmVnaW9uLCB4LCB5LCBleCwgZXksIHNjYWxlKSB7XG4gICAgICBpZiAoIXJlZ2lvbikgcmVnaW9uID0gWzAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHRdO1xuXG4gICAgICB2YXIgZGlzdGFuY2UgPSBjcS5kaXN0YW5jZSh4LCB5LCBleCwgZXkpO1xuICAgICAgdmFyIGNvdW50ID0gZGlzdGFuY2UgLyByZWdpb25bM10gKyAwLjUgfCAwO1xuICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihleSAtIHksIGV4IC0geCkgKyBNYXRoLlBJIC8gMjtcblxuICAgICAgdGhpcy5zYXZlKCk7XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgdGhpcy5yb3RhdGUoYW5nbGUpO1xuXG4gICAgICBpZiAoc2NhbGUpIHRoaXMuc2NhbGUoc2NhbGUsIDEuMCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGNvdW50OyBpKyspIHtcbiAgICAgICAgdGhpcy5kcmF3UmVnaW9uKGltYWdlLCByZWdpb24sIC1yZWdpb25bMl0gLyAyIHwgMCwgLXJlZ2lvblszXSAqIChpICsgMSkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHRyaW06IGZ1bmN0aW9uKGNvbG9yLCBjaGFuZ2VzKSB7XG4gICAgICB2YXIgdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICBjb2xvciA9IGNxLmNvbG9yKGNvbG9yKS50b0FycmF5KCk7XG4gICAgICAgIHRyYW5zcGFyZW50ID0gIWNvbG9yWzNdO1xuICAgICAgfSBlbHNlIHRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgdmFyIGJvdW5kID0gW3RoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIDAsIDBdO1xuXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaWYgKHRyYW5zcGFyZW50KSB7XG4gICAgICAgICAgaWYgKCFzb3VyY2VQaXhlbHNbaSArIDNdKSBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VQaXhlbHNbaSArIDBdID09PSBjb2xvclswXSAmJiBzb3VyY2VQaXhlbHNbaSArIDFdID09PSBjb2xvclsxXSAmJiBzb3VyY2VQaXhlbHNbaSArIDJdID09PSBjb2xvclsyXSkgY29udGludWU7XG5cbiAgICAgICAgdmFyIHggPSAoaSAvIDQgfCAwKSAlIHRoaXMuY2FudmFzLndpZHRoIHwgMDtcbiAgICAgICAgdmFyIHkgPSAoaSAvIDQgfCAwKSAvIHRoaXMuY2FudmFzLndpZHRoIHwgMDtcblxuICAgICAgICBpZiAoeCA8IGJvdW5kWzBdKSBib3VuZFswXSA9IHg7XG4gICAgICAgIGlmICh4ID4gYm91bmRbMl0pIGJvdW5kWzJdID0geDtcblxuICAgICAgICBpZiAoeSA8IGJvdW5kWzFdKSBib3VuZFsxXSA9IHk7XG4gICAgICAgIGlmICh5ID4gYm91bmRbM10pIGJvdW5kWzNdID0geTtcbiAgICAgIH1cblxuXG4gICAgICBpZiAoYm91bmRbMl0gPT09IDAgJiYgYm91bmRbM10gPT09IDApIHt9IGVsc2Uge1xuICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgIGNoYW5nZXMubGVmdCA9IGJvdW5kWzBdO1xuICAgICAgICAgIGNoYW5nZXMudG9wID0gYm91bmRbMV07XG5cbiAgICAgICAgICBjaGFuZ2VzLmJvdHRvbSA9IGhlaWdodCAtIGJvdW5kWzNdO1xuICAgICAgICAgIGNoYW5nZXMucmlnaHQgPSB3aWR0aCAtIGJvdW5kWzJdIC0gYm91bmRbMF07XG5cbiAgICAgICAgICBjaGFuZ2VzLndpZHRoID0gYm91bmRbMl0gLSBib3VuZFswXTtcbiAgICAgICAgICBjaGFuZ2VzLmhlaWdodCA9IGJvdW5kWzNdIC0gYm91bmRbMV07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNyb3AoYm91bmRbMF0sIGJvdW5kWzFdLCBib3VuZFsyXSAtIGJvdW5kWzBdICsgMSwgYm91bmRbM10gLSBib3VuZFsxXSArIDEpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbWF0Y2hQYWxldHRlOiBmdW5jdGlvbihwYWxldHRlKSB7XG4gICAgICB2YXIgaW1nRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIHZhciByZ2JQYWxldHRlID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFsZXR0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZ2JQYWxldHRlLnB1c2goY3EuY29sb3IocGFsZXR0ZVtpXSkpO1xuICAgICAgfVxuXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1nRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIHZhciBkaWZMaXN0ID0gW107XG4gICAgICAgIGlmICghaW1nRGF0YS5kYXRhW2kgKyAzXSkgY29udGludWU7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByZ2JQYWxldHRlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgdmFyIHJnYlZhbCA9IHJnYlBhbGV0dGVbal07XG4gICAgICAgICAgdmFyIHJEaWYgPSBNYXRoLmFicyhpbWdEYXRhLmRhdGFbaV0gLSByZ2JWYWxbMF0pLFxuICAgICAgICAgICAgZ0RpZiA9IE1hdGguYWJzKGltZ0RhdGEuZGF0YVtpICsgMV0gLSByZ2JWYWxbMV0pLFxuICAgICAgICAgICAgYkRpZiA9IE1hdGguYWJzKGltZ0RhdGEuZGF0YVtpICsgMl0gLSByZ2JWYWxbMl0pO1xuICAgICAgICAgIGRpZkxpc3QucHVzaChyRGlmICsgZ0RpZiArIGJEaWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsb3Nlc3RNYXRjaCA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWxldHRlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgaWYgKGRpZkxpc3Rbal0gPCBkaWZMaXN0W2Nsb3Nlc3RNYXRjaF0pIHtcbiAgICAgICAgICAgIGNsb3Nlc3RNYXRjaCA9IGo7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhbGV0dGVSZ2IgPSBjcS5oZXhUb1JnYihwYWxldHRlW2Nsb3Nlc3RNYXRjaF0pO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaV0gPSBwYWxldHRlUmdiWzBdO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSArIDFdID0gcGFsZXR0ZVJnYlsxXTtcbiAgICAgICAgaW1nRGF0YS5kYXRhW2kgKyAyXSA9IHBhbGV0dGVSZ2JbMl07XG5cbiAgICAgICAgLyogZGl0aGVyaW5nICovXG4gICAgICAgIC8vaW1nRGF0YS5kYXRhW2kgKyAzXSA9ICgyNTUgKiBNYXRoLnJhbmRvbSgpIDwgaW1nRGF0YS5kYXRhW2kgKyAzXSkgPyAyNTUgOiAwO1xuXG4gICAgICAgIC8vaW1nRGF0YS5kYXRhW2kgKyAzXSA9IGltZ0RhdGEuZGF0YVtpICsgM10gPiAxMjggPyAyNTUgOiAwO1xuICAgICAgICAvKlxuICAgICAgICBpZiAoaSAlIDMgPT09IDApIHtcbiAgICAgICAgICBpbWdEYXRhLmRhdGFbaV0gLT0gY3EubGltaXRWYWx1ZShpbWdEYXRhLmRhdGFbaV0gLSA1MCwgMCwgMjU1KTtcbiAgICAgICAgICBpbWdEYXRhLmRhdGFbaSArIDFdIC09IGNxLmxpbWl0VmFsdWUoaW1nRGF0YS5kYXRhW2kgKyAxXSAtIDUwLCAwLCAyNTUpO1xuICAgICAgICAgIGltZ0RhdGEuZGF0YVtpICsgMl0gLT0gY3EubGltaXRWYWx1ZShpbWdEYXRhLmRhdGFbaSArIDJdIC0gNTAsIDAsIDI1NSk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGltZ0RhdGEsIDAsIDApO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGFsZXR0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcGFsZXR0ZSA9IFtdO1xuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoc291cmNlUGl4ZWxzW2kgKyAzXSkge1xuICAgICAgICAgIHZhciBoZXggPSBjcS5yZ2JUb0hleChzb3VyY2VQaXhlbHNbaSArIDBdLCBzb3VyY2VQaXhlbHNbaSArIDFdLCBzb3VyY2VQaXhlbHNbaSArIDJdKTtcbiAgICAgICAgICBpZiAocGFsZXR0ZS5pbmRleE9mKGhleCkgPT09IC0xKSBwYWxldHRlLnB1c2goaGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFsZXR0ZTtcbiAgICB9LFxuXG4gICAgbWFwUGFsZXR0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB9LFxuXG4gICAgcG9seWdvbjogZnVuY3Rpb24oYXJyYXkpIHtcblxuICAgICAgdGhpcy5iZWdpblBhdGgoKTtcblxuICAgICAgdGhpcy5tb3ZlVG8oYXJyYXlbMF1bMF0sIGFycmF5WzBdWzFdKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmxpbmVUbyhhcnJheVtpXVswXSwgYXJyYXlbaV1bMV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlUGF0aCgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZmlsbFBvbHlnb246IGZ1bmN0aW9uKHBvbHlnb24pIHtcbiAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLnBvbHlnb24ocG9seWdvbik7XG4gICAgICB0aGlzLmZpbGwoKTtcbiAgICB9LFxuXG4gICAgc3Ryb2tlUG9seWdvbjogZnVuY3Rpb24ocG9seWdvbikge1xuICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMucG9seWdvbihwb2x5Z29uKTtcbiAgICAgIHRoaXMuc3Ryb2tlKCk7XG4gICAgfSxcblxuICAgIGNvbG9yVG9NYXNrOiBmdW5jdGlvbihjb2xvciwgaW52ZXJ0ZWQpIHtcbiAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpLnRvQXJyYXkoKTtcbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtYXNrID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaWYgKHNvdXJjZVBpeGVsc1tpICsgM10gPiAwKSBtYXNrLnB1c2goaW52ZXJ0ZWQgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgICBlbHNlIG1hc2sucHVzaChpbnZlcnRlZCA/IHRydWUgOiBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0sXG5cbiAgICBncmF5c2NhbGVUb01hc2s6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICB2YXIgbWFzayA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIG1hc2sucHVzaCgoKHNvdXJjZVBpeGVsc1tpICsgMF0gKyBzb3VyY2VQaXhlbHNbaSArIDFdICsgc291cmNlUGl4ZWxzW2kgKyAyXSkgLyAzKSAvIDI1NSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXNrO1xuICAgIH0sXG5cbiAgICBhcHBseU1hc2s6IGZ1bmN0aW9uKG1hc2spIHtcbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtb2RlID0gdHlwZW9mIG1hc2tbMF0gPT09IFwiYm9vbGVhblwiID8gXCJib29sXCIgOiBcImJ5dGVcIjtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBtYXNrW2kgLyA0XTtcbiAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAzXSA9IHZhbHVlICogMjU1IHwgMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShzb3VyY2VEYXRhLCAwLCAwKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBmaWxsTWFzazogZnVuY3Rpb24obWFzaykge1xuXG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICB2YXIgbWFza1R5cGUgPSB0eXBlb2YgbWFza1swXSA9PT0gXCJib29sZWFuXCIgPyBcImJvb2xcIiA6IFwiYnl0ZVwiO1xuICAgICAgdmFyIGNvbG9yTW9kZSA9IGFyZ3VtZW50cy5sZW5ndGggPT09IDIgPyBcIm5vcm1hbFwiIDogXCJncmFkaWVudFwiO1xuXG4gICAgICB2YXIgY29sb3IgPSBjcS5jb2xvcihhcmd1bWVudHNbMV0pO1xuICAgICAgaWYgKGNvbG9yTW9kZSA9PT0gXCJncmFkaWVudFwiKSBjb2xvckIgPSBjcS5jb2xvcihhcmd1bWVudHNbMl0pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hc2tbaSAvIDRdO1xuXG4gICAgICAgIGlmIChtYXNrVHlwZSA9PT0gXCJieXRlXCIpIHZhbHVlIC89IDI1NTtcblxuICAgICAgICBpZiAoY29sb3JNb2RlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDBdID0gY29sb3JbMF0gfCAwO1xuICAgICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAxXSA9IGNvbG9yWzFdIHwgMDtcbiAgICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMl0gPSBjb2xvclsyXSB8IDA7XG4gICAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDNdID0gdmFsdWUgKiAyNTUgfCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDBdID0gY29sb3JbMF0gKyAoY29sb3JCWzBdIC0gY29sb3JbMF0pICogdmFsdWUgfCAwO1xuICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMV0gPSBjb2xvclsxXSArIChjb2xvckJbMV0gLSBjb2xvclsxXSkgKiB2YWx1ZSB8IDA7XG4gICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAyXSA9IGNvbG9yWzJdICsgKGNvbG9yQlsyXSAtIGNvbG9yWzJdKSAqIHZhbHVlIHwgMDtcbiAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDNdID0gMjU1O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoc291cmNlRGF0YSwgMCwgMCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgICBpZiAoY29sb3IpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICAvLyB2YXIgcmVzdWx0ID0gY3EuY3JlYXRlQ2FudmFzKHRoaXMuY2FudmFzKTtcblxuICAgICAgdmFyIHJlc3VsdCA9IGNxLnBvb2woKTtcbiAgICAgIHJlc3VsdC53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICByZXN1bHQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICByZXN1bHQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZSh0aGlzLmNhbnZhcywgMCwgMCk7XG5cbiAgICAgIHJldHVybiBjcShyZXN1bHQpO1xuICAgIH0sXG5cbiAgICBncmFkaWVudFRleHQ6IGZ1bmN0aW9uKHRleHQsIHgsIHksIG1heFdpZHRoLCBncmFkaWVudCkge1xuXG4gICAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgICAgdmFyIGggPSB0aGlzLmZvbnRIZWlnaHQoKSAqIDI7XG5cbiAgICAgIHZhciBveCA9IDA7XG4gICAgICB2YXIgb3kgPSAwO1xuXG4gICAgICBpZiAobWF4V2lkdGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSAwO1xuICAgICAgICB2YXIgbGluZXMgPSBbXCJcIl07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB3b3JkID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgICAgICB2YXIgd29yZFdpZHRoID0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHdvcmQpLndpZHRoO1xuXG4gICAgICAgICAgaWYgKG94ICsgd29yZFdpZHRoID4gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIGxpbmVzWysrbGluZV0gPSBcIlwiO1xuICAgICAgICAgICAgb3ggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2xpbmVdICs9IHdvcmQ7XG5cbiAgICAgICAgICBveCArPSB3b3JkV2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB2YXIgbGluZXMgPSBbdGV4dF07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG95ID0geSArIGkgKiBoICogMC42IHwgMDtcbiAgICAgICAgdmFyIGxpbmdyYWQgPSB0aGlzLmNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgb3ksIDAsIG95ICsgaCAqIDAuNiB8IDApO1xuXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZ3JhZGllbnQubGVuZ3RoOyBqICs9IDIpIHtcbiAgICAgICAgICBsaW5ncmFkLmFkZENvbG9yU3RvcChncmFkaWVudFtqXSwgZ3JhZGllbnRbaiArIDFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0ZXh0ID0gbGluZXNbaV07XG5cbiAgICAgICAgdGhpcy5maWxsU3R5bGUobGluZ3JhZCkuZmlsbFRleHQodGV4dCwgeCwgb3kpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ29sb3I6IGZ1bmN0aW9uKGNvbG9yKSB7XG5cbiAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpO1xuXG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgcGl4ZWxzID0gZGF0YS5kYXRhO1xuXG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMuY2FudmFzLndpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhcy5oZWlnaHQ7IHkrKykge1xuICAgICAgICAgIHZhciBpID0gKHkgKiB0aGlzLmNhbnZhcy53aWR0aCArIHgpICogNDtcblxuICAgICAgICAgIGlmIChwaXhlbHNbaSArIDBdID09PSBjb2xvclswXSAmJiBwaXhlbHNbaSArIDFdID09PSBjb2xvclsxXSAmJiBwaXhlbHNbaSArIDJdID09PSBjb2xvclsyXSkge1xuICAgICAgICAgICAgcGl4ZWxzW2kgKyAzXSA9IDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgb3V0bGluZTogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgcGl4ZWxzID0gZGF0YS5kYXRhO1xuXG4gICAgICB2YXIgbmV3RGF0YSA9IHRoaXMuY3JlYXRlSW1hZ2VEYXRhKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIG5ld1BpeGVscyA9IG5ld0RhdGEuZGF0YTtcblxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuY2FudmFzO1xuXG4gICAgICBmdW5jdGlvbiBjaGVjayh4LCB5KSB7XG5cbiAgICAgICAgaWYgKHggPCAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHggPj0gY2FudmFzLndpZHRoKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHkgPCAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHkgPj0gY2FudmFzLmhlaWdodCkgcmV0dXJuIDA7XG5cbiAgICAgICAgdmFyIGkgPSAoeCArIHkgKiBjYW52YXMud2lkdGgpICogNDtcblxuICAgICAgICByZXR1cm4gcGl4ZWxzW2kgKyAzXSA+IDA7XG5cbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB0aGlzLmNhbnZhcy53aWR0aDsgeCsrKSB7XG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgdGhpcy5jYW52YXMuaGVpZ2h0OyB5KyspIHtcblxuICAgICAgICAgIHZhciBmdWxsID0gMDtcbiAgICAgICAgICB2YXIgaSA9ICh5ICogY2FudmFzLndpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgICAgaWYgKCFwaXhlbHNbaSArIDNdKSBjb250aW51ZTtcblxuICAgICAgICAgIGZ1bGwgKz0gY2hlY2soeCAtIDEsIHkpO1xuICAgICAgICAgIGZ1bGwgKz0gY2hlY2soeCArIDEsIHkpO1xuICAgICAgICAgIGZ1bGwgKz0gY2hlY2soeCwgeSAtIDEpO1xuICAgICAgICAgIGZ1bGwgKz0gY2hlY2soeCwgeSArIDEpO1xuXG4gICAgICAgICAgaWYgKGZ1bGwgIT09IDQpIHtcblxuICAgICAgICAgICAgbmV3UGl4ZWxzW2ldID0gMjU1O1xuICAgICAgICAgICAgbmV3UGl4ZWxzW2kgKyAxXSA9IDI1NTtcbiAgICAgICAgICAgIG5ld1BpeGVsc1tpICsgMl0gPSAyNTU7XG4gICAgICAgICAgICBuZXdQaXhlbHNbaSArIDNdID0gMjU1O1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEobmV3RGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzZXRIc2w6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgcGl4ZWxzID0gZGF0YS5kYXRhO1xuICAgICAgdmFyIHIsIGcsIGIsIGEsIGgsIHMsIGwsIGhzbCA9IFtdLFxuICAgICAgICBuZXdQaXhlbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGhzbCA9IGNxLnJnYlRvSHNsKHBpeGVsc1tpICsgMF0sIHBpeGVsc1tpICsgMV0sIHBpeGVsc1tpICsgMl0pO1xuXG4gICAgICAgIGggPSBhcmdzWzBdID09PSBmYWxzZSA/IGhzbFswXSA6IGNxLmxpbWl0VmFsdWUoYXJnc1swXSwgMCwgMSk7XG4gICAgICAgIHMgPSBhcmdzWzFdID09PSBmYWxzZSA/IGhzbFsxXSA6IGNxLmxpbWl0VmFsdWUoYXJnc1sxXSwgMCwgMSk7XG4gICAgICAgIGwgPSBhcmdzWzJdID09PSBmYWxzZSA/IGhzbFsyXSA6IGNxLmxpbWl0VmFsdWUoYXJnc1syXSwgMCwgMSk7XG5cbiAgICAgICAgbmV3UGl4ZWwgPSBjcS5oc2xUb1JnYihoLCBzLCBsKTtcblxuICAgICAgICBwaXhlbHNbaSArIDBdID0gbmV3UGl4ZWxbMF07XG4gICAgICAgIHBpeGVsc1tpICsgMV0gPSBuZXdQaXhlbFsxXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAyXSA9IG5ld1BpeGVsWzJdO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgc2hpZnRIc2w6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgcGl4ZWxzID0gZGF0YS5kYXRhO1xuICAgICAgdmFyIHIsIGcsIGIsIGEsIGgsIHMsIGwsIGhzbCA9IFtdLFxuICAgICAgICBuZXdQaXhlbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGhzbCA9IGNxLnJnYlRvSHNsKHBpeGVsc1tpICsgMF0sIHBpeGVsc1tpICsgMV0sIHBpeGVsc1tpICsgMl0pO1xuXG4gICAgICAgIGlmIChwaXhlbHNbaSArIDBdICE9PSBwaXhlbHNbaSArIDFdIHx8IHBpeGVsc1tpICsgMV0gIT09IHBpeGVsc1tpICsgMl0pIHtcbiAgICAgICAgICBoID0gYXJnc1swXSA9PT0gZmFsc2UgPyBoc2xbMF0gOiBjcS53cmFwVmFsdWUoaHNsWzBdICsgYXJnc1swXSwgMCwgMSk7XG4gICAgICAgICAgcyA9IGFyZ3NbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShoc2xbMV0gKyBhcmdzWzFdLCAwLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoID0gaHNsWzBdO1xuICAgICAgICAgIHMgPSBoc2xbMV07XG4gICAgICAgIH1cblxuICAgICAgICBsID0gYXJnc1syXSA9PT0gZmFsc2UgPyBoc2xbMl0gOiBjcS5saW1pdFZhbHVlKGhzbFsyXSArIGFyZ3NbMl0sIDAsIDEpO1xuXG4gICAgICAgIG5ld1BpeGVsID0gY3EuaHNsVG9SZ2IoaCwgcywgbCk7XG5cbiAgICAgICAgcGl4ZWxzW2kgKyAwXSA9IG5ld1BpeGVsWzBdO1xuICAgICAgICBwaXhlbHNbaSArIDFdID0gbmV3UGl4ZWxbMV07XG4gICAgICAgIHBpeGVsc1tpICsgMl0gPSBuZXdQaXhlbFsyXTtcbiAgICAgIH1cblxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKGRhdGEsIDAsIDApO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYXBwbHlDb2xvcjogZnVuY3Rpb24oY29sb3IpIHtcblxuICAgICAgaWYgKENPQ09PTkpTKSByZXR1cm4gdGhpcztcbiAgICAgIHRoaXMuc2F2ZSgpO1xuXG4gICAgICB0aGlzLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbihcInNvdXJjZS1pblwiKTtcbiAgICAgIHRoaXMuY2xlYXIoY29sb3IpO1xuXG4gICAgICB0aGlzLnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG5lZ2F0aXZlOiBmdW5jdGlvbihzcmMsIGRzdCkge1xuXG4gICAgICB2YXIgZGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgcGl4ZWxzID0gZGF0YS5kYXRhO1xuICAgICAgdmFyIHIsIGcsIGIsIGEsIGgsIHMsIGwsIGhzbCA9IFtdLFxuICAgICAgICBuZXdQaXhlbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIHBpeGVsc1tpICsgMF0gPSAyNTUgLSBwaXhlbHNbaSArIDBdO1xuICAgICAgICBwaXhlbHNbaSArIDFdID0gMjU1IC0gcGl4ZWxzW2kgKyAxXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAyXSA9IDI1NSAtIHBpeGVsc1tpICsgMl07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByb3VuZFJlY3Q6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuXG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XG4gICAgICB0aGlzLmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xuICAgICAgdGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3aWR0aCwgeSwgeCArIHdpZHRoLCB5ICsgcmFkaXVzKTtcbiAgICAgIHRoaXMubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICB0aGlzLnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xuICAgICAgdGhpcy5saW5lVG8oeCArIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgICB0aGlzLnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XG4gICAgICB0aGlzLmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcbiAgICAgIHRoaXMucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgcmFkaXVzLCB5KTtcbiAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYXJrdXBUZXh0OiBmdW5jdGlvbih0ZXh0KSB7XG5cblxuICAgIH0sXG5cbiAgICB3cmFwcGVkVGV4dDogZnVuY3Rpb24odGV4dCwgeCwgeSwgbWF4V2lkdGgsIGxpbmVIZWlnaHQpIHtcblxuICAgICAgdmFyIHdvcmRzID0gdGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICAgIHZhciBsaW5lSGVpZ2h0ID0gbGluZUhlaWdodCB8fCB0aGlzLmZvbnRIZWlnaHQoKTtcblxuICAgICAgdmFyIG94ID0gMDtcbiAgICAgIHZhciBveSA9IDA7XG5cbiAgICAgIGlmIChtYXhXaWR0aCkge1xuICAgICAgICB2YXIgbGluZSA9IDA7XG4gICAgICAgIHZhciBsaW5lcyA9IFtcIlwiXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgICAgIHZhciB3b3JkV2lkdGggPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQod29yZCkud2lkdGg7XG5cbiAgICAgICAgICBpZiAob3ggKyB3b3JkV2lkdGggPiBtYXhXaWR0aCB8fCB3b3Jkc1tpXSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICAgbGluZXNbKytsaW5lXSA9IFwiXCI7XG4gICAgICAgICAgICBveCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh3b3Jkc1tpXSAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgbGluZXNbbGluZV0gKz0gd29yZDtcblxuICAgICAgICAgICAgb3ggKz0gd29yZFdpZHRoO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFt0ZXh0XTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb3kgPSB5ICsgaSAqIGxpbmVIZWlnaHQgfCAwO1xuXG4gICAgICAgIHZhciB0ZXh0ID0gbGluZXNbaV07XG5cbiAgICAgICAgdGhpcy5maWxsVGV4dCh0ZXh0LCB4LCBveSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBmb250SGVpZ2h0czoge30sXG5cbiAgICBmb250SGVpZ2h0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmb250ID0gdGhpcy5mb250KCk7XG5cbiAgICAgIGlmICghdGhpcy5mb250SGVpZ2h0c1tmb250XSkge1xuICAgICAgICB2YXIgdGVtcCA9IGNxKDEwMCwgMTAwKTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDA7XG4gICAgICAgIHZhciBjaGFuZ2VzID0ge307XG4gICAgICAgIHRlbXAuZm9udChmb250KS5maWxsU3R5bGUoXCIjZmZmXCIpO1xuICAgICAgICB0ZW1wLnRleHRCYXNlbGluZShcImJvdHRvbVwiKS5maWxsVGV4dChcImdNXCIsIDI1LCAxMDApO1xuICAgICAgICB0ZW1wLnRyaW0oZmFsc2UsIGNoYW5nZXMpO1xuICAgICAgICBoZWlnaHQgKz0gY2hhbmdlcy5ib3R0b207XG5cbiAgICAgICAgdmFyIHRlbXAgPSBjcSgxMDAsIDEwMCk7XG4gICAgICAgIHZhciBjaGFuZ2VzID0ge307XG4gICAgICAgIHRlbXAuZm9udChmb250KS5maWxsU3R5bGUoXCIjZmZmXCIpO1xuICAgICAgICB0ZW1wLnRleHRCYXNlbGluZShcInRvcFwiKS5maWxsVGV4dChcImdNXCIsIDI1LCAwKTtcbiAgICAgICAgdGVtcC50cmltKGZhbHNlLCBjaGFuZ2VzKTtcbiAgICAgICAgaGVpZ2h0ICs9IGNoYW5nZXMudG9wO1xuXG4gICAgICAgIHZhciB0ZW1wID0gY3EoMTAwLCAxMDApO1xuICAgICAgICB2YXIgY2hhbmdlcyA9IHt9O1xuICAgICAgICB0ZW1wLmZvbnQoZm9udCkuZmlsbFN0eWxlKFwiI2ZmZlwiKTtcbiAgICAgICAgdGVtcC50ZXh0QmFzZWxpbmUoXCJhbHBoYWJldGljXCIpLmZpbGxUZXh0KFwiZ01cIiwgNTAsIDUwKTtcbiAgICAgICAgdGVtcC50cmltKGZhbHNlLCBjaGFuZ2VzKTtcbiAgICAgICAgaGVpZ2h0ICs9IHRlbXAuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZm9udEhlaWdodHNbZm9udF0gPSBoZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmZvbnRIZWlnaHRzW2ZvbnRdO1xuICAgIH0sXG5cbiAgICB0ZXh0Qm91bmRhcmllczogZnVuY3Rpb24odGV4dCwgbWF4V2lkdGgpIHtcbiAgICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgICB2YXIgaCA9IHRoaXMuZm9udEhlaWdodCgpO1xuXG4gICAgICB2YXIgb3ggPSAwO1xuICAgICAgdmFyIG95ID0gMDtcblxuICAgICAgaWYgKG1heFdpZHRoKSB7XG4gICAgICAgIHZhciBsaW5lID0gMDtcbiAgICAgICAgdmFyIGxpbmVzID0gW1wiXCJdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgd29yZCA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgICAgICAgdmFyIHdvcmRXaWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dCh3b3JkKS53aWR0aDtcblxuICAgICAgICAgIGlmIChveCArIHdvcmRXaWR0aCA+IG1heFdpZHRoIHx8IHdvcmRzW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBsaW5lc1srK2xpbmVdID0gXCJcIjtcbiAgICAgICAgICAgIG94ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAod29yZHNbaV0gIT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGxpbmVzW2xpbmVdICs9IHdvcmQ7XG4gICAgICAgICAgICBveCArPSB3b3JkV2lkdGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbGluZXMgPSBbdGV4dF07XG4gICAgICAgIG1heFdpZHRoID0gdGhpcy5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVpZ2h0OiBsaW5lcy5sZW5ndGggKiBoLFxuICAgICAgICB3aWR0aDogbWF4V2lkdGgsXG4gICAgICAgIGxpbmVzOiBsaW5lcy5sZW5ndGgsXG4gICAgICAgIGxpbmVIZWlnaHQ6IGhcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVwZWF0SW1hZ2VSZWdpb246IGZ1bmN0aW9uKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHgsIGR5LCBkdywgZGgpIHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgdGhpcy5yZWN0KGR4LCBkeSwgZHcsIGRoKTtcbiAgICAgIHRoaXMuY2xpcCgpO1xuXG4gICAgICBmb3IgKHZhciB4ID0gMCwgbGVuID0gTWF0aC5jZWlsKGR3IC8gc3cpOyB4IDwgbGVuOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IDAsIGxlbnkgPSBNYXRoLmNlaWwoZGggLyBzaCk7IHkgPCBsZW55OyB5KyspIHtcbiAgICAgICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5LCBzdywgc2gsIGR4ICsgeCAqIHN3LCBkeSArIHkgKiBzaCwgc3csIHNoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnJlc3RvcmUoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlcGVhdEltYWdlOiBmdW5jdGlvbihpbWFnZSwgeCwgeSwgdywgaCkge1xuICAgICAgLy8gaWYgKCFlbnYuZGV0YWlscykgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgOSkge1xuICAgICAgICB0aGlzLnJlcGVhdEltYWdlUmVnaW9uKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCB4LCB5LCB3LCBoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVwZWF0SW1hZ2VSZWdpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGJvcmRlckltYWdlOiBmdW5jdGlvbihpbWFnZSwgeCwgeSwgdywgaCwgdCwgciwgYiwgbCwgZmlsbCkge1xuXG4gICAgICAvLyBpZiAoIWVudi5kZXRhaWxzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKHR5cGVvZiB0ID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgdmFyIGJvdHRvbUxlZnQgPSB0LmJvdHRvbUxlZnQgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgYm90dG9tUmlnaHQgPSB0LmJvdHRvbVJpZ2h0IHx8IFswLCAwLCAwLCAwXTtcbiAgICAgICAgdmFyIHRvcExlZnQgPSB0LnRvcExlZnQgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgdG9wUmlnaHQgPSB0LnRvcFJpZ2h0IHx8IFswLCAwLCAwLCAwXTtcblxuICAgICAgICB2YXIgY2xoID0gYm90dG9tTGVmdFszXSArIHRvcExlZnRbM107XG4gICAgICAgIHZhciBjcmggPSBib3R0b21SaWdodFszXSArIHRvcFJpZ2h0WzNdO1xuICAgICAgICB2YXIgY3R3ID0gdG9wTGVmdFsyXSArIHRvcFJpZ2h0WzJdO1xuICAgICAgICB2YXIgY2J3ID0gYm90dG9tTGVmdFsyXSArIGJvdHRvbVJpZ2h0WzJdO1xuXG4gICAgICAgIHQuZmlsbFBhZGRpbmcgPSBbMCwgMCwgMCwgMF07XG5cbiAgICAgICAgaWYgKHQubGVmdCkgdC5maWxsUGFkZGluZ1swXSA9IHQubGVmdFsyXTtcbiAgICAgICAgaWYgKHQudG9wKSB0LmZpbGxQYWRkaW5nWzFdID0gdC50b3BbM107XG4gICAgICAgIGlmICh0LnJpZ2h0KSB0LmZpbGxQYWRkaW5nWzJdID0gdC5yaWdodFsyXTtcbiAgICAgICAgaWYgKHQuYm90dG9tKSB0LmZpbGxQYWRkaW5nWzNdID0gdC5ib3R0b21bM107XG5cbiAgICAgICAgLy8gaWYgKCF0LmZpbGxQYWRkaW5nKSB0LmZpbGxQYWRkaW5nID0gWzAsIDAsIDAsIDBdO1xuXG4gICAgICAgIGlmICh0LmZpbGwpIHtcbiAgICAgICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgdC5maWxsWzBdLCB0LmZpbGxbMV0sIHQuZmlsbFsyXSwgdC5maWxsWzNdLCB4ICsgdC5maWxsUGFkZGluZ1swXSwgeSArIHQuZmlsbFBhZGRpbmdbMV0sIHcgLSB0LmZpbGxQYWRkaW5nWzJdIC0gdC5maWxsUGFkZGluZ1swXSwgaCAtIHQuZmlsbFBhZGRpbmdbM10gLSB0LmZpbGxQYWRkaW5nWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyB0aGlzLmZpbGxSZWN0KHggKyB0LmZpbGxQYWRkaW5nWzBdLCB5ICsgdC5maWxsUGFkZGluZ1sxXSwgdyAtIHQuZmlsbFBhZGRpbmdbMl0gLSB0LmZpbGxQYWRkaW5nWzBdLCBoIC0gdC5maWxsUGFkZGluZ1szXSAtIHQuZmlsbFBhZGRpbmdbMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHQubGVmdCkgdGhpc1t0LmxlZnRbNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQubGVmdFswXSwgdC5sZWZ0WzFdLCB0LmxlZnRbMl0sIHQubGVmdFszXSwgeCwgeSArIHRvcExlZnRbM10sIHQubGVmdFsyXSwgaCAtIGNsaCk7XG4gICAgICAgIGlmICh0LnJpZ2h0KSB0aGlzW3QucmlnaHRbNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQucmlnaHRbMF0sIHQucmlnaHRbMV0sIHQucmlnaHRbMl0sIHQucmlnaHRbM10sIHggKyB3IC0gdC5yaWdodFsyXSwgeSArIHRvcFJpZ2h0WzNdLCB0LnJpZ2h0WzJdLCBoIC0gY3JoKTtcbiAgICAgICAgaWYgKHQudG9wKSB0aGlzW3QudG9wWzRdID09PSBcInN0cmV0Y2hcIiA/IFwiZHJhd0ltYWdlXCIgOiBcInJlcGVhdEltYWdlXCJdKGltYWdlLCB0LnRvcFswXSwgdC50b3BbMV0sIHQudG9wWzJdLCB0LnRvcFszXSwgeCArIHRvcExlZnRbMl0sIHksIHcgLSBjdHcsIHQudG9wWzNdKTtcbiAgICAgICAgaWYgKHQuYm90dG9tKSB0aGlzW3QuYm90dG9tWzRdID09PSBcInN0cmV0Y2hcIiA/IFwiZHJhd0ltYWdlXCIgOiBcInJlcGVhdEltYWdlXCJdKGltYWdlLCB0LmJvdHRvbVswXSwgdC5ib3R0b21bMV0sIHQuYm90dG9tWzJdLCB0LmJvdHRvbVszXSwgeCArIGJvdHRvbUxlZnRbMl0sIHkgKyBoIC0gdC5ib3R0b21bM10sIHcgLSBjYncsIHQuYm90dG9tWzNdKTtcblxuICAgICAgICBpZiAodC5ib3R0b21MZWZ0KSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgdC5ib3R0b21MZWZ0WzBdLCB0LmJvdHRvbUxlZnRbMV0sIHQuYm90dG9tTGVmdFsyXSwgdC5ib3R0b21MZWZ0WzNdLCB4LCB5ICsgaCAtIHQuYm90dG9tTGVmdFszXSwgdC5ib3R0b21MZWZ0WzJdLCB0LmJvdHRvbUxlZnRbM10pO1xuICAgICAgICBpZiAodC50b3BMZWZ0KSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgdC50b3BMZWZ0WzBdLCB0LnRvcExlZnRbMV0sIHQudG9wTGVmdFsyXSwgdC50b3BMZWZ0WzNdLCB4LCB5LCB0LnRvcExlZnRbMl0sIHQudG9wTGVmdFszXSk7XG4gICAgICAgIGlmICh0LnRvcFJpZ2h0KSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgdC50b3BSaWdodFswXSwgdC50b3BSaWdodFsxXSwgdC50b3BSaWdodFsyXSwgdC50b3BSaWdodFszXSwgeCArIHcgLSB0LnRvcFJpZ2h0WzJdLCB5LCB0LnRvcFJpZ2h0WzJdLCB0LnRvcFJpZ2h0WzNdKTtcbiAgICAgICAgaWYgKHQuYm90dG9tUmlnaHQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LmJvdHRvbVJpZ2h0WzBdLCB0LmJvdHRvbVJpZ2h0WzFdLCB0LmJvdHRvbVJpZ2h0WzJdLCB0LmJvdHRvbVJpZ2h0WzNdLCB4ICsgdyAtIHQuYm90dG9tUmlnaHRbMl0sIHkgKyBoIC0gdC5ib3R0b21SaWdodFszXSwgdC5ib3R0b21SaWdodFsyXSwgdC5ib3R0b21SaWdodFszXSk7XG5cblxuICAgICAgfSBlbHNlIHtcblxuXG4gICAgICAgIC8qIHRvcCAqL1xuICAgICAgICBpZiAodCA+IDAgJiYgdyAtIGwgLSByID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIGwsIDAsIGltYWdlLndpZHRoIC0gbCAtIHIsIHQsIHggKyBsLCB5LCB3IC0gbCAtIHIsIHQpO1xuXG4gICAgICAgIC8qIGJvdHRvbSAqL1xuICAgICAgICBpZiAoYiA+IDAgJiYgdyAtIGwgLSByID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIGwsIGltYWdlLmhlaWdodCAtIGIsIGltYWdlLndpZHRoIC0gbCAtIHIsIGIsIHggKyBsLCB5ICsgaCAtIGIsIHcgLSBsIC0gciwgYik7XG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coeCwgeSwgdywgaCwgdCwgciwgYiwgbCk7XG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coaW1hZ2UsIDAsIHQsIGwsIGltYWdlLmhlaWdodCAtIGIgLSB0LCB4LCB5ICsgdCwgbCwgaCAtIGIgLSB0KTtcbiAgICAgICAgLyogbGVmdCAqL1xuICAgICAgICBpZiAobCA+IDAgJiYgaCAtIGIgLSB0ID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIHQsIGwsIGltYWdlLmhlaWdodCAtIGIgLSB0LCB4LCB5ICsgdCwgbCwgaCAtIGIgLSB0KTtcblxuXG4gICAgICAgIC8qIHJpZ2h0ICovXG4gICAgICAgIGlmIChyID4gMCAmJiBoIC0gYiAtIHQgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgaW1hZ2Uud2lkdGggLSByLCB0LCByLCBpbWFnZS5oZWlnaHQgLSBiIC0gdCwgeCArIHcgLSByLCB5ICsgdCwgciwgaCAtIGIgLSB0KTtcblxuICAgICAgICAvKiB0b3AtbGVmdCAqL1xuICAgICAgICBpZiAobCA+IDAgJiYgdCA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBsLCB0LCB4LCB5LCBsLCB0KTtcblxuICAgICAgICAvKiB0b3AtcmlnaHQgKi9cbiAgICAgICAgaWYgKHIgPiAwICYmIHQgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgaW1hZ2Uud2lkdGggLSByLCAwLCByLCB0LCB4ICsgdyAtIHIsIHksIHIsIHQpO1xuXG4gICAgICAgIC8qIGJvdHRvbS1yaWdodCAqL1xuICAgICAgICBpZiAociA+IDAgJiYgYiA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAtIHIsIGltYWdlLmhlaWdodCAtIGIsIHIsIGIsIHggKyB3IC0gciwgeSArIGggLSBiLCByLCBiKTtcblxuICAgICAgICAvKiBib3R0b20tbGVmdCAqL1xuICAgICAgICBpZiAobCA+IDAgJiYgYiA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCAwLCBpbWFnZS5oZWlnaHQgLSBiLCBsLCBiLCB4LCB5ICsgaCAtIGIsIGwsIGIpO1xuXG4gICAgICAgIGlmIChmaWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGxTdHlsZShmaWxsKS5maWxsUmVjdCh4ICsgbCwgeSArIHQsIHcgLSBsIC0gciwgaCAtIHQgLSBiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHcgLSBsIC0gciA+IDAgJiYgaCAtIHQgLSBiID4gMClcbiAgICAgICAgICAgICAgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIGwsIHQsIGltYWdlLndpZHRoIC0gciAtIGwsIGltYWdlLmhlaWdodCAtIGIgLSB0LCB4ICsgbCwgeSArIHQsIHcgLSBsIC0gciwgaCAtIHQgLSBiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0UGl4ZWw6IGZ1bmN0aW9uKGNvbG9yLCB4LCB5KSB7XG5cbiAgICAgIC8qIGZpbGxSZWN0IGlzIHNsb3chICovXG5cbiAgICAgIHJldHVybiB0aGlzLmZpbGxTdHlsZShjb2xvcikuZmlsbFJlY3QoeCwgeSwgMSwgMSk7XG5cbiAgICAgIC8qIHRoaXMgaXMgaG93IGl0IHNob3VsZCB3b3JrIC0gYnV0IGl0IGRvZXMgbm90ICovXG5cbiAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpO1xuXG4gICAgICB2YXIgcGl4ZWwgPSB0aGlzLmNyZWF0ZUltYWdlRGF0YSgxLCAxKTtcblxuICAgICAgcGl4ZWwuZGF0YVswXSA9IGNvbG9yWzBdO1xuICAgICAgcGl4ZWwuZGF0YVsxXSA9IGNvbG9yWzFdO1xuICAgICAgcGl4ZWwuZGF0YVsyXSA9IGNvbG9yWzJdO1xuICAgICAgcGl4ZWwuZGF0YVszXSA9IDEuMDtcblxuICAgICAgdGhpcy5wdXRJbWFnZURhdGEocGl4ZWwsIHgsIHkpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGl4ZWw6IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSkuZGF0YTtcbiAgICAgIHJldHVybiBjcS5jb2xvcihbcGl4ZWxbMF0sIHBpeGVsWzFdLCBwaXhlbFsyXSwgcGl4ZWxbM11dKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW1hZ2VEYXRhOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICBpZiAoZmFsc2UgJiYgdGhpcy5jb250ZXh0LmNyZWF0ZUltYWdlRGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZUltYWdlRGF0YS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMuZW1wdHlDYW52YXMpIHtcbiAgICAgICAgICB0aGlzLmVtcHR5Q2FudmFzID0gY3EuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgIHRoaXMuZW1wdHlDYW52YXNDb250ZXh0ID0gdGhpcy5lbXB0eUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtcHR5Q2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuZW1wdHlDYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcy5lbXB0eUNhbnZhc0NvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdHJva2VMaW5lOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xuXG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuXG4gICAgICBpZiAodHlwZW9mIHgyID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHRoaXMubW92ZVRvKHgxLngsIHgxLnkpO1xuICAgICAgICB0aGlzLmxpbmVUbyh5MS54LCB5MS55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW92ZVRvKHgxLCB5MSk7XG4gICAgICAgIHRoaXMubGluZVRvKHgyLCB5Mik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3Ryb2tlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfSxcblxuICAgIHNldExpbmVEYXNoOiBmdW5jdGlvbihkYXNoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0LnNldExpbmVEYXNoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5zZXRMaW5lRGFzaChkYXNoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IGVsc2UgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG1lYXN1cmVUZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBnZXRMaW5lRGFzaDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldExpbmVEYXNoKCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVJhZGlhbEdyYWRpZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVMaW5lYXJHcmFkaWVudDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZUxpbmVhckdyYWRpZW50LmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlUGF0dGVybjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNyZWF0ZVBhdHRlcm4uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBnZXRJbWFnZURhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICAvKiBJZiB5b3UgdGhpbmsgdGhhdCBJIGFtIHJldGFyZGVkIGJlY2F1c2UgSSB1c2UgZmlsbFJlY3QgdG8gc2V0XG4gICAgICAgcGl4ZWxzIC0gcmVhZCBhYm91dCBwcmVtdWx0aXBsZWQgYWxwaGEgaW4gY2FudmFzICovXG5cbiAgICB3cml0ZU1ldGE6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAganNvbiA9IGVuY29kZVVSSUNvbXBvbmVudChqc29uKTtcblxuICAgICAgdmFyIGJ5dGVzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICBieXRlcy5wdXNoKGpzb24uY2hhckNvZGVBdChpKSk7XG4gICAgICAgIC8vICAgICAgY29uc29sZS5sb2coanNvbltpXSlcbiAgICAgIH1cblxuICAgICAgYnl0ZXMucHVzaCgxMjcpO1xuXG4gICAgICB2YXIgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgdmFyIHkgPSB0aGlzLmhlaWdodCAtIDE7XG5cbiAgICAgIHZhciBwaXhlbCA9IFtdO1xuXG4gICAgICB3aGlsZSAoYnl0ZXMubGVuZ3RoKSB7XG5cbiAgICAgICAgdmFyIGJ5dGUgPSBieXRlcy5zaGlmdCgpO1xuXG4gICAgICAgIHBpeGVsLnVuc2hpZnQoYnl0ZSAqIDIpO1xuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coeCArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSksIGJ5dGUpO1xuXG4gICAgICAgIGlmICghYnl0ZXMubGVuZ3RoKVxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMyAtIHBpeGVsLmxlbmd0aDsgaSsrKSBwaXhlbC51bnNoaWZ0KDI1NCk7XG5cbiAgICAgICAgaWYgKHBpeGVsLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKGNxLmNvbG9yKHBpeGVsKS50b1JnYigpKS5maWxsUmVjdCh4LCB5LCAxLCAxKTtcbiAgICAgICAgICBwaXhlbCA9IFtdO1xuICAgICAgICAgIHgtLTtcblxuICAgICAgICAgIGlmICh4IDwgMCkge1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICAgICAgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICByZWFkTWV0YTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBieXRlcyA9IFtdO1xuXG4gICAgICB2YXIgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgdmFyIHkgPSB0aGlzLmhlaWdodCAtIDE7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBwaXhlbCA9IHRoaXMuZ2V0UGl4ZWwoeCwgeSk7XG5cbiAgICAgICAgdmFyIHN0b3AgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDM7IGkrKykge1xuXG4gICAgICAgICAgaWYgKHBpeGVsWzIgLSBpXSA9PT0gMjU0KSBzdG9wID0gdHJ1ZTtcblxuICAgICAgICAgIGVsc2UgYnl0ZXMucHVzaChwaXhlbFsyIC0gaV0gLyAyIHwgMCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdG9wKSBicmVhaztcblxuICAgICAgICB4LS07XG5cbiAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgeS0tO1xuICAgICAgICAgIHggPSB0aGlzLndpZHRoIC0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIHZhciBqc29uID0gXCJcIjtcblxuICAgICAgd2hpbGUgKGJ5dGVzLmxlbmd0aCkge1xuICAgICAgICBqc29uICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXMuc2hpZnQoKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gZmFsc2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuXG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoanNvbikpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcblxuICAgIGdldCB3aWR0aCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICB9LFxuXG4gICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgfSxcblxuICAgIHNldCB3aWR0aCh3KSB7XG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHc7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH0sXG5cbiAgICBzZXQgaGVpZ2h0KGgpIHtcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGg7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9XG5cblxuICB9O1xuXG4gIC8qIGV4dGVuZCBMYXllciB3aXRoIGRyYXdpbmcgY29udGV4dCBtZXRob2RzICovXG5cbiAgdmFyIG1ldGhvZHMgPSBbXCJhcmNcIiwgXCJhcmNUb1wiLCBcImJlZ2luUGF0aFwiLCBcImJlemllckN1cnZlVG9cIiwgXCJjbGVhclJlY3RcIiwgXCJjbGlwXCIsIFwiY2xvc2VQYXRoXCIsIFwiY3JlYXRlTGluZWFyR3JhZGllbnRcIiwgXCJjcmVhdGVSYWRpYWxHcmFkaWVudFwiLCBcImNyZWF0ZVBhdHRlcm5cIiwgXCJkcmF3Rm9jdXNSaW5nXCIsIFwiZHJhd0ltYWdlXCIsIFwiZmlsbFwiLCBcImZpbGxSZWN0XCIsIFwiZmlsbFRleHRcIiwgXCJnZXRJbWFnZURhdGFcIiwgXCJpc1BvaW50SW5QYXRoXCIsIFwibGluZVRvXCIsIFwibWVhc3VyZVRleHRcIiwgXCJtb3ZlVG9cIiwgXCJwdXRJbWFnZURhdGFcIiwgXCJxdWFkcmF0aWNDdXJ2ZVRvXCIsIFwicmVjdFwiLCBcInJlc3RvcmVcIiwgXCJyb3RhdGVcIiwgXCJzYXZlXCIsIFwic2NhbGVcIiwgXCJzZXRUcmFuc2Zvcm1cIiwgXCJzdHJva2VcIiwgXCJzdHJva2VSZWN0XCIsIFwic3Ryb2tlVGV4dFwiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVwiLCBcInNldExpbmVEYXNoXCJdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gbWV0aG9kc1tpXTtcblxuICAgIGlmIChjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNvbnRpbnVlO1xuXG4gICAgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gKGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNxLmZhc3RBcHBseShtZXRob2QsIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICB9KShDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlW25hbWVdKTtcblxuXG4gICAgY29udGludWU7XG5cblxuICAgIGlmICghdGhpcy5kZWJ1Zykge1xuICAgICAgLy8gaWYgKCFjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IEZ1bmN0aW9uKFwidGhpcy5jb250ZXh0LlwiICsgbmFtZSArIFwiLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTsgcmV0dXJuIHRoaXM7XCIpO1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIChmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gdGhpcy5jb250ZXh0W25hbWVdLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgICAgIGNxLmZhc3RBcHBseSh0aGlzLmNvbnRleHRbbmFtZV0sIHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgIH0pKG5hbWUpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAoZnVuY3Rpb24obmFtZSkge1xuXG4gICAgICAgIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRbbmFtZV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgICAgIHRocm93IChlICsgZXJyLnN0YWNrKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZSwgbmFtZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfSkobmFtZSk7XG5cbiAgICB9XG5cbiAgfTtcblxuICAvKiBjcmVhdGUgc2V0dGVycyBhbmQgZ2V0dGVycyAqL1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1wiY2FudmFzXCIsIFwiZmlsbFN0eWxlXCIsIFwiZm9udFwiLCBcImdsb2JhbEFscGhhXCIsIFwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uXCIsIFwibGluZUNhcFwiLCBcImxpbmVKb2luXCIsIFwibGluZVdpZHRoXCIsIFwibWl0ZXJMaW1pdFwiLCBcInNoYWRvd09mZnNldFhcIiwgXCJzaGFkb3dPZmZzZXRZXCIsIFwic2hhZG93Qmx1clwiLCBcInNoYWRvd0NvbG9yXCIsIFwic3Ryb2tlU3R5bGVcIiwgXCJ0ZXh0QWxpZ25cIiwgXCJ0ZXh0QmFzZWxpbmVcIiwgXCJsaW5lRGFzaE9mZnNldFwiXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbmFtZSA9IHByb3BlcnRpZXNbaV07XG4gICAgaWYgKCFjcS5MYXllci5wcm90b3R5cGVbbmFtZV0pIGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSA9IEZ1bmN0aW9uKFwiaWYoYXJndW1lbnRzLmxlbmd0aCkgeyB0aGlzLmNvbnRleHQuXCIgKyBuYW1lICsgXCIgPSBhcmd1bWVudHNbMF07IHJldHVybiB0aGlzOyB9IGVsc2UgeyByZXR1cm4gdGhpcy5jb250ZXh0LlwiICsgbmFtZSArIFwiOyB9XCIpO1xuICB9O1xuXG4gIC8qIGNvbG9yICovXG5cbiAgY3EuQ29sb3IgPSBmdW5jdGlvbihkYXRhLCB0eXBlKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgdGhpcy5wYXJzZShkYXRhLCB0eXBlKTtcbiAgfVxuXG4gIGNxLkNvbG9yLnByb3RvdHlwZSA9IHtcblxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRvUmdiKCk7XG4gICAgfSxcblxuICAgIHBhcnNlOiBmdW5jdGlvbihhcmdzLCB0eXBlKSB7XG4gICAgICBpZiAoYXJnc1swXSBpbnN0YW5jZW9mIGNxLkNvbG9yKSB7XG4gICAgICAgIHRoaXNbMF0gPSBhcmdzWzBdWzBdO1xuICAgICAgICB0aGlzWzFdID0gYXJnc1swXVsxXTtcbiAgICAgICAgdGhpc1syXSA9IGFyZ3NbMF1bMl07XG4gICAgICAgIHRoaXNbM10gPSBhcmdzWzBdWzNdO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgYXJncyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbWF0Y2ggPSBudWxsO1xuXG4gICAgICAgIGlmIChhcmdzWzBdID09PSBcIiNcIikge1xuICAgICAgICAgIHZhciByZ2IgPSBjcS5oZXhUb1JnYihhcmdzKTtcbiAgICAgICAgICB0aGlzWzBdID0gcmdiWzBdO1xuICAgICAgICAgIHRoaXNbMV0gPSByZ2JbMV07XG4gICAgICAgICAgdGhpc1syXSA9IHJnYlsyXTtcbiAgICAgICAgICB0aGlzWzNdID0gMS4wO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gYXJncy5tYXRjaCgvcmdiXFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBtYXRjaFsxXSB8IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IG1hdGNoWzJdIHwgMDtcbiAgICAgICAgICB0aGlzWzJdID0gbWF0Y2hbM10gfCAwO1xuICAgICAgICAgIHRoaXNbM10gPSAxLjA7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9yZ2JhXFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXNbMF0gPSBtYXRjaFsxXSB8IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IG1hdGNoWzJdIHwgMDtcbiAgICAgICAgICB0aGlzWzJdID0gbWF0Y2hbM10gfCAwO1xuICAgICAgICAgIHRoaXNbM10gPSBtYXRjaFs0XSB8IDA7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9oc2xcXCgoLiopLCguKiksKC4qKVxcKS8pKSB7XG4gICAgICAgICAgdGhpcy5mcm9tSHNsKG1hdGNoWzFdLCBtYXRjaFsyXSwgbWF0Y2hbM10pO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoID0gYXJncy5tYXRjaCgvaHN2XFwoKC4qKSwoLiopLCguKilcXCkvKSkge1xuICAgICAgICAgIHRoaXMuZnJvbUhzdihtYXRjaFsxXSwgbWF0Y2hbMl0sIG1hdGNoWzNdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImhzbFwiOlxuICAgICAgICAgIGNhc2UgXCJoc2xhXCI6XG5cbiAgICAgICAgICAgIHRoaXMuZnJvbUhzbChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImhzdlwiOlxuICAgICAgICAgIGNhc2UgXCJoc3ZhXCI6XG5cbiAgICAgICAgICAgIHRoaXMuZnJvbUhzdihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXNbMF0gPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpc1sxXSA9IGFyZ3NbMV07XG4gICAgICAgICAgICB0aGlzWzJdID0gYXJnc1syXTtcbiAgICAgICAgICAgIHRoaXNbM10gPSB0eXBlb2YgYXJnc1szXSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEuMCA6IGFyZ3NbM107XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhOiBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gdGhpcy5hbHBoYShhKTtcbiAgICB9LFxuXG4gICAgYWxwaGE6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHRoaXNbM10gPSBhO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZyb21Ic2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbXBvbmVudHMgPSBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBBcnJheSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcblxuICAgICAgdmFyIGNvbG9yID0gY3EuaHNsVG9SZ2IocGFyc2VGbG9hdChjb21wb25lbnRzWzBdKSwgcGFyc2VGbG9hdChjb21wb25lbnRzWzFdKSwgcGFyc2VGbG9hdChjb21wb25lbnRzWzJdKSk7XG5cbiAgICAgIHRoaXNbMF0gPSBjb2xvclswXTtcbiAgICAgIHRoaXNbMV0gPSBjb2xvclsxXTtcbiAgICAgIHRoaXNbMl0gPSBjb2xvclsyXTtcbiAgICAgIHRoaXNbM10gPSB0eXBlb2YgYXJndW1lbnRzWzNdID09PSBcInVuZGVmaW5lZFwiID8gMS4wIDogYXJndW1lbnRzWzNdO1xuICAgIH0sXG5cbiAgICBmcm9tSHN2OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb21wb25lbnRzID0gYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgQXJyYXkgPyBhcmd1bWVudHNbMF0gOiBhcmd1bWVudHM7XG4gICAgICB2YXIgY29sb3IgPSBjcS5oc3ZUb1JnYihwYXJzZUZsb2F0KGNvbXBvbmVudHNbMF0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMV0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMl0pKTtcblxuICAgICAgdGhpc1swXSA9IGNvbG9yWzBdO1xuICAgICAgdGhpc1sxXSA9IGNvbG9yWzFdO1xuICAgICAgdGhpc1syXSA9IGNvbG9yWzJdO1xuICAgICAgdGhpc1szXSA9IHR5cGVvZiBhcmd1bWVudHNbM10gPT09IFwidW5kZWZpbmVkXCIgPyAxLjAgOiBhcmd1bWVudHNbM107XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdLCB0aGlzWzNdXTtcbiAgICB9LFxuXG4gICAgdG9SZ2I6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwicmdiKFwiICsgdGhpc1swXSArIFwiLCBcIiArIHRoaXNbMV0gKyBcIiwgXCIgKyB0aGlzWzJdICsgXCIpXCI7XG4gICAgfSxcblxuICAgIHRvUmdiYTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJyZ2JhKFwiICsgdGhpc1swXSArIFwiLCBcIiArIHRoaXNbMV0gKyBcIiwgXCIgKyB0aGlzWzJdICsgXCIsIFwiICsgdGhpc1szXSArIFwiKVwiO1xuICAgIH0sXG5cbiAgICB0b0hleDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY3EucmdiVG9IZXgodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgfSxcblxuICAgIHRvSHNsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gY3EucmdiVG9Ic2wodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgICBjWzNdID0gdGhpc1szXTtcbiAgICAgIHJldHVybiBjO1xuICAgIH0sXG5cbiAgICB0b0hzdjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYyA9IGNxLnJnYlRvSHN2KHRoaXNbMF0sIHRoaXNbMV0sIHRoaXNbMl0pO1xuICAgICAgY1szXSA9IHRoaXNbM107XG4gICAgICByZXR1cm4gYztcbiAgICB9LFxuXG4gICAgZ3JhZGllbnQ6IGZ1bmN0aW9uKHRhcmdldCwgc3RlcHMpIHtcbiAgICAgIHZhciB0YXJnZXRDb2xvciA9IGNxLmNvbG9yKHRhcmdldCk7XG4gICAgfSxcblxuICAgIHNoaWZ0SHNsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoc2wgPSB0aGlzLnRvSHNsKCk7XG5cbiAgICAgIGlmICh0aGlzWzBdICE9PSB0aGlzWzFdIHx8IHRoaXNbMV0gIT09IHRoaXNbMl0pIHtcbiAgICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3Eud3JhcFZhbHVlKGhzbFswXSArIGFyZ3VtZW50c1swXSwgMCwgMSk7XG4gICAgICAgIHZhciBzID0gYXJndW1lbnRzWzFdID09PSBmYWxzZSA/IGhzbFsxXSA6IGNxLmxpbWl0VmFsdWUoaHNsWzFdICsgYXJndW1lbnRzWzFdLCAwLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBoID0gaHNsWzBdO1xuICAgICAgICB2YXIgcyA9IGhzbFsxXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGwgPSBhcmd1bWVudHNbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShoc2xbMl0gKyBhcmd1bWVudHNbMl0sIDAsIDEpO1xuXG4gICAgICB0aGlzLmZyb21Ic2woaCwgcywgbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzZXRIc2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcblxuICAgICAgdmFyIGggPSBhcmd1bWVudHNbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMF0sIDAsIDEpO1xuICAgICAgdmFyIHMgPSBhcmd1bWVudHNbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMV0sIDAsIDEpO1xuICAgICAgdmFyIGwgPSBhcmd1bWVudHNbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShhcmd1bWVudHNbMl0sIDAsIDEpO1xuXG4gICAgICB0aGlzLmZyb21Ic2woaCwgcywgbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtaXg6IGZ1bmN0aW9uKGNvbG9yLCBhbW91bnQpIHtcbiAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKylcbiAgICAgICAgdGhpc1tpXSA9IGNxLm1peCh0aGlzW2ldLCBjb2xvcltpXSwgYW1vdW50KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH07XG5cbiAgd2luZG93W1wiY3FcIl0gPSB3aW5kb3dbXCJDYW52YXNRdWVyeVwiXSA9IGNxO1xuXG5cbiAgcmV0dXJuIGNxO1xuXG59KSgpO1xuXG4vKiBmaWxlOiBzcmMvbGF5ZXIvTGF5ZXIuanMgKi9cblxuUExBWUdST1VORC5SZW5kZXJlciA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIGFwcC5vbihcImNyZWF0ZVwiLCB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpKTtcbiAgYXBwLm9uKFwicmVzaXplXCIsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuXG4gIGFwcC5yZW5kZXJlciA9IHRoaXM7XG5cbn07XG5cblBMQVlHUk9VTkQuUmVuZGVyZXIucGx1Z2luID0gdHJ1ZTtcblxuUExBWUdST1VORC5SZW5kZXJlci5wcm90b3R5cGUgPSB7XG5cbiAgY3JlYXRlOiBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB0aGlzLmFwcC5sYXllciA9IGNxKCkuYXBwZW5kVG8odGhpcy5hcHAuY29udGFpbmVyKTtcblxuICAgIGlmICghdGhpcy5hcHAuY3VzdG9tQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLmFwcC5jb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIwcHhcIjtcbiAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XG5cbiAgICB2YXIgbGF5ZXIgPSBhcHAubGF5ZXI7XG5cbiAgICBsYXllci53aWR0aCA9IGFwcC53aWR0aDtcbiAgICBsYXllci5oZWlnaHQgPSBhcHAuaGVpZ2h0O1xuXG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiMCAwXCI7XG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgYXBwLm9mZnNldFggKyBcInB4LFwiICsgYXBwLm9mZnNldFkgKyBcInB4KSBzY2FsZShcIiArIGFwcC5zY2FsZSArIFwiLCBcIiArIGFwcC5zY2FsZSArIFwiKVwiO1xuICAgIGxheWVyLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm1TdHlsZSA9IFwicHJlc2VydmUtM2RcIjtcblxuICAgIGxheWVyLmNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm1PcmlnaW4gPSBcIjAgMFwiO1xuICAgIGxheWVyLmNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIGFwcC5vZmZzZXRYICsgXCJweCxcIiArIGFwcC5vZmZzZXRZICsgXCJweCkgc2NhbGUoXCIgKyBhcHAuc2NhbGUgKyBcIiwgXCIgKyBhcHAuc2NhbGUgKyBcIilcIjtcbiAgICBsYXllci5jYW52YXMuc3R5bGUud2Via2l0VHJhbnNmb3JtU3R5bGUgPSBcInByZXNlcnZlLTNkXCI7XG5cbiAgICBsYXllci5zbW9vdGhpbmcgPSB0aGlzLmFwcC5zbW9vdGhpbmc7XG4gICAgbGF5ZXIudXBkYXRlKCk7XG5cbiAgICB0aGlzLnNldFNtb290aGluZyh0aGlzLmFwcC5zbW9vdGhpbmcpO1xuXG4gIH0sXG5cbiAgc2V0U21vb3RoaW5nOiBmdW5jdGlvbihzbW9vdGhpbmcpIHtcblxuICAgIHZhciBsYXllciA9IHRoaXMuYXBwLmxheWVyO1xuXG4gICAgdGhpcy5hcHAuc21vb3RoaW5nID0gc21vb3RoaW5nO1xuXG5cbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xKSB7XG5cbiAgICAgIGxheWVyLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IHNtb290aGluZyA/IFwiYXV0b1wiIDogXCItbW96LWNyaXNwLWVkZ2VzXCI7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBsYXllci5jYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSBzbW9vdGhpbmcgPyBcImF1dG9cIiA6IFwicGl4ZWxhdGVkXCI7XG5cbiAgICB9XG5cbiAgICBsYXllci5zbW9vdGhpbmcgPSBzbW9vdGhpbmc7XG4gICAgbGF5ZXIudXBkYXRlKCk7XG5cbiAgfVxuXG59O1xuXG4vKiBmaWxlOiBzcmMvbGF5ZXIvVHJhbnNpdGlvbnMuanMgKi9cblxuUExBWUdST1VORC5UcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIGFwcC5vbihcImVudGVyc3RhdGVcIiwgdGhpcy5lbnRlcnN0YXRlLmJpbmQodGhpcykpO1xuICBhcHAub24oXCJwb3N0cmVuZGVyXCIsIHRoaXMucG9zdHJlbmRlci5iaW5kKHRoaXMpKTtcbiAgYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5wcm9ncmVzcyA9IDE7XG4gIHRoaXMubGlmZXRpbWUgPSAwO1xufTtcblxuUExBWUdST1VORC5UcmFuc2l0aW9ucy5wbHVnaW4gPSB0cnVlO1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zLnByb3RvdHlwZSA9IHtcblxuICBlbnRlcnN0YXRlOiBmdW5jdGlvbihkYXRhKSB7XG5cbiAgICB0aGlzLnNjcmVlbnNob3QgPSB0aGlzLmFwcC5sYXllci5jYWNoZSgpO1xuXG4gICAgaWYgKGRhdGEucHJldikge1xuICAgICAgdGhpcy5saWZldGltZSA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB9XG5cbiAgfSxcblxuICBwb3N0cmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEpIHJldHVybjtcblxuICAgIFBMQVlHUk9VTkQuVHJhbnNpdGlvbnMuU3BsaXQodGhpcywgdGhpcy5wcm9ncmVzcyk7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuO1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkZWx0YTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxpZmV0aW1lIC8gMC41LCAxKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVHJhbnNpdGlvbnMuSW1wbG9kZSA9IGZ1bmN0aW9uKG1hbmFnZXIsIHByb2dyZXNzKSB7XG5cbiAgdmFyIGFwcCA9IG1hbmFnZXIuYXBwO1xuICB2YXIgbGF5ZXIgPSBhcHAubGF5ZXI7XG5cbiAgcHJvZ3Jlc3MgPSBhcHAuZWFzZShwcm9ncmVzcywgXCJvdXRDdWJpY1wiKTtcblxuICB2YXIgbmVnYXRpdmUgPSAxIC0gcHJvZ3Jlc3M7XG5cbiAgbGF5ZXIuc2F2ZSgpO1xuICBsYXllci50YXJzKGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCAwLjUsIDAuNSwgMCwgMC41ICsgMC41ICogbmVnYXRpdmUsIG5lZ2F0aXZlKTtcbiAgbGF5ZXIuZHJhd0ltYWdlKG1hbmFnZXIuc2NyZWVuc2hvdCwgMCwgMCk7XG5cbiAgbGF5ZXIucmVzdG9yZSgpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zLlNwbGl0ID0gZnVuY3Rpb24obWFuYWdlciwgcHJvZ3Jlc3MpIHtcblxuICB2YXIgYXBwID0gbWFuYWdlci5hcHA7XG4gIHZhciBsYXllciA9IGFwcC5sYXllcjtcblxuICBwcm9ncmVzcyA9IGFwcC5lYXNlKHByb2dyZXNzLCBcImluT3V0Q3ViaWNcIik7XG5cbiAgdmFyIG5lZ2F0aXZlID0gMSAtIHByb2dyZXNzO1xuXG4gIGxheWVyLnNhdmUoKTtcblxuICBsYXllci5hKG5lZ2F0aXZlKS5jbGVhcihcIiNmZmZcIikucmEoKTtcblxuICBsYXllci5kcmF3SW1hZ2UobWFuYWdlci5zY3JlZW5zaG90LCAwLCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQgLyAyIHwgMCwgMCwgMCwgYXBwLndpZHRoLCBuZWdhdGl2ZSAqIGFwcC5oZWlnaHQgLyAyIHwgMCk7XG4gIGxheWVyLmRyYXdJbWFnZShtYW5hZ2VyLnNjcmVlbnNob3QsIDAsIGFwcC5oZWlnaHQgLyAyIHwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0IC8gMiB8IDAsIDAsIGFwcC5oZWlnaHQgLyAyICsgcHJvZ3Jlc3MgKiBhcHAuaGVpZ2h0IC8gMiArIDEgfCAwLCBhcHAud2lkdGgsIE1hdGgubWF4KDEsIG5lZ2F0aXZlICogYXBwLmhlaWdodCAqIDAuNSB8IDApKTtcblxuICBsYXllci5yZXN0b3JlKCk7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9sYXllci9Mb2FkaW5nU2NyZWVuLmpzICovXG5cblBMQVlHUk9VTkQuTG9hZGluZ1NjcmVlbiA9IHtcblxuICBsb2dvUmF3OiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTm9BQUFBU0JBTUFBQURQaU4weEFBQUFHRkJNVkVVQUFRQXRMaXhIU1VkbmFHYUppb2ltcUtYTXpzdjcvZnI1c2hnVkFBQUFBV0pMUjBRQWlBVWRTQUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFBZDBTVTFGQjk4RUF3a2VBNG9RV0o0QUFBQVpkRVZZZEVOdmJXMWxiblFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJYZ1E0WEFBQUI5a2xFUVZRNHk3MlV2VytyTUJEQXorRnJwVktyckZtZXNtYXBXTk9scktqU2Uxa1ordW9WQXZqKy9mcnVqRzFTYUpjcUp3VTd2b09mN3hNUXpRbXNJRGk1TlBUTXNMUm50SDNVK0Y2U0FabzNObEN2Y2dCRkp6OG8rdmtEaUU2M2xJOTVZL1VtcGluc1pXa2dKV0ppRGJBVlExNmh0cHR4U1RObG9JbHVnd2F3MDAxRXkzQVNGM3NvNkwxcUxOWHpRUzVTMFVHS0wvQ0k1d1dOcmlFMFVIOVl0eTM3THFJVmcrd3NxdTdJeDBNd1ZCU0YvZFUranYyU05ubWEwMjFMRWRQcVZuTWVVM3hBdTBrWGNTR2ptcTdPeDRFMlduODhMWjIrRUZqM2F2aml4emFpNlZQVnl1WXZlWkxIRjJYZmREbnZBcTI3RElIR3VxKzBESkZzRTMwT3RCMUtxT3dkOERyN1BjTTRiK2pmajJnNWxwNFd5bnRCSzY2cXVhM0p6RUErdVhKcHdIL05sVnV6UlZQWS9rVExCMm1qdU4rS3dkWjhGT3k4ajJnRGJFVVNxdW1uU0NZNGxmNGlicTNJaFZNNHljWlFSbnYrekZxVmRKUVZuNkJ4dlVxZWJHcHVhTm8zc1p4d0J6amFqaU1aT29CaXd5VkYra0NyK25VYUpPYUdwbkFlUlBQSlpUcjRGcW1IUlhjbmVFbzREcVEvZnRmZG5MZURyVUFNRTh4V0tQZUtDd1c2WWtFcFhmczNwMUVXSmhkY1VBWVAwVEkvdVlhVjhjZ2p3Qm92YWV5V3dqaTJUOXJURklkUy9jUC9NbmtUTFJVV3hnTk5aVmluN2JUNWZxVDltaURjVVZKelIxZ1JwZklPTk1tdWxVKzVRcXI2elhBVXFBQUFBQUJKUlU1RXJrSmdnZz09XCIsXG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMubG9nbyA9IG5ldyBJbWFnZTtcblxuICAgIHRoaXMubG9nby5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYucmVhZHkgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dvLnNyYyA9IHRoaXMubG9nb1JhdztcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IFwiIzI4MjI0NVwiO1xuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICAvLyB0aGlzLmJhY2tncm91bmQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIjMDAwXCI7XG4gICAgfVxuXG5cbiAgfSxcblxuICBlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuXG4gIH0sXG5cbiAgbGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFwcC50d2Vlbih0aGlzKVxuICAgICAgLnRvKHtcbiAgICAgICAgY3VycmVudDogMVxuICAgICAgfSwgMC41KTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1hdGlvbi5maW5pc2hlZCkgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgTWF0aC5hYnModGhpcy5hcHAubG9hZGVyLnByb2dyZXNzIC0gdGhpcy5jdXJyZW50KSAqIGRlbHRhO1xuICAgIH1cblxuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcblxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5yZWFkeSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIuY2xlYXIodGhpcy5iYWNrZ3JvdW5kKTtcblxuICAgIHRoaXMuYXBwLmxheWVyLmZpbGxTdHlsZShcIiNmZmZcIik7XG5cbiAgICB0aGlzLmFwcC5sYXllci5zYXZlKCk7XG4gICAgdGhpcy5hcHAubGF5ZXIuYWxpZ24oMC41LCAwLjUpO1xuICAgIHRoaXMuYXBwLmxheWVyLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbihcImxpZ2h0ZXJcIik7XG4gICAgdGhpcy5hcHAubGF5ZXIuZHJhd0ltYWdlKHRoaXMubG9nbywgdGhpcy5hcHAuY2VudGVyLngsIHRoaXMuYXBwLmNlbnRlci55KTtcblxuICAgIHZhciB3ID0gdGhpcy5jdXJyZW50ICogdGhpcy5sb2dvLndpZHRoO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIuZmlsbFN0eWxlKFwiI2ZmZlwiKTtcblxuICAgIHRoaXMuYXBwLmxheWVyLmZpbGxSZWN0KHRoaXMuYXBwLmNlbnRlci54LCB0aGlzLmFwcC5jZW50ZXIueSArIDMyLCB3LCAxMik7XG4gICAgdGhpcy5hcHAubGF5ZXIuZmlsbFJlY3QodGhpcy5hcHAuY2VudGVyLngsIHRoaXMuYXBwLmNlbnRlci55ICsgMzIsIHRoaXMubG9nby53aWR0aCwgNCk7XG5cbiAgICB0aGlzLmFwcC5sYXllci5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIi8qIHNjYW5saW5lcyBwbHVnaW4gZm9yIHBsYXlncm91bmQncyBkZWZhdWx0IHJlbmRlcmVyICovXG5cblBMQVlHUk9VTkQuU2NhbmxpbmVzID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgYXBwLm9uKFwicmVzaXplXCIsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xuICBhcHAub24oXCJwb3N0cmVuZGVyXCIsIHRoaXMucG9zdHJlbmRlci5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5TY2FubGluZXMucGx1Z2luID0gdHJ1ZTtcblxuUExBWUdST1VORC5TY2FubGluZXMucHJvdG90eXBlID0ge1xuXG4gIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmltYWdlID0gY3EodGhpcy5hcHAud2lkdGgsIHRoaXMuYXBwLmhlaWdodCk7XG5cbiAgICB0aGlzLmltYWdlLmdsb2JhbEFscGhhKDAuMSk7XG4gICAgdGhpcy5pbWFnZS5maWxsU3R5bGUoXCIjMDA4XCIpO1xuXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmltYWdlLmNhbnZhcy5oZWlnaHQ7IGkgKz0gOCl7XG4gICAgICBcbiAgICAgIHRoaXMuaW1hZ2UuZmlsbFJlY3QoMCwgaSwgdGhpcy5pbWFnZS5jYW52YXMud2lkdGgsIDQpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZSA9IHRoaXMuaW1hZ2UuY2FjaGUoKTtcblxuICB9LFxuXG4gIHBvc3RyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcblxuICAgICAgLy8gdGhpcy5hcHAubGF5ZXIuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDApO1xuXG4gICAgfVxuXG4gIH1cblxufTsiLCIvKlxuXG4gIFNvdW5kT25EZW1hbmQgcjFcblxuICAoYykgMjAxMi0yMDE1IGh0dHA6Ly9yZXpvbmVyLm5ldFxuXG4gIFRoaXMgbGlicmFyeSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuKi9cblxuLyogb3B0aW9ucyAqL1xuXG4vKiBvdXRwdXQ6IG91dHB1dCBub2RlLCBkZWZhdWx0ICovXG4vKiBhdWRpb0NvbnRleHQ6IGF1ZGlvQ29udGV4dCAqL1xuXG5Tb3VuZE9uRGVtYW5kID0gZnVuY3Rpb24ob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBjYW5QbGF5TXAzID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoXCJhdWRpby9tcDNcIik7XG4gIHZhciBjYW5QbGF5T2dnID0gKG5ldyBBdWRpbykuY2FuUGxheVR5cGUoJ2F1ZGlvL29nZzsgY29kZWNzPVwidm9yYmlzXCInKTtcblxuICBpZiAodGhpcy5wcmVmZXJlZEF1ZGlvRm9ybWF0ID09PSBcIm1wM1wiKSB7XG5cbiAgICBpZiAoY2FuUGxheU1wMykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcblxuICB9IGVsc2Uge1xuXG4gICAgaWYgKGNhblBsYXlPZ2cpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG5cbiAgfVxuXG4gIGlmICghb3B0aW9ucy5hdWRpb0NvbnRleHQpIHtcbiAgICBjb25zb2xlLndhcm4oJ1Bvc3NpYmxlIGR1cGxpY2F0ZWQgQXVkaW9Db250ZXh0LCB1c2Ugb3B0aW9ucy5hdWRpb0NvbnRleHQnKTtcbiAgfVxuICB0aGlzLmF1ZGlvQ29udGV4dCA9IG9wdGlvbnMuYXVkaW9Db250ZXh0IHx8IG5ldyBBdWRpb0NvbnRleHQ7XG5cbiAgdGhpcy5jb21wcmVzc29yID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlRHluYW1pY3NDb21wcmVzc29yKCk7XG4gIHRoaXMuY29tcHJlc3Nvci5jb25uZWN0KHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpXG4gIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbXByZXNzb3IpO1xuXG4gIHRoaXMuaW5wdXQgPSB0aGlzLmdhaW5Ob2RlO1xuXG4gIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDEuMDtcblxuICB0aGlzLmJ1ZmZlcnMgPSB7fTtcblxuICB0aGlzLmNoYW5uZWxzID0ge307XG4gIHRoaXMuYWxpYXNlcyA9IHt9O1xuXG4gIHZhciBsYXN0VGljayA9IERhdGUubm93KCk7XG4gIHZhciBlbmdpbmUgPSB0aGlzO1xuXG4gIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlbHRhID0gKERhdGUubm93KCkgLSBsYXN0VGljaykgLyAxMDAwO1xuXG4gICAgbGFzdFRpY2sgPSBEYXRlLm5vdygpO1xuXG4gICAgZW5naW5lLnN0ZXAoZGVsdGEpO1xuXG4gIH0sIDEwMDAgLyA2MCk7XG5cbn07XG5cblNvdW5kT25EZW1hbmQubW92ZVRvID0gZnVuY3Rpb24odmFsdWUsIHRhcmdldCwgc3RlcCkge1xuXG4gIGlmICh2YWx1ZSA8IHRhcmdldCkge1xuICAgIHZhbHVlICs9IHN0ZXA7XG4gICAgaWYgKHZhbHVlID4gdGFyZ2V0KSB2YWx1ZSA9IHRhcmdldDtcbiAgfVxuXG4gIGlmICh2YWx1ZSA+IHRhcmdldCkge1xuICAgIHZhbHVlIC09IHN0ZXA7XG4gICAgaWYgKHZhbHVlIDwgdGFyZ2V0KSB2YWx1ZSA9IHRhcmdldDtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcblxufTtcblxuU291bmRPbkRlbWFuZC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IFNvdW5kT25EZW1hbmQsXG5cbiAgcGF0aDogXCJzb3VuZHMvXCIsXG5cbiAgY2hhbm5lbDogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFNvdW5kT25EZW1hbmQuQ2hhbm5lbCh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuXG4gIH0sXG5cbiAgZ2V0QXNzZXRFbnRyeTogZnVuY3Rpb24ocGF0aCwgZGVmYXVsdEV4dGVuc2lvbikge1xuXG4gICAgLyogdHJhbnNsYXRlIGZvbGRlciBhY2NvcmRpbmcgdG8gdXNlciBwcm92aWRlZCBwYXRoc1xuICAgICAgIG9yIGxlYXZlIGFzIGlzICovXG5cbiAgICB2YXIgZmlsZWluZm8gPSBwYXRoLm1hdGNoKC8oLiopXFwuLiovKTtcbiAgICB2YXIga2V5ID0gZmlsZWluZm8gPyBmaWxlaW5mb1sxXSA6IHBhdGg7XG5cbiAgICB2YXIgdGVtcCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIHZhciBiYXNlbmFtZSA9IHBhdGg7XG5cbiAgICBpZiAodGVtcC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZXh0ID0gdGVtcC5wb3AoKTtcbiAgICAgIHBhdGggPSB0ZW1wLmpvaW4oXCIuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXh0ID0gZGVmYXVsdEV4dGVuc2lvbjtcbiAgICAgIGJhc2VuYW1lICs9IFwiLlwiICsgZGVmYXVsdEV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB1cmw6IHRoaXMucGF0aCArIGJhc2VuYW1lLFxuICAgICAgcGF0aDogdGhpcy5wYXRoICsgcGF0aCxcbiAgICAgIGV4dDogZXh0XG4gICAgfTtcblxuICB9LFxuXG4gIGxvYWRlcnM6IHt9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgdmFyIGVuZ2luZSA9IHRoaXM7XG4gICAgdmFyIGVudHJ5ID0gZW5naW5lLmdldEFzc2V0RW50cnkoa2V5LCBlbmdpbmUuYXVkaW9Gb3JtYXQpO1xuXG4gICAgaWYgKCF0aGlzLmxvYWRlcnNba2V5XSkge1xuXG4gICAgICB0aGlzLmxvYWRlcnNba2V5XSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICAgIGlmIChlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldKSByZXR1cm4gcmVzb2x2ZShlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldKTtcblxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBlbnRyeS51cmwsIHRydWUpO1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcblxuICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGVuZ2luZS5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHRoaXMucmVzcG9uc2UsIGZ1bmN0aW9uKGRlY29kZWRCdWZmZXIpIHtcblxuICAgICAgICAgICAgZW5naW5lLmJ1ZmZlcnNbZW50cnkua2V5XSA9IGRlY29kZWRCdWZmZXI7XG4gICAgICAgICAgICByZXNvbHZlKGRlY29kZWRCdWZmZXIpO1xuXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYWRlcnNba2V5XTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jaGFubmVscykge1xuXG4gICAgICB0aGlzLmNoYW5uZWxzW2tleV0uc3RlcChkZWx0YSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBkdXBsaWNhdGU6IGZ1bmN0aW9uKHNvdXJjZSwgYXMsIHZvbHVtZSwgcmF0ZSkge1xuXG4gICAgdmFyIGVuZ2luZSA9IHRoaXM7XG5cbiAgICB0aGlzLmxvYWQoc291cmNlKS50aGVuKGZ1bmN0aW9uKCkge1xuXG4gICAgICBlbmdpbmUuYnVmZmVyc1tzb3VyY2VdO1xuXG4gICAgICBlbmdpbmUuYnVmZmVyc1thc10gPSBlbmdpbmUuYnVmZmVyc1tzb3VyY2VdO1xuXG4gICAgfSk7XG5cbiAgfSxcblxuICBhbGlhczogZnVuY3Rpb24obmFtZSwgc291cmNlLCByYXRlLCB2b2x1bWUpIHtcblxuICAgIHRoaXMuYWxpYXNlc1tuYW1lXSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgcmF0ZTogcmF0ZSxcbiAgICAgIHZvbHVtZTogdm9sdW1lXG4gICAgfTtcblxuICB9XG5cbn07XG5Tb3VuZE9uRGVtYW5kLkV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gIHRoaXMubGlzdGVuZXJzID0ge307XG5cbn07XG5cblNvdW5kT25EZW1hbmQuRXZlbnRzLnByb3RvdHlwZSA9IHtcblxuICBvbjogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBpZiAodHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnQpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLm9uKGtleSwgZXZlbnRba2V5XSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudF0pIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xuXG4gICAgY2FsbGJhY2sub25jZSA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG5cbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG5cbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpXS5fcmVtb3ZlKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgbGVuLS07XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG5cbiAgdHJpZ2dlcjogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcblxuICAgIC8qIGlmIHlvdSBwcmVmZXIgZXZlbnRzIHBpcGUgKi9cblxuICAgIGlmICh0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbXCJldmVudFwiXS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdW2ldKGV2ZW50LCBkYXRhKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBvciBzdWJzY3JpYmVkIHRvIHNpbmdsZSBldmVudCAqL1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tldmVudF1baV07XG4gICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZGF0YSk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyLm9uY2UpIHtcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0uc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgbGVuLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG59O1xuU291bmRPbkRlbWFuZC5DaGFubmVsID0gZnVuY3Rpb24oZW5naW5lKSB7XG5cbiAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gIHRoaXMuYXVkaW9Db250ZXh0ID0gZW5naW5lLmF1ZGlvQ29udGV4dDtcblxuICAvKiBjb25uZWN0aW9uIG9yZGVyIGdvZXMgZnJvbSBib3R0b20gdG8gdG9wICovXG5cbiAgLyogZ2FpbiBub2RlICovXG5cbiAgdGhpcy5nYWluTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAvKiBjb252b2x2ZXIgKi9cblxuICB0aGlzLmNvbnZvbHZlcldldE5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gIHRoaXMuY29udm9sdmVyRHJ5Tm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5jb252b2x2ZXJOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQ29udm9sdmVyKCk7XG4gIHRoaXMuY29udm9sdmVyRW5hYmxlZCA9IGZhbHNlO1xuXG4gIHRoaXMucm91dGUoKTtcblxuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMubG9vcHMgPSBbXTtcblxufTtcblxuU291bmRPbkRlbWFuZC5DaGFubmVsLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogU291bmRPbkRlbWFuZC5DaGFubmVsLFxuXG4gIC8qIGdldCBhIHNvdW5kIGZvciBmdXJ0aGVyIHVzYWdlICovXG5cbiAgeHJvdXRlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmN1cnJlbnRSb3V0ZSkge1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudFJvdXRlLmxlbmd0aCAtIDE7IGkrKykge1xuXG4gICAgICAgIHRoaXMuY3VycmVudFJvdXRlW2ldLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50Um91dGUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGlmIChpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDEpIHtcblxuICAgICAgICB2YXIgbm9kZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBub2RlLmNvbm5lY3QoYXJndW1lbnRzW2kgKyAxXSk7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50Um91dGUucHVzaChub2RlKTtcblxuICAgIH1cblxuICAgIHRoaXMuaW5wdXQgPSBhcmd1bWVudHNbMF07XG5cbiAgfSxcblxuICBnZXQ6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgcmV0dXJuIG5ldyBTb3VuZE9uRGVtYW5kLlNvdW5kKGtleSwgdGhpcyk7XG5cbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbihrZXkpIHtcblxuICAgIHZhciBzb3VuZCA9IHRoaXMuZ2V0KGtleSk7XG5cbiAgICB0aGlzLmFkZChzb3VuZCk7XG5cbiAgICByZXR1cm4gc291bmQ7XG5cbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgICBzb3VuZC5fcmVtb3ZlID0gdHJ1ZTtcblxuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIHNvdW5kLl9yZW1vdmUgPSBmYWxzZTtcblxuICAgIHRoaXMucXVldWUucHVzaChzb3VuZCk7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgLyogcHJvY2VzcyBxdWV1ZSAqL1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBzb3VuZCA9IHRoaXMucXVldWVbaV07XG5cbiAgICAgIHNvdW5kLnN0ZXAoZGVsdGEpO1xuXG4gICAgICBpZiAoc291bmQuX3JlbW92ZSkgdGhpcy5xdWV1ZS5zcGxpY2UoaS0tLCAxKTtcblxuICAgIH1cblxuICAgIC8qIHByb2Nlc3Mgc291bmRzIGJlaW5nIHBsYXllZCAqL1xuXG4gIH0sXG5cbiAgdm9sdW1lOiBmdW5jdGlvbih2YWx1ZSkge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcblxuICAgICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgcmV0dXJuIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZTtcblxuICAgIH1cblxuICB9LFxuXG4gIHN3YXBDb252b2x2ZXI6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgdmFyIGVuZ2luZSA9IHRoaXMuZW5naW5lO1xuICAgIHZhciBjaGFubmVsID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCBmYWlsKSB7XG5cbiAgICAgIGlmIChjaGFubmVsLmN1cnJlbnRDb252b2x2ZXJJbXB1bHNlID09PSBrZXkpIHtcblxuICAgICAgICByZXNvbHZlKCk7XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgZW5naW5lLmxvYWQoa2V5KS50aGVuKGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICAgIGNoYW5uZWwuY3VycmVudENvbnZvbHZlckltcHVsc2UgPSBrZXk7XG4gICAgICAgICAgY2hhbm5lbC5jb252b2x2ZXJOb2RlLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9LFxuXG4gIHVwZGF0ZUNvbnZvdmxlclN0YXRlOiBmdW5jdGlvbihlbmFibGVkKSB7XG5cbiAgICB0aGlzLmNvbnZvbHZlckVuYWJsZWQgPSBlbmFibGVkO1xuICAgIHRoaXMucm91dGUoKTtcblxuICB9LFxuXG4gIHN1YnJvdXRlOiBmdW5jdGlvbihub2Rlcykge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICBpZiAoaSA8IG5vZGVzLmxlbmd0aCAtIDEpIHtcblxuICAgICAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBub2RlLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgbm9kZS5jb25uZWN0KG5vZGVzW2kgKyAxXSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuaW5wdXQgPSBub2Rlc1swXTtcblxuICB9LFxuXG4gIHJvdXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZGlzY29ubmVjdCgpO1xuXG4gICAgaWYgKHRoaXMuY29udm9sdmVyRW5hYmxlZCkge1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb252b2x2ZXJEcnlOb2RlKTtcblxuICAgICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udm9sdmVyTm9kZSk7XG4gICAgICB0aGlzLmNvbnZvbHZlck5vZGUuY29ubmVjdCh0aGlzLmNvbnZvbHZlcldldE5vZGUpO1xuXG4gICAgICB0aGlzLmNvbnZvbHZlcldldE5vZGUuY29ubmVjdCh0aGlzLmVuZ2luZS5pbnB1dCk7XG4gICAgICB0aGlzLmNvbnZvbHZlckRyeU5vZGUuY29ubmVjdCh0aGlzLmVuZ2luZS5pbnB1dCk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5lbmdpbmUuaW5wdXQpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuZ2Fpbk5vZGU7XG5cbiAgfSxcblxuICBjb252b2x2ZXI6IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblxuICAgIHZhciBlbmFibGVkID0gdmFsdWUgPiAwO1xuICAgIHZhciBjaGFubmVsID0gdGhpcztcblxuICAgIHRoaXMuc3dhcENvbnZvbHZlcihrZXkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChlbmFibGVkICE9PSBjaGFubmVsLmNvbnZvbHZlckVuYWJsZWQpIGNoYW5uZWwudXBkYXRlQ29udm92bGVyU3RhdGUoZW5hYmxlZCk7XG5cbiAgICB9KTtcblxuICAgIHRoaXMuY29udm9sdmVyV2V0Tm9kZS5nYWluLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jb252b2x2ZXJEcnlOb2RlLmdhaW4udmFsdWUgPSAxIC0gdmFsdWU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9XG5cbn07XG5Tb3VuZE9uRGVtYW5kLlNvdW5kID0gZnVuY3Rpb24oa2V5LCBjaGFubmVsKSB7XG5cbiAgdGhpcy5rZXkgPSBrZXk7XG4gIHRoaXMuYnVmZmVyS2V5ID0ga2V5O1xuXG4gIGlmIChjaGFubmVsLmVuZ2luZS5hbGlhc2VzW2tleV0pIHtcblxuICAgIHRoaXMuYWxpYXMgPSBjaGFubmVsLmVuZ2luZS5hbGlhc2VzW2tleV07XG5cbiAgICB0aGlzLmJ1ZmZlcktleSA9IHRoaXMuYWxpYXMuc291cmNlO1xuXG4gIH1cblxuICBpZiAoIWNoYW5uZWwuZW5naW5lLmJ1ZmZlcnNbdGhpcy5idWZmZXJLZXldKSBjaGFubmVsLmVuZ2luZS5sb2FkKHRoaXMuYnVmZmVyS2V5KTtcblxuICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB0aGlzLmF1ZGlvQ29udGV4dCA9IHRoaXMuY2hhbm5lbC5lbmdpbmUuYXVkaW9Db250ZXh0O1xuXG4gIHRoaXMuY3VycmVudCA9IHtcbiAgICB2b2x1bWU6IDEuMCxcbiAgICByYXRlOiAxLjBcbiAgfTtcblxuICB0aGlzLmZhZGVNb2QgPSAxLjA7XG5cbiAgdGhpcy5jcmVhdGVOb2RlcygpO1xuXG59O1xuXG5Tb3VuZE9uRGVtYW5kLlNvdW5kLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogU291bmRPbkRlbWFuZC5Tb3VuZCxcblxuICBhbGlhczoge1xuICAgIHZvbHVtZTogMS4wLFxuICAgIHJhdGU6IDEuMFxuICB9LFxuXG4gIGNyZWF0ZU5vZGVzOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBidWZmZXJTb3VyY2UgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICB2YXIgZ2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdmFyIHBhbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVTdGVyZW9QYW5uZXIoKTtcblxuICAgIGJ1ZmZlclNvdXJjZS5jb25uZWN0KHBhbk5vZGUpO1xuICAgIHBhbk5vZGUuY29ubmVjdChnYWluTm9kZSk7XG4gICAgZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNoYW5uZWwuaW5wdXQpO1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UgPSBidWZmZXJTb3VyY2U7XG4gICAgdGhpcy5nYWluTm9kZSA9IGdhaW5Ob2RlO1xuICAgIHRoaXMucGFuTm9kZSA9IHBhbk5vZGU7XG5cbiAgfSxcblxuICB2b2x1bWU6IGZ1bmN0aW9uKHZvbHVtZSkge1xuXG4gICAgdm9sdW1lICo9IHRoaXMuYWxpYXMudm9sdW1lO1xuXG4gICAgdGhpcy5jdXJyZW50LnZvbHVtZSA9IHZvbHVtZTtcblxuICAgIHRoaXMudXBkYXRlVm9sdW1lKCk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHVwZGF0ZVZvbHVtZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB0aGlzLmN1cnJlbnQudm9sdW1lICogdGhpcy5mYWRlTW9kO1xuXG4gIH0sXG5cbiAgcGFuOiBmdW5jdGlvbihwYW4pIHtcblxuICAgIHRoaXMuY3VycmVudC5wYW4gPSBwYW47XG5cbiAgICB0aGlzLnVwZGF0ZVBhbm5pbmcoKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgdXBkYXRlUGFubmluZzogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnBhbk5vZGUucGFuLnZhbHVlID0gdGhpcy5jdXJyZW50LnBhbjtcblxuICB9LFxuXG4gIGxvb3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UubG9vcCA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50Lmxvb3AgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBycmF0ZTogZnVuY3Rpb24ocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhdGUodGhpcy5jdXJyZW50LnJhdGUgKyAoLTEgKyBNYXRoLnJhbmRvbSgpICogMikgKiByYW5nZSk7XG5cbiAgfSxcblxuICByYXRlOiBmdW5jdGlvbihyYXRlKSB7XG5cbiAgICByYXRlICo9IHRoaXMuYWxpYXMucmF0ZTtcblxuICAgIHRoaXMuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IHJhdGU7XG5cbiAgICB0aGlzLmN1cnJlbnQucmF0ZSA9IHJhdGU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIG9uZW5kZWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnQubG9vcCkgdGhpcy5zdG9wKCk7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG5cbiAgICAgIGlmICghdGhpcy5jaGFubmVsLmVuZ2luZS5idWZmZXJzW3RoaXMuYnVmZmVyS2V5XSkgcmV0dXJuO1xuXG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG5cbiAgICAgIHRoaXMuYnVmZmVyID0gdGhpcy5jaGFubmVsLmVuZ2luZS5idWZmZXJzW3RoaXMuYnVmZmVyS2V5XTtcblxuICAgICAgdGhpcy5idWZmZXJTb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG5cbiAgICAgIHRoaXMuYnVmZmVyU291cmNlLnN0YXJ0KDApO1xuICAgICAgdGhpcy5idWZmZXJTb3VyY2Uub25lbmRlZCA9IHRoaXMub25lbmRlZC5iaW5kKHRoaXMpO1xuXG4gICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcblxuICAgICAgdGhpcy5jdXJyZW50VGltZSArPSB0aGlzLmJ1ZmZlclNvdXJjZS5wbGF5YmFja1JhdGUudmFsdWUgKiBkZWx0YTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mYWRlVGFyZ2V0ICE9PSB0aGlzLmZhZGVNb2QpIHtcblxuICAgICAgdGhpcy5mYWRlTW9kID0gU291bmRPbkRlbWFuZC5tb3ZlVG8odGhpcy5mYWRlTW9kLCB0aGlzLmZhZGVUYXJnZXQsIGRlbHRhICogdGhpcy5mYWRlU3BlZWQpO1xuXG4gICAgICB0aGlzLnVwZGF0ZVZvbHVtZSgpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmZhZGVUYXJnZXQgPT09IDApIHtcblxuICAgICAgdGhpcy5wYXVzZSgpO1xuXG4gICAgfVxuXG5cblxuICB9LFxuXG4gIHBhdXNlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmUodGhpcyk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cbiAgfSxcblxuICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY2hhbm5lbC5yZW1vdmUodGhpcyk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5zdG9wKDApO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cbiAgfSxcblxuICByZXN1bWU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jcmVhdGVOb2RlcygpO1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG5cbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZSAlIHRoaXMuYnVmZmVyLmR1cmF0aW9uO1xuICAgIHRoaXMuYnVmZmVyU291cmNlLnN0YXJ0KDAsIHRoaXMuY3VycmVudFRpbWUpO1xuXG4gICAgdGhpcy5yYXRlKHRoaXMuY3VycmVudC5yYXRlKTtcbiAgICB0aGlzLnZvbHVtZSh0aGlzLmN1cnJlbnQudm9sdW1lKTtcbiAgICB0aGlzLmxvb3AodGhpcy5jdXJyZW50Lmxvb3ApO1xuXG4gICAgdGhpcy5jaGFubmVsLmFkZCh0aGlzKTtcblxuICAgIHRoaXMucGxheWluZyA9IHRydWU7XG5cbiAgfSxcblxuICBmYWRlVG86IGZ1bmN0aW9uKHRhcmdldCwgZHVyYXRpb24pIHtcblxuICAgIGlmICghdGhpcy5wbGF5aW5nICYmIHRoaXMucmVhZHkpIHRoaXMucmVzdW1lKCk7XG5cbiAgICBkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IDEuMDtcblxuICAgIHRoaXMuZmFkZVRpbWUgPSAwO1xuICAgIHRoaXMuZmFkZVRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmZhZGVEdXJhdGlvbiA9IGR1cmF0aW9uO1xuXG4gICAgdGhpcy5mYWRlU3BlZWQgPSBNYXRoLmFicyh0YXJnZXQgLSB0aGlzLmZhZGVNb2QpIC8gZHVyYXRpb247XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGZhZGVJbjogZnVuY3Rpb24oZHVyYXRpb24pIHtcblxuICAgIGlmICghdGhpcy5wbGF5aW5nICYmIHRoaXMucmVhZHkpIHRoaXMucmVzdW1lKCk7XG5cbiAgICB0aGlzLmZhZGVNb2QgPSAwO1xuICAgIHRoaXMuZmFkZVRvKDEuMCwgZHVyYXRpb24pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBmYWRlT3V0OiBmdW5jdGlvbihkdXJhdGlvbikge1xuXG4gICAgdGhpcy5mYWRlVG8oMCwgZHVyYXRpb24gfHwgMS4wKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cblxuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kT25EZW1hbmQgPSBmdW5jdGlvbihhcHApIHtcbiAgYXBwLmF1ZGlvID0gbmV3IFNvdW5kT25EZW1hbmQoe1xuICAgIGF1ZGlvQ29udGV4dDogYXBwLmF1ZGlvQ29udGV4dFxuICB9KTtcblxuICBhcHAuYXVkaW8ucGF0aCA9IGFwcC5nZXRQYXRoKFwic291bmRzXCIpO1xuXG4gIGFwcC5sb2FkU291bmRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIga2V5ID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICB0aGlzLmxvYWRlci5hZGQoKTtcblxuICAgICAgdGhpcy5hdWRpby5sb2FkKGtleSkudGhlbihcbiAgICAgICAgdGhpcy5sb2FkZXIuc3VjY2Vzcy5iaW5kKHRoaXMubG9hZGVyKSxcbiAgICAgICAgdGhpcy5sb2FkZXIuZXJyb3IuYmluZCh0aGlzLmxvYWRlcilcbiAgICAgICk7XG5cbiAgICB9XG5cbiAgfTtcblxufTtcblxuUExBWUdST1VORC5Tb3VuZE9uRGVtYW5kLnBsdWdpbiA9IHRydWU7IiwiRU5HSU5FID0geyB9OyIsImdhID0gZnVuY3Rpb24oKSB7fVxuXG5FTkdJTkUuQmVuY2htYXJrID0ge1xuXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLm11c2ljID0gYXBwLm11c2ljLnBsYXkoXCJnYW1lb3ZlclwiKS5mYWRlSW4oNCkubG9vcCgpO1xuXG4gICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuXG4gICAgLy8gdGhpcy5ncmFkaWVudCA9IGFwcC5sYXllci5jcmVhdGVSYWRpYWxHcmFkaWVudChhcHAuY2VudGVyLngsIGFwcC5jZW50ZXIueSwgMCwgYXBwLmNlbnRlci54LCBhcHAuY2VudGVyLnksIGFwcC5jZW50ZXIueCk7XG4gICAgLy8gdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMC4wLCBcInRyYW5zcGFyZW50XCIpO1xuICAgIC8vIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEuMCwgXCIjMDAwXCIpO1xuXG4gICAgLy8gSklUIHdhcm11cFxuICAgIHRoaXMuZGlkV2FybXVwID0gZmFsc2U7XG4gICAgdGhpcy5zdGVwcyA9IDA7XG4gICAgdGhpcy5pb3RhTGlzdCA9IFtdO1xuICAgIHRoaXMuZnJhbWVUaW1lcyA9IFtdO1xuICAgIHRoaXMuc2NvcmVzID0gW107XG4gICAgdGhpcy5ydW5Db3VudCA9IDA7XG4gICAgdGhpcy5za2lwQ291bnQgPSAwO1xuICAgIHRoaXMuc2tpcFJlc2V0Q291bnQgPSAwO1xuICAgIHRoaXMucmVzZXRDb3VudCA9IDA7XG4gICAgdGhpcy5zY29yZVN0YWNrID0gW107XG4gICAgdGhpcy5mcmFtZVRpbWUgPSAwLjA7XG4gIH0sXG5cblxuICBwb2ludGVyZG93bjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5yZWFkeSkge1xuXG4gICAgICB0aGlzLm11c2ljLmZhZGVPdXQoKTtcblxuICAgICAgYXBwLnNldFN0YXRlKEVOR0lORS5HYW1lKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuc3RhcnRNb2QgPSAwO1xuXG4gICAgdGhpcy5pb3RhQ291bnQgPSB0aGlzLmFwcC5iYXNlbGluZSA/IE1hdGguZmxvb3IodGhpcy5hcHAuYmFzZWxpbmUgKiAwLjcpIDogMTtcblxuICAgIHRoaXMuYXBwLmJhc2VsaW5lID0gMDtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICB9LFxuXG4gIC8vIENhbGxlZCBiZXR3ZWVuIGJlbmNobWFyayBsb29wc1xuICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGVwcyA9IDA7XG4gICAgdGhpcy5mcmFtZVRpbWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5za2lwQ291bnQgPSAwO1xuICAgIC8vIEpJVCB3YXJtdXAgc2V0dGluZ3MgKHJ1biB1bmJvdW5kIGxvb3BzKVxuICAgIGlmICghdGhpcy5kaWRXYXJtdXApIHtcbiAgICAgIC8vIGNvbnNvbGUudGltZSgnV2FybXVwJyk7XG4gICAgICB0aGlzLmFwcC51bmJvdW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXBwLmltbWlkaWF0ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcC51bmJvdW5kID0gZmFsc2U7XG4gICAgICB0aGlzLmFwcC5pbW1pZGlhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy5pb3RhTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5hZGRJb3Rhcyh0aGlzLmRpZFdhcm11cCA/IHRoaXMuaW90YUNvdW50IDogMSk7XG4gICAgfVxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB2YXIgYmVmb3JlID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICB0aGlzLmlvdGFMaXN0LmZvckVhY2goZnVuY3Rpb24oaW90YSkge1xuICAgICAgaW90YS5zdGVwKGR0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuZnJhbWVUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLSBiZWZvcmU7XG5cbiAgICBpZiAoIXRoaXMuZGlkV2FybXVwKSB7XG4gICAgICAvLyBTdGF0ZTogSklUIFdhcm11cFxuICAgICAgdGhpcy5zdGVwV2FybVVwKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZyYW1lVGltZSkge1xuICAgICAgLy8gU3RyZXNzdGVzdGluZ1xuICAgICAgdGhpcy5zdGVwU3RyZXNzVGVzdCgpXG4gICAgfVxuXG4gIH0sXG5cbiAgc3RlcFdhcm1VcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnN0ZXBzKys7XG5cbiAgICBpZiAodGhpcy5zdGVwcyA+IDExMDApIHtcbiAgICAgIHRoaXMuZGlkV2FybXVwID0gdHJ1ZTtcbiAgICAgIC8vIGNvbnNvbGUudGltZUVuZCgnV2FybXVwJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnV2FybXVwIHdpdGggJWQgaW90YXMnLCB0aGlzLmlvdGFMaXN0Lmxlbmd0aCk7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICB9LFxuXG4gIHN0ZXBTdHJlc3NUZXN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYWRkID0gMTtcbiAgICB2YXIgZnJhbWVUaW1lcyA9IHRoaXMuZnJhbWVUaW1lcztcbiAgICB2YXIgTUFYX0ZSQU1FUyA9IDQ1O1xuICAgIHZhciBNSU5fRlJBTUVTID0gMTU7XG4gICAgdmFyIENPU1QgPSA4O1xuICAgIHZhciBFUlJPUiA9IDAuMjU7XG4gICAgdmFyIGZyYW1lVGltZSA9IHRoaXMuZnJhbWVUaW1lO1xuICAgIGlmIChmcmFtZVRpbWVzLnVuc2hpZnQoZnJhbWVUaW1lKSA+IE1BWF9GUkFNRVMpIHtcbiAgICAgIGZyYW1lVGltZXMubGVuZ3RoID0gTUFYX0ZSQU1FUztcbiAgICB9XG4gICAgaWYgKGZyYW1lVGltZXMubGVuZ3RoID49IE1JTl9GUkFNRVMpIHtcbiAgICAgIHZhciBzYW1wbGUgPSB0aGlzLmFuYWx5emUoZnJhbWVUaW1lcyk7XG4gICAgICB2YXIgc2NvcmUgPSB0aGlzLmlvdGFMaXN0Lmxlbmd0aDtcbiAgICAgIGlmIChzYW1wbGUucnNlIDw9IEVSUk9SICYmIHNhbXBsZS5tZWFuID4gQ09TVCkge1xuICAgICAgICB0aGlzLnB1c2hTY29yZShzY29yZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChzYW1wbGUucnNlID4gRVJST1IgfHwgc2FtcGxlLm1lYW4gPiBDT1NUKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdTa2lwICMnICsgdGhpcy5za2lwQ291bnQpO1xuICAgICAgICB0aGlzLnNraXBDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5za2lwQ291bnQgPiA2MCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgJ1tSRVNFVCBTVEVQXSBIaWdoIHNhbXBsaW5nIGVycm9yICVmJSUgb3IgbWVhbiAlZm1zIGZvciAlZCBlbnRpdGllcy4nLFxuICAgICAgICAgICAgc2FtcGxlLnJzZSAqIDEwMCwgc2FtcGxlLm1lYW4sIHNjb3JlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmlvdGFDb3VudCA9IE1hdGguZmxvb3IodGhpcy5sYXN0U2NvcmUgKiAwLjcpO1xuICAgICAgICAgIHRoaXMuc2tpcFJlc2V0Q291bnQrKztcbiAgICAgICAgICBpZiAodGhpcy5za2lwUmVzZXRDb3VudCA+IDEwKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsaXplKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNraXBDb3VudCA9IDA7XG4gICAgICBhZGQgPSBNYXRoLnJvdW5kKENPU1QgLyBzYW1wbGUubWVhbik7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRJb3RhcyhhZGQpO1xuICB9LFxuXG4gIHB1c2hTY29yZTogZnVuY3Rpb24oc2NvcmUpIHtcbiAgICB2YXIgU0FWRV9TQ09SRVMgPSAzO1xuICAgIHZhciBNSU5fU0NPUkVTID0gNTtcbiAgICB2YXIgTUFYX1NDT1JFUyA9IDEwO1xuICAgIHZhciBFUlJPUiA9IDAuMTU7XG5cbiAgICB0aGlzLnNraXBSZXNldENvdW50ID0gMDtcbiAgICB2YXIgc2NvcmVzID0gdGhpcy5zY29yZXM7XG4gICAgdGhpcy5ydW5Db3VudCsrO1xuICAgIGlmIChzY29yZXMudW5zaGlmdChzY29yZSkgPiBNQVhfU0NPUkVTKSB7XG4gICAgICBzY29yZXMubGVuZ3RoID0gTUFYX1NDT1JFUztcbiAgICB9XG4gICAgdGhpcy5pb3RhQ291bnQgPSBNYXRoLmNlaWwoc2NvcmUgKiAwLjcpO1xuICAgIHZhciBsID0gc2NvcmVzLmxlbmd0aDtcbiAgICBpZiAobCA+PSBNSU5fU0NPUkVTKSB7XG4gICAgICB2YXIgc2FtcGxlID0gdGhpcy5hbmFseXplKHNjb3Jlcyk7XG4gICAgICBpZiAoc2FtcGxlLnJzZSA8IEVSUk9SKSB7XG4gICAgICAgIHRoaXMucmVzZXRDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuYXBwLmJhc2VsaW5lID0gTWF0aC5yb3VuZChzYW1wbGUubWVhbik7XG4gICAgICAgIHRoaXMuYXBwLmJhc2VsaW5lRXJyID0gc2FtcGxlLnJzZTtcbiAgICAgICAgdGhpcy5zY29yZXMuc3BsaWNlKFNBVkVfU0NPUkVTKTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZShmYWxzZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdbU0NPUkUgUkVTRVRdIFN0YW5kYXJkIGVycm9yICVmJSUgdG9vIGhpZ2ggaW4gc2NvcmUgc2FtcGxlcy4nLFxuICAgICAgICAgIHNhbXBsZS5yc2UgKiAxMDBcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yZXNldENvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLnJlc2V0Q291bnQgPiAxMCkge1xuICAgICAgICAgIHRoaXMuc2NvcmVzLnNwbGljZSgwKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnW0JBSUxdIFRvbyBtYW55IFtSRVNFVCBTQ09SRV0uJyk7XG4gICAgICAgICAgdGhpcy5maW5hbGl6ZShmYWxzZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmluYWxpemUodHJ1ZSk7XG4gIH0sXG5cbiAgZmluYWxpemU6IGZ1bmN0aW9uKHJlc3RhcnQpIHtcblxuICAgIGlmICghcmVzdGFydCkge1xuICAgICAgLy8gUmVtb3ZlIGlvdGFzXG4gICAgICB0aGlzLmlvdGFDb3VudCA9IDA7XG4gICAgICB0aGlzLnJ1bkNvdW50ID0gMDtcbiAgICAgIC8vIFJlc2V0IGJlbmNobWFyayBlbmdpbmUgc2V0dGluZ3NcbiAgICAgIHRoaXMuYXBwLnVuYm91bmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXBwLmltbWlkaWF0ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBSZWR1Y2UgaW90YUxpc3QgdG8gaW90YUNvdW50XG4gICAgdGhpcy5pb3RhTGlzdC5zcGxpY2UodGhpcy5pb3RhQ291bnQpLmZvckVhY2goZnVuY3Rpb24oaW90YSkge1xuICAgICAgaW90YS5kZXN0cm95KCk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3RhcnQpIHtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICBhcHAudHdlZW4odGhpcykudG8oe1xuICAgICAgICBzdGFydE1vZDogMS4wXG4gICAgICB9LCAxLjAsIFwib3V0RWxhc3RpY1wiKTtcbiAgICB9XG5cbiAgfSxcblxuICBhZGRJb3RhczogZnVuY3Rpb24oY291bnQpIHtcblxuICAgIGZvciAodmFyIGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuXG4gICAgICB0aGlzLmlvdGFMaXN0LnB1c2gobmV3IElvdGEodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAvKiBnZXQgcmVmZXJlbmNlIHRvIHRoZSBhcHBsaWNhdGlvbiAqL1xuXG4gICAgdmFyIGFwcCA9IHRoaXMuYXBwO1xuXG4gICAgLyogZ2V0IHJlZmVyZW5jZSB0byBkcmF3aW5nIHN1cmZhY2UgKi9cblxuICAgIHZhciBsYXllciA9IHRoaXMuYXBwLmxheWVyO1xuXG4gICAgLyogY2xlYXIgc2NyZWVuICovXG5cbiAgICBsYXllci5jbGVhcihcIiMyODIyNDVcIik7XG5cblxuICAgIGxheWVyLmRyYXdJbWFnZShhcHAuaW1hZ2VzLnNwbGFzaCwgYXBwLmNlbnRlci54IC0gYXBwLmltYWdlcy5zcGxhc2gud2lkdGggLyAyIHwgMCwgYXBwLmNlbnRlci55IC0gYXBwLmltYWdlcy5zcGxhc2guaGVpZ2h0IC8gMiB8IDApXG5cbiAgICBsYXllci5zYXZlKCk7XG4gICAgbGF5ZXIudHJhbnNsYXRlKDYwMCwgMjkwKTtcblxuICAgIGxheWVyLmFsaWduKDAuNSwgMC41KTtcbiAgICBsYXllci5zY2FsZSg0LCA0KTtcbiAgICBsYXllci5nbG9iYWxBbHBoYSgwLjQpO1xuICAgIGxheWVyLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbihcImxpZ2h0ZXJcIik7XG4gICAgbGF5ZXIuZHJhd0ltYWdlKGFwcC5pbWFnZXMuZmxhcmUsIDEyOCAqICgzMiAqIChhcHAubGlmZXRpbWUgJSAxLjUgLyAxLjUpIHwgMCksIDAsIDEyOCwgMTI4LCAwLCAwLCAxMjgsIDEyOCk7XG4gICAgbGF5ZXIucmVzdG9yZSgpO1xuXG5cbiAgICBhcHAuZm9udFNpemUoNDgpO1xuXG5cblxuICAgIGlmICghdGhpcy5yZWFkeSkge1xuICAgICAgdmFyIHRleHRYID0gYXBwLmNlbnRlci54O1xuICAgICAgdmFyIHRleHRZID0gYXBwLmNlbnRlci55IC0gMTY7XG5cbiAgICAgIGxheWVyLmZpbGxTdHlsZShcInJnYmEoMCwwLDAsMC41XCIpLmZpbGxSZWN0KDAsIHRleHRZIC0gNTQsIGFwcC53aWR0aCwgNzQpO1xuXG4gICAgICBsYXllci5maWxsU3R5bGUoXCIjMDAwXCIpLnRleHRBbGlnbihcImNlbnRlclwiKS5maWxsVGV4dChcIkxPQURJTkcuLi4gcGxlYXNlIHdhaXRcIiwgdGV4dFgsIHRleHRZIC0gNCk7XG4gICAgICBsYXllci5maWxsU3R5bGUoXCIjZmZmXCIpLnRleHRBbGlnbihcImNlbnRlclwiKS5maWxsVGV4dChcIkxPQURJTkcuLi4gcGxlYXNlIHdhaXRcIiwgdGV4dFgsIHRleHRZKTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciB0ZXh0WCA9IGFwcC5jZW50ZXIueCArIDEwMCArICgxIC0gdGhpcy5zdGFydE1vZCkgKiAxMDAwO1xuICAgICAgdmFyIHRleHRZID0gYXBwLmNlbnRlci55IC0gMTA7XG5cbiAgICAgIGxheWVyLmEoMC41ICsgVXRpbHMub3NjKGFwcC5saWZldGltZSwgMSkgKiAwLjUpO1xuICAgICAgbGF5ZXIuZmlsbFN0eWxlKFwiIzAwMFwiKS50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZmlsbFRleHQoXCJDTElDSyBUTyBTVEFSVCFcIiwgdGV4dFgsIHRleHRZIC0gNCk7XG4gICAgICBsYXllci5maWxsU3R5bGUoXCIjZmEwXCIpLnRleHRBbGlnbihcImNlbnRlclwiKS5maWxsVGV4dChcIkNMSUNLIFRPIFNUQVJUIVwiLCB0ZXh0WCwgdGV4dFkpO1xuICAgICAgbGF5ZXIuYSgxLjApO1xuXG4gICAgfVxuXG5cbiAgICAvLyBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgLy8gYXBwLmN0eC5maWxsUmVjdCgwLCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQpO1xuXG4gICAgLy8gdGhpcy5pb3RhTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGlvdGEpIHtcbiAgICAvLyAgIGlvdGEucmVuZGVyKGxheWVyKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGxheWVyXG4gICAgLy8gICAuZmlsbFN0eWxlKCcjZmZmJylcbiAgICAvLyAgIC5mb250KFwiMTRweCAnYXJpYWwnXCIpXG4gICAgLy8gICAuZmlsbFRleHQoJ1N0cmVzcyB0ZXN0ICMnICsgdGhpcy5ydW5Db3VudCwgNSwgMTUpXG4gICAgLy8gICAuZmlsbFRleHQoJ0VudGl0aWVzOiAnICsgdGhpcy5pb3RhTGlzdC5sZW5ndGgsIDUsIDMwKVxuICAgIC8vICAgLmZpbGxUZXh0KCdGcmFtZXRpbWU6JyArIHRoaXMuZnJhbWVUaW1lLnRvRml4ZWQoMSksIDUsIDQ1KTtcbiAgfSxcblxuICBhbmFseXplOiBmdW5jdGlvbihwb3B1bGF0aW9uKSB7XG5cbiAgICB2YXIgbCA9IHBvcHVsYXRpb24ubGVuZ3RoO1xuICAgIHZhciBzdW0gPSAwLjA7XG4gICAgdmFyIHN1bXNxID0gMC4wO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzdW0gKz0gcG9wdWxhdGlvbltpXTtcbiAgICAgIHN1bXNxICs9IHBvcHVsYXRpb25baV0gKiBwb3B1bGF0aW9uW2ldO1xuICAgIH1cbiAgICB2YXIgbWVhbiA9IHN1bSAvIGw7XG4gICAgdmFyIHNkID0gTWF0aC5zcXJ0KHN1bXNxIC8gbCAtIHN1bSAqIHN1bSAvIChsICogbCkpO1xuICAgIHZhciBzZSA9IHNkIC8gTWF0aC5zcXJ0KGwpO1xuICAgIC8vIHN0YW5kYXJkIGVycm9yIGF0IDk1JSBjb25maWRlbmNlXG4gICAgdmFyIHNlOTUgPSAxLjk2ICogc2U7XG4gICAgdmFyIHJzZSA9IHNlIC8gbWVhbjtcbiAgICByZXR1cm4ge1xuICAgICAgbWVhbjogbWVhbixcbiAgICAgIHNkOiBzZCxcbiAgICAgIHNlOiBzZSxcbiAgICAgIHNlOTU6IHNlOTUsXG4gICAgICByc2U6IHJzZVxuICAgIH1cblxuICB9LFxuXG4gIG5lYXJlc3Q6IGZ1bmN0aW9uKGZyb20sIGVudGl0aWVzKSB7XG5cbiAgICB2YXIgbWluID0gLTE7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0byA9IGVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGZyb20sIHRvKTtcblxuICAgICAgaWYgKGRpc3RhbmNlIDwgbWluIHx8IG1pbiA8IDApIHtcbiAgICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgICAgIHJlc3VsdCA9IHRvO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBkaXN0YW5jZTogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgdmFyIGR4ID0gYS54IC0gYi54O1xuICAgIHZhciBkeSA9IGEueSAtIGIueTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gIH1cbn07XG5cbnZhciBpbWFnZXMgPSBbJ2ZpcmVmb3gnLCAnZmlyZWZveF9iZXRhJywgJ2ZpcmVmb3hfZGV2ZWxvcGVyX2VkaXRpb24nLCAnZmlyZWZveF9uaWdodGx5J107XG5cbmZ1bmN0aW9uIElvdGEoYXBwLCBwYXJlbnQpIHtcbiAgdGhpcy54ID0gMC4wO1xuICB0aGlzLnkgPSAwLjA7XG4gIHRoaXMudnggPSAwLjA7XG4gIHRoaXMudnkgPSAwLjA7XG4gIHRoaXMudnIgPSAwLjA7XG4gIHRoaXMuYWxwaGEgPSAwLjA7XG4gIHRoaXMuYW5nbGUgPSAwLjA7XG4gIHRoaXMuYXBwID0gYXBwO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy54ID0gTWF0aC5yYW5kb20oKSAqIGFwcC53aWR0aDtcbiAgdGhpcy55ID0gTWF0aC5yYW5kb20oKSAqIGFwcC5oZWlnaHQ7XG4gIHRoaXMubWF4VmVsID0gMTAwLjA7XG4gIHRoaXMubWF4VG9ycSA9IE1hdGguUEkgKiAxMDtcbiAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFZlbCAqIDIgLSB0aGlzLm1heFZlbDtcbiAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFZlbCAqIDIgLSB0aGlzLm1heFZlbDtcbiAgdGhpcy52ciA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLm1heFRvcnEgKiAyIC0gdGhpcy5tYXhUb3JxO1xuICB0aGlzLmltYWdlID0gYXBwLmltYWdlc1tpbWFnZXNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyldXTtcbiAgdGhpcy5yZWdpb24gPSBVdGlscy5yYW5kb20oW1xuICAgIFs1NDgsIDg4LCA0NiwgNDddLFxuICAgIFs1NDQsIDE0MiwgNDYsIDQ4XSxcbiAgICBbNTQ0LCAyMDAsIDQ2LCA0N10sXG4gICAgWzU0NSwgMjUzLCA0NCwgNDhdXG4gIF0pO1xuICB0aGlzLm1heEZvcmNlID0gMTAwLjA7XG4gIHRoaXMuYWxwaGEgPSAwLjIgKyBNYXRoLnJhbmRvbSgpICogMC44O1xuICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XG59XG5cbklvdGEucHJvdG90eXBlID0ge1xuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBhcHAuc3RhdGUubmVhcmVzdCh0aGlzLCB0aGlzLnBhcmVudC5pb3RhTGlzdCk7XG5cbiAgICB2YXIgaW90YUxpc3QgPSB0aGlzLnBhcmVudC5pb3RhTGlzdDtcbiAgICB2YXIgZm9yY2V4ID0gMC4wO1xuICAgIHZhciBmb3JjZXkgPSAwLjA7XG4gICAgdmFyIGZvcmNlcyA9IDA7XG4gICAgdmFyIG1heERpc3QgPSA2MC4wO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gaW90YUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgZGlzdHggPSAodGhpcy54IC0gaW90YUxpc3RbaV0ueCkgLyBtYXhEaXN0O1xuICAgICAgdmFyIGRpc3R5ID0gKHRoaXMueSAtIGlvdGFMaXN0W2ldLnkpIC8gbWF4RGlzdDtcbiAgICAgIHZhciBzaWdueCA9IE1hdGguc2lnbihkaXN0eCk7XG4gICAgICB2YXIgc2lnbnkgPSBNYXRoLnNpZ24oZGlzdHkpO1xuICAgICAgdmFyIGFic3ggPSBNYXRoLmFicyhkaXN0eCk7XG4gICAgICB2YXIgYWJzeSA9IE1hdGguYWJzKGRpc3R5KTtcbiAgICAgIGlmIChhYnN4IDwgMSAmJiBhYnN5IDwgMSkge1xuICAgICAgICBmb3JjZXggKz0gc2lnbnggKyBhYnN4ICogc2lnbng7XG4gICAgICAgIGZvcmNleSArPSBzaWdueSArIGFic3kgKiBzaWdueTtcbiAgICAgICAgZm9yY2VzKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZvcmNlcyA9PSAwKSB7XG4gICAgICBmb3JjZXMgPSAxO1xuICAgIH1cbiAgICBmb3JjZXggPSBNYXRoLm1heCgtdGhpcy5tYXhGb3JjZSwgTWF0aC5taW4odGhpcy5tYXhGb3JjZSwgZm9yY2V4IC8gZm9yY2VzKSkgKiA1MDA7XG4gICAgZm9yY2V5ID0gTWF0aC5tYXgoLXRoaXMubWF4Rm9yY2UsIE1hdGgubWluKHRoaXMubWF4Rm9yY2UsIGZvcmNleSAvIGZvcmNlcykpICogNTAwO1xuICAgIHRoaXMudnggPSB0aGlzLnZ4ICogMC45OSArIGZvcmNleCAqIDAuMDE7XG4gICAgdGhpcy52eSA9IHRoaXMudnkgKiAwLjk5ICsgZm9yY2V5ICogMC4wMTtcblxuICAgIHZhciB4ID0gdGhpcy54ICsgdGhpcy52eCAqIGR0O1xuICAgIGlmICh4IDwgMCB8fCB4ID4gdGhpcy5hcHAud2lkdGgpIHtcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5hcHAud2lkdGg7XG4gICAgfVxuICAgIHRoaXMueCA9IHg7XG5cbiAgICB2YXIgeSA9IHRoaXMueSArIHRoaXMudnkgKiBkdDtcbiAgICBpZiAoeSA8IDAgfHwgeSA+IHRoaXMuYXBwLmhlaWdodCkge1xuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmFwcC5oZWlnaHQ7XG4gICAgfVxuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5hbmdsZSArPSB0aGlzLnZyICogZHQ7XG4gIH0sXG5cbiAgLy8gcmVuZGVyOiBmdW5jdGlvbihsYXllcikge1xuXG4gIC8vICAgcmV0dXJuO1xuXG4gIC8vICAgbGF5ZXIuY29udGV4dC5zYXZlKCk7XG4gIC8vICAgbGF5ZXIuY29udGV4dC50cmFuc2xhdGUodGhpcy54IHwgMCwgdGhpcy55IHwgMCk7XG4gIC8vICAgLy8gbGF5ZXIuYSh0aGlzLmFscGhhKTtcbiAgLy8gICBsYXllci5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2YwMFwiO1xuICAvLyAgIGxheWVyLmNvbnRleHQuZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIDY0LCA2NCk7XG4gIC8vICAgbGF5ZXIuY29udGV4dC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgLy8gICBsYXllci5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAvLyAgIGxheWVyLmNvbnRleHQubW92ZVRvKHRoaXMueCwgdGhpcy55KTtcbiAgLy8gICBsYXllci5jb250ZXh0LmFyYyh0aGlzLngsIHRoaXMueSwgNjQsIDAsIE1hdGguUEkgKiAyKTtcbiAgLy8gICBsYXllci5jb250ZXh0LnJvdGF0ZSh0aGlzLmFuZ2xlKTtcbiAgLy8gICBsYXllci5kcmF3UmVnaW9uKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIHRoaXMucmVnaW9uLCAwLCAwKTtcbiAgLy8gICBsYXllci5jb250ZXh0LnJlc3RvcmUoKTtcbiAgLy8gfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFwcCA9IG51bGw7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICB9XG5cbn0iLCJFTkdJTkUuQmFja2dyb3VuZFN0YXJzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5jb2xvciA9IFwiIzBhZlwiO1xuXG4gIHRoaXMuY291bnQgPSBNYXRoLm1heChhcHAuaGVpZ2h0LCBhcHAud2lkdGgpIC8gMTYgfCAwO1xuXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG5cbiAgdGhpcy5wb3B1bGF0ZWQgPSBmYWxzZTtcbiAgdGhpcy5pbWFnZSA9IGFwcC5nZXRDb2xvcmVkSW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5jb2xvcik7XG5cbn07XG5cbkVOR0lORS5CYWNrZ3JvdW5kU3RhcnMucHJvdG90eXBlID0ge1xuXG4gIGltYWdlczoge30sXG5cbiAgY29sb3JzOiBbXCIjYWZjXCIsIFwiI2ZhMFwiXSxcblxuICBzcHJpdGVzOiBbXG4gICAgWzI2MCwgMTY1LCA1LCA1XSxcbiAgICBbMjYxLCAxNzEsIDMsIDNdXG4gIF0sXG5cbiAgcG9wdWxhdGU6IGZ1bmN0aW9uKGZpbGwpIHtcbiAgICB0aGlzLnN0YXJzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xuICAgICAgdGhpcy5zcGF3blN0YXIoZmlsbCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgc3Bhd25TdGFyOiBmdW5jdGlvbihmaWxsKSB7XG5cbiAgICB2YXIgc3RhciA9IHtcbiAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiBhcHAud2lkdGgsXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogYXBwLmhlaWdodCxcbiAgICAgIHo6IDAuMSArIDAuOSAqIE1hdGgucmFuZG9tKCksXG4gICAgICBzOiBVdGlscy5yYW5kb20oWzEsIDIsIDNdKSxcbiAgICAgIHNwcml0ZUluZGV4OiBNYXRoLnJhbmRvbSgpICogdGhpcy5zcHJpdGVzLmxlbmd0aCB8IDBcbiAgICB9O1xuXG4gICAgc3Rhci5seCA9IHN0YXIueDtcbiAgICBzdGFyLmx5ID0gc3Rhci55O1xuXG4gICAgdGhpcy5zdGFycy5wdXNoKHN0YXIpO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbihkdCkge1xuXG4gICAgaWYgKCF0aGlzLnBvcHVsYXRlZCkge1xuICAgICAgdGhpcy5wb3B1bGF0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5wb3B1bGF0ZSh0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgZGlmZlggPSAoMTAgKyBhcHAuZ2FtZS5zY29yZSkgKiBkdDtcbiAgICB2YXIgZGlmZlkgPSAoMTAgKyBhcHAuZ2FtZS5zY29yZSkgKiBkdDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGFycy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgc3RhciA9IHRoaXMuc3RhcnNbaV07XG5cbiAgICAgIHZhciBzcHJpdGUgPSB0aGlzLnNwcml0ZXNbc3Rhci5zcHJpdGVJbmRleF07XG5cbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIHNwcml0ZVswXSwgc3ByaXRlWzFdLCBzcHJpdGVbMl0sIHNwcml0ZVszXSxcbiAgICAgICAgc3Rhci54LCBzdGFyLnksIHNwcml0ZVsyXSwgc3ByaXRlWzNdKTtcblxuICAgICAgc3Rhci54ICs9IGRpZmZYICogc3Rhci56O1xuICAgICAgc3Rhci55ICs9IGRpZmZZICogc3Rhci56O1xuXG4gICAgICBpZiAoc3Rhci54ID4gYXBwLndpZHRoKSBzdGFyLnggPSAwO1xuICAgICAgaWYgKHN0YXIueSA+IGFwcC5oZWlnaHQpIHN0YXIueSA9IDA7XG5cbiAgICAgIGlmIChzdGFyLnggPCAwKSBzdGFyLnggPSBhcHAud2lkdGg7XG4gICAgICBpZiAoc3Rhci55IDwgMCkgc3Rhci55ID0gYXBwLmhlaWdodDtcblxuICAgIH1cblxuICB9XG5cbn07IiwiRU5HSU5FLkNpcmNsZUV4cGxvc2lvbiA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuXG4gICAgYXR0YWNoZWRUbzogZmFsc2UsXG4gICAgcmFkaXVzOiAwLFxuICAgIGFscGhhOiAxLjAsXG4gICAgZHVyYXRpb246IDAuNVxuXG4gIH0sIGFyZ3MpO1xuXG4gIHRoaXMucmFkaXVzID0gMDtcblxuICB0aGlzLmltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCBcIiMwMDBcIiwgXCJzb3VyY2UtaW5cIik7XG5cbiAgdGhpcy50d2VlbiA9IGFwcC50d2Vlbih0aGlzKS5kaXNjYXJkKCkudG8oe1xuICAgIHJhZGl1czogYXJncy5yYWRpdXNcbiAgfSwgdGhpcy5kdXJhdGlvbiwgXCJvdXRFbGFzdGljXCIpLnRvKHtcbiAgICByYWRpdXM6IDBcbiAgfSwgdGhpcy5kdXJhdGlvbiwgXCJvdXRFbGFzdGljXCIpO1xuXG59O1xuXG5FTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkNpcmNsZUV4cGxvc2lvbixcblxuICB0eXBlOiBcImNpcmNsZUV4cGxvc2lvblwiLFxuXG4gIGFjdGlvbjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuc291bmQucGxheShcImxhc2VyXCIpO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZih0aGlzLmF0dGFjaGVkVG8pIHtcbiAgICAgIHRoaXMueCA9IHRoaXMuYXR0YWNoZWRUby54O1xuICAgICAgdGhpcy55ID0gdGhpcy5hdHRhY2hlZFRvLnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHdlZW4uZmluaXNoZWQpIHRoaXMuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMucmFkaXVzID4gMCkge1xuICAgICAgXG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgYXBwLmN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcbiAgICAgIGFwcC5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgYXBwLmN0eC5maWxsKCk7XG4gICAgICBhcHAuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwic291cmNlLW92ZXJcIjtcblxuXG4gICAgfVxuXG4gIH1cblxufTsiLCJFTkdJTkUuU2hpcCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuXG4gICAgZGFtYWdlOiAxLFxuICAgIGZpcmVyYXRlOiAwLjUsXG4gICAgc3BlZWQ6IDE2MCxcbiAgICByYWRpdXM6IDE2LFxuICAgIHJvdGF0aW9uU3BlZWQ6IDUsXG4gICAgaHA6IDEwLFxuICAgIHJhbmdlOiAyMDAsXG4gICAgZm9yY2U6IDAsXG4gICAgZm9yY2VEaXJlY3Rpb246IDAsXG4gICAgdGFyZ2V0VGltZW91dDogMCxcbiAgICBoaXRMaWZlc3BhbjogMCxcbiAgICBzY2FsZTogMS4wLFxuICAgIHJhbms6IDAsXG4gICAga2lsbHM6IDBcblxuICB9LCBkZWZzLnNoaXBzW2FyZ3MudHlwZV0sIGFyZ3MpO1xuXG4gIHRoaXMucmFuZG9tID0gdGhpcy5nYW1lLnJhbmRvbSgpO1xuXG4gIHRoaXMubWF4SHAgPSB0aGlzLmhwO1xuXG4gIHRoaXMubGlmZXRpbWUgPSB0aGlzLmdhbWUucmFuZG9tKCkgKiAxMDtcbiAgdGhpcy5jb29sZG93biA9IHRoaXMuZmlyZXJhdGU7XG4gIHRoaXMuZGVzaXJlZERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uID0gdGhpcy5nYW1lLnJhbmRvbSgpICogNjtcblxuICB0aGlzLmNvbG9yID0gZGVmcy50ZWFtQ29sb3JbdGhpcy50ZWFtXTtcblxuICB0aGlzLmltYWdlID0gYXBwLmltYWdlcy5zcHJpdGVzaGVldDtcblxuICBpZiAodGhpcy50ZWFtKSB0aGlzLmFwcGx5VXBncmFkZXModGhpcy5nYW1lLnVwZ3JhZGVzKTtcbiAgZWxzZSB0aGlzLmFwcGx5RGlmZmljdWx0eSgpO1xuXG59O1xuXG5FTkdJTkUuU2hpcC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5TaGlwLFxuXG4gIGhvdmVyYWJsZTogdHJ1ZSxcblxuICBmcm96ZW5TcHJpdGU6IFsxOTMsIDg2LCAxMSwgMTldLFxuXG4gIHF1b3RhOiAyLFxuXG4gIHBvaW50ZXJlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnJlcGFpcigpO1xuXG4gIH0sXG5cbiAgcmFua3M6IFtcbiAgICBbMzE4LCAxMzEsIDEwLCA1XSxcbiAgICBbMzMzLCAxMzEsIDEwLCAxMF0sXG4gICAgWzM0OCwgMTMxLCAxMCwgMTVdLFxuICAgIFszNjAsIDEzMSwgMTAsIDhdLFxuICAgIFszNzIsIDEzMSwgMTAsIDEzXSxcbiAgICBbMzg0LCAxMzEsIDEwLCAxOF0sXG4gICAgWzM5NiwgMTMxLCAxNSwgMTZdXG4gIF0sXG5cbiAgYXBwbHlEaWZmaWN1bHR5OiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkaWZmaWN1bHR5ID0gdGhpcy5nYW1lLndhdmUgLyAzMDtcblxuICAgIHRoaXMuc3BlZWQgKj0gMSArIGRpZmZpY3VsdHk7XG4gICAgdGhpcy5kYW1hZ2UgKj0gMSArIGRpZmZpY3VsdHk7XG5cbiAgfSxcblxuICBhcHBseVVwZ3JhZGVzOiBmdW5jdGlvbih1cGdyYWRlcykge1xuXG4gICAgdmFyIGhwbW9kID0gdGhpcy5ocCAvIHRoaXMubWF4SHA7XG5cbiAgICB0aGlzLmRhbWFnZSA9IDEgKyB1cGdyYWRlcy5kYW1hZ2UgKiAwLjI1O1xuICAgIHRoaXMubWF4SHAgPSB1cGdyYWRlcy5saWZlICogMTA7XG4gICAgdGhpcy5ocCA9IGhwbW9kICogdGhpcy5tYXhIcDtcbiAgICB0aGlzLnNwZWVkID0gODAgKyAxMCAqIHVwZ3JhZGVzLnNwZWVkO1xuXG5cbiAgICBpZiAodGhpcy5mcmVlKSB7XG4gICAgICB0aGlzLmRhbWFnZSAqPSAyO1xuICAgICAgdGhpcy5tYXhIcCAqPSAyO1xuICAgICAgdGhpcy5ocCAqPSAyO1xuICAgIH1cblxuICB9LFxuXG4gIGRpZTogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMudGVhbSkgdGhpcy5nYW1lLnNjb3JlKys7XG5cbiAgICBpZiAodGhpcy5nYW1lLmJlbmNobWFyaykge1xuXG4gICAgICB0aGlzLmhwID0gdGhpcy5tYXhIcDtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuZGVhZCA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3NzKSB7XG5cbiAgICAgIHRoaXMuZ2FtZS5zaGFrZSgpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5SZXNvdXJjZSwge1xuICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICB5OiB0aGlzLnlcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5leHBsb3Npb24odGhpcy54LCB0aGlzLnksIDE2LCB0aGlzLmNvbG9yKTtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlJlc291cmNlLCB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnBsYW5ldCkgdGhpcy5wbGFuZXQuc2hpcHMtLTtcblxuICAgIGlmICghdGhpcy50ZWFtKSB0aGlzLmdhbWUub25lbmVteWRlYXRoKHRoaXMpO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcInBsYW5ldEhpdFwiKS5yYXRlKDAuNik7XG5cbiAgfSxcblxuICBhcHBseURhbWFnZTogZnVuY3Rpb24oZGFtYWdlLCBhdHRhY2tlcikge1xuXG4gICAgaWYgKHRoaXMuZGVhZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5oaXRMaWZlc3BhbiA9IDAuMTtcblxuICAgIHRoaXMuaHAgLT0gZGFtYWdlO1xuXG4gICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgdGhpcy5kaWUoKTtcbiAgICAgIGlmIChhdHRhY2tlcikgYXR0YWNrZXIub25zY29yZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5leHBsb3Npb24odGhpcy54LCB0aGlzLnksIDMsIHRoaXMuY29sb3IpO1xuXG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgZHQgKj0gdGhpcy5nYW1lLnRpbWVGYWN0b3I7XG5cbiAgICAvLyBpZiAoIXRoaXMudGVhbSkgZHQgKj0gTWF0aC5zaW4oKGFwcC5saWZldGltZSAlIDIgLyAyKSAqIE1hdGguUEkpO1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkdDtcblxuICAgIGlmICgodGhpcy50YXJnZXRUaW1lb3V0IC09IGR0KSA8PSAwKSB7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gZmFsc2U7XG4gICAgICB0aGlzLnRhcmdldFRpbWVvdXQgPSAwLjI1O1xuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRhcmdldCkge1xuXG4gICAgICB0aGlzLnRhcmdldCA9IHRoaXMuZ2V0VGFyZ2V0KHRoaXMuZ2FtZS5lbnRpdGllcyk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0LmRlYWQpIHtcblxuICAgICAgdGhpcy50YXJnZXQgPSBudWxsO1xuXG4gICAgfVxuXG5cbiAgICB0aGlzLmZvcmVzaWdodENvbGxpc2lvbigpO1xuXG4gICAgdmFyIGRlc3RpbmF0aW9uID0gZmFsc2U7XG4gICAgdmFyIHNwZWVkID0gdGhpcy5zcGVlZDtcblxuICAgIHZhciBveCA9IDA7XG4gICAgdmFyIG95ID0gMDtcblxuICAgIGlmICh0aGlzLnRlYW0gJiYgdGhpcy50YXJnZXQpIHtcblxuICAgICAgb3ggPSBNYXRoLmNvcyh0aGlzLnJhbmRvbSAqIDYuMjgpICogMTAwO1xuICAgICAgb3kgPSBNYXRoLnNpbih0aGlzLnJhbmRvbSAqIDYuMjgpICogMTAwO1xuXG4gICAgICBkZXN0aW5hdGlvbiA9IHRoaXMudGFyZ2V0O1xuXG4gICAgfSBlbHNlIGRlc3RpbmF0aW9uID0gdGhpcy5nYW1lLnBsYXllci5wbGFuZXQ7XG5cbiAgICBpZiAodGhpcy50ZWFtICYmIFV0aWxzLmRpc3RhbmNlKHRoaXMsIGFwcC5jZW50ZXIpID4gYXBwLmNlbnRlci55KSB7XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gYXBwLmNlbnRlcjtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbGxpc2lvbkRhbmdlcikge1xuXG4gICAgICAvKlxuXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5jb2xsaXNpb25EYW5nZXIueSAtIHRoaXMueSwgdGhpcy5jb2xsaXNpb25EYW5nZXIueCAtIHRoaXMueCkgLSBNYXRoLlBJIC8gMjtcblxuICAgICAgICBkZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgICB4OiB0aGlzLmNvbGxpc2lvbkRhbmdlci54ICsgTWF0aC5jb3MoYW5nbGUpICogMTUwLFxuICAgICAgICAgIHk6IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnkgKyBNYXRoLmNvcyhhbmdsZSkgKiAxNTBcbiAgICAgICAgfVxuXG4gICAgICAgIHNwZWVkICo9IDEgLSAwLjUgKiBNYXRoLmFicyhVdGlscy5jaXJjRGlzdGFuY2UodGhpcy5kaXJlY3Rpb24sIGFuZ2xlKSAvIChNYXRoLlBJKSk7XG5cbiAgICAgICovXG5cbiAgICAgIGlmICh0aGlzLmNvbGxpc2lvbkRpc3RhbmNlIDwgNTApIHtcblxuICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMuY29sbGlzaW9uRGFuZ2VyLnkgLSB0aGlzLnksIHRoaXMuY29sbGlzaW9uRGFuZ2VyLnggLSB0aGlzLngpIC0gTWF0aC5QSTtcblxuICAgICAgICB0aGlzLnggPSB0aGlzLmNvbGxpc2lvbkRhbmdlci54ICsgTWF0aC5jb3MoYW5nbGUpICogNTA7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnkgKyBNYXRoLnNpbihhbmdsZSkgKiA1MDtcblxuICAgICAgfVxuXG4gICAgICAvLyBzcGVlZCAqPSB0aGlzLmNvbGxpc2lvbkRpc3RhbmNlIC8gMjAwO1xuXG4gICAgfVxuXG5cbiAgICBpZiAoZGVzdGluYXRpb24pIHtcblxuICAgICAgdGhpcy5kZXNpcmVkRGlyZWN0aW9uID0gTWF0aC5hdGFuMihkZXN0aW5hdGlvbi55IC0gdGhpcy55ICsgb3gsIGRlc3RpbmF0aW9uLnggLSB0aGlzLnggKyBveSk7XG5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZnJvemVuKSB7XG5cbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gVXRpbHMuY2lyY1dyYXBUbyh0aGlzLmRpcmVjdGlvbiwgdGhpcy5kZXNpcmVkRGlyZWN0aW9uLCBkdCAqIHRoaXMucm90YXRpb25TcGVlZCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLm1vdmUoZHQpO1xuXG4gICAgLyogZmlyaW5nIG1lY2hhbmljcyAqL1xuXG4gICAgdGhpcy5jb29sZG93biAtPSBkdDtcblxuICAgIGlmICh0aGlzLmNhbkZpcmUoKSkge1xuXG4gICAgICB0aGlzLmZpcmUoKTtcblxuICAgIH1cblxuICAgIGlmICghdGhpcy50ZWFtICYmIFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMuZ2FtZS5wbGF5ZXJQbGFuZXQpIDwgdGhpcy5nYW1lLnBsYXllclBsYW5ldC5yYWRpdXMpIHtcblxuICAgICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSB7XG5cbiAgICAgICAgdGhpcy5nYW1lLnBsYXllci5wbGFuZXQuYXBwbHlEYW1hZ2UoMSwgdGhpcyk7XG4gICAgICAgIHRoaXMuZGllKCk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHRoaXMuaGl0TGlmZXNwYW4gLT0gZHQ7XG5cbiAgfSxcblxuXG4gIG1vdmU6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBpZiAoIXRoaXMuZnJvemVuKSB7XG5cbiAgICAgIFV0aWxzLm1vdmVJbkRpcmVjdGlvbi5jYWxsKHRoaXMsIHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkICogZHQpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9yY2UgPiAwKSB7XG5cbiAgICAgIHRoaXMuZm9yY2UgLT0gMjAwICogZHQ7XG5cbiAgICAgIFV0aWxzLm1vdmVJbkRpcmVjdGlvbi5jYWxsKHRoaXMsIHRoaXMuZm9yY2VEaXJlY3Rpb24sIHRoaXMuZm9yY2UgKiBkdCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBjYW5GaXJlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmZyb3plbikgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSByZXR1cm47XG4gICAgaWYgKCF0aGlzLnRhcmdldCkgcmV0dXJuO1xuICAgIGlmIChVdGlscy5kaXN0YW5jZSh0aGlzLCB0aGlzLnRhcmdldCkgPiB0aGlzLnJhbmdlKSByZXR1cm47XG5cbiAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5maXJlcmF0ZTtcblxuICAgIHRoaXMuZmlyZSgpO1xuXG4gIH0sXG5cbiAgZmlyZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5CdWxsZXQsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHRlYW06IHRoaXMudGVhbSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICBkYW1hZ2U6IHRoaXMuZGFtYWdlLFxuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgLyogc3ByaXRlICovXG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcbiAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG5cbiAgICB0aGlzLnJlbmRlckhVRCgpO1xuXG4gICAgaWYgKHRoaXMuaGl0TGlmZXNwYW4gPiAwKSB7XG5cbiAgICAgIHZhciBpbWFnZSA9IGFwcC5nZXRDb2xvcmVkSW1hZ2UodGhpcy5pbWFnZSwgXCIjZmZmXCIsIFwic291cmNlLWluXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIGltYWdlID0gdGhpcy5pbWFnZTtcblxuICAgIH1cblxuICAgIGFwcC5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uIC0gTWF0aC5QSSAvIDIpO1xuICAgIGFwcC5jdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM10pO1xuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gICAgaWYgKHRoaXMuZnJvemVuKSB7XG5cbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsXG4gICAgICAgIHRoaXMuZnJvemVuU3ByaXRlWzBdLCB0aGlzLmZyb3plblNwcml0ZVsxXSwgdGhpcy5mcm96ZW5TcHJpdGVbMl0sIHRoaXMuZnJvemVuU3ByaXRlWzNdLFxuICAgICAgICB0aGlzLnggLSB0aGlzLmZyb3plblNwcml0ZVsyXSAvIDIsIHRoaXMueSAtIHRoaXMuZnJvemVuU3ByaXRlWzNdIC8gMiwgdGhpcy5mcm96ZW5TcHJpdGVbMl0sIHRoaXMuZnJvemVuU3ByaXRlWzNdKTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLnRlYW0pIHtcblxuICAgICAgdmFyIHJhbmtTcHJpdGUgPSB0aGlzLnJhbmtzW3RoaXMucmFua107XG5cbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsXG4gICAgICAgIHJhbmtTcHJpdGVbMF0sIHJhbmtTcHJpdGVbMV0sIHJhbmtTcHJpdGVbMl0sIHJhbmtTcHJpdGVbM10sXG4gICAgICAgIHRoaXMueCArIDI0LCB0aGlzLnkgLSAyNCwgcmFua1Nwcml0ZVsyXSwgcmFua1Nwcml0ZVszXSk7XG5cblxuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlckhVRDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5mcm96ZW4pIHJldHVybjtcblxuICAgIHZhciB3ID0gTWF0aC5taW4oMTAwLCAodGhpcy5tYXhIcCAvIDE2MCkgKiAxMDAgfCAwKTtcblxuICAgIHZhciBtb2QgPSB0aGlzLmhwIC8gdGhpcy5tYXhIcDtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBhcHAuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgYXBwLmN0eC5maWxsUmVjdCgtdyAqIG1vZCAvIDIgfCAwLCAzMiwgdyAqIG1vZCwgNSk7XG4gICAgYXBwLmN0eC5zdHJva2VSZWN0KC13ICogMC41IHwgMCwgMzIsIHcsIDUpO1xuXG4gIH0sXG5cbiAgY29sbGlzaW9uUmFuZ2U6IDEwMCxcblxuICBmb3Jlc2lnaHRDb2xsaXNpb246IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jb2xsaXNpb25EYW5nZXIgPSBmYWxzZTtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwb29sID0gVXRpbHMuZmlsdGVyKHRoaXMuZ2FtZS5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZS50eXBlICE9PSBcImFzdGVyb2lkXCIpIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKFV0aWxzLmRpc3RhbmNlKHNlbGYsIGUpID4gc2VsZi5jb2xsaXNpb25SYW5nZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH0pO1xuXG4gICAgdGhpcy5jb2xsaXNpb25EYW5nZXIgPSBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uRGFuZ2VyKSB0aGlzLmNvbGxpc2lvbkRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5jb2xsaXNpb25EYW5nZXIpO1xuXG4gIH0sXG5cbiAgZ2V0VGFyZ2V0OiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwb29sID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgZW50aXR5ID0gdGhpcy5nYW1lLmVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcCkpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoZW50aXR5LnRlYW0gIT09IHRoaXMudGVhbSkgcG9vbC5wdXNoKGVudGl0eSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gVXRpbHMubmVhcmVzdCh0aGlzLCBwb29sKTtcblxuICB9LFxuXG4gIHJlcGFpcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5ocCA+PSB0aGlzLm1heEhwKSByZXR1cm47XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIGNvbG9yOiBcIiNhMDRcIixcbiAgICAgIHJhZGl1czogMzIsXG4gICAgICBhdHRhY2hlZFRvOiB0aGlzXG4gICAgfSk7XG5cbiAgICB0aGlzLmhwID0gdGhpcy5tYXhIcDtcblxuICB9LFxuXG4gIG9uc2NvcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5raWxscysrO1xuXG4gICAgdGhpcy5yYW5rID0gTWF0aC5taW4odGhpcy5yYW5rcy5sZW5ndGggLSAxLCB0aGlzLmtpbGxzIC8gMyB8IDApO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuQnVsbGV0ID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgc3BlZWQ6IDQwMFxuICB9LCBhcmdzKTtcblxuICB0aGlzLmNvbG9yID0gZGVmcy50ZWFtQ29sb3JbdGhpcy50ZWFtXTtcbiAgdGhpcy5yYWRpdXMgPSA0O1xuICB0aGlzLmRpcmVjdGlvbiA9IDA7XG5cbiAgdGhpcy5zcHJpdGUgPSB0aGlzLnNwcml0ZXNbdGhpcy50ZWFtXTtcblxufTtcblxuRU5HSU5FLkJ1bGxldC5wcm90b3R5cGUgPSB7XG5cbiAgc3ByaXRlczogW1xuICAgIFsxMjYsIDI1LCA0LCAzN10sXG4gICAgWzEzMywgMjUsIDQsIDM3XVxuICBdLFxuXG4gIHF1b3RhOiAwLjUsXG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5CdWxsZXQsXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIGR0ICo9IHRoaXMuZ2FtZS50aW1lRmFjdG9yO1xuXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHRoaXMudGFyZ2V0LnkgLSB0aGlzLnksIHRoaXMudGFyZ2V0LnggLSB0aGlzLngpO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcbiAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuXG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA8IHRoaXMucmFkaXVzICsgdGhpcy50YXJnZXQucmFkaXVzKSB7XG5cbiAgICAgIHRoaXMuaGl0KHRoaXMudGFyZ2V0KTtcblxuICAgIH1cblxuICB9LFxuXG4gIGhpdDogZnVuY3Rpb24odGFyZ2V0KSB7XG5cbiAgICB0YXJnZXQuYXBwbHlEYW1hZ2UodGhpcy5kYW1hZ2UsIHRoaXMucGFyZW50KTtcblxuICAgIHRoaXMuZGllKCk7XG5cbiAgfSxcblxuICBkaWU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICBhcHAuY3R4LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbiArIE1hdGguUEkgLyAyKTtcbiAgICBhcHAuY3R4LmRyYXdJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LFxuICAgICAgdGhpcy5zcHJpdGVbMF0sIHRoaXMuc3ByaXRlWzFdLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM10sIC10aGlzLnNwcml0ZVsyXSAvIDIsIC10aGlzLnNwcml0ZVszXSAvIDIsIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXVxuICAgICk7XG5cbiAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkFzdGVyb2lkID0gZnVuY3Rpb24oYXJncykge1xuXG4gIHRoaXMubWF4ID0gdGhpcy5yZXNvdXJjZXMgPSA1O1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBoaXRMaWZlc3BhbjogMFxuXG4gIH0sIGFyZ3MpO1xuXG4gIHRoaXMucmFkaXVzID0gMzI7XG5cbiAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKGFwcC5jZW50ZXIueSAtIHRoaXMueSwgYXBwLmNlbnRlci54IC0gdGhpcy54KTtcbiAgdGhpcy5zcGVlZCA9IDggKyB0aGlzLmdhbWUucmFuZG9tKCkgKiAzMjtcblxuICB0aGlzLmxpZmV0aW1lID0gMDtcblxuICB0aGlzLmtpbmQgPSB0aGlzLmdhbWUucmFuZG9tKCkgPiAwLjggPyBcImdvbGRcIiA6IFwibm9ybWFsXCI7XG5cbiAgdGhpcy5zcHJpdGUgPSBVdGlscy5yYW5kb20odGhpcy5zcHJpdGVzW3RoaXMua2luZF0pO1xuXG4gIHRoaXMuY29sbGVjdGlibGVzID0gMDtcblxuXG59O1xuXG5FTkdJTkUuQXN0ZXJvaWQucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuQXN0ZXJvaWQsXG5cbiAgcXVvdGE6IDAuNSxcblxuICBob3ZlcmFibGU6IFwibWluaW5nXCIsXG4gIHNpbGVudDogdHJ1ZSxcbiAgaW5zdGFudDogdHJ1ZSxcblxuICB0eXBlOiBcImFzdGVyb2lkXCIsXG5cblxuICBzcHJpdGVzOiB7XG5cbiAgICBub3JtYWw6IFtcbiAgICAgIFszNDEsIDIzOSwgNTIsIDM5XSxcbiAgICAgIFszMzcsIDI4OCwgNjEsIDYxXSxcbiAgICAgIFszMzgsIDM1NCwgNTcsIDU4XVxuICAgIF0sXG5cbiAgICBnb2xkOiBbXG4gICAgICBbNDA4LCAyMzgsIDUyLCAzOV0sXG4gICAgICBbNDA0LCAyODcsIDU5LCA2MV0sXG4gICAgICBbNDAzLCAzNTMsIDU5LCA1OF1cbiAgICBdLFxuXG4gICAgaGl0OiBbXG4gICAgICBbNDc2LCAxMjcsIDUyLCAzOV0sXG4gICAgICBbNDcyLCAxNzYsIDYxLCA2MV0sXG4gICAgICBbNDczLCAyNDIsIDU3LCA1OF1cbiAgICBdXG5cbiAgfSxcblxuICBwb2ludGVyZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IHRydWU7XG5cbiAgfSxcblxuICBwb2ludGVybGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IGZhbHNlO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJkaWdFbmRcIik7XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNykge1xuXG4gICAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5Qb3dlcnVwLCB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIFwiI2FhYVwiKTtcbiAgICB0aGlzLmdhbWUuc3Bhd25Bc3Rlcm9pZCgpO1xuXG4gIH0sXG5cbiAgZGlnOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuaGl0TGlmZXNwYW4gPSAwLjE7XG5cbiAgICB0aGlzLnJlc291cmNlcy0tO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VzIDw9IDApIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ID0gdGhpcy5raW5kID09PSBcImdvbGRcIiA/IDIgOiAxO1xuXG4gICAgdGhpcy5zcGF3blJlc291cmNlcyhjb3VudCk7XG5cbiAgICB0aGlzLmdhbWUuZXhwbG9zaW9uKHRoaXMueCwgdGhpcy55LCA0LCBcIiNmYTBcIik7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiZGlnXCIpO1xuXG4gIH0sXG5cbiAgc3Bhd25SZXNvdXJjZXM6IGZ1bmN0aW9uKGNvdW50KSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuUmVzb3VyY2UsIHtcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgZHQgKj0gdGhpcy5nYW1lLnRpbWVGYWN0b3I7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdGhpcy5oaXRMaWZlc3BhbiAtPSBkdDtcblxuICAgIHZhciBzcGVlZCA9IHRoaXMuc3BlZWQgKiAodGhpcy5zbG93ZG93biA/IDAuMjUgOiAxLjApO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHNwZWVkICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHNwZWVkICogZHQ7XG5cbiAgICB0aGlzLmdhbWUud3JhcCh0aGlzKTtcblxuICAgIGlmIChVdGlscy5kaXN0YW5jZSh0aGlzLCBhcHAuY2VudGVyKSA8IHRoaXMuZ2FtZS5wbGF5ZXIucGxhbmV0LnJhZGl1cyArIHRoaXMucmFkaXVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5hc3Rlcm9pZHNTaGllbGQpIHtcblxuICAgICAgICB0aGlzLnNwYXduUmVzb3VyY2VzKDUpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIucGxhbmV0LmFwcGx5RGFtYWdlKDEsIHRoaXMpO1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGllKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuaGl0TGlmZXNwYW4gPiAwKSB7XG4gICAgXG4gICAgICB2YXIgc3ByaXRlID0gdGhpcy5zcHJpdGVzLmhpdFt0aGlzLnNwcml0ZUluZGV4XTtcbiAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgXG4gICAgICB2YXIgc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMua2luZF1bdGhpcy5zcHJpdGVJbmRleF07XG5cbiAgICB9XG5cbiAgICB2YXIgc2NhbGUgPSAwLjUgKyAwLjUgKiB0aGlzLnJlc291cmNlcyAvIHRoaXMubWF4O1xuXG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSlcbiAgICBhcHAuY3R4LnJvdGF0ZShhcHAucm91bmRBbmdsZSh0aGlzLmxpZmV0aW1lKSlcbiAgICBhcHAuY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSlcbiAgICBhcHAuY3R4LmRyYXdJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LFxuICAgICAgc3ByaXRlWzBdLCBzcHJpdGVbMV0sIHNwcml0ZVsyXSwgc3ByaXRlWzNdLCAtc3ByaXRlWzJdIC8gMiwgLXNwcml0ZVszXSAvIDIsIHNwcml0ZVsyXSwgc3ByaXRlWzNdXG4gICAgKTtcbiAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkN1cnNvciA9IGZ1bmN0aW9uKGdhbWUsIHRlYW0sIHBsYW5ldCkge1xuXG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgdGhpcy5hY3Rpb25UaW1lb3V0ID0gMDtcblxuICB0aGlzLmRvdFJhZGl1cyA9IDg7XG4gIHRoaXMuY2FwYWNpdHkgPSAxMDtcbiAgdGhpcy5yZXNvdXJjZXMgPSA0O1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLmhvdmVyVGltZSA9IDA7XG4gIHRoaXMudGVhbSA9IHRlYW07XG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0ZWFtXTtcbiAgdGhpcy5wbGFuZXQgPSBwbGFuZXQ7XG5cbiAgdGhpcy50YXJnZXRUaW1lb3V0ID0gdGhpcy50YXJnZXRJbnRlcnZhbCA9IDAuMjU7XG4gIHRoaXMuZmlyZUNvb2xkb3duID0gdGhpcy5maXJlSW50ZXJ2YWwgPSAwLjI1O1xuXG4gIC8qIHRpbWVycyAqL1xuXG4gIHRoaXMudGltZXMgPSB7XG4gICAgbWluaW5nOiAwLjUsXG4gICAgY29sbGVjdDogMC4wNSxcbiAgICBidWlsZDogMC41LFxuICAgIHJlcGFpcjogMlxuICB9O1xuXG5cbiAgdGhpcy50d2VlbiA9IGFwcC50d2Vlbih0aGlzKTtcblxuICBpZiAoIXRoaXMudGVhbSkge1xuXG4gICAgdGhpcy5haSA9IG5ldyBFTkdJTkUuQWkodGhpcyk7XG4gICAgdGhpcy5haS5zZXQoXCJpZGxlXCIpO1xuXG4gIH1cblxuICB0aGlzLnRyYWlsID0gbmV3IEVOR0lORS5UcmFpbCh0aGlzLCB7XG4gICAgaW50ZXJ2YWw6IDAuMDUsXG4gICAgbWF4UG9pbnRzOiAxMCxcbiAgICBjb2xvcjogdGhpcy5jb2xvclxuICB9KTtcblxuXG59O1xuXG5FTkdJTkUuQ3Vyc29yLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkN1cnNvcixcblxuICBwb2tlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudHdlZW4gPSBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiAxNlxuICAgIH0sIDAuMSwgXCJvdXRTaW5lXCIpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiA4XG4gICAgfSwgMC4wNSwgXCJpblNpbmVcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdmFyIHByZXZFbnRpdHkgPSB0aGlzLmVudGl0eTtcblxuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5nZXRIb3ZlcmVkRW50aXR5KCk7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkgIT09IHByZXZFbnRpdHkpIHtcblxuICAgICAgaWYgKHByZXZFbnRpdHkgJiYgcHJldkVudGl0eS5wb2ludGVybGVhdmUpIHByZXZFbnRpdHkucG9pbnRlcmxlYXZlKHRoaXMpO1xuICAgICAgaWYgKHRoaXMuZW50aXR5ICYmIHRoaXMuZW50aXR5LnBvaW50ZXJlbnRlcikgdGhpcy5lbnRpdHkucG9pbnRlcmVudGVyKHRoaXMpO1xuXG4gICAgICB0aGlzLm9uZW50aXR5Y2hhbmdlKCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcblxuICAgICAgdGhpcy5ob3ZlclRpbWUgKz0gZHQ7XG5cbiAgICAgIHRoaXMucHJvZ3Jlc3NBY3Rpb24oZHQpO1xuXG4gICAgfVxuXG4gICAgLyogZmlyaW5nIG1lY2hhbmljcyAqL1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmRlYWQpIHRoaXMudGFyZ2V0ID0gZmFsc2U7XG5cbiAgICBpZiAoKHRoaXMudGFyZ2V0VGltZW91dCAtPSBkdCkgPD0gMCkge1xuXG4gICAgICB0aGlzLnRhcmdldFRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcblxuICAgIH1cblxuXG4gICAgdGhpcy5maXJlQ29vbGRvd24gLT0gZHQ7XG5cbiAgICBpZiAodGhpcy5jYW5GaXJlKCkpIHtcblxuICAgICAgdGhpcy5maXJlKCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLnRyYWlsLnN0ZXAoZHQpO1xuXG5cbiAgfSxcblxuICBnZXRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBvb2wgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBlbnRpdHkgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG5cbiAgICAgIGlmIChVdGlscy5kaXN0YW5jZShlbnRpdHksIHRoaXMpID4gMjAwKSBjb250aW51ZTtcbiAgICAgIGlmIChlbnRpdHkudGVhbSAhPT0gdGhpcy50ZWFtKSBwb29sLnB1c2goZW50aXR5KTtcblxuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG4gIH0sXG5cbiAgb25lbnRpdHljaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5hY3Rpb25Db21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5ob3ZlclRpbWUgPSAwO1xuXG4gICAgaWYgKHRoaXMuZW50aXR5KSB7XG5cbiAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5lbnRpdHkuaG92ZXJhYmxlO1xuICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5lbnRpdHkuaW5zdGFudCkgdGhpcy5hY3Rpb25UaW1lb3V0ID0gMDtcblxuXG4gICAgfSBlbHNlIHRoaXMuYWN0aW9uID0gZmFsc2U7XG5cbiAgICAvKlxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uU291bmQpIHRoaXMuYWN0aW9uU291bmQgPSBhcHAuc291bmQucGxheShcImFjdGlvblwiKS5sb29wKCkucmF0ZSgwLjUpO1xuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblNvdW5kLnN0b3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblNvdW5kLmZhZGVJbigpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgdGhpcy51cGRhdGVUb29sdGlwKCk7XG5cblxuICB9LFxuXG4gIHJlc2V0QWN0aW9uOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdGhpcy5hY3Rpb25UaW1lb3V0ID0gdGhpcy50aW1lc1t0aGlzLmFjdGlvbl07XG5cbiAgICB0aGlzLmFjdGlvbkR1cmF0aW9uID0gdGhpcy5hY3Rpb25UaW1lb3V0O1xuXG4gIH0sXG5cbiAgdXBncmFkZTogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICB0aGlzLmdhbWUudXBncmFkZXNba2V5XSArKztcblxuICAgIHRoaXMuZ2FtZS5idXR0b25zW2tleV0uY291bnQgPSB0aGlzLmdldFByaWNlKGtleSk7XG5cbiAgICB2YXIgc2hpcHMgPSBVdGlscy5maWx0ZXIodGhpcy5nYW1lLmVudGl0aWVzLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIHJldHVybiAoZSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSAmJiBlLnRlYW07XG5cbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHNoaXAgPSBzaGlwc1tpXTtcblxuICAgICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLCB7XG4gICAgICAgIGNvbG9yOiBcIiMwYWZcIixcbiAgICAgICAgcmFkaXVzOiAzMixcbiAgICAgICAgYXR0YWNoZWRUbzogc2hpcFxuICAgICAgfSk7XG5cbiAgICAgIHNoaXAuYXBwbHlVcGdyYWRlcyh0aGlzLmdhbWUudXBncmFkZXMpXG5cbiAgICB9XG5cbiAgfSxcblxuICBnZXRQcmljZTogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gTWF0aC5wb3coMiwgdGhpcy5nYW1lLnVwZ3JhZGVzW2tleV0pO1xuXG4gIH0sXG5cbiAgY2FuUHJvZ3Jlc3M6IGZ1bmN0aW9uKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmFjdGlvbikge1xuXG4gICAgICBjYXNlIFwicmVwYWlyXCI6XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbmV0LmhwIDwgdGhpcy5wbGFuZXQubWF4SFA7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJidWlsZFwiOlxuXG4gICAgICAgIGlmICh0aGlzLmVudGl0eS5rZXkgPT09IFwiZmlnaHRlclwiKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5nYW1lLnBsYXllclBsYW5ldC5tYXggLSB0aGlzLmdhbWUucGxheWVyUGxhbmV0LnNoaXBzIDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcyA+IDA7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMgPj0gdGhpcy5nZXRQcmljZSh0aGlzLmVudGl0eS5rZXkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgfSxcblxuICBwcm9ncmVzc0FjdGlvbjogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICh0aGlzLmNhblByb2dyZXNzKCkgJiYgKHRoaXMuYWN0aW9uVGltZW91dCAtPSBkdCkgPCAwKSB7XG5cbiAgICAgIHRoaXMuZmluYWxpemVBY3Rpb24oKTtcbiAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcblxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0gMSAtIHRoaXMuYWN0aW9uVGltZW91dCAvIHRoaXMuYWN0aW9uRHVyYXRpb247XG5cblxuICB9LFxuXG4gIGZpbmFsaXplQWN0aW9uOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuYWN0aW9uQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0aGlzLmFjdGlvbikge1xuXG4gICAgICBjYXNlIFwicmVwYWlyXCI6XG5cbiAgICAgICAgdGhpcy5wbGFuZXQucmVwYWlyKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtaW5pbmdcIjpcblxuICAgICAgICB0aGlzLmVudGl0eS5kaWcoKTtcblxuICAgICAgICBicmVhaztcblxuXG4gICAgICBjYXNlIFwiYnVpbGRcIjpcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZW50aXR5LmtleSkge1xuXG4gICAgICAgICAgY2FzZSBcImZpZ2h0ZXJcIjpcblxuICAgICAgICAgICAgdGhpcy5wbGFuZXQuc3Bhd25TaGlwKFwiZmlnaHRlclwiKTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzIC09IDE7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiYnVpbGRcIik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImxpZmVcIjpcbiAgICAgICAgICBjYXNlIFwiZGFtYWdlXCI6XG4gICAgICAgICAgY2FzZSBcInNwZWVkXCI6XG5cbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzIC09IHRoaXMuZ2V0UHJpY2UodGhpcy5lbnRpdHkua2V5KTtcblxuICAgICAgICAgICAgdGhpcy51cGdyYWRlKHRoaXMuZW50aXR5LmtleSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJ1cGdyYWRlXCIpO1xuXG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfSxcblxuICBoaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICB0aGlzLnBsYW5ldC5hcHBseURhbWFnZSgxLCB0aGlzLnBsYW5ldCk7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGNvbG9yOiBcIiNjMDJcIixcbiAgICAgIHJhZGl1czogMzJcbiAgICB9KVxuXG4gIH0sXG5cbiAgZ2V0SG92ZXJlZEVudGl0eTogZnVuY3Rpb24oKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgZW50aXR5ID0gdGhpcy5nYW1lLmVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoZW50aXR5LmhvdmVyYWJsZSAmJiBVdGlscy5kaXN0YW5jZShlbnRpdHksIHRoaXMpIDwgZW50aXR5LnJhZGl1cykgcmV0dXJuIGVudGl0eTtcblxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudHJhaWwucmVuZGVyKCk7XG5cbiAgICBhcHAubGF5ZXIuZmlsbFN0eWxlKHRoaXMuY29sb3IpLmZpbGxDaXJjbGUodGhpcy54LCB0aGlzLnksIHRoaXMuZG90UmFkaXVzKTtcblxuICAgIGlmICh0aGlzLmFjdGlvbiAmJiAhdGhpcy5lbnRpdHkuc2lsZW50KSB7XG5cbiAgICAgIHZhciBtb2QgPSBNYXRoLm1pbigxLCBhcHAuZWFzZSgyICogdGhpcy5ob3ZlclRpbWUsIFwib3V0Qm91bmNlXCIpKTtcblxuICAgICAgYXBwLmN0eC5zYXZlKCk7XG4gICAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLmVudGl0eS54LCB0aGlzLmVudGl0eS55KTtcblxuICAgICAgYXBwLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5hcmMoMCwgMCwgKHRoaXMuZW50aXR5LnJhZGl1cyArIDIpICogbW9kLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBhcHAuY3R4LnN0cm9rZSgpO1xuXG4gICAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5nbG9iYWxBbHBoYSA9IDAuMjU7XG4gICAgICBhcHAuY3R4LmFyYygwLCAwLCB0aGlzLmVudGl0eS5yYWRpdXMgKyA4LCAwLCBNYXRoLlBJICogMilcbiAgICAgIGFwcC5jdHguc3Ryb2tlKClcbiAgICAgIGFwcC5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG5cbiAgICAgIGFwcC5jdHgubGluZVdpZHRoID0gODtcbiAgICAgIGFwcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBhcHAuY3R4LmFyYygwLCAwLCB0aGlzLmVudGl0eS5yYWRpdXMgKyA4LCAwLCB0aGlzLnByb2dyZXNzICogTWF0aC5QSSAqIDIpXG4gICAgICBhcHAuY3R4LnN0cm9rZSgpO1xuXG4gICAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICAgIH1cblxuXG5cbiAgfSxcblxuICBjYW5GaXJlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5nYW1lLmNoZWNrQm9udXMoXCJsYXNlclwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuZmlyZUNvb2xkb3duID4gMCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy50YXJnZXQpIHJldHVybjtcbiAgICBpZiAoVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy50YXJnZXQpID4gdGhpcy5yYW5nZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXJlQ29vbGRvd24gPSB0aGlzLmZpcmVJbnRlcnZhbDtcblxuICAgIHRoaXMuZmlyZSgpO1xuXG4gIH0sXG5cbiAgZmlyZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5CdWxsZXQsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHRlYW06IHRoaXMudGVhbSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICBzcGVlZDogMTAwMFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcImxhc2VyXCIpO1xuXG4gIH0sXG5cbiAgbW92ZVRvOiBmdW5jdGlvbihkZXN0aW5hdGlvbikge1xuXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXG4gIH0sXG5cbiAgdXBkYXRlVG9vbHRpcDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkpIHtcbiAgICAgIGlmICh0aGlzLmVudGl0eS50b29sdGlwKSB0aGlzLmdhbWUudG9vbHRpcCA9IHRoaXMuZW50aXR5LnRvb2x0aXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZS50b29sdGlwID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxufSIsIkVOR0lORS5SZXNvdXJjZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLnNwZWVkID0gMzI7XG5cbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLmZvcmNlID0gNjQgKyBNYXRoLnJhbmRvbSgpICogMTI4O1xuXG4gIHRoaXMuZm9yY2UgKj0gMztcbiAgdGhpcy5mb3JjZURhbXBpbmcgPSB0aGlzLmZvcmNlO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMTA7XG5cbiAgdGhpcy52YWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAzIHwgMDtcblxuICB0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLnZhbHVlXTtcbn07XG5cbkVOR0lORS5SZXNvdXJjZS5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5SZXNvdXJjZSxcblxuICBxdW90YTogMC43LFxuXG4gIHNwcml0ZXM6IFtcbiAgICBbMzMzLCAxMDUsIDEwLCAxMF0sXG4gICAgWzMyMCwgMTA0LCAxMiwgMTJdLFxuICAgIFszMDMsIDEwMiwgMTYsIDE2XVxuICBdLFxuXG4gIHR5cGU6IFwicmVzb3VyY2VcIixcblxuXG4gIGNvbGxlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLnJlbW92ZSh0aGlzKTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJjb2luXCIpO1xuXG4gICAgdGhpcy5nYW1lLnBsYXllci5wb2tlKCk7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIGNvbG9yOiBcIiNmYzBcIixcbiAgICAgIHJhZGl1czogOCxcbiAgICAgIGF0dGFjaGVkVG86IHRoaXMsXG4gICAgICBkdXJhdGlvbjogMC4yNVxuICAgIH0pO1xuXG4gICAgdGhpcy5nYW1lLnBsYXllci5yZXNvdXJjZXMgKz0gdGhpcy52YWx1ZTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdmFyIHBsYXllckRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllcik7XG5cbiAgICBpZiAodGhpcy5mb3JjZSkge1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG4gICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG5cbiAgICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCgwLCB0aGlzLmZvcmNlIC0gdGhpcy5mb3JjZURhbXBpbmcgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2tlZCAmJiB0aGlzLmdhbWUuY2hlY2tCb251cyhcIm1hZ25ldFwiKSkge1xuXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIodGhpcy5nYW1lLnBsYXllci55IC0gdGhpcy55LCB0aGlzLmdhbWUucGxheWVyLnggLSB0aGlzLngpO1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuXG4gICAgICBpZiAoIXRoaXMuZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zcGVlZCArPSAyNTYgKiBkdDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICB0aGlzLnBva2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEyODtcbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMubGlmZXRpbWUgPiAwLjUpIHtcbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDMyKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpZmV0aW1lID4gdGhpcy5kdXJhdGlvbikgdGhpcy5nYW1lLnJlbW92ZSh0aGlzKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGFwcC5jdHgucm90YXRlKHRoaXMubGlmZXRpbWUpO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICApO1xuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5CdXR0b24gPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIHJhZGl1czogMzJcblxuICB9LCBhcmdzKTtcblxuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0O1xuXG59O1xuXG5FTkdJTkUuQnV0dG9uLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkJ1dHRvbixcblxuICB0eXBlOiBcImJ1dHRvblwiLFxuXG4gIHBvaW50ZXJlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpLnRvKHtcbiAgICAgIHJhZGl1czogMjRcbiAgICB9LCAwLjEpLnRvKHtcbiAgICAgIHJhZGl1czogMzJcbiAgICB9LCAwLjIsIFwib3V0U2luZVwiKTtcblxuICB9LFxuXG4gIGFjdGlvbjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdmFyIHNjYWxlID0gdGhpcy5yYWRpdXMgLyAzMjtcblxuICAgICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICAgICk7XG5cbiAgICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY291bnQpIHtcbiAgICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZm9udChcImJvbGQgMzJweCBBcmlhbFwiKS5maWxsU3R5bGUodGhpcy5jb2xvcikuZmlsbFRleHQodGhpcy5jb3VudCwgdGhpcy54LCB0aGlzLnkgLSB0aGlzLnJhZGl1cyAtIDQ4KTtcbiAgICB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5QYXJ0aWNsZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIHJhZGl1czogNFxuICB9LCBhcmdzKVxuXG4gIHRoaXMuc3ByaXRlSW5kZXggPSAwO1xuXG4gIHRoaXMucmVzZXQoKTtcblxufTtcblxuRU5HSU5FLlBhcnRpY2xlLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlBhcnRpY2xlLFxuXG4gIHF1b3RhOiAwLjUsXG5cbiAgc3ByaXRlczogW1xuICAgIFsyNjAsIDE1MiwgNiwgNl0sXG4gICAgWzI2MCwgMTU5LCA1LCA1XSxcbiAgICBbMjYwLCAxNjUsIDUsIDVdLFxuICAgIFsyNjEsIDE3MSwgMywgM11cbiAgXSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMC41O1xuXG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdhbWUucmFuZG9tKCkgKiA2LjI4O1xuICAgIHRoaXMuc3BlZWQgPSAzMiArIHRoaXMuZ2FtZS5yYW5kb20oKSAqIDEyODtcblxuICAgIHRoaXMuc3BlZWQgKj0gMztcblxuICAgIHRoaXMuZGFtcGluZyA9IHRoaXMuc3BlZWQgKiAyO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG5cbiAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG5cbiAgICB0aGlzLnNwZWVkID0gTWF0aC5tYXgoMCwgdGhpcy5zcGVlZCAtIHRoaXMuZGFtcGluZyAqIGR0KTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxpZmV0aW1lIC8gdGhpcy5kdXJhdGlvbiwgMS4wKTtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEuMCkge1xuICAgICAgdGhpcy54ID0gMDtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNwcml0ZUluZGV4ID0gdGhpcy5wcm9ncmVzcyAqIHRoaXMuc3ByaXRlcy5sZW5ndGggfCAwO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXG4gICAgLy8gdmFyIHMgPSB0aGlzLnNpemUgKiAoMSAtIHRoaXMucHJvZ3Jlc3MpO1xuXG4gICAgLy8gaWYgKHMgPiAwKSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMS4wKSByZXR1cm47XG5cbiAgICB0aGlzLmltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLmNvbG9yKTtcblxuICAgIC8vIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAvLyBhcHAuY3R4LmZpbGxSZWN0KHRoaXMueCAtIHMgLyAyLCB0aGlzLnkgLSBzIC8gMiwgcywgcylcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzLnNwcml0ZXNbdGhpcy5zcHJpdGVJbmRleF07XG5cbiAgICBhcHAuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCBzcHJpdGVbMF0sIHNwcml0ZVsxXSwgc3ByaXRlWzJdLCBzcHJpdGVbM10sXG4gICAgICB0aGlzLngsIHRoaXMueSwgc3ByaXRlWzJdLCBzcHJpdGVbM10pXG5cbiAgICAvLyB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5QbGFuZXQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIHJhZGl1czogNDgsXG4gICAgaHA6IDIwLFxuICAgIG1heDogMTAwLFxuICAgIHNoaXBzOiAwLFxuICAgIHJlcGFpclByb2dyZXNzOiAwLFxuICAgIHJlcGFpclRpbWU6IDQsXG4gICAgYXN0ZXJvaWRzU2hpZWxkOiB0cnVlLFxuICAgIHNoaWVsZFNjYWxlOiAwLjBcblxuICB9LCBhcmdzKTtcblxuICB0aGlzLm1heEhQID0gdGhpcy5ocDtcblxuICB0aGlzLmxpZmV0aW1lID0gMDtcblxufTtcblxuRU5HSU5FLlBsYW5ldC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5QbGFuZXQsXG5cbiAgdHlwZTogXCJwbGFuZXRcIixcblxuICBob3ZlcmFibGU6IFwicmVwYWlyXCIsXG5cbiAgc3ByaXRlOiBbMjAxLCAyMTUsIDEwNCwgMTA0XSxcblxuICBzaGllbGRTcHJpdGU6IFs0OTIsIDMyMCwgMTI0LCAxMjRdLFxuXG4gIHJlcGFpcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmhwKys7XG5cbiAgfSxcblxuICBhcHBseURhbWFnZTogZnVuY3Rpb24oZGFtYWdlLCBhdHRhY2tlcikge1xuXG4gICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICB0aGlzLmhwLS07XG5cbiAgICBpZiAodGhpcy5ocCA8PSAwICYmICF0aGlzLmdhbWUuYmVuY2htYXJrKSB0aGlzLmdhbWUuZ2FtZW92ZXIoKTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJwbGFuZXRIaXRcIik7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIHg6IGF0dGFja2VyLngsXG4gICAgICB5OiBhdHRhY2tlci55LFxuICAgICAgY29sb3I6IFwiI2EwNFwiLFxuICAgICAgcmFkaXVzOiAzMlxuICAgIH0pXG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkdDtcblxuICAgIHZhciBwcmV2U2hpZWxkID0gdGhpcy5hc3Rlcm9pZHNTaGllbGQ7XG4gICAgdGhpcy5hc3Rlcm9pZHNTaGllbGQgPSBmYWxzZTt0aGlzLmdhbWUuY2hlY2tCb251cyhcInNoaWVsZFwiKTtcblxuICAgIGlmIChwcmV2U2hpZWxkICE9PSB0aGlzLmFzdGVyb2lkc1NoaWVsZCkge1xuXG4gICAgICBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpLnRvKHtcbiAgICAgICAgc2hpZWxkU2NhbGU6IHRoaXMuYXN0ZXJvaWRzU2hpZWxkID8gMS4wIDogMC4wXG4gICAgICB9LCAwLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHNwYXduU2hpcDogZnVuY3Rpb24odHlwZSkge1xuXG4gICAgdmFyIHNoaXAgPSB0aGlzLmdhbWUuYWRkKEVOR0lORS5TaGlwLCB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgdGVhbTogMSxcbiAgICAgIHBsYW5ldDogdGhpc1xuICAgIH0pO1xuXG4gICAgc2hpcC5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2O1xuICAgIHNoaXAuZm9yY2UgPSAyMDA7XG5cbiAgICB0aGlzLnNoaXBzKys7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLmxheWVyLmFsaWduKDAuNSwgMC41KTtcbiAgICBhcHAubGF5ZXIuZHJhd1JlZ2lvbihhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnkpO1xuICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZm9udChcImJvbGQgNDhweCBBcmlhbFwiKS5maWxsU3R5bGUoXCIjZmZmXCIpLmZpbGxUZXh0KHRoaXMuaHAsIHRoaXMueCwgdGhpcy55IC0gMjQpO1xuICAgIGFwcC5sYXllci5yZWFsaWduKCk7XG5cbiAgICBpZiAodGhpcy5hc3Rlcm9pZHNTaGllbGQgJiYgdGhpcy5zaGllbGRTY2FsZSA+IDApIHtcbiAgICAgIHZhciBzY2FsZSA9IHRoaXMuc2hpZWxkU2NhbGU7XG4gICAgICBhcHAuY3R4LnNhdmUoKTtcbiAgICAgIGFwcC5jdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gICAgICBhcHAuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgYXBwLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5zaGllbGRTcHJpdGVbMF0sIHRoaXMuc2hpZWxkU3ByaXRlWzFdLCB0aGlzLnNoaWVsZFNwcml0ZVsyXSwgdGhpcy5zaGllbGRTcHJpdGVbM10sIC10aGlzLnNoaWVsZFNwcml0ZVsyXSAvIDIsIC10aGlzLnNoaWVsZFNwcml0ZVszXSAvIDIsIHRoaXMuc2hpZWxkU3ByaXRlWzJdLCB0aGlzLnNoaWVsZFNwcml0ZVszXSk7XG4gICAgICBhcHAuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG59OyIsIi8qIFRoZSBjb3VudGVyIGluIHRoZSB0b3AtbGVmdCBjb3JuZXIgaXM6XG5cbkFWRVJBR0UgRlJBTUUgVElNRSB8ICBERVZJQ0UgIFBPV0VSICAgfCBFTlRJVElFUyBDT1VOVFxuICAgICAgICAgICAgICAgICAgICAgKGJhc2VsaW5lRmFjdG9yKVxuKi9cblxuXG4vKiBSZWZlcmVuY2UgYmFzZWxpbmUgdG8gY2FsY3VsYXRlIGRldmljZSBwb3dlciAqL1xuXG5SRUZFUkVOQ0VfQkFTRUxJTkUgPSAzNzg7XG5cbi8qIFJlZmVyZW5jZSBmcmFtZSB0aW1lIHRvIHRlbGwgaG93IHdlbGwgdGhlIGdhbWUgaGFzIGJlZW4gb3B0aW1pemVkICovXG4vKiBNYWtlIGl0IGhpZ2hlciB0byBnaXZlIHVzZXIgbW9yZSBDUFUgcG93ZXIgKi9cblxuUkVGRVJFTkNFX0ZSQU1FX1RJTUUgPSAwLjg7XG5cbi8qIEhvdyBtdWNoIG9wdGltaXphdGlvbiB2YWx1ZSBvbmUgc2hpcCBkcmFpbnMgKi9cblxuU0hJUF9DUFVfQ09TVCA9IDAuMTtcblxuRU5HSU5FLkdhbWUgPSB7XG5cbiAgYm9udXNlczoge1xuXG4gICAgbWFnbmV0OiAwLjEsXG4gICAgbGFzZXI6IDAuMixcbiAgICBzaGllbGQ6IDAuNFxuXG4gIH0sXG5cbiAgY2hlY2tCb251czogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLmNwdVJhdGlvID49IHRoaXMuYm9udXNlc1trZXldO1xuXG4gIH0sXG5cbiAgZXhwbG9zaW9uOiBmdW5jdGlvbih4LCB5LCBjb3VudCwgY29sb3IpIHtcblxuICAgIGlmICghdGhpcy5wYXJ0aWNsZXNQb29sKSB7XG5cbiAgICAgIHRoaXMucGFydGljbGVzUG9vbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlID0gdGhpcy5hZGQoRU5HSU5FLlBhcnRpY2xlLCB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFydGljbGVzUG9vbC5wdXNoKHBhcnRpY2xlKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnBhcnRpY2xlSW5kZXggPSAwO1xuXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuXG4gICAgICBpZiAoKyt0aGlzLnBhcnRpY2xlSW5kZXggPj0gdGhpcy5wYXJ0aWNsZXNQb29sLmxlbmd0aCkgdGhpcy5wYXJ0aWNsZUluZGV4ID0gMDs7XG5cbiAgICAgIHZhciBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzUG9vbFt0aGlzLnBhcnRpY2xlSW5kZXhdO1xuXG4gICAgICBwYXJ0aWNsZS54ID0geDtcbiAgICAgIHBhcnRpY2xlLnkgPSB5O1xuICAgICAgcGFydGljbGUuY29sb3IgPSBjb2xvcjtcblxuICAgICAgcGFydGljbGUucmVzZXQoKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHJhbmRvbTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gdGhpcy5iZW5jaG1hcmsgPyAwLjUgOiBNYXRoLnJhbmRvbSgpO1xuXG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbihjb25zdHJ1Y3RvciwgYXJncykge1xuXG4gICAgYXJncyA9IGFyZ3MgfHwge307XG5cbiAgICBhcmdzLmdhbWUgPSB0aGlzO1xuXG4gICAgdmFyIGVudGl0eSA9IG5ldyBjb25zdHJ1Y3RvcihhcmdzKTtcblxuICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcblxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oZW50aXR5KSB7XG5cbiAgICBlbnRpdHkuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICBzY2FsZUNvbWljQnViYmxlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY29taWNTY2FsZSA9IDEuMDtcblxuICAgICRjb21pY2J1YmJsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjb21pY2J1YmJsZVwiKTtcblxuICAgIHZhciB0d2VlbiA9IGFwcC50d2Vlbih0aGlzKS50byh7XG4gICAgICBjb21pY1NjYWxlOiAwLjVcbiAgICB9KTtcblxuICAgIHR3ZWVuLm9uc3RlcCA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gICAgICAkY29taWNidWJibGUuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIGFwcC5jb21pY1NjYWxlICsgXCIsXCIgKyBhcHAuY29taWNTY2FsZSArIFwiKVwiO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLnJlbmRlcmVyLnNldFNtb290aGluZyhmYWxzZSk7XG5cbiAgICB0aGlzLnNjYWxlQ29taWNCdWJibGUoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFzZWxpbmVcIiwgYXBwLmJhc2VsaW5lKTtcblxuICAgIHRoaXMubXVzaWMgPSBhcHAubXVzaWMucGxheShcImR1c3RcIikudm9sdW1lKDAuNSkuZmFkZUluKDQpLmxvb3AoKTtcblxuICAgIHRoaXMuZ3JhZGllbnQgPSBhcHAuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCAwLCBhcHAuY2VudGVyLngsIGFwcC5jZW50ZXIueSwgYXBwLmNlbnRlci54KTtcblxuICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMCwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLjAsIFwiIzAwMFwiKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICB9LFxuXG4gIGxlYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubXVzaWMuZmFkZU91dCgyKTtcblxuICB9LFxuXG4gIGdldFNjYWxlOiBmdW5jdGlvbihlbnRpdHkpIHtcblxuICAgIHJldHVybiAxIC0gTWF0aC5taW4oMS4wLCBVdGlscy5kaXN0YW5jZShlbnRpdHksIGFwcC5jZW50ZXIpIC8gKGFwcC53aWR0aCAqIDAuNSkpICogMC43NTtcblxuICB9LFxuXG4gIHNwYXduQXN0ZXJvaWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHZhciByYWRpdXMgPSBhcHAud2lkdGggLyAyO1xuICAgIHZhciBveCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICB2YXIgb3kgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICB0aGlzLmFkZChFTkdJTkUuQXN0ZXJvaWQsIHtcbiAgICAgIHg6IGFwcC5jZW50ZXIueCArIG94LFxuICAgICAgeTogYXBwLmNlbnRlci55ICsgb3lcbiAgICB9KTtcblxuICB9LFxuXG4gIHJlc2V0VmlydHVhbFBvb2w6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy52aXJ0dWFsUG9vbCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuXG4gICAgICB0aGlzLnZpcnR1YWxQb29sLnB1c2gobmV3IEVOR0lORS5TaGlwKHtcbiAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIGFwcC53aWR0aCxcbiAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGFwcC5oZWlnaHQsXG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIHRlYW06IGkgJSAyXG4gICAgICB9KSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnNwYXduVGltZW91dCA9IDA7XG4gICAgdGhpcy5jcHVVc2FnZSA9IDA7XG4gICAgdGhpcy5jcHVCYXJQcm9ncmVzcyA9IDA7XG5cbiAgICB0aGlzLnVwZ3JhZGVzID0ge1xuXG4gICAgICBzcGVlZDogMSxcbiAgICAgIGRhbWFnZTogMSxcbiAgICAgIGxpZmU6IDFcblxuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VmlydHVhbFBvb2woKTtcblxuICAgIGRlbGV0ZSB0aGlzLnBhcnRpY2xlc1Bvb2w7XG5cbiAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgIHRoaXMud2F2ZSA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcblxuICAgIHRoaXMuZW50aXRpZXMgPSBbXTtcblxuICAgIHRoaXMucGxheWVyUGxhbmV0ID0gdGhpcy5hZGQoRU5HSU5FLlBsYW5ldCwge1xuICAgICAgeDogYXBwLmNlbnRlci54LFxuICAgICAgeTogYXBwLmNlbnRlci55LFxuICAgICAgdGVhbTogMVxuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgRU5HSU5FLkN1cnNvcih0aGlzLCAxLCB0aGlzLnBsYXllclBsYW5ldCk7XG4gICAgdGhpcy5wbGF5ZXIueCA9IGFwcC5jZW50ZXIueDtcbiAgICB0aGlzLnBsYXllci55ID0gYXBwLmNlbnRlci55O1xuXG4gICAgdGhpcy5zdGFycyA9IG5ldyBFTkdJTkUuQmFja2dyb3VuZFN0YXJzKHRoaXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblxuICAgICAgdGhpcy5zcGF3bkFzdGVyb2lkKCk7XG5cbiAgICB9XG5cbiAgICB2YXIgYnV0dG9ucyA9IFtcInNwZWVkXCIsIFwibGlmZVwiLCBcImRhbWFnZVwiXTtcblxuICAgIHRoaXMuYnV0dG9ucyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSBidXR0b25zW2ldO1xuXG4gICAgICB0aGlzLmJ1dHRvbnNba2V5XSA9IHRoaXMuYWRkKEVOR0lORS5CdXR0b24sIHtcbiAgICAgICAgY29sb3I6IGRlZnMudGVhbUNvbG9yWzFdLFxuICAgICAgICB4OiBhcHAuY2VudGVyLnggLSA4MCArIGkgKiAxMDAsXG4gICAgICAgIHk6IGFwcC5oZWlnaHQgLSAxMDAsXG4gICAgICAgIHNwcml0ZTogZGVmcy5idXR0b25zW2tleV0sXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaG92ZXJhYmxlOiBcImJ1aWxkXCIsXG4gICAgICAgIHRvb2x0aXA6IGRlZnMudG9vbHRpcHNba2V5XVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm5leHRXYXZlKCk7XG5cblxuICB9LFxuXG4gIGNwdUhpc3Rvcnk6IFtdLFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB2YXIgYmVmb3JlID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAvKiBzbG93IG1vdGlvbiAtIHdoZW4geW91IGNvbGxlY3QgZnJlZXplIHBvd2VydXAgKi9cblxuICAgIHRoaXMudGltZUZhY3RvciA9IDEuMDtcblxuICAgIGlmICh0aGlzLmZyZWV6ZUxpZmVzcGFuID4gMCkge1xuXG4gICAgICB0aGlzLmZyZWV6ZUxpZmVzcGFuIC09IGR0O1xuICAgICAgdGhpcy50aW1lRmFjdG9yID0gMC4xO1xuXG4gICAgfVxuXG4gICAgLyogdXBkYXRlIHRoZSBnYW1lIDEwIHRpbWVzIHRvIG1hZ25pdHVkZSByZXN1bHRzIGluIHByb2ZpbGVyICovXG5cbiAgICB2YXIgTUFHTklGWSA9IDEwO1xuXG4gICAgdmFyIHF1b3RhID0gMC4wO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG4gICAgICBxdW90YSArPSBlbnRpdHkucXVvdGEgfHwgMC43O1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IE1BR05JRlk7IGorKykge1xuICAgICAgICBlbnRpdHkuc3RlcChkdCAvIE1BR05JRlkpO1xuXG4gICAgICAgIGlmIChlbnRpdHkuZGVhZCkge1xuICAgICAgICAgIHRoaXMuZW50aXRpZXMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnF1b3RhID0gcXVvdGE7XG5cbiAgICB2YXIgZnJhbWVUaW1lID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gYmVmb3JlKSAvIE1BR05JRlk7XG5cbiAgICAvKiBtZWFzdXJlIG9wdGltaXphdGlvbiAqL1xuXG4gICAgLyogSXQncyB0aGUgYXZlcmFnZSBvZiAxMDAgZnJhbWUgdGltZXMgKi9cblxuICAgIC8qXG5cbiAgICAgIGJhc2VsaW5lRmFjdG9yICAgICAgLSBiYXNlbGluZSB2cyByZWZlcmVuY2Ugc2FtcGxlIHRvIGdldCBkZXZpY2UgcG93ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB0aGUgZGV2aWNlIGlzIG92ZXItcG93ZXJlZCB3ZSBhcnRpZmljaWFseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2UgZnJhbWVUaW1lIGhpZ2hlciB0byBtYWtlIGl0IG1vcmUgZmFpciBhbW9uZyB0aGUgcGxheWVyc1xuXG4gICAgICBvcHRpbWl6YXRpb25SYXRpbmcgIC0gcmVmZXJlbmNlIGZyYW1lIHRpbWUgZGl2aWRlZCBieSAoY3VycmVudCkgYXZlcmFnZSBmcmFtZSB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGljYXBlZCBieSBiYXNlbGluZUZhY3RvciAtIHRoaXMgZ2l2ZXMgYSBmYWN0b3Igb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3cgd2VsbCB1c2VyIG9wdGltaXplZCB0aGUgZ2FtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSBSRUZFUkVOQ0VfRlJBTUVfVElNRSBoaWdoZXIgdG8gZ2l2ZSBwbGF5ZXIgTU9SRSBjcHUgb3V0cHV0XG5cbiAgICAqL1xuXG5cbiAgICB0aGlzLmNwdUhpc3RvcnkucHVzaChmcmFtZVRpbWUgLyBxdW90YSk7XG5cbiAgICBpZiAodGhpcy5jcHVIaXN0b3J5Lmxlbmd0aCA+IDYwKSB0aGlzLmNwdUhpc3Rvcnkuc2hpZnQoKTtcblxuICAgIHRoaXMuYXZlcmFnZUZyYW1lVGltZSA9IHRoaXMuYXZlcmFnZSh0aGlzLmNwdUhpc3RvcnkpO1xuXG4gICAgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcgPSAoKDAuOCAvIGFwcC5iYXNlbGluZSkgLyAodGhpcy5hdmVyYWdlRnJhbWVUaW1lKSk7XG5cbiAgICB0aGlzLnBsYXllci5zdGVwKGR0KTtcblxuICAgIC8qIHVzZSBvcHRpbWl6YXRpb24gcmVzdWx0cyB0byBhZmZlY3QgdGhlIGdhbWUgKi9cblxuICAgIHRoaXMuYXBwbHlPcHRpbWl6YXRpb24oZHQpO1xuXG5cbiAgfSxcblxuICBhdmVyYWdlOiBmdW5jdGlvbihhcnJheSkge1xuXG4gICAgaWYgKCFhcnJheS5sZW5ndGgpIHJldHVybiAwO1xuXG4gICAgdmFyIHN1bSA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdW0gKz0gYXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bSAvIGFycmF5Lmxlbmd0aDtcblxuICB9LFxuXG4gIGFwcGx5T3B0aW1pemF0aW9uOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdmFyIGNwdVVzYWdlID0gMDtcblxuICAgIC8qIGNhbGN1bGF0ZSAoYXJ0aWZpY2lhbCkgY3B1VXNhZ2Ugb2Ygc2hpcHNcbiAgICAgICBpZiBjcHVVc2FnZSBpcyBncmVhdGVyIHRoYW4gb3B0aW1pemF0aW9uUmF0aW5nXG4gICAgICAgZnJlZXplIGEgc2hpcFxuICAgICovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG4gICAgICBpZiAoIWVudGl0eS50ZWFtKSBjb250aW51ZTtcbiAgICAgIGlmIChlbnRpdHkuZnJlZSkgY29udGludWU7XG5cbiAgICAgIGNwdVVzYWdlICs9IFNISVBfQ1BVX0NPU1Q7XG5cbiAgICAgIGlmIChjcHVVc2FnZSA8IHRoaXMub3B0aW1pemF0aW9uUmF0aW5nKSB7XG5cbiAgICAgICAgZW50aXR5LmZyb3plbiA9IGZhbHNlO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGVudGl0eS5mcm96ZW4gPSB0cnVlO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiB0d2VlbiBjcHVVc2FnZSBpbnN0ZWFkIG9mIHNldHRpbmcgaXQgaW5zdGFudGx5IChsZXNzIGppdHRlcmluZykgKi9cblxuICAgIHRoaXMuY3B1VXNhZ2UgPSBVdGlscy5tb3ZlVG8odGhpcy5jcHVVc2FnZSwgY3B1VXNhZ2UsIE1hdGguYWJzKHRoaXMuY3B1VXNhZ2UgLSBjcHVVc2FnZSkgKiAwLjI1ICogZHQpO1xuICAgIHRoaXMucmVhbENwdVVzYWdlID0gY3B1VXNhZ2U7XG5cbiAgICAvKiB0aGF0J3MgdGhlIHZhbHVlIDAuMCAtIDEuMCB0aGF0IGNvcmVzcG9uZHMgd2l0aCB0aGUgeWVsbG93IHBvd2VyIGJhciAqL1xuXG4gICAgdGhpcy5jcHVSYXRpbyA9IDEgLSBNYXRoLm1pbigxLjAsIHRoaXMuY3B1VXNhZ2UgLyB0aGlzLm9wdGltaXphdGlvblJhdGluZyk7XG4gICAgdGhpcy5jcHVCYXJQcm9ncmVzcyA9IFV0aWxzLm1vdmVUbyh0aGlzLmNwdUJhclByb2dyZXNzLCB0aGlzLmNwdVJhdGlvLCAwLjIgKiBkdCk7XG5cbiAgICAvKiBzcGF3biBzaGlwcyBpZiB0aGVyZSBpcyBlbm91Z2ggcG93ZXIgKi9cblxuICAgIGlmICgodGhpcy5zcGF3blRpbWVvdXQgLT0gZHQpIDw9IDApIHtcblxuICAgICAgdGhpcy5zcGF3blRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIC8vaWYgKHRoaXMuY3B1UmF0aW8gPiAwLjUpIHRoaXMucGxheWVyUGxhbmV0LnNwYXduU2hpcChcImZpZ2h0ZXJcIik7XG4gICAgICBpZiAodGhpcy5vcHRpbWl6YXRpb25SYXRpbmcgPiB0aGlzLnJlYWxDcHVVc2FnZSArIDAuMSkgdGhpcy5wbGF5ZXJQbGFuZXQuc3Bhd25TaGlwKFwiZmlnaHRlclwiKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHNoYWtlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuc2hha2VMaWZlc3BhbiA9IDAuNDtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICghdGhpcy5hdmVyYWdlRnJhbWVUaW1lKSByZXR1cm47XG5cbiAgICBhcHAuY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiIzI4MjI0NVwiO1xuICAgIGFwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIC8vIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAvL2FwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLnNoYWtlTGlmZXNwYW4gPiAwKSB7XG4gICAgICB0aGlzLnNoYWtlTGlmZXNwYW4gLT0gZHQ7XG4gICAgICB2YXIgY2hhb3MgPSBVdGlscy5yYW5kb20oLTYsIDYpO1xuICAgICAgYXBwLmN0eC50cmFuc2xhdGUoY2hhb3MsIGNoYW9zKVxuICAgIH1cblxuICAgIHRoaXMuc3RhcnMucmVuZGVyKGR0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB0aGlzLmVudGl0aWVzW2ldLnJlbmRlcigpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXIucmVuZGVyKCk7XG5cbiAgICB0aGlzLnJlbmRlclRvb2x0aXAoKTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgIGFwcC5jdHguZm9udCA9IFwiYm9sZCAxNnB4IEFyaWFsXCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFwiU0NPUkU6IFwiICsgdGhpcy5zY29yZSwgYXBwLndpZHRoIC0gMjAsIDIwKTtcblxuXG4gICAgdGhpcy5yZW5kZXJDUFVCYXIoKTtcbiAgICAvLyB0aGlzLnJlbmRlckJvbnVzZXMoKTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBhcHAuY3R4LmZvbnQgPSBcImJvbGQgNjRweCBBcmlhbFwiO1xuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmEwXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dCh0aGlzLnBsYXllci5yZXNvdXJjZXMsIGFwcC5jZW50ZXIueCAtIDE4MCwgYXBwLmhlaWdodCAtIDEzNCk7XG5cbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGFwcC5jdHguZm9udCA9IFwiYm9sZCAxNnB4IEFyaWFsXCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFxuICAgICAgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcudG9GaXhlZCgyKSArIFwiIHwgXCIgK1xuICAgICAgLy8gdGhpcy5iYXNlbGluZUZhY3Rvci50b0ZpeGVkKDIpICsgXCIgfCBcIiArXG4gICAgICB0aGlzLmVudGl0aWVzLmxlbmd0aCArICcgKyAnICtcbiAgICAgIHRoaXMucXVvdGEudG9GaXhlZCgxKSwgMTYsIDE2KTtcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH0sXG5cbiAgYmFyV2lkdGg6IDIwMCxcblxuICByZW5kZXJDUFVCYXI6IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB2YXIgd2lkdGggPSAyMDA7XG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IHRoaXMuYmFyV2lkdGggKiB0aGlzLmNwdUJhclByb2dyZXNzO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIGRlZnMuZnJvemVuU3ByaXRlWzBdLCBkZWZzLmZyb3plblNwcml0ZVsxXSwgZGVmcy5mcm96ZW5TcHJpdGVbMl0sIGRlZnMuZnJvemVuU3ByaXRlWzNdLFxuICAgICAgYXBwLmNlbnRlci54IC0gdGhpcy5iYXJXaWR0aCAvIDIgLSAzMiwgMjQsIGRlZnMuZnJvemVuU3ByaXRlWzJdLCBkZWZzLmZyb3plblNwcml0ZVszXSk7XG5cblxuICAgIGFwcC5jdHguc3Ryb2tlU3R5bGUgPSBcIiNmYTBcIjtcbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHgubGluZVdpZHRoID0gMjtcblxuICAgIGFwcC5jdHguc3Ryb2tlUmVjdChhcHAuY2VudGVyLnggLSB0aGlzLmJhcldpZHRoIC8gMiwgMTYsIHRoaXMuYmFyV2lkdGgsIDMyKVxuICAgIGFwcC5jdHguZmlsbFJlY3QoYXBwLmNlbnRlci54IC0gdGhpcy5iYXJXaWR0aCAvIDIsIDE2LCBjdXJyZW50V2lkdGgsIDMyKVxuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgYXBwLmZvbnRTaXplKDE2KTtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFwiQVZBSUxBQkxFIENQVVwiLCBhcHAuY2VudGVyLngsIDI0KTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmYTBcIjtcblxuICAgIGFwcC5jdHguZmlsbFRleHQoXCIrIFwiICsgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcudG9GaXhlZCgyKSwgYXBwLmNlbnRlci54ICsgd2lkdGggLyAyICsgMTYsIDE2KTtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjYzQwXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dChcIi0gXCIgKyB0aGlzLnJlYWxDcHVVc2FnZS50b0ZpeGVkKDIpLCBhcHAuY2VudGVyLnggKyB3aWR0aCAvIDIgKyAxNiwgMzIpO1xuXG4gIH0sXG5cblxuICByZW5kZXJCb251c2VzOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgIGFwcC5jdHgudHJhbnNsYXRlKGFwcC5jZW50ZXIueCAtIHRoaXMuYmFyV2lkdGggLyAyLCA1NCk7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBhcHAuY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cbiAgICB2YXIgaSA9IE9iamVjdC5rZXlzKHRoaXMuYm9udXNlcykubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuYm9udXNlcykge1xuXG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy5ib251c2VzW2tleV07XG5cbiAgICAgIHZhciB4ID0gdGhpcy5iYXJXaWR0aCAqIHRocmVzaG9sZDtcbiAgICAgIHZhciB5ID0gaSAqIDE2O1xuXG4gICAgICBhcHAuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5jaGVja0JvbnVzKGtleSkgPyAxLjAgOiAwLjQ7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuY3R4LmZpbGxSZWN0KHgsIDAsIDIsIHkpO1xuICAgICAgYXBwLmN0eC5maWxsUmVjdCh4LCB5LCAxNiwgMik7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuZm9udFNpemUoMTIpO1xuICAgICAgYXBwLmN0eC5maWxsVGV4dChkZWZzLmJvbnVzZXNba2V5XS50b1VwcGVyQ2FzZSgpLCB4ICsgMjAsIHkgLSA2KTtcblxuICAgICAgaS0tO1xuXG4gICAgfVxuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfSxcblxuXG4gIHJlbmRlclRvb2x0aXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHJldHVybjtcblxuICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZmlsbFN0eWxlKFwiI2ZmZlwiKS5mb250KFwiMTZweCBBcmlhbFwiKS50ZXh0V2l0aEJhY2tncm91bmQodGhpcy50b29sdGlwLCBhcHAuY2VudGVyLngsIGFwcC5oZWlnaHQgLSA2NCwgXCIjMDAwXCIsIDE2KTtcblxuICB9LFxuXG4gIHBvaW50ZXJtb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLnBsYXllci54ID0gZS54O1xuICAgIHRoaXMucGxheWVyLnkgPSBlLnk7XG5cbiAgfSxcblxuICB3cmFwOiBmdW5jdGlvbihlbnRpdHkpIHtcblxuICAgIGlmIChlbnRpdHkueCArIGVudGl0eS5yYWRpdXMgPCAwKSBlbnRpdHkueCA9IGFwcC53aWR0aCArIGVudGl0eS5yYWRpdXM7XG4gICAgaWYgKGVudGl0eS54IC0gZW50aXR5LnJhZGl1cyA+IGFwcC53aWR0aCkgZW50aXR5LnggPSAtZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgKyBlbnRpdHkucmFkaXVzIDwgMCkgZW50aXR5LnkgPSBhcHAuaGVpZ2h0ICsgZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgLSBlbnRpdHkucmFkaXVzID4gYXBwLmhlaWdodCkgZW50aXR5LnkgPSAtZW50aXR5LnJhZGl1cztcblxuICB9LFxuXG4gIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIG5leHRXYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmJlbmNobWFyaykgcmV0dXJuO1xuXG4gICAgdGhpcy53YXZlKys7XG5cbiAgICB0aGlzLnNoaXBzTGVmdCA9IDA7XG5cbiAgICB2YXIgc3RyZWFtc1Bvc2l0aW9ucyA9IFtcbiAgICAgIFswLjAsIDEuMF0sXG4gICAgICBbMC4wLCAwLjVdLFxuICAgICAgWzAuMCwgMC4wXSxcbiAgICAgIFsxLjAsIDAuMF0sXG4gICAgICBbMS4wLCAwLjVdLFxuICAgICAgWzEuMCwgMS4wXVxuICAgIF07XG5cbiAgICB2YXIgZGlmZmljdWx0eSA9IHRoaXMud2F2ZSAvIDIwO1xuXG4gICAgVXRpbHMuc2h1ZmZsZShzdHJlYW1zUG9zaXRpb25zKTtcblxuICAgIHZhciBzdHJlYW1zQ291bnQgPSBNYXRoLm1pbigzLCAxICsgZGlmZmljdWx0eSkgKyAwLjMgfCAwO1xuICAgIHZhciBzaGlwc1BlclN0cmVhbSA9IE1hdGgubWluKDE2LCA0ICsgZGlmZmljdWx0eSAqIDQpIHwgMDtcblxuICAgIHZhciBwb3NzaWJsZVNoaXBzID0gW107XG5cbiAgICBpZiAodGhpcy53YXZlID4gMCkgcG9zc2libGVTaGlwcy5wdXNoKFwiY3JlZXAxXCIpO1xuICAgIGlmICh0aGlzLndhdmUgPiAzKSBwb3NzaWJsZVNoaXBzLnB1c2goXCJjcmVlcDJcIik7XG4gICAgaWYgKHRoaXMud2F2ZSA+IDYpIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwM1wiKTtcbiAgICBpZiAodGhpcy53YXZlID4gMTApIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwNFwiKTtcblxuICAgIGlmICh0aGlzLndhdmUgJSA1ID09PSAwKSBwb3NzaWJsZVNoaXBzID0gW1wiYm9zc1wiXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyZWFtc0NvdW50OyBpKyspIHtcblxuICAgICAgdmFyIHN0cmVhbSA9IHN0cmVhbXNQb3NpdGlvbnMucG9wKCk7XG5cbiAgICAgIHZhciB4ID0gc3RyZWFtWzBdICogYXBwLndpZHRoO1xuICAgICAgdmFyIHkgPSBzdHJlYW1bMV0gKiBhcHAuaGVpZ2h0O1xuXG4gICAgICB2YXIgc2hpcCA9IFV0aWxzLnJhbmRvbShwb3NzaWJsZVNoaXBzKTtcbiAgICAgIHZhciBzaGlwRGF0YSA9IGRlZnMuc2hpcHNbc2hpcF07XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHkgLSBhcHAuY2VudGVyLnksIHggLSBhcHAuY2VudGVyLngpO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoaXBzUGVyU3RyZWFtOyBqKyspIHtcblxuICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5hZGQoRU5HSU5FLlNoaXAsIHtcbiAgICAgICAgICB0eXBlOiBzaGlwLFxuICAgICAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHRlYW06IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGlwc0xlZnQrKztcblxuICAgICAgICBpZiAoc2hpcERhdGEuYm9zcykge1xuXG4gICAgICAgICAgZW50aXR5LmhwID0gZW50aXR5Lm1heEhwID0gdGhpcy5zY29yZTtcbiAgICAgICAgICBlbnRpdHkuZGFtYWdlID0gdGhpcy5zY29yZSAvIDUwIHwgMDtcbiAgICAgICAgICBlbnRpdHkuc2NhbGUgPSAwLjUgKyB0aGlzLnNjb3JlIC8gMjAwO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXBhaXJTaGlwczogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2hpcHMgPSBVdGlscy5maWx0ZXIodGhpcy5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApICYmIGUudGVhbTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgc2hpcHNbaV0ucmVwYWlyKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBvbmVuZW15ZGVhdGg6IGZ1bmN0aW9uKHNoaXApIHtcblxuICAgIHRoaXMuc2hpcHNMZWZ0LS07XG5cbiAgICBpZiAodGhpcy5zaGlwc0xlZnQgPD0gMCkgdGhpcy5uZXh0V2F2ZSgpO1xuXG4gIH0sXG5cbiAgcG9pbnRlcmRvd246IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIGdhbWVvdmVyOiBmdW5jdGlvbigpIHtcblxuICAgIEVOR0lORS5HYW1lb3Zlci5zY29yZSA9IHRoaXMuc2NvcmU7XG5cbiAgICBhcHAuc2V0U3RhdGUoRU5HSU5FLkdhbWVvdmVyKTtcblxuXG4gIH1cblxufTsiLCJFTkdJTkUuUG93ZXJ1cCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLnNwZWVkID0gMzI7XG5cbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLmZvcmNlID0gNjQgKyBNYXRoLnJhbmRvbSgpICogMTI4O1xuXG4gIHRoaXMuZm9yY2UgKj0gMztcbiAgdGhpcy5mb3JjZURhbXBpbmcgPSB0aGlzLmZvcmNlO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMTA7XG5cbiAgdmFyIGtleXMgPSBbXCJyZXBhaXJcIiwgXCJtaXNzaWxlc1wiLCBcImZyZWV6ZVwiXTtcblxuICB2YXIgZnJlZWxhbmVyc0NvdW50ID0gVXRpbHMuZmlsdGVyKHRoaXMuZ2FtZS5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBlLmZyZWUgJiYgZSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwO1xuICB9KS5sZW5ndGg7XG5cbiAgaWYgKGZyZWVsYW5lcnNDb3VudCA8IDIpIGtleXMucHVzaChcImZyZWVsYW5jZXJcIik7XG5cbiAgdGhpcy5rZXkgPSBVdGlscy5yYW5kb20oa2V5cyk7XG4gIHRoaXMuc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMua2V5XTtcblxufTtcblxuRU5HSU5FLlBvd2VydXAucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuUG93ZXJ1cCxcblxuICBzcHJpdGU6IFsyMTYsIDE1OSwgMTQsIDE0XSxcblxuICB0eXBlOiBcInBvd2VydXBcIixcblxuICBzcHJpdGVzOiB7XG5cbiAgICBcInJlcGFpclwiOiBbMjQ1LCA4OSwgMjMsIDI1XSxcbiAgICBcImZyZWVsYW5jZXJcIjogWzI3NiwgNTEsIDMyLCAzMl0sXG4gICAgXCJmcmVlemVcIjogWzI0MiwgMTE5LCAxOSwgMjFdLFxuICAgIFwibWlzc2lsZXNcIjogWzMxMSwgMTMsIDI4LCAzMl1cblxuICB9LFxuXG4gIGNvbGxlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIFwiI2ZmZlwiKTtcblxuICAgIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiY29pblwiKTtcblxuICAgIHRoaXMuZ2FtZS5wbGF5ZXIucG9rZSgpO1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuVGV4dE91dCwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgdGV4dDogdGhpcy5rZXlcbiAgICB9KTtcblxuICAgIHN3aXRjaCAodGhpcy5rZXkpIHtcblxuICAgICAgY2FzZSBcImZyZWV6ZVwiOlxuXG4gICAgICAgIHRoaXMuZ2FtZS5mcmVlemVMaWZlc3BhbiA9IDQuMDtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1pc3NpbGVzXCI6XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLk1pc3NpbGUsIHtcbiAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgIHRlYW06IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyZXBhaXJcIjpcblxuICAgICAgICB0aGlzLmdhbWUucmVwYWlyU2hpcHMoKTtcblxuICAgICAgICBicmVhaztcblxuXG4gICAgICBjYXNlIFwiZnJlZWxhbmNlclwiOlxuXG4gICAgICAgIHZhciBzaGlwID0gdGhpcy5nYW1lLmFkZChFTkdJTkUuU2hpcCwge1xuICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgdHlwZTogXCJmcmVlbGFuY2VyXCIsXG4gICAgICAgICAgdGVhbTogMSxcbiAgICAgICAgICBmcmVlOiB0cnVlLFxuICAgICAgICAgIHBsYW5ldDogdGhpcy5nYW1lLnBsYXllclBsYW5ldFxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmZvcmNlRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDY7XG4gICAgICAgIHNoaXAuZm9yY2UgPSAyMDA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG5cbiAgICB2YXIgcGxheWVyRGlzdGFuY2UgPSBVdGlscy5kaXN0YW5jZSh0aGlzLCB0aGlzLmdhbWUucGxheWVyKTtcblxuICAgIGlmICh0aGlzLmZvcmNlKSB7XG5cbiAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcbiAgICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcblxuICAgICAgdGhpcy5mb3JjZSA9IE1hdGgubWF4KDAsIHRoaXMuZm9yY2UgLSB0aGlzLmZvcmNlRGFtcGluZyAqIGR0KTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpZmV0aW1lID4gMC41KSB7XG4gICAgICBpZiAocGxheWVyRGlzdGFuY2UgPCAzMikge1xuICAgICAgICB0aGlzLmNvbGxlY3QoKTtcbiAgICAgICAgdGhpcy5nYW1lLnBsYXllci5yZXNvdXJjZXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5saWZldGltZSA+IHRoaXMuZHVyYXRpb24pIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGxpbmVhciA9IGFwcC5saWZldGltZSAlIDAuNSAvIDAuNTtcbiAgICB2YXIgc2NhbGUgPSAwLjggKyBNYXRoLnNpbihNYXRoLlBJICogbGluZWFyKSAqIDAuNDtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuXG4gICAgYXBwLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICApO1xuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5UZXh0T3V0ID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgZm9udFNpemU6IDI0LFxuICAgIHNjYWxlWDogMCxcbiAgICBzY2FsZVk6IDEuMCxcbiAgICB0ZXh0OiBcInZvaWRcIixcbiAgICBkdXJhdGlvbjogMi4wXG4gIH0sIGFyZ3MpO1xuXG4gIHZhciB0ZXh0b3V0ID0gdGhpcztcblxuICBhcHAudHdlZW4odGhpcylcbiAgICAudG8oe1xuICAgICAgc2NhbGVYOiAxLjBcbiAgICB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSwgXCJvdXRFbGFzdGljXCIpXG4gICAgLndhaXQodGhpcy5kdXJhdGlvbiAqIDAuNSlcbiAgICAudG8oe1xuICAgICAgc2NhbGVZOiAwLjBcbiAgICB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSwgXCJvdXRDaXJjXCIpXG4gICAgLm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdGV4dG91dC5nYW1lLnJlbW92ZSh0ZXh0b3V0KTtcbiAgICB9KTtcblxuICAgIHR0dCA9IHRoaXM7XG5cbn07XG5cbkVOR0lORS5UZXh0T3V0LnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlRleHRPdXQsXG5cbiAgc3ByaXRlOiBbMjE2LCAxNTksIDE0LCAxNF0sXG5cbiAgdHlwZTogXCJ0ZXh0b3V0XCIsXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMuc2NhbGVYIHx8ICF0aGlzLnNjYWxlWSkgcmV0dXJuO1xuXG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBhcHAuZm9udFNpemUodGhpcy5mb250U2l6ZSk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgYXBwLmN0eC5zY2FsZSh0aGlzLnNjYWxlWCwgdGhpcy5zY2FsZVkpO1xuICAgIGFwcC5jdHguZmlsbFRleHQodGhpcy50ZXh0LCAwLCAwKVxuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5UcmFpbCA9IGZ1bmN0aW9uKHBhcmVudCwgYXJncykge1xuXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgY29sb3I6IFwiIzBmY1wiLFxuICAgIHBvaW50czogW10sXG4gICAgbWF4UG9pbnRzOiA1LFxuICAgIHdpZHRoOiAxMCxcbiAgICBsaWZldGltZTogMCxcbiAgICBsaWZlc3BhbjogMCxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIGludGVydmFsOiAwLjE1LFxuICAgIHN0cm9rZTogdHJ1ZVxuICB9LCBhcmdzKTtcblxufTtcblxuRU5HSU5FLlRyYWlsLnByb3RvdHlwZSA9IHtcblxuICB6SW5kZXg6IDIwMCxcblxuICBxdW90YTogMC4zLFxuXG4gIHJlYWN0aW9uOiA4LFxuXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkZWx0YTtcblxuICAgIGlmIChVdGlscy5pbnRlcnZhbChcInBvaW50XCIsIHRoaXMuaW50ZXJ2YWwsIHRoaXMpKSB7XG5cbiAgICAgIGlmICghdGhpcy5wYXVzZWQpIHRoaXMucG9pbnRzLnB1c2godGhpcy5wYXJlbnQueCwgdGhpcy5wYXJlbnQueSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMucG9pbnRzLmxlbmd0aCA+IHRoaXMubWF4UG9pbnRzICogMikgfHxcbiAgICAgICAgKHRoaXMucGF1c2VkICYmIHRoaXMucG9pbnRzLmxlbmd0aCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5wb2ludHMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5wb2ludHMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAyXSA9IHRoaXMucGFyZW50Lng7XG4gICAgdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV0gPSB0aGlzLnBhcmVudC55O1xuXG4gICAgaWYodGhpcy5saWZlc3BhbiAmJiB0aGlzLmxpZmV0aW1lID4gdGhpcy5saWZlc3Bhbikge1xuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZih0aGlzLnBvaW50cy5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgYXBwLmxheWVyLnNhdmUoKTtcbiAgICBhcHAubGF5ZXIuc3Ryb2tlU3R5bGUodGhpcy5jb2xvcik7XG4gICAgYXBwLmxheWVyLmxpbmVDYXAoXCJzcXVhcmVcIik7XG5cbiAgICAvLyBpZiAoIXRoaXMuc3Ryb2tlKSBhcHAubGF5ZXIuc3Ryb2tlU3R5bGUoXCJyZ2JhKDAsMCwwLDAuMSlcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSArPSAyKSB7XG5cbiAgICAgIHZhciByYXRpbyA9IGkgLyAoMiAqIHRoaXMubWF4UG9pbnRzKTtcbiAgICAgIHZhciBweCA9IHRoaXMucG9pbnRzW2kgLSAyXTtcbiAgICAgIHZhciBweSA9IHRoaXMucG9pbnRzW2kgLSAxXTtcbiAgICAgIHZhciBueCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgdmFyIG55ID0gdGhpcy5wb2ludHNbaSArIDFdO1xuICAgICAgYXBwLmxheWVyLmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmxheWVyLm1vdmVUbyhweCB8IDAsIHB5IHwgMCk7XG4gICAgICBhcHAubGF5ZXIubGluZVRvKG54IHwgMCwgbnkgfCAwKTtcbiAgICAgIGFwcC5sYXllci5hKHJhdGlvKS5saW5lV2lkdGgocmF0aW8gKiB0aGlzLndpZHRoKTtcbiAgICAgIGFwcC5sYXllci5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhcHAubGF5ZXIucmVzdG9yZSgpO1xuXG5cbiAgfVxuXG59OyIsIkVOR0lORS5NaXNzaWxlID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgc3BlZWQ6IDQwMFxuICB9LCBhcmdzKTtcblxuICB0aGlzLmNvbG9yID0gZGVmcy50ZWFtQ29sb3JbdGhpcy50ZWFtXTtcbiAgdGhpcy5yYWRpdXMgPSA0O1xuICB0aGlzLmRpcmVjdGlvbiA9IDA7XG5cbiAgdGhpcy5mb3JjZSA9IDQwMDtcbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2O1xuXG4gIHRoaXMudHJhaWwgPSBuZXcgRU5HSU5FLlRyYWlsKHRoaXMsIHtcbiAgICBpbnRlcnZhbDogMC4wNSxcbiAgICBtYXhQb2ludHM6IDEwLFxuICAgIGNvbG9yOiBcIiNmYTBcIlxuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgdmFyIGUgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICBpZiAoIShlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApKSBjb250aW51ZTtcblxuICAgIGlmIChlLm1pc3NpbGVUYXJnZXQpIGNvbnRpbnVlO1xuICAgIGlmIChlLnRlYW0gPT09IHRoaXMudGVhbSkgY29udGludWU7XG5cbiAgICBlLm1pc3NpbGVUYXJnZXQgPSB0aGlzO1xuICAgIHRoaXMudGFyZ2V0ID0gZTtcblxuICAgIGJyZWFrO1xuXG4gIH1cblxufTtcblxuRU5HSU5FLk1pc3NpbGUucHJvdG90eXBlID0ge1xuXG4gIHNwcml0ZTogWzE0NSwgMjUsIDYsIDM5XSxcblxuICBxdW90YTogMC41LFxuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuTWlzc2lsZSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgaWYoIXRoaXMudGFyZ2V0KSByZXR1cm4gdGhpcy5kaWUoKTtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5hdGFuMih0aGlzLnRhcmdldC55IC0gdGhpcy55LCB0aGlzLnRhcmdldC54IC0gdGhpcy54KTtcblxuICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCh0aGlzLmZvcmNlIC0gZHQgKiA0MDAsIDApO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZm9yY2VEaXJlY3Rpb24pICogdGhpcy5mb3JjZSAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcblxuXG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA8IHRoaXMucmFkaXVzICsgdGhpcy50YXJnZXQucmFkaXVzKSB7XG5cbiAgICAgIHRoaXMuaGl0KHRoaXMudGFyZ2V0KTtcblxuICAgIH1cblxuICAgIHRoaXMudHJhaWwuc3RlcChkdCk7XG5cblxuICB9LFxuXG4gIGhpdDogZnVuY3Rpb24odGFyZ2V0KSB7XG5cbiAgICB0YXJnZXQuYXBwbHlEYW1hZ2UoMTAgKyB0aGlzLmdhbWUuc2NvcmUgLyAxMCk7XG5cbiAgICB0aGlzLmRpZSgpO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy50cmFpbC5yZW5kZXIoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkdhbWVvdmVyID0ge1xuXG4gIHNjb3JlOiA3MzcsXG4gIGhpc2NvcmU6IDIwMCxcblxuICBzdGFyT2ZmOiBbMzgyLCAxNzcsIDE1LCAxNl0sXG4gIHN0YXJPbjogWzMzOSwgMTY5LCAzNywgMzddLFxuXG4gIGVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5yZW5kZXJlci5zZXRTbW9vdGhpbmcodHJ1ZSk7XG5cblxuICAgIHZhciBoaXNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaXNjb3JlXCIpIHwgMDtcblxuICAgIGlmKGhpc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgIFxuICAgICAgdGhpcy5oaXNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzY29yZVwiLCBoaXNjb3JlKTtcblxuICAgIH1cblxuICAgIHRoaXMubXVzaWMgPSBhcHAubXVzaWMucGxheShcImdhbWVvdmVyXCIpLmZhZGVJbigzKS5sb29wKCk7XG5cbiAgICB0aGlzLmN1cnJlbnRTY29yZSA9IDA7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIHRoaXMuc2NvcmVPZmZzZXQgPSAtYXBwLndpZHRoO1xuICAgIHRoaXMuYWNoaWV2ZWRTdGFycyA9IE1hdGgubWluKDEwLCAodGhpcy5zY29yZSAvIDUwMCkgKiAxMCB8IDApO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cbiAgICAgIHRoaXMuc3RhcnMucHVzaCh7XG4gICAgICAgIHg6IGkgKiA2NCxcbiAgICAgICAgeTogNjQsXG4gICAgICAgIHNjYWxlOiAwXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY2hpZXZlZFN0YXJzOyBpKyspIHtcblxuICAgICAgdmFyIHN0YXIgPSB0aGlzLnN0YXJzW2ldO1xuXG4gICAgICBhcHAudHdlZW4oc3Rhcikud2FpdChpICogMC4xKS50byh7XG4gICAgICAgIHNjYWxlOiAxLjAsXG4gICAgICAgIHk6IDY0XG4gICAgICB9LCAyLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuICAgIH1cblxuICAgIGFwcC50d2Vlbih0aGlzKS50byh7XG5cbiAgICAgIGN1cnJlbnRTY29yZTogdGhpcy5zY29yZSxcbiAgICAgIHNjb3JlT2Zmc2V0OiAwXG5cbiAgICB9LCAyLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oKSB7XG5cbiAgfSxcblxuICByZW5kZXJTdGFyczogZnVuY3Rpb24oeCwgeSkge1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblxuICAgICAgdmFyIHN0YXIgPSB0aGlzLnN0YXJzW2ldO1xuXG4gICAgICBhcHAubGF5ZXIuc2F2ZSgpO1xuXG4gICAgICBhcHAubGF5ZXIudHJhbnNsYXRlKHN0YXIueCArIHgsIHN0YXIueSArIHkpO1xuXG4gICAgICBhcHAubGF5ZXIuYWxpZ24oMC41LCAwLjUpO1xuXG4gICAgICBhcHAubGF5ZXIuZHJhd1JlZ2lvbihhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLnN0YXJPZmYsIDAsIDApO1xuXG4gICAgICBpZiAoc3Rhci5zY2FsZSA+IDApIHtcblxuICAgICAgICBhcHAubGF5ZXIucm90YXRlKGFwcC5saWZldGltZSk7XG4gICAgICAgIGFwcC5sYXllci5zY2FsZShzdGFyLnNjYWxlLCBzdGFyLnNjYWxlKTtcbiAgICAgICAgYXBwLmxheWVyLmRyYXdSZWdpb24oYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5zdGFyT24sIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBhcHAubGF5ZXIucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjMjgyMjQ1XCI7XG5cbiAgICBhcHAuY3R4LmZpbGxSZWN0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICBhcHAuY3R4LmRyYXdJbWFnZShhcHAuaW1hZ2VzLmhlbHAsIGFwcC5jZW50ZXIueCAtIGFwcC5pbWFnZXMuaGVscC53aWR0aCAqIDAuNSB8IDAsIDEwMClcblxuICAgIHRoaXMucmVuZGVyU3RhcnMoYXBwLmNlbnRlci54IC0gMzIwLCAwKTtcblxuICAgIGFwcC5mb250U2l6ZSg0OCk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGFwcC5jdHguZmlsbFRleHQoXCJTQ09SRTogXCIgKyAodGhpcy5jdXJyZW50U2NvcmUgfCAwKSwgYXBwLmNlbnRlci54ICsgdGhpcy5zY29yZU9mZnNldCwgMTgwKVxuXG4gICAgYXBwLmZvbnRTaXplKDMyKTtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZjQwXCI7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgYXBwLmN0eC5maWxsVGV4dChcIkhJLVNDT1JFOiBcIiArICh0aGlzLmhpc2NvcmUgfCAwKSwgYXBwLmNlbnRlci54IC0gdGhpcy5zY29yZU9mZnNldCwgMjIwKVxuICB9XG5cbn07IiwiLyogYXBwbGljYXRpb24gKi9cblxudmFyIGFwcCA9IHBsYXlncm91bmQoe1xuXG4gIHdpZHRoOiAxMDI0LFxuICBoZWlnaHQ6IDY0MCxcblxuICBzbW9vdGhpbmc6IHRydWUsXG5cbiAgcGF0aHM6IHtcblxuICAgIGJhc2U6IFwiaHR0cDovL21vemlsbGEuZ2l0aHViLmlvL2RldnRvb2xzLXBlcmYtZ2FtZS9cIlxuXG4gIH0sXG5cblxuICBmb250U2l6ZTogZnVuY3Rpb24oc2l6ZSkge1xuXG4gICAgcmV0dXJuIHRoaXMuY3R4LmZvbnQgPSBzaXplICsgXCJweCAnU3F1YWRhIE9uZSdcIjtcblxuICB9LFxuXG4gIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvYWRJbWFnZXMoXCJzcHJpdGVzaGVldFwiLCBcImhlbHBcIiwgXCJzcGxhc2hcIiwgXCJmbGFyZVwiKTtcbiAgICB0aGlzLmxvYWRTb3VuZChcImFjdGlvblwiKTtcblxuICAgIHRoaXMua2V5Ym9hcmQucHJldmVudERlZmF1bHQgPSBmYWxzZTtcblxuICAgIHRoaXMuc291bmQgPSB0aGlzLmF1ZGlvLmNoYW5uZWwoXCJzb3VuZFwiKS52b2x1bWUoMC41KTtcbiAgICB0aGlzLm11c2ljID0gdGhpcy5hdWRpby5jaGFubmVsKFwibXVzaWNcIikudm9sdW1lKDAuNSk7XG5cbiAgICB0aGlzLmN0eCA9IGFwcC5sYXllci5jb250ZXh0O1xuXG4gICAgdGhpcy5nYW1lID0gRU5HSU5FLkdhbWU7XG5cbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuYmFzZWxpbmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2VsaW5lXCIpIHwgMDtcblxuICAgIGlmIChmYWxzZSAmJiBhcHAuYmFzZWxpbmUpIHtcblxuICAgICAgdGhpcy5zZXRTdGF0ZShFTkdJTkUuR2FtZSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gICAgICB0aGlzLnNldFN0YXRlKEVOR0lORS5HYW1lb3Zlcik7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoRU5HSU5FLkJlbmNobWFyayk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXNpemU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zdGF0ZS5yZW5kZXIoMCk7XG5cbiAgfSxcblxuICBnZXRDb2xvcmVkSW1hZ2U6IGZ1bmN0aW9uKGtleSwgY29sb3IsIG1vZGUpIHtcblxuICAgIGlmICh0eXBlb2YgbW9kZSA9PT0gXCJ1bmRlZmluZWRcIikgbW9kZSA9IFwiaGFyZC1saWdodFwiO1xuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2VzW2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBpbWFnZSA9IGtleTtcbiAgICB9XG5cbiAgICB2YXIgc3RvcmVrZXkgPSBrZXkgKyBjb2xvcjtcblxuICAgIGlmICghaW1hZ2Vbc3RvcmVrZXldKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgbWl4ID09PSBcInVuZGVmaW5lZFwiKSBtaXggPSAxO1xuXG4gICAgICB2YXIgYmVsb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgYmVsb3dDdHggPSBiZWxvdy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgIGJlbG93LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICBiZWxvdy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG5cbiAgICAgIGJlbG93Q3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICBiZWxvd0N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1pblwiO1xuICAgICAgYmVsb3dDdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBiZWxvd0N0eC5maWxsUmVjdCgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgaW1hZ2Vbc3RvcmVrZXldID0gYmVsb3c7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2Vbc3RvcmVrZXldO1xuXG4gIH0sXG5cbiAgcm91bmRBbmdsZTogZnVuY3Rpb24oYW5nbGUpIHtcblxuICAgIHJldHVybiBVdGlscy5ncm91bmQoYW5nbGUgLSBNYXRoLlBJIC8gMTYsIE1hdGguUEkgLyA4KTtcblxuICB9LFxuXG4gIHZpc2liaWxpdHljaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGlmIChlID09PSBcImhpZGRlblwiKSB7XG5cbiAgICAgIHRoaXMuc3RvcmVkU291bmRWb2x1bWUgPSB0aGlzLnNvdW5kLnZvbHVtZSgpO1xuICAgICAgdGhpcy5zdG9yZWRNdXNpY1ZvbHVtZSA9IHRoaXMubXVzaWMudm9sdW1lKCk7XG5cbiAgICAgIHRoaXMuc291bmQudm9sdW1lKDApO1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUoMCk7XG5cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuc291bmQudm9sdW1lKHRoaXMuc3RvcmVkU291bmRWb2x1bWUpO1xuICAgICAgdGhpcy5tdXNpYy52b2x1bWUodGhpcy5zdG9yZWRNdXNpY1ZvbHVtZSk7XG5cbiAgICB9XG5cbiAgfVxuXG59KTtcblxuXG52YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwgd2luZG93LndlYmtpdFBlcmZvcm1hbmNlIHx8IERhdGU7XG5cbk1hdGguc2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbih4KSB7XG5cbiAgeCA9ICt4OyAvLyBjb252ZXJ0IHRvIGEgbnVtYmVyXG5cbiAgaWYgKHggPT09IDAgfHwgaXNOYU4oeCkpIHtcblxuICAgIHJldHVybiB4O1xuXG4gIH1cblxuICByZXR1cm4geCA+IDAgPyAxIDogLTE7XG5cbn07IiwiLyoqXG4gKiBUaGlzIGlzIGJhZCBhbmQgdW5vcHRpbWl6ZWQgY29kZSBqdXN0IGZvciB5b3UgdG8gZml4IDopXG4gKlxuICogR2V0IERldmVsb3BlciBFZGl0aW9uOiBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9maXJlZm94L2RldmVsb3Blci9cbiAqXG4gKiAxLiBPcGVuIHRoZSBgUGVyZm9ybWFuY2VgIHRvb2wgaW4gRmlyZWZveCBEZXZlbG9wZXIgRWRpdGlvblxuICogMi4gU3RhcnQgcmVjb3JkaW5nIGEgcGVyZm9ybWFuY2UgcHJvZmlsZVxuICogMy4gUGxheSB0aGUgZ2FtZVxuICogNC4gU3RvcCBwcm9maWxpbmcgYW5kIGNoZWNrIHRoZSBDYWxsIFRyZWUgb3IgRmxhbWUgQ2hhcnQgZm9yIHRoZSBtYWxlZmljZW50XG4gKi9cblxuLyoqXG4gKiBNZWFzdXJlIGRpc3RhbmNlIGJldHdlZW4gdG8gcG9pbnRzIHt4OiBOdW1iZXIsIHk6IE51bWJlcn1cbiAqIEBwYXJhbSAge09iamVjdH0gYSBQb2ludCBBXG4gKiBAcGFyYW0gIHtPYmplY3R9IGIgUG9pbnQgQlxuICogQHJldHVybiB7TnVtYmVyfSAgIERpc3RhbmNlIGluIHVuaXRzXG4gKi9cblV0aWxzLmRpc3RhbmNlID0gZnVuY3Rpb24oYSwgYikge1xuICB2YXIgZHggPSBhLnggLSBiLng7XG4gIHZhciBkeSA9IGEueSAtIGIueTtcbiAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG59O1xuXG4vKipcbiAqIEZpbmQgbmVhcmVzdCBlbnRpdHkgZnJvbSBhIGxpc3Qgb2YgZW50aXRpZXNcbiAqIEBwYXJhbSAge0VudGl0eX0gZnJvbSAgICAgRW50aXR5XG4gKiBAcGFyYW0gIHtFbnRpdHlbXX0gZW50aXRpZXMgTGlzdCBvZiBlbnRpdGllcyB0byBjb21wYXJlXG4gKiBAcmV0dXJuIHtFbnRpdHl9ICAgICAgICAgIE5lYXJlc3QgRW50aXR5XG4gKi9cblV0aWxzLm5lYXJlc3QgPSBmdW5jdGlvbihmcm9tLCBlbnRpdGllcykge1xuICB2YXIgZGlzdGFuY2VzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG8gPSBlbnRpdGllc1tpXTtcbiAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UoZnJvbSwgdG8pO1xuICAgIGRpc3RhbmNlcy5wdXNoKHtcbiAgICAgIHRhcmdldDogdG8sXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9KTtcbiAgfVxuICBpZiAoIXNvcnRlZERpc3RhbmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgc29ydGVkRGlzdGFuY2VzID0gZGlzdGFuY2VzLnNvcnQoXG4gICAgZnVuY3Rpb24gc29ydERpc3RhbmNlcyhhLCBiKSB7XG4gICAgICByZXR1cm4gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2U7XG4gICAgfVxuICApO1xuICByZXR1cm4gc29ydGVkRGlzdGFuY2VzWzBdLnRhcmdldDtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgYHRlc3RgIGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZpbHRlclxuICogQHBhcmFtICB7RnVuY3Rpb259IHRlc3QgIEZ1bmN0aW9uIHRvIHRlc3QgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggKGVsZW1lbnQpXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQSBuZXcgYXJyYXkgd2l0aCBvbmx5IHBhc3NlZCBlbGVtZW5udHNcbiAqL1xuVXRpbHMuZmlsdGVyID0gZnVuY3Rpb24oYXJyYXksIHRlc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGFycmF5LnNsaWNlKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCF0ZXN0KHJlc3VsdFtpXSkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMSk7XG4gICAgICBpLS07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgbmVhcmVzdCBzaGlwIG9mIG9wcG9zaXRlIHRlYW1cbiAqIEByZXR1cm4ge1NoaXB9IE5lYXJlc3QgZW5lbXkgc2hpcFxuICovXG5FTkdJTkUuU2hpcC5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwb29sID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVudGl0eSA9IHRoaXMuZ2FtZS5lbnRpdGllc1tpXTtcbiAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcCkpIGNvbnRpbnVlO1xuICAgIGlmIChlbnRpdHkudGVhbSAhPT0gdGhpcy50ZWFtKSBwb29sLnB1c2goZW50aXR5KTtcbiAgfVxuICAvLyBJcyBVdGlscy5uZWFyZXN0IGZhc3QgZW5vdWdoP1xuICByZXR1cm4gVXRpbHMubmVhcmVzdCh0aGlzLCBwb29sKTtcblxufTtcblxuLy8gV2UgdXBkYXRlIHRob3NlIGZvciBwb3NpdGlvbnMsIG1heWJlIHdlIGRvbid0IG5lZWQgaXQ/XG52YXIgYXhlcyA9IHtcbiAgeDogTWF0aC5jb3MsXG4gIHk6IE1hdGguc2luXG59O1xuXG4vKipcbiAqIFVwZGF0ZSBwb3NpdGlvbiBmb3IgYW4gZW50aXR5IHRoYXQgaGFzIHNwZWVkIGFuZCBkaXJlY3Rpb24uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRpcmVjdGlvbiBBbmdsZSBnaXZlbiBpbiByYWRpYW5zXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlICAgICBEaXN0YW5jZSB0byBtb3ZlXG4gKi9cblV0aWxzLm1vdmVJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgdmFsdWUpIHtcbiAgdmFsdWUgLz0gMTAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgZm9yICh2YXIgYXhpcyBpbiBheGVzKSB7XG4gICAgICB0aGlzW2F4aXNdICs9IGF4ZXNbYXhpc10odGhpcy5kaXJlY3Rpb24pICogdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKlxuICogVXBkYXRlIHNoaXAgcG9zaXRpb24gd2l0aCBjdXJyZW50IGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSAge051bWJlcn0gZHQgVGltZSBkZWx0YSBmb3IgY3VycmVudCBmcmFtZSBpbiBzZWNvbmRzXG4gKi9cbkVOR0lORS5TaGlwLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oZHQpIHtcbiAgaWYgKCF0aGlzLmZyb3plbikge1xuICAgIFV0aWxzLm1vdmVJbkRpcmVjdGlvbi5hcHBseSh0aGlzLCBbdGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkdF0pO1xuICB9XG5cbiAgaWYgKHRoaXMuZm9yY2UgPiAwKSB7XG4gICAgdGhpcy5mb3JjZSAtPSAyMDAgKiBkdDtcbiAgICBVdGlscy5tb3ZlSW5EaXJlY3Rpb24uYXBwbHkodGhpcywgW3RoaXMuZm9yY2VEaXJlY3Rpb24sIHRoaXMuZm9yY2UgKiBkdF0pO1xuICB9XG59O1xuXG4vKipcbiAqIEZyYW1lIHN0ZXAgZm9yIGEgcGFydGljbGVcbiAqIEBwYXJhbSAge051bWJlcn0gZHQgVGltZSBkZWx0YSBmb3IgY3VycmVudCBmcmFtZSBpbiBzZWNvbmRzXG4gKi9cbkVOR0lORS5QYXJ0aWNsZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKGR0KSB7XG4gIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG4gIC8vIFVwZGF0ZSBwb3NpdGlvblxuICBmb3IgKHZhciBheGlzIGluIGF4ZXMpIHtcbiAgICB0aGlzW2F4aXNdICs9IGF4ZXNbYXhpc10odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICB9XG4gIHRoaXMuc3BlZWQgPSBNYXRoLm1heCgwLCB0aGlzLnNwZWVkIC0gdGhpcy5kYW1waW5nICogZHQpO1xuXG4gIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxpZmV0aW1lIC8gdGhpcy5kdXJhdGlvbiwgMS4wKTtcbiAgLy8gUHV0IHBhcnRpY2xlIG9mZnNjcmVlbiBmb3IgcG9vbGluZyBhbmQgdG8ga2VlcCByZW5kZXIgdGltZSBjb25zdGFudFxuICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxLjApIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH1cbiAgLy8gVXBkYXRlIGluZGV4IGZvciBjdXJyZW50IHNwcml0ZSB0byByZW5kZXJcbiAgdGhpcy5zcHJpdGVJbmRleCA9IE1hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAqIHRoaXMuc3ByaXRlcy5sZW5ndGgpO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9