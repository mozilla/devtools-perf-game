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

  this.spriteIndex = Utils.random(0, 2);

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
document.addEventListener("DOMContentLoaded", function(event) {

  app = playground({

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
 * Find nearest entity from a list of entities
 * @param  {Entity} from     Entity
 * @param  {Entity[]} entities List of entities to compare
 * @return {Entity}          Nearest Entity
 */
Utils.nearest = function(from, entities) {
  for (var oops = 0; oops < 100; oops++) {
    Math.sqrt(oops); // Sorry!
  }

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
  if (!distances.length) {
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
  var result = array.slice(); // Clone array
  for (var i = 0; i < result.length; i++) {
    if (!test(result[i])) {
      result.splice(i, 1); // Remove element
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGEuanMiLCJVdGlscy5qcyIsIlBsYXlncm91bmQuanMiLCJQbGF5Z3JvdW5kLlNjYW5saW5lcy5qcyIsIlBsYXlncm91bmQuU291bmRPbkRlbWFuZC5qcyIsIkVuZ2luZS5qcyIsIkJlbmNobWFyay5qcyIsIkJhY2tncm91bmRTdGFycy5qcyIsIkNpcmNsZUV4cGxvc2lvbi5qcyIsIlNoaXAuanMiLCJCdWxsZXQuanMiLCJBc3Rlcm9pZC5qcyIsIkN1cnNvci5qcyIsIlJlc291cmNlLmpzIiwiQnV0dG9uLmpzIiwiUGFydGljbGUuanMiLCJQbGFuZXQuanMiLCJHYW1lLmpzIiwiUG93ZXJ1cC5qcyIsIlRleHRPdXQuanMiLCJUcmFpbC5qcyIsIk1pc3NpbGUuanMiLCJHYW1lb3Zlci5qcyIsIk1haW4uanMiLCJib3R0bGVuZWNrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3J2QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdnBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZzID0ge1xuXG4gIHRlYW1Db2xvcjogW1wiI2ZmNDQ0NFwiLCBcIiMwMGFhZmZcIl0sXG5cbiAgZnJvemVuU3ByaXRlOiBbMTkzLCA4NiwgMTEsIDE5XSxcblxuICBidXR0b25zOiB7XG4gICAgXCJmaWdodGVyXCI6IFs0LCAzNDUsIDY0LCA2NF0sXG4gICAgXCJzcGVlZFwiOiBbMTMyLCAzNDUsIDY0LCA2NF0sXG4gICAgXCJsaWZlXCI6IFs2OCwgMzQ1LCA2NCwgNjRdLFxuICAgIFwiZGFtYWdlXCI6IFsxOTYsIDM0NSwgNjQsIDY0XVxuICB9LFxuXG4gIHNoaXBzOiB7XG5cbiAgICBcImZpZ2h0ZXJcIjoge1xuXG4gICAgICBwcmVmZXJlbmNlOiBbXCJzbWFsbFwiXSxcbiAgICAgIGNvb2xkb3duOiAwLjUsXG4gICAgICBkYW1hZ2U6IDEsXG4gICAgICBocDogMTAsXG4gICAgICBzcHJpdGU6IFs0MDcsIDE4LCAzMiwgMzJdLFxuICAgICAgcHJpY2U6IDEsXG4gICAgICBzcGVlZDogODBcblxuICAgIH0sXG5cbiAgICBcImZyZWVsYW5jZXJcIjoge1xuXG4gICAgICBjb29sZG93bjogMC41LFxuICAgICAgZGFtYWdlOiAxLFxuICAgICAgaHA6IDEwLFxuICAgICAgc3ByaXRlOiBbMzY3LCA1OSwgMzEsIDMyXSxcbiAgICAgIHNwZWVkOiA4MFxuICAgICAgXG4gICAgfSxcblxuXG4gICAgXCJjcmVlcDFcIjoge1xuXG4gICAgICBwcmVmZXJlbmNlOiBbXCJiaWdcIl0sXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiA0LFxuICAgICAgc3ByaXRlOiBbNDQ0LCAyMywgMjIsIDIxXSxcbiAgICAgIHByaWNlOiA1LFxuICAgICAgc3BlZWQ6IDYwXG5cbiAgICB9LFxuXG4gICAgXCJjcmVlcDJcIjoge1xuXG4gICAgICBwcmVmZXJlbmNlOiBbXCJiaWdcIl0sXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICBjb29sZG93bjogMixcbiAgICAgIGhwOiAxMCxcbiAgICAgIHNwcml0ZTogWzQ3MSwgMjMsIDMyLCAyM10sXG4gICAgICBwcmljZTogNSxcbiAgICAgIHNwZWVkOiA4MFxuXG4gICAgfSxcblxuICAgIFwiY3JlZXAzXCI6IHtcblxuICAgICAgcHJlZmVyZW5jZTogW1wiYmlnXCJdLFxuICAgICAgZGFtYWdlOiA0LFxuICAgICAgY29vbGRvd246IDIsXG4gICAgICBocDogMzAsXG4gICAgICBzcHJpdGU6IFs1MDMsIDE5LCAzMiwgMjldLFxuICAgICAgcHJpY2U6IDUsXG4gICAgICBzcGVlZDogNTBcblxuICAgIH0sXG5cbiAgICBcImNyZWVwNFwiOiB7XG5cbiAgICAgIHByZWZlcmVuY2U6IFtcImJpZ1wiXSxcbiAgICAgIGRhbWFnZTogNixcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgaHA6IDUwLFxuICAgICAgc3ByaXRlOiBbNTM1LCAxOCwgMzIsIDMyXSxcbiAgICAgIHByaWNlOiA1LFxuICAgICAgc3BlZWQ6IDUwXG5cbiAgICB9LFxuXG4gICAgXCJib3NzXCI6IHtcblxuICAgICAgZGFtYWdlOiAxMCxcbiAgICAgIGNvb2xkb3duOiAyLFxuICAgICAgaHA6IDUwMCxcbiAgICAgIHNwcml0ZTogWzQ1NiwgNTMsIDY0LCA2NF0sXG4gICAgICBzcGVlZDogMzIsXG4gICAgICBib3NzOiB0cnVlXG5cbiAgICB9XG5cbiAgfSxcblxuICB0b29sdGlwczoge1xuXG4gICAgXCJmaWdodGVyXCI6IFwiYnVpbGQgYSBmaWdodGVyXCIsXG4gICAgXCJzcGVlZFwiOiBcInVwZ3JhZGUgZmlnaHRlcnMgc3BlZWRcIixcbiAgICBcImxpZmVcIjogXCJ1cGdyYWRlIGZpZ2h0ZXJzIGxpZmVcIixcbiAgICBcImRhbWFnZVwiOiBcInVwZ3JhZGUgZmlnaHRlcnMgZGFtYWdlXCJcblxuICB9LFxuXG4gIGJvbnVzZXM6IHtcbiAgICBzaGllbGQ6IFwiYXN0ZXJvaWRzIHNoaWVsZFwiLFxuICAgIGxhc2VyOiBcImN1cnNvciBsYXNlclwiLFxuICAgIG1hZ25ldDogXCJjb2luIG1hZ25ldFwiXG4gIH1cblxufTsiLCJ2YXIgVXRpbHMgPSB7XG5cbiAgZXh0ZW5kOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yICh2YXIgaiBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgICAgYXJndW1lbnRzWzBdW2pdID0gYXJndW1lbnRzW2ldW2pdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gIH0sXG5cbiAgZGlzdGFuY2U6IGZ1bmN0aW9uKGEsIGIpIHtcblxuICAgIHZhciBkeCA9IGEueCAtIGIueDtcbiAgICB2YXIgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuICB9LFxuXG4gIG5lYXJlc3Q6IGZ1bmN0aW9uKGZyb20sIGVudGl0aWVzKSB7XG5cbiAgICB2YXIgbWluID0gLTE7XG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0byA9IGVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKGZyb20sIHRvKTtcblxuICAgICAgaWYgKGRpc3RhbmNlIDwgbWluIHx8IG1pbiA8IDApIHtcbiAgICAgICAgbWluID0gZGlzdGFuY2U7XG4gICAgICAgIHJlc3VsdCA9IHRvO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBjaXJjV3JhcDogZnVuY3Rpb24odmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy53cmFwKHZhbCwgMCwgTWF0aC5QSSAqIDIpO1xuXG4gIH0sXG5cbiAgd3JhcDogZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICBpZiAodmFsdWUgPCBtaW4pIHJldHVybiBtYXggKyAodmFsdWUgJSBtYXgpO1xuICAgIGlmICh2YWx1ZSA+PSBtYXgpIHJldHVybiB2YWx1ZSAlIG1heDtcbiAgICByZXR1cm4gdmFsdWU7XG5cbiAgfSxcblxuICB3cmFwVG86IGZ1bmN0aW9uKHZhbHVlLCB0YXJnZXQsIG1heCwgc3RlcCkge1xuXG4gICAgaWYgKHZhbHVlID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXQ7XG5cbiAgICB2YXIgcmVzdWx0ID0gdmFsdWU7XG5cbiAgICB2YXIgZCA9IHRoaXMud3JhcHBlZERpc3RhbmNlKHZhbHVlLCB0YXJnZXQsIG1heCk7XG5cbiAgICBpZiAoTWF0aC5hYnMoZCkgPCBzdGVwKSByZXR1cm4gdGFyZ2V0O1xuXG4gICAgcmVzdWx0ICs9IChkIDwgMCA/IC0xIDogMSkgKiBzdGVwO1xuXG4gICAgaWYgKHJlc3VsdCA+IG1heCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0IC0gbWF4O1xuICAgIH0gZWxzZSBpZiAocmVzdWx0IDwgMCkge1xuICAgICAgcmVzdWx0ID0gbWF4ICsgcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfSxcblxuICBjaXJjV3JhcFRvOiBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBzdGVwKSB7XG5cbiAgICByZXR1cm4gdGhpcy53cmFwVG8odmFsdWUsIHRhcmdldCwgTWF0aC5QSSAqIDIsIHN0ZXApO1xuXG4gIH0sXG5cbiAgY2lyY0Rpc3RhbmNlOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICByZXR1cm4gdGhpcy53cmFwcGVkRGlzdGFuY2UoYSwgYiwgTWF0aC5QSSAqIDIpO1xuXG4gIH0sXG5cbiAgd3JhcHBlZERpc3RhbmNlOiBmdW5jdGlvbihhLCBiLCBtYXgpIHtcblxuICAgIGlmIChhID09PSBiKSByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChhIDwgYikge1xuICAgICAgdmFyIGwgPSAtYSAtIG1heCArIGI7XG4gICAgICB2YXIgciA9IGIgLSBhO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbCA9IGIgLSBhO1xuICAgICAgdmFyIHIgPSBtYXggLSBhICsgYjtcbiAgICB9XG5cbiAgICBpZiAoTWF0aC5hYnMobCkgPiBNYXRoLmFicyhyKSkgcmV0dXJuIHI7XG4gICAgZWxzZSByZXR1cm4gbDtcblxuICB9LFxuXG4gIHJhbmRvbTogZnVuY3Rpb24oYSwgYikge1xuXG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKTtcblxuICAgIH0gZWxzZSBpZiAoYiAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgIHJldHVybiBNYXRoLmZsb29yKGEgKyBNYXRoLnJhbmRvbSgpICogTWF0aC5hYnMoYiAtIGEgKyAxKSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAoYSBpbnN0YW5jZW9mIEFycmF5KSByZXR1cm4gYVsoYS5sZW5ndGggKyAxKSAqIE1hdGgucmFuZG9tKCkgLSAxIHwgMF07XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFbdGhpcy5yYW5kb20oT2JqZWN0LmtleXMoYSkpXTtcbiAgICAgIH1cblxuICAgIH1cblxuICB9LFxuXG4gIHNpbmNvczogZnVuY3Rpb24oYW5nbGUsIHJhZGl1cykge1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJhZGl1cyA9IGFuZ2xlO1xuICAgICAgYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogNi4yODtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgeTogTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzXG4gICAgfTtcbiAgfSxcblxuICBncm91bmQ6IGZ1bmN0aW9uKG51bSwgdGhyZXNob2xkKSB7XG5cbiAgICByZXR1cm4gKG51bSAvIHRocmVzaG9sZCB8IDApICogdGhyZXNob2xkO1xuXG4gIH0sXG5cbiAgc2h1ZmZsZTogZnVuY3Rpb24obykge1xuICAgIGZvciAodmFyIGosIHgsIGkgPSBvLmxlbmd0aDsgaTsgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGkpLCB4ID0gb1stLWldLCBvW2ldID0gb1tqXSwgb1tqXSA9IHgpO1xuICAgIHJldHVybiBvO1xuICB9LFxuXG4gIHNpZ246IGZ1bmN0aW9uKHZhbHVlKSB7XG5cbiAgICByZXR1cm4gdmFsdWUgLyBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgfSxcblxuICBtb3ZlVG86IGZ1bmN0aW9uKHZhbHVlLCB0YXJnZXQsIHN0ZXApIHtcblxuICAgIGlmICh2YWx1ZSA8IHRhcmdldCkge1xuICAgICAgdmFsdWUgKz0gc3RlcDtcbiAgICAgIGlmICh2YWx1ZSA+IHRhcmdldCkgdmFsdWUgPSB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlID4gdGFyZ2V0KSB7XG4gICAgICB2YWx1ZSAtPSBzdGVwO1xuICAgICAgaWYgKHZhbHVlIDwgdGFyZ2V0KSB2YWx1ZSA9IHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG5cbiAgfSxcblxuICBpbnRlcnZhbDogZnVuY3Rpb24oa2V5LCBpbnRlcnZhbCwgb2JqZWN0KSB7XG5cbiAgICBpZiAoIW9iamVjdC50aHJvdHRsZXMpIG9iamVjdC50aHJvdHRsZXMgPSB7fTtcbiAgICBpZiAoIW9iamVjdC50aHJvdHRsZXNba2V5XSkgb2JqZWN0LnRocm90dGxlc1trZXldID0gb2JqZWN0LmxpZmV0aW1lIC0gaW50ZXJ2YWw7XG5cbiAgICBpZiAob2JqZWN0LmxpZmV0aW1lIC0gb2JqZWN0LnRocm90dGxlc1trZXldID49IGludGVydmFsKSB7XG4gICAgICBvYmplY3QudGhyb3R0bGVzW2tleV0gPSBvYmplY3QubGlmZXRpbWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuXG4gIH0sXG5cbiAgbW92ZUluRGlyZWN0aW9uOiBmdW5jdGlvbihkaXJlY3Rpb24sIHZhbHVlKSB7XG5cbiAgICB0aGlzLnggKz0gTWF0aC5jb3MoZGlyZWN0aW9uKSAqIHZhbHVlO1xuICAgIHRoaXMueSArPSBNYXRoLnNpbihkaXJlY3Rpb24pICogdmFsdWU7XG5cbiAgfSxcblxuICBvc2M6IGZ1bmN0aW9uKHRpbWUsIHBlcmlvZCkge1xuXG4gICAgcmV0dXJuIE1hdGguc2luKE1hdGguUEkgKiAodGltZSAlIHBlcmlvZCAvIHBlcmlvZCkpO1xuXG4gIH0sXG5cbiAgZmlsdGVyOiBmdW5jdGlvbihhcnJheSwgdGVzdCkge1xuXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlc3QoYXJyYXlbaV0pKSByZXN1bHQucHVzaChhcnJheVtpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICB9XG5cblxuXG59OyIsIi8qIGZpbGU6IGxpY2Vuc2UudHh0ICovXG5cbi8qXG5cbiAgUGxheWdyb3VuZEpTIHI0XG5cbiAgaHR0cDovL3BsYXlncm91bmRqcy5jb21cblxuICAoYykgMjAxMi0yMDE1IGh0dHA6Ly9yZXpvbmVyLm5ldFxuXG4gIFBsYXlncm91bmQgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbiAgbGF0ZXN0IG1ham9yIGNoYW5nZXM6XG5cbiAgcjRcblxuICArIHR3ZWVucyB3aXRoIGV2ZW50c1xuICArIGNvbnRleHQgYXJndW1lbnQgZm9yIGV2ZW50c1xuXG4gIHIzXG5cbiAgKyBwb2ludGVyID0gbW91c2UgKyB0b3VjaFxuXG4qL1xuXG5cbi8qIGZpbGU6IHNyYy9saWIvV2hhbW15LmpzICovXG5cbi8qIHdoYW1teSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRpbWF0dGVyMTUvd2hhbW15ICovXG5cbndpbmRvdy5XaGFtbXkgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gaChhLCBiKSB7XG4gICAgZm9yICh2YXIgYyA9IHIoYSksIGMgPSBbe1xuICAgICAgICBpZDogNDQwNzg2ODUxLFxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgIGRhdGE6IDEsXG4gICAgICAgICAgaWQ6IDE3MDMwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgIGlkOiAxNzE0M1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogNCxcbiAgICAgICAgICBpZDogMTcxMzhcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRhdGE6IDgsXG4gICAgICAgICAgaWQ6IDE3MTM5XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiBcIndlYm1cIixcbiAgICAgICAgICBpZDogMTcwMjZcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRhdGE6IDIsXG4gICAgICAgICAgaWQ6IDE3MDMxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiAyLFxuICAgICAgICAgIGlkOiAxNzAyOVxuICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBpZDogNDA4MTI1NTQzLFxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgIGlkOiAzNTcxNDkwMzAsXG4gICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGRhdGE6IDFFNixcbiAgICAgICAgICAgIGlkOiAyODA3NzI5XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGF0YTogXCJ3aGFtbXlcIixcbiAgICAgICAgICAgIGlkOiAxOTg0MFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGRhdGE6IFwid2hhbW15XCIsXG4gICAgICAgICAgICBpZDogMjIzMzdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBkYXRhOiBzKGMuZHVyYXRpb24pLFxuICAgICAgICAgICAgaWQ6IDE3NTQ1XG4gICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGlkOiAzNzQ2NDg0MjcsXG4gICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGlkOiAxNzQsXG4gICAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgICAgICBpZDogMjE1XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRhdGE6IDEsXG4gICAgICAgICAgICAgIGlkOiAyNTU0MVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiAwLFxuICAgICAgICAgICAgICBpZDogMTU2XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRhdGE6IFwidW5kXCIsXG4gICAgICAgICAgICAgIGlkOiAyMjc0NzE2XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGRhdGE6IFwiVl9WUDhcIixcbiAgICAgICAgICAgICAgaWQ6IDEzNFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiBcIlZQOFwiLFxuICAgICAgICAgICAgICBpZDogMjQ1OTI3MlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBkYXRhOiAxLFxuICAgICAgICAgICAgICBpZDogMTMxXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIGlkOiAyMjQsXG4gICAgICAgICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICAgICAgZGF0YTogYy53aWR0aCxcbiAgICAgICAgICAgICAgICBpZDogMTc2XG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBjLmhlaWdodCxcbiAgICAgICAgICAgICAgICBpZDogMTg2XG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgICB9XSwgZSA9IDAsIGQgPSAwOyBlIDwgYS5sZW5ndGg7KSB7XG4gICAgICB2YXIgZyA9IFtdLFxuICAgICAgICBmID0gMDtcbiAgICAgIGRvIGcucHVzaChhW2VdKSwgZiArPSBhW2VdLmR1cmF0aW9uLCBlKys7IHdoaWxlIChlIDwgYS5sZW5ndGggJiYgM0U0ID4gZik7XG4gICAgICB2YXIgaCA9IDAsXG4gICAgICAgIGcgPSB7XG4gICAgICAgICAgaWQ6IDUyNDUzMTMxNyxcbiAgICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgZGF0YTogZCxcbiAgICAgICAgICAgIGlkOiAyMzFcbiAgICAgICAgICB9XS5jb25jYXQoZy5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgdmFyIGIgPSB0KHtcbiAgICAgICAgICAgICAgZGlzY2FyZGFibGU6IDAsXG4gICAgICAgICAgICAgIGZyYW1lOiBhLmRhdGEuc2xpY2UoNCksXG4gICAgICAgICAgICAgIGludmlzaWJsZTogMCxcbiAgICAgICAgICAgICAga2V5ZnJhbWU6IDEsXG4gICAgICAgICAgICAgIGxhY2luZzogMCxcbiAgICAgICAgICAgICAgdHJhY2tOdW06IDEsXG4gICAgICAgICAgICAgIHRpbWVjb2RlOiBNYXRoLnJvdW5kKGgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGggKz0gYS5kdXJhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGE6IGIsXG4gICAgICAgICAgICAgIGlkOiAxNjNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfTtcbiAgICAgIGNbMV0uZGF0YS5wdXNoKGcpO1xuICAgICAgZCArPSBmXG4gICAgfVxuICAgIHJldHVybiBtKGMsIGIpXG4gIH1cblxuICBmdW5jdGlvbiByKGEpIHtcbiAgICBmb3IgKHZhciBiID0gYVswXS53aWR0aCwgYyA9IGFbMF0uaGVpZ2h0LCBlID0gYVswXS5kdXJhdGlvbixcbiAgICAgICAgZCA9IDE7IGQgPCBhLmxlbmd0aDsgZCsrKSB7XG4gICAgICBpZiAoYVtkXS53aWR0aCAhPSBiKSB0aHJvdyBcIkZyYW1lIFwiICsgKGQgKyAxKSArIFwiIGhhcyBhIGRpZmZlcmVudCB3aWR0aFwiO1xuICAgICAgaWYgKGFbZF0uaGVpZ2h0ICE9IGMpIHRocm93IFwiRnJhbWUgXCIgKyAoZCArIDEpICsgXCIgaGFzIGEgZGlmZmVyZW50IGhlaWdodFwiO1xuICAgICAgaWYgKDAgPiBhW2RdLmR1cmF0aW9uIHx8IDMyNzY3IDwgYVtkXS5kdXJhdGlvbikgdGhyb3cgXCJGcmFtZSBcIiArIChkICsgMSkgKyBcIiBoYXMgYSB3ZWlyZCBkdXJhdGlvbiAobXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDMyNzY3KVwiO1xuICAgICAgZSArPSBhW2RdLmR1cmF0aW9uXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBkdXJhdGlvbjogZSxcbiAgICAgIHdpZHRoOiBiLFxuICAgICAgaGVpZ2h0OiBjXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdShhKSB7XG4gICAgZm9yICh2YXIgYiA9IFtdOyAwIDwgYTspIGIucHVzaChhICYgMjU1KSwgYSA+Pj0gODtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYi5yZXZlcnNlKCkpXG4gIH1cblxuICBmdW5jdGlvbiBuKGEpIHtcbiAgICB2YXIgYiA9IFtdO1xuICAgIGEgPSAoYS5sZW5ndGggJSA4ID8gQXJyYXkoOSAtIGEubGVuZ3RoICUgOCkuam9pbihcIjBcIikgOiBcIlwiKSArIGE7XG4gICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhLmxlbmd0aDsgYyArPSA4KSBiLnB1c2gocGFyc2VJbnQoYS5zdWJzdHIoYyxcbiAgICAgIDgpLCAyKSk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGIpXG4gIH1cblxuICBmdW5jdGlvbiBtKGEsIGIpIHtcbiAgICBmb3IgKHZhciBjID0gW10sIGUgPSAwOyBlIDwgYS5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIGQgPSBhW2VdLmRhdGE7XG4gICAgICBcIm9iamVjdFwiID09IHR5cGVvZiBkICYmIChkID0gbShkLCBiKSk7XG4gICAgICBcIm51bWJlclwiID09IHR5cGVvZiBkICYmIChkID0gbihkLnRvU3RyaW5nKDIpKSk7XG4gICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgZCkge1xuICAgICAgICBmb3IgKHZhciBnID0gbmV3IFVpbnQ4QXJyYXkoZC5sZW5ndGgpLCBmID0gMDsgZiA8IGQubGVuZ3RoOyBmKyspIGdbZl0gPSBkLmNoYXJDb2RlQXQoZik7XG4gICAgICAgIGQgPSBnXG4gICAgICB9XG4gICAgICBmID0gZC5zaXplIHx8IGQuYnl0ZUxlbmd0aCB8fCBkLmxlbmd0aDtcbiAgICAgIGcgPSBNYXRoLmNlaWwoTWF0aC5jZWlsKE1hdGgubG9nKGYpIC8gTWF0aC5sb2coMikpIC8gOCk7XG4gICAgICBmID0gZi50b1N0cmluZygyKTtcbiAgICAgIGYgPSBBcnJheSg3ICogZyArIDggLSBmLmxlbmd0aCkuam9pbihcIjBcIikgKyBmO1xuICAgICAgZyA9IEFycmF5KGcpLmpvaW4oXCIwXCIpICsgXCIxXCIgKyBmO1xuICAgICAgYy5wdXNoKHUoYVtlXS5pZCkpO1xuICAgICAgYy5wdXNoKG4oZykpO1xuICAgICAgYy5wdXNoKGQpXG4gICAgfVxuICAgIHJldHVybiBiID8gKGMgPSBwKGMpLCBuZXcgVWludDhBcnJheShjKSkgOlxuICAgICAgbmV3IEJsb2IoYywge1xuICAgICAgICB0eXBlOiBcInZpZGVvL3dlYm1cIlxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHAoYSwgYikge1xuICAgIG51bGwgPT0gYiAmJiAoYiA9IFtdKTtcbiAgICBmb3IgKHZhciBjID0gMDsgYyA8IGEubGVuZ3RoOyBjKyspIFwib2JqZWN0XCIgPT0gdHlwZW9mIGFbY10gPyBwKGFbY10sIGIpIDogYi5wdXNoKGFbY10pO1xuICAgIHJldHVybiBiXG4gIH1cblxuICBmdW5jdGlvbiB0KGEpIHtcbiAgICB2YXIgYiA9IDA7XG4gICAgYS5rZXlmcmFtZSAmJiAoYiB8PSAxMjgpO1xuICAgIGEuaW52aXNpYmxlICYmIChiIHw9IDgpO1xuICAgIGEubGFjaW5nICYmIChiIHw9IGEubGFjaW5nIDw8IDEpO1xuICAgIGEuZGlzY2FyZGFibGUgJiYgKGIgfD0gMSk7XG4gICAgaWYgKDEyNyA8IGEudHJhY2tOdW0pIHRocm93IFwiVHJhY2tOdW1iZXIgPiAxMjcgbm90IHN1cHBvcnRlZFwiO1xuICAgIHJldHVybiBbYS50cmFja051bSB8IDEyOCwgYS50aW1lY29kZSA+PiA4LCBhLnRpbWVjb2RlICYgMjU1LCBiXS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYSlcbiAgICB9KS5qb2luKFwiXCIpICsgYS5mcmFtZVxuICB9XG5cbiAgZnVuY3Rpb24gcShhKSB7XG4gICAgZm9yICh2YXIgYiA9IGEuUklGRlswXS5XRUJQWzBdLCBjID0gYi5pbmRleE9mKFwiXFx1MDA5ZFxcdTAwMDEqXCIpLFxuICAgICAgICBlID0gMCwgZCA9IFtdOyA0ID4gZTsgZSsrKSBkW2VdID0gYi5jaGFyQ29kZUF0KGMgKyAzICsgZSk7XG4gICAgZSA9IGRbMV0gPDwgOCB8IGRbMF07XG4gICAgYyA9IGUgJiAxNjM4MztcbiAgICBlID0gZFszXSA8PCA4IHwgZFsyXTtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGMsXG4gICAgICBoZWlnaHQ6IGUgJiAxNjM4MyxcbiAgICAgIGRhdGE6IGIsXG4gICAgICByaWZmOiBhXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gayhhKSB7XG4gICAgZm9yICh2YXIgYiA9IDAsIGMgPSB7fTsgYiA8IGEubGVuZ3RoOykge1xuICAgICAgdmFyIGUgPSBhLnN1YnN0cihiLCA0KSxcbiAgICAgICAgZCA9IHBhcnNlSW50KGEuc3Vic3RyKGIgKyA0LCA0KS5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24oYSkge1xuICAgICAgICAgIGEgPSBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMik7XG4gICAgICAgICAgcmV0dXJuIEFycmF5KDggLSBhLmxlbmd0aCArIDEpLmpvaW4oXCIwXCIpICsgYVxuICAgICAgICB9KS5qb2luKFwiXCIpLCAyKSxcbiAgICAgICAgZyA9IGEuc3Vic3RyKGIgKyA0ICsgNCwgZCksXG4gICAgICAgIGIgPSBiICsgKDggKyBkKTtcbiAgICAgIGNbZV0gPSBjW2VdIHx8IFtdO1xuICAgICAgXCJSSUZGXCIgPT0gZSB8fCBcIkxJU1RcIiA9PSBlID8gY1tlXS5wdXNoKGsoZykpIDogY1tlXS5wdXNoKGcpXG4gICAgfVxuICAgIHJldHVybiBjXG4gIH1cblxuICBmdW5jdGlvbiBzKGEpIHtcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbChuZXcgVWludDhBcnJheSgobmV3IEZsb2F0NjRBcnJheShbYV0pKS5idWZmZXIpLFxuICAgICAgMCkubWFwKGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGEpXG4gICAgfSkucmV2ZXJzZSgpLmpvaW4oXCJcIilcbiAgfVxuXG4gIGZ1bmN0aW9uIGwoYSwgYikge1xuICAgIHRoaXMuZnJhbWVzID0gW107XG4gICAgdGhpcy5kdXJhdGlvbiA9IDFFMyAvIGE7XG4gICAgdGhpcy5xdWFsaXR5ID0gYiB8fCAuOFxuICB9XG4gIGwucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgYiAmJiB0aGlzLmR1cmF0aW9uKSB0aHJvdyBcInlvdSBjYW4ndCBwYXNzIGEgZHVyYXRpb24gaWYgdGhlIGZwcyBpcyBzZXRcIjtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgYiAmJiAhdGhpcy5kdXJhdGlvbikgdGhyb3cgXCJpZiB5b3UgZG9uJ3QgaGF2ZSB0aGUgZnBzIHNldCwgeW91IG5lZCB0byBoYXZlIGR1cmF0aW9ucyBoZXJlLlwiO1xuICAgIFwiY2FudmFzXCIgaW4gYSAmJiAoYSA9IGEuY2FudmFzKTtcbiAgICBpZiAoXCJ0b0RhdGFVUkxcIiBpbiBhKSBhID0gYS50b0RhdGFVUkwoXCJpbWFnZS93ZWJwXCIsIHRoaXMucXVhbGl0eSk7XG4gICAgZWxzZSBpZiAoXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSkgdGhyb3cgXCJmcmFtZSBtdXN0IGJlIGEgYSBIVE1MQ2FudmFzRWxlbWVudCwgYSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgb3IgYSBEYXRhVVJJIGZvcm1hdHRlZCBzdHJpbmdcIjtcbiAgICBpZiAoIS9eZGF0YTppbWFnZVxcL3dlYnA7YmFzZTY0LC9pZy50ZXN0KGEpKSB0aHJvdyBcIklucHV0IG11c3QgYmUgZm9ybWF0dGVkIHByb3Blcmx5IGFzIGEgYmFzZTY0IGVuY29kZWQgRGF0YVVSSSBvZiB0eXBlIGltYWdlL3dlYnBcIjtcbiAgICB0aGlzLmZyYW1lcy5wdXNoKHtcbiAgICAgIGltYWdlOiBhLFxuICAgICAgZHVyYXRpb246IGIgfHwgdGhpcy5kdXJhdGlvblxuICAgIH0pXG4gIH07XG4gIGwucHJvdG90eXBlLmNvbXBpbGUgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIG5ldyBoKHRoaXMuZnJhbWVzLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYyA9IHEoayhhdG9iKGEuaW1hZ2Uuc2xpY2UoMjMpKSkpO1xuICAgICAgYy5kdXJhdGlvbiA9IGEuZHVyYXRpb247XG4gICAgICByZXR1cm4gY1xuICAgIH0pLCBhKVxuICB9O1xuICByZXR1cm4ge1xuICAgIFZpZGVvOiBsLFxuICAgIGZyb21JbWFnZUFycmF5OiBmdW5jdGlvbihhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gaChhLm1hcChmdW5jdGlvbihhKSB7XG4gICAgICAgIGEgPSBxKGsoYXRvYihhLnNsaWNlKDIzKSkpKTtcbiAgICAgICAgYS5kdXJhdGlvbiA9IDFFMyAvIGI7XG4gICAgICAgIHJldHVybiBhXG4gICAgICB9KSwgYylcbiAgICB9LFxuICAgIHRvV2ViTTogaFxuICB9XG59KCk7XG5cbi8qIGZpbGU6IHNyYy9saWIvRWFzZS5qcyAqL1xuXG4vKlxuXG4gIEVhc2UgMS4wXG5cbiAgaHR0cDovL2NhbnZhc3F1ZXJ5LmNvbVxuXG4gIChjKSAyMDE1IGJ5IFJlem9uZXIgLSBodHRwOi8vcmV6b25lci5uZXRcblxuICBgZWFzZWAgbWF5IGJlIGZyZWVseSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG5cbiovXG5cbihmdW5jdGlvbigpIHtcblxuICB2YXIgZWFzZSA9IGZ1bmN0aW9uKHByb2dyZXNzLCBlYXNpbmcpIHtcblxuICAgIGlmICh0eXBlb2YgZWFzZS5jYWNoZVtlYXNpbmddID09PSBcImZ1bmN0aW9uXCIpIHtcblxuICAgICAgcmV0dXJuIGVhc2UuY2FjaGVbZWFzaW5nXShwcm9ncmVzcyk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICByZXR1cm4gZWFzZS5zcGxpbmUocHJvZ3Jlc3MsIGVhc2luZyB8fCBlYXNlLmRlZmF1bHRFYXNpbmcpO1xuXG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIGV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICBhcmd1bWVudHNbMF1bal0gPSBhcmd1bWVudHNbaV1bal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgfTtcblxuICBleHRlbmQoZWFzZSwge1xuXG4gICAgZGVmYXVsdEVhc2luZzogXCIwMTZcIixcblxuICAgIGNhY2hlOiB7XG5cbiAgICAgIGxpbmVhcjogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gdFxuICAgICAgfSxcblxuICAgICAgaW5RdWFkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dFF1YWQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiAoMiAtIHQpXG4gICAgICB9LFxuICAgICAgaW5PdXRRdWFkOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdFxuICAgICAgfSxcbiAgICAgIGluQ3ViaWM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIG91dEN1YmljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAoLS10KSAqIHQgKiB0ICsgMVxuICAgICAgfSxcbiAgICAgIGluT3V0Q3ViaWM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPCAuNSA/IDQgKiB0ICogdCAqIHQgOiAodCAtIDEpICogKDIgKiB0IC0gMikgKiAoMiAqIHQgLSAyKSArIDFcbiAgICAgIH0sXG4gICAgICBpblF1YXJ0OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0ICogdCAqIHQgKiB0XG4gICAgICB9LFxuICAgICAgb3V0UXVhcnQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIDEgLSAoLS10KSAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIGluT3V0UXVhcnQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPCAuNSA/IDggKiB0ICogdCAqIHQgKiB0IDogMSAtIDggKiAoLS10KSAqIHQgKiB0ICogdFxuICAgICAgfSxcbiAgICAgIGluUXVpbnQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0XG4gICAgICB9LFxuICAgICAgb3V0UXVpbnQ6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIDEgKyAoLS10KSAqIHQgKiB0ICogdCAqIHRcbiAgICAgIH0sXG4gICAgICBpbk91dFF1aW50OiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiB0IDwgLjUgPyAxNiAqIHQgKiB0ICogdCAqIHQgKiB0IDogMSArIDE2ICogKC0tdCkgKiB0ICogdCAqIHQgKiB0XG4gICAgICB9LFxuICAgICAgaW5TaW5lOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAtMSAqIE1hdGguY29zKHQgLyAxICogKE1hdGguUEkgKiAwLjUpKSArIDE7XG4gICAgICB9LFxuICAgICAgb3V0U2luZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zaW4odCAvIDEgKiAoTWF0aC5QSSAqIDAuNSkpO1xuICAgICAgfSxcbiAgICAgIGluT3V0U2luZTogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gLTEgLyAyICogKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpO1xuICAgICAgfSxcbiAgICAgIGluRXhwbzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gKHQgPT0gMCkgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKTtcbiAgICAgIH0sXG4gICAgICBvdXRFeHBvOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAodCA9PSAxKSA/IDEgOiAoLU1hdGgucG93KDIsIC0xMCAqIHQpICsgMSk7XG4gICAgICB9LFxuICAgICAgaW5PdXRFeHBvOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICh0ID09IDApIHJldHVybiAwO1xuICAgICAgICBpZiAodCA9PSAxKSByZXR1cm4gMTtcbiAgICAgICAgaWYgKCh0IC89IDEgLyAyKSA8IDEpIHJldHVybiAxIC8gMiAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSk7XG4gICAgICAgIHJldHVybiAxIC8gMiAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpO1xuICAgICAgfSxcbiAgICAgIGluQ2lyYzogZnVuY3Rpb24odCkge1xuICAgICAgICByZXR1cm4gLTEgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICAgIH0sXG4gICAgICBvdXRDaXJjOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoMSAtICh0ID0gdCAtIDEpICogdCk7XG4gICAgICB9LFxuICAgICAgaW5PdXRDaXJjOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIGlmICgodCAvPSAxIC8gMikgPCAxKSByZXR1cm4gLTEgLyAyICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgICAgIHJldHVybiAxIC8gMiAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKTtcbiAgICAgIH0sXG4gICAgICBpbkVsYXN0aWM6IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgdmFyIHMgPSAxLjcwMTU4O1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIHZhciBhID0gMTtcbiAgICAgICAgaWYgKHQgPT0gMCkgcmV0dXJuIDA7XG4gICAgICAgIGlmICh0ID09IDEpIHJldHVybiAxO1xuICAgICAgICBpZiAoIXApIHAgPSAwLjM7XG4gICAgICAgIGlmIChhIDwgMSkge1xuICAgICAgICAgIGEgPSAxO1xuICAgICAgICAgIHZhciBzID0gcCAvIDQ7XG4gICAgICAgIH0gZWxzZSB2YXIgcyA9IHAgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgICAgICAgcmV0dXJuIC0oYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XG4gICAgICB9LFxuICAgICAgb3V0RWxhc3RpYzogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcyA9IDEuNzAxNTg7XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIGEgPSAxO1xuICAgICAgICBpZiAodCA9PSAwKSByZXR1cm4gMDtcbiAgICAgICAgaWYgKHQgPT0gMSkgcmV0dXJuIDE7XG4gICAgICAgIGlmICghcCkgcCA9IDAuMztcbiAgICAgICAgaWYgKGEgPCAxKSB7XG4gICAgICAgICAgYSA9IDE7XG4gICAgICAgICAgdmFyIHMgPSBwIC8gNDtcbiAgICAgICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSAvIGEpO1xuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqIHQpICogTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSArIDE7XG4gICAgICB9LFxuICAgICAgaW5PdXRFbGFzdGljOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gMS43MDE1ODtcbiAgICAgICAgdmFyIHAgPSAwO1xuICAgICAgICB2YXIgYSA9IDE7XG4gICAgICAgIGlmICh0ID09IDApIHJldHVybiAwO1xuICAgICAgICBpZiAoKHQgLz0gMSAvIDIpID09IDIpIHJldHVybiAxO1xuICAgICAgICBpZiAoIXApIHAgPSAoMC4zICogMS41KTtcbiAgICAgICAgaWYgKGEgPCAxKSB7XG4gICAgICAgICAgYSA9IDE7XG4gICAgICAgICAgdmFyIHMgPSBwIC8gNDtcbiAgICAgICAgfSBlbHNlIHZhciBzID0gcCAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSAvIGEpO1xuICAgICAgICBpZiAodCA8IDEpIHJldHVybiAtLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSk7XG4gICAgICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgLSBzKSAqICgyICogTWF0aC5QSSkgLyBwKSAqIDAuNSArIDE7XG4gICAgICB9LFxuICAgICAgaW5CYWNrOiBmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAxICogdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbiAgICAgIH0sXG4gICAgICBvdXRCYWNrOiBmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIGlmIChzID09IHVuZGVmaW5lZCkgcyA9IDEuNzAxNTg7XG4gICAgICAgIHJldHVybiAxICogKCh0ID0gdCAvIDEgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpO1xuICAgICAgfSxcbiAgICAgIGluT3V0QmFjazogZnVuY3Rpb24odCwgcykge1xuICAgICAgICBpZiAocyA9PSB1bmRlZmluZWQpIHMgPSAxLjcwMTU4O1xuICAgICAgICBpZiAoKHQgLz0gMSAvIDIpIDwgMSkgcmV0dXJuIDEgLyAyICogKHQgKiB0ICogKCgocyAqPSAoMS41MjUpKSArIDEpICogdCAtIHMpKTtcbiAgICAgICAgcmV0dXJuIDEgLyAyICogKCh0IC09IDIpICogdCAqICgoKHMgKj0gKDEuNTI1KSkgKyAxKSAqIHQgKyBzKSArIDIpO1xuICAgICAgfSxcbiAgICAgIGluQm91bmNlOiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHJldHVybiAxIC0gdGhpcy5vdXRCb3VuY2UoMSAtIHQpO1xuICAgICAgfSxcbiAgICAgIG91dEJvdW5jZTogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAoKHQgLz0gMSkgPCAoMSAvIDIuNzUpKSB7XG4gICAgICAgICAgcmV0dXJuICg3LjU2MjUgKiB0ICogdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8ICgyIC8gMi43NSkpIHtcbiAgICAgICAgICByZXR1cm4gKDcuNTYyNSAqICh0IC09ICgxLjUgLyAyLjc1KSkgKiB0ICsgLjc1KTtcbiAgICAgICAgfSBlbHNlIGlmICh0IDwgKDIuNSAvIDIuNzUpKSB7XG4gICAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAodCAtPSAoMi4yNSAvIDIuNzUpKSAqIHQgKyAuOTM3NSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICg3LjU2MjUgKiAodCAtPSAoMi42MjUgLyAyLjc1KSkgKiB0ICsgLjk4NDM3NSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbk91dEJvdW5jZTogZnVuY3Rpb24odCkge1xuICAgICAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gdGhpcy5pbkJvdW5jZSh0ICogMikgKiAwLjU7XG4gICAgICAgIHJldHVybiB0aGlzLm91dEJvdW5jZSh0ICogMiAtIDEpICogMC41ICsgMC41O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB0cmFuc2xhdGVFYXNpbmc6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgICBpZiAoIXRoaXMuY2FjaGVba2V5XSkge1xuICAgICAgICB2YXIgYXJyYXkgPSBrZXkuc3BsaXQoJycpO1xuXG4gICAgICAgIHZhciBzaWduID0gMTtcbiAgICAgICAgdmFyIHNpZ25lZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgIHZhciBjaGFyID0gYXJyYXlbaV07XG5cbiAgICAgICAgICBpZiAoY2hhciA9PT0gXCItXCIpIHtcbiAgICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgICAgICAgIHNpZ25lZCA9IHRydWU7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoYXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICBzaWduID0gMTtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpLS0sIDEpO1xuICAgICAgICAgIH0gZWxzZSBhcnJheVtpXSA9IHBhcnNlSW50KGFycmF5W2ldLCAxNikgKiBzaWduO1xuXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4uYXBwbHkobnVsbCwgYXJyYXkpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgYXJyYXkpO1xuICAgICAgICB2YXIgZGlmZiA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGNhY2hlID0gW107XG4gICAgICAgIHZhciBub3JtYWxpemVkID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzaWduZWQpIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gTWF0aC5tYXgoTWF0aC5hYnMobWluKSwgTWF0aC5hYnMobWF4KSlcbiAgICAgICAgICAgIG5vcm1hbGl6ZWQucHVzaCgoYXJyYXlbaV0pIC8gZGlmZik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkaWZmID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgbm9ybWFsaXplZC5wdXNoKChhcnJheVtpXSAtIG1pbikgLyBkaWZmKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSBub3JtYWxpemVkO1xuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV1cblxuICAgIH0sXG5cbiAgICAvKlxuXG4gICAgICBDdWJpYy1zcGxpbmUgaW50ZXJwb2xhdGlvbiBieSBJdmFuIEt1Y2tpclxuXG4gICAgICBodHRwOi8vYmxvZy5pdmFuay5uZXQvaW50ZXJwb2xhdGlvbi13aXRoLWN1YmljLXNwbGluZXMuaHRtbFxuXG4gICAgICBXaXRoIHNsaWdodCBtb2RpZmljYXRpb25zIGJ5IE1vcmdhbiBIZXJsb2NrZXJcblxuICAgICAgaHR0cHM6Ly9naXRodWIuY29tL21vcmdhbmhlcmxvY2tlci9jdWJpYy1zcGxpbmVcblxuICAgICovXG5cbiAgICBzcGxpbmVLOiB7fSxcbiAgICBzcGxpbmVYOiB7fSxcbiAgICBzcGxpbmVZOiB7fSxcblxuICAgIGluc2VydEludGVybWVkaWF0ZVZhbHVlczogZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGFbaV0pO1xuXG4gICAgICAgIGlmIChpIDwgYS5sZW5ndGggLSAxKSByZXN1bHQucHVzaChhW2kgKyAxXSArIChhW2ldIC0gYVtpICsgMV0pICogMC42KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgc3BsaW5lOiBmdW5jdGlvbih4LCBrZXkpIHtcblxuICAgICAgaWYgKCF0aGlzLnNwbGluZUtba2V5XSkge1xuXG4gICAgICAgIHZhciB4cyA9IFtdO1xuICAgICAgICB2YXIgeXMgPSB0aGlzLnRyYW5zbGF0ZUVhc2luZyhrZXkpO1xuXG4gICAgICAgIC8vIHlzID0gdGhpcy5pbnNlcnRJbnRlcm1lZGlhdGVWYWx1ZXMoeXMpO1xuXG4gICAgICAgIGlmICgheXMubGVuZ3RoKSByZXR1cm4gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHlzLmxlbmd0aDsgaSsrKSB4cy5wdXNoKGkgKiAoMSAvICh5cy5sZW5ndGggLSAxKSkpO1xuXG4gICAgICAgIHZhciBrcyA9IHhzLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KTtcblxuICAgICAgICBrcyA9IHRoaXMuZ2V0TmF0dXJhbEtzKHhzLCB5cywga3MpO1xuXG4gICAgICAgIHRoaXMuc3BsaW5lWFtrZXldID0geHM7XG4gICAgICAgIHRoaXMuc3BsaW5lWVtrZXldID0geXM7XG4gICAgICAgIHRoaXMuc3BsaW5lS1trZXldID0ga3M7XG5cbiAgICAgIH1cblxuICAgICAgaWYgKHggPiAxKSByZXR1cm4gdGhpcy5zcGxpbmVZW2tleV1bdGhpcy5zcGxpbmVZW2tleV0ubGVuZ3RoIC0gMV07XG5cbiAgICAgIHZhciBrcyA9IHRoaXMuc3BsaW5lS1trZXldO1xuICAgICAgdmFyIHhzID0gdGhpcy5zcGxpbmVYW2tleV07XG4gICAgICB2YXIgeXMgPSB0aGlzLnNwbGluZVlba2V5XTtcblxuICAgICAgdmFyIGkgPSAxO1xuXG4gICAgICB3aGlsZSAoeHNbaV0gPCB4KSBpKys7XG5cbiAgICAgIHZhciB0ID0gKHggLSB4c1tpIC0gMV0pIC8gKHhzW2ldIC0geHNbaSAtIDFdKTtcbiAgICAgIHZhciBhID0ga3NbaSAtIDFdICogKHhzW2ldIC0geHNbaSAtIDFdKSAtICh5c1tpXSAtIHlzW2kgLSAxXSk7XG4gICAgICB2YXIgYiA9IC1rc1tpXSAqICh4c1tpXSAtIHhzW2kgLSAxXSkgKyAoeXNbaV0gLSB5c1tpIC0gMV0pO1xuICAgICAgdmFyIHEgPSAoMSAtIHQpICogeXNbaSAtIDFdICsgdCAqIHlzW2ldICsgdCAqICgxIC0gdCkgKiAoYSAqICgxIC0gdCkgKyBiICogdCk7XG5cbiAgICAgIC8qXG4gICAgICB2YXIgcHkgPSB5c1tpIC0gMl07XG4gICAgICB2YXIgY3kgPSB5c1tpIC0gMV07XG4gICAgICB2YXIgbnkgPSAoaSA8IHlzLmxlbmd0aCAtIDEpID8geXNbaV0gOiB5c1tpIC0gMV07XG5cbiAgICAgIGlmIChxID4gbnkpIHtcbiAgICAgICAgdmFyIGRpZmYgPSAocSAtIHB5KTtcbiAgICAgICAgLy9xID0gcHkgKyBkaWZmO1xuXG4gICAgICB9XG5cbiAgICBpZiAoY3kgPT09IG55ICYmIGN5ID09PSBweSkgcSA9IHB5O1xuICAgICovXG5cblxuICAgICAgcmV0dXJuIHE7XG4gICAgfSxcblxuICAgIGdldE5hdHVyYWxLczogZnVuY3Rpb24oeHMsIHlzLCBrcykge1xuICAgICAgdmFyIG4gPSB4cy5sZW5ndGggLSAxO1xuICAgICAgdmFyIEEgPSB0aGlzLnplcm9zTWF0KG4gKyAxLCBuICsgMik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbjsgaSsrKSAvLyByb3dzXG4gICAgICB7XG4gICAgICAgIEFbaV1baSAtIDFdID0gMSAvICh4c1tpXSAtIHhzW2kgLSAxXSk7XG4gICAgICAgIEFbaV1baV0gPSAyICogKDEgLyAoeHNbaV0gLSB4c1tpIC0gMV0pICsgMSAvICh4c1tpICsgMV0gLSB4c1tpXSkpO1xuICAgICAgICBBW2ldW2kgKyAxXSA9IDEgLyAoeHNbaSArIDFdIC0geHNbaV0pO1xuICAgICAgICBBW2ldW24gKyAxXSA9IDMgKiAoKHlzW2ldIC0geXNbaSAtIDFdKSAvICgoeHNbaV0gLSB4c1tpIC0gMV0pICogKHhzW2ldIC0geHNbaSAtIDFdKSkgKyAoeXNbaSArIDFdIC0geXNbaV0pIC8gKCh4c1tpICsgMV0gLSB4c1tpXSkgKiAoeHNbaSArIDFdIC0geHNbaV0pKSk7XG4gICAgICB9XG5cbiAgICAgIEFbMF1bMF0gPSAyIC8gKHhzWzFdIC0geHNbMF0pO1xuICAgICAgQVswXVsxXSA9IDEgLyAoeHNbMV0gLSB4c1swXSk7XG4gICAgICBBWzBdW24gKyAxXSA9IDMgKiAoeXNbMV0gLSB5c1swXSkgLyAoKHhzWzFdIC0geHNbMF0pICogKHhzWzFdIC0geHNbMF0pKTtcblxuICAgICAgQVtuXVtuIC0gMV0gPSAxIC8gKHhzW25dIC0geHNbbiAtIDFdKTtcbiAgICAgIEFbbl1bbl0gPSAyIC8gKHhzW25dIC0geHNbbiAtIDFdKTtcbiAgICAgIEFbbl1bbiArIDFdID0gMyAqICh5c1tuXSAtIHlzW24gLSAxXSkgLyAoKHhzW25dIC0geHNbbiAtIDFdKSAqICh4c1tuXSAtIHhzW24gLSAxXSkpO1xuXG4gICAgICByZXR1cm4gdGhpcy5zb2x2ZShBLCBrcyk7XG4gICAgfSxcblxuICAgIHNvbHZlOiBmdW5jdGlvbihBLCBrcykge1xuICAgICAgdmFyIG0gPSBBLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbTsgaysrKSAvLyBjb2x1bW5cbiAgICAgIHtcbiAgICAgICAgLy8gcGl2b3QgZm9yIGNvbHVtblxuICAgICAgICB2YXIgaV9tYXggPSAwO1xuICAgICAgICB2YXIgdmFsaSA9IE51bWJlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGs7IGkgPCBtOyBpKyspXG4gICAgICAgICAgaWYgKEFbaV1ba10gPiB2YWxpKSB7XG4gICAgICAgICAgICBpX21heCA9IGk7XG4gICAgICAgICAgICB2YWxpID0gQVtpXVtrXTtcbiAgICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BsaW5lU3dhcFJvd3MoQSwgaywgaV9tYXgpO1xuXG4gICAgICAgIC8vIGZvciBhbGwgcm93cyBiZWxvdyBwaXZvdFxuICAgICAgICBmb3IgKHZhciBpID0gayArIDE7IGkgPCBtOyBpKyspIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gayArIDE7IGogPCBtICsgMTsgaisrKVxuICAgICAgICAgICAgQVtpXVtqXSA9IEFbaV1bal0gLSBBW2tdW2pdICogKEFbaV1ba10gLyBBW2tdW2tdKTtcbiAgICAgICAgICBBW2ldW2tdID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IG0gLSAxOyBpID49IDA7IGktLSkgLy8gcm93cyA9IGNvbHVtbnNcbiAgICAgIHtcbiAgICAgICAgdmFyIHYgPSBBW2ldW21dIC8gQVtpXVtpXTtcbiAgICAgICAga3NbaV0gPSB2O1xuICAgICAgICBmb3IgKHZhciBqID0gaSAtIDE7IGogPj0gMDsgai0tKSAvLyByb3dzXG4gICAgICAgIHtcbiAgICAgICAgICBBW2pdW21dIC09IEFbal1baV0gKiB2O1xuICAgICAgICAgIEFbal1baV0gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ga3M7XG4gICAgfSxcblxuICAgIHplcm9zTWF0OiBmdW5jdGlvbihyLCBjKSB7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByOyBpKyspIHtcbiAgICAgICAgQS5wdXNoKFtdKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBjOyBqKyspIEFbaV0ucHVzaCgwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBBO1xuICAgIH0sXG5cbiAgICBzcGxpbmVTd2FwUm93czogZnVuY3Rpb24obSwgaywgbCkge1xuICAgICAgdmFyIHAgPSBtW2tdO1xuICAgICAgbVtrXSA9IG1bbF07XG4gICAgICBtW2xdID0gcDtcbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5lYXNlID0gZWFzZTtcblxufSkoKTtcblxuXG4vKiBmaWxlOiBzcmMvUGxheWdyb3VuZC5qcyAqL1xuXG5QTEFZR1JPVU5EID0ge307XG5cbmZ1bmN0aW9uIHBsYXlncm91bmQoYXJncykge1xuXG4gIHJldHVybiBuZXcgUExBWUdST1VORC5BcHBsaWNhdGlvbihhcmdzKTtcblxufTtcblxuLyogZmlsZTogc3JjL1V0aWxzLmpzICovXG5cblBMQVlHUk9VTkQuVXRpbHMgPSB7XG5cbiAgZXh0ZW5kOiBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqIGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgICBhcmd1bWVudHNbMF1bal0gPSBhcmd1bWVudHNbaV1bal07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcblxuICB9LFxuXG4gIG1lcmdlOiBmdW5jdGlvbihhKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgYiA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcblxuICAgICAgICB2YXIgdmFsdWUgPSBiW2tleV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBhW2tleV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFba2V5XSA9PT0gXCJvYmplY3RcIikgdGhpcy5tZXJnZShhW2tleV0sIHZhbHVlKTtcbiAgICAgICAgICBlbHNlIGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuXG4gIH0sXG5cbiAgaW52b2tlOiBmdW5jdGlvbihvYmplY3QsIG1ldGhvZE5hbWUpIHtcblxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudCA9IG9iamVjdFtpXTtcblxuICAgICAgaWYgKGN1cnJlbnRbbWV0aG9kTmFtZV0pIGN1cnJlbnRbbWV0aG9kTmFtZV0uYXBwbHkoY3VycmVudCwgYXJncyk7XG5cbiAgICB9XG5cbiAgfSxcblxuICB0aHJvdHRsZTogZnVuY3Rpb24oZm4sIHRocmVzaG9sZCkge1xuICAgIHRocmVzaG9sZCB8fCAodGhyZXNob2xkID0gMjUwKTtcbiAgICB2YXIgbGFzdCxcbiAgICAgIGRlZmVyVGltZXI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuXG4gICAgICB2YXIgbm93ID0gK25ldyBEYXRlLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaG9sZCkge1xuICAgICAgICAvLyBob2xkIG9uIHRvIGl0XG4gICAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfSwgdGhyZXNob2xkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3QgPSBub3c7XG4gICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5lYXNlID0gZWFzZTtcblxuXG4vKiBmaWxlOiBzcmMvRXZlbnRzLmpzICovXG5cblBMQVlHUk9VTkQuRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcblxufTtcblxuUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlID0ge1xuXG4gIG9uOiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblxuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBldmVudCkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMub24oa2V5LCBldmVudFtrZXldLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG5cbiAgICB2YXIgbGlzdGVuZXIgPSB7XG4gICAgICBvbmNlOiBmYWxzZSxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaywgY29udGV4dCkge1xuXG4gICAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50KSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5vbmNlKGtleSwgZXZlbnRba2V5XSwgY29udGV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1tldmVudF0pIHRoaXMubGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuXG4gICAgdmFyIGxpc3RlbmVyID0ge1xuICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGxpc3RlbmVyO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdW2ldLl9yZW1vdmUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuXG4gICAgLyogaWYgeW91IHByZWZlciBldmVudHMgcGlwZSAqL1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl0pIHtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdW2ldO1xuXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuY29udGV4dCB8fCB0aGlzLCBldmVudCwgZGF0YSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8qIG9yIHN1YnNjcmliZWQgdG8gc2luZ2xlIGV2ZW50ICovXG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdW2ldO1xuXG4gICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuY29udGV4dCB8fCB0aGlzLCBkYXRhKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIub25jZSkge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9TdGF0ZXMuanMgKi9cblxuUExBWUdST1VORC5TdGF0ZXMgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIGFwcC5vbihcInN0ZXBcIiwgdGhpcy5zdGVwLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlN0YXRlcy5wcm90b3R5cGUgPSB7XG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGlmICghdGhpcy5uZXh0KSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jdXJyZW50ICYmIHRoaXMuY3VycmVudC5sb2NrZWQpIHJldHVybjtcblxuICAgIHZhciBzdGF0ZSA9IHRoaXMubmV4dDtcblxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIikgc3RhdGUgPSBuZXcgc3RhdGU7XG5cbiAgICAvKiBjcmVhdGUgc3RhdGUgaWYgb2JqZWN0IGhhcyBuZXZlciBiZWVuIHVzZWQgYXMgYSBzdGF0ZSBiZWZvcmUgKi9cblxuICAgIGlmICghc3RhdGUuX19jcmVhdGVkKSB7XG5cbiAgICAgIHN0YXRlLl9fY3JlYXRlZCA9IHRydWU7XG5cbiAgICAgIHN0YXRlLmFwcCA9IHRoaXMuYXBwO1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJjcmVhdGVzdGF0ZVwiLCB7XG4gICAgICAgIHN0YXRlOiBzdGF0ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdGF0ZS5jcmVhdGUpIHN0YXRlLmNyZWF0ZSgpO1xuXG4gICAgfVxuXG4gICAgLyogZW50ZXIgbmV3IHN0YXRlICovXG5cbiAgICBpZiAodGhpcy5jdXJyZW50KSB7XG4gICAgICB0aGlzLnRyaWdnZXIoXCJsZWF2ZXN0YXRlXCIsIHtcbiAgICAgICAgcHJldjogdGhpcy5jdXJyZW50LFxuICAgICAgICBuZXh0OiBzdGF0ZSxcbiAgICAgICAgc3RhdGU6IHRoaXMuY3VycmVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyKFwiZW50ZXJzdGF0ZVwiLCB7XG4gICAgICBwcmV2OiB0aGlzLmN1cnJlbnQsXG4gICAgICBuZXh0OiBzdGF0ZSxcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdXJyZW50ID0gc3RhdGU7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50ICYmIHRoaXMuY3VycmVudC5lbnRlcikge1xuICAgICAgdGhpcy5jdXJyZW50LmVudGVyKCk7XG4gICAgfVxuXG4gICAgdGhpcy5hcHAuc3RhdGUgPSB0aGlzLmN1cnJlbnQ7XG5cbiAgICB0aGlzLm5leHQgPSBmYWxzZTtcblxuXG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbihzdGF0ZSkge1xuXG4gICAgaWYgKHRoaXMuY3VycmVudCAmJiB0aGlzLmN1cnJlbnQubGVhdmUpIHRoaXMuY3VycmVudC5sZWF2ZSgpO1xuXG4gICAgdGhpcy5uZXh0ID0gc3RhdGU7XG5cbiAgICB0aGlzLnN0ZXAoMCk7XG5cbiAgfVxuXG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuU3RhdGVzLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuLyogZmlsZTogc3JjL0FwcGxpY2F0aW9uLmpzICovXG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24gPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgdmFyIGFwcCA9IHRoaXM7XG5cbiAgLyogZXZlbnRzICovXG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICAvKiBkZWZhdWx0cyAqL1xuXG4gIFBMQVlHUk9VTkQuVXRpbHMubWVyZ2UodGhpcywgdGhpcy5kZWZhdWx0cywgYXJncyk7XG5cbiAgLyogZ3Vlc3Mgc2NhbGluZyBtb2RlICovXG5cbiAgdGhpcy5hdXRvV2lkdGggPSB0aGlzLndpZHRoID8gZmFsc2UgOiB0cnVlO1xuICB0aGlzLmF1dG9IZWlnaHQgPSB0aGlzLmhlaWdodCA/IGZhbHNlIDogdHJ1ZTtcbiAgdGhpcy5hdXRvU2NhbGUgPSB0aGlzLnNjYWxlID8gZmFsc2UgOiB0cnVlO1xuXG4gIC8qIGdldCBjb250YWluZXIgKi9cblxuICBpZiAoIXRoaXMuY29udGFpbmVyKSB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XG5cbiAgaWYgKHRoaXMuY29udGFpbmVyICE9PSBkb2N1bWVudC5ib2R5KSB0aGlzLmN1c3RvbUNvbnRhaW5lciA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiB0aGlzLmNvbnRhaW5lciA9PT0gXCJzdHJpbmdcIikgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKTtcblxuICB0aGlzLnVwZGF0ZVNpemUoKTtcblxuICAvKiBldmVudHMgKi9cblxuICAvLyB0aGlzLmVtaXRMb2NhbEV2ZW50ID0gdGhpcy5lbWl0TG9jYWxFdmVudC5iaW5kKHRoaXMpO1xuICAvLyB0aGlzLmVtaXRHbG9iYWxFdmVudCA9IHRoaXMuZW1pdEdsb2JhbEV2ZW50LmJpbmQodGhpcyk7XG5cbiAgLyogc3RhdGVzIG1hbmFnZXIgKi9cblxuICB0aGlzLnN0YXRlcyA9IG5ldyBQTEFZR1JPVU5ELlN0YXRlcyh0aGlzKTtcbiAgdGhpcy5zdGF0ZXMub24oXCJldmVudFwiLCB0aGlzLmVtaXRMb2NhbEV2ZW50LCB0aGlzKTtcblxuICAvKiBtb3VzZSAqL1xuXG4gIHRoaXMubW91c2UgPSBuZXcgUExBWUdST1VORC5Nb3VzZSh0aGlzLCB0aGlzLmNvbnRhaW5lcik7XG4gIHRoaXMubW91c2Uub24oXCJldmVudFwiLCB0aGlzLmVtaXRHbG9iYWxFdmVudCwgdGhpcyk7XG5cbiAgLyogdG91Y2ggKi9cblxuICB0aGlzLnRvdWNoID0gbmV3IFBMQVlHUk9VTkQuVG91Y2godGhpcywgdGhpcy5jb250YWluZXIpO1xuICB0aGlzLnRvdWNoLm9uKFwiZXZlbnRcIiwgdGhpcy5lbWl0R2xvYmFsRXZlbnQsIHRoaXMpO1xuXG4gIC8qIGtleWJvYXJkICovXG5cbiAgdGhpcy5rZXlib2FyZCA9IG5ldyBQTEFZR1JPVU5ELktleWJvYXJkKCk7XG4gIHRoaXMua2V5Ym9hcmQub24oXCJldmVudFwiLCB0aGlzLmVtaXRHbG9iYWxFdmVudCwgdGhpcyk7XG5cbiAgLyogZ2FtZXBhZHMgKi9cblxuICB0aGlzLmdhbWVwYWRzID0gbmV3IFBMQVlHUk9VTkQuR2FtZXBhZHModGhpcyk7XG4gIHRoaXMuZ2FtZXBhZHMub24oXCJldmVudFwiLCB0aGlzLmVtaXRHbG9iYWxFdmVudCwgdGhpcyk7XG5cbiAgLyogdHdlZW5zICovXG5cbiAgdGhpcy50d2VlbnMgPSBuZXcgUExBWUdST1VORC5Ud2Vlbk1hbmFnZXIodGhpcyk7XG5cbiAgLyogZWFzZSAqL1xuXG4gIHRoaXMuZWFzZSA9IFBMQVlHUk9VTkQuVXRpbHMuZWFzZTtcblxuICAvKiB2aWRlbyByZWNvcmRlciAqL1xuXG4gIHRoaXMudmlkZW9SZWNvcmRlciA9IG5ldyBQTEFZR1JPVU5ELlZpZGVvUmVjb3JkZXIodGhpcyk7XG5cbiAgLyogc291bmQgKi9cblxuICBQTEFZR1JPVU5ELlNvdW5kKHRoaXMpO1xuXG4gIC8qIHdpbmRvdyByZXNpemUgKi9cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpKTtcblxuICAvKiB2aXNpbGliaXR5Y2hhbmdlICovXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuZW1pdEdsb2JhbEV2ZW50KFwidmlzaWJpbGl0eWNoYW5nZVwiLCBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUpO1xuXG5cbiAgfSk7XG5cbiAgLyogYXNzZXRzIGNvbnRhaW5lcnMgKi9cblxuICB0aGlzLmltYWdlcyA9IHt9O1xuICB0aGlzLmF0bGFzZXMgPSB7fTtcbiAgdGhpcy5kYXRhID0ge307XG5cbiAgdGhpcy5sb2FkZXIgPSBuZXcgUExBWUdST1VORC5Mb2FkZXIodGhpcyk7XG5cbiAgdGhpcy5sb2FkRm9vKDAuMjUpO1xuXG4gIC8qIGNyZWF0ZSBwbHVnaW5zIGluIHRoZSBzYW1lIHdheSAqL1xuXG4gIHRoaXMucGx1Z2lucyA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBQTEFZR1JPVU5EKSB7XG5cbiAgICB2YXIgcHJvcGVydHkgPSBQTEFZR1JPVU5EW2tleV07XG5cbiAgICBpZiAocHJvcGVydHkucGx1Z2luKSB0aGlzLnBsdWdpbnMucHVzaChuZXcgcHJvcGVydHkodGhpcykpO1xuXG4gIH1cblxuICAvKiBmbG93ICovXG5cbiAgdGhpcy5lbWl0R2xvYmFsRXZlbnQoXCJwcmVsb2FkXCIpO1xuXG4gIHRoaXMuZmlyc3RCYXRjaCA9IHRydWU7XG5cbiAgZnVuY3Rpb24gb25QcmVsb2FkRW5kKCkge1xuXG4gICAgYXBwLmxvYWRGb28oMC4yNSk7XG5cbiAgICAvKiBydW4gZXZlcnl0aGluZyBpbiB0aGUgbmV4dCBmcmFtZSAqL1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgYXBwLmVtaXRMb2NhbEV2ZW50KFwiY3JlYXRlXCIpO1xuXG4gICAgICBhcHAuc2V0U3RhdGUoUExBWUdST1VORC5EZWZhdWx0U3RhdGUpO1xuICAgICAgYXBwLmhhbmRsZVJlc2l6ZSgpO1xuICAgICAgYXBwLnNldFN0YXRlKFBMQVlHUk9VTkQuTG9hZGluZ1NjcmVlbik7XG5cbiAgICAgIC8qIGdhbWUgbG9vcCAqL1xuXG4gICAgICBQTEFZR1JPVU5ELkdhbWVMb29wKGFwcCk7XG5cbiAgICB9KTtcblxuICAgIC8qIHN0YWdlIHByb3BlciBsb2FkaW5nIHN0ZXAgKi9cblxuICAgIGFwcC5sb2FkZXIub25jZShcInJlYWR5XCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICBhcHAuZmlyc3RCYXRjaCA9IGZhbHNlO1xuXG4gICAgICBhcHAuc2V0U3RhdGUoUExBWUdST1VORC5EZWZhdWx0U3RhdGUpO1xuXG4gICAgICBhcHAuZW1pdExvY2FsRXZlbnQoXCJyZWFkeVwiKTtcbiAgICAgIGFwcC5oYW5kbGVSZXNpemUoKTtcblxuXG4gICAgfSk7XG5cblxuICB9O1xuXG5cbiAgdGhpcy5sb2FkZXIub25jZShcInJlYWR5XCIsIG9uUHJlbG9hZEVuZCk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlID0ge1xuXG4gIGRlZmF1bHRzOiB7XG4gICAgc21vb3RoaW5nOiAxLFxuICAgIHBhdGhzOiB7XG4gICAgICBiYXNlOiBcIlwiLFxuICAgICAgaW1hZ2VzOiBcImltYWdlcy9cIlxuICAgIH0sXG4gICAgb2Zmc2V0WDogMCxcbiAgICBvZmZzZXRZOiAwXG4gIH0sXG5cbiAgc2V0U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG5cbiAgICB0aGlzLnN0YXRlcy5zZXQoc3RhdGUpO1xuXG4gIH0sXG5cbiAgZ2V0UGF0aDogZnVuY3Rpb24odG8pIHtcblxuICAgIHJldHVybiB0aGlzLnBhdGhzLmJhc2UgKyAodGhpcy5wYXRoc1t0b10gfHwgKHRvICsgXCIvXCIpKTtcblxuICB9LFxuXG4gIGdldEFzc2V0RW50cnk6IGZ1bmN0aW9uKHBhdGgsIGZvbGRlciwgZGVmYXVsdEV4dGVuc2lvbikge1xuXG4gICAgLyogdHJhbnNsYXRlIGZvbGRlciBhY2NvcmRpbmcgdG8gdXNlciBwcm92aWRlZCBwYXRoc1xuICAgICAgIG9yIGxlYXZlIGFzIGlzICovXG5cbiAgICB2YXIgZm9sZGVyID0gdGhpcy5wYXRoc1tmb2xkZXJdIHx8IChmb2xkZXIgKyBcIi9cIik7XG5cbiAgICB2YXIgZmlsZWluZm8gPSBwYXRoLm1hdGNoKC8oLiopXFwuLiovKTtcbiAgICB2YXIga2V5ID0gZmlsZWluZm8gPyBmaWxlaW5mb1sxXSA6IHBhdGg7XG5cbiAgICB2YXIgdGVtcCA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgIHZhciBiYXNlbmFtZSA9IHBhdGg7XG5cbiAgICBpZiAodGVtcC5sZW5ndGggPiAxKSB7XG4gICAgICB2YXIgZXh0ID0gdGVtcC5wb3AoKTtcbiAgICAgIHBhdGggPSB0ZW1wLmpvaW4oXCIuXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZXh0ID0gZGVmYXVsdEV4dGVuc2lvbjtcbiAgICAgIGJhc2VuYW1lICs9IFwiLlwiICsgZGVmYXVsdEV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5OiBrZXksXG4gICAgICB1cmw6IHRoaXMucGF0aHMuYmFzZSArIGZvbGRlciArIGJhc2VuYW1lLFxuICAgICAgcGF0aDogdGhpcy5wYXRocy5iYXNlICsgZm9sZGVyICsgcGF0aCxcbiAgICAgIGV4dDogZXh0XG4gICAgfTtcblxuICB9LFxuXG4gIC8qIGV2ZW50cyB0aGF0IHNob3VsZG4ndCBmbG93IGRvd24gdG8gdGhlIHN0YXRlICovXG5cbiAgZW1pdExvY2FsRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG5cbiAgICB0aGlzLnRyaWdnZXIoZXZlbnQsIGRhdGEpO1xuXG4gICAgaWYgKCghdGhpcy5maXJzdEJhdGNoIHx8IHRoaXMubG9hZGVyLnJlYWR5KSAmJiB0aGlzW2V2ZW50XSkgdGhpc1tldmVudF0oZGF0YSk7XG5cbiAgfSxcblxuICAvKiBldmVudHMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzdGF0ZSAqL1xuXG4gIGVtaXRHbG9iYWxFdmVudDogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcblxuICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuIHRoaXMuZW1pdExvY2FsRXZlbnQoZXZlbnQsIGRhdGEpO1xuXG4gICAgdGhpcy50cmlnZ2VyKGV2ZW50LCBkYXRhKTtcblxuICAgIGlmICgoIXRoaXMuZmlyc3RCYXRjaCB8fCB0aGlzLmxvYWRlci5yZWFkeSkgJiYgdGhpcy5ldmVudCkgdGhpcy5ldmVudChldmVudCwgZGF0YSk7XG5cbiAgICBpZiAoKCF0aGlzLmZpcnN0QmF0Y2ggfHwgdGhpcy5sb2FkZXIucmVhZHkpICYmIHRoaXNbZXZlbnRdKSB0aGlzW2V2ZW50XShkYXRhKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmV2ZW50KSB0aGlzLnN0YXRlLmV2ZW50KGV2ZW50LCBkYXRhKTtcblxuICAgIGlmICh0aGlzLnN0YXRlW2V2ZW50XSkgdGhpcy5zdGF0ZVtldmVudF0oZGF0YSk7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJwb3N0XCIgKyBldmVudCwgZGF0YSk7XG5cbiAgICAvLyBpZiAodGhpcy5zdGF0ZS5wcm94eSkgdGhpcy5zdGF0ZS5wcm94eShldmVudCwgZGF0YSk7XG5cbiAgfSxcblxuICB1cGRhdGVTaXplOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmN1c3RvbUNvbnRhaW5lcikge1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgY29udGFpbmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIHZhciBjb250YWluZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuYXV0b1NjYWxlICYmICF0aGlzLmF1dG9XaWR0aCAmJiAhdGhpcy5hdXRvSGVpZ2h0KSB7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmF1dG9IZWlnaHQgJiYgdGhpcy5hdXRvV2lkdGgpIHtcblxuICAgICAgaWYgKHRoaXMuYXV0b1NjYWxlKSB0aGlzLnNjYWxlID0gY29udGFpbmVySGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG5cbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLmNlaWwoY29udGFpbmVyV2lkdGggLyB0aGlzLnNjYWxlKTtcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuYXV0b1dpZHRoICYmIHRoaXMuYXV0b0hlaWdodCkge1xuXG4gICAgICBpZiAodGhpcy5hdXRvU2NhbGUpIHRoaXMuc2NhbGUgPSBjb250YWluZXJXaWR0aCAvIHRoaXMud2lkdGg7XG5cbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5jZWlsKGNvbnRhaW5lckhlaWdodCAvIHRoaXMuc2NhbGUpO1xuXG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuYXV0b1dpZHRoICYmIHRoaXMuYXV0b0hlaWdodCAmJiB0aGlzLmF1dG9TY2FsZSkge1xuXG4gICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgIHRoaXMud2lkdGggPSBjb250YWluZXJXaWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gY29udGFpbmVySGVpZ2h0O1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmF1dG9XaWR0aCAmJiB0aGlzLmF1dG9IZWlnaHQpIHtcblxuICAgICAgdGhpcy53aWR0aCA9IE1hdGguY2VpbChjb250YWluZXJXaWR0aCAvIHRoaXMuc2NhbGUpO1xuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLmNlaWwoY29udGFpbmVySGVpZ2h0IC8gdGhpcy5zY2FsZSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLnNjYWxlID0gTWF0aC5taW4oY29udGFpbmVyV2lkdGggLyB0aGlzLndpZHRoLCBjb250YWluZXJIZWlnaHQgLyB0aGlzLmhlaWdodCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLm9mZnNldFggPSAoY29udGFpbmVyV2lkdGggLSB0aGlzLndpZHRoICogdGhpcy5zY2FsZSkgLyAyIHwgMDtcbiAgICB0aGlzLm9mZnNldFkgPSAoY29udGFpbmVySGVpZ2h0IC0gdGhpcy5oZWlnaHQgKiB0aGlzLnNjYWxlKSAvIDIgfCAwO1xuXG4gICAgdGhpcy5jZW50ZXIgPSB7XG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiB8IDAsXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgfCAwXG4gICAgfTtcblxuICB9LFxuXG4gIGhhbmRsZVJlc2l6ZTogUExBWUdST1VORC5VdGlscy50aHJvdHRsZShmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuXG4gICAgdGhpcy5tb3VzZS5oYW5kbGVSZXNpemUoKTtcbiAgICB0aGlzLnRvdWNoLmhhbmRsZVJlc2l6ZSgpO1xuXG4gICAgdGhpcy5lbWl0R2xvYmFsRXZlbnQoXCJyZXNpemVcIiwge30pO1xuXG4gIH0sIDE2KSxcblxuICAvKlxuICAgIHJlcXVlc3QgYSBmaWxlIG92ZXIgaHR0cFxuICAgIGl0IHNoYWxsIGJlIGxhdGVyIGFuIGFic3RyYWN0aW9uIHVzaW5nICdmcycgaW4gbm9kZS13ZWJraXRcblxuICAgIHJldHVybnMgYSBwcm9taXNlXG4gICovXG5cbiAgcmVxdWVzdDogZnVuY3Rpb24odXJsKSB7XG5cbiAgICBmdW5jdGlvbiBwcm9taXNlKHN1Y2Nlc3MsIGZhaWwpIHtcblxuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgICAgdmFyIGFwcCA9IHRoaXM7XG5cbiAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuXG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIHhociA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICBpZiAoeGhyLnN0YXR1cyAhPT0gMjAwICYmIHhoci5zdGF0dXMgIT09IDApIHtcblxuICAgICAgICAgIHJldHVybiBmYWlsKG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgXCIgKyB1cmwpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgc3VjY2Vzcyh4aHIpO1xuXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3Quc2VuZCgpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHByb21pc2UpO1xuXG4gIH0sXG5cbiAgLyogaW1hZ2luYXJ5IHRpbWVvdXQgdG8gZGVsYXkgbG9hZGluZyAqL1xuXG4gIGxvYWRGb286IGZ1bmN0aW9uKHRpbWVvdXQpIHtcblxuICAgIHZhciBsb2FkZXIgPSB0aGlzLmxvYWRlcjtcblxuICAgIHRoaXMubG9hZGVyLmFkZChcImZvbyBcIiArIHRpbWVvdXQpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRlci5zdWNjZXNzKFwiZm9vIFwiICsgdGltZW91dCk7XG4gICAgfSwgdGltZW91dCAqIDEwMDApO1xuXG4gIH0sXG5cbiAgLyogZGF0YS9qc29uICovXG5cbiAgbG9hZERhdGE6IGZ1bmN0aW9uKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJnKSB0aGlzLmxvYWREYXRhKGFyZ1trZXldKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLmxvYWREYXRhSXRlbShhcmcpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICBsb2FkRGF0YUl0ZW06IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIHZhciBlbnRyeSA9IHRoaXMuZ2V0QXNzZXRFbnRyeShuYW1lLCBcImRhdGFcIiwgXCJqc29uXCIpO1xuXG4gICAgdmFyIGFwcCA9IHRoaXM7XG5cbiAgICB0aGlzLmxvYWRlci5hZGQoKTtcblxuICAgIHRoaXMucmVxdWVzdChlbnRyeS51cmwpLnRoZW4ocHJvY2Vzc0RhdGEpO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0RhdGEocmVxdWVzdCkge1xuXG4gICAgICBpZiAoZW50cnkuZXh0ID09PSBcImpzb25cIikge1xuICAgICAgICBhcHAuZGF0YVtlbnRyeS5rZXldID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcHAuZGF0YVtlbnRyeS5rZXldID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XG4gICAgICB9XG5cbiAgICAgIGFwcC5sb2FkZXIuc3VjY2VzcyhlbnRyeS51cmwpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgLyogaW1hZ2VzICovXG5cbiAgbG9hZEltYWdlOiBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB0aGlzLmxvYWRJbWFnZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICB9LFxuXG4gIGxvYWRJbWFnZXM6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHByb21pc2VzID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAvKiBwb2x5bW9ycGhpc20gYXQgaXRzIGZpbmVzdCAqL1xuXG4gICAgICBpZiAodHlwZW9mIGFyZyA9PT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhcmcpIHByb21pc2VzID0gcHJvbWlzZXMuY29uY2F0KHRoaXMubG9hZEltYWdlcyhhcmdba2V5XSkpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHByb21pc2VzLnB1c2godGhpcy5sb2FkT25lSW1hZ2UoYXJnKSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgfSxcblxuICBsb2FkT25lSW1hZ2U6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIHZhciBhcHAgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLl9pbWFnZUxvYWRlcnMpIHRoaXMuX2ltYWdlTG9hZGVycyA9IHt9O1xuXG4gICAgaWYgKCF0aGlzLl9pbWFnZUxvYWRlcnNbbmFtZV0pIHtcblxuICAgICAgdmFyIHByb21pc2UgPSBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAvKiBpZiBhcmd1bWVudCBpcyBub3QgYW4gb2JqZWN0L2FycmF5IGxldCdzIHRyeSB0byBsb2FkIGl0ICovXG5cbiAgICAgICAgdmFyIGxvYWRlciA9IGFwcC5sb2FkZXI7XG5cbiAgICAgICAgdmFyIGVudHJ5ID0gYXBwLmdldEFzc2V0RW50cnkobmFtZSwgXCJpbWFnZXNcIiwgXCJwbmdcIik7XG5cbiAgICAgICAgYXBwLmxvYWRlci5hZGQoZW50cnkucGF0aCk7XG5cbiAgICAgICAgdmFyIGltYWdlID0gYXBwLmltYWdlc1tlbnRyeS5rZXldID0gbmV3IEltYWdlO1xuXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgcmVzb2x2ZShpbWFnZSk7XG4gICAgICAgICAgbG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICByZWplY3QoXCJjYW4ndCBsb2FkIFwiICsgZW50cnkudXJsKTtcbiAgICAgICAgICBsb2FkZXIuZXJyb3IoZW50cnkudXJsKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpbWFnZS5zcmMgPSBlbnRyeS51cmw7XG5cbiAgICAgIH07XG5cbiAgICAgIGFwcC5faW1hZ2VMb2FkZXJzW25hbWVdID0gbmV3IFByb21pc2UocHJvbWlzZSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5faW1hZ2VMb2FkZXJzW25hbWVdO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG5cblxuLyogZmlsZTogc3JjL0dhbWVMb29wLmpzICovXG5cblBMQVlHUk9VTkQuR2FtZUxvb3AgPSBmdW5jdGlvbihhcHApIHtcblxuICBhcHAubGlmZXRpbWUgPSAwO1xuICBhcHAub3BzID0gMDtcbiAgYXBwLm9wY29zdCA9IDA7XG5cbiAgdmFyIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgdmFyIGZyYW1lID0gMDtcbiAgdmFyIHVuYm91bmRlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlbmRlcihkdCkge1xuXG4gICAgYXBwLmVtaXRHbG9iYWxFdmVudChcInJlbmRlclwiLCBkdClcbiAgICBhcHAuZW1pdEdsb2JhbEV2ZW50KFwicG9zdHJlbmRlclwiLCBkdClcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHN0ZXAoZHQpIHtcblxuICAgIGFwcC5lbWl0R2xvYmFsRXZlbnQoXCJzdGVwXCIsIGR0KVxuXG4gIH07XG5cbiAgZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG5cbiAgICBpZiAoIWFwcC51bmJvdW5kKSB7XG4gICAgICBpZiAoYXBwLmltbWlkaWF0ZSkge1xuICAgICAgICBzZXRaZXJvVGltZW91dChnYW1lTG9vcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBkZWx0YSA9IERhdGUubm93KCkgLSBsYXN0VGljaztcblxuICAgIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcblxuICAgIGlmIChhcHAudW5ib3VuZCkge1xuICAgICAgZGVsdGEgPSAyMDtcbiAgICB9XG5cbiAgICBpZiAoZGVsdGEgPiAxMDAwKSByZXR1cm47XG5cbiAgICB2YXIgZHQgPSBkZWx0YSAvIDEwMDA7XG5cbiAgICBhcHAubGlmZXRpbWUgKz0gZHQ7XG4gICAgYXBwLmVsYXBzZWQgPSBkdDtcblxuICAgIHN0ZXAoZHQpO1xuXG4gICAgcmVuZGVyKGR0KTtcblxuICAgIGlmIChhcHAudW5ib3VuZCAmJiAhdW5ib3VuZGVkKSB7XG4gICAgICB1bmJvdW5kZWQgPSB0cnVlO1xuICAgICAgd2hpbGUgKGFwcC51bmJvdW5kKSB7XG4gICAgICAgIGdhbWVMb29wKCk7XG4gICAgICB9XG4gICAgICB1bmJvdW5kZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgfTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKCkge1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxdWVzdElkKTtcblxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcblxuICAgIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbiAgfSk7XG5cbiAgdmFyIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG5cbn07XG5cbi8vIENvcHlyaWdodCBkYmFyb24sIHZpYSBodHRwOi8vZGJhcm9uLm9yZy9sb2cvMjAxMDAzMDktZmFzdGVyLXRpbWVvdXRzXG4vLyBPbmx5IGFkZCBzZXRaZXJvVGltZW91dCB0byB0aGUgd2luZG93IG9iamVjdCwgYW5kIGhpZGUgZXZlcnl0aGluZ1xuLy8gZWxzZSBpbiBhIGNsb3N1cmUuXG4oZnVuY3Rpb24oKSB7XG4gIHZhciB0aW1lb3V0cyA9IFtdO1xuICB2YXIgbWVzc2FnZU5hbWUgPSBcInplcm8tdGltZW91dC1tZXNzYWdlXCI7XG5cbiAgLy8gTGlrZSBzZXRUaW1lb3V0LCBidXQgb25seSB0YWtlcyBhIGZ1bmN0aW9uIGFyZ3VtZW50LiAgVGhlcmUnc1xuICAvLyBubyB0aW1lIGFyZ3VtZW50IChhbHdheXMgemVybykgYW5kIG5vIGFyZ3VtZW50cyAoeW91IGhhdmUgdG9cbiAgLy8gdXNlIGEgY2xvc3VyZSkuXG4gIGZ1bmN0aW9uIHNldFplcm9UaW1lb3V0KGZuKSB7XG4gICAgdGltZW91dHMucHVzaChmbik7XG4gICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2VOYW1lLCBcIipcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG5cbiAgICBpZiAoZXZlbnQuc291cmNlID09IHdpbmRvdyAmJiBldmVudC5kYXRhID09IG1lc3NhZ2VOYW1lKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aW1lb3V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBmbiA9IHRpbWVvdXRzLnNoaWZ0KCk7XG4gICAgICAgIGZuKCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UsIHRydWUpO1xuXG4gIC8vIEFkZCB0aGUgb25lIHRoaW5nIHdlIHdhbnQgYWRkZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QuXG4gIHdpbmRvdy5zZXRaZXJvVGltZW91dCA9IHNldFplcm9UaW1lb3V0O1xufSkoKTtcblxuLyogZmlsZTogc3JjL0dhbWVwYWRzLmpzICovXG5cblBMQVlHUk9VTkQuR2FtZXBhZHMgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuZ2V0R2FtZXBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMgfHwgbmF2aWdhdG9yLndlYmtpdEdldEdhbWVwYWRzO1xuXG4gIHRoaXMuZ2FtZXBhZG1vdmVFdmVudCA9IHt9O1xuICB0aGlzLmdhbWVwYWRkb3duRXZlbnQgPSB7fTtcbiAgdGhpcy5nYW1lcGFkdXBFdmVudCA9IHt9O1xuXG4gIHRoaXMuZ2FtZXBhZHMgPSB7fTtcblxuICB0aGlzLmFwcC5vbihcInN0ZXBcIiwgdGhpcy5zdGVwLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkdhbWVwYWRzLnByb3RvdHlwZSA9IHtcblxuICBidXR0b25zOiB7XG4gICAgMDogXCIxXCIsXG4gICAgMTogXCIyXCIsXG4gICAgMjogXCIzXCIsXG4gICAgMzogXCI0XCIsXG4gICAgNDogXCJsMVwiLFxuICAgIDU6IFwicjFcIixcbiAgICA2OiBcImwyXCIsXG4gICAgNzogXCJyMlwiLFxuICAgIDg6IFwic2VsZWN0XCIsXG4gICAgOTogXCJzdGFydFwiLFxuICAgIDEyOiBcInVwXCIsXG4gICAgMTM6IFwiZG93blwiLFxuICAgIDE0OiBcImxlZnRcIixcbiAgICAxNTogXCJyaWdodFwiXG4gIH0sXG5cbiAgemVyb1N0YXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBidXR0b25zID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAxNTsgaSsrKSB7XG4gICAgICBidXR0b25zLnB1c2goe1xuICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBheGVzOiBbXSxcbiAgICAgIGJ1dHRvbnM6IGJ1dHRvbnNcbiAgICB9O1xuXG4gIH0sXG5cbiAgY3JlYXRlR2FtZXBhZDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgYnV0dG9uczoge30sXG4gICAgICBzdGlja3M6IFt7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfV1cbiAgICB9O1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLmJ1dHRvbnNbaV07XG4gICAgICByZXN1bHQuYnV0dG9uc1trZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMpIHJldHVybjtcblxuICAgIHZhciBnYW1lcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBnYW1lcGFkcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY3VycmVudCA9IGdhbWVwYWRzW2ldO1xuXG4gICAgICBpZiAoIWN1cnJlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoIXRoaXNbaV0pIHRoaXNbaV0gPSB0aGlzLmNyZWF0ZUdhbWVwYWQoKTtcblxuICAgICAgLyogaGF2ZSB0byBjb25jYXQgdGhlIGN1cnJlbnQuYnV0dG9ucyBiZWNhdXNlIHRoZSBhcmUgcmVhZC1vbmx5ICovXG5cbiAgICAgIHZhciBidXR0b25zID0gW10uY29uY2F0KGN1cnJlbnQuYnV0dG9ucyk7XG5cbiAgICAgIC8qIGhhY2sgZm9yIG1pc3NpbmcgIGRwYWRzICovXG5cbiAgICAgIGZvciAodmFyIGggPSAxMjsgaCA8PSAxNTsgaCsrKSB7XG4gICAgICAgIGlmICghYnV0dG9uc1toXSkgYnV0dG9uc1toXSA9IHtcbiAgICAgICAgICBwcmVzc2VkOiBmYWxzZSxcbiAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldmlvdXMgPSB0aGlzW2ldO1xuXG4gICAgICAvKiBheGVzIChzdGlja3MpIHRvIGJ1dHRvbnMgKi9cblxuICAgICAgaWYgKGN1cnJlbnQuYXhlcykge1xuXG4gICAgICAgIGlmIChjdXJyZW50LmF4ZXNbMF0gPCAwKSBidXR0b25zWzE0XS5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGN1cnJlbnQuYXhlc1swXSA+IDApIGJ1dHRvbnNbMTVdLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICBpZiAoY3VycmVudC5heGVzWzFdIDwgMCkgYnV0dG9uc1sxMl0ucHJlc3NlZCA9IHRydWU7XG4gICAgICAgIGlmIChjdXJyZW50LmF4ZXNbMV0gPiAwKSBidXR0b25zWzEzXS5wcmVzc2VkID0gdHJ1ZTtcblxuICAgICAgICBwcmV2aW91cy5zdGlja3NbMF0ueCA9IGN1cnJlbnQuYXhlc1swXS52YWx1ZTtcbiAgICAgICAgcHJldmlvdXMuc3RpY2tzWzBdLnkgPSBjdXJyZW50LmF4ZXNbMV0udmFsdWU7XG4gICAgICAgIHByZXZpb3VzLnN0aWNrc1sxXS54ID0gY3VycmVudC5heGVzWzJdLnZhbHVlO1xuICAgICAgICBwcmV2aW91cy5zdGlja3NbMV0ueSA9IGN1cnJlbnQuYXhlc1szXS52YWx1ZTtcblxuICAgICAgfVxuXG4gICAgICAvKiBjaGVjayBidXR0b25zIGNoYW5nZXMgKi9cblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBidXR0b25zLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnV0dG9uc1tqXTtcblxuICAgICAgICAvKiBnYW1lcGFkIGRvd24gKi9cblxuICAgICAgICBpZiAoYnV0dG9uc1tqXS5wcmVzc2VkICYmICFwcmV2aW91cy5idXR0b25zW2tleV0pIHtcblxuICAgICAgICAgIHByZXZpb3VzLmJ1dHRvbnNba2V5XSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5nYW1lcGFkZG93bkV2ZW50LmJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tqXTtcbiAgICAgICAgICB0aGlzLmdhbWVwYWRkb3duRXZlbnQuZ2FtZXBhZCA9IGk7XG4gICAgICAgICAgdGhpcy50cmlnZ2VyKFwiZ2FtZXBhZGRvd25cIiwgdGhpcy5nYW1lcGFkZG93bkV2ZW50KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLyogZ2FtZXBhZCB1cCAqL1xuICAgICAgICBlbHNlIGlmICghYnV0dG9uc1tqXS5wcmVzc2VkICYmIHByZXZpb3VzLmJ1dHRvbnNba2V5XSkge1xuXG4gICAgICAgICAgcHJldmlvdXMuYnV0dG9uc1trZXldID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5nYW1lcGFkdXBFdmVudC5idXR0b24gPSB0aGlzLmJ1dHRvbnNbal07XG4gICAgICAgICAgdGhpcy5nYW1lcGFkdXBFdmVudC5nYW1lcGFkID0gaTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXIoXCJnYW1lcGFkdXBcIiwgdGhpcy5nYW1lcGFkdXBFdmVudCk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5HYW1lcGFkcy5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cblxuLyogZmlsZTogc3JjL0tleWJvYXJkLmpzICovXG5cblBMQVlHUk9VTkQuS2V5Ym9hcmQgPSBmdW5jdGlvbigpIHtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMua2V5cyA9IHt9O1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5dXAuYmluZCh0aGlzKSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCB0aGlzLmtleXByZXNzLmJpbmQodGhpcykpO1xuXG4gIHRoaXMua2V5ZG93bkV2ZW50ID0ge307XG4gIHRoaXMua2V5dXBFdmVudCA9IHt9O1xuXG4gIHRoaXMucHJldmVudERlZmF1bHQgPSB0cnVlO1xuXG59O1xuXG5QTEFZR1JPVU5ELktleWJvYXJkLnByb3RvdHlwZSA9IHtcblxuICBrZXljb2Rlczoge1xuICAgIDM3OiBcImxlZnRcIixcbiAgICAzODogXCJ1cFwiLFxuICAgIDM5OiBcInJpZ2h0XCIsXG4gICAgNDA6IFwiZG93blwiLFxuICAgIDQ1OiBcImluc2VydFwiLFxuICAgIDQ2OiBcImRlbGV0ZVwiLFxuICAgIDg6IFwiYmFja3NwYWNlXCIsXG4gICAgOTogXCJ0YWJcIixcbiAgICAxMzogXCJlbnRlclwiLFxuICAgIDE2OiBcInNoaWZ0XCIsXG4gICAgMTc6IFwiY3RybFwiLFxuICAgIDE4OiBcImFsdFwiLFxuICAgIDE5OiBcInBhdXNlXCIsXG4gICAgMjA6IFwiY2Fwc2xvY2tcIixcbiAgICAyNzogXCJlc2NhcGVcIixcbiAgICAzMjogXCJzcGFjZVwiLFxuICAgIDMzOiBcInBhZ2V1cFwiLFxuICAgIDM0OiBcInBhZ2Vkb3duXCIsXG4gICAgMzU6IFwiZW5kXCIsXG4gICAgMzY6IFwiaG9tZVwiLFxuICAgIDExMjogXCJmMVwiLFxuICAgIDExMzogXCJmMlwiLFxuICAgIDExNDogXCJmM1wiLFxuICAgIDExNTogXCJmNFwiLFxuICAgIDExNjogXCJmNVwiLFxuICAgIDExNzogXCJmNlwiLFxuICAgIDExODogXCJmN1wiLFxuICAgIDExOTogXCJmOFwiLFxuICAgIDEyMDogXCJmOVwiLFxuICAgIDEyMTogXCJmMTBcIixcbiAgICAxMjI6IFwiZjExXCIsXG4gICAgMTIzOiBcImYxMlwiLFxuICAgIDE0NDogXCJudW1sb2NrXCIsXG4gICAgMTQ1OiBcInNjcm9sbGxvY2tcIixcbiAgICAxODY6IFwic2VtaWNvbG9uXCIsXG4gICAgMTg3OiBcImVxdWFsXCIsXG4gICAgMTg4OiBcImNvbW1hXCIsXG4gICAgMTg5OiBcImRhc2hcIixcbiAgICAxOTA6IFwicGVyaW9kXCIsXG4gICAgMTkxOiBcInNsYXNoXCIsXG4gICAgMTkyOiBcImdyYXZlYWNjZW50XCIsXG4gICAgMjE5OiBcIm9wZW5icmFja2V0XCIsXG4gICAgMjIwOiBcImJhY2tzbGFzaFwiLFxuICAgIDIyMTogXCJjbG9zZWJyYWtldFwiLFxuICAgIDIyMjogXCJzaW5nbGVxdW90ZVwiXG4gIH0sXG5cbiAga2V5cHJlc3M6IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB2YXIga2V5TmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICBlbHNlIHZhciBrZXlOYW1lID0gdGhpcy5rZXljb2Rlc1tlLndoaWNoXTtcblxuICAgIGlmICh0aGlzLmtleXNba2V5TmFtZV0pIHJldHVybjtcblxuICAgIHRoaXMua2V5ZG93bkV2ZW50LmtleSA9IGtleU5hbWU7XG4gICAgdGhpcy5rZXlkb3duRXZlbnQub3JpZ2luYWwgPSBlO1xuXG4gICAgdGhpcy5rZXlzW2tleU5hbWVdID0gdHJ1ZTtcblxuICAgIHRoaXMudHJpZ2dlcihcImtleWRvd25cIiwgdGhpcy5rZXlkb3duRXZlbnQpO1xuXG4gICAgaWYgKHRoaXMucHJldmVudERlZmF1bHQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgZS5rZXlDb2RlID0gMDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9LFxuXG4gIGtleXVwOiBmdW5jdGlvbihlKSB7XG5cbiAgICBpZiAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDkwKSB2YXIga2V5TmFtZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoZS53aGljaCkudG9Mb3dlckNhc2UoKTtcbiAgICBlbHNlIHZhciBrZXlOYW1lID0gdGhpcy5rZXljb2Rlc1tlLndoaWNoXTtcblxuICAgIHRoaXMua2V5dXBFdmVudC5rZXkgPSBrZXlOYW1lO1xuICAgIHRoaXMua2V5dXBFdmVudC5vcmlnaW5hbCA9IGU7XG5cbiAgICB0aGlzLmtleXNba2V5TmFtZV0gPSBmYWxzZTtcblxuICAgIHRoaXMudHJpZ2dlcihcImtleXVwXCIsIHRoaXMua2V5dXBFdmVudCk7XG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5LZXlib2FyZC5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cblxuXG4vKiBmaWxlOiBzcmMvUG9pbnRlci5qcyAqL1xuXG5QTEFZR1JPVU5ELlBvaW50ZXIgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBhcHAub24oXCJ0b3VjaHN0YXJ0XCIsIHRoaXMudG91Y2hzdGFydCwgdGhpcyk7XG4gIGFwcC5vbihcInRvdWNoZW5kXCIsIHRoaXMudG91Y2hlbmQsIHRoaXMpO1xuICBhcHAub24oXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUsIHRoaXMpO1xuXG4gIGFwcC5vbihcIm1vdXNlbW92ZVwiLCB0aGlzLm1vdXNlbW92ZSwgdGhpcyk7XG4gIGFwcC5vbihcIm1vdXNlZG93blwiLCB0aGlzLm1vdXNlZG93biwgdGhpcyk7XG4gIGFwcC5vbihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLCB0aGlzKTtcblxuICB0aGlzLnBvaW50ZXJzID0gYXBwLnBvaW50ZXJzID0ge307XG5cbn07XG5cblBMQVlHUk9VTkQuUG9pbnRlci5wbHVnaW4gPSB0cnVlO1xuXG5QTEFZR1JPVU5ELlBvaW50ZXIucHJvdG90eXBlID0ge1xuXG4gIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uKHBvaW50ZXIpIHtcblxuICAgIHRoaXMucG9pbnRlcnNbcG9pbnRlci5pZF0gPSBwb2ludGVyO1xuXG4gIH0sXG5cbiAgcmVtb3ZlUG9pbnRlcjogZnVuY3Rpb24ocG9pbnRlcikge1xuXG4gICAgZGVsZXRlIHRoaXMucG9pbnRlcnNbcG9pbnRlci5pZF07XG5cbiAgfSxcblxuICB0b3VjaHN0YXJ0OiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnRvdWNoID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJkb3duXCIsIGUpO1xuXG4gIH0sXG5cbiAgdG91Y2hlbmQ6IGZ1bmN0aW9uKGUpIHtcblxuICAgIGUudG91Y2ggPSB0cnVlO1xuXG4gICAgdGhpcy5yZW1vdmVQb2ludGVyKGUpO1xuXG4gICAgdGhpcy5hcHAuZW1pdEdsb2JhbEV2ZW50KFwicG9pbnRlcnVwXCIsIGUpO1xuXG4gIH0sXG5cbiAgdG91Y2htb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnRvdWNoID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJtb3ZlXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2Vtb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMudXBkYXRlUG9pbnRlcihlKTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJtb3ZlXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2Vkb3duOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJkb3duXCIsIGUpO1xuXG4gIH0sXG5cbiAgbW91c2V1cDogZnVuY3Rpb24oZSkge1xuXG4gICAgZS5tb3VzZSA9IHRydWU7XG5cbiAgICB0aGlzLmFwcC5lbWl0R2xvYmFsRXZlbnQoXCJwb2ludGVydXBcIiwgZSk7XG5cbiAgfSxcblxuICBtb3VzZXdoZWVsOiBmdW5jdGlvbihlKSB7XG5cbiAgICBlLm1vdXNlID0gdHJ1ZTtcblxuICAgIHRoaXMuYXBwLmVtaXRHbG9iYWxFdmVudChcInBvaW50ZXJ3aGVlbFwiLCBlKTtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Mb2FkZXIuanMgKi9cblxuLyogTG9hZGVyICovXG5cblBMQVlHUk9VTkQuTG9hZGVyID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgUExBWUdST1VORC5FdmVudHMuY2FsbCh0aGlzKTtcblxuICB0aGlzLnJlc2V0KCk7XG5cbn07XG5cblBMQVlHUk9VTkQuTG9hZGVyLnByb3RvdHlwZSA9IHtcblxuICAvKiBsb2FkZXIgKi9cblxuICBhZGQ6IGZ1bmN0aW9uKGlkKSB7XG5cbiAgICB0aGlzLnF1ZXVlKys7XG4gICAgdGhpcy5jb3VudCsrO1xuICAgIHRoaXMucmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLnRyaWdnZXIoXCJhZGRcIiwgaWQpO1xuXG4gICAgcmV0dXJuIGlkO1xuXG4gIH0sXG5cbiAgZXJyb3I6IGZ1bmN0aW9uKGlkKSB7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJlcnJvclwiLCBpZCk7XG5cbiAgfSxcblxuICBzdWNjZXNzOiBmdW5jdGlvbihpZCkge1xuXG4gICAgdGhpcy5xdWV1ZS0tO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDEgLSB0aGlzLnF1ZXVlIC8gdGhpcy5jb3VudDtcblxuICAgIHRoaXMudHJpZ2dlcihcImxvYWRcIiwgaWQpO1xuXG4gICAgaWYgKHRoaXMucXVldWUgPD0gMCkge1xuICAgICAgdGhpcy50cmlnZ2VyKFwicmVhZHlcIik7XG4gICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5xdWV1ZSA9IDA7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5yZWFkeSA9IHRydWU7XG5cbiAgfVxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5Mb2FkZXIucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG4vKiBmaWxlOiBzcmMvTW91c2UuanMgKi9cblxuUExBWUdST1VORC5Nb3VzZSA9IGZ1bmN0aW9uKGFwcCwgZWxlbWVudCkge1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgdGhpcy5idXR0b25zID0ge307XG5cbiAgdGhpcy5wcmV2ZW50Q29udGV4dE1lbnUgPSB0cnVlO1xuXG4gIHRoaXMubW91c2Vtb3ZlRXZlbnQgPSB7fTtcbiAgdGhpcy5tb3VzZWRvd25FdmVudCA9IHt9O1xuICB0aGlzLm1vdXNldXBFdmVudCA9IHt9O1xuICB0aGlzLm1vdXNld2hlZWxFdmVudCA9IHt9O1xuXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMueSA9IDA7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMubW91c2Vtb3ZlLmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24uYmluZCh0aGlzKSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5tb3VzZXVwLmJpbmQodGhpcykpO1xuXG4gIHRoaXMuZW5hYmxlTW91c2V3aGVlbCgpO1xuXG4gIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24oZSkge1xuICAgIGlmIChzZWxmLnByZXZlbnRDb250ZXh0TWVudSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBlbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jayA9IGVsZW1lbnQucmVxdWVzdFBvaW50ZXJMb2NrIHx8XG4gICAgZWxlbWVudC5tb3pSZXF1ZXN0UG9pbnRlckxvY2sgfHxcbiAgICBlbGVtZW50LndlYmtpdFJlcXVlc3RQb2ludGVyTG9jaztcblxuICBkb2N1bWVudC5leGl0UG9pbnRlckxvY2sgPSBkb2N1bWVudC5leGl0UG9pbnRlckxvY2sgfHxcbiAgICBkb2N1bWVudC5tb3pFeGl0UG9pbnRlckxvY2sgfHxcbiAgICBkb2N1bWVudC53ZWJraXRFeGl0UG9pbnRlckxvY2s7XG5cblxuICB0aGlzLmhhbmRsZVJlc2l6ZSgpO1xufTtcblxuUExBWUdST1VORC5Nb3VzZS5wcm90b3R5cGUgPSB7XG5cbiAgbG9jazogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG4gICAgdGhpcy5lbGVtZW50LnJlcXVlc3RQb2ludGVyTG9jaygpO1xuXG4gIH0sXG5cbiAgdW5sb2NrOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG5cbiAgfSxcblxuICBnZXRFbGVtZW50T2Zmc2V0OiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgdmFyIG9mZnNldFkgPSAwO1xuXG4gICAgZG8ge1xuICAgICAgb2Zmc2V0WCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBvZmZzZXRZICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9O1xuXG4gIH0sXG5cbiAgaGFuZGxlUmVzaXplOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZWxlbWVudE9mZnNldCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQpO1xuXG4gIH0sXG5cbiAgbW91c2Vtb3ZlOiBQTEFZR1JPVU5ELlV0aWxzLnRocm90dGxlKGZ1bmN0aW9uKGUpIHtcblxuICAgIHRoaXMueCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueCA9IChlLnBhZ2VYIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnggLSB0aGlzLmFwcC5vZmZzZXRYKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcbiAgICB0aGlzLnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50LnkgPSAoZS5wYWdlWSAtIHRoaXMuZWxlbWVudE9mZnNldC55IC0gdGhpcy5hcHAub2Zmc2V0WSkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG5cbiAgICB0aGlzLm1vdXNlbW92ZUV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgdGhpcy5tb3VzZW1vdmVFdmVudC5tb3ZlbWVudFggPSBlLm1vdmVtZW50WCB8fFxuICAgICAgICBlLm1vek1vdmVtZW50WCB8fFxuICAgICAgICBlLndlYmtpdE1vdmVtZW50WCB8fFxuICAgICAgICAwO1xuXG4gICAgICB0aGlzLm1vdXNlbW92ZUV2ZW50Lm1vdmVtZW50WSA9IGUubW92ZW1lbnRZIHx8XG4gICAgICAgIGUubW96TW92ZW1lbnRZIHx8XG4gICAgICAgIGUud2Via2l0TW92ZW1lbnRZIHx8XG4gICAgICAgIDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXBwLm1vdXNlVG9Ub3VjaCkge1xuICAgICAgLy8gICAgICBpZiAodGhpcy5sZWZ0KSB7XG4gICAgICB0aGlzLm1vdXNlbW92ZUV2ZW50LmlkID0gdGhpcy5tb3VzZW1vdmVFdmVudC5pZGVudGlmaWVyID0gMjU1O1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vtb3ZlRXZlbnQpO1xuICAgICAgLy8gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW91c2Vtb3ZlRXZlbnQuaWQgPSB0aGlzLm1vdXNlbW92ZUV2ZW50LmlkZW50aWZpZXIgPSAyNTU7XG4gICAgICB0aGlzLnRyaWdnZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5tb3VzZW1vdmVFdmVudCk7XG4gICAgfVxuXG4gIH0sIDE2KSxcblxuICBtb3VzZWRvd246IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciBidXR0b25OYW1lID0gW1wibGVmdFwiLCBcIm1pZGRsZVwiLCBcInJpZ2h0XCJdW2UuYnV0dG9uXTtcblxuICAgIHRoaXMubW91c2Vkb3duRXZlbnQueCA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueDtcbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50LnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgdGhpcy5tb3VzZWRvd25FdmVudC5idXR0b24gPSBidXR0b25OYW1lO1xuICAgIHRoaXMubW91c2Vkb3duRXZlbnQub3JpZ2luYWwgPSBlO1xuXG4gICAgdGhpc1tidXR0b25OYW1lXSA9IHRydWU7XG5cbiAgICB0aGlzLm1vdXNlZG93bkV2ZW50LmlkID0gdGhpcy5tb3VzZWRvd25FdmVudC5pZGVudGlmaWVyID0gMjU1O1xuXG4gICAgaWYgKHRoaXMuYXBwLm1vdXNlVG9Ub3VjaCkge1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2htb3ZlXCIsIHRoaXMubW91c2Vkb3duRXZlbnQpO1xuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2hzdGFydFwiLCB0aGlzLm1vdXNlZG93bkV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50cmlnZ2VyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duRXZlbnQpO1xuICAgIH1cblxuICB9LFxuXG4gIG1vdXNldXA6IGZ1bmN0aW9uKGUpIHtcblxuICAgIHZhciBidXR0b25OYW1lID0gW1wibGVmdFwiLCBcIm1pZGRsZVwiLCBcInJpZ2h0XCJdW2UuYnV0dG9uXTtcblxuICAgIHRoaXMubW91c2V1cEV2ZW50LnggPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lng7XG4gICAgdGhpcy5tb3VzZXVwRXZlbnQueSA9IHRoaXMubW91c2Vtb3ZlRXZlbnQueTtcbiAgICB0aGlzLm1vdXNldXBFdmVudC5idXR0b24gPSBidXR0b25OYW1lO1xuICAgIHRoaXMubW91c2V1cEV2ZW50Lm9yaWdpbmFsID0gZTtcblxuICAgIHRoaXMubW91c2V1cEV2ZW50LmlkID0gdGhpcy5tb3VzZXVwRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcblxuICAgIGlmICh0aGlzLmFwcC5tb3VzZVRvVG91Y2gpIHtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwidG91Y2hlbmRcIiwgdGhpcy5tb3VzZXVwRXZlbnQpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy50cmlnZ2VyKFwibW91c2V1cFwiLCB0aGlzLm1vdXNldXBFdmVudCk7XG5cbiAgICB9XG5cbiAgICB0aGlzW2J1dHRvbk5hbWVdID0gZmFsc2U7XG5cbiAgfSxcblxuICBtb3VzZXdoZWVsOiBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLm1vdXNld2hlZWxFdmVudC54ID0gdGhpcy5tb3VzZW1vdmVFdmVudC54O1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50LnkgPSB0aGlzLm1vdXNlbW92ZUV2ZW50Lnk7XG4gICAgdGhpcy5tb3VzZXdoZWVsRXZlbnQuYnV0dG9uID0gW1wibm9uZVwiLCBcImxlZnRcIiwgXCJtaWRkbGVcIiwgXCJyaWdodFwiXVtlLmJ1dHRvbl07XG4gICAgdGhpcy5tb3VzZXdoZWVsRXZlbnQub3JpZ2luYWwgPSBlO1xuICAgIHRoaXMubW91c2V3aGVlbEV2ZW50LmlkID0gdGhpcy5tb3VzZXdoZWVsRXZlbnQuaWRlbnRpZmllciA9IDI1NTtcblxuICAgIHRoaXNbZS5idXR0b25dID0gZmFsc2U7XG5cbiAgICB0aGlzLnRyaWdnZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMubW91c2V3aGVlbEV2ZW50KTtcblxuICB9LFxuXG5cbiAgZW5hYmxlTW91c2V3aGVlbDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZXZlbnROYW1lcyA9ICdvbndoZWVsJyBpbiBkb2N1bWVudCB8fCBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gOSA/IFsnd2hlZWwnXSA6IFsnbW91c2V3aGVlbCcsICdEb21Nb3VzZVNjcm9sbCcsICdNb3pNb3VzZVBpeGVsU2Nyb2xsJ107XG4gICAgdmFyIGNhbGxiYWNrID0gdGhpcy5tb3VzZXdoZWVsLmJpbmQodGhpcyk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgaSA9IGV2ZW50TmFtZXMubGVuZ3RoOyBpOykge1xuXG4gICAgICBzZWxmLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWVzWy0taV0sIFBMQVlHUk9VTkQuVXRpbHMudGhyb3R0bGUoZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgb3JnRXZlbnQgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQsXG4gICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICBkZWx0YSA9IDAsXG4gICAgICAgICAgZGVsdGFYID0gMCxcbiAgICAgICAgICBkZWx0YVkgPSAwLFxuICAgICAgICAgIGFic0RlbHRhID0gMCxcbiAgICAgICAgICBhYnNEZWx0YVhZID0gMCxcbiAgICAgICAgICBmbjtcblxuICAgICAgICBvcmdFdmVudC50eXBlID0gXCJtb3VzZXdoZWVsXCI7XG5cbiAgICAgICAgLy8gT2xkIHNjaG9vbCBzY3JvbGx3aGVlbCBkZWx0YVxuICAgICAgICBpZiAob3JnRXZlbnQud2hlZWxEZWx0YSkge1xuICAgICAgICAgIGRlbHRhID0gb3JnRXZlbnQud2hlZWxEZWx0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcmdFdmVudC5kZXRhaWwpIHtcbiAgICAgICAgICBkZWx0YSA9IG9yZ0V2ZW50LmRldGFpbCAqIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmV3IHNjaG9vbCB3aGVlbCBkZWx0YSAod2hlZWwgZXZlbnQpXG4gICAgICAgIGlmIChvcmdFdmVudC5kZWx0YVkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBvcmdFdmVudC5kZWx0YVkgKiAtMTtcbiAgICAgICAgICBkZWx0YSA9IGRlbHRhWTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlYmtpdFxuICAgICAgICBpZiAob3JnRXZlbnQud2hlZWxEZWx0YVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbHRhWSA9IG9yZ0V2ZW50LndoZWVsRGVsdGFZO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGRlbHRhID8gZGVsdGEgOiBkZWx0YVk7XG5cbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQueCA9IHNlbGYubW91c2Vtb3ZlRXZlbnQueDtcbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQueSA9IHNlbGYubW91c2Vtb3ZlRXZlbnQueTtcbiAgICAgICAgc2VsZi5tb3VzZXdoZWVsRXZlbnQuZGVsdGEgPSByZXN1bHQgLyBNYXRoLmFicyhyZXN1bHQpO1xuICAgICAgICBzZWxmLm1vdXNld2hlZWxFdmVudC5vcmlnaW5hbCA9IG9yZ0V2ZW50O1xuXG4gICAgICAgIGNhbGxiYWNrKHNlbGYubW91c2V3aGVlbEV2ZW50KTtcblxuICAgICAgICBvcmdFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB9LCA0MCksIGZhbHNlKTtcbiAgICB9XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlV0aWxzLmV4dGVuZChQTEFZR1JPVU5ELk1vdXNlLnByb3RvdHlwZSwgUExBWUdST1VORC5FdmVudHMucHJvdG90eXBlKTtcblxuLyogZmlsZTogc3JjL1NvdW5kLmpzICovXG5cblBMQVlHUk9VTkQuU291bmQgPSBmdW5jdGlvbihhcHApIHtcblxuICB2YXIgYXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0IHx8IHdpbmRvdy5tb3pBdWRpb0NvbnRleHQ7XG5cbiAgaWYgKGF1ZGlvQ29udGV4dCkge1xuXG4gICAgaWYgKCFQTEFZR1JPVU5ELmF1ZGlvQ29udGV4dCkgUExBWUdST1VORC5hdWRpb0NvbnRleHQgPSBuZXcgYXVkaW9Db250ZXh0O1xuXG4gICAgYXBwLmF1ZGlvQ29udGV4dCA9IFBMQVlHUk9VTkQuYXVkaW9Db250ZXh0O1xuICAgIGFwcC5zb3VuZCA9IG5ldyBQTEFZR1JPVU5ELlNvdW5kV2ViQXVkaW9BUEkoYXBwLCBhcHAuYXVkaW9Db250ZXh0KTtcbiAgICBhcHAubXVzaWMgPSBuZXcgUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJKGFwcCwgYXBwLmF1ZGlvQ29udGV4dCk7XG5cbiAgfSBlbHNlIHtcblxuICAgIGFwcC5zb3VuZCA9IG5ldyBQTEFZR1JPVU5ELlNvdW5kQXVkaW8oYXBwKTtcbiAgICBhcHAubXVzaWMgPSBuZXcgUExBWUdST1VORC5Tb3VuZEF1ZGlvKGFwcCk7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5wbGF5U291bmQgPSBmdW5jdGlvbihrZXksIGxvb3ApIHtcblxuICByZXR1cm4gdGhpcy5zb3VuZC5wbGF5KGtleSwgbG9vcCk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLnN0b3BTb3VuZCA9IGZ1bmN0aW9uKHNvdW5kKSB7XG5cbiAgdGhpcy5zb3VuZC5zdG9wKHNvdW5kKTtcblxufTtcblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZFNvdW5kID0gZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIHRoaXMubG9hZFNvdW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG59O1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkU291bmRzID0gZnVuY3Rpb24oKSB7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAvKiBwb2x5bW9ycGhpc20gYXQgaXRzIGZpbmVzdCAqL1xuXG4gICAgaWYgKHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgZm9yICh2YXIga2V5IGluIGFyZykgdGhpcy5sb2FkU291bmRzKGFyZ1trZXldKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvdW5kLmxvYWQoYXJnKTtcbiAgICB9XG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1NvdW5kV2ViQXVkaW9BUEkuanMgKi9cblxuUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJID0gZnVuY3Rpb24oYXBwLCBhdWRpb0NvbnRleHQpIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICB2YXIgY2FuUGxheU1wMyA9IChuZXcgQXVkaW8pLmNhblBsYXlUeXBlKFwiYXVkaW8vbXAzXCIpO1xuICB2YXIgY2FuUGxheU9nZyA9IChuZXcgQXVkaW8pLmNhblBsYXlUeXBlKCdhdWRpby9vZ2c7IGNvZGVjcz1cInZvcmJpc1wiJyk7XG5cbiAgaWYgKHRoaXMuYXBwLnByZWZlcmVkQXVkaW9Gb3JtYXQgPT09IFwibXAzXCIpIHtcblxuICAgIGlmIChjYW5QbGF5TXAzKSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcbiAgICBlbHNlIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBpZiAoY2FuUGxheU9nZykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwib2dnXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcblxuICB9XG5cbiAgdGhpcy5jb250ZXh0ID0gYXVkaW9Db250ZXh0O1xuXG4gIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpXG4gIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gIHRoaXMuY29tcHJlc3NvciA9IHRoaXMuY29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgdGhpcy5jb21wcmVzc29yLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG5cbiAgdGhpcy5vdXRwdXQgPSB0aGlzLmdhaW5Ob2RlO1xuXG4gIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDEuMDtcblxuICB0aGlzLnBvb2wgPSBbXTtcbiAgdGhpcy52b2x1bWUgPSAxLjA7XG5cbiAgdGhpcy5zZXRNYXN0ZXJQb3NpdGlvbigwLCAwLCAwKTtcblxuICB0aGlzLmxvb3BzID0gW107XG5cbiAgdGhpcy5hcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5Tb3VuZFdlYkF1ZGlvQVBJLnByb3RvdHlwZSA9IHtcblxuICBidWZmZXJzOiB7fSxcbiAgYWxpYXNlczoge30sXG5cbiAgYWxpYXM6IGZ1bmN0aW9uKGFsaWFzLCBzb3VyY2UsIHZvbHVtZSwgcmF0ZSkge1xuXG4gICAgdGhpcy5hbGlhc2VzW2FsaWFzXSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgICByYXRlOiByYXRlXG4gICAgfTtcblxuICB9LFxuXG4gIHNldE1hc3RlcjogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHZvbHVtZTtcblxuICB9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGZpbGUpIHtcblxuICAgIHZhciBlbnRyeSA9IHRoaXMuYXBwLmdldEFzc2V0RW50cnkoZmlsZSwgXCJzb3VuZHNcIiwgdGhpcy5hdWRpb0Zvcm1hdCk7XG5cbiAgICB2YXIgc2FtcGxlciA9IHRoaXM7XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVudHJ5LnVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG5cbiAgICB2YXIgaWQgPSB0aGlzLmFwcC5sb2FkZXIuYWRkKGVudHJ5LnVybCk7XG5cbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBzYW1wbGVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHRoaXMucmVzcG9uc2UsIGZ1bmN0aW9uKGRlY29kZWRCdWZmZXIpIHtcbiAgICAgICAgc2FtcGxlci5idWZmZXJzW2VudHJ5LmtleV0gPSBkZWNvZGVkQnVmZmVyO1xuICAgICAgICBzYW1wbGVyLmFwcC5sb2FkZXIuc3VjY2VzcyhlbnRyeS51cmwpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXF1ZXN0LnNlbmQoKTtcblxuICB9LFxuXG4gIGNsZWFuQXJyYXk6IGZ1bmN0aW9uKGFycmF5LCBwcm9wZXJ0eSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldID09PSBudWxsIHx8IChwcm9wZXJ0eSAmJiBhcnJheVtpXVtwcm9wZXJ0eV0pKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2V0TWFzdGVyUG9zaXRpb246IGZ1bmN0aW9uKHgsIHksIHopIHtcblxuICAgIHRoaXMubWFzdGVyUG9zaXRpb24gPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHo6IHpcbiAgICB9O1xuXG4gICAgdGhpcy5jb250ZXh0Lmxpc3RlbmVyLnNldFBvc2l0aW9uKHgsIHksIHopXG4gICAgICAvLyB0aGlzLmNvbnRleHQubGlzdGVuZXIuc2V0T3JpZW50YXRpb24oMCwgMCwgLTEsIDAsIDEsIDApO1xuICAgICAgLy8gdGhpcy5jb250ZXh0Lmxpc3RlbmVyLmRvcHBsZXJGYWN0b3IgPSAxO1xuICAgICAgLy8gdGhpcy5jb250ZXh0Lmxpc3RlbmVyLnNwZWVkT2ZTb3VuZCA9IDM0My4zO1xuICB9LFxuXG4gIGdldFNvdW5kQnVmZmVyOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucG9vbC5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcblxuICAgICAgICB2YXIgYnVmZmVyLCBnYWluLCBwYW5uZXI7XG5cbiAgICAgICAgdmFyIG5vZGVzID0gW1xuICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuY29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKSxcbiAgICAgICAgICBnYWluID0gdGhpcy5jb250ZXh0LmNyZWF0ZUdhaW4oKSxcbiAgICAgICAgICBwYW5uZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlUGFubmVyKClcbiAgICAgICAgXTtcblxuICAgICAgICBwYW5uZXIuZGlzdGFuY2VNb2RlbCA9IFwibGluZWFyXCI7XG5cbiAgICAgICAgLy8gMSAtIHJvbGxvZmZGYWN0b3IgKiAoZGlzdGFuY2UgLSByZWZEaXN0YW5jZSkgLyAobWF4RGlzdGFuY2UgLSByZWZEaXN0YW5jZSlcbiAgICAgICAgLy8gcmVmRGlzdGFuY2UgLyAocmVmRGlzdGFuY2UgKyByb2xsb2ZmRmFjdG9yICogKGRpc3RhbmNlIC0gcmVmRGlzdGFuY2UpKVxuICAgICAgICBwYW5uZXIucmVmRGlzdGFuY2UgPSAxO1xuICAgICAgICBwYW5uZXIubWF4RGlzdGFuY2UgPSA2MDA7XG4gICAgICAgIHBhbm5lci5yb2xsb2ZmRmFjdG9yID0gMS4wO1xuXG5cbiAgICAgICAgLy8gcGFubmVyLnNldE9yaWVudGF0aW9uKC0xLCAtMSwgMCk7XG5cbiAgICAgICAgdGhpcy5wb29sLnB1c2gobm9kZXMpO1xuXG4gICAgICAgIG5vZGVzWzBdLmNvbm5lY3Qobm9kZXNbMV0pO1xuICAgICAgICAvLyBub2Rlc1sxXS5jb25uZWN0KG5vZGVzWzJdKTtcbiAgICAgICAgbm9kZXNbMV0uY29ubmVjdCh0aGlzLm91dHB1dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucG9vbC5wb3AoKTtcbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbihuYW1lLCBsb29wKSB7XG5cbiAgICB2YXIgYWxpYXMgPSB0aGlzLmFsaWFzZXNbbmFtZV07XG5cbiAgICB2YXIgbm9kZXMgPSB0aGlzLmdldFNvdW5kQnVmZmVyKCk7XG5cbiAgICBpZiAoYWxpYXMpIG5hbWUgPSBhbGlhcy5zb3VyY2U7XG5cbiAgICBidWZmZXJTb3VyY2UgPSBub2Rlc1swXTtcbiAgICBidWZmZXJTb3VyY2UuZ2Fpbk5vZGUgPSBub2Rlc1sxXTtcbiAgICBidWZmZXJTb3VyY2UucGFubmVyTm9kZSA9IG5vZGVzWzJdO1xuICAgIGJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcnNbbmFtZV07XG4gICAgYnVmZmVyU291cmNlLmxvb3AgPSBsb29wIHx8IGZhbHNlO1xuICAgIGJ1ZmZlclNvdXJjZS5rZXkgPSBuYW1lO1xuXG4gICAgYnVmZmVyU291cmNlLmFsaWFzID0gYWxpYXM7XG5cbiAgICB0aGlzLnNldFZvbHVtZShidWZmZXJTb3VyY2UsIDEuMCk7XG4gICAgdGhpcy5zZXRQbGF5YmFja1JhdGUoYnVmZmVyU291cmNlLCAxLjApO1xuXG4gICAgaWYgKHRoaXMubG9vcCkge1xuICAgICAgLy8gIGJ1ZmZlclNvdXJjZS5sb29wU3RhcnQgPSB0aGlzLmxvb3BTdGFydDtcbiAgICAgIC8vIGJ1ZmZlclNvdXJjZS5sb29wRW5kID0gdGhpcy5sb29wRW5kO1xuICAgIH1cblxuXG4gICAgYnVmZmVyU291cmNlLnN0YXJ0KDApO1xuXG4gICAgYnVmZmVyU291cmNlLnZvbHVtZUxpbWl0ID0gMTtcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oYnVmZmVyU291cmNlLCB0aGlzLm1hc3RlclBvc2l0aW9uLngsIHRoaXMubWFzdGVyUG9zaXRpb24ueSwgdGhpcy5tYXN0ZXJQb3NpdGlvbi56KTtcblxuICAgIHJldHVybiBidWZmZXJTb3VyY2U7XG4gIH0sXG5cbiAgc3RvcDogZnVuY3Rpb24od2hhdCkge1xuXG4gICAgaWYgKCF3aGF0KSByZXR1cm47XG5cbiAgICB3aGF0LnN0b3AoMCk7XG5cbiAgfSxcblxuICBzZXRQbGF5YmFja1JhdGU6IGZ1bmN0aW9uKHNvdW5kLCByYXRlKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBpZiAoc291bmQuYWxpYXMpIHJhdGUgKj0gc291bmQuYWxpYXMucmF0ZTtcblxuICAgIHJldHVybiBzb3VuZC5wbGF5YmFja1JhdGUudmFsdWUgPSByYXRlO1xuICB9LFxuXG4gIHNldFBvc2l0aW9uOiBmdW5jdGlvbihzb3VuZCwgeCwgeSwgeikge1xuXG4gICAgaWYgKCFzb3VuZCkgcmV0dXJuO1xuXG4gICAgc291bmQucGFubmVyTm9kZS5zZXRQb3NpdGlvbih4LCB5IHx8IDAsIHogfHwgMCk7XG4gIH0sXG5cbiAgc2V0VmVsb2NpdHk6IGZ1bmN0aW9uKHNvdW5kLCB4LCB5LCB6KSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBzb3VuZC5wYW5uZXJOb2RlLnNldFBvc2l0aW9uKHgsIHkgfHwgMCwgeiB8fCAwKTtcblxuICB9LFxuXG4gIGdldFZvbHVtZTogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHJldHVybiBzb3VuZC5nYWluTm9kZS5nYWluLnZhbHVlO1xuXG4gIH0sXG5cbiAgc2V0Vm9sdW1lOiBmdW5jdGlvbihzb3VuZCwgdm9sdW1lKSB7XG5cbiAgICBpZiAoIXNvdW5kKSByZXR1cm47XG5cbiAgICBpZiAoc291bmQuYWxpYXMpIHZvbHVtZSAqPSBzb3VuZC5hbGlhcy52b2x1bWU7XG5cbiAgICByZXR1cm4gc291bmQuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IE1hdGgubWF4KDAsIHZvbHVtZSk7XG4gIH0sXG5cbiAgZmFkZU91dDogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHNvdW5kLmZhZGVPdXQgPSB0cnVlO1xuXG4gICAgdGhpcy5sb29wcy5wdXNoKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIGZhZGVJbjogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIGlmICghc291bmQpIHJldHVybjtcblxuICAgIHNvdW5kLmZhZGVJbiA9IHRydWU7XG5cbiAgICB0aGlzLmxvb3BzLnB1c2goc291bmQpO1xuICAgIHRoaXMuc2V0Vm9sdW1lKHNvdW5kLCAwKTtcblxuXG4gICAgcmV0dXJuIHNvdW5kO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sb29wcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgbG9vcCA9IHRoaXMubG9vcHNbaV07XG5cbiAgICAgIGlmIChsb29wLmZhZGVJbikge1xuICAgICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWUobG9vcCk7XG4gICAgICAgIHZvbHVtZSA9IHRoaXMuc2V0Vm9sdW1lKGxvb3AsIE1hdGgubWluKDEuMCwgdm9sdW1lICsgZGVsdGEgKiAwLjUpKTtcblxuICAgICAgICBpZiAodm9sdW1lID49IDEuMCkge1xuICAgICAgICAgIHRoaXMubG9vcHMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGxvb3AuZmFkZU91dCkge1xuICAgICAgICB2YXIgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWUobG9vcCk7XG4gICAgICAgIHZvbHVtZSA9IHRoaXMuc2V0Vm9sdW1lKGxvb3AsIE1hdGgubWluKDEuMCwgdm9sdW1lIC0gZGVsdGEgKiAwLjUpKTtcblxuICAgICAgICBpZiAodm9sdW1lIDw9IDApIHtcbiAgICAgICAgICB0aGlzLmxvb3BzLnNwbGljZShpLS0sIDEpO1xuICAgICAgICAgIHRoaXMuc3RvcChsb29wKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1NvdW5kQXVkaW8uanMgKi9cblxuUExBWUdST1VORC5Tb3VuZEF1ZGlvID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgdmFyIGNhblBsYXlNcDMgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZShcImF1ZGlvL21wM1wiKTtcbiAgdmFyIGNhblBsYXlPZ2cgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpO1xuXG4gIGlmICh0aGlzLmFwcC5wcmVmZXJlZEF1ZGlvRm9ybWF0ID09PSBcIm1wM1wiKSB7XG5cbiAgICBpZiAoY2FuUGxheU1wMykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJvZ2dcIjtcblxuICB9IGVsc2Uge1xuXG4gICAgaWYgKGNhblBsYXlPZ2cpIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuICAgIGVsc2UgdGhpcy5hdWRpb0Zvcm1hdCA9IFwibXAzXCI7XG5cbiAgfVxuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kQXVkaW8ucHJvdG90eXBlID0ge1xuXG4gIHNhbXBsZXM6IHt9LFxuXG4gIHNldE1hc3RlcjogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB0aGlzLnZvbHVtZSA9IHZvbHVtZTtcblxuICB9LFxuXG4gIHNldE1hc3RlclBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHNldFBvc2l0aW9uOiBmdW5jdGlvbih4LCB5LCB6KSB7XG4gICAgcmV0dXJuO1xuICB9LFxuXG4gIGxvYWQ6IGZ1bmN0aW9uKGZpbGUpIHtcblxuICAgIHZhciB1cmwgPSBcInNvdW5kcy9cIiArIGZpbGUgKyBcIi5cIiArIHRoaXMuYXVkaW9Gb3JtYXQ7XG5cbiAgICB2YXIgbG9hZGVyID0gdGhpcy5hcHAubG9hZGVyO1xuXG4gICAgdGhpcy5hcHAubG9hZGVyLmFkZCh1cmwpO1xuXG4gICAgdmFyIGF1ZGlvID0gdGhpcy5zYW1wbGVzW2ZpbGVdID0gbmV3IEF1ZGlvO1xuXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICBsb2FkZXIuc3VjY2Vzcyh1cmwpO1xuICAgIH0pO1xuXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgbG9hZGVyLmVycm9yKHVybCk7XG4gICAgfSk7XG5cbiAgICBhdWRpby5zcmMgPSB1cmw7XG5cbiAgfSxcblxuICBwbGF5OiBmdW5jdGlvbihrZXksIGxvb3ApIHtcblxuICAgIHZhciBzb3VuZCA9IHRoaXMuc2FtcGxlc1trZXldO1xuXG4gICAgc291bmQuY3VycmVudFRpbWUgPSAwO1xuICAgIHNvdW5kLmxvb3AgPSBsb29wO1xuICAgIHNvdW5kLnBsYXkoKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKHdoYXQpIHtcblxuICAgIGlmICghd2hhdCkgcmV0dXJuO1xuXG4gICAgd2hhdC5wYXVzZSgpO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICB9LFxuXG4gIHNldFBsYXliYWNrUmF0ZTogZnVuY3Rpb24oc291bmQsIHJhdGUpIHtcblxuICAgIHJldHVybjtcbiAgfSxcblxuICBzZXRWb2x1bWU6IGZ1bmN0aW9uKHNvdW5kLCB2b2x1bWUpIHtcblxuICAgIHNvdW5kLnZvbHVtZSA9IHZvbHVtZSAqIHRoaXMudm9sdW1lO1xuXG4gIH0sXG5cbiAgc2V0UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL1RvdWNoLmpzICovXG5cblBMQVlHUk9VTkQuVG91Y2ggPSBmdW5jdGlvbihhcHAsIGVsZW1lbnQpIHtcblxuICBQTEFZR1JPVU5ELkV2ZW50cy5jYWxsKHRoaXMpO1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgdGhpcy5idXR0b25zID0ge307XG5cbiAgdGhpcy50b3VjaGVzID0ge307XG5cbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUuYmluZCh0aGlzKSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0LmJpbmQodGhpcykpO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLnRvdWNoZW5kLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlRvdWNoLnByb3RvdHlwZSA9IHtcblxuICBnZXRFbGVtZW50T2Zmc2V0OiBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgdmFyIG9mZnNldFkgPSAwO1xuXG4gICAgZG8ge1xuICAgICAgb2Zmc2V0WCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICBvZmZzZXRZICs9IGVsZW1lbnQub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogb2Zmc2V0WCxcbiAgICAgIHk6IG9mZnNldFlcbiAgICB9O1xuXG4gIH0sXG5cbiAgaGFuZGxlUmVzaXplOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZWxlbWVudE9mZnNldCA9IHRoaXMuZ2V0RWxlbWVudE9mZnNldCh0aGlzLmVsZW1lbnQpO1xuXG4gIH0sXG5cbiAgdG91Y2htb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1tpXTtcblxuICAgICAgdG91Y2htb3ZlRXZlbnQgPSB7fVxuXG4gICAgICB0aGlzLnggPSB0b3VjaG1vdmVFdmVudC54ID0gKHRvdWNoLnBhZ2VYIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnggLSB0aGlzLmFwcC5vZmZzZXRYKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcbiAgICAgIHRoaXMueSA9IHRvdWNobW92ZUV2ZW50LnkgPSAodG91Y2gucGFnZVkgLSB0aGlzLmVsZW1lbnRPZmZzZXQueSAtIHRoaXMuYXBwLm9mZnNldFkpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuXG4gICAgICB0b3VjaG1vdmVFdmVudC5vcmlnaW5hbCA9IHRvdWNoO1xuICAgICAgdG91Y2htb3ZlRXZlbnQuaWQgPSB0b3VjaG1vdmVFdmVudC5pZGVudGlmaWVyID0gdG91Y2guaWRlbnRpZmllcjtcblxuICAgICAgdGhpcy50b3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdLnggPSB0b3VjaG1vdmVFdmVudC54O1xuICAgICAgdGhpcy50b3VjaGVzW3RvdWNoLmlkZW50aWZpZXJdLnkgPSB0b3VjaG1vdmVFdmVudC55O1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2htb3ZlRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH0sXG5cbiAgdG91Y2hzdGFydDogZnVuY3Rpb24oZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG5cbiAgICAgIHZhciB0b3VjaHN0YXJ0RXZlbnQgPSB7fVxuXG4gICAgICB0aGlzLnggPSB0b3VjaHN0YXJ0RXZlbnQueCA9ICh0b3VjaC5wYWdlWCAtIHRoaXMuZWxlbWVudE9mZnNldC54IC0gdGhpcy5hcHAub2Zmc2V0WCkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG4gICAgICB0aGlzLnkgPSB0b3VjaHN0YXJ0RXZlbnQueSA9ICh0b3VjaC5wYWdlWSAtIHRoaXMuZWxlbWVudE9mZnNldC55IC0gdGhpcy5hcHAub2Zmc2V0WSkgLyB0aGlzLmFwcC5zY2FsZSB8IDA7XG5cbiAgICAgIHRvdWNoc3RhcnRFdmVudC5vcmlnaW5hbCA9IGUudG91Y2g7XG4gICAgICB0b3VjaHN0YXJ0RXZlbnQuaWQgPSB0b3VjaHN0YXJ0RXZlbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cbiAgICAgIHRoaXMudG91Y2hlc1t0b3VjaC5pZGVudGlmaWVyXSA9IHtcbiAgICAgICAgeDogdG91Y2hzdGFydEV2ZW50LngsXG4gICAgICAgIHk6IHRvdWNoc3RhcnRFdmVudC55XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRyaWdnZXIoXCJ0b3VjaHN0YXJ0XCIsIHRvdWNoc3RhcnRFdmVudCk7XG5cbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgfSxcblxuICB0b3VjaGVuZDogZnVuY3Rpb24oZSkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlLmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICB2YXIgdG91Y2hlbmRFdmVudCA9IHt9O1xuXG4gICAgICB0b3VjaGVuZEV2ZW50LnggPSAodG91Y2gucGFnZVggLSB0aGlzLmVsZW1lbnRPZmZzZXQueCAtIHRoaXMuYXBwLm9mZnNldFgpIC8gdGhpcy5hcHAuc2NhbGUgfCAwO1xuICAgICAgdG91Y2hlbmRFdmVudC55ID0gKHRvdWNoLnBhZ2VZIC0gdGhpcy5lbGVtZW50T2Zmc2V0LnkgLSB0aGlzLmFwcC5vZmZzZXRZKSAvIHRoaXMuYXBwLnNjYWxlIHwgMDtcblxuICAgICAgdG91Y2hlbmRFdmVudC5vcmlnaW5hbCA9IHRvdWNoO1xuICAgICAgdG91Y2hlbmRFdmVudC5pZCA9IHRvdWNoZW5kRXZlbnQuaWRlbnRpZmllciA9IHRvdWNoLmlkZW50aWZpZXI7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLnRvdWNoZXNbdG91Y2guaWRlbnRpZmllcl07XG5cbiAgICAgIHRoaXMudHJpZ2dlcihcInRvdWNoZW5kXCIsIHRvdWNoZW5kRXZlbnQpO1xuXG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5VdGlscy5leHRlbmQoUExBWUdST1VORC5Ub3VjaC5wcm90b3R5cGUsIFBMQVlHUk9VTkQuRXZlbnRzLnByb3RvdHlwZSk7XG5cbi8qIGZpbGU6IHNyYy9Ud2Vlbi5qcyAqL1xuXG5QTEFZR1JPVU5ELlR3ZWVuID0gZnVuY3Rpb24obWFuYWdlciwgY29udGV4dCkge1xuXG4gIFBMQVlHUk9VTkQuRXZlbnRzLmNhbGwodGhpcyk7XG5cbiAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICBQTEFZR1JPVU5ELlV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBhY3Rpb25zOiBbXSxcbiAgICBpbmRleDogLTEsXG5cbiAgICBwcmV2RWFzaW5nOiBcIjA0NVwiLFxuICAgIHByZXZEdXJhdGlvbjogMC41XG5cbiAgfSk7XG5cbiAgdGhpcy5jdXJyZW50ID0gZmFsc2U7XG5cbn07XG5cblBMQVlHUk9VTkQuVHdlZW4ucHJvdG90eXBlID0ge1xuXG4gIGFkZDogZnVuY3Rpb24ocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2luZykge1xuXG4gICAgaWYgKGR1cmF0aW9uKSB0aGlzLnByZXZEdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgIGVsc2UgZHVyYXRpb24gPSAwLjU7XG4gICAgaWYgKGVhc2luZykgdGhpcy5wcmV2RWFzaW5nID0gZWFzaW5nO1xuICAgIGVsc2UgZWFzaW5nID0gXCIwNDVcIjtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKFtwcm9wZXJ0aWVzLCBkdXJhdGlvbiwgZWFzaW5nXSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGRpc2NhcmQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5tYW5hZ2VyLmRpc2NhcmQodGhpcy5jb250ZXh0LCB0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgdG86IGZ1bmN0aW9uKHByb3BlcnRpZXMsIGR1cmF0aW9uLCBlYXNpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hZGQocHJvcGVydGllcywgZHVyYXRpb24sIGVhc2luZyk7XG4gIH0sXG5cbiAgbG9vcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvb3BlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHJlcGVhdDogZnVuY3Rpb24odGltZXMpIHtcblxuICAgIHRoaXMuYWN0aW9ucy5wdXNoKFtcInJlcGVhdFwiLCB0aW1lc10pO1xuXG4gIH0sXG5cbiAgd2FpdDogZnVuY3Rpb24odGltZSkge1xuXG4gICAgdGhpcy5hY3Rpb25zLnB1c2goW1wid2FpdFwiLCB0aW1lXSk7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGRlbGF5OiBmdW5jdGlvbih0aW1lKSB7XG5cbiAgICB0aGlzLmFjdGlvbnMucHVzaChbXCJ3YWl0XCIsIHRpbWVdKTtcblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5tYW5hZ2VyLnJlbW92ZSh0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgcGxheTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLm1hbmFnZXIuYWRkKHRoaXMpO1xuXG4gICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuXG4gIGVuZDogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGFzdEFuaW1hdGlvbkluZGV4ID0gMDtcblxuICAgIGZvciAodmFyIGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHRoaXMuYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmFjdGlvbnNbaV1bMF0gPT09IFwib2JqZWN0XCIpIGxhc3RBbmltYXRpb25JbmRleCA9IGk7XG4gICAgfVxuXG4gICAgdGhpcy5pbmRleCA9IGxhc3RBbmltYXRpb25JbmRleCAtIDE7XG4gICAgdGhpcy5uZXh0KCk7XG4gICAgdGhpcy5kZWx0YSA9IHRoaXMuZHVyYXRpb247XG4gICAgdGhpcy5zdGVwKDApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICBmb3J3YXJkOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVsdGEgPSB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RlcCgwKTtcblxuICB9LFxuXG4gIHJld2luZDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmRlbHRhID0gMDtcbiAgICB0aGlzLnN0ZXAoMCk7XG5cbiAgfSxcblxuICBuZXh0OiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVsdGEgPSAwO1xuXG4gICAgdGhpcy5pbmRleCsrO1xuXG4gICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5hY3Rpb25zLmxlbmd0aCkge1xuXG4gICAgICBpZiAodGhpcy5sb29wZWQpIHtcblxuICAgICAgICB0aGlzLnRyaWdnZXIoXCJsb29wXCIsIHtcbiAgICAgICAgICB0d2VlbjogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKFwiZmluaXNoZWRcIiwge1xuICAgICAgICAgIHR3ZWVuOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hbmFnZXIucmVtb3ZlKHRoaXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5hY3Rpb25zW3RoaXMuaW5kZXhdO1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFswXSA9PT0gXCJ3YWl0XCIpIHtcblxuICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuY3VycmVudFsxXTtcbiAgICAgIHRoaXMuY3VycmVudEFjdGlvbiA9IFwid2FpdFwiO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogY2FsY3VsYXRlIGNoYW5nZXMgKi9cblxuICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmN1cnJlbnRbMF07XG5cbiAgICAgIC8qIGtlZXAga2V5cyBhcyBhcnJheSBmb3IgMC4wMDAxJSBwZXJmb3JtYW5jZSBib29zdCAqL1xuXG4gICAgICB0aGlzLmtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKTtcblxuICAgICAgdGhpcy5jaGFuZ2UgPSBbXTtcbiAgICAgIHRoaXMuYmVmb3JlID0gW107XG4gICAgICB0aGlzLnR5cGVzID0gW107XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMua2V5c1tpXTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29udGV4dFtrZXldID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgdGhpcy5iZWZvcmUucHVzaCh0aGlzLmNvbnRleHRba2V5XSk7XG4gICAgICAgICAgdGhpcy5jaGFuZ2UucHVzaChwcm9wZXJ0aWVzW2tleV0gLSB0aGlzLmNvbnRleHRba2V5XSk7XG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBiZWZvcmUgPSBjcS5jb2xvcih0aGlzLmNvbnRleHRba2V5XSk7XG5cbiAgICAgICAgICB0aGlzLmJlZm9yZS5wdXNoKGJlZm9yZSk7XG5cbiAgICAgICAgICB2YXIgYWZ0ZXIgPSBjcS5jb2xvcihwcm9wZXJ0aWVzW2tleV0pO1xuXG4gICAgICAgICAgdmFyIHRlbXAgPSBbXTtcblxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgMzsgaisrKSB7XG4gICAgICAgICAgICB0ZW1wLnB1c2goYWZ0ZXJbal0gLSBiZWZvcmVbal0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY2hhbmdlLnB1c2godGVtcCk7XG5cbiAgICAgICAgICB0aGlzLnR5cGVzLnB1c2goMSk7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRBY3Rpb24gPSBcImFuaW1hdGVcIjtcblxuICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuY3VycmVudFsxXTtcbiAgICAgIHRoaXMuZWFzaW5nID0gdGhpcy5jdXJyZW50WzJdO1xuXG4gICAgfVxuXG5cbiAgfSxcblxuICBwcmV2OiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICB0aGlzLmRlbHRhICs9IGRlbHRhO1xuXG4gICAgaWYgKCF0aGlzLmN1cnJlbnQpIHRoaXMubmV4dCgpO1xuXG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRBY3Rpb24pIHtcblxuICAgICAgY2FzZSBcImFuaW1hdGVcIjpcbiAgICAgICAgdGhpcy5kb0FuaW1hdGUoZGVsdGEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIndhaXRcIjpcbiAgICAgICAgdGhpcy5kb1dhaXQoZGVsdGEpO1xuICAgICAgICBicmVhaztcblxuICAgIH1cblxuICAgIGlmICh0aGlzLm9uc3RlcCkgdGhpcy5vbnN0ZXAodGhpcy5jb250ZXh0KTtcblxuICB9LFxuXG4gIGRvQW5pbWF0ZTogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbigxLCB0aGlzLmRlbHRhIC8gdGhpcy5kdXJhdGlvbik7XG5cbiAgICB2YXIgbW9kID0gUExBWUdST1VORC5VdGlscy5lYXNlKHRoaXMucHJvZ3Jlc3MsIHRoaXMuZWFzaW5nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rZXlzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSB0aGlzLmtleXNbaV07XG5cbiAgICAgIHN3aXRjaCAodGhpcy50eXBlc1tpXSkge1xuXG4gICAgICAgIC8qIG51bWJlciAqL1xuXG4gICAgICAgIGNhc2UgMDpcblxuICAgICAgICAgIHRoaXMuY29udGV4dFtrZXldID0gdGhpcy5iZWZvcmVbaV0gKyB0aGlzLmNoYW5nZVtpXSAqIG1vZDtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgLyogY29sb3IgKi9cblxuICAgICAgICBjYXNlIDE6XG5cbiAgICAgICAgICB2YXIgY2hhbmdlID0gdGhpcy5jaGFuZ2VbaV07XG4gICAgICAgICAgdmFyIGJlZm9yZSA9IHRoaXMuYmVmb3JlW2ldO1xuICAgICAgICAgIHZhciBjb2xvciA9IFtdO1xuXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICAgICAgICAgIGNvbG9yLnB1c2goYmVmb3JlW2pdICsgY2hhbmdlW2pdICogbW9kIHwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5jb250ZXh0W2tleV0gPSBcInJnYihcIiArIGNvbG9yLmpvaW4oXCIsXCIpICsgXCIpXCI7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxKSB7XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICB9XG5cbiAgfSxcblxuICBkb1dhaXQ6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5kZWx0YSA+PSB0aGlzLmR1cmF0aW9uKSB0aGlzLm5leHQoKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuVXRpbHMuZXh0ZW5kKFBMQVlHUk9VTkQuVHdlZW4ucHJvdG90eXBlLCBQTEFZR1JPVU5ELkV2ZW50cy5wcm90b3R5cGUpO1xuXG5QTEFZR1JPVU5ELlR3ZWVuTWFuYWdlciA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gIHRoaXMudHdlZW5zID0gW107XG5cbiAgaWYgKGFwcCkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuYXBwLnR3ZWVuID0gdGhpcy50d2Vlbi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdGhpcy5kZWx0YSA9IDA7XG5cbiAgdGhpcy5hcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxufTtcblxuUExBWUdST1VORC5Ud2Vlbk1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gIGRlZmF1bHRFYXNpbmc6IFwiMTI4XCIsXG5cbiAgZGlzY2FyZDogZnVuY3Rpb24ob2JqZWN0LCBzYWZlKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudHdlZW5zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciB0d2VlbiA9IHRoaXMudHdlZW5zW2ldO1xuXG4gICAgICBpZiAodHdlZW4uY29udGV4dCA9PT0gb2JqZWN0ICYmIHR3ZWVuICE9PSBzYWZlKSB0aGlzLnJlbW92ZSh0d2Vlbik7XG5cbiAgICB9XG5cbiAgfSxcblxuICB0d2VlbjogZnVuY3Rpb24oY29udGV4dCkge1xuXG4gICAgdmFyIHR3ZWVuID0gbmV3IFBMQVlHUk9VTkQuVHdlZW4odGhpcywgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZCh0d2Vlbik7XG5cbiAgICByZXR1cm4gdHdlZW47XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgdGhpcy5kZWx0YSArPSBkZWx0YTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50d2VlbnMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHR3ZWVuID0gdGhpcy50d2VlbnNbaV07XG5cbiAgICAgIGlmICghdHdlZW4uX3JlbW92ZSkgdHdlZW4uc3RlcChkZWx0YSk7XG5cbiAgICAgIGlmICh0d2Vlbi5fcmVtb3ZlKSB0aGlzLnR3ZWVucy5zcGxpY2UoaS0tLCAxKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGFkZDogZnVuY3Rpb24odHdlZW4pIHtcblxuICAgIHR3ZWVuLl9yZW1vdmUgPSBmYWxzZTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMudHdlZW5zLmluZGV4T2YodHdlZW4pO1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkgdGhpcy50d2VlbnMucHVzaCh0d2Vlbik7XG5cbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uKHR3ZWVuKSB7XG5cbiAgICB0d2Vlbi5fcmVtb3ZlID0gdHJ1ZTtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9WaWRlb1JlY29yZGVyLmpzICovXG5cbi8qIFZpZGVvIHJlY29yZGVyICovXG5cblBMQVlHUk9VTkQuVmlkZW9SZWNvcmRlciA9IGZ1bmN0aW9uKGFwcCwgYXJncykge1xuXG4gIHRoaXMuYXBwID0gYXBwO1xuXG4gIHRoaXMuYXBwLm9uKFwic3RlcFwiLCB0aGlzLnN0ZXAuYmluZCh0aGlzKSk7XG5cbn07XG5cblBMQVlHUk9VTkQuVmlkZW9SZWNvcmRlci5wcm90b3R5cGUgPSB7XG5cbiAgc2V0dXA6IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICAgIHRoaXMucmVnaW9uID0gZmFsc2U7XG5cbiAgICBQTEFZR1JPVU5ELlV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgICBmb2xsb3dNb3VzZTogZmFsc2UsXG4gICAgICBmcmFtZXJhdGU6IDIwLFxuICAgICAgc2NhbGU6IDEuMFxuICAgIH0sIGFyZ3MpO1xuXG4gICAgaWYgKCF0aGlzLnJlZ2lvbikge1xuICAgICAgdGhpcy5yZWdpb24gPSBbMCwgMCwgdGhpcy5hcHAubGF5ZXIud2lkdGgsIHRoaXMuYXBwLmxheWVyLmhlaWdodF07XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5YmFja1JhdGUgPSB0aGlzLmZyYW1lcmF0ZSAvIDYwO1xuXG4gICAgdGhpcy5sYXllciA9IGNxKHRoaXMucmVnaW9uWzJdICogdGhpcy5zY2FsZSB8IDAsIHRoaXMucmVnaW9uWzNdICogdGhpcy5zY2FsZSB8IDApO1xuICB9LFxuXG4gIHN0YXJ0OiBmdW5jdGlvbihhcmdzKSB7XG4gICAgdGhpcy5zZXR1cChhcmdzKTtcbiAgICB0aGlzLmVuY29kZXIgPSBuZXcgV2hhbW15LlZpZGVvKHRoaXMuZnJhbWVyYXRlKTtcbiAgICB0aGlzLmNhcHR1cmVUaW1lb3V0ID0gMDtcbiAgICB0aGlzLnJlY29yZGluZyA9IHRydWU7XG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGlmICh0aGlzLmVuY29kZXIpIHtcblxuICAgICAgdGhpcy5jYXB0dXJlVGltZW91dCAtPSBkZWx0YSAqIDEwMDA7XG5cbiAgICAgIGlmICh0aGlzLmNhcHR1cmVUaW1lb3V0IDw9IDApIHtcbiAgICAgICAgdGhpcy5jYXB0dXJlVGltZW91dCA9IDEwMDAgLyB0aGlzLmZyYW1lcmF0ZSArIHRoaXMuY2FwdHVyZVRpbWVvdXQ7XG5cbiAgICAgICAgdGhpcy5sYXllci5kcmF3SW1hZ2UodGhpcy5hcHAubGF5ZXIuY2FudmFzLCB0aGlzLnJlZ2lvblswXSwgdGhpcy5yZWdpb25bMV0sIHRoaXMucmVnaW9uWzJdLCB0aGlzLnJlZ2lvblszXSwgMCwgMCwgdGhpcy5sYXllci53aWR0aCwgdGhpcy5sYXllci5oZWlnaHQpO1xuICAgICAgICB0aGlzLmVuY29kZXIuYWRkKHRoaXMubGF5ZXIuY2FudmFzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcHAuc2NyZWVuLnNhdmUoKS5saW5lV2lkdGgoOCkuc3Ryb2tlU3R5bGUoXCIjYzAwXCIpLnN0cm9rZVJlY3QoMCwgMCwgdGhpcy5hcHAuc2NyZWVuLndpZHRoLCB0aGlzLmFwcC5zY3JlZW4uaGVpZ2h0KS5yZXN0b3JlKCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmVuY29kZXIpIHJldHVybjtcbiAgICB2YXIgb3V0cHV0ID0gdGhpcy5lbmNvZGVyLmNvbXBpbGUoKTtcbiAgICB2YXIgdXJsID0gKHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93LlVSTCkuY3JlYXRlT2JqZWN0VVJMKG91dHB1dCk7XG4gICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICB0aGlzLnJlY29yZGluZyA9IGZhbHNlO1xuXG4gICAgZGVsZXRlIHRoaXMuZW5jb2RlcjtcbiAgfSxcblxuICB0b2dnbGU6IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICAgIGlmICh0aGlzLmVuY29kZXIpIHRoaXMuc3RvcCgpO1xuICAgIGVsc2UgdGhpcy5zdGFydChhcmdzKTtcblxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLnJlY29yZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICB0aGlzLnZpZGVvUmVjb3JkZXIudG9nZ2xlKGFyZ3MpO1xuXG59O1xuXG4vKiBmaWxlOiBzcmMvQXRsYXNlcy5qcyAqL1xuXG5QTEFZR1JPVU5ELkFwcGxpY2F0aW9uLnByb3RvdHlwZS5sb2FkQXRsYXNlcyA9IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgLyogcG9seW1vcnBoaXNtIGF0IGl0cyBmaW5lc3QgKi9cblxuICAgIGlmICh0eXBlb2YgYXJnID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBhcmcpIHRoaXMubG9hZEF0bGFzZXMoYXJnW2tleV0pO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgLyogaWYgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9hcnJheSBsZXQncyB0cnkgdG8gbG9hZCBpdCAqL1xuXG4gICAgICB0aGlzLl9sb2FkQXRsYXMoYXJnKVxuXG4gICAgfVxuICB9XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLmxvYWRBdGxhcyA9IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiB0aGlzLmxvYWRBdGxhc2VzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbn07XG5cblBMQVlHUk9VTkQuQXBwbGljYXRpb24ucHJvdG90eXBlLl9sb2FkQXRsYXMgPSBmdW5jdGlvbihmaWxlbmFtZSkge1xuXG4gIHZhciBlbnRyeSA9IHRoaXMuZ2V0QXNzZXRFbnRyeShmaWxlbmFtZSwgXCJhdGxhc2VzXCIsIFwicG5nXCIpO1xuXG4gIHRoaXMubG9hZGVyLmFkZChlbnRyeS51cmwpO1xuXG4gIHZhciBhdGxhcyA9IHRoaXMuYXRsYXNlc1tlbnRyeS5rZXldID0ge307XG5cbiAgdmFyIGltYWdlID0gYXRsYXMuaW1hZ2UgPSBuZXcgSW1hZ2U7XG5cbiAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgbG9hZGVyLnN1Y2Nlc3MoZW50cnkudXJsKTtcbiAgfSk7XG5cbiAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uKCkge1xuICAgIGxvYWRlci5lcnJvcihlbnRyeS51cmwpO1xuICB9KTtcblxuICBpbWFnZS5zcmMgPSBlbnRyeS51cmw7XG5cbiAgLyogZGF0YSAqL1xuXG4gIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVudHJ5LnBhdGggKyBcIi5qc29uXCIsIHRydWUpO1xuXG4gIHRoaXMubG9hZGVyLmFkZChlbnRyeS5wYXRoICsgXCIuanNvblwiKTtcblxuICB2YXIgbG9hZGVyID0gdGhpcy5sb2FkZXI7XG5cbiAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlKTtcblxuICAgIGF0bGFzLmZyYW1lcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZyYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZyYW1lID0gZGF0YS5mcmFtZXNbaV07XG5cbiAgICAgIGF0bGFzLmZyYW1lcy5wdXNoKHtcbiAgICAgICAgcmVnaW9uOiBbZnJhbWUuZnJhbWUueCwgZnJhbWUuZnJhbWUueSwgZnJhbWUuZnJhbWUudywgZnJhbWUuZnJhbWUuaF0sXG4gICAgICAgIG9mZnNldDogW2ZyYW1lLnNwcml0ZVNvdXJjZVNpemUueCB8fCAwLCBmcmFtZS5zcHJpdGVTb3VyY2VTaXplLnkgfHwgMF0sXG4gICAgICAgIHdpZHRoOiBmcmFtZS5zb3VyY2VTaXplLncsXG4gICAgICAgIGhlaWdodDogZnJhbWUuc291cmNlU2l6ZS5oXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkZXIuc3VjY2VzcyhlbnRyeS5wYXRoICsgXCIuanNvblwiKTtcblxuICB9XG5cbiAgcmVxdWVzdC5zZW5kKCk7XG59O1xuXG4vKiBmaWxlOiBzcmMvRm9udHMuanMgKi9cblxuUExBWUdST1VORC5BcHBsaWNhdGlvbi5wcm90b3R5cGUubG9hZEZvbnQgPSBmdW5jdGlvbihuYW1lKSB7XG5cbiAgdmFyIHN0eWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGVOb2RlLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cbiAgdmFyIGZvcm1hdHMgPSB7XG4gICAgXCJ3b2ZmXCI6IFwid29mZlwiLFxuICAgIFwidHRmXCI6IFwidHJ1ZXR5cGVcIlxuICB9O1xuXG4gIHZhciBzb3VyY2VzID0gXCJcIjtcblxuICBmb3IgKHZhciBleHQgaW4gZm9ybWF0cykge1xuICAgIHZhciB0eXBlID0gZm9ybWF0c1tleHRdO1xuICAgIHNvdXJjZXMgKz0gXCIgdXJsKFxcXCJmb250cy9cIiArIG5hbWUgKyBcIi5cIiArIGV4dCArIFwiXFxcIikgZm9ybWF0KCdcIiArIHR5cGUgKyBcIicpO1wiXG4gIH1cblxuICBzdHlsZU5vZGUudGV4dENvbnRlbnQgPSBcIkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1wiICsgbmFtZSArIFwiJzsgc3JjOiBcIiArIHNvdXJjZXMgKyBcIiB9XCI7XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZU5vZGUpO1xuXG4gIHZhciBsYXllciA9IGNxKDMyLCAzMik7XG5cbiAgbGF5ZXIuZm9udChcIjEwcHggVGVzdGluZ1wiKTtcbiAgbGF5ZXIuZmlsbFRleHQoMTYsIDE2LCAxNikudHJpbSgpO1xuXG4gIHZhciB3aWR0aCA9IGxheWVyLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gbGF5ZXIuaGVpZ2h0O1xuXG4gIHRoaXMubG9hZGVyLmFkZChcImZvbnQgXCIgKyBuYW1lKTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG5cbiAgICB2YXIgbGF5ZXIgPSBjcSgzMiwgMzIpO1xuXG4gICAgbGF5ZXIuZm9udChcIjEwcHggXCIgKyBuYW1lKS5maWxsVGV4dCgxNiwgMTYsIDE2KTtcbiAgICBsYXllci50cmltKCk7XG5cbiAgICBpZiAobGF5ZXIud2lkdGggIT09IHdpZHRoIHx8IGxheWVyLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG5cbiAgICAgIHNlbGYubG9hZGVyLnJlYWR5KFwiZm9udCBcIiArIG5hbWUpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgc2V0VGltZW91dChjaGVjaywgMjUwKTtcblxuICAgIH1cblxuICB9O1xuXG4gIGNoZWNrKCk7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9EZWZhdWx0U3RhdGUuanMgKi9cblxuUExBWUdST1VORC5EZWZhdWx0U3RhdGUgPSB7XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9Mb2FkaW5nU2NyZWVuLmpzICovXG5cblBMQVlHUk9VTkQuTG9hZGluZ1NjcmVlbiA9IHtcblxuICAvKiBiYXNpYyBsb2FkaW5nIHNjcmVlbiB1c2luZyBET00gKi9cblxuICBsb2dvUmF3OiBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTm9BQUFBU0JBTUFBQURQaU4weEFBQUFHRkJNVkVVQUFRQXRMaXhIU1VkbmFHYUppb2ltcUtYTXpzdjcvZnI1c2hnVkFBQUFBV0pMUjBRQWlBVWRTQUFBQUFsd1NGbHpBQUFMRXdBQUN4TUJBSnFjR0FBQUFBZDBTVTFGQjk4RUF3a2VBNG9RV0o0QUFBQVpkRVZZZEVOdmJXMWxiblFBUTNKbFlYUmxaQ0IzYVhSb0lFZEpUVkJYZ1E0WEFBQUI5a2xFUVZRNHk3MlV2VytyTUJEQXorRnJwVktyckZtZXNtYXBXTk9scktqU2Uxa1ordW9WQXZqKy9mcnVqRzFTYUpjcUp3VTd2b09mN3hNUXpRbXNJRGk1TlBUTXNMUm50SDNVK0Y2U0FabzNObEN2Y2dCRkp6OG8rdmtEaUU2M2xJOTVZL1VtcGluc1pXa2dKV0ppRGJBVlExNmh0cHR4U1RObG9JbHVnd2F3MDAxRXkzQVNGM3NvNkwxcUxOWHpRUzVTMFVHS0wvQ0k1d1dOcmlFMFVIOVl0eTM3THFJVmcrd3NxdTdJeDBNd1ZCU0YvZFUranYyU05ubWEwMjFMRWRQcVZuTWVVM3hBdTBrWGNTR2ptcTdPeDRFMlduODhMWjIrRUZqM2F2aml4emFpNlZQVnl1WXZlWkxIRjJYZmREbnZBcTI3RElIR3VxKzBESkZzRTMwT3RCMUtxT3dkOERyN1BjTTRiK2pmajJnNWxwNFd5bnRCSzY2cXVhM0p6RUErdVhKcHdIL05sVnV6UlZQWS9rVExCMm1qdU4rS3dkWjhGT3k4ajJnRGJFVVNxdW1uU0NZNGxmNGlicTNJaFZNNHljWlFSbnYrekZxVmRKUVZuNkJ4dlVxZWJHcHVhTm8zc1p4d0J6amFqaU1aT29CaXd5VkYra0NyK25VYUpPYUdwbkFlUlBQSlpUcjRGcW1IUlhjbmVFbzREcVEvZnRmZG5MZURyVUFNRTh4V0tQZUtDd1c2WWtFcFhmczNwMUVXSmhkY1VBWVAwVEkvdVlhVjhjZ2p3Qm92YWV5V3dqaTJUOXJURklkUy9jUC9NbmtUTFJVV3hnTk5aVmluN2JUNWZxVDltaURjVVZKelIxZ1JwZklPTk1tdWxVKzVRcXI2elhBVXFBQUFBQUJKUlU1RXJrSmdnZz09XCIsXG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMubG9nbyA9IG5ldyBJbWFnZTtcblxuICAgIHRoaXMubG9nby5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYucmVhZHkgPSB0cnVlO1xuICAgICAgc2VsZi5jcmVhdGVFbGVtZW50cygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2dvLnNyYyA9IHRoaXMubG9nb1JhdztcblxuICAgIHRoaXMuYmFja2dyb3VuZCA9IFwiIzAwMFwiO1xuXG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSB7XG4gICAgICB0aGlzLmJhY2tncm91bmQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5iYWNrZ3JvdW5kQ29sb3IgfHwgXCIjMDAwXCI7XG4gICAgfVxuXG5cbiAgfSxcblxuICBlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwO1xuXG4gIH0sXG5cbiAgbGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmFwcC50d2Vlbih0aGlzKVxuICAgICAgLnRvKHtcbiAgICAgICAgY3VycmVudDogMVxuICAgICAgfSwgMC41KTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5sb2NrZWQpIHtcblxuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLmZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud3JhcHBlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMud3JhcHBlcik7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyBNYXRoLmFicyh0aGlzLmFwcC5sb2FkZXIucHJvZ3Jlc3MgLSB0aGlzLmN1cnJlbnQpICogZGVsdGE7XG4gICAgfVxuXG4gIH0sXG5cbiAgY3JlYXRlRWxlbWVudHM6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC42IHwgMDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMSB8IDA7XG5cbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyBcInB4XCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMud3JhcHBlci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDAwXCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmJvcmRlciA9IFwiNHB4IHNvbGlkICNmZmZcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgdGhpcy53cmFwcGVyLnN0eWxlLmxlZnQgPSAod2luZG93LmlubmVyV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIgfCAwKSArIFwicHhcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDIgfCAwKSArIFwicHhcIjtcbiAgICB0aGlzLndyYXBwZXIuc3R5bGUuekluZGV4ID0gMTAwO1xuXG4gICAgdGhpcy5hcHAuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMud3JhcHBlcik7XG5cbiAgICB0aGlzLnByb2dyZXNzQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aGlzLnByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCIwJVwiO1xuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgdGhpcy5wcm9ncmVzc0Jhci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZmZmXCI7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9ncmVzc0Jhcik7XG5cbiAgfSxcblxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMucmVhZHkpIHJldHVybjtcblxuICAgIHRoaXMucHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAodGhpcy5jdXJyZW50ICogMTAwIHwgMCkgKyBcIiVcIjtcblxuXG4gIH1cblxufTtcblxuLyogZmlsZTogc3JjL2xpYi9DYW52YXNRdWVyeS5qcyAqL1xuXG4vKlxuXG4gIENhbnZhcyBRdWVyeSByMlxuXG4gIGh0dHA6Ly9jYW52YXNxdWVyeS5jb21cblxuICAoYykgMjAxMi0yMDE1IGh0dHA6Ly9yZXpvbmVyLm5ldFxuXG4gIENhbnZhcyBRdWVyeSBtYXkgYmUgZnJlZWx5IGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cblxuICAhIGZpeGVkIGNvbG9yIHBhcnNlcnNcblxuKi9cblxuXG4oZnVuY3Rpb24oKSB7XG5cbiAgdmFyIENPQ09PTkpTID0gZmFsc2U7XG5cbiAgdmFyIENhbnZhcyA9IHdpbmRvdy5IVE1MQ2FudmFzRWxlbWVudDtcbiAgdmFyIEltYWdlID0gd2luZG93LkhUTUxJbWFnZUVsZW1lbnQ7XG4gIHZhciBDT0NPT05KUyA9IG5hdmlnYXRvci5pc0NvY29vbkpTO1xuXG4gIHZhciBjcSA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDYW52YXMod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIC8vIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ2FudmFzKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDYW52YXMoc2VsZWN0b3IpO1xuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3IgaW5zdGFuY2VvZiBjcS5MYXllcikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY2FudmFzID0gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBjcS5MYXllcihjYW52YXMpO1xuICB9O1xuXG4gIGNxLmxpbmVTcGFjaW5nID0gMS4wO1xuICBjcS5kZWZhdWx0Rm9udCA9IFwiQXJpYWxcIjtcblxuICBjcS5jb2Nvb24gPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ29jb29uQ2FudmFzKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7fSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgdmFyIGNhbnZhcyA9IGNxLmNyZWF0ZUNvY29vbkNhbnZhcyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEltYWdlKSB7XG4gICAgICB2YXIgY2FudmFzID0gY3EuY3JlYXRlQ29jb29uQ2FudmFzKHNlbGVjdG9yKTtcbiAgICB9IGVsc2UgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgY3EuTGF5ZXIpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNhbnZhcyA9IHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgY3EuTGF5ZXIoY2FudmFzKTtcbiAgfVxuXG5cbiAgY3EuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAodmFyIGogaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXVtqXSA9IGFyZ3VtZW50c1tpXVtqXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICB9O1xuXG4gIGNxLmF1Z21lbnQgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgXy5leHRlbmQoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbaV0pO1xuICAgICAgYXJndW1lbnRzW2ldKGFyZ3VtZW50c1swXSk7XG4gICAgfVxuICB9O1xuXG4gIGNxLmRpc3RhbmNlID0gZnVuY3Rpb24oeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgIHZhciBkeCA9IHgxIC0geDI7XG4gICAgICB2YXIgZHkgPSB5MSAtIHkyO1xuXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGguYWJzKHgxIC0geTEpO1xuICAgIH1cbiAgfTtcblxuICAvKiBmYXN0LmpzICovXG5cbiAgY3EuZmFzdEFwcGx5ID0gZnVuY3Rpb24oc3ViamVjdCwgdGhpc0NvbnRleHQsIGFyZ3MpIHtcblxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCk7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0pO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgY2FzZSA1OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKTtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSk7XG4gICAgICBjYXNlIDc6XG4gICAgICAgIHJldHVybiBzdWJqZWN0LmNhbGwodGhpc0NvbnRleHQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0pO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5jYWxsKHRoaXNDb250ZXh0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdLCBhcmdzWzddKTtcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgcmV0dXJuIHN1YmplY3QuY2FsbCh0aGlzQ29udGV4dCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSwgYXJnc1s2XSwgYXJnc1s3XSwgYXJnc1s4XSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3ViamVjdC5hcHBseSh0aGlzQ29udGV4dCwgYXJncyk7XG4gICAgfVxuXG4gIH07XG5cbiAgY3EuZXh0ZW5kKGNxLCB7XG5cbiAgICBzbW9vdGhpbmc6IHRydWUsXG5cbiAgICBibGVuZDogZnVuY3Rpb24oYmVsb3csIGFib3ZlLCBtb2RlLCBtaXgpIHtcblxuICAgICAgaWYgKHR5cGVvZiBtaXggPT09IFwidW5kZWZpbmVkXCIpIG1peCA9IDE7XG5cbiAgICAgIHZhciBiZWxvdyA9IGNxKGJlbG93KTtcbiAgICAgIHZhciBtYXNrID0gYmVsb3cuY2xvbmUoKTtcbiAgICAgIHZhciBhYm92ZSA9IGNxKGFib3ZlKTtcblxuICAgICAgYmVsb3cuc2F2ZSgpO1xuICAgICAgYmVsb3cuZ2xvYmFsQWxwaGEobWl4KTtcbiAgICAgIGJlbG93Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbihtb2RlKTtcbiAgICAgIGJlbG93LmRyYXdJbWFnZShhYm92ZS5jYW52YXMsIDAsIDApO1xuICAgICAgYmVsb3cucmVzdG9yZSgpO1xuXG4gICAgICBtYXNrLnNhdmUoKTtcbiAgICAgIG1hc2suZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKFwic291cmNlLWluXCIpO1xuICAgICAgbWFzay5kcmF3SW1hZ2UoYmVsb3cuY2FudmFzLCAwLCAwKTtcbiAgICAgIG1hc2sucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gbWFzaztcbiAgICB9LFxuXG4gICAgbWF0Y2hDb2xvcjogZnVuY3Rpb24oY29sb3IsIHBhbGV0dGUpIHtcbiAgICAgIHZhciByZ2JQYWxldHRlID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFsZXR0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZ2JQYWxldHRlLnB1c2goY3EuY29sb3IocGFsZXR0ZVtpXSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW1nRGF0YSA9IGNxLmNvbG9yKGNvbG9yKTtcblxuICAgICAgdmFyIGRpZkxpc3QgPSBbXTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmdiUGFsZXR0ZS5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgcmdiVmFsID0gcmdiUGFsZXR0ZVtqXTtcbiAgICAgICAgdmFyIHJEaWYgPSBNYXRoLmFicyhpbWdEYXRhWzBdIC0gcmdiVmFsWzBdKSxcbiAgICAgICAgICBnRGlmID0gTWF0aC5hYnMoaW1nRGF0YVsxXSAtIHJnYlZhbFsxXSksXG4gICAgICAgICAgYkRpZiA9IE1hdGguYWJzKGltZ0RhdGFbMl0gLSByZ2JWYWxbMl0pO1xuICAgICAgICBkaWZMaXN0LnB1c2gockRpZiArIGdEaWYgKyBiRGlmKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsb3Nlc3RNYXRjaCA9IDA7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKGRpZkxpc3Rbal0gPCBkaWZMaXN0W2Nsb3Nlc3RNYXRjaF0pIHtcbiAgICAgICAgICBjbG9zZXN0TWF0Y2ggPSBqO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWxldHRlW2Nsb3Nlc3RNYXRjaF07XG4gICAgfSxcblxuICAgIHRlbXA6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGlmICghdGhpcy50ZW1wTGF5ZXIpIHtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIgPSBjcSgxLCAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpZHRoIGluc3RhbmNlb2YgSW1hZ2UpIHtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIud2lkdGggPSB3aWR0aC53aWR0aDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuaGVpZ2h0ID0gd2lkdGguaGVpZ2h0O1xuICAgICAgICB0aGlzLnRlbXBMYXllci5jb250ZXh0LmRyYXdJbWFnZSh3aWR0aCwgMCwgMCk7XG4gICAgICB9IGVsc2UgaWYgKHdpZHRoIGluc3RhbmNlb2YgQ2FudmFzKSB7XG4gICAgICAgIHRoaXMudGVtcExheWVyLndpZHRoID0gd2lkdGgud2lkdGg7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmhlaWdodCA9IHdpZHRoLmhlaWdodDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuY29udGV4dC5kcmF3SW1hZ2Uod2lkdGgsIDAsIDApO1xuICAgICAgfSBlbHNlIGlmICh3aWR0aCBpbnN0YW5jZW9mIENhbnZhc1F1ZXJ5LkxheWVyKSB7XG4gICAgICAgIHRoaXMudGVtcExheWVyLndpZHRoID0gd2lkdGgud2lkdGg7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmhlaWdodCA9IHdpZHRoLmhlaWdodDtcbiAgICAgICAgdGhpcy50ZW1wTGF5ZXIuY29udGV4dC5kcmF3SW1hZ2Uod2lkdGguY2FudmFzLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVtcExheWVyLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMudGVtcExheWVyLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMudGVtcExheWVyO1xuICAgIH0sXG5cbiAgICB3cmFwVmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgaWYgKHZhbHVlIDwgbWluKSByZXR1cm4gbWF4ICsgKHZhbHVlICUgbWF4KTtcbiAgICAgIGlmICh2YWx1ZSA+PSBtYXgpIHJldHVybiB2YWx1ZSAlIG1heDtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgbGltaXRWYWx1ZTogZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICByZXR1cm4gdmFsdWUgPCBtaW4gPyBtaW4gOiB2YWx1ZSA+IG1heCA/IG1heCA6IHZhbHVlO1xuICAgIH0sXG5cbiAgICBtaXg6IGZ1bmN0aW9uKGEsIGIsIGFtb3VudCkge1xuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogYW1vdW50O1xuICAgIH0sXG5cbiAgICBoZXhUb1JnYjogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNykgcmV0dXJuIFsnMHgnICsgaGV4WzFdICsgaGV4WzJdIHwgMCwgJzB4JyArIGhleFszXSArIGhleFs0XSB8IDAsICcweCcgKyBoZXhbNV0gKyBoZXhbNl0gfCAwXTtcbiAgICAgIGVsc2UgcmV0dXJuIFsnMHgnICsgaGV4WzFdICsgaGV4WzFdIHwgMCwgJzB4JyArIGhleFsyXSArIGhleFsyXSB8IDAsICcweCcgKyBoZXhbM10gKyBoZXhbM10gfCAwXTtcbiAgICB9LFxuXG4gICAgcmdiVG9IZXg6IGZ1bmN0aW9uKHIsIGcsIGIpIHtcbiAgICAgIHJldHVybiBcIiNcIiArICgoMSA8PCAyNCkgKyAociA8PCAxNikgKyAoZyA8PCA4KSArIGIpLnRvU3RyaW5nKDE2KS5zbGljZSgxLCA3KTtcbiAgICB9LFxuXG4gICAgLyogYXV0aG9yOiBodHRwOi8vbWppamFja3Nvbi5jb20vICovXG5cbiAgICByZ2JUb0hzbDogZnVuY3Rpb24ociwgZywgYikge1xuXG4gICAgICBpZiAociBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGIgPSByWzJdO1xuICAgICAgICBnID0gclsxXTtcbiAgICAgICAgciA9IHJbMF07XG4gICAgICB9XG5cbiAgICAgIHIgLz0gMjU1LCBnIC89IDI1NSwgYiAvPSAyNTU7XG4gICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYiksXG4gICAgICAgIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgdmFyIGgsIHMsIGwgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgICAgIGlmIChtYXggPT0gbWluKSB7XG4gICAgICAgIGggPSBzID0gMDsgLy8gYWNocm9tYXRpY1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICAgIHMgPSBsID4gMC41ID8gZCAvICgyIC0gbWF4IC0gbWluKSA6IGQgLyAobWF4ICsgbWluKTtcbiAgICAgICAgc3dpdGNoIChtYXgpIHtcbiAgICAgICAgICBjYXNlIHI6XG4gICAgICAgICAgICBoID0gKGcgLSBiKSAvIGQgKyAoZyA8IGIgPyA2IDogMCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGc6XG4gICAgICAgICAgICBoID0gKGIgLSByKSAvIGQgKyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBiOlxuICAgICAgICAgICAgaCA9IChyIC0gZykgLyBkICsgNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGggLz0gNjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtoLCBzLCBsXTtcbiAgICB9LFxuXG4gICAgLyogYXV0aG9yOiBodHRwOi8vbWppamFja3Nvbi5jb20vICovXG5cbiAgICBodWUycmdiOiBmdW5jdGlvbihwLCBxLCB0KSB7XG4gICAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgICAgaWYgKHQgPCAxIC8gNikgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XG4gICAgICBpZiAodCA8IDEgLyAyKSByZXR1cm4gcTtcbiAgICAgIGlmICh0IDwgMiAvIDMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcbiAgICAgIHJldHVybiBwO1xuICAgIH0sXG5cbiAgICBoc2xUb1JnYjogZnVuY3Rpb24oaCwgcywgbCkge1xuICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgIGlmIChzID09IDApIHtcbiAgICAgICAgciA9IGcgPSBiID0gbDsgLy8gYWNocm9tYXRpY1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xuICAgICAgICByID0gdGhpcy5odWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XG4gICAgICAgIGcgPSB0aGlzLmh1ZTJyZ2IocCwgcSwgaCk7XG4gICAgICAgIGIgPSB0aGlzLmh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyICogMjU1IHwgMCwgZyAqIDI1NSB8IDAsIGIgKiAyNTUgfCAwXTtcbiAgICB9LFxuXG4gICAgcmdiVG9Ic3Y6IGZ1bmN0aW9uKHIsIGcsIGIpIHtcbiAgICAgIGlmIChyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgYiA9IHJbMl07XG4gICAgICAgIGcgPSByWzFdO1xuICAgICAgICByID0gclswXTtcbiAgICAgIH1cblxuICAgICAgciA9IHIgLyAyNTUsIGcgPSBnIC8gMjU1LCBiID0gYiAvIDI1NTtcbiAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICB2YXIgaCwgcywgdiA9IG1heDtcblxuICAgICAgdmFyIGQgPSBtYXggLSBtaW47XG4gICAgICBzID0gbWF4ID09IDAgPyAwIDogZCAvIG1heDtcblxuICAgICAgaWYgKG1heCA9PSBtaW4pIHtcbiAgICAgICAgaCA9IDA7IC8vIGFjaHJvbWF0aWNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAobWF4KSB7XG4gICAgICAgICAgY2FzZSByOlxuICAgICAgICAgICAgaCA9IChnIC0gYikgLyBkICsgKGcgPCBiID8gNiA6IDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBnOlxuICAgICAgICAgICAgaCA9IChiIC0gcikgLyBkICsgMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgYjpcbiAgICAgICAgICAgIGggPSAociAtIGcpIC8gZCArIDQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBoIC89IDY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbaCwgcywgdl07XG4gICAgfSxcblxuICAgIGhzdlRvUmdiOiBmdW5jdGlvbihoLCBzLCB2KSB7XG4gICAgICB2YXIgciwgZywgYjtcblxuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKGggKiA2KTtcbiAgICAgIHZhciBmID0gaCAqIDYgLSBpO1xuICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgIHZhciBxID0gdiAqICgxIC0gZiAqIHMpO1xuICAgICAgdmFyIHQgPSB2ICogKDEgLSAoMSAtIGYpICogcyk7XG5cbiAgICAgIHN3aXRjaCAoaSAlIDYpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHIgPSB2LCBnID0gdCwgYiA9IHA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByID0gcSwgZyA9IHYsIGIgPSBwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgciA9IHAsIGcgPSB2LCBiID0gdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHIgPSBwLCBnID0gcSwgYiA9IHY7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByID0gdCwgZyA9IHAsIGIgPSB2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgciA9IHYsIGcgPSBwLCBiID0gcTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtyICogMjU1LCBnICogMjU1LCBiICogMjU1XTtcbiAgICB9LFxuXG4gICAgY29sb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBjcS5Db2xvcigpO1xuICAgICAgcmVzdWx0LnBhcnNlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIHBvb2xBcnJheTogW10sXG5cbiAgICBwb29sOiBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKCF0aGlzLnBvb2xBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgIHRoaXMucG9vbEFycmF5LnB1c2godGhpcy5jcmVhdGVDYW52YXMoMSwgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnBvb2xBcnJheS5wb3AoKTtcblxuICAgIH0sXG5cbiAgICBjcmVhdGVDYW52YXM6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgSW1hZ2UgfHwgYXJndW1lbnRzWzBdIGluc3RhbmNlb2YgQ2FudmFzKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgcmVzdWx0LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIHJlc3VsdC5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XG4gICAgICAgIHJlc3VsdC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKGltYWdlLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfVxuXG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIGNyZWF0ZUNvY29vbkNhbnZhczogZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JlZW5jYW52YXNcIik7XG5cbiAgICAgIGlmIChhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgICB2YXIgaW1hZ2UgPSBhcmd1bWVudHNbMF07XG4gICAgICAgIHJlc3VsdC53aWR0aCA9IGltYWdlLndpZHRoO1xuICAgICAgICByZXN1bHQuaGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0O1xuICAgICAgICByZXN1bHQuZ2V0Q29udGV4dChcIjJkXCIpLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQud2lkdGggPSB3aWR0aDtcbiAgICAgICAgcmVzdWx0LmhlaWdodCA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgY3JlYXRlSW1hZ2VEYXRhOiBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICByZXR1cm4gY3EuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpLmdldENvbnRleHQoXCIyZFwiKS5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGNxLkxheWVyID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmFsaWduWCA9IDA7XG4gICAgdGhpcy5hbGlnblkgPSAwO1xuICAgIHRoaXMuYWxpZ25lZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH07XG5cbiAgY3EuTGF5ZXIucHJvdG90eXBlID0ge1xuXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHNtb290aGluZyA9IGNxLnNtb290aGluZztcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnNtb290aGluZyAhPT0gXCJ1bmRlZmluZWRcIikgc21vb3RoaW5nID0gdGhpcy5zbW9vdGhpbmc7XG5cbiAgICAgIHRoaXMuY29udGV4dC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG4gICAgICB0aGlzLmNvbnRleHQubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSBzbW9vdGhpbmc7XG4gICAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gc21vb3RoaW5nO1xuXG4gICAgICBpZiAoQ09DT09OSlMpIENvY29vbi5VdGlscy5zZXRBbnRpYWxpYXMoc21vb3RoaW5nKTtcbiAgICB9LFxuXG4gICAgYXBwZW5kVG86IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGE6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNBbHBoYSA9IHRoaXMuZ2xvYmFsQWxwaGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsQWxwaGEoYSk7XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsQWxwaGEoKTtcbiAgICB9LFxuXG4gICAgcmE6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYSh0aGlzLnByZXZpb3VzQWxwaGEpO1xuICAgIH0sXG4gICAgLypcbiAgICAgICAgZHJhd0ltYWdlOiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIGlmICghdGhpcy5hbGlnblggJiYgIXRoaXMuYWxpZ25ZKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2FsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cblxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3RvcmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgICAgdGhpcy5hbGlnblggPSAwO1xuICAgICAgICAgIHRoaXMuYWxpZ25ZID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgKi9cblxuICAgIHJlYWxpZ246IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0aGlzLmFsaWduWCA9IHRoaXMucHJldkFsaWduWDtcbiAgICAgIHRoaXMuYWxpZ25ZID0gdGhpcy5wcmV2QWxpZ25ZO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBhbGlnbjogZnVuY3Rpb24oeCwgeSkge1xuXG4gICAgICBpZiAodHlwZW9mIHkgPT09IFwidW5kZWZpbmVkXCIpIHkgPSB4O1xuXG4gICAgICB0aGlzLmFsaWduWCA9IHg7XG4gICAgICB0aGlzLmFsaWduWSA9IHk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cblxuICAgIC8qIHNhdmUgdHJhbnNsYXRlIGFsaWduIHJvdGF0ZSBzY2FsZSAqL1xuXG4gICAgc3RhcnM6IGZ1bmN0aW9uKHgsIHksIGFsaWduWCwgYWxpZ25ZLCByb3RhdGlvbiwgc2NhbGVYLCBzY2FsZVkpIHtcblxuICAgICAgaWYgKHR5cGVvZiBhbGlnblggPT09IFwidW5kZWZpbmVkXCIpIGFsaWduWCA9IDAuNTtcbiAgICAgIGlmICh0eXBlb2YgYWxpZ25ZID09PSBcInVuZGVmaW5lZFwiKSBhbGlnblkgPSAwLjU7XG4gICAgICBpZiAodHlwZW9mIHJvdGF0aW9uID09PSBcInVuZGVmaW5lZFwiKSByb3RhdGlvbiA9IDA7XG4gICAgICBpZiAodHlwZW9mIHNjYWxlWCA9PT0gXCJ1bmRlZmluZWRcIikgc2NhbGVYID0gMS4wO1xuICAgICAgaWYgKHR5cGVvZiBzY2FsZVkgPT09IFwidW5kZWZpbmVkXCIpIHNjYWxlWSA9IHNjYWxlWDtcblxuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnRyYW5zbGF0ZSh4LCB5KTtcbiAgICAgIHRoaXMuYWxpZ24oYWxpZ25YLCBhbGlnblkpO1xuICAgICAgdGhpcy5yb3RhdGUocm90YXRpb24pO1xuICAgICAgdGhpcy5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICB0YXJzOiBmdW5jdGlvbih4LCB5LCBhbGlnblgsIGFsaWduWSwgcm90YXRpb24sIHNjYWxlWCwgc2NhbGVZKSB7XG5cbiAgICAgIGlmICh0eXBlb2YgYWxpZ25YID09PSBcInVuZGVmaW5lZFwiKSBhbGlnblggPSAwLjU7XG4gICAgICBpZiAodHlwZW9mIGFsaWduWSA9PT0gXCJ1bmRlZmluZWRcIikgYWxpZ25ZID0gMC41O1xuICAgICAgaWYgKHR5cGVvZiByb3RhdGlvbiA9PT0gXCJ1bmRlZmluZWRcIikgcm90YXRpb24gPSAwO1xuICAgICAgaWYgKHR5cGVvZiBzY2FsZVggPT09IFwidW5kZWZpbmVkXCIpIHNjYWxlWCA9IDEuMDtcbiAgICAgIGlmICh0eXBlb2Ygc2NhbGVZID09PSBcInVuZGVmaW5lZFwiKSBzY2FsZVkgPSBzY2FsZVg7XG5cbiAgICAgIHRoaXMudHJhbnNsYXRlKHgsIHkpO1xuICAgICAgdGhpcy5hbGlnbihhbGlnblgsIGFsaWduWSk7XG4gICAgICB0aGlzLnJvdGF0ZShyb3RhdGlvbik7XG4gICAgICB0aGlzLnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgZmlsbFJlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgICBpZiAodGhpcy5hbGlnblggfHwgdGhpcy5hbGlnblkpIHtcbiAgICAgICAgYXJndW1lbnRzWzBdIC09IGFyZ3VtZW50c1syXSAqIHRoaXMuYWxpZ25YIHwgMDtcbiAgICAgICAgYXJndW1lbnRzWzFdIC09IGFyZ3VtZW50c1szXSAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgIH1cblxuICAgICAgY3EuZmFzdEFwcGx5KHRoaXMuY29udGV4dC5maWxsUmVjdCwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBzdHJva2VSZWN0OiBmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKHRoaXMuYWxpZ25YIHx8IHRoaXMuYWxpZ25ZKSB7XG4gICAgICAgIGFyZ3VtZW50c1swXSAtPSBhcmd1bWVudHNbMl0gKiB0aGlzLmFsaWduWCB8IDA7XG4gICAgICAgIGFyZ3VtZW50c1sxXSAtPSBhcmd1bWVudHNbM10gKiB0aGlzLmFsaWduWSB8IDA7XG4gICAgICB9XG5cbiAgICAgIGNxLmZhc3RBcHBseSh0aGlzLmNvbnRleHQuc3Ryb2tlUmVjdCwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBkcmF3SW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpIHtcblxuICAgICAgaWYgKHRoaXMuYWxpZ25YIHx8IHRoaXMuYWxpZ25ZKSB7XG4gICAgICAgIGlmIChzV2lkdGggPT0gbnVsbCkge1xuICAgICAgICAgIHN4IC09IGltYWdlLndpZHRoICogdGhpcy5hbGlnblggfCAwO1xuICAgICAgICAgIHN5IC09IGltYWdlLmhlaWdodCAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkeCAtPSBkV2lkdGggKiB0aGlzLmFsaWduWCB8IDA7XG4gICAgICAgICAgZHkgLT0gZEhlaWdodCAqIHRoaXMuYWxpZ25ZIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc1dpZHRoID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgc3gsIHN5KTtcbiAgICAgIH0gZWxzZSBpZiAoZHggPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHNXaWR0aCwgc0hlaWdodCwgZHgsIGR5LCBkV2lkdGgsIGRIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICAvLyBjcS5mYXN0QXBwbHkodGhpcy5jb250ZXh0LmRyYXdJbWFnZSwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cbiAgICBzYXZlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJldkFsaWduWCA9IHRoaXMuYWxpZ25YO1xuICAgICAgdGhpcy5wcmV2QWxpZ25ZID0gdGhpcy5hbGlnblk7XG5cbiAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZXN0b3JlOiBmdW5jdGlvbigpIHtcblxuICAgICAgdGhpcy5yZWFsaWduKCk7XG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGRyYXdUaWxlOiBmdW5jdGlvbihpbWFnZSwgeCwgeSwgZnJhbWVYLCBmcmFtZVksIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBmcmFtZXMsIGZyYW1lKSB7XG5cbiAgICB9LFxuXG4gICAgZHJhd0F0bGFzRnJhbWU6IGZ1bmN0aW9uKGF0bGFzLCBmcmFtZSwgeCwgeSkge1xuXG4gICAgICB2YXIgZnJhbWUgPSBhdGxhcy5mcmFtZXNbZnJhbWVdO1xuXG4gICAgICB0aGlzLmRyYXdSZWdpb24oXG4gICAgICAgIGF0bGFzLmltYWdlLFxuICAgICAgICBmcmFtZS5yZWdpb24sXG4gICAgICAgIHggLSBmcmFtZS53aWR0aCAqIHRoaXMuYWxpZ25YICsgZnJhbWUub2Zmc2V0WzBdICsgZnJhbWUucmVnaW9uWzJdICogdGhpcy5hbGlnblgsIHkgLSBmcmFtZS5oZWlnaHQgKiB0aGlzLmFsaWduWSArIGZyYW1lLm9mZnNldFsxXSArIGZyYW1lLnJlZ2lvblszXSAqIHRoaXMuYWxpZ25ZXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIH0sXG5cblxuICAgIGltYWdlRmlsbDogZnVuY3Rpb24oaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcblxuICAgICAgdmFyIHNjYWxlID0gTWF0aC5tYXgod2lkdGggLyBpbWFnZS53aWR0aCwgaGVpZ2h0IC8gaW1hZ2UuaGVpZ2h0KTtcblxuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnNjYWxlKHNjYWxlLCBzY2FsZSk7XG4gICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XG4gICAgICB0aGlzLnJlc3RvcmUoKTtcblxuICAgIH0sXG5cbiAgICBkcmF3UmVnaW9uOiBmdW5jdGlvbihpbWFnZSwgcmVnaW9uLCB4LCB5LCBzY2FsZSkge1xuXG4gICAgICBzY2FsZSA9IHNjYWxlIHx8IDE7XG5cbiAgICAgIHZhciBkV2lkdGggPSByZWdpb25bMl0gKiBzY2FsZSB8IDA7XG4gICAgICB2YXIgZEhlaWdodCA9IHJlZ2lvblszXSAqIHNjYWxlIHwgMDtcblxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShcbiAgICAgICAgaW1hZ2UsIHJlZ2lvblswXSwgcmVnaW9uWzFdLCByZWdpb25bMl0sIHJlZ2lvblszXSxcbiAgICAgICAgeCAtIGRXaWR0aCAqIHRoaXMuYWxpZ25YIHwgMCwgeSAtIGRIZWlnaHQgKiB0aGlzLmFsaWduWSB8IDAsIGRXaWR0aCwgZEhlaWdodFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNhY2hlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsb25lKCkuY2FudmFzO1xuXG4gICAgICAvKiBGRlMgLi4uLiBpbWFnZS5zcmMgaXMgbm8gbG9uZ2VyIHN5bmNocm9ub3VzIHdoZW4gYXNzaWduaW5nIGRhdGFVUkwgKi9cblxuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlO1xuICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5jYW52YXMudG9EYXRhVVJMKCk7XG4gICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfSxcblxuICAgIGJsZW5kT246IGZ1bmN0aW9uKHdoYXQsIG1vZGUsIG1peCkge1xuICAgICAgY3EuYmxlbmQod2hhdCwgdGhpcywgbW9kZSwgbWl4KTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHBvc3Rlcml6ZTogZnVuY3Rpb24ocGMsIGluYykge1xuICAgICAgcGMgPSBwYyB8fCAzMjtcbiAgICAgIGluYyA9IGluYyB8fCA0O1xuICAgICAgdmFyIGltZ2RhdGEgPSB0aGlzLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICB2YXIgZGF0YSA9IGltZ2RhdGEuZGF0YTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSBpbmMpIHtcbiAgICAgICAgZGF0YVtpXSAtPSBkYXRhW2ldICUgcGM7IC8vIHNldCB2YWx1ZSB0byBuZWFyZXN0IG9mIDggcG9zc2liaWxpdGllc1xuICAgICAgICBkYXRhW2kgKyAxXSAtPSBkYXRhW2kgKyAxXSAlIHBjOyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcbiAgICAgICAgZGF0YVtpICsgMl0gLT0gZGF0YVtpICsgMl0gJSBwYzsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICB9XG5cbiAgICAgIHRoaXMucHV0SW1hZ2VEYXRhKGltZ2RhdGEsIDAsIDApOyAvLyBwdXQgaW1hZ2UgZGF0YSB0byBjYW52YXNcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuXG4gICAgYnc6IGZ1bmN0aW9uKHBjKSB7XG4gICAgICBwYyA9IDEyODtcbiAgICAgIHZhciBpbWdkYXRhID0gdGhpcy5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgdmFyIGRhdGEgPSBpbWdkYXRhLmRhdGE7XG4gICAgICAvLyA4LWJpdDogcnJyIGdnZyBiYlxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XG4gICAgICAgIHZhciB2ID0gKChkYXRhW2ldICsgZGF0YVtpICsgMV0gKyBkYXRhW2kgKyAyXSkgLyAzKTtcblxuICAgICAgICB2ID0gKHYgLyAxMjggfCAwKSAqIDEyODtcbiAgICAgICAgLy9kYXRhW2ldID0gdjsgLy8gc2V0IHZhbHVlIHRvIG5lYXJlc3Qgb2YgOCBwb3NzaWJpbGl0aWVzXG4gICAgICAgIC8vZGF0YVtpICsgMV0gPSB2OyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcbiAgICAgICAgZGF0YVtpICsgMl0gPSAodiAvIDI1NSkgKiBkYXRhW2ldOyAvLyBzZXQgdmFsdWUgdG8gbmVhcmVzdCBvZiA4IHBvc3NpYmlsaXRpZXNcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnB1dEltYWdlRGF0YShpbWdkYXRhLCAwLCAwKTsgLy8gcHV0IGltYWdlIGRhdGEgdG8gY2FudmFzXG4gICAgfSxcblxuICAgIGJsZW5kOiBmdW5jdGlvbih3aGF0LCBtb2RlLCBtaXgpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2hhdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgY29sb3IgPSB3aGF0O1xuICAgICAgICB3aGF0ID0gY3EodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHdoYXQuZmlsbFN0eWxlKGNvbG9yKS5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IGNxLmJsZW5kKHRoaXMsIHdoYXQsIG1vZGUsIG1peCk7XG5cbiAgICAgIHRoaXMuY2FudmFzID0gcmVzdWx0LmNhbnZhcztcbiAgICAgIHRoaXMuY29udGV4dCA9IHJlc3VsdC5jb250ZXh0O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdGV4dFdpdGhCYWNrZ3JvdW5kOiBmdW5jdGlvbih0ZXh0LCB4LCB5LCBiYWNrZ3JvdW5kLCBwYWRkaW5nKSB7XG4gICAgICB2YXIgdyA9IHRoaXMubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgICB2YXIgaCA9IHRoaXMuZm9udEhlaWdodCgpICogMC44O1xuICAgICAgdmFyIGYgPSB0aGlzLmZpbGxTdHlsZSgpO1xuICAgICAgdmFyIHBhZGRpbmcgPSBwYWRkaW5nIHx8IDI7XG5cbiAgICAgIHRoaXMuZmlsbFN0eWxlKGJhY2tncm91bmQpLmZpbGxSZWN0KHggLSB3IC8gMiAtIHBhZGRpbmcgKiAyLCB5IC0gcGFkZGluZywgdyArIHBhZGRpbmcgKiA0LCBoICsgcGFkZGluZyAqIDIpXG4gICAgICB0aGlzLmZpbGxTdHlsZShmKS50ZXh0QWxpZ24oXCJjZW50ZXJcIikudGV4dEJhc2VsaW5lKFwidG9wXCIpLmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZmlsbENpcmNsZTogZnVuY3Rpb24oeCwgeSwgcikge1xuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHN0cm9rZUNpcmNsZTogZnVuY3Rpb24oeCwgeSwgcikge1xuICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgY2lyY2xlOiBmdW5jdGlvbih4LCB5LCByKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmNvbnRleHQuYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjcm9wOiBmdW5jdGlvbih4LCB5LCB3LCBoKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgdmFyIHkgPSBhcmd1bWVudHNbMF1bMV07XG4gICAgICAgIHZhciB3ID0gYXJndW1lbnRzWzBdWzJdO1xuICAgICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXVszXTtcbiAgICAgICAgdmFyIHggPSBhcmd1bWVudHNbMF1bMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBjYW52YXMgPSBjcS5jcmVhdGVDYW52YXModywgaCk7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCB4LCB5LCB3LCBoLCAwLCAwLCB3LCBoKTtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdztcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGg7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGNhbnZhcywgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgIGNxLmV4dGVuZCh0aGlzLmNvbnRleHQsIHByb3BlcnRpZXMpO1xuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciB3ID0gd2lkdGgsXG4gICAgICAgIGggPSBoZWlnaHQ7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHcgPSBhcmd1bWVudHNbMF0gKiB0aGlzLmNhbnZhcy53aWR0aCB8IDA7XG4gICAgICAgIGggPSBhcmd1bWVudHNbMF0gKiB0aGlzLmNhbnZhcy5oZWlnaHQgfCAwO1xuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBpZiAoaGVpZ2h0ID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmICh0aGlzLmNhbnZhcy53aWR0aCA+IHdpZHRoKSB7XG4gICAgICAgICAgICBoID0gdGhpcy5jYW52YXMuaGVpZ2h0ICogKHdpZHRoIC8gdGhpcy5jYW52YXMud2lkdGgpIHwgMDtcbiAgICAgICAgICAgIHcgPSB3aWR0aDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdyA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgaCA9IHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAod2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FudmFzLndpZHRoID4gd2lkdGgpIHtcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aCAqIChoZWlnaHQgLyB0aGlzLmNhbnZhcy5oZWlnaHQpIHwgMDtcbiAgICAgICAgICAgIGggPSBoZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHcgPSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGggPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBjcXJlc2l6ZWQgPSBjcSh3LCBoKS5kcmF3SW1hZ2UodGhpcy5jYW52YXMsIDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQsIDAsIDAsIHcsIGgpO1xuICAgICAgdGhpcy5jYW52YXMgPSBjcXJlc2l6ZWQuY2FudmFzO1xuICAgICAgdGhpcy5jb250ZXh0ID0gY3FyZXNpemVkLmNvbnRleHQ7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpbWFnZUxpbmU6IGZ1bmN0aW9uKGltYWdlLCByZWdpb24sIHgsIHksIGV4LCBleSwgc2NhbGUpIHtcbiAgICAgIGlmICghcmVnaW9uKSByZWdpb24gPSBbMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodF07XG5cbiAgICAgIHZhciBkaXN0YW5jZSA9IGNxLmRpc3RhbmNlKHgsIHksIGV4LCBleSk7XG4gICAgICB2YXIgY291bnQgPSBkaXN0YW5jZSAvIHJlZ2lvblszXSArIDAuNSB8IDA7XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKGV5IC0geSwgZXggLSB4KSArIE1hdGguUEkgLyAyO1xuXG4gICAgICB0aGlzLnNhdmUoKTtcblxuICAgICAgdGhpcy50cmFuc2xhdGUoeCwgeSk7XG4gICAgICB0aGlzLnJvdGF0ZShhbmdsZSk7XG5cbiAgICAgIGlmIChzY2FsZSkgdGhpcy5zY2FsZShzY2FsZSwgMS4wKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuICAgICAgICB0aGlzLmRyYXdSZWdpb24oaW1hZ2UsIHJlZ2lvbiwgLXJlZ2lvblsyXSAvIDIgfCAwLCAtcmVnaW9uWzNdICogKGkgKyAxKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgdHJpbTogZnVuY3Rpb24oY29sb3IsIGNoYW5nZXMpIHtcbiAgICAgIHZhciB0cmFuc3BhcmVudDtcblxuICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgIGNvbG9yID0gY3EuY29sb3IoY29sb3IpLnRvQXJyYXkoKTtcbiAgICAgICAgdHJhbnNwYXJlbnQgPSAhY29sb3JbM107XG4gICAgICB9IGVsc2UgdHJhbnNwYXJlbnQgPSB0cnVlO1xuXG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICB2YXIgYm91bmQgPSBbdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCwgMCwgMF07XG5cbiAgICAgIHZhciB3aWR0aCA9IHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuY2FudmFzLmhlaWdodDtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAodHJhbnNwYXJlbnQpIHtcbiAgICAgICAgICBpZiAoIXNvdXJjZVBpeGVsc1tpICsgM10pIGNvbnRpbnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZVBpeGVsc1tpICsgMF0gPT09IGNvbG9yWzBdICYmIHNvdXJjZVBpeGVsc1tpICsgMV0gPT09IGNvbG9yWzFdICYmIHNvdXJjZVBpeGVsc1tpICsgMl0gPT09IGNvbG9yWzJdKSBjb250aW51ZTtcblxuICAgICAgICB2YXIgeCA9IChpIC8gNCB8IDApICUgdGhpcy5jYW52YXMud2lkdGggfCAwO1xuICAgICAgICB2YXIgeSA9IChpIC8gNCB8IDApIC8gdGhpcy5jYW52YXMud2lkdGggfCAwO1xuXG4gICAgICAgIGlmICh4IDwgYm91bmRbMF0pIGJvdW5kWzBdID0geDtcbiAgICAgICAgaWYgKHggPiBib3VuZFsyXSkgYm91bmRbMl0gPSB4O1xuXG4gICAgICAgIGlmICh5IDwgYm91bmRbMV0pIGJvdW5kWzFdID0geTtcbiAgICAgICAgaWYgKHkgPiBib3VuZFszXSkgYm91bmRbM10gPSB5O1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChib3VuZFsyXSA9PT0gMCAmJiBib3VuZFszXSA9PT0gMCkge30gZWxzZSB7XG4gICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgY2hhbmdlcy5sZWZ0ID0gYm91bmRbMF07XG4gICAgICAgICAgY2hhbmdlcy50b3AgPSBib3VuZFsxXTtcblxuICAgICAgICAgIGNoYW5nZXMuYm90dG9tID0gaGVpZ2h0IC0gYm91bmRbM107XG4gICAgICAgICAgY2hhbmdlcy5yaWdodCA9IHdpZHRoIC0gYm91bmRbMl0gLSBib3VuZFswXTtcblxuICAgICAgICAgIGNoYW5nZXMud2lkdGggPSBib3VuZFsyXSAtIGJvdW5kWzBdO1xuICAgICAgICAgIGNoYW5nZXMuaGVpZ2h0ID0gYm91bmRbM10gLSBib3VuZFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3JvcChib3VuZFswXSwgYm91bmRbMV0sIGJvdW5kWzJdIC0gYm91bmRbMF0gKyAxLCBib3VuZFszXSAtIGJvdW5kWzFdICsgMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBtYXRjaFBhbGV0dGU6IGZ1bmN0aW9uKHBhbGV0dGUpIHtcbiAgICAgIHZhciBpbWdEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgdmFyIHJnYlBhbGV0dGUgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWxldHRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJnYlBhbGV0dGUucHVzaChjcS5jb2xvcihwYWxldHRlW2ldKSk7XG4gICAgICB9XG5cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgdmFyIGRpZkxpc3QgPSBbXTtcbiAgICAgICAgaWYgKCFpbWdEYXRhLmRhdGFbaSArIDNdKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJnYlBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgcmdiVmFsID0gcmdiUGFsZXR0ZVtqXTtcbiAgICAgICAgICB2YXIgckRpZiA9IE1hdGguYWJzKGltZ0RhdGEuZGF0YVtpXSAtIHJnYlZhbFswXSksXG4gICAgICAgICAgICBnRGlmID0gTWF0aC5hYnMoaW1nRGF0YS5kYXRhW2kgKyAxXSAtIHJnYlZhbFsxXSksXG4gICAgICAgICAgICBiRGlmID0gTWF0aC5hYnMoaW1nRGF0YS5kYXRhW2kgKyAyXSAtIHJnYlZhbFsyXSk7XG4gICAgICAgICAgZGlmTGlzdC5wdXNoKHJEaWYgKyBnRGlmICsgYkRpZik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2xvc2VzdE1hdGNoID0gMDtcblxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbGV0dGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAoZGlmTGlzdFtqXSA8IGRpZkxpc3RbY2xvc2VzdE1hdGNoXSkge1xuICAgICAgICAgICAgY2xvc2VzdE1hdGNoID0gajtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFsZXR0ZVJnYiA9IGNxLmhleFRvUmdiKHBhbGV0dGVbY2xvc2VzdE1hdGNoXSk7XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpXSA9IHBhbGV0dGVSZ2JbMF07XG4gICAgICAgIGltZ0RhdGEuZGF0YVtpICsgMV0gPSBwYWxldHRlUmdiWzFdO1xuICAgICAgICBpbWdEYXRhLmRhdGFbaSArIDJdID0gcGFsZXR0ZVJnYlsyXTtcblxuICAgICAgICAvKiBkaXRoZXJpbmcgKi9cbiAgICAgICAgLy9pbWdEYXRhLmRhdGFbaSArIDNdID0gKDI1NSAqIE1hdGgucmFuZG9tKCkgPCBpbWdEYXRhLmRhdGFbaSArIDNdKSA/IDI1NSA6IDA7XG5cbiAgICAgICAgLy9pbWdEYXRhLmRhdGFbaSArIDNdID0gaW1nRGF0YS5kYXRhW2kgKyAzXSA+IDEyOCA/IDI1NSA6IDA7XG4gICAgICAgIC8qXG4gICAgICAgIGlmIChpICUgMyA9PT0gMCkge1xuICAgICAgICAgIGltZ0RhdGEuZGF0YVtpXSAtPSBjcS5saW1pdFZhbHVlKGltZ0RhdGEuZGF0YVtpXSAtIDUwLCAwLCAyNTUpO1xuICAgICAgICAgIGltZ0RhdGEuZGF0YVtpICsgMV0gLT0gY3EubGltaXRWYWx1ZShpbWdEYXRhLmRhdGFbaSArIDFdIC0gNTAsIDAsIDI1NSk7XG4gICAgICAgICAgaW1nRGF0YS5kYXRhW2kgKyAyXSAtPSBjcS5saW1pdFZhbHVlKGltZ0RhdGEuZGF0YVtpICsgMl0gLSA1MCwgMCwgMjU1KTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQYWxldHRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwYWxldHRlID0gW107XG4gICAgICB2YXIgc291cmNlRGF0YSA9IHRoaXMuY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgc291cmNlUGl4ZWxzID0gc291cmNlRGF0YS5kYXRhO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGlmIChzb3VyY2VQaXhlbHNbaSArIDNdKSB7XG4gICAgICAgICAgdmFyIGhleCA9IGNxLnJnYlRvSGV4KHNvdXJjZVBpeGVsc1tpICsgMF0sIHNvdXJjZVBpeGVsc1tpICsgMV0sIHNvdXJjZVBpeGVsc1tpICsgMl0pO1xuICAgICAgICAgIGlmIChwYWxldHRlLmluZGV4T2YoaGV4KSA9PT0gLTEpIHBhbGV0dGUucHVzaChoZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYWxldHRlO1xuICAgIH0sXG5cbiAgICBtYXBQYWxldHRlOiBmdW5jdGlvbigpIHtcblxuICAgIH0sXG5cbiAgICBwb2x5Z29uOiBmdW5jdGlvbihhcnJheSkge1xuXG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuXG4gICAgICB0aGlzLm1vdmVUbyhhcnJheVswXVswXSwgYXJyYXlbMF1bMV0pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMubGluZVRvKGFycmF5W2ldWzBdLCBhcnJheVtpXVsxXSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xvc2VQYXRoKCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBmaWxsUG9seWdvbjogZnVuY3Rpb24ocG9seWdvbikge1xuICAgICAgdGhpcy5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMucG9seWdvbihwb2x5Z29uKTtcbiAgICAgIHRoaXMuZmlsbCgpO1xuICAgIH0sXG5cbiAgICBzdHJva2VQb2x5Z29uOiBmdW5jdGlvbihwb2x5Z29uKSB7XG4gICAgICB0aGlzLmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5wb2x5Z29uKHBvbHlnb24pO1xuICAgICAgdGhpcy5zdHJva2UoKTtcbiAgICB9LFxuXG4gICAgY29sb3JUb01hc2s6IGZ1bmN0aW9uKGNvbG9yLCBpbnZlcnRlZCkge1xuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcikudG9BcnJheSgpO1xuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgdmFyIG1hc2sgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNvdXJjZVBpeGVscy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICBpZiAoc291cmNlUGl4ZWxzW2kgKyAzXSA+IDApIG1hc2sucHVzaChpbnZlcnRlZCA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAgIGVsc2UgbWFzay5wdXNoKGludmVydGVkID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSxcblxuICAgIGdyYXlzY2FsZVRvTWFzazogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtYXNrID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgbWFzay5wdXNoKCgoc291cmNlUGl4ZWxzW2kgKyAwXSArIHNvdXJjZVBpeGVsc1tpICsgMV0gKyBzb3VyY2VQaXhlbHNbaSArIDJdKSAvIDMpIC8gMjU1KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfSxcblxuICAgIGFwcGx5TWFzazogZnVuY3Rpb24obWFzaykge1xuICAgICAgdmFyIHNvdXJjZURhdGEgPSB0aGlzLmNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdmFyIHNvdXJjZVBpeGVscyA9IHNvdXJjZURhdGEuZGF0YTtcblxuICAgICAgdmFyIG1vZGUgPSB0eXBlb2YgbWFza1swXSA9PT0gXCJib29sZWFuXCIgPyBcImJvb2xcIiA6IFwiYnl0ZVwiO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlUGl4ZWxzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IG1hc2tbaSAvIDRdO1xuICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDNdID0gdmFsdWUgKiAyNTUgfCAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRleHQucHV0SW1hZ2VEYXRhKHNvdXJjZURhdGEsIDAsIDApO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZpbGxNYXNrOiBmdW5jdGlvbihtYXNrKSB7XG5cbiAgICAgIHZhciBzb3VyY2VEYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBzb3VyY2VQaXhlbHMgPSBzb3VyY2VEYXRhLmRhdGE7XG5cbiAgICAgIHZhciBtYXNrVHlwZSA9IHR5cGVvZiBtYXNrWzBdID09PSBcImJvb2xlYW5cIiA/IFwiYm9vbFwiIDogXCJieXRlXCI7XG4gICAgICB2YXIgY29sb3JNb2RlID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMiA/IFwibm9ybWFsXCIgOiBcImdyYWRpZW50XCI7XG5cbiAgICAgIHZhciBjb2xvciA9IGNxLmNvbG9yKGFyZ3VtZW50c1sxXSk7XG4gICAgICBpZiAoY29sb3JNb2RlID09PSBcImdyYWRpZW50XCIpIGNvbG9yQiA9IGNxLmNvbG9yKGFyZ3VtZW50c1syXSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VQaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbWFza1tpIC8gNF07XG5cbiAgICAgICAgaWYgKG1hc2tUeXBlID09PSBcImJ5dGVcIikgdmFsdWUgLz0gMjU1O1xuXG4gICAgICAgIGlmIChjb2xvck1vZGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMF0gPSBjb2xvclswXSB8IDA7XG4gICAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDFdID0gY29sb3JbMV0gfCAwO1xuICAgICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAyXSA9IGNvbG9yWzJdIHwgMDtcbiAgICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgM10gPSB2YWx1ZSAqIDI1NSB8IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgMF0gPSBjb2xvclswXSArIChjb2xvckJbMF0gLSBjb2xvclswXSkgKiB2YWx1ZSB8IDA7XG4gICAgICAgICAgc291cmNlUGl4ZWxzW2kgKyAxXSA9IGNvbG9yWzFdICsgKGNvbG9yQlsxXSAtIGNvbG9yWzFdKSAqIHZhbHVlIHwgMDtcbiAgICAgICAgICBzb3VyY2VQaXhlbHNbaSArIDJdID0gY29sb3JbMl0gKyAoY29sb3JCWzJdIC0gY29sb3JbMl0pICogdmFsdWUgfCAwO1xuICAgICAgICAgIHNvdXJjZVBpeGVsc1tpICsgM10gPSAyNTU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShzb3VyY2VEYXRhLCAwLCAwKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbGVhcjogZnVuY3Rpb24oY29sb3IpIHtcbiAgICAgIGlmIChjb2xvcikge1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIC8vIHZhciByZXN1bHQgPSBjcS5jcmVhdGVDYW52YXModGhpcy5jYW52YXMpO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gY3EucG9vbCgpO1xuICAgICAgcmVzdWx0LndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHJlc3VsdC5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgIHJlc3VsdC5nZXRDb250ZXh0KFwiMmRcIikuZHJhd0ltYWdlKHRoaXMuY2FudmFzLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIGNxKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIGdyYWRpZW50VGV4dDogZnVuY3Rpb24odGV4dCwgeCwgeSwgbWF4V2lkdGgsIGdyYWRpZW50KSB7XG5cbiAgICAgIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgICB2YXIgaCA9IHRoaXMuZm9udEhlaWdodCgpICogMjtcblxuICAgICAgdmFyIG94ID0gMDtcbiAgICAgIHZhciBveSA9IDA7XG5cbiAgICAgIGlmIChtYXhXaWR0aCkge1xuICAgICAgICB2YXIgbGluZSA9IDA7XG4gICAgICAgIHZhciBsaW5lcyA9IFtcIlwiXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHdvcmQgPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgICAgICAgIHZhciB3b3JkV2lkdGggPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQod29yZCkud2lkdGg7XG5cbiAgICAgICAgICBpZiAob3ggKyB3b3JkV2lkdGggPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgbGluZXNbKytsaW5lXSA9IFwiXCI7XG4gICAgICAgICAgICBveCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbbGluZV0gKz0gd29yZDtcblxuICAgICAgICAgIG94ICs9IHdvcmRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHZhciBsaW5lcyA9IFt0ZXh0XTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgb3kgPSB5ICsgaSAqIGggKiAwLjYgfCAwO1xuICAgICAgICB2YXIgbGluZ3JhZCA9IHRoaXMuY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBveSwgMCwgb3kgKyBoICogMC42IHwgMCk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBncmFkaWVudC5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgIGxpbmdyYWQuYWRkQ29sb3JTdG9wKGdyYWRpZW50W2pdLCBncmFkaWVudFtqICsgMV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRleHQgPSBsaW5lc1tpXTtcblxuICAgICAgICB0aGlzLmZpbGxTdHlsZShsaW5ncmFkKS5maWxsVGV4dCh0ZXh0LCB4LCBveSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVDb2xvcjogZnVuY3Rpb24oY29sb3IpIHtcblxuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG5cbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdGhpcy5jYW52YXMud2lkdGg7IHgrKykge1xuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IHRoaXMuY2FudmFzLmhlaWdodDsgeSsrKSB7XG4gICAgICAgICAgdmFyIGkgPSAoeSAqIHRoaXMuY2FudmFzLndpZHRoICsgeCkgKiA0O1xuXG4gICAgICAgICAgaWYgKHBpeGVsc1tpICsgMF0gPT09IGNvbG9yWzBdICYmIHBpeGVsc1tpICsgMV0gPT09IGNvbG9yWzFdICYmIHBpeGVsc1tpICsgMl0gPT09IGNvbG9yWzJdKSB7XG4gICAgICAgICAgICBwaXhlbHNbaSArIDNdID0gMDtcbiAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBvdXRsaW5lOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG5cbiAgICAgIHZhciBuZXdEYXRhID0gdGhpcy5jcmVhdGVJbWFnZURhdGEodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB2YXIgbmV3UGl4ZWxzID0gbmV3RGF0YS5kYXRhO1xuXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrKHgsIHkpIHtcblxuICAgICAgICBpZiAoeCA8IDApIHJldHVybiAwO1xuICAgICAgICBpZiAoeCA+PSBjYW52YXMud2lkdGgpIHJldHVybiAwO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybiAwO1xuICAgICAgICBpZiAoeSA+PSBjYW52YXMuaGVpZ2h0KSByZXR1cm4gMDtcblxuICAgICAgICB2YXIgaSA9ICh4ICsgeSAqIGNhbnZhcy53aWR0aCkgKiA0O1xuXG4gICAgICAgIHJldHVybiBwaXhlbHNbaSArIDNdID4gMDtcblxuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHRoaXMuY2FudmFzLndpZHRoOyB4KyspIHtcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCB0aGlzLmNhbnZhcy5oZWlnaHQ7IHkrKykge1xuXG4gICAgICAgICAgdmFyIGZ1bGwgPSAwO1xuICAgICAgICAgIHZhciBpID0gKHkgKiBjYW52YXMud2lkdGggKyB4KSAqIDQ7XG5cbiAgICAgICAgICBpZiAoIXBpeGVsc1tpICsgM10pIGNvbnRpbnVlO1xuXG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4IC0gMSwgeSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4ICsgMSwgeSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4LCB5IC0gMSk7XG4gICAgICAgICAgZnVsbCArPSBjaGVjayh4LCB5ICsgMSk7XG5cbiAgICAgICAgICBpZiAoZnVsbCAhPT0gNCkge1xuXG4gICAgICAgICAgICBuZXdQaXhlbHNbaV0gPSAyNTU7XG4gICAgICAgICAgICBuZXdQaXhlbHNbaSArIDFdID0gMjU1O1xuICAgICAgICAgICAgbmV3UGl4ZWxzW2kgKyAyXSA9IDI1NTtcbiAgICAgICAgICAgIG5ld1BpeGVsc1tpICsgM10gPSAyNTU7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShuZXdEYXRhLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHNldEhzbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaHNsID0gY3EucmdiVG9Ic2wocGl4ZWxzW2kgKyAwXSwgcGl4ZWxzW2kgKyAxXSwgcGl4ZWxzW2kgKyAyXSk7XG5cbiAgICAgICAgaCA9IGFyZ3NbMF0gPT09IGZhbHNlID8gaHNsWzBdIDogY3EubGltaXRWYWx1ZShhcmdzWzBdLCAwLCAxKTtcbiAgICAgICAgcyA9IGFyZ3NbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShhcmdzWzFdLCAwLCAxKTtcbiAgICAgICAgbCA9IGFyZ3NbMl0gPT09IGZhbHNlID8gaHNsWzJdIDogY3EubGltaXRWYWx1ZShhcmdzWzJdLCAwLCAxKTtcblxuICAgICAgICBuZXdQaXhlbCA9IGNxLmhzbFRvUmdiKGgsIHMsIGwpO1xuXG4gICAgICAgIHBpeGVsc1tpICsgMF0gPSBuZXdQaXhlbFswXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAxXSA9IG5ld1BpeGVsWzFdO1xuICAgICAgICBwaXhlbHNbaSArIDJdID0gbmV3UGl4ZWxbMl07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBzaGlmdEhzbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB9XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgaHNsID0gY3EucmdiVG9Ic2wocGl4ZWxzW2kgKyAwXSwgcGl4ZWxzW2kgKyAxXSwgcGl4ZWxzW2kgKyAyXSk7XG5cbiAgICAgICAgaWYgKHBpeGVsc1tpICsgMF0gIT09IHBpeGVsc1tpICsgMV0gfHwgcGl4ZWxzW2kgKyAxXSAhPT0gcGl4ZWxzW2kgKyAyXSkge1xuICAgICAgICAgIGggPSBhcmdzWzBdID09PSBmYWxzZSA/IGhzbFswXSA6IGNxLndyYXBWYWx1ZShoc2xbMF0gKyBhcmdzWzBdLCAwLCAxKTtcbiAgICAgICAgICBzID0gYXJnc1sxXSA9PT0gZmFsc2UgPyBoc2xbMV0gOiBjcS5saW1pdFZhbHVlKGhzbFsxXSArIGFyZ3NbMV0sIDAsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGggPSBoc2xbMF07XG4gICAgICAgICAgcyA9IGhzbFsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGwgPSBhcmdzWzJdID09PSBmYWxzZSA/IGhzbFsyXSA6IGNxLmxpbWl0VmFsdWUoaHNsWzJdICsgYXJnc1syXSwgMCwgMSk7XG5cbiAgICAgICAgbmV3UGl4ZWwgPSBjcS5oc2xUb1JnYihoLCBzLCBsKTtcblxuICAgICAgICBwaXhlbHNbaSArIDBdID0gbmV3UGl4ZWxbMF07XG4gICAgICAgIHBpeGVsc1tpICsgMV0gPSBuZXdQaXhlbFsxXTtcbiAgICAgICAgcGl4ZWxzW2kgKyAyXSA9IG5ld1BpeGVsWzJdO1xuICAgICAgfVxuXG5cbiAgICAgIHRoaXMuY29udGV4dC5wdXRJbWFnZURhdGEoZGF0YSwgMCwgMCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhcHBseUNvbG9yOiBmdW5jdGlvbihjb2xvcikge1xuXG4gICAgICBpZiAoQ09DT09OSlMpIHJldHVybiB0aGlzO1xuICAgICAgdGhpcy5zYXZlKCk7XG5cbiAgICAgIHRoaXMuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKFwic291cmNlLWluXCIpO1xuICAgICAgdGhpcy5jbGVhcihjb2xvcik7XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbmVnYXRpdmU6IGZ1bmN0aW9uKHNyYywgZHN0KSB7XG5cbiAgICAgIHZhciBkYXRhID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHZhciBwaXhlbHMgPSBkYXRhLmRhdGE7XG4gICAgICB2YXIgciwgZywgYiwgYSwgaCwgcywgbCwgaHNsID0gW10sXG4gICAgICAgIG5ld1BpeGVsID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwaXhlbHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICAgICAgcGl4ZWxzW2kgKyAwXSA9IDI1NSAtIHBpeGVsc1tpICsgMF07XG4gICAgICAgIHBpeGVsc1tpICsgMV0gPSAyNTUgLSBwaXhlbHNbaSArIDFdO1xuICAgICAgICBwaXhlbHNbaSArIDJdID0gMjU1IC0gcGl4ZWxzW2kgKyAyXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250ZXh0LnB1dEltYWdlRGF0YShkYXRhLCAwLCAwKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJvdW5kUmVjdDogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG5cbiAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLm1vdmVUbyh4ICsgcmFkaXVzLCB5KTtcbiAgICAgIHRoaXMubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XG4gICAgICB0aGlzLnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xuICAgICAgdGhpcy5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgIHRoaXMucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XG4gICAgICB0aGlzLmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcbiAgICAgIHRoaXMucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaGVpZ2h0LCB4LCB5ICsgaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICAgIHRoaXMubGluZVRvKHgsIHkgKyByYWRpdXMpO1xuICAgICAgdGhpcy5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xuICAgICAgdGhpcy5jbG9zZVBhdGgoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG1hcmt1cFRleHQ6IGZ1bmN0aW9uKHRleHQpIHtcblxuXG4gICAgfSxcblxuICAgIHdyYXBwZWRUZXh0OiBmdW5jdGlvbih0ZXh0LCB4LCB5LCBtYXhXaWR0aCwgbGluZUhlaWdodCkge1xuXG4gICAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgICAgdmFyIGxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0IHx8IHRoaXMuZm9udEhlaWdodCgpO1xuXG4gICAgICB2YXIgb3ggPSAwO1xuICAgICAgdmFyIG95ID0gMDtcblxuICAgICAgaWYgKG1heFdpZHRoKSB7XG4gICAgICAgIHZhciBsaW5lID0gMDtcbiAgICAgICAgdmFyIGxpbmVzID0gW1wiXCJdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgd29yZCA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgICAgICAgdmFyIHdvcmRXaWR0aCA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dCh3b3JkKS53aWR0aDtcblxuICAgICAgICAgIGlmIChveCArIHdvcmRXaWR0aCA+IG1heFdpZHRoIHx8IHdvcmRzW2ldID09PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBsaW5lc1srK2xpbmVdID0gXCJcIjtcbiAgICAgICAgICAgIG94ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHdvcmRzW2ldICE9PSBcIlxcblwiKSB7XG4gICAgICAgICAgICBsaW5lc1tsaW5lXSArPSB3b3JkO1xuXG4gICAgICAgICAgICBveCArPSB3b3JkV2lkdGg7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxpbmVzID0gW3RleHRdO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBveSA9IHkgKyBpICogbGluZUhlaWdodCB8IDA7XG5cbiAgICAgICAgdmFyIHRleHQgPSBsaW5lc1tpXTtcblxuICAgICAgICB0aGlzLmZpbGxUZXh0KHRleHQsIHgsIG95KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGZvbnRIZWlnaHRzOiB7fSxcblxuICAgIGZvbnRIZWlnaHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGZvbnQgPSB0aGlzLmZvbnQoKTtcblxuICAgICAgaWYgKCF0aGlzLmZvbnRIZWlnaHRzW2ZvbnRdKSB7XG4gICAgICAgIHZhciB0ZW1wID0gY3EoMTAwLCAxMDApO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB7fTtcbiAgICAgICAgdGVtcC5mb250KGZvbnQpLmZpbGxTdHlsZShcIiNmZmZcIik7XG4gICAgICAgIHRlbXAudGV4dEJhc2VsaW5lKFwiYm90dG9tXCIpLmZpbGxUZXh0KFwiZ01cIiwgMjUsIDEwMCk7XG4gICAgICAgIHRlbXAudHJpbShmYWxzZSwgY2hhbmdlcyk7XG4gICAgICAgIGhlaWdodCArPSBjaGFuZ2VzLmJvdHRvbTtcblxuICAgICAgICB2YXIgdGVtcCA9IGNxKDEwMCwgMTAwKTtcbiAgICAgICAgdmFyIGNoYW5nZXMgPSB7fTtcbiAgICAgICAgdGVtcC5mb250KGZvbnQpLmZpbGxTdHlsZShcIiNmZmZcIik7XG4gICAgICAgIHRlbXAudGV4dEJhc2VsaW5lKFwidG9wXCIpLmZpbGxUZXh0KFwiZ01cIiwgMjUsIDApO1xuICAgICAgICB0ZW1wLnRyaW0oZmFsc2UsIGNoYW5nZXMpO1xuICAgICAgICBoZWlnaHQgKz0gY2hhbmdlcy50b3A7XG5cbiAgICAgICAgdmFyIHRlbXAgPSBjcSgxMDAsIDEwMCk7XG4gICAgICAgIHZhciBjaGFuZ2VzID0ge307XG4gICAgICAgIHRlbXAuZm9udChmb250KS5maWxsU3R5bGUoXCIjZmZmXCIpO1xuICAgICAgICB0ZW1wLnRleHRCYXNlbGluZShcImFscGhhYmV0aWNcIikuZmlsbFRleHQoXCJnTVwiLCA1MCwgNTApO1xuICAgICAgICB0ZW1wLnRyaW0oZmFsc2UsIGNoYW5nZXMpO1xuICAgICAgICBoZWlnaHQgKz0gdGVtcC5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5mb250SGVpZ2h0c1tmb250XSA9IGhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZm9udEhlaWdodHNbZm9udF07XG4gICAgfSxcblxuICAgIHRleHRCb3VuZGFyaWVzOiBmdW5jdGlvbih0ZXh0LCBtYXhXaWR0aCkge1xuICAgICAgdmFyIHdvcmRzID0gdGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICAgIHZhciBoID0gdGhpcy5mb250SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBveCA9IDA7XG4gICAgICB2YXIgb3kgPSAwO1xuXG4gICAgICBpZiAobWF4V2lkdGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSAwO1xuICAgICAgICB2YXIgbGluZXMgPSBbXCJcIl07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciB3b3JkID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICAgICAgICB2YXIgd29yZFdpZHRoID0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHdvcmQpLndpZHRoO1xuXG4gICAgICAgICAgaWYgKG94ICsgd29yZFdpZHRoID4gbWF4V2lkdGggfHwgd29yZHNbaV0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICAgIGxpbmVzWysrbGluZV0gPSBcIlwiO1xuICAgICAgICAgICAgb3ggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh3b3Jkc1tpXSAhPT0gXCJcXG5cIikge1xuICAgICAgICAgICAgbGluZXNbbGluZV0gKz0gd29yZDtcbiAgICAgICAgICAgIG94ICs9IHdvcmRXaWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFt0ZXh0XTtcbiAgICAgICAgbWF4V2lkdGggPSB0aGlzLm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWlnaHQ6IGxpbmVzLmxlbmd0aCAqIGgsXG4gICAgICAgIHdpZHRoOiBtYXhXaWR0aCxcbiAgICAgICAgbGluZXM6IGxpbmVzLmxlbmd0aCxcbiAgICAgICAgbGluZUhlaWdodDogaFxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZXBlYXRJbWFnZVJlZ2lvbjogZnVuY3Rpb24oaW1hZ2UsIHN4LCBzeSwgc3csIHNoLCBkeCwgZHksIGR3LCBkaCkge1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLnJlY3QoZHgsIGR5LCBkdywgZGgpO1xuICAgICAgdGhpcy5jbGlwKCk7XG5cbiAgICAgIGZvciAodmFyIHggPSAwLCBsZW4gPSBNYXRoLmNlaWwoZHcgLyBzdyk7IHggPCBsZW47IHgrKykge1xuICAgICAgICBmb3IgKHZhciB5ID0gMCwgbGVueSA9IE1hdGguY2VpbChkaCAvIHNoKTsgeSA8IGxlbnk7IHkrKykge1xuICAgICAgICAgIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBzeCwgc3ksIHN3LCBzaCwgZHggKyB4ICogc3csIGR5ICsgeSAqIHNoLCBzdywgc2gpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVzdG9yZSgpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVwZWF0SW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoKSB7XG4gICAgICAvLyBpZiAoIWVudi5kZXRhaWxzKSByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCA5KSB7XG4gICAgICAgIHRoaXMucmVwZWF0SW1hZ2VSZWdpb24oaW1hZ2UsIDAsIDAsIGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQsIHgsIHksIHcsIGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXBlYXRJbWFnZVJlZ2lvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYm9yZGVySW1hZ2U6IGZ1bmN0aW9uKGltYWdlLCB4LCB5LCB3LCBoLCB0LCByLCBiLCBsLCBmaWxsKSB7XG5cbiAgICAgIC8vIGlmICghZW52LmRldGFpbHMpIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIHQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgYm90dG9tTGVmdCA9IHQuYm90dG9tTGVmdCB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgIHZhciBib3R0b21SaWdodCA9IHQuYm90dG9tUmlnaHQgfHwgWzAsIDAsIDAsIDBdO1xuICAgICAgICB2YXIgdG9wTGVmdCA9IHQudG9wTGVmdCB8fCBbMCwgMCwgMCwgMF07XG4gICAgICAgIHZhciB0b3BSaWdodCA9IHQudG9wUmlnaHQgfHwgWzAsIDAsIDAsIDBdO1xuXG4gICAgICAgIHZhciBjbGggPSBib3R0b21MZWZ0WzNdICsgdG9wTGVmdFszXTtcbiAgICAgICAgdmFyIGNyaCA9IGJvdHRvbVJpZ2h0WzNdICsgdG9wUmlnaHRbM107XG4gICAgICAgIHZhciBjdHcgPSB0b3BMZWZ0WzJdICsgdG9wUmlnaHRbMl07XG4gICAgICAgIHZhciBjYncgPSBib3R0b21MZWZ0WzJdICsgYm90dG9tUmlnaHRbMl07XG5cbiAgICAgICAgdC5maWxsUGFkZGluZyA9IFswLCAwLCAwLCAwXTtcblxuICAgICAgICBpZiAodC5sZWZ0KSB0LmZpbGxQYWRkaW5nWzBdID0gdC5sZWZ0WzJdO1xuICAgICAgICBpZiAodC50b3ApIHQuZmlsbFBhZGRpbmdbMV0gPSB0LnRvcFszXTtcbiAgICAgICAgaWYgKHQucmlnaHQpIHQuZmlsbFBhZGRpbmdbMl0gPSB0LnJpZ2h0WzJdO1xuICAgICAgICBpZiAodC5ib3R0b20pIHQuZmlsbFBhZGRpbmdbM10gPSB0LmJvdHRvbVszXTtcblxuICAgICAgICAvLyBpZiAoIXQuZmlsbFBhZGRpbmcpIHQuZmlsbFBhZGRpbmcgPSBbMCwgMCwgMCwgMF07XG5cbiAgICAgICAgaWYgKHQuZmlsbCkge1xuICAgICAgICAgIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LmZpbGxbMF0sIHQuZmlsbFsxXSwgdC5maWxsWzJdLCB0LmZpbGxbM10sIHggKyB0LmZpbGxQYWRkaW5nWzBdLCB5ICsgdC5maWxsUGFkZGluZ1sxXSwgdyAtIHQuZmlsbFBhZGRpbmdbMl0gLSB0LmZpbGxQYWRkaW5nWzBdLCBoIC0gdC5maWxsUGFkZGluZ1szXSAtIHQuZmlsbFBhZGRpbmdbMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMuZmlsbFJlY3QoeCArIHQuZmlsbFBhZGRpbmdbMF0sIHkgKyB0LmZpbGxQYWRkaW5nWzFdLCB3IC0gdC5maWxsUGFkZGluZ1syXSAtIHQuZmlsbFBhZGRpbmdbMF0sIGggLSB0LmZpbGxQYWRkaW5nWzNdIC0gdC5maWxsUGFkZGluZ1sxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodC5sZWZ0KSB0aGlzW3QubGVmdFs0XSA9PT0gXCJzdHJldGNoXCIgPyBcImRyYXdJbWFnZVwiIDogXCJyZXBlYXRJbWFnZVwiXShpbWFnZSwgdC5sZWZ0WzBdLCB0LmxlZnRbMV0sIHQubGVmdFsyXSwgdC5sZWZ0WzNdLCB4LCB5ICsgdG9wTGVmdFszXSwgdC5sZWZ0WzJdLCBoIC0gY2xoKTtcbiAgICAgICAgaWYgKHQucmlnaHQpIHRoaXNbdC5yaWdodFs0XSA9PT0gXCJzdHJldGNoXCIgPyBcImRyYXdJbWFnZVwiIDogXCJyZXBlYXRJbWFnZVwiXShpbWFnZSwgdC5yaWdodFswXSwgdC5yaWdodFsxXSwgdC5yaWdodFsyXSwgdC5yaWdodFszXSwgeCArIHcgLSB0LnJpZ2h0WzJdLCB5ICsgdG9wUmlnaHRbM10sIHQucmlnaHRbMl0sIGggLSBjcmgpO1xuICAgICAgICBpZiAodC50b3ApIHRoaXNbdC50b3BbNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQudG9wWzBdLCB0LnRvcFsxXSwgdC50b3BbMl0sIHQudG9wWzNdLCB4ICsgdG9wTGVmdFsyXSwgeSwgdyAtIGN0dywgdC50b3BbM10pO1xuICAgICAgICBpZiAodC5ib3R0b20pIHRoaXNbdC5ib3R0b21bNF0gPT09IFwic3RyZXRjaFwiID8gXCJkcmF3SW1hZ2VcIiA6IFwicmVwZWF0SW1hZ2VcIl0oaW1hZ2UsIHQuYm90dG9tWzBdLCB0LmJvdHRvbVsxXSwgdC5ib3R0b21bMl0sIHQuYm90dG9tWzNdLCB4ICsgYm90dG9tTGVmdFsyXSwgeSArIGggLSB0LmJvdHRvbVszXSwgdyAtIGNidywgdC5ib3R0b21bM10pO1xuXG4gICAgICAgIGlmICh0LmJvdHRvbUxlZnQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LmJvdHRvbUxlZnRbMF0sIHQuYm90dG9tTGVmdFsxXSwgdC5ib3R0b21MZWZ0WzJdLCB0LmJvdHRvbUxlZnRbM10sIHgsIHkgKyBoIC0gdC5ib3R0b21MZWZ0WzNdLCB0LmJvdHRvbUxlZnRbMl0sIHQuYm90dG9tTGVmdFszXSk7XG4gICAgICAgIGlmICh0LnRvcExlZnQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LnRvcExlZnRbMF0sIHQudG9wTGVmdFsxXSwgdC50b3BMZWZ0WzJdLCB0LnRvcExlZnRbM10sIHgsIHksIHQudG9wTGVmdFsyXSwgdC50b3BMZWZ0WzNdKTtcbiAgICAgICAgaWYgKHQudG9wUmlnaHQpIHRoaXMuZHJhd0ltYWdlKGltYWdlLCB0LnRvcFJpZ2h0WzBdLCB0LnRvcFJpZ2h0WzFdLCB0LnRvcFJpZ2h0WzJdLCB0LnRvcFJpZ2h0WzNdLCB4ICsgdyAtIHQudG9wUmlnaHRbMl0sIHksIHQudG9wUmlnaHRbMl0sIHQudG9wUmlnaHRbM10pO1xuICAgICAgICBpZiAodC5ib3R0b21SaWdodCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIHQuYm90dG9tUmlnaHRbMF0sIHQuYm90dG9tUmlnaHRbMV0sIHQuYm90dG9tUmlnaHRbMl0sIHQuYm90dG9tUmlnaHRbM10sIHggKyB3IC0gdC5ib3R0b21SaWdodFsyXSwgeSArIGggLSB0LmJvdHRvbVJpZ2h0WzNdLCB0LmJvdHRvbVJpZ2h0WzJdLCB0LmJvdHRvbVJpZ2h0WzNdKTtcblxuXG4gICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgLyogdG9wICovXG4gICAgICAgIGlmICh0ID4gMCAmJiB3IC0gbCAtIHIgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgMCwgaW1hZ2Uud2lkdGggLSBsIC0gciwgdCwgeCArIGwsIHksIHcgLSBsIC0gciwgdCk7XG5cbiAgICAgICAgLyogYm90dG9tICovXG4gICAgICAgIGlmIChiID4gMCAmJiB3IC0gbCAtIHIgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiwgaW1hZ2Uud2lkdGggLSBsIC0gciwgYiwgeCArIGwsIHkgKyBoIC0gYiwgdyAtIGwgLSByLCBiKTtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyh4LCB5LCB3LCBoLCB0LCByLCBiLCBsKTtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhpbWFnZSwgMCwgdCwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHgsIHkgKyB0LCBsLCBoIC0gYiAtIHQpO1xuICAgICAgICAvKiBsZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiBoIC0gYiAtIHQgPiAwKSB0aGlzLmRyYXdJbWFnZShpbWFnZSwgMCwgdCwgbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHgsIHkgKyB0LCBsLCBoIC0gYiAtIHQpO1xuXG5cbiAgICAgICAgLyogcmlnaHQgKi9cbiAgICAgICAgaWYgKHIgPiAwICYmIGggLSBiIC0gdCA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAtIHIsIHQsIHIsIGltYWdlLmhlaWdodCAtIGIgLSB0LCB4ICsgdyAtIHIsIHkgKyB0LCByLCBoIC0gYiAtIHQpO1xuXG4gICAgICAgIC8qIHRvcC1sZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiB0ID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIGwsIHQsIHgsIHksIGwsIHQpO1xuXG4gICAgICAgIC8qIHRvcC1yaWdodCAqL1xuICAgICAgICBpZiAociA+IDAgJiYgdCA+IDApIHRoaXMuZHJhd0ltYWdlKGltYWdlLCBpbWFnZS53aWR0aCAtIHIsIDAsIHIsIHQsIHggKyB3IC0gciwgeSwgciwgdCk7XG5cbiAgICAgICAgLyogYm90dG9tLXJpZ2h0ICovXG4gICAgICAgIGlmIChyID4gMCAmJiBiID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIGltYWdlLndpZHRoIC0gciwgaW1hZ2UuaGVpZ2h0IC0gYiwgciwgYiwgeCArIHcgLSByLCB5ICsgaCAtIGIsIHIsIGIpO1xuXG4gICAgICAgIC8qIGJvdHRvbS1sZWZ0ICovXG4gICAgICAgIGlmIChsID4gMCAmJiBiID4gMCkgdGhpcy5kcmF3SW1hZ2UoaW1hZ2UsIDAsIGltYWdlLmhlaWdodCAtIGIsIGwsIGIsIHgsIHkgKyBoIC0gYiwgbCwgYik7XG5cbiAgICAgICAgaWYgKGZpbGwpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0eWxlKGZpbGwpLmZpbGxSZWN0KHggKyBsLCB5ICsgdCwgdyAtIGwgLSByLCBoIC0gdCAtIGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodyAtIGwgLSByID4gMCAmJiBoIC0gdCAtIGIgPiAwKVxuICAgICAgICAgICAgICB0aGlzLmRyYXdJbWFnZShpbWFnZSwgbCwgdCwgaW1hZ2Uud2lkdGggLSByIC0gbCwgaW1hZ2UuaGVpZ2h0IC0gYiAtIHQsIHggKyBsLCB5ICsgdCwgdyAtIGwgLSByLCBoIC0gdCAtIGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXRQaXhlbDogZnVuY3Rpb24oY29sb3IsIHgsIHkpIHtcblxuICAgICAgLyogZmlsbFJlY3QgaXMgc2xvdyEgKi9cblxuICAgICAgcmV0dXJuIHRoaXMuZmlsbFN0eWxlKGNvbG9yKS5maWxsUmVjdCh4LCB5LCAxLCAxKTtcblxuICAgICAgLyogdGhpcyBpcyBob3cgaXQgc2hvdWxkIHdvcmsgLSBidXQgaXQgZG9lcyBub3QgKi9cblxuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIHZhciBwaXhlbCA9IHRoaXMuY3JlYXRlSW1hZ2VEYXRhKDEsIDEpO1xuXG4gICAgICBwaXhlbC5kYXRhWzBdID0gY29sb3JbMF07XG4gICAgICBwaXhlbC5kYXRhWzFdID0gY29sb3JbMV07XG4gICAgICBwaXhlbC5kYXRhWzJdID0gY29sb3JbMl07XG4gICAgICBwaXhlbC5kYXRhWzNdID0gMS4wO1xuXG4gICAgICB0aGlzLnB1dEltYWdlRGF0YShwaXhlbCwgeCwgeSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQaXhlbDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdmFyIHBpeGVsID0gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKS5kYXRhO1xuICAgICAgcmV0dXJuIGNxLmNvbG9yKFtwaXhlbFswXSwgcGl4ZWxbMV0sIHBpeGVsWzJdLCBwaXhlbFszXV0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVJbWFnZURhdGE6IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGlmIChmYWxzZSAmJiB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhLmFwcGx5KHRoaXMuY29udGV4dCwgYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5lbXB0eUNhbnZhcykge1xuICAgICAgICAgIHRoaXMuZW1wdHlDYW52YXMgPSBjcS5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgdGhpcy5lbXB0eUNhbnZhc0NvbnRleHQgPSB0aGlzLmVtcHR5Q2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZW1wdHlDYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5lbXB0eUNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5Q2FudmFzQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0cm9rZUxpbmU6IGZ1bmN0aW9uKHgxLCB5MSwgeDIsIHkyKSB7XG5cbiAgICAgIHRoaXMuYmVnaW5QYXRoKCk7XG5cbiAgICAgIGlmICh0eXBlb2YgeDIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oeDEueCwgeDEueSk7XG4gICAgICAgIHRoaXMubGluZVRvKHkxLngsIHkxLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb3ZlVG8oeDEsIHkxKTtcbiAgICAgICAgdGhpcy5saW5lVG8oeDIsIHkyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdHJva2UoKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9LFxuXG4gICAgc2V0TGluZURhc2g6IGZ1bmN0aW9uKGRhc2gpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHQuc2V0TGluZURhc2gpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnNldExpbmVEYXNoKGRhc2gpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0gZWxzZSByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgbWVhc3VyZVRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGdldExpbmVEYXNoOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGluZURhc2goKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlUmFkaWFsR3JhZGllbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudC5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUxpbmVhckdyYWRpZW50OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlTGluZWFyR3JhZGllbnQuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVQYXR0ZXJuOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuY3JlYXRlUGF0dGVybi5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGdldEltYWdlRGF0YTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEltYWdlRGF0YS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIC8qIElmIHlvdSB0aGluayB0aGF0IEkgYW0gcmV0YXJkZWQgYmVjYXVzZSBJIHVzZSBmaWxsUmVjdCB0byBzZXRcbiAgICAgICBwaXhlbHMgLSByZWFkIGFib3V0IHByZW11bHRpcGxlZCBhbHBoYSBpbiBjYW52YXMgKi9cblxuICAgIHdyaXRlTWV0YTogZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gICAgICBqc29uID0gZW5jb2RlVVJJQ29tcG9uZW50KGpzb24pO1xuXG4gICAgICB2YXIgYnl0ZXMgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJ5dGVzLnB1c2goanNvbi5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgLy8gICAgICBjb25zb2xlLmxvZyhqc29uW2ldKVxuICAgICAgfVxuXG4gICAgICBieXRlcy5wdXNoKDEyNyk7XG5cbiAgICAgIHZhciB4ID0gdGhpcy53aWR0aCAtIDE7XG4gICAgICB2YXIgeSA9IHRoaXMuaGVpZ2h0IC0gMTtcblxuICAgICAgdmFyIHBpeGVsID0gW107XG5cbiAgICAgIHdoaWxlIChieXRlcy5sZW5ndGgpIHtcblxuICAgICAgICB2YXIgYnl0ZSA9IGJ5dGVzLnNoaWZ0KCk7XG5cbiAgICAgICAgcGl4ZWwudW5zaGlmdChieXRlICogMik7XG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyh4ICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgYnl0ZSk7XG5cbiAgICAgICAgaWYgKCFieXRlcy5sZW5ndGgpXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAzIC0gcGl4ZWwubGVuZ3RoOyBpKyspIHBpeGVsLnVuc2hpZnQoMjU0KTtcblxuICAgICAgICBpZiAocGl4ZWwubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgdGhpcy5maWxsU3R5bGUoY3EuY29sb3IocGl4ZWwpLnRvUmdiKCkpLmZpbGxSZWN0KHgsIHksIDEsIDEpO1xuICAgICAgICAgIHBpeGVsID0gW107XG4gICAgICAgICAgeC0tO1xuXG4gICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICB5LS07XG4gICAgICAgICAgICB4ID0gdGhpcy53aWR0aCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfSxcblxuICAgIHJlYWRNZXRhOiBmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIGJ5dGVzID0gW107XG5cbiAgICAgIHZhciB4ID0gdGhpcy53aWR0aCAtIDE7XG4gICAgICB2YXIgeSA9IHRoaXMuaGVpZ2h0IC0gMTtcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIHBpeGVsID0gdGhpcy5nZXRQaXhlbCh4LCB5KTtcblxuICAgICAgICB2YXIgc3RvcCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMzsgaSsrKSB7XG5cbiAgICAgICAgICBpZiAocGl4ZWxbMiAtIGldID09PSAyNTQpIHN0b3AgPSB0cnVlO1xuXG4gICAgICAgICAgZWxzZSBieXRlcy5wdXNoKHBpeGVsWzIgLSBpXSAvIDIgfCAwKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0b3ApIGJyZWFrO1xuXG4gICAgICAgIHgtLTtcblxuICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICB5LS07XG4gICAgICAgICAgeCA9IHRoaXMud2lkdGggLSAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgdmFyIGpzb24gPSBcIlwiO1xuXG4gICAgICB3aGlsZSAoYnl0ZXMubGVuZ3RoKSB7XG4gICAgICAgIGpzb24gKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlcy5zaGlmdCgpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGEgPSBmYWxzZTtcblxuICAgICAgY29uc29sZS5sb2coanNvbik7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChqc29uKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICB9LFxuXG4gICAgZ2V0IHdpZHRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLndpZHRoO1xuICAgIH0sXG5cbiAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FudmFzLmhlaWdodDtcbiAgICB9LFxuXG4gICAgc2V0IHdpZHRoKHcpIHtcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdztcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICByZXR1cm4gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgfSxcblxuICAgIHNldCBoZWlnaHQoaCkge1xuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaDtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICByZXR1cm4gdGhpcy5jYW52YXMuaGVpZ2h0O1xuICAgIH1cblxuXG4gIH07XG5cbiAgLyogZXh0ZW5kIExheWVyIHdpdGggZHJhd2luZyBjb250ZXh0IG1ldGhvZHMgKi9cblxuICB2YXIgbWV0aG9kcyA9IFtcImFyY1wiLCBcImFyY1RvXCIsIFwiYmVnaW5QYXRoXCIsIFwiYmV6aWVyQ3VydmVUb1wiLCBcImNsZWFyUmVjdFwiLCBcImNsaXBcIiwgXCJjbG9zZVBhdGhcIiwgXCJjcmVhdGVMaW5lYXJHcmFkaWVudFwiLCBcImNyZWF0ZVJhZGlhbEdyYWRpZW50XCIsIFwiY3JlYXRlUGF0dGVyblwiLCBcImRyYXdGb2N1c1JpbmdcIiwgXCJkcmF3SW1hZ2VcIiwgXCJmaWxsXCIsIFwiZmlsbFJlY3RcIiwgXCJmaWxsVGV4dFwiLCBcImdldEltYWdlRGF0YVwiLCBcImlzUG9pbnRJblBhdGhcIiwgXCJsaW5lVG9cIiwgXCJtZWFzdXJlVGV4dFwiLCBcIm1vdmVUb1wiLCBcInB1dEltYWdlRGF0YVwiLCBcInF1YWRyYXRpY0N1cnZlVG9cIiwgXCJyZWN0XCIsIFwicmVzdG9yZVwiLCBcInJvdGF0ZVwiLCBcInNhdmVcIiwgXCJzY2FsZVwiLCBcInNldFRyYW5zZm9ybVwiLCBcInN0cm9rZVwiLCBcInN0cm9rZVJlY3RcIiwgXCJzdHJva2VUZXh0XCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlXCIsIFwic2V0TGluZURhc2hcIl07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG5hbWUgPSBtZXRob2RzW2ldO1xuXG4gICAgaWYgKGNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSkgY29udGludWU7XG5cbiAgICBjcS5MYXllci5wcm90b3R5cGVbbmFtZV0gPSAoZnVuY3Rpb24obWV0aG9kKSB7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY3EuZmFzdEFwcGx5KG1ldGhvZCwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgIH0pKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGVbbmFtZV0pO1xuXG5cbiAgICBjb250aW51ZTtcblxuXG4gICAgaWYgKCF0aGlzLmRlYnVnKSB7XG4gICAgICAvLyBpZiAoIWNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSkgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gRnVuY3Rpb24oXCJ0aGlzLmNvbnRleHQuXCIgKyBuYW1lICsgXCIuYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpOyByZXR1cm4gdGhpcztcIik7XG5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgKGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgICAgICBjcS5MYXllci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB0aGlzLmNvbnRleHRbbmFtZV0uYXBwbHkodGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgY3EuZmFzdEFwcGx5KHRoaXMuY29udGV4dFtuYW1lXSwgdGhpcy5jb250ZXh0LCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgfSkobmFtZSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIChmdW5jdGlvbihuYW1lKSB7XG5cbiAgICAgICAgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udGV4dFtuYW1lXS5hcHBseSh0aGlzLmNvbnRleHQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgdGhyb3cgKGUgKyBlcnIuc3RhY2spO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLCBuYW1lLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9KShuYW1lKTtcblxuICAgIH1cblxuICB9O1xuXG4gIC8qIGNyZWF0ZSBzZXR0ZXJzIGFuZCBnZXR0ZXJzICovXG5cbiAgdmFyIHByb3BlcnRpZXMgPSBbXCJjYW52YXNcIiwgXCJmaWxsU3R5bGVcIiwgXCJmb250XCIsIFwiZ2xvYmFsQWxwaGFcIiwgXCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb25cIiwgXCJsaW5lQ2FwXCIsIFwibGluZUpvaW5cIiwgXCJsaW5lV2lkdGhcIiwgXCJtaXRlckxpbWl0XCIsIFwic2hhZG93T2Zmc2V0WFwiLCBcInNoYWRvd09mZnNldFlcIiwgXCJzaGFkb3dCbHVyXCIsIFwic2hhZG93Q29sb3JcIiwgXCJzdHJva2VTdHlsZVwiLCBcInRleHRBbGlnblwiLCBcInRleHRCYXNlbGluZVwiLCBcImxpbmVEYXNoT2Zmc2V0XCJdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBuYW1lID0gcHJvcGVydGllc1tpXTtcbiAgICBpZiAoIWNxLkxheWVyLnByb3RvdHlwZVtuYW1lXSkgY3EuTGF5ZXIucHJvdG90eXBlW25hbWVdID0gRnVuY3Rpb24oXCJpZihhcmd1bWVudHMubGVuZ3RoKSB7IHRoaXMuY29udGV4dC5cIiArIG5hbWUgKyBcIiA9IGFyZ3VtZW50c1swXTsgcmV0dXJuIHRoaXM7IH0gZWxzZSB7IHJldHVybiB0aGlzLmNvbnRleHQuXCIgKyBuYW1lICsgXCI7IH1cIik7XG4gIH07XG5cbiAgLyogY29sb3IgKi9cblxuICBjcS5Db2xvciA9IGZ1bmN0aW9uKGRhdGEsIHR5cGUpIHtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB0aGlzLnBhcnNlKGRhdGEsIHR5cGUpO1xuICB9XG5cbiAgY3EuQ29sb3IucHJvdG90eXBlID0ge1xuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9SZ2IoKTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uKGFyZ3MsIHR5cGUpIHtcbiAgICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgY3EuQ29sb3IpIHtcbiAgICAgICAgdGhpc1swXSA9IGFyZ3NbMF1bMF07XG4gICAgICAgIHRoaXNbMV0gPSBhcmdzWzBdWzFdO1xuICAgICAgICB0aGlzWzJdID0gYXJnc1swXVsyXTtcbiAgICAgICAgdGhpc1szXSA9IGFyZ3NbMF1bM107XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBhcmdzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IG51bGw7XG5cbiAgICAgICAgaWYgKGFyZ3NbMF0gPT09IFwiI1wiKSB7XG4gICAgICAgICAgdmFyIHJnYiA9IGNxLmhleFRvUmdiKGFyZ3MpO1xuICAgICAgICAgIHRoaXNbMF0gPSByZ2JbMF07XG4gICAgICAgICAgdGhpc1sxXSA9IHJnYlsxXTtcbiAgICAgICAgICB0aGlzWzJdID0gcmdiWzJdO1xuICAgICAgICAgIHRoaXNbM10gPSAxLjA7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9yZ2JcXCgoLiopLCguKiksKC4qKVxcKS8pKSB7XG4gICAgICAgICAgdGhpc1swXSA9IG1hdGNoWzFdIHwgMDtcbiAgICAgICAgICB0aGlzWzFdID0gbWF0Y2hbMl0gfCAwO1xuICAgICAgICAgIHRoaXNbMl0gPSBtYXRjaFszXSB8IDA7XG4gICAgICAgICAgdGhpc1szXSA9IDEuMDtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaCA9IGFyZ3MubWF0Y2goL3JnYmFcXCgoLiopLCguKiksKC4qKVxcKS8pKSB7XG4gICAgICAgICAgdGhpc1swXSA9IG1hdGNoWzFdIHwgMDtcbiAgICAgICAgICB0aGlzWzFdID0gbWF0Y2hbMl0gfCAwO1xuICAgICAgICAgIHRoaXNbMl0gPSBtYXRjaFszXSB8IDA7XG4gICAgICAgICAgdGhpc1szXSA9IG1hdGNoWzRdIHwgMDtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaCA9IGFyZ3MubWF0Y2goL2hzbFxcKCguKiksKC4qKSwoLiopXFwpLykpIHtcbiAgICAgICAgICB0aGlzLmZyb21Ic2wobWF0Y2hbMV0sIG1hdGNoWzJdLCBtYXRjaFszXSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2ggPSBhcmdzLm1hdGNoKC9oc3ZcXCgoLiopLCguKiksKC4qKVxcKS8pKSB7XG4gICAgICAgICAgdGhpcy5mcm9tSHN2KG1hdGNoWzFdLCBtYXRjaFsyXSwgbWF0Y2hbM10pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiaHNsXCI6XG4gICAgICAgICAgY2FzZSBcImhzbGFcIjpcblxuICAgICAgICAgICAgdGhpcy5mcm9tSHNsKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiaHN2XCI6XG4gICAgICAgICAgY2FzZSBcImhzdmFcIjpcblxuICAgICAgICAgICAgdGhpcy5mcm9tSHN2KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpc1swXSA9IGFyZ3NbMF07XG4gICAgICAgICAgICB0aGlzWzFdID0gYXJnc1sxXTtcbiAgICAgICAgICAgIHRoaXNbMl0gPSBhcmdzWzJdO1xuICAgICAgICAgICAgdGhpc1szXSA9IHR5cGVvZiBhcmdzWzNdID09PSBcInVuZGVmaW5lZFwiID8gMS4wIDogYXJnc1szXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGE6IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmFscGhhKGEpO1xuICAgIH0sXG5cbiAgICBhbHBoYTogZnVuY3Rpb24oYSkge1xuICAgICAgdGhpc1szXSA9IGE7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZnJvbUhzbDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29tcG9uZW50cyA9IGFyZ3VtZW50c1swXSBpbnN0YW5jZW9mIEFycmF5ID8gYXJndW1lbnRzWzBdIDogYXJndW1lbnRzO1xuXG4gICAgICB2YXIgY29sb3IgPSBjcS5oc2xUb1JnYihwYXJzZUZsb2F0KGNvbXBvbmVudHNbMF0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMV0pLCBwYXJzZUZsb2F0KGNvbXBvbmVudHNbMl0pKTtcblxuICAgICAgdGhpc1swXSA9IGNvbG9yWzBdO1xuICAgICAgdGhpc1sxXSA9IGNvbG9yWzFdO1xuICAgICAgdGhpc1syXSA9IGNvbG9yWzJdO1xuICAgICAgdGhpc1szXSA9IHR5cGVvZiBhcmd1bWVudHNbM10gPT09IFwidW5kZWZpbmVkXCIgPyAxLjAgOiBhcmd1bWVudHNbM107XG4gICAgfSxcblxuICAgIGZyb21Ic3Y6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbXBvbmVudHMgPSBhcmd1bWVudHNbMF0gaW5zdGFuY2VvZiBBcnJheSA/IGFyZ3VtZW50c1swXSA6IGFyZ3VtZW50cztcbiAgICAgIHZhciBjb2xvciA9IGNxLmhzdlRvUmdiKHBhcnNlRmxvYXQoY29tcG9uZW50c1swXSksIHBhcnNlRmxvYXQoY29tcG9uZW50c1sxXSksIHBhcnNlRmxvYXQoY29tcG9uZW50c1syXSkpO1xuXG4gICAgICB0aGlzWzBdID0gY29sb3JbMF07XG4gICAgICB0aGlzWzFdID0gY29sb3JbMV07XG4gICAgICB0aGlzWzJdID0gY29sb3JbMl07XG4gICAgICB0aGlzWzNdID0gdHlwZW9mIGFyZ3VtZW50c1szXSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEuMCA6IGFyZ3VtZW50c1szXTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXNbMF0sIHRoaXNbMV0sIHRoaXNbMl0sIHRoaXNbM11dO1xuICAgIH0sXG5cbiAgICB0b1JnYjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJyZ2IoXCIgKyB0aGlzWzBdICsgXCIsIFwiICsgdGhpc1sxXSArIFwiLCBcIiArIHRoaXNbMl0gKyBcIilcIjtcbiAgICB9LFxuXG4gICAgdG9SZ2JhOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcInJnYmEoXCIgKyB0aGlzWzBdICsgXCIsIFwiICsgdGhpc1sxXSArIFwiLCBcIiArIHRoaXNbMl0gKyBcIiwgXCIgKyB0aGlzWzNdICsgXCIpXCI7XG4gICAgfSxcblxuICAgIHRvSGV4OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjcS5yZ2JUb0hleCh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTtcbiAgICB9LFxuXG4gICAgdG9Ic2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGMgPSBjcS5yZ2JUb0hzbCh0aGlzWzBdLCB0aGlzWzFdLCB0aGlzWzJdKTtcbiAgICAgIGNbM10gPSB0aGlzWzNdO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfSxcblxuICAgIHRvSHN2OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjID0gY3EucmdiVG9Ic3YodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7XG4gICAgICBjWzNdID0gdGhpc1szXTtcbiAgICAgIHJldHVybiBjO1xuICAgIH0sXG5cbiAgICBncmFkaWVudDogZnVuY3Rpb24odGFyZ2V0LCBzdGVwcykge1xuICAgICAgdmFyIHRhcmdldENvbG9yID0gY3EuY29sb3IodGFyZ2V0KTtcbiAgICB9LFxuXG4gICAgc2hpZnRIc2w6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGhzbCA9IHRoaXMudG9Ic2woKTtcblxuICAgICAgaWYgKHRoaXNbMF0gIT09IHRoaXNbMV0gfHwgdGhpc1sxXSAhPT0gdGhpc1syXSkge1xuICAgICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXSA9PT0gZmFsc2UgPyBoc2xbMF0gOiBjcS53cmFwVmFsdWUoaHNsWzBdICsgYXJndW1lbnRzWzBdLCAwLCAxKTtcbiAgICAgICAgdmFyIHMgPSBhcmd1bWVudHNbMV0gPT09IGZhbHNlID8gaHNsWzFdIDogY3EubGltaXRWYWx1ZShoc2xbMV0gKyBhcmd1bWVudHNbMV0sIDAsIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGggPSBoc2xbMF07XG4gICAgICAgIHZhciBzID0gaHNsWzFdO1xuICAgICAgfVxuXG4gICAgICB2YXIgbCA9IGFyZ3VtZW50c1syXSA9PT0gZmFsc2UgPyBoc2xbMl0gOiBjcS5saW1pdFZhbHVlKGhzbFsyXSArIGFyZ3VtZW50c1syXSwgMCwgMSk7XG5cbiAgICAgIHRoaXMuZnJvbUhzbChoLCBzLCBsKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHNldEhzbDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHNsID0gdGhpcy50b0hzbCgpO1xuXG4gICAgICB2YXIgaCA9IGFyZ3VtZW50c1swXSA9PT0gZmFsc2UgPyBoc2xbMF0gOiBjcS5saW1pdFZhbHVlKGFyZ3VtZW50c1swXSwgMCwgMSk7XG4gICAgICB2YXIgcyA9IGFyZ3VtZW50c1sxXSA9PT0gZmFsc2UgPyBoc2xbMV0gOiBjcS5saW1pdFZhbHVlKGFyZ3VtZW50c1sxXSwgMCwgMSk7XG4gICAgICB2YXIgbCA9IGFyZ3VtZW50c1syXSA9PT0gZmFsc2UgPyBoc2xbMl0gOiBjcS5saW1pdFZhbHVlKGFyZ3VtZW50c1syXSwgMCwgMSk7XG5cbiAgICAgIHRoaXMuZnJvbUhzbChoLCBzLCBsKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIG1peDogZnVuY3Rpb24oY29sb3IsIGFtb3VudCkge1xuICAgICAgY29sb3IgPSBjcS5jb2xvcihjb2xvcik7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKVxuICAgICAgICB0aGlzW2ldID0gY3EubWl4KHRoaXNbaV0sIGNvbG9yW2ldLCBhbW91bnQpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgfTtcblxuICB3aW5kb3dbXCJjcVwiXSA9IHdpbmRvd1tcIkNhbnZhc1F1ZXJ5XCJdID0gY3E7XG5cblxuICByZXR1cm4gY3E7XG5cbn0pKCk7XG5cbi8qIGZpbGU6IHNyYy9sYXllci9MYXllci5qcyAqL1xuXG5QTEFZR1JPVU5ELlJlbmRlcmVyID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgYXBwLm9uKFwiY3JlYXRlXCIsIHRoaXMuY3JlYXRlLmJpbmQodGhpcykpO1xuICBhcHAub24oXCJyZXNpemVcIiwgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG5cbiAgYXBwLnJlbmRlcmVyID0gdGhpcztcblxufTtcblxuUExBWUdST1VORC5SZW5kZXJlci5wbHVnaW4gPSB0cnVlO1xuXG5QTEFZR1JPVU5ELlJlbmRlcmVyLnByb3RvdHlwZSA9IHtcblxuICBjcmVhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHRoaXMuYXBwLmxheWVyID0gY3EoKS5hcHBlbmRUbyh0aGlzLmFwcC5jb250YWluZXIpO1xuXG4gICAgaWYgKCF0aGlzLmFwcC5jdXN0b21Db250YWluZXIpIHtcbiAgICAgIHRoaXMuYXBwLmNvbnRhaW5lci5zdHlsZS5tYXJnaW4gPSBcIjBweFwiO1xuICAgICAgdGhpcy5hcHAuY29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICB9XG5cbiAgfSxcblxuICByZXNpemU6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHZhciBhcHAgPSB0aGlzLmFwcDtcblxuICAgIHZhciBsYXllciA9IGFwcC5sYXllcjtcblxuICAgIGxheWVyLndpZHRoID0gYXBwLndpZHRoO1xuICAgIGxheWVyLmhlaWdodCA9IGFwcC5oZWlnaHQ7XG5cbiAgICBsYXllci5jYW52YXMuc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gXCIwIDBcIjtcbiAgICBsYXllci5jYW52YXMuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyBhcHAub2Zmc2V0WCArIFwicHgsXCIgKyBhcHAub2Zmc2V0WSArIFwicHgpIHNjYWxlKFwiICsgYXBwLnNjYWxlICsgXCIsIFwiICsgYXBwLnNjYWxlICsgXCIpXCI7XG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLnRyYW5zZm9ybVN0eWxlID0gXCJwcmVzZXJ2ZS0zZFwiO1xuXG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybU9yaWdpbiA9IFwiMCAwXCI7XG4gICAgbGF5ZXIuY2FudmFzLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgYXBwLm9mZnNldFggKyBcInB4LFwiICsgYXBwLm9mZnNldFkgKyBcInB4KSBzY2FsZShcIiArIGFwcC5zY2FsZSArIFwiLCBcIiArIGFwcC5zY2FsZSArIFwiKVwiO1xuICAgIGxheWVyLmNhbnZhcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm1TdHlsZSA9IFwicHJlc2VydmUtM2RcIjtcblxuICAgIGxheWVyLnNtb290aGluZyA9IHRoaXMuYXBwLnNtb290aGluZztcbiAgICBsYXllci51cGRhdGUoKTtcblxuICAgIHRoaXMuc2V0U21vb3RoaW5nKHRoaXMuYXBwLnNtb290aGluZyk7XG5cbiAgfSxcblxuICBzZXRTbW9vdGhpbmc6IGZ1bmN0aW9uKHNtb290aGluZykge1xuXG4gICAgdmFyIGxheWVyID0gdGhpcy5hcHAubGF5ZXI7XG5cbiAgICB0aGlzLmFwcC5zbW9vdGhpbmcgPSBzbW9vdGhpbmc7XG5cblxuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpID4gLTEpIHtcblxuICAgICAgbGF5ZXIuY2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gc21vb3RoaW5nID8gXCJhdXRvXCIgOiBcIi1tb3otY3Jpc3AtZWRnZXNcIjtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGxheWVyLmNhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9IHNtb290aGluZyA/IFwiYXV0b1wiIDogXCJwaXhlbGF0ZWRcIjtcblxuICAgIH1cblxuICAgIGxheWVyLnNtb290aGluZyA9IHNtb290aGluZztcbiAgICBsYXllci51cGRhdGUoKTtcblxuICB9XG5cbn07XG5cbi8qIGZpbGU6IHNyYy9sYXllci9UcmFuc2l0aW9ucy5qcyAqL1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zID0gZnVuY3Rpb24oYXBwKSB7XG5cbiAgdGhpcy5hcHAgPSBhcHA7XG5cbiAgYXBwLm9uKFwiZW50ZXJzdGF0ZVwiLCB0aGlzLmVudGVyc3RhdGUuYmluZCh0aGlzKSk7XG4gIGFwcC5vbihcInBvc3RyZW5kZXJcIiwgdGhpcy5wb3N0cmVuZGVyLmJpbmQodGhpcykpO1xuICBhcHAub24oXCJzdGVwXCIsIHRoaXMuc3RlcC5iaW5kKHRoaXMpKTtcblxuICB0aGlzLnByb2dyZXNzID0gMTtcbiAgdGhpcy5saWZldGltZSA9IDA7XG59O1xuXG5QTEFZR1JPVU5ELlRyYW5zaXRpb25zLnBsdWdpbiA9IHRydWU7XG5cblBMQVlHUk9VTkQuVHJhbnNpdGlvbnMucHJvdG90eXBlID0ge1xuXG4gIGVudGVyc3RhdGU6IGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgIHRoaXMuc2NyZWVuc2hvdCA9IHRoaXMuYXBwLmxheWVyLmNhY2hlKCk7XG5cbiAgICBpZiAoZGF0YS5wcmV2KSB7XG4gICAgICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIH1cblxuICB9LFxuXG4gIHBvc3RyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMSkgcmV0dXJuO1xuXG4gICAgUExBWUdST1VORC5UcmFuc2l0aW9ucy5TcGxpdCh0aGlzLCB0aGlzLnByb2dyZXNzKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxKSByZXR1cm47XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGRlbHRhO1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKHRoaXMubGlmZXRpbWUgLyAwLjUsIDEpO1xuXG4gIH1cblxufTtcblxuUExBWUdST1VORC5UcmFuc2l0aW9ucy5JbXBsb2RlID0gZnVuY3Rpb24obWFuYWdlciwgcHJvZ3Jlc3MpIHtcblxuICB2YXIgYXBwID0gbWFuYWdlci5hcHA7XG4gIHZhciBsYXllciA9IGFwcC5sYXllcjtcblxuICBwcm9ncmVzcyA9IGFwcC5lYXNlKHByb2dyZXNzLCBcIm91dEN1YmljXCIpO1xuXG4gIHZhciBuZWdhdGl2ZSA9IDEgLSBwcm9ncmVzcztcblxuICBsYXllci5zYXZlKCk7XG4gIGxheWVyLnRhcnMoYXBwLmNlbnRlci54LCBhcHAuY2VudGVyLnksIDAuNSwgMC41LCAwLCAwLjUgKyAwLjUgKiBuZWdhdGl2ZSwgbmVnYXRpdmUpO1xuICBsYXllci5kcmF3SW1hZ2UobWFuYWdlci5zY3JlZW5zaG90LCAwLCAwKTtcblxuICBsYXllci5yZXN0b3JlKCk7XG5cbn07XG5cblBMQVlHUk9VTkQuVHJhbnNpdGlvbnMuU3BsaXQgPSBmdW5jdGlvbihtYW5hZ2VyLCBwcm9ncmVzcykge1xuXG4gIHZhciBhcHAgPSBtYW5hZ2VyLmFwcDtcbiAgdmFyIGxheWVyID0gYXBwLmxheWVyO1xuXG4gIHByb2dyZXNzID0gYXBwLmVhc2UocHJvZ3Jlc3MsIFwiaW5PdXRDdWJpY1wiKTtcblxuICB2YXIgbmVnYXRpdmUgPSAxIC0gcHJvZ3Jlc3M7XG5cbiAgbGF5ZXIuc2F2ZSgpO1xuXG4gIGxheWVyLmEobmVnYXRpdmUpLmNsZWFyKFwiI2ZmZlwiKS5yYSgpO1xuXG4gIGxheWVyLmRyYXdJbWFnZShtYW5hZ2VyLnNjcmVlbnNob3QsIDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCAvIDIgfCAwLCAwLCAwLCBhcHAud2lkdGgsIG5lZ2F0aXZlICogYXBwLmhlaWdodCAvIDIgfCAwKTtcbiAgbGF5ZXIuZHJhd0ltYWdlKG1hbmFnZXIuc2NyZWVuc2hvdCwgMCwgYXBwLmhlaWdodCAvIDIgfCAwLCBhcHAud2lkdGgsIGFwcC5oZWlnaHQgLyAyIHwgMCwgMCwgYXBwLmhlaWdodCAvIDIgKyBwcm9ncmVzcyAqIGFwcC5oZWlnaHQgLyAyICsgMSB8IDAsIGFwcC53aWR0aCwgTWF0aC5tYXgoMSwgbmVnYXRpdmUgKiBhcHAuaGVpZ2h0ICogMC41IHwgMCkpO1xuXG4gIGxheWVyLnJlc3RvcmUoKTtcblxufTtcblxuLyogZmlsZTogc3JjL2xheWVyL0xvYWRpbmdTY3JlZW4uanMgKi9cblxuUExBWUdST1VORC5Mb2FkaW5nU2NyZWVuID0ge1xuXG4gIGxvZ29SYXc6IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFOb0FBQUFTQkFNQUFBRFBpTjB4QUFBQUdGQk1WRVVBQVFBdExpeEhTVWRuYUdhSmlvaW1xS1hNenN2Ny9mcjVzaGdWQUFBQUFXSkxSMFFBaUFVZFNBQUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQUFkMFNVMUZCOThFQXdrZUE0b1FXSjRBQUFBWmRFVllkRU52YlcxbGJuUUFRM0psWVhSbFpDQjNhWFJvSUVkSlRWQlhnUTRYQUFBQjlrbEVRVlE0eTcyVXZXK3JNQkRBeitGcnBWS3JyRm1lc21hcFdOT2xyS2pTZTFrWit1b1ZBdmorL2ZydWpHMVNhSmNxSndVN3ZvT2Y3eE1RelFtc0lEaTVOUFRNc0xSbnRIM1UrRjZTQVpvM05sQ3ZjZ0JGSno4byt2a0RpRTYzbEk5NVkvVW1waW5zWldrZ0pXSmlEYkFWUTE2aHRwdHhTVE5sb0lsdWd3YXcwMDFFeTNBU0Yzc282TDFxTE5YelFTNVMwVUdLTC9DSTV3V05yaUUwVUg5WXR5MzdMcUlWZyt3c3F1N0l4ME13VkJTRi9kVStqdjJTTm5tYTAyMUxFZFBxVm5NZVUzeEF1MGtYY1NHam1xN094NEUyV244OExaMitFRmozYXZqaXh6YWk2VlBWeXVZdmVaTEhGMlhmZERudkFxMjdESUhHdXErMERKRnNFMzBPdEIxS3FPd2Q4RHI3UGNNNGIramZqMmc1bHA0V3ludEJLNjZxdWEzSnpFQSt1WEpwd0gvTmxWdXpSVlBZL2tUTEIybWp1TitLd2RaOEZPeThqMmdEYkVVU3F1bW5TQ1k0bGY0aWJxM0loVk00eWNaUVJudit6RnFWZEpRVm42Qnh2VXFlYkdwdWFObzNzWnh3QnpqYWppTVpPb0Jpd3lWRitrQ3IrblVhSk9hR3BuQWVSUFBKWlRyNEZxbUhSWGNuZUVvNERxUS9mdGZkbkxlRHJVQU1FOHhXS1BlS0N3VzZZa0VwWGZzM3AxRVdKaGRjVUFZUDBUSS91WWFWOGNnandCb3ZhZXlXd2ppMlQ5clRGSWRTL2NQL01ua1RMUlVXeGdOTlpWaW43YlQ1ZnFUOW1pRGNVVkp6UjFnUnBmSU9OTW11bFUrNVFxcjZ6WEFVcUFBQUFBQkpSVTVFcmtKZ2dnPT1cIixcblxuICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdGhpcy5sb2dvID0gbmV3IEltYWdlO1xuXG4gICAgdGhpcy5sb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5yZWFkeSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvZ28uc3JjID0gdGhpcy5sb2dvUmF3O1xuXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gXCIjMjgyMjQ1XCI7XG5cbiAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcbiAgICAgIC8vIHRoaXMuYmFja2dyb3VuZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmJhY2tncm91bmRDb2xvciB8fCBcIiMwMDBcIjtcbiAgICB9XG5cblxuICB9LFxuXG4gIGVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY3VycmVudCA9IDA7XG5cbiAgfSxcblxuICBsZWF2ZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxvY2tlZCA9IHRydWU7XG5cbiAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuYXBwLnR3ZWVuKHRoaXMpXG4gICAgICAudG8oe1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgICB9LCAwLjUpO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGlmICh0aGlzLmxvY2tlZCkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uLmZpbmlzaGVkKSB0aGlzLmxvY2tlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyBNYXRoLmFicyh0aGlzLmFwcC5sb2FkZXIucHJvZ3Jlc3MgLSB0aGlzLmN1cnJlbnQpICogZGVsdGE7XG4gICAgfVxuXG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuXG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnJlYWR5KSByZXR1cm47XG5cbiAgICB0aGlzLmFwcC5sYXllci5jbGVhcih0aGlzLmJhY2tncm91bmQpO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIuZmlsbFN0eWxlKFwiI2ZmZlwiKTtcblxuICAgIHRoaXMuYXBwLmxheWVyLnNhdmUoKTtcbiAgICB0aGlzLmFwcC5sYXllci5hbGlnbigwLjUsIDAuNSk7XG4gICAgdGhpcy5hcHAubGF5ZXIuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKFwibGlnaHRlclwiKTtcbiAgICB0aGlzLmFwcC5sYXllci5kcmF3SW1hZ2UodGhpcy5sb2dvLCB0aGlzLmFwcC5jZW50ZXIueCwgdGhpcy5hcHAuY2VudGVyLnkpO1xuXG4gICAgdmFyIHcgPSB0aGlzLmN1cnJlbnQgKiB0aGlzLmxvZ28ud2lkdGg7XG5cbiAgICB0aGlzLmFwcC5sYXllci5maWxsU3R5bGUoXCIjZmZmXCIpO1xuXG4gICAgdGhpcy5hcHAubGF5ZXIuZmlsbFJlY3QodGhpcy5hcHAuY2VudGVyLngsIHRoaXMuYXBwLmNlbnRlci55ICsgMzIsIHcsIDEyKTtcbiAgICB0aGlzLmFwcC5sYXllci5maWxsUmVjdCh0aGlzLmFwcC5jZW50ZXIueCwgdGhpcy5hcHAuY2VudGVyLnkgKyAzMiwgdGhpcy5sb2dvLndpZHRoLCA0KTtcblxuICAgIHRoaXMuYXBwLmxheWVyLnJlc3RvcmUoKTtcblxuICB9XG5cbn07IiwiLyogc2NhbmxpbmVzIHBsdWdpbiBmb3IgcGxheWdyb3VuZCdzIGRlZmF1bHQgcmVuZGVyZXIgKi9cblxuUExBWUdST1VORC5TY2FubGluZXMgPSBmdW5jdGlvbihhcHApIHtcblxuICB0aGlzLmFwcCA9IGFwcDtcblxuICBhcHAub24oXCJyZXNpemVcIiwgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XG4gIGFwcC5vbihcInBvc3RyZW5kZXJcIiwgdGhpcy5wb3N0cmVuZGVyLmJpbmQodGhpcykpO1xuXG59O1xuXG5QTEFZR1JPVU5ELlNjYW5saW5lcy5wbHVnaW4gPSB0cnVlO1xuXG5QTEFZR1JPVU5ELlNjYW5saW5lcy5wcm90b3R5cGUgPSB7XG5cbiAgcmVzaXplOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuaW1hZ2UgPSBjcSh0aGlzLmFwcC53aWR0aCwgdGhpcy5hcHAuaGVpZ2h0KTtcblxuICAgIHRoaXMuaW1hZ2UuZ2xvYmFsQWxwaGEoMC4xKTtcbiAgICB0aGlzLmltYWdlLmZpbGxTdHlsZShcIiMwMDhcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuaW1hZ2UuY2FudmFzLmhlaWdodDsgaSArPSA4KXtcbiAgICAgIFxuICAgICAgdGhpcy5pbWFnZS5maWxsUmVjdCgwLCBpLCB0aGlzLmltYWdlLmNhbnZhcy53aWR0aCwgNCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLmltYWdlID0gdGhpcy5pbWFnZS5jYWNoZSgpO1xuXG4gIH0sXG5cbiAgcG9zdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5pbWFnZSkge1xuXG4gICAgICAvLyB0aGlzLmFwcC5sYXllci5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgMCwgMCk7XG5cbiAgICB9XG5cbiAgfVxuXG59OyIsIi8qXG5cbiAgU291bmRPbkRlbWFuZCByMVxuXG4gIChjKSAyMDEyLTIwMTUgaHR0cDovL3Jlem9uZXIubmV0XG5cbiAgVGhpcyBsaWJyYXJ5IG1heSBiZSBmcmVlbHkgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuXG4qL1xuXG4vKiBvcHRpb25zICovXG5cbi8qIG91dHB1dDogb3V0cHV0IG5vZGUsIGRlZmF1bHQgKi9cbi8qIGF1ZGlvQ29udGV4dDogYXVkaW9Db250ZXh0ICovXG5cblNvdW5kT25EZW1hbmQgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIGNhblBsYXlNcDMgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZShcImF1ZGlvL21wM1wiKTtcbiAgdmFyIGNhblBsYXlPZ2cgPSAobmV3IEF1ZGlvKS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpO1xuXG4gIGlmICh0aGlzLnByZWZlcmVkQXVkaW9Gb3JtYXQgPT09IFwibXAzXCIpIHtcblxuICAgIGlmIChjYW5QbGF5TXAzKSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcbiAgICBlbHNlIHRoaXMuYXVkaW9Gb3JtYXQgPSBcIm9nZ1wiO1xuXG4gIH0gZWxzZSB7XG5cbiAgICBpZiAoY2FuUGxheU9nZykgdGhpcy5hdWRpb0Zvcm1hdCA9IFwib2dnXCI7XG4gICAgZWxzZSB0aGlzLmF1ZGlvRm9ybWF0ID0gXCJtcDNcIjtcblxuICB9XG5cbiAgaWYgKCFvcHRpb25zLmF1ZGlvQ29udGV4dCkge1xuICAgIGNvbnNvbGUud2FybignUG9zc2libGUgZHVwbGljYXRlZCBBdWRpb0NvbnRleHQsIHVzZSBvcHRpb25zLmF1ZGlvQ29udGV4dCcpO1xuICB9XG4gIHRoaXMuYXVkaW9Db250ZXh0ID0gb3B0aW9ucy5hdWRpb0NvbnRleHQgfHwgbmV3IEF1ZGlvQ29udGV4dDtcblxuICB0aGlzLmNvbXByZXNzb3IgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEeW5hbWljc0NvbXByZXNzb3IoKTtcbiAgdGhpcy5jb21wcmVzc29yLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKClcbiAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29tcHJlc3Nvcik7XG5cbiAgdGhpcy5pbnB1dCA9IHRoaXMuZ2Fpbk5vZGU7XG5cbiAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMS4wO1xuXG4gIHRoaXMuYnVmZmVycyA9IHt9O1xuXG4gIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgdGhpcy5hbGlhc2VzID0ge307XG5cbiAgdmFyIGxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgdmFyIGVuZ2luZSA9IHRoaXM7XG5cbiAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVsdGEgPSAoRGF0ZS5ub3coKSAtIGxhc3RUaWNrKSAvIDEwMDA7XG5cbiAgICBsYXN0VGljayA9IERhdGUubm93KCk7XG5cbiAgICBlbmdpbmUuc3RlcChkZWx0YSk7XG5cbiAgfSwgMTAwMCAvIDYwKTtcblxufTtcblxuU291bmRPbkRlbWFuZC5tb3ZlVG8gPSBmdW5jdGlvbih2YWx1ZSwgdGFyZ2V0LCBzdGVwKSB7XG5cbiAgaWYgKHZhbHVlIDwgdGFyZ2V0KSB7XG4gICAgdmFsdWUgKz0gc3RlcDtcbiAgICBpZiAodmFsdWUgPiB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICB9XG5cbiAgaWYgKHZhbHVlID4gdGFyZ2V0KSB7XG4gICAgdmFsdWUgLT0gc3RlcDtcbiAgICBpZiAodmFsdWUgPCB0YXJnZXQpIHZhbHVlID0gdGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xuXG59O1xuXG5Tb3VuZE9uRGVtYW5kLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogU291bmRPbkRlbWFuZCxcblxuICBwYXRoOiBcInNvdW5kcy9cIixcblxuICBjaGFubmVsOiBmdW5jdGlvbihuYW1lKSB7XG5cbiAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgU291bmRPbkRlbWFuZC5DaGFubmVsKHRoaXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG5cbiAgfSxcblxuICBnZXRBc3NldEVudHJ5OiBmdW5jdGlvbihwYXRoLCBkZWZhdWx0RXh0ZW5zaW9uKSB7XG5cbiAgICAvKiB0cmFuc2xhdGUgZm9sZGVyIGFjY29yZGluZyB0byB1c2VyIHByb3ZpZGVkIHBhdGhzXG4gICAgICAgb3IgbGVhdmUgYXMgaXMgKi9cblxuICAgIHZhciBmaWxlaW5mbyA9IHBhdGgubWF0Y2goLyguKilcXC4uKi8pO1xuICAgIHZhciBrZXkgPSBmaWxlaW5mbyA/IGZpbGVpbmZvWzFdIDogcGF0aDtcblxuICAgIHZhciB0ZW1wID0gcGF0aC5zcGxpdChcIi5cIik7XG4gICAgdmFyIGJhc2VuYW1lID0gcGF0aDtcblxuICAgIGlmICh0ZW1wLmxlbmd0aCA+IDEpIHtcbiAgICAgIHZhciBleHQgPSB0ZW1wLnBvcCgpO1xuICAgICAgcGF0aCA9IHRlbXAuam9pbihcIi5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBleHQgPSBkZWZhdWx0RXh0ZW5zaW9uO1xuICAgICAgYmFzZW5hbWUgKz0gXCIuXCIgKyBkZWZhdWx0RXh0ZW5zaW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHVybDogdGhpcy5wYXRoICsgYmFzZW5hbWUsXG4gICAgICBwYXRoOiB0aGlzLnBhdGggKyBwYXRoLFxuICAgICAgZXh0OiBleHRcbiAgICB9O1xuXG4gIH0sXG5cbiAgbG9hZGVyczoge30sXG5cbiAgbG9hZDogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICB2YXIgZW5naW5lID0gdGhpcztcbiAgICB2YXIgZW50cnkgPSBlbmdpbmUuZ2V0QXNzZXRFbnRyeShrZXksIGVuZ2luZS5hdWRpb0Zvcm1hdCk7XG5cbiAgICBpZiAoIXRoaXMubG9hZGVyc1trZXldKSB7XG5cbiAgICAgIHRoaXMubG9hZGVyc1trZXldID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgaWYgKGVuZ2luZS5idWZmZXJzW2VudHJ5LmtleV0pIHJldHVybiByZXNvbHZlKGVuZ2luZS5idWZmZXJzW2VudHJ5LmtleV0pO1xuXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGVudHJ5LnVybCwgdHJ1ZSk7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuXG4gICAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZW5naW5lLmF1ZGlvQ29udGV4dC5kZWNvZGVBdWRpb0RhdGEodGhpcy5yZXNwb25zZSwgZnVuY3Rpb24oZGVjb2RlZEJ1ZmZlcikge1xuXG4gICAgICAgICAgICBlbmdpbmUuYnVmZmVyc1tlbnRyeS5rZXldID0gZGVjb2RlZEJ1ZmZlcjtcbiAgICAgICAgICAgIHJlc29sdmUoZGVjb2RlZEJ1ZmZlcik7XG5cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVyc1trZXldO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZGVsdGEpIHtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNoYW5uZWxzKSB7XG5cbiAgICAgIHRoaXMuY2hhbm5lbHNba2V5XS5zdGVwKGRlbHRhKTtcblxuICAgIH1cblxuICB9LFxuXG4gIGR1cGxpY2F0ZTogZnVuY3Rpb24oc291cmNlLCBhcywgdm9sdW1lLCByYXRlKSB7XG5cbiAgICB2YXIgZW5naW5lID0gdGhpcztcblxuICAgIHRoaXMubG9hZChzb3VyY2UpLnRoZW4oZnVuY3Rpb24oKSB7XG5cbiAgICAgIGVuZ2luZS5idWZmZXJzW3NvdXJjZV07XG5cbiAgICAgIGVuZ2luZS5idWZmZXJzW2FzXSA9IGVuZ2luZS5idWZmZXJzW3NvdXJjZV07XG5cbiAgICB9KTtcblxuICB9LFxuXG4gIGFsaWFzOiBmdW5jdGlvbihuYW1lLCBzb3VyY2UsIHJhdGUsIHZvbHVtZSkge1xuXG4gICAgdGhpcy5hbGlhc2VzW25hbWVdID0ge1xuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICByYXRlOiByYXRlLFxuICAgICAgdm9sdW1lOiB2b2x1bWVcbiAgICB9O1xuXG4gIH1cblxufTtcblNvdW5kT25EZW1hbmQuRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcblxufTtcblxuU291bmRPbkRlbWFuZC5FdmVudHMucHJvdG90eXBlID0ge1xuXG4gIG9uOiBmdW5jdGlvbihldmVudCwgY2FsbGJhY2spIHtcblxuICAgIGlmICh0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBldmVudCkge1xuICAgICAgICByZXN1bHRba2V5XSA9IHRoaXMub24oa2V5LCBldmVudFtrZXldKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50XSkgdGhpcy5saXN0ZW5lcnNbZXZlbnRdID0gW107XG5cbiAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBjYWxsYmFjay5vbmNlID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBbXTtcblxuICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBjYWxsYmFjaztcblxuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24oZXZlbnQsIGNhbGxiYWNrKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdW2ldLl9yZW1vdmUpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnRdLnNwbGljZShpLS0sIDEpO1xuICAgICAgICBsZW4tLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICB0cmlnZ2VyOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuXG4gICAgLyogaWYgeW91IHByZWZlciBldmVudHMgcGlwZSAqL1xuXG4gICAgaWYgKHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl0pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxpc3RlbmVyc1tcImV2ZW50XCJdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzW1wiZXZlbnRcIl1baV0oZXZlbnQsIGRhdGEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIG9yIHN1YnNjcmliZWQgdG8gc2luZ2xlIGV2ZW50ICovXG5cbiAgICBpZiAodGhpcy5saXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XVtpXTtcbiAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBkYXRhKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIub25jZSkge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn07XG5Tb3VuZE9uRGVtYW5kLkNoYW5uZWwgPSBmdW5jdGlvbihlbmdpbmUpIHtcblxuICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgdGhpcy5hdWRpb0NvbnRleHQgPSBlbmdpbmUuYXVkaW9Db250ZXh0O1xuXG4gIC8qIGNvbm5lY3Rpb24gb3JkZXIgZ29lcyBmcm9tIGJvdHRvbSB0byB0b3AgKi9cblxuICAvKiBnYWluIG5vZGUgKi9cblxuICB0aGlzLmdhaW5Ob2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gIC8qIGNvbnZvbHZlciAqL1xuXG4gIHRoaXMuY29udm9sdmVyV2V0Tm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgdGhpcy5jb252b2x2ZXJEcnlOb2RlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICB0aGlzLmNvbnZvbHZlck5vZGUgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVDb252b2x2ZXIoKTtcbiAgdGhpcy5jb252b2x2ZXJFbmFibGVkID0gZmFsc2U7XG5cbiAgdGhpcy5yb3V0ZSgpO1xuXG4gIHRoaXMucXVldWUgPSBbXTtcbiAgdGhpcy5sb29wcyA9IFtdO1xuXG59O1xuXG5Tb3VuZE9uRGVtYW5kLkNoYW5uZWwucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBTb3VuZE9uRGVtYW5kLkNoYW5uZWwsXG5cbiAgLyogZ2V0IGEgc291bmQgZm9yIGZ1cnRoZXIgdXNhZ2UgKi9cblxuICB4cm91dGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuY3VycmVudFJvdXRlKSB7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50Um91dGUubGVuZ3RoIC0gMTsgaSsrKSB7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Um91dGVbaV0uZGlzY29ubmVjdCgpO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgaWYgKGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAgIHZhciBub2RlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgIG5vZGUuY29ubmVjdChhcmd1bWVudHNbaSArIDFdKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZS5wdXNoKG5vZGUpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IGFyZ3VtZW50c1swXTtcblxuICB9LFxuXG4gIGdldDogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gbmV3IFNvdW5kT25EZW1hbmQuU291bmQoa2V5LCB0aGlzKTtcblxuICB9LFxuXG4gIHBsYXk6IGZ1bmN0aW9uKGtleSkge1xuXG4gICAgdmFyIHNvdW5kID0gdGhpcy5nZXQoa2V5KTtcblxuICAgIHRoaXMuYWRkKHNvdW5kKTtcblxuICAgIHJldHVybiBzb3VuZDtcblxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oc291bmQpIHtcblxuICAgIHNvdW5kLl9yZW1vdmUgPSB0cnVlO1xuXG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbihzb3VuZCkge1xuXG4gICAgc291bmQuX3JlbW92ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5xdWV1ZS5wdXNoKHNvdW5kKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICAvKiBwcm9jZXNzIHF1ZXVlICovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucXVldWUubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHNvdW5kID0gdGhpcy5xdWV1ZVtpXTtcblxuICAgICAgc291bmQuc3RlcChkZWx0YSk7XG5cbiAgICAgIGlmIChzb3VuZC5fcmVtb3ZlKSB0aGlzLnF1ZXVlLnNwbGljZShpLS0sIDEpO1xuXG4gICAgfVxuXG4gICAgLyogcHJvY2VzcyBzb3VuZHMgYmVpbmcgcGxheWVkICovXG5cbiAgfSxcblxuICB2b2x1bWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICByZXR1cm4gdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgc3dhcENvbnZvbHZlcjogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICB2YXIgZW5naW5lID0gdGhpcy5lbmdpbmU7XG4gICAgdmFyIGNoYW5uZWwgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIGZhaWwpIHtcblxuICAgICAgaWYgKGNoYW5uZWwuY3VycmVudENvbnZvbHZlckltcHVsc2UgPT09IGtleSkge1xuXG4gICAgICAgIHJlc29sdmUoKTtcblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICBlbmdpbmUubG9hZChrZXkpLnRoZW4oZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgICAgY2hhbm5lbC5jdXJyZW50Q29udm9sdmVySW1wdWxzZSA9IGtleTtcbiAgICAgICAgICBjaGFubmVsLmNvbnZvbHZlck5vZGUuYnVmZmVyID0gYnVmZmVyO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgIH0pO1xuXG4gIH0sXG5cbiAgdXBkYXRlQ29udm92bGVyU3RhdGU6IGZ1bmN0aW9uKGVuYWJsZWQpIHtcblxuICAgIHRoaXMuY29udm9sdmVyRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgdGhpcy5yb3V0ZSgpO1xuXG4gIH0sXG5cbiAgc3Vicm91dGU6IGZ1bmN0aW9uKG5vZGVzKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIGlmIChpIDwgbm9kZXMubGVuZ3RoIC0gMSkge1xuXG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIG5vZGUuZGlzY29ubmVjdCgpO1xuICAgICAgICBub2RlLmNvbm5lY3Qobm9kZXNbaSArIDFdKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dCA9IG5vZGVzWzBdO1xuXG4gIH0sXG5cbiAgcm91dGU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYWluTm9kZS5kaXNjb25uZWN0KCk7XG5cbiAgICBpZiAodGhpcy5jb252b2x2ZXJFbmFibGVkKSB7XG5cbiAgICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnZvbHZlckRyeU5vZGUpO1xuXG4gICAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb252b2x2ZXJOb2RlKTtcbiAgICAgIHRoaXMuY29udm9sdmVyTm9kZS5jb25uZWN0KHRoaXMuY29udm9sdmVyV2V0Tm9kZSk7XG5cbiAgICAgIHRoaXMuY29udm9sdmVyV2V0Tm9kZS5jb25uZWN0KHRoaXMuZW5naW5lLmlucHV0KTtcbiAgICAgIHRoaXMuY29udm9sdmVyRHJ5Tm9kZS5jb25uZWN0KHRoaXMuZW5naW5lLmlucHV0KTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmVuZ2luZS5pbnB1dCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0ID0gdGhpcy5nYWluTm9kZTtcblxuICB9LFxuXG4gIGNvbnZvbHZlcjogZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXG4gICAgdmFyIGVuYWJsZWQgPSB2YWx1ZSA+IDA7XG4gICAgdmFyIGNoYW5uZWwgPSB0aGlzO1xuXG4gICAgdGhpcy5zd2FwQ29udm9sdmVyKGtleSkudGhlbihmdW5jdGlvbigpIHtcblxuICAgICAgaWYgKGVuYWJsZWQgIT09IGNoYW5uZWwuY29udm9sdmVyRW5hYmxlZCkgY2hhbm5lbC51cGRhdGVDb252b3ZsZXJTdGF0ZShlbmFibGVkKTtcblxuICAgIH0pO1xuXG4gICAgdGhpcy5jb252b2x2ZXJXZXROb2RlLmdhaW4udmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNvbnZvbHZlckRyeU5vZGUuZ2Fpbi52YWx1ZSA9IDEgLSB2YWx1ZTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxufTtcblNvdW5kT25EZW1hbmQuU291bmQgPSBmdW5jdGlvbihrZXksIGNoYW5uZWwpIHtcblxuICB0aGlzLmtleSA9IGtleTtcbiAgdGhpcy5idWZmZXJLZXkgPSBrZXk7XG5cbiAgaWYgKGNoYW5uZWwuZW5naW5lLmFsaWFzZXNba2V5XSkge1xuXG4gICAgdGhpcy5hbGlhcyA9IGNoYW5uZWwuZW5naW5lLmFsaWFzZXNba2V5XTtcblxuICAgIHRoaXMuYnVmZmVyS2V5ID0gdGhpcy5hbGlhcy5zb3VyY2U7XG5cbiAgfVxuXG4gIGlmICghY2hhbm5lbC5lbmdpbmUuYnVmZmVyc1t0aGlzLmJ1ZmZlcktleV0pIGNoYW5uZWwuZW5naW5lLmxvYWQodGhpcy5idWZmZXJLZXkpO1xuXG4gIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIHRoaXMuYXVkaW9Db250ZXh0ID0gdGhpcy5jaGFubmVsLmVuZ2luZS5hdWRpb0NvbnRleHQ7XG5cbiAgdGhpcy5jdXJyZW50ID0ge1xuICAgIHZvbHVtZTogMS4wLFxuICAgIHJhdGU6IDEuMFxuICB9O1xuXG4gIHRoaXMuZmFkZU1vZCA9IDEuMDtcblxuICB0aGlzLmNyZWF0ZU5vZGVzKCk7XG5cbn07XG5cblNvdW5kT25EZW1hbmQuU291bmQucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBTb3VuZE9uRGVtYW5kLlNvdW5kLFxuXG4gIGFsaWFzOiB7XG4gICAgdm9sdW1lOiAxLjAsXG4gICAgcmF0ZTogMS4wXG4gIH0sXG5cbiAgY3JlYXRlTm9kZXM6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGJ1ZmZlclNvdXJjZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHZhciBnYWluTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB2YXIgcGFuTm9kZSA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZVN0ZXJlb1Bhbm5lcigpO1xuXG4gICAgYnVmZmVyU291cmNlLmNvbm5lY3QocGFuTm9kZSk7XG4gICAgcGFuTm9kZS5jb25uZWN0KGdhaW5Ob2RlKTtcbiAgICBnYWluTm9kZS5jb25uZWN0KHRoaXMuY2hhbm5lbC5pbnB1dCk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZSA9IGJ1ZmZlclNvdXJjZTtcbiAgICB0aGlzLmdhaW5Ob2RlID0gZ2Fpbk5vZGU7XG4gICAgdGhpcy5wYW5Ob2RlID0gcGFuTm9kZTtcblxuICB9LFxuXG4gIHZvbHVtZTogZnVuY3Rpb24odm9sdW1lKSB7XG5cbiAgICB2b2x1bWUgKj0gdGhpcy5hbGlhcy52b2x1bWU7XG5cbiAgICB0aGlzLmN1cnJlbnQudm9sdW1lID0gdm9sdW1lO1xuXG4gICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgdXBkYXRlVm9sdW1lOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IHRoaXMuY3VycmVudC52b2x1bWUgKiB0aGlzLmZhZGVNb2Q7XG5cbiAgfSxcblxuICBwYW46IGZ1bmN0aW9uKHBhbikge1xuXG4gICAgdGhpcy5jdXJyZW50LnBhbiA9IHBhbjtcblxuICAgIHRoaXMudXBkYXRlUGFubmluZygpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuICB1cGRhdGVQYW5uaW5nOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucGFuTm9kZS5wYW4udmFsdWUgPSB0aGlzLmN1cnJlbnQucGFuO1xuXG4gIH0sXG5cbiAgbG9vcDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5sb29wID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnQubG9vcCA9IHRydWU7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIHJyYXRlOiBmdW5jdGlvbihyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmF0ZSh0aGlzLmN1cnJlbnQucmF0ZSArICgtMSArIE1hdGgucmFuZG9tKCkgKiAyKSAqIHJhbmdlKTtcblxuICB9LFxuXG4gIHJhdGU6IGZ1bmN0aW9uKHJhdGUpIHtcblxuICAgIHJhdGUgKj0gdGhpcy5hbGlhcy5yYXRlO1xuXG4gICAgdGhpcy5idWZmZXJTb3VyY2UucGxheWJhY2tSYXRlLnZhbHVlID0gcmF0ZTtcblxuICAgIHRoaXMuY3VycmVudC5yYXRlID0gcmF0ZTtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgb25lbmRlZDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMuY3VycmVudC5sb29wKSB0aGlzLnN0b3AoKTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGRlbHRhKSB7XG5cbiAgICBpZiAoIXRoaXMucmVhZHkpIHtcblxuICAgICAgaWYgKCF0aGlzLmNoYW5uZWwuZW5naW5lLmJ1ZmZlcnNbdGhpcy5idWZmZXJLZXldKSByZXR1cm47XG5cbiAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xuICAgICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgdGhpcy5idWZmZXIgPSB0aGlzLmNoYW5uZWwuZW5naW5lLmJ1ZmZlcnNbdGhpcy5idWZmZXJLZXldO1xuXG4gICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcblxuICAgICAgdGhpcy5idWZmZXJTb3VyY2Uuc3RhcnQoMCk7XG4gICAgICB0aGlzLmJ1ZmZlclNvdXJjZS5vbmVuZGVkID0gdGhpcy5vbmVuZGVkLmJpbmQodGhpcyk7XG5cbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAwO1xuXG4gICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IHRoaXMuYnVmZmVyU291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSAqIGRlbHRhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZhZGVUYXJnZXQgIT09IHRoaXMuZmFkZU1vZCkge1xuXG4gICAgICB0aGlzLmZhZGVNb2QgPSBTb3VuZE9uRGVtYW5kLm1vdmVUbyh0aGlzLmZhZGVNb2QsIHRoaXMuZmFkZVRhcmdldCwgZGVsdGEgKiB0aGlzLmZhZGVTcGVlZCk7XG5cbiAgICAgIHRoaXMudXBkYXRlVm9sdW1lKCk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuZmFkZVRhcmdldCA9PT0gMCkge1xuXG4gICAgICB0aGlzLnBhdXNlKCk7XG5cbiAgICB9XG5cblxuXG4gIH0sXG5cbiAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jaGFubmVsLnJlbW92ZSh0aGlzKTtcblxuICAgIHRoaXMuYnVmZmVyU291cmNlLnN0b3AoMCk7XG5cbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuICB9LFxuXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5jaGFubmVsLnJlbW92ZSh0aGlzKTtcblxuICAgIHRoaXMuYnVmZmVyU291cmNlLnN0b3AoMCk7XG5cbiAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuICB9LFxuXG4gIHJlc3VtZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmNyZWF0ZU5vZGVzKCk7XG5cbiAgICB0aGlzLmJ1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLmJ1ZmZlcjtcblxuICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lICUgdGhpcy5idWZmZXIuZHVyYXRpb247XG4gICAgdGhpcy5idWZmZXJTb3VyY2Uuc3RhcnQoMCwgdGhpcy5jdXJyZW50VGltZSk7XG5cbiAgICB0aGlzLnJhdGUodGhpcy5jdXJyZW50LnJhdGUpO1xuICAgIHRoaXMudm9sdW1lKHRoaXMuY3VycmVudC52b2x1bWUpO1xuICAgIHRoaXMubG9vcCh0aGlzLmN1cnJlbnQubG9vcCk7XG5cbiAgICB0aGlzLmNoYW5uZWwuYWRkKHRoaXMpO1xuXG4gICAgdGhpcy5wbGF5aW5nID0gdHJ1ZTtcblxuICB9LFxuXG4gIGZhZGVUbzogZnVuY3Rpb24odGFyZ2V0LCBkdXJhdGlvbikge1xuXG4gICAgaWYgKCF0aGlzLnBsYXlpbmcgJiYgdGhpcy5yZWFkeSkgdGhpcy5yZXN1bWUoKTtcblxuICAgIGR1cmF0aW9uID0gZHVyYXRpb24gfHwgMS4wO1xuXG4gICAgdGhpcy5mYWRlVGltZSA9IDA7XG4gICAgdGhpcy5mYWRlVGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMuZmFkZUR1cmF0aW9uID0gZHVyYXRpb247XG5cbiAgICB0aGlzLmZhZGVTcGVlZCA9IE1hdGguYWJzKHRhcmdldCAtIHRoaXMuZmFkZU1vZCkgLyBkdXJhdGlvbjtcblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH0sXG5cbiAgZmFkZUluOiBmdW5jdGlvbihkdXJhdGlvbikge1xuXG4gICAgaWYgKCF0aGlzLnBsYXlpbmcgJiYgdGhpcy5yZWFkeSkgdGhpcy5yZXN1bWUoKTtcblxuICAgIHRoaXMuZmFkZU1vZCA9IDA7XG4gICAgdGhpcy5mYWRlVG8oMS4wLCBkdXJhdGlvbik7XG5cbiAgICByZXR1cm4gdGhpcztcblxuICB9LFxuXG4gIGZhZGVPdXQ6IGZ1bmN0aW9uKGR1cmF0aW9uKSB7XG5cbiAgICB0aGlzLmZhZGVUbygwLCBkdXJhdGlvbiB8fCAxLjApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfSxcblxuXG5cbn07XG5cblBMQVlHUk9VTkQuU291bmRPbkRlbWFuZCA9IGZ1bmN0aW9uKGFwcCkge1xuICBhcHAuYXVkaW8gPSBuZXcgU291bmRPbkRlbWFuZCh7XG4gICAgYXVkaW9Db250ZXh0OiBhcHAuYXVkaW9Db250ZXh0XG4gIH0pO1xuXG4gIGFwcC5hdWRpby5wYXRoID0gYXBwLmdldFBhdGgoXCJzb3VuZHNcIik7XG5cbiAgYXBwLmxvYWRTb3VuZHMgPSBmdW5jdGlvbigpIHtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIHRoaXMubG9hZGVyLmFkZCgpO1xuXG4gICAgICB0aGlzLmF1ZGlvLmxvYWQoa2V5KS50aGVuKFxuICAgICAgICB0aGlzLmxvYWRlci5zdWNjZXNzLmJpbmQodGhpcy5sb2FkZXIpLFxuICAgICAgICB0aGlzLmxvYWRlci5lcnJvci5iaW5kKHRoaXMubG9hZGVyKVxuICAgICAgKTtcblxuICAgIH1cblxuICB9O1xuXG59O1xuXG5QTEFZR1JPVU5ELlNvdW5kT25EZW1hbmQucGx1Z2luID0gdHJ1ZTsiLCJFTkdJTkUgPSB7IH07IiwiZ2EgPSBmdW5jdGlvbigpIHt9XG5cbkVOR0lORS5CZW5jaG1hcmsgPSB7XG5cbiAgY3JlYXRlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubXVzaWMgPSBhcHAubXVzaWMucGxheShcImdhbWVvdmVyXCIpLmZhZGVJbig0KS5sb29wKCk7XG5cbiAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG5cbiAgICAvLyB0aGlzLmdyYWRpZW50ID0gYXBwLmxheWVyLmNyZWF0ZVJhZGlhbEdyYWRpZW50KGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCAwLCBhcHAuY2VudGVyLngsIGFwcC5jZW50ZXIueSwgYXBwLmNlbnRlci54KTtcbiAgICAvLyB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjAsIFwidHJhbnNwYXJlbnRcIik7XG4gICAgLy8gdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMS4wLCBcIiMwMDBcIik7XG5cbiAgICAvLyBKSVQgd2FybXVwXG4gICAgdGhpcy5kaWRXYXJtdXAgPSBmYWxzZTtcbiAgICB0aGlzLnN0ZXBzID0gMDtcbiAgICB0aGlzLmlvdGFMaXN0ID0gW107XG4gICAgdGhpcy5mcmFtZVRpbWVzID0gW107XG4gICAgdGhpcy5zY29yZXMgPSBbXTtcbiAgICB0aGlzLnJ1bkNvdW50ID0gMDtcbiAgICB0aGlzLnNraXBDb3VudCA9IDA7XG4gICAgdGhpcy5za2lwUmVzZXRDb3VudCA9IDA7XG4gICAgdGhpcy5yZXNldENvdW50ID0gMDtcbiAgICB0aGlzLnNjb3JlU3RhY2sgPSBbXTtcbiAgICB0aGlzLmZyYW1lVGltZSA9IDAuMDtcbiAgfSxcblxuXG4gIHBvaW50ZXJkb3duOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLnJlYWR5KSB7XG5cbiAgICAgIHRoaXMubXVzaWMuZmFkZU91dCgpO1xuXG4gICAgICBhcHAuc2V0U3RhdGUoRU5HSU5FLkdhbWUpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zdGFydE1vZCA9IDA7XG5cbiAgICB0aGlzLmlvdGFDb3VudCA9IHRoaXMuYXBwLmJhc2VsaW5lID8gTWF0aC5mbG9vcih0aGlzLmFwcC5iYXNlbGluZSAqIDAuNykgOiAxO1xuXG4gICAgdGhpcy5hcHAuYmFzZWxpbmUgPSAwO1xuXG4gICAgdGhpcy5yZXNldCgpO1xuXG4gIH0sXG5cbiAgLy8gQ2FsbGVkIGJldHdlZW4gYmVuY2htYXJrIGxvb3BzXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0ZXBzID0gMDtcbiAgICB0aGlzLmZyYW1lVGltZXMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnNraXBDb3VudCA9IDA7XG4gICAgLy8gSklUIHdhcm11cCBzZXR0aW5ncyAocnVuIHVuYm91bmQgbG9vcHMpXG4gICAgaWYgKCF0aGlzLmRpZFdhcm11cCkge1xuICAgICAgLy8gY29uc29sZS50aW1lKCdXYXJtdXAnKTtcbiAgICAgIHRoaXMuYXBwLnVuYm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy5hcHAuaW1taWRpYXRlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwLnVuYm91bmQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXBwLmltbWlkaWF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlvdGFMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmFkZElvdGFzKHRoaXMuZGlkV2FybXVwID8gdGhpcy5pb3RhQ291bnQgOiAxKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHZhciBiZWZvcmUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgIHRoaXMuaW90YUxpc3QuZm9yRWFjaChmdW5jdGlvbihpb3RhKSB7XG4gICAgICBpb3RhLnN0ZXAoZHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5mcmFtZVRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAtIGJlZm9yZTtcblxuICAgIGlmICghdGhpcy5kaWRXYXJtdXApIHtcbiAgICAgIC8vIFN0YXRlOiBKSVQgV2FybXVwXG4gICAgICB0aGlzLnN0ZXBXYXJtVXAoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZnJhbWVUaW1lKSB7XG4gICAgICAvLyBTdHJlc3N0ZXN0aW5nXG4gICAgICB0aGlzLnN0ZXBTdHJlc3NUZXN0KClcbiAgICB9XG5cbiAgfSxcblxuICBzdGVwV2FybVVwOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuc3RlcHMrKztcblxuICAgIGlmICh0aGlzLnN0ZXBzID4gMTEwMCkge1xuICAgICAgdGhpcy5kaWRXYXJtdXAgPSB0cnVlO1xuICAgICAgLy8gY29uc29sZS50aW1lRW5kKCdXYXJtdXAnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdXYXJtdXAgd2l0aCAlZCBpb3RhcycsIHRoaXMuaW90YUxpc3QubGVuZ3RoKTtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gIH0sXG5cbiAgc3RlcFN0cmVzc1Rlc3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhZGQgPSAxO1xuICAgIHZhciBmcmFtZVRpbWVzID0gdGhpcy5mcmFtZVRpbWVzO1xuICAgIHZhciBNQVhfRlJBTUVTID0gNDU7XG4gICAgdmFyIE1JTl9GUkFNRVMgPSAxNTtcbiAgICB2YXIgQ09TVCA9IDg7XG4gICAgdmFyIEVSUk9SID0gMC4yNTtcbiAgICB2YXIgZnJhbWVUaW1lID0gdGhpcy5mcmFtZVRpbWU7XG4gICAgaWYgKGZyYW1lVGltZXMudW5zaGlmdChmcmFtZVRpbWUpID4gTUFYX0ZSQU1FUykge1xuICAgICAgZnJhbWVUaW1lcy5sZW5ndGggPSBNQVhfRlJBTUVTO1xuICAgIH1cbiAgICBpZiAoZnJhbWVUaW1lcy5sZW5ndGggPj0gTUlOX0ZSQU1FUykge1xuICAgICAgdmFyIHNhbXBsZSA9IHRoaXMuYW5hbHl6ZShmcmFtZVRpbWVzKTtcbiAgICAgIHZhciBzY29yZSA9IHRoaXMuaW90YUxpc3QubGVuZ3RoO1xuICAgICAgaWYgKHNhbXBsZS5yc2UgPD0gRVJST1IgJiYgc2FtcGxlLm1lYW4gPiBDT1NUKSB7XG4gICAgICAgIHRoaXMucHVzaFNjb3JlKHNjb3JlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHNhbXBsZS5yc2UgPiBFUlJPUiB8fCBzYW1wbGUubWVhbiA+IENPU1QpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NraXAgIycgKyB0aGlzLnNraXBDb3VudCk7XG4gICAgICAgIHRoaXMuc2tpcENvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLnNraXBDb3VudCA+IDYwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAnW1JFU0VUIFNURVBdIEhpZ2ggc2FtcGxpbmcgZXJyb3IgJWYlJSBvciBtZWFuICVmbXMgZm9yICVkIGVudGl0aWVzLicsXG4gICAgICAgICAgICBzYW1wbGUucnNlICogMTAwLCBzYW1wbGUubWVhbiwgc2NvcmVcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuaW90YUNvdW50ID0gTWF0aC5mbG9vcih0aGlzLmxhc3RTY29yZSAqIDAuNyk7XG4gICAgICAgICAgdGhpcy5za2lwUmVzZXRDb3VudCsrO1xuICAgICAgICAgIGlmICh0aGlzLnNraXBSZXNldENvdW50ID4gMTApIHtcbiAgICAgICAgICAgIHRoaXMuZmluYWxpemUoZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZpbmFsaXplKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2tpcENvdW50ID0gMDtcbiAgICAgIGFkZCA9IE1hdGgucm91bmQoQ09TVCAvIHNhbXBsZS5tZWFuKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZElvdGFzKGFkZCk7XG4gIH0sXG5cbiAgcHVzaFNjb3JlOiBmdW5jdGlvbihzY29yZSkge1xuICAgIHZhciBTQVZFX1NDT1JFUyA9IDM7XG4gICAgdmFyIE1JTl9TQ09SRVMgPSA1O1xuICAgIHZhciBNQVhfU0NPUkVTID0gMTA7XG4gICAgdmFyIEVSUk9SID0gMC4xNTtcblxuICAgIHRoaXMuc2tpcFJlc2V0Q291bnQgPSAwO1xuICAgIHZhciBzY29yZXMgPSB0aGlzLnNjb3JlcztcbiAgICB0aGlzLnJ1bkNvdW50Kys7XG4gICAgaWYgKHNjb3Jlcy51bnNoaWZ0KHNjb3JlKSA+IE1BWF9TQ09SRVMpIHtcbiAgICAgIHNjb3Jlcy5sZW5ndGggPSBNQVhfU0NPUkVTO1xuICAgIH1cbiAgICB0aGlzLmlvdGFDb3VudCA9IE1hdGguY2VpbChzY29yZSAqIDAuNyk7XG4gICAgdmFyIGwgPSBzY29yZXMubGVuZ3RoO1xuICAgIGlmIChsID49IE1JTl9TQ09SRVMpIHtcbiAgICAgIHZhciBzYW1wbGUgPSB0aGlzLmFuYWx5emUoc2NvcmVzKTtcbiAgICAgIGlmIChzYW1wbGUucnNlIDwgRVJST1IpIHtcbiAgICAgICAgdGhpcy5yZXNldENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5hcHAuYmFzZWxpbmUgPSBNYXRoLnJvdW5kKHNhbXBsZS5tZWFuKTtcbiAgICAgICAgdGhpcy5hcHAuYmFzZWxpbmVFcnIgPSBzYW1wbGUucnNlO1xuICAgICAgICB0aGlzLnNjb3Jlcy5zcGxpY2UoU0FWRV9TQ09SRVMpO1xuICAgICAgICB0aGlzLmZpbmFsaXplKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ1tTQ09SRSBSRVNFVF0gU3RhbmRhcmQgZXJyb3IgJWYlJSB0b28gaGlnaCBpbiBzY29yZSBzYW1wbGVzLicsXG4gICAgICAgICAgc2FtcGxlLnJzZSAqIDEwMFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlc2V0Q291bnQrKztcbiAgICAgICAgaWYgKHRoaXMucmVzZXRDb3VudCA+IDEwKSB7XG4gICAgICAgICAgdGhpcy5zY29yZXMuc3BsaWNlKDApO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdbQkFJTF0gVG9vIG1hbnkgW1JFU0VUIFNDT1JFXS4nKTtcbiAgICAgICAgICB0aGlzLmZpbmFsaXplKGZhbHNlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maW5hbGl6ZSh0cnVlKTtcbiAgfSxcblxuICBmaW5hbGl6ZTogZnVuY3Rpb24ocmVzdGFydCkge1xuXG4gICAgaWYgKCFyZXN0YXJ0KSB7XG4gICAgICAvLyBSZW1vdmUgaW90YXNcbiAgICAgIHRoaXMuaW90YUNvdW50ID0gMDtcbiAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgLy8gUmVzZXQgYmVuY2htYXJrIGVuZ2luZSBzZXR0aW5nc1xuICAgICAgdGhpcy5hcHAudW5ib3VuZCA9IGZhbHNlO1xuICAgICAgdGhpcy5hcHAuaW1taWRpYXRlID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFJlZHVjZSBpb3RhTGlzdCB0byBpb3RhQ291bnRcbiAgICB0aGlzLmlvdGFMaXN0LnNwbGljZSh0aGlzLmlvdGFDb3VudCkuZm9yRWFjaChmdW5jdGlvbihpb3RhKSB7XG4gICAgICBpb3RhLmRlc3Ryb3koKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdGFydCkge1xuICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgIGFwcC50d2Vlbih0aGlzKS50byh7XG4gICAgICAgIHN0YXJ0TW9kOiAxLjBcbiAgICAgIH0sIDEuMCwgXCJvdXRFbGFzdGljXCIpO1xuICAgIH1cblxuICB9LFxuXG4gIGFkZElvdGFzOiBmdW5jdGlvbihjb3VudCkge1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBjb3VudDsgaisrKSB7XG5cbiAgICAgIHRoaXMuaW90YUxpc3QucHVzaChuZXcgSW90YSh0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIC8qIGdldCByZWZlcmVuY2UgdG8gdGhlIGFwcGxpY2F0aW9uICovXG5cbiAgICB2YXIgYXBwID0gdGhpcy5hcHA7XG5cbiAgICAvKiBnZXQgcmVmZXJlbmNlIHRvIGRyYXdpbmcgc3VyZmFjZSAqL1xuXG4gICAgdmFyIGxheWVyID0gdGhpcy5hcHAubGF5ZXI7XG5cbiAgICAvKiBjbGVhciBzY3JlZW4gKi9cblxuICAgIGxheWVyLmNsZWFyKFwiIzI4MjI0NVwiKTtcblxuXG4gICAgbGF5ZXIuZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3BsYXNoLCBhcHAuY2VudGVyLnggLSBhcHAuaW1hZ2VzLnNwbGFzaC53aWR0aCAvIDIgfCAwLCBhcHAuY2VudGVyLnkgLSBhcHAuaW1hZ2VzLnNwbGFzaC5oZWlnaHQgLyAyIHwgMClcblxuICAgIGxheWVyLnNhdmUoKTtcbiAgICBsYXllci50cmFuc2xhdGUoNjAwLCAyOTApO1xuXG4gICAgbGF5ZXIuYWxpZ24oMC41LCAwLjUpO1xuICAgIGxheWVyLnNjYWxlKDQsIDQpO1xuICAgIGxheWVyLmdsb2JhbEFscGhhKDAuNCk7XG4gICAgbGF5ZXIuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uKFwibGlnaHRlclwiKTtcbiAgICBsYXllci5kcmF3SW1hZ2UoYXBwLmltYWdlcy5mbGFyZSwgMTI4ICogKDMyICogKGFwcC5saWZldGltZSAlIDEuNSAvIDEuNSkgfCAwKSwgMCwgMTI4LCAxMjgsIDAsIDAsIDEyOCwgMTI4KTtcbiAgICBsYXllci5yZXN0b3JlKCk7XG5cblxuICAgIGFwcC5mb250U2l6ZSg0OCk7XG5cblxuXG4gICAgaWYgKCF0aGlzLnJlYWR5KSB7XG4gICAgICB2YXIgdGV4dFggPSBhcHAuY2VudGVyLng7XG4gICAgICB2YXIgdGV4dFkgPSBhcHAuY2VudGVyLnkgLSAxNjtcblxuICAgICAgbGF5ZXIuZmlsbFN0eWxlKFwicmdiYSgwLDAsMCwwLjVcIikuZmlsbFJlY3QoMCwgdGV4dFkgLSA1NCwgYXBwLndpZHRoLCA3NCk7XG5cbiAgICAgIGxheWVyLmZpbGxTdHlsZShcIiMwMDBcIikudGV4dEFsaWduKFwiY2VudGVyXCIpLmZpbGxUZXh0KFwiTE9BRElORy4uLiBwbGVhc2Ugd2FpdFwiLCB0ZXh0WCwgdGV4dFkgLSA0KTtcbiAgICAgIGxheWVyLmZpbGxTdHlsZShcIiNmZmZcIikudGV4dEFsaWduKFwiY2VudGVyXCIpLmZpbGxUZXh0KFwiTE9BRElORy4uLiBwbGVhc2Ugd2FpdFwiLCB0ZXh0WCwgdGV4dFkpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdmFyIHRleHRYID0gYXBwLmNlbnRlci54ICsgMTAwICsgKDEgLSB0aGlzLnN0YXJ0TW9kKSAqIDEwMDA7XG4gICAgICB2YXIgdGV4dFkgPSBhcHAuY2VudGVyLnkgLSAxMDtcblxuICAgICAgbGF5ZXIuYSgwLjUgKyBVdGlscy5vc2MoYXBwLmxpZmV0aW1lLCAxKSAqIDAuNSk7XG4gICAgICBsYXllci5maWxsU3R5bGUoXCIjMDAwXCIpLnRleHRBbGlnbihcImNlbnRlclwiKS5maWxsVGV4dChcIkNMSUNLIFRPIFNUQVJUIVwiLCB0ZXh0WCwgdGV4dFkgLSA0KTtcbiAgICAgIGxheWVyLmZpbGxTdHlsZShcIiNmYTBcIikudGV4dEFsaWduKFwiY2VudGVyXCIpLmZpbGxUZXh0KFwiQ0xJQ0sgVE8gU1RBUlQhXCIsIHRleHRYLCB0ZXh0WSk7XG4gICAgICBsYXllci5hKDEuMCk7XG5cbiAgICB9XG5cblxuICAgIC8vIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAvLyBhcHAuY3R4LmZpbGxSZWN0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICAvLyB0aGlzLmlvdGFMaXN0LmZvckVhY2goZnVuY3Rpb24oaW90YSkge1xuICAgIC8vICAgaW90YS5yZW5kZXIobGF5ZXIpO1xuICAgIC8vIH0pO1xuXG4gICAgLy8gbGF5ZXJcbiAgICAvLyAgIC5maWxsU3R5bGUoJyNmZmYnKVxuICAgIC8vICAgLmZvbnQoXCIxNHB4ICdhcmlhbCdcIilcbiAgICAvLyAgIC5maWxsVGV4dCgnU3RyZXNzIHRlc3QgIycgKyB0aGlzLnJ1bkNvdW50LCA1LCAxNSlcbiAgICAvLyAgIC5maWxsVGV4dCgnRW50aXRpZXM6ICcgKyB0aGlzLmlvdGFMaXN0Lmxlbmd0aCwgNSwgMzApXG4gICAgLy8gICAuZmlsbFRleHQoJ0ZyYW1ldGltZTonICsgdGhpcy5mcmFtZVRpbWUudG9GaXhlZCgxKSwgNSwgNDUpO1xuICB9LFxuXG4gIGFuYWx5emU6IGZ1bmN0aW9uKHBvcHVsYXRpb24pIHtcblxuICAgIHZhciBsID0gcG9wdWxhdGlvbi5sZW5ndGg7XG4gICAgdmFyIHN1bSA9IDAuMDtcbiAgICB2YXIgc3Vtc3EgPSAwLjA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIHN1bSArPSBwb3B1bGF0aW9uW2ldO1xuICAgICAgc3Vtc3EgKz0gcG9wdWxhdGlvbltpXSAqIHBvcHVsYXRpb25baV07XG4gICAgfVxuICAgIHZhciBtZWFuID0gc3VtIC8gbDtcbiAgICB2YXIgc2QgPSBNYXRoLnNxcnQoc3Vtc3EgLyBsIC0gc3VtICogc3VtIC8gKGwgKiBsKSk7XG4gICAgdmFyIHNlID0gc2QgLyBNYXRoLnNxcnQobCk7XG4gICAgLy8gc3RhbmRhcmQgZXJyb3IgYXQgOTUlIGNvbmZpZGVuY2VcbiAgICB2YXIgc2U5NSA9IDEuOTYgKiBzZTtcbiAgICB2YXIgcnNlID0gc2UgLyBtZWFuO1xuICAgIHJldHVybiB7XG4gICAgICBtZWFuOiBtZWFuLFxuICAgICAgc2Q6IHNkLFxuICAgICAgc2U6IHNlLFxuICAgICAgc2U5NTogc2U5NSxcbiAgICAgIHJzZTogcnNlXG4gICAgfVxuXG4gIH0sXG5cbiAgbmVhcmVzdDogZnVuY3Rpb24oZnJvbSwgZW50aXRpZXMpIHtcblxuICAgIHZhciBtaW4gPSAtMTtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHRvID0gZW50aXRpZXNbaV07XG5cbiAgICAgIGlmIChmcm9tID09PSB0bykgY29udGludWU7XG5cbiAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UoZnJvbSwgdG8pO1xuXG4gICAgICBpZiAoZGlzdGFuY2UgPCBtaW4gfHwgbWluIDwgMCkge1xuICAgICAgICBtaW4gPSBkaXN0YW5jZTtcbiAgICAgICAgcmVzdWx0ID0gdG87XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIGRpc3RhbmNlOiBmdW5jdGlvbihhLCBiKSB7XG5cbiAgICB2YXIgZHggPSBhLnggLSBiLng7XG4gICAgdmFyIGR5ID0gYS55IC0gYi55O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG5cbiAgfVxufTtcblxudmFyIGltYWdlcyA9IFsnZmlyZWZveCcsICdmaXJlZm94X2JldGEnLCAnZmlyZWZveF9kZXZlbG9wZXJfZWRpdGlvbicsICdmaXJlZm94X25pZ2h0bHknXTtcblxuZnVuY3Rpb24gSW90YShhcHAsIHBhcmVudCkge1xuICB0aGlzLnggPSAwLjA7XG4gIHRoaXMueSA9IDAuMDtcbiAgdGhpcy52eCA9IDAuMDtcbiAgdGhpcy52eSA9IDAuMDtcbiAgdGhpcy52ciA9IDAuMDtcbiAgdGhpcy5hbHBoYSA9IDAuMDtcbiAgdGhpcy5hbmdsZSA9IDAuMDtcbiAgdGhpcy5hcHAgPSBhcHA7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogYXBwLndpZHRoO1xuICB0aGlzLnkgPSBNYXRoLnJhbmRvbSgpICogYXBwLmhlaWdodDtcbiAgdGhpcy5tYXhWZWwgPSAxMDAuMDtcbiAgdGhpcy5tYXhUb3JxID0gTWF0aC5QSSAqIDEwO1xuICB0aGlzLnZ4ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4VmVsICogMiAtIHRoaXMubWF4VmVsO1xuICB0aGlzLnZ5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4VmVsICogMiAtIHRoaXMubWF4VmVsO1xuICB0aGlzLnZyID0gTWF0aC5yYW5kb20oKSAqIHRoaXMubWF4VG9ycSAqIDIgLSB0aGlzLm1heFRvcnE7XG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzW2ltYWdlc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKV1dO1xuICB0aGlzLnJlZ2lvbiA9IFV0aWxzLnJhbmRvbShbXG4gICAgWzU0OCwgODgsIDQ2LCA0N10sXG4gICAgWzU0NCwgMTQyLCA0NiwgNDhdLFxuICAgIFs1NDQsIDIwMCwgNDYsIDQ3XSxcbiAgICBbNTQ1LCAyNTMsIDQ0LCA0OF1cbiAgXSk7XG4gIHRoaXMubWF4Rm9yY2UgPSAxMDAuMDtcbiAgdGhpcy5hbHBoYSA9IDAuMiArIE1hdGgucmFuZG9tKCkgKiAwLjg7XG4gIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcbn1cblxuSW90YS5wcm90b3R5cGUgPSB7XG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIGFwcC5zdGF0ZS5uZWFyZXN0KHRoaXMsIHRoaXMucGFyZW50LmlvdGFMaXN0KTtcblxuICAgIHZhciBpb3RhTGlzdCA9IHRoaXMucGFyZW50LmlvdGFMaXN0O1xuICAgIHZhciBmb3JjZXggPSAwLjA7XG4gICAgdmFyIGZvcmNleSA9IDAuMDtcbiAgICB2YXIgZm9yY2VzID0gMDtcbiAgICB2YXIgbWF4RGlzdCA9IDYwLjA7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpb3RhTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBkaXN0eCA9ICh0aGlzLnggLSBpb3RhTGlzdFtpXS54KSAvIG1heERpc3Q7XG4gICAgICB2YXIgZGlzdHkgPSAodGhpcy55IC0gaW90YUxpc3RbaV0ueSkgLyBtYXhEaXN0O1xuICAgICAgdmFyIHNpZ254ID0gTWF0aC5zaWduKGRpc3R4KTtcbiAgICAgIHZhciBzaWdueSA9IE1hdGguc2lnbihkaXN0eSk7XG4gICAgICB2YXIgYWJzeCA9IE1hdGguYWJzKGRpc3R4KTtcbiAgICAgIHZhciBhYnN5ID0gTWF0aC5hYnMoZGlzdHkpO1xuICAgICAgaWYgKGFic3ggPCAxICYmIGFic3kgPCAxKSB7XG4gICAgICAgIGZvcmNleCArPSBzaWdueCArIGFic3ggKiBzaWdueDtcbiAgICAgICAgZm9yY2V5ICs9IHNpZ255ICsgYWJzeSAqIHNpZ255O1xuICAgICAgICBmb3JjZXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZm9yY2VzID09IDApIHtcbiAgICAgIGZvcmNlcyA9IDE7XG4gICAgfVxuICAgIGZvcmNleCA9IE1hdGgubWF4KC10aGlzLm1heEZvcmNlLCBNYXRoLm1pbih0aGlzLm1heEZvcmNlLCBmb3JjZXggLyBmb3JjZXMpKSAqIDUwMDtcbiAgICBmb3JjZXkgPSBNYXRoLm1heCgtdGhpcy5tYXhGb3JjZSwgTWF0aC5taW4odGhpcy5tYXhGb3JjZSwgZm9yY2V5IC8gZm9yY2VzKSkgKiA1MDA7XG4gICAgdGhpcy52eCA9IHRoaXMudnggKiAwLjk5ICsgZm9yY2V4ICogMC4wMTtcbiAgICB0aGlzLnZ5ID0gdGhpcy52eSAqIDAuOTkgKyBmb3JjZXkgKiAwLjAxO1xuXG4gICAgdmFyIHggPSB0aGlzLnggKyB0aGlzLnZ4ICogZHQ7XG4gICAgaWYgKHggPCAwIHx8IHggPiB0aGlzLmFwcC53aWR0aCkge1xuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmFwcC53aWR0aDtcbiAgICB9XG4gICAgdGhpcy54ID0geDtcblxuICAgIHZhciB5ID0gdGhpcy55ICsgdGhpcy52eSAqIGR0O1xuICAgIGlmICh5IDwgMCB8fCB5ID4gdGhpcy5hcHAuaGVpZ2h0KSB7XG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIHRoaXMuYXBwLmhlaWdodDtcbiAgICB9XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmFuZ2xlICs9IHRoaXMudnIgKiBkdDtcbiAgfSxcblxuICAvLyByZW5kZXI6IGZ1bmN0aW9uKGxheWVyKSB7XG5cbiAgLy8gICByZXR1cm47XG5cbiAgLy8gICBsYXllci5jb250ZXh0LnNhdmUoKTtcbiAgLy8gICBsYXllci5jb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnggfCAwLCB0aGlzLnkgfCAwKTtcbiAgLy8gICAvLyBsYXllci5hKHRoaXMuYWxwaGEpO1xuICAvLyAgIGxheWVyLmNvbnRleHQuZmlsbFN0eWxlID0gXCIjZjAwXCI7XG4gIC8vICAgbGF5ZXIuY29udGV4dC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgNjQsIDY0KTtcbiAgLy8gICBsYXllci5jb250ZXh0LmZpbGxTdHlsZSA9IFwiI2ZmZlwiO1xuICAvLyAgIGxheWVyLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gIC8vICAgbGF5ZXIuY29udGV4dC5tb3ZlVG8odGhpcy54LCB0aGlzLnkpO1xuICAvLyAgIGxheWVyLmNvbnRleHQuYXJjKHRoaXMueCwgdGhpcy55LCA2NCwgMCwgTWF0aC5QSSAqIDIpO1xuICAvLyAgIGxheWVyLmNvbnRleHQucm90YXRlKHRoaXMuYW5nbGUpO1xuICAvLyAgIGxheWVyLmRyYXdSZWdpb24oYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5yZWdpb24sIDAsIDApO1xuICAvLyAgIGxheWVyLmNvbnRleHQucmVzdG9yZSgpO1xuICAvLyB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXBwID0gbnVsbDtcbiAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gIH1cblxufSIsIkVOR0lORS5CYWNrZ3JvdW5kU3RhcnMgPSBmdW5jdGlvbigpIHtcblxuICB0aGlzLmNvbG9yID0gXCIjMGFmXCI7XG5cbiAgdGhpcy5jb3VudCA9IE1hdGgubWF4KGFwcC5oZWlnaHQsIGFwcC53aWR0aCkgLyAxNiB8IDA7XG5cbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcblxuICB0aGlzLnBvcHVsYXRlZCA9IGZhbHNlO1xuICB0aGlzLmltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLmNvbG9yKTtcblxufTtcblxuRU5HSU5FLkJhY2tncm91bmRTdGFycy5wcm90b3R5cGUgPSB7XG5cbiAgaW1hZ2VzOiB7fSxcblxuICBjb2xvcnM6IFtcIiNhZmNcIiwgXCIjZmEwXCJdLFxuXG4gIHNwcml0ZXM6IFtcbiAgICBbMjYwLCAxNjUsIDUsIDVdLFxuICAgIFsyNjEsIDE3MSwgMywgM11cbiAgXSxcblxuICBwb3B1bGF0ZTogZnVuY3Rpb24oZmlsbCkge1xuICAgIHRoaXMuc3RhcnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XG4gICAgICB0aGlzLnNwYXduU3RhcihmaWxsKTtcbiAgICB9XG5cbiAgfSxcblxuICBzcGF3blN0YXI6IGZ1bmN0aW9uKGZpbGwpIHtcblxuICAgIHZhciBzdGFyID0ge1xuICAgICAgeDogTWF0aC5yYW5kb20oKSAqIGFwcC53aWR0aCxcbiAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiBhcHAuaGVpZ2h0LFxuICAgICAgejogMC4xICsgMC45ICogTWF0aC5yYW5kb20oKSxcbiAgICAgIHM6IFV0aWxzLnJhbmRvbShbMSwgMiwgM10pLFxuICAgICAgc3ByaXRlSW5kZXg6IE1hdGgucmFuZG9tKCkgKiB0aGlzLnNwcml0ZXMubGVuZ3RoIHwgMFxuICAgIH07XG5cbiAgICBzdGFyLmx4ID0gc3Rhci54O1xuICAgIHN0YXIubHkgPSBzdGFyLnk7XG5cbiAgICB0aGlzLnN0YXJzLnB1c2goc3Rhcik7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBpZiAoIXRoaXMucG9wdWxhdGVkKSB7XG4gICAgICB0aGlzLnBvcHVsYXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnBvcHVsYXRlKHRydWUpO1xuICAgIH1cblxuICAgIHZhciBkaWZmWCA9ICgxMCArIGFwcC5nYW1lLnNjb3JlKSAqIGR0O1xuICAgIHZhciBkaWZmWSA9ICgxMCArIGFwcC5nYW1lLnNjb3JlKSAqIGR0O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN0YXJzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBzdGFyID0gdGhpcy5zdGFyc1tpXTtcblxuICAgICAgdmFyIHNwcml0ZSA9IHRoaXMuc3ByaXRlc1tzdGFyLnNwcml0ZUluZGV4XTtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgc3ByaXRlWzBdLCBzcHJpdGVbMV0sIHNwcml0ZVsyXSwgc3ByaXRlWzNdLFxuICAgICAgICBzdGFyLngsIHN0YXIueSwgc3ByaXRlWzJdLCBzcHJpdGVbM10pO1xuXG4gICAgICBzdGFyLnggKz0gZGlmZlggKiBzdGFyLno7XG4gICAgICBzdGFyLnkgKz0gZGlmZlkgKiBzdGFyLno7XG5cbiAgICAgIGlmIChzdGFyLnggPiBhcHAud2lkdGgpIHN0YXIueCA9IDA7XG4gICAgICBpZiAoc3Rhci55ID4gYXBwLmhlaWdodCkgc3Rhci55ID0gMDtcblxuICAgICAgaWYgKHN0YXIueCA8IDApIHN0YXIueCA9IGFwcC53aWR0aDtcbiAgICAgIGlmIChzdGFyLnkgPCAwKSBzdGFyLnkgPSBhcHAuaGVpZ2h0O1xuXG4gICAgfVxuXG4gIH1cblxufTsiLCJFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBhdHRhY2hlZFRvOiBmYWxzZSxcbiAgICByYWRpdXM6IDAsXG4gICAgYWxwaGE6IDEuMCxcbiAgICBkdXJhdGlvbjogMC41XG5cbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAwO1xuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuZ2V0Q29sb3JlZEltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsIFwiIzAwMFwiLCBcInNvdXJjZS1pblwiKTtcblxuICB0aGlzLnR3ZWVuID0gYXBwLnR3ZWVuKHRoaXMpLmRpc2NhcmQoKS50byh7XG4gICAgcmFkaXVzOiBhcmdzLnJhZGl1c1xuICB9LCB0aGlzLmR1cmF0aW9uLCBcIm91dEVsYXN0aWNcIikudG8oe1xuICAgIHJhZGl1czogMFxuICB9LCB0aGlzLmR1cmF0aW9uLCBcIm91dEVsYXN0aWNcIik7XG5cbn07XG5cbkVOR0lORS5DaXJjbGVFeHBsb3Npb24ucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLFxuXG4gIHR5cGU6IFwiY2lyY2xlRXhwbG9zaW9uXCIsXG5cbiAgYWN0aW9uOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICAgIGlmKHRoaXMuYXR0YWNoZWRUbykge1xuICAgICAgdGhpcy54ID0gdGhpcy5hdHRhY2hlZFRvLng7XG4gICAgICB0aGlzLnkgPSB0aGlzLmF0dGFjaGVkVG8ueTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50d2Vlbi5maW5pc2hlZCkgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5yYWRpdXMgPiAwKSB7XG4gICAgICBcbiAgICAgIGFwcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBhcHAuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgYXBwLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBhcHAuY3R4LmZpbGwoKTtcbiAgICAgIGFwcC5jdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG5cbiAgICB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5TaGlwID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG5cbiAgICBkYW1hZ2U6IDEsXG4gICAgZmlyZXJhdGU6IDAuNSxcbiAgICBzcGVlZDogMTYwLFxuICAgIHJhZGl1czogMTYsXG4gICAgcm90YXRpb25TcGVlZDogNSxcbiAgICBocDogMTAsXG4gICAgcmFuZ2U6IDIwMCxcbiAgICBmb3JjZTogMCxcbiAgICBmb3JjZURpcmVjdGlvbjogMCxcbiAgICB0YXJnZXRUaW1lb3V0OiAwLFxuICAgIGhpdExpZmVzcGFuOiAwLFxuICAgIHNjYWxlOiAxLjAsXG4gICAgcmFuazogMCxcbiAgICBraWxsczogMFxuXG4gIH0sIGRlZnMuc2hpcHNbYXJncy50eXBlXSwgYXJncyk7XG5cbiAgdGhpcy5yYW5kb20gPSB0aGlzLmdhbWUucmFuZG9tKCk7XG5cbiAgdGhpcy5tYXhIcCA9IHRoaXMuaHA7XG5cbiAgdGhpcy5saWZldGltZSA9IHRoaXMuZ2FtZS5yYW5kb20oKSAqIDEwO1xuICB0aGlzLmNvb2xkb3duID0gdGhpcy5maXJlcmF0ZTtcbiAgdGhpcy5kZXNpcmVkRGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdhbWUucmFuZG9tKCkgKiA2O1xuXG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0aGlzLnRlYW1dO1xuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0O1xuXG4gIGlmICh0aGlzLnRlYW0pIHRoaXMuYXBwbHlVcGdyYWRlcyh0aGlzLmdhbWUudXBncmFkZXMpO1xuICBlbHNlIHRoaXMuYXBwbHlEaWZmaWN1bHR5KCk7XG5cbn07XG5cbkVOR0lORS5TaGlwLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlNoaXAsXG5cbiAgaG92ZXJhYmxlOiB0cnVlLFxuXG4gIGZyb3plblNwcml0ZTogWzE5MywgODYsIDExLCAxOV0sXG5cbiAgcXVvdGE6IDIsXG5cbiAgcG9pbnRlcmVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucmVwYWlyKCk7XG5cbiAgfSxcblxuICByYW5rczogW1xuICAgIFszMTgsIDEzMSwgMTAsIDVdLFxuICAgIFszMzMsIDEzMSwgMTAsIDEwXSxcbiAgICBbMzQ4LCAxMzEsIDEwLCAxNV0sXG4gICAgWzM2MCwgMTMxLCAxMCwgOF0sXG4gICAgWzM3MiwgMTMxLCAxMCwgMTNdLFxuICAgIFszODQsIDEzMSwgMTAsIDE4XSxcbiAgICBbMzk2LCAxMzEsIDE1LCAxNl1cbiAgXSxcblxuICBhcHBseURpZmZpY3VsdHk6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRpZmZpY3VsdHkgPSB0aGlzLmdhbWUud2F2ZSAvIDMwO1xuXG4gICAgdGhpcy5zcGVlZCAqPSAxICsgZGlmZmljdWx0eTtcbiAgICB0aGlzLmRhbWFnZSAqPSAxICsgZGlmZmljdWx0eTtcblxuICB9LFxuXG4gIGFwcGx5VXBncmFkZXM6IGZ1bmN0aW9uKHVwZ3JhZGVzKSB7XG5cbiAgICB2YXIgaHBtb2QgPSB0aGlzLmhwIC8gdGhpcy5tYXhIcDtcblxuICAgIHRoaXMuZGFtYWdlID0gMSArIHVwZ3JhZGVzLmRhbWFnZSAqIDAuMjU7XG4gICAgdGhpcy5tYXhIcCA9IHVwZ3JhZGVzLmxpZmUgKiAxMDtcbiAgICB0aGlzLmhwID0gaHBtb2QgKiB0aGlzLm1heEhwO1xuICAgIHRoaXMuc3BlZWQgPSA4MCArIDEwICogdXBncmFkZXMuc3BlZWQ7XG5cblxuICAgIGlmICh0aGlzLmZyZWUpIHtcbiAgICAgIHRoaXMuZGFtYWdlICo9IDI7XG4gICAgICB0aGlzLm1heEhwICo9IDI7XG4gICAgICB0aGlzLmhwICo9IDI7XG4gICAgfVxuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy50ZWFtKSB0aGlzLmdhbWUuc2NvcmUrKztcblxuICAgIGlmICh0aGlzLmdhbWUuYmVuY2htYXJrKSB7XG5cbiAgICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5kZWFkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvc3MpIHtcblxuICAgICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLlJlc291cmNlLCB7XG4gICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgIHk6IHRoaXMueVxuICAgICAgICB9KTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIHRoaXMuY29sb3IpO1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuUmVzb3VyY2UsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHBhcmVudDogdGhpc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucGxhbmV0KSB0aGlzLnBsYW5ldC5zaGlwcy0tO1xuXG4gICAgaWYgKCF0aGlzLnRlYW0pIHRoaXMuZ2FtZS5vbmVuZW15ZGVhdGgodGhpcyk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwicGxhbmV0SGl0XCIpLnJhdGUoMC42KTtcblxuICB9LFxuXG4gIGFwcGx5RGFtYWdlOiBmdW5jdGlvbihkYW1hZ2UsIGF0dGFja2VyKSB7XG5cbiAgICBpZiAodGhpcy5kZWFkKSByZXR1cm47XG5cbiAgICB0aGlzLmhpdExpZmVzcGFuID0gMC4xO1xuXG4gICAgdGhpcy5ocCAtPSBkYW1hZ2U7XG5cbiAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICB0aGlzLmRpZSgpO1xuICAgICAgaWYgKGF0dGFja2VyKSBhdHRhY2tlci5vbnNjb3JlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMywgdGhpcy5jb2xvcik7XG5cblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICBkdCAqPSB0aGlzLmdhbWUudGltZUZhY3RvcjtcblxuICAgIC8vIGlmICghdGhpcy50ZWFtKSBkdCAqPSBNYXRoLnNpbigoYXBwLmxpZmV0aW1lICUgMiAvIDIpICogTWF0aC5QSSk7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgaWYgKCh0aGlzLnRhcmdldFRpbWVvdXQgLT0gZHQpIDw9IDApIHtcblxuICAgICAgdGhpcy50YXJnZXQgPSBmYWxzZTtcbiAgICAgIHRoaXMudGFyZ2V0VGltZW91dCA9IDAuMjU7XG5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQodGhpcy5nYW1lLmVudGl0aWVzKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQuZGVhZCkge1xuXG4gICAgICB0aGlzLnRhcmdldCA9IG51bGw7XG5cbiAgICB9XG5cblxuICAgIHRoaXMuZm9yZXNpZ2h0Q29sbGlzaW9uKCk7XG5cbiAgICB2YXIgZGVzdGluYXRpb24gPSBmYWxzZTtcbiAgICB2YXIgc3BlZWQgPSB0aGlzLnNwZWVkO1xuXG4gICAgdmFyIG94ID0gMDtcbiAgICB2YXIgb3kgPSAwO1xuXG4gICAgaWYgKHRoaXMudGVhbSAmJiB0aGlzLnRhcmdldCkge1xuXG4gICAgICBveCA9IE1hdGguY29zKHRoaXMucmFuZG9tICogNi4yOCkgKiAxMDA7XG4gICAgICBveSA9IE1hdGguc2luKHRoaXMucmFuZG9tICogNi4yOCkgKiAxMDA7XG5cbiAgICAgIGRlc3RpbmF0aW9uID0gdGhpcy50YXJnZXQ7XG5cbiAgICB9IGVsc2UgZGVzdGluYXRpb24gPSB0aGlzLmdhbWUucGxheWVyLnBsYW5ldDtcblxuICAgIGlmICh0aGlzLnRlYW0gJiYgVXRpbHMuZGlzdGFuY2UodGhpcywgYXBwLmNlbnRlcikgPiBhcHAuY2VudGVyLnkpIHtcblxuICAgICAgZGVzdGluYXRpb24gPSBhcHAuY2VudGVyO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29sbGlzaW9uRGFuZ2VyKSB7XG5cbiAgICAgIC8qXG5cbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMih0aGlzLmNvbGxpc2lvbkRhbmdlci55IC0gdGhpcy55LCB0aGlzLmNvbGxpc2lvbkRhbmdlci54IC0gdGhpcy54KSAtIE1hdGguUEkgLyAyO1xuXG4gICAgICAgIGRlc3RpbmF0aW9uID0ge1xuICAgICAgICAgIHg6IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAxNTAsXG4gICAgICAgICAgeTogdGhpcy5jb2xsaXNpb25EYW5nZXIueSArIE1hdGguY29zKGFuZ2xlKSAqIDE1MFxuICAgICAgICB9XG5cbiAgICAgICAgc3BlZWQgKj0gMSAtIDAuNSAqIE1hdGguYWJzKFV0aWxzLmNpcmNEaXN0YW5jZSh0aGlzLmRpcmVjdGlvbiwgYW5nbGUpIC8gKE1hdGguUEkpKTtcblxuICAgICAgKi9cblxuICAgICAgaWYgKHRoaXMuY29sbGlzaW9uRGlzdGFuY2UgPCA1MCkge1xuXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy5jb2xsaXNpb25EYW5nZXIueSAtIHRoaXMueSwgdGhpcy5jb2xsaXNpb25EYW5nZXIueCAtIHRoaXMueCkgLSBNYXRoLlBJO1xuXG4gICAgICAgIHRoaXMueCA9IHRoaXMuY29sbGlzaW9uRGFuZ2VyLnggKyBNYXRoLmNvcyhhbmdsZSkgKiA1MDtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jb2xsaXNpb25EYW5nZXIueSArIE1hdGguc2luKGFuZ2xlKSAqIDUwO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHNwZWVkICo9IHRoaXMuY29sbGlzaW9uRGlzdGFuY2UgLyAyMDA7XG5cbiAgICB9XG5cblxuICAgIGlmIChkZXN0aW5hdGlvbikge1xuXG4gICAgICB0aGlzLmRlc2lyZWREaXJlY3Rpb24gPSBNYXRoLmF0YW4yKGRlc3RpbmF0aW9uLnkgLSB0aGlzLnkgKyBveCwgZGVzdGluYXRpb24ueCAtIHRoaXMueCArIG95KTtcblxuICAgIH1cblxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcblxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSBVdGlscy5jaXJjV3JhcFRvKHRoaXMuZGlyZWN0aW9uLCB0aGlzLmRlc2lyZWREaXJlY3Rpb24sIGR0ICogdGhpcy5yb3RhdGlvblNwZWVkKTtcblxuICAgIH1cblxuICAgIHRoaXMubW92ZShkdCk7XG5cbiAgICAvKiBmaXJpbmcgbWVjaGFuaWNzICovXG5cbiAgICB0aGlzLmNvb2xkb3duIC09IGR0O1xuXG4gICAgaWYgKHRoaXMuY2FuRmlyZSgpKSB7XG5cbiAgICAgIHRoaXMuZmlyZSgpO1xuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRlYW0gJiYgVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllclBsYW5ldCkgPCB0aGlzLmdhbWUucGxheWVyUGxhbmV0LnJhZGl1cykge1xuXG4gICAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIHtcblxuICAgICAgICB0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5hcHBseURhbWFnZSgxLCB0aGlzKTtcbiAgICAgICAgdGhpcy5kaWUoKTtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdGhpcy5oaXRMaWZlc3BhbiAtPSBkdDtcblxuICB9LFxuXG5cbiAgbW92ZTogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICghdGhpcy5mcm96ZW4pIHtcblxuICAgICAgVXRpbHMubW92ZUluRGlyZWN0aW9uLmNhbGwodGhpcywgdGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5mb3JjZSA+IDApIHtcblxuICAgICAgdGhpcy5mb3JjZSAtPSAyMDAgKiBkdDtcblxuICAgICAgVXRpbHMubW92ZUluRGlyZWN0aW9uLmNhbGwodGhpcywgdGhpcy5mb3JjZURpcmVjdGlvbiwgdGhpcy5mb3JjZSAqIGR0KTtcblxuICAgIH1cblxuICB9LFxuXG4gIGNhbkZpcmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuZnJvemVuKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHJldHVybjtcbiAgICBpZiAoIXRoaXMudGFyZ2V0KSByZXR1cm47XG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA+IHRoaXMucmFuZ2UpIHJldHVybjtcblxuICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmZpcmVyYXRlO1xuXG4gICAgdGhpcy5maXJlKCk7XG5cbiAgfSxcblxuICBmaXJlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLkJ1bGxldCwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgdGVhbTogdGhpcy50ZWFtLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIGRhbWFnZTogdGhpcy5kYW1hZ2UsXG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJsYXNlclwiKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICAvKiBzcHJpdGUgKi9cblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIHRoaXMucmVuZGVySFVEKCk7XG5cbiAgICBpZiAodGhpcy5oaXRMaWZlc3BhbiA+IDApIHtcblxuICAgICAgdmFyIGltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZSh0aGlzLmltYWdlLCBcIiNmZmZcIiwgXCJzb3VyY2UtaW5cIik7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmltYWdlO1xuXG4gICAgfVxuXG4gICAgYXBwLmN0eC5yb3RhdGUodGhpcy5kaXJlY3Rpb24gLSBNYXRoLlBJIC8gMik7XG4gICAgYXBwLmN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcbiAgICBhcHAuY3R4LmRyYXdJbWFnZShpbWFnZSwgdGhpcy5zcHJpdGVbMF0sIHRoaXMuc3ByaXRlWzFdLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM10sIC10aGlzLnNwcml0ZVsyXSAvIDIsIC10aGlzLnNwcml0ZVszXSAvIDIsIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSk7XG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgICBpZiAodGhpcy5mcm96ZW4pIHtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgICAgdGhpcy5mcm96ZW5TcHJpdGVbMF0sIHRoaXMuZnJvemVuU3ByaXRlWzFdLCB0aGlzLmZyb3plblNwcml0ZVsyXSwgdGhpcy5mcm96ZW5TcHJpdGVbM10sXG4gICAgICAgIHRoaXMueCAtIHRoaXMuZnJvemVuU3ByaXRlWzJdIC8gMiwgdGhpcy55IC0gdGhpcy5mcm96ZW5TcHJpdGVbM10gLyAyLCB0aGlzLmZyb3plblNwcml0ZVsyXSwgdGhpcy5mcm96ZW5TcHJpdGVbM10pO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGVhbSkge1xuXG4gICAgICB2YXIgcmFua1Nwcml0ZSA9IHRoaXMucmFua3NbdGhpcy5yYW5rXTtcblxuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgICAgcmFua1Nwcml0ZVswXSwgcmFua1Nwcml0ZVsxXSwgcmFua1Nwcml0ZVsyXSwgcmFua1Nwcml0ZVszXSxcbiAgICAgICAgdGhpcy54ICsgMjQsIHRoaXMueSAtIDI0LCByYW5rU3ByaXRlWzJdLCByYW5rU3ByaXRlWzNdKTtcblxuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVySFVEOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmZyb3plbikgcmV0dXJuO1xuXG4gICAgdmFyIHcgPSBNYXRoLm1pbigxMDAsICh0aGlzLm1heEhwIC8gMTYwKSAqIDEwMCB8IDApO1xuXG4gICAgdmFyIG1vZCA9IHRoaXMuaHAgLyB0aGlzLm1heEhwO1xuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGFwcC5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGFwcC5jdHgubGluZVdpZHRoID0gMjtcbiAgICBhcHAuY3R4LmZpbGxSZWN0KC13ICogbW9kIC8gMiB8IDAsIDMyLCB3ICogbW9kLCA1KTtcbiAgICBhcHAuY3R4LnN0cm9rZVJlY3QoLXcgKiAwLjUgfCAwLCAzMiwgdywgNSk7XG5cbiAgfSxcblxuICBjb2xsaXNpb25SYW5nZTogMTAwLFxuXG4gIGZvcmVzaWdodENvbGxpc2lvbjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmNvbGxpc2lvbkRhbmdlciA9IGZhbHNlO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHBvb2wgPSBVdGlscy5maWx0ZXIodGhpcy5nYW1lLmVudGl0aWVzLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIGlmIChlLnR5cGUgIT09IFwiYXN0ZXJvaWRcIikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBpZiAoVXRpbHMuZGlzdGFuY2Uoc2VsZiwgZSkgPiBzZWxmLmNvbGxpc2lvblJhbmdlKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbGxpc2lvbkRhbmdlciA9IFV0aWxzLm5lYXJlc3QodGhpcywgcG9vbCk7XG5cbiAgICBpZiAodGhpcy5jb2xsaXNpb25EYW5nZXIpIHRoaXMuY29sbGlzaW9uRGlzdGFuY2UgPSBVdGlscy5kaXN0YW5jZSh0aGlzLCB0aGlzLmNvbGxpc2lvbkRhbmdlcik7XG5cbiAgfSxcblxuICBnZXRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBvb2wgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBlbnRpdHkgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG5cbiAgICAgIGlmIChlbnRpdHkudGVhbSAhPT0gdGhpcy50ZWFtKSBwb29sLnB1c2goZW50aXR5KTtcblxuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG4gIH0sXG5cbiAgcmVwYWlyOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmhwID49IHRoaXMubWF4SHApIHJldHVybjtcblxuICAgIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLkNpcmNsZUV4cGxvc2lvbiwge1xuICAgICAgY29sb3I6IFwiI2EwNFwiLFxuICAgICAgcmFkaXVzOiAzMixcbiAgICAgIGF0dGFjaGVkVG86IHRoaXNcbiAgICB9KTtcblxuICAgIHRoaXMuaHAgPSB0aGlzLm1heEhwO1xuXG4gIH0sXG5cbiAgb25zY29yZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmtpbGxzKys7XG5cbiAgICB0aGlzLnJhbmsgPSBNYXRoLm1pbih0aGlzLnJhbmtzLmxlbmd0aCAtIDEsIHRoaXMua2lsbHMgLyAzIHwgMCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5CdWxsZXQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcbiAgICBzcGVlZDogNDAwXG4gIH0sIGFyZ3MpO1xuXG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0aGlzLnRlYW1dO1xuICB0aGlzLnJhZGl1cyA9IDQ7XG4gIHRoaXMuZGlyZWN0aW9uID0gMDtcblxuICB0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLnRlYW1dO1xuXG59O1xuXG5FTkdJTkUuQnVsbGV0LnByb3RvdHlwZSA9IHtcblxuICBzcHJpdGVzOiBbXG4gICAgWzEyNiwgMjUsIDQsIDM3XSxcbiAgICBbMTMzLCAyNSwgNCwgMzddXG4gIF0sXG5cbiAgcXVvdGE6IDAuNSxcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkJ1bGxldCxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgZHQgKj0gdGhpcy5nYW1lLnRpbWVGYWN0b3I7XG5cbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIodGhpcy50YXJnZXQueSAtIHRoaXMueSwgdGhpcy50YXJnZXQueCAtIHRoaXMueCk7XG5cbiAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG5cbiAgICBpZiAoVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy50YXJnZXQpIDwgdGhpcy5yYWRpdXMgKyB0aGlzLnRhcmdldC5yYWRpdXMpIHtcblxuICAgICAgdGhpcy5oaXQodGhpcy50YXJnZXQpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgaGl0OiBmdW5jdGlvbih0YXJnZXQpIHtcblxuICAgIHRhcmdldC5hcHBseURhbWFnZSh0aGlzLmRhbWFnZSwgdGhpcy5wYXJlbnQpO1xuXG4gICAgdGhpcy5kaWUoKTtcblxuICB9LFxuXG4gIGRpZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmRlYWQgPSB0cnVlO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgIGFwcC5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uICsgTWF0aC5QSSAvIDIpO1xuICAgIGFwcC5jdHguZHJhd0ltYWdlKGFwcC5pbWFnZXMuc3ByaXRlc2hlZXQsXG4gICAgICB0aGlzLnNwcml0ZVswXSwgdGhpcy5zcHJpdGVbMV0sIHRoaXMuc3ByaXRlWzJdLCB0aGlzLnNwcml0ZVszXSwgLXRoaXMuc3ByaXRlWzJdIC8gMiwgLXRoaXMuc3ByaXRlWzNdIC8gMiwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdXG4gICAgKTtcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH1cblxufTsiLCJFTkdJTkUuQXN0ZXJvaWQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgdGhpcy5tYXggPSB0aGlzLnJlc291cmNlcyA9IDU7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIGhpdExpZmVzcGFuOiAwXG5cbiAgfSwgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIoYXBwLmNlbnRlci55IC0gdGhpcy55LCBhcHAuY2VudGVyLnggLSB0aGlzLngpO1xuICB0aGlzLnNwZWVkID0gOCArIHRoaXMuZ2FtZS5yYW5kb20oKSAqIDMyO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuXG4gIHRoaXMua2luZCA9IHRoaXMuZ2FtZS5yYW5kb20oKSA+IDAuOCA/IFwiZ29sZFwiIDogXCJub3JtYWxcIjtcblxuICB0aGlzLnNwcml0ZUluZGV4ID0gVXRpbHMucmFuZG9tKDAsIDIpO1xuXG4gIHRoaXMuY29sbGVjdGlibGVzID0gMDtcblxuXG59O1xuXG5FTkdJTkUuQXN0ZXJvaWQucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuQXN0ZXJvaWQsXG5cbiAgcXVvdGE6IDAuNSxcblxuICBob3ZlcmFibGU6IFwibWluaW5nXCIsXG4gIHNpbGVudDogdHJ1ZSxcbiAgaW5zdGFudDogdHJ1ZSxcblxuICB0eXBlOiBcImFzdGVyb2lkXCIsXG5cblxuICBzcHJpdGVzOiB7XG5cbiAgICBub3JtYWw6IFtcbiAgICAgIFszNDEsIDIzOSwgNTIsIDM5XSxcbiAgICAgIFszMzcsIDI4OCwgNjEsIDYxXSxcbiAgICAgIFszMzgsIDM1NCwgNTcsIDU4XVxuICAgIF0sXG5cbiAgICBnb2xkOiBbXG4gICAgICBbNDA4LCAyMzgsIDUyLCAzOV0sXG4gICAgICBbNDA0LCAyODcsIDU5LCA2MV0sXG4gICAgICBbNDAzLCAzNTMsIDU5LCA1OF1cbiAgICBdLFxuXG4gICAgaGl0OiBbXG4gICAgICBbNDc2LCAxMjcsIDUyLCAzOV0sXG4gICAgICBbNDcyLCAxNzYsIDYxLCA2MV0sXG4gICAgICBbNDczLCAyNDIsIDU3LCA1OF1cbiAgICBdXG5cbiAgfSxcblxuICBwb2ludGVyZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IHRydWU7XG5cbiAgfSxcblxuICBwb2ludGVybGVhdmU6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5zbG93ZG93biA9IGZhbHNlO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJkaWdFbmRcIik7XG5cbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNykge1xuXG4gICAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5Qb3dlcnVwLCB7XG4gICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgeTogdGhpcy55XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIFwiI2FhYVwiKTtcbiAgICB0aGlzLmdhbWUuc3Bhd25Bc3Rlcm9pZCgpO1xuXG4gIH0sXG5cbiAgZGlnOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuaGl0TGlmZXNwYW4gPSAwLjE7XG5cbiAgICB0aGlzLnJlc291cmNlcy0tO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2VzIDw9IDApIHtcbiAgICAgIHRoaXMuZGllKCk7XG4gICAgfVxuXG4gICAgdmFyIGNvdW50ID0gdGhpcy5raW5kID09PSBcImdvbGRcIiA/IDIgOiAxO1xuXG4gICAgdGhpcy5zcGF3blJlc291cmNlcyhjb3VudCk7XG5cbiAgICB0aGlzLmdhbWUuZXhwbG9zaW9uKHRoaXMueCwgdGhpcy55LCA0LCBcIiNmYTBcIik7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiZGlnXCIpO1xuXG4gIH0sXG5cbiAgc3Bhd25SZXNvdXJjZXM6IGZ1bmN0aW9uKGNvdW50KSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcblxuICAgICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuUmVzb3VyY2UsIHtcbiAgICAgICAgeDogdGhpcy54LFxuICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgIHBhcmVudDogdGhpc1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgZHQgKj0gdGhpcy5nYW1lLnRpbWVGYWN0b3I7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdGhpcy5oaXRMaWZlc3BhbiAtPSBkdDtcblxuICAgIHZhciBzcGVlZCA9IHRoaXMuc3BlZWQgKiAodGhpcy5zbG93ZG93biA/IDAuMjUgOiAxLjApO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZGlyZWN0aW9uKSAqIHNwZWVkICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHNwZWVkICogZHQ7XG5cbiAgICB0aGlzLmdhbWUud3JhcCh0aGlzKTtcblxuICAgIGlmIChVdGlscy5kaXN0YW5jZSh0aGlzLCBhcHAuY2VudGVyKSA8IHRoaXMuZ2FtZS5wbGF5ZXIucGxhbmV0LnJhZGl1cyArIHRoaXMucmFkaXVzKSB7XG5cbiAgICAgIGlmICh0aGlzLmdhbWUucGxheWVyLnBsYW5ldC5hc3Rlcm9pZHNTaGllbGQpIHtcblxuICAgICAgICB0aGlzLnNwYXduUmVzb3VyY2VzKDUpO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHRoaXMuZ2FtZS5wbGF5ZXIucGxhbmV0LmFwcGx5RGFtYWdlKDEsIHRoaXMpO1xuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGllKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKHRoaXMuaGl0TGlmZXNwYW4gPiAwKSB7XG4gICAgXG4gICAgICB2YXIgc3ByaXRlID0gdGhpcy5zcHJpdGVzLmhpdFt0aGlzLnNwcml0ZUluZGV4XTtcbiAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgXG4gICAgICB2YXIgc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMua2luZF1bdGhpcy5zcHJpdGVJbmRleF07XG5cbiAgICB9XG5cbiAgICB2YXIgc2NhbGUgPSAwLjUgKyAwLjUgKiB0aGlzLnJlc291cmNlcyAvIHRoaXMubWF4O1xuXG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSlcbiAgICBhcHAuY3R4LnJvdGF0ZShhcHAucm91bmRBbmdsZSh0aGlzLmxpZmV0aW1lKSlcbiAgICBhcHAuY3R4LnNjYWxlKHNjYWxlLCBzY2FsZSlcbiAgICBhcHAuY3R4LmRyYXdJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LFxuICAgICAgc3ByaXRlWzBdLCBzcHJpdGVbMV0sIHNwcml0ZVsyXSwgc3ByaXRlWzNdLCAtc3ByaXRlWzJdIC8gMiwgLXNwcml0ZVszXSAvIDIsIHNwcml0ZVsyXSwgc3ByaXRlWzNdXG4gICAgKTtcbiAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkN1cnNvciA9IGZ1bmN0aW9uKGdhbWUsIHRlYW0sIHBsYW5ldCkge1xuXG4gIHRoaXMuZ2FtZSA9IGdhbWU7XG5cbiAgdGhpcy5hY3Rpb25UaW1lb3V0ID0gMDtcblxuICB0aGlzLmRvdFJhZGl1cyA9IDg7XG4gIHRoaXMuY2FwYWNpdHkgPSAxMDtcbiAgdGhpcy5yZXNvdXJjZXMgPSA0O1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnkgPSAwO1xuICB0aGlzLmhvdmVyVGltZSA9IDA7XG4gIHRoaXMudGVhbSA9IHRlYW07XG4gIHRoaXMuY29sb3IgPSBkZWZzLnRlYW1Db2xvclt0ZWFtXTtcbiAgdGhpcy5wbGFuZXQgPSBwbGFuZXQ7XG5cbiAgdGhpcy50YXJnZXRUaW1lb3V0ID0gdGhpcy50YXJnZXRJbnRlcnZhbCA9IDAuMjU7XG4gIHRoaXMuZmlyZUNvb2xkb3duID0gdGhpcy5maXJlSW50ZXJ2YWwgPSAwLjI1O1xuXG4gIC8qIHRpbWVycyAqL1xuXG4gIHRoaXMudGltZXMgPSB7XG4gICAgbWluaW5nOiAwLjUsXG4gICAgY29sbGVjdDogMC4wNSxcbiAgICBidWlsZDogMC41LFxuICAgIHJlcGFpcjogMlxuICB9O1xuXG5cbiAgdGhpcy50d2VlbiA9IGFwcC50d2Vlbih0aGlzKTtcblxuICBpZiAoIXRoaXMudGVhbSkge1xuXG4gICAgdGhpcy5haSA9IG5ldyBFTkdJTkUuQWkodGhpcyk7XG4gICAgdGhpcy5haS5zZXQoXCJpZGxlXCIpO1xuXG4gIH1cblxuICB0aGlzLnRyYWlsID0gbmV3IEVOR0lORS5UcmFpbCh0aGlzLCB7XG4gICAgaW50ZXJ2YWw6IDAuMDUsXG4gICAgbWF4UG9pbnRzOiAxMCxcbiAgICBjb2xvcjogdGhpcy5jb2xvclxuICB9KTtcblxuXG59O1xuXG5FTkdJTkUuQ3Vyc29yLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkN1cnNvcixcblxuICBwb2tlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudHdlZW4gPSBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiAxNlxuICAgIH0sIDAuMSwgXCJvdXRTaW5lXCIpXG5cbiAgICAudG8oe1xuICAgICAgZG90UmFkaXVzOiA4XG4gICAgfSwgMC4wNSwgXCJpblNpbmVcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdmFyIHByZXZFbnRpdHkgPSB0aGlzLmVudGl0eTtcblxuICAgIHRoaXMuZW50aXR5ID0gdGhpcy5nZXRIb3ZlcmVkRW50aXR5KCk7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkgIT09IHByZXZFbnRpdHkpIHtcblxuICAgICAgaWYgKHByZXZFbnRpdHkgJiYgcHJldkVudGl0eS5wb2ludGVybGVhdmUpIHByZXZFbnRpdHkucG9pbnRlcmxlYXZlKHRoaXMpO1xuICAgICAgaWYgKHRoaXMuZW50aXR5ICYmIHRoaXMuZW50aXR5LnBvaW50ZXJlbnRlcikgdGhpcy5lbnRpdHkucG9pbnRlcmVudGVyKHRoaXMpO1xuXG4gICAgICB0aGlzLm9uZW50aXR5Y2hhbmdlKCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcblxuICAgICAgdGhpcy5ob3ZlclRpbWUgKz0gZHQ7XG5cbiAgICAgIHRoaXMucHJvZ3Jlc3NBY3Rpb24oZHQpO1xuXG4gICAgfVxuXG4gICAgLyogZmlyaW5nIG1lY2hhbmljcyAqL1xuXG4gICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmRlYWQpIHRoaXMudGFyZ2V0ID0gZmFsc2U7XG5cbiAgICBpZiAoKHRoaXMudGFyZ2V0VGltZW91dCAtPSBkdCkgPD0gMCkge1xuXG4gICAgICB0aGlzLnRhcmdldFRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5nZXRUYXJnZXQoKTtcblxuICAgIH1cblxuXG4gICAgdGhpcy5maXJlQ29vbGRvd24gLT0gZHQ7XG5cbiAgICBpZiAodGhpcy5jYW5GaXJlKCkpIHtcblxuICAgICAgdGhpcy5maXJlKCk7XG5cbiAgICB9XG5cbiAgICB0aGlzLnRyYWlsLnN0ZXAoZHQpO1xuXG5cbiAgfSxcblxuICBnZXRUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIHBvb2wgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBlbnRpdHkgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG5cbiAgICAgIGlmIChVdGlscy5kaXN0YW5jZShlbnRpdHksIHRoaXMpID4gMjAwKSBjb250aW51ZTtcbiAgICAgIGlmIChlbnRpdHkudGVhbSAhPT0gdGhpcy50ZWFtKSBwb29sLnB1c2goZW50aXR5KTtcblxuICAgIH1cblxuICAgIHJldHVybiBVdGlscy5uZWFyZXN0KHRoaXMsIHBvb2wpO1xuXG4gIH0sXG5cbiAgb25lbnRpdHljaGFuZ2U6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5hY3Rpb25Db21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5ob3ZlclRpbWUgPSAwO1xuXG4gICAgaWYgKHRoaXMuZW50aXR5KSB7XG5cbiAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5lbnRpdHkuaG92ZXJhYmxlO1xuICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5lbnRpdHkuaW5zdGFudCkgdGhpcy5hY3Rpb25UaW1lb3V0ID0gMDtcblxuXG4gICAgfSBlbHNlIHRoaXMuYWN0aW9uID0gZmFsc2U7XG5cbiAgICAvKlxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uU291bmQpIHRoaXMuYWN0aW9uU291bmQgPSBhcHAuc291bmQucGxheShcImFjdGlvblwiKS5sb29wKCkucmF0ZSgwLjUpO1xuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblNvdW5kLnN0b3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblNvdW5kLmZhZGVJbigpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgdGhpcy51cGRhdGVUb29sdGlwKCk7XG5cblxuICB9LFxuXG4gIHJlc2V0QWN0aW9uOiBmdW5jdGlvbigpIHtcblxuXG4gICAgdGhpcy5hY3Rpb25UaW1lb3V0ID0gdGhpcy50aW1lc1t0aGlzLmFjdGlvbl07XG5cbiAgICB0aGlzLmFjdGlvbkR1cmF0aW9uID0gdGhpcy5hY3Rpb25UaW1lb3V0O1xuXG4gIH0sXG5cbiAgdXBncmFkZTogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICB0aGlzLmdhbWUudXBncmFkZXNba2V5XSArKztcblxuICAgIHRoaXMuZ2FtZS5idXR0b25zW2tleV0uY291bnQgPSB0aGlzLmdldFByaWNlKGtleSk7XG5cbiAgICB2YXIgc2hpcHMgPSBVdGlscy5maWx0ZXIodGhpcy5nYW1lLmVudGl0aWVzLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgIHJldHVybiAoZSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSAmJiBlLnRlYW07XG5cbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIHNoaXAgPSBzaGlwc1tpXTtcblxuICAgICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuQ2lyY2xlRXhwbG9zaW9uLCB7XG4gICAgICAgIGNvbG9yOiBcIiMwYWZcIixcbiAgICAgICAgcmFkaXVzOiAzMixcbiAgICAgICAgYXR0YWNoZWRUbzogc2hpcFxuICAgICAgfSk7XG5cbiAgICAgIHNoaXAuYXBwbHlVcGdyYWRlcyh0aGlzLmdhbWUudXBncmFkZXMpXG5cbiAgICB9XG5cbiAgfSxcblxuICBnZXRQcmljZTogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gTWF0aC5wb3coMiwgdGhpcy5nYW1lLnVwZ3JhZGVzW2tleV0pO1xuXG4gIH0sXG5cbiAgY2FuUHJvZ3Jlc3M6IGZ1bmN0aW9uKCkge1xuXG4gICAgc3dpdGNoICh0aGlzLmFjdGlvbikge1xuXG4gICAgICBjYXNlIFwicmVwYWlyXCI6XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbmV0LmhwIDwgdGhpcy5wbGFuZXQubWF4SFA7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJidWlsZFwiOlxuXG4gICAgICAgIGlmICh0aGlzLmVudGl0eS5rZXkgPT09IFwiZmlnaHRlclwiKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5nYW1lLnBsYXllclBsYW5ldC5tYXggLSB0aGlzLmdhbWUucGxheWVyUGxhbmV0LnNoaXBzIDw9IDApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLnJlc291cmNlcyA+IDA7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMgPj0gdGhpcy5nZXRQcmljZSh0aGlzLmVudGl0eS5rZXkpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgfSxcblxuICBwcm9ncmVzc0FjdGlvbjogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICh0aGlzLmNhblByb2dyZXNzKCkgJiYgKHRoaXMuYWN0aW9uVGltZW91dCAtPSBkdCkgPCAwKSB7XG5cbiAgICAgIHRoaXMuZmluYWxpemVBY3Rpb24oKTtcbiAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcblxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0gMSAtIHRoaXMuYWN0aW9uVGltZW91dCAvIHRoaXMuYWN0aW9uRHVyYXRpb247XG5cblxuICB9LFxuXG4gIGZpbmFsaXplQWN0aW9uOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuYWN0aW9uQ29tcGxldGUgPSB0cnVlO1xuXG4gICAgc3dpdGNoICh0aGlzLmFjdGlvbikge1xuXG4gICAgICBjYXNlIFwicmVwYWlyXCI6XG5cbiAgICAgICAgdGhpcy5wbGFuZXQucmVwYWlyKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJtaW5pbmdcIjpcblxuICAgICAgICB0aGlzLmVudGl0eS5kaWcoKTtcblxuICAgICAgICBicmVhaztcblxuXG4gICAgICBjYXNlIFwiYnVpbGRcIjpcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuZW50aXR5LmtleSkge1xuXG4gICAgICAgICAgY2FzZSBcImZpZ2h0ZXJcIjpcblxuICAgICAgICAgICAgdGhpcy5wbGFuZXQuc3Bhd25TaGlwKFwiZmlnaHRlclwiKTtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzIC09IDE7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiYnVpbGRcIik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImxpZmVcIjpcbiAgICAgICAgICBjYXNlIFwiZGFtYWdlXCI6XG4gICAgICAgICAgY2FzZSBcInNwZWVkXCI6XG5cbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VzIC09IHRoaXMuZ2V0UHJpY2UodGhpcy5lbnRpdHkua2V5KTtcblxuICAgICAgICAgICAgdGhpcy51cGdyYWRlKHRoaXMuZW50aXR5LmtleSk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJ1cGdyYWRlXCIpO1xuXG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgfSxcblxuICBoaXQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICB0aGlzLnBsYW5ldC5hcHBseURhbWFnZSgxLCB0aGlzLnBsYW5ldCk7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIGNvbG9yOiBcIiNjMDJcIixcbiAgICAgIHJhZGl1czogMzJcbiAgICB9KVxuXG4gIH0sXG5cbiAgZ2V0SG92ZXJlZEVudGl0eTogZnVuY3Rpb24oKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgZW50aXR5ID0gdGhpcy5nYW1lLmVudGl0aWVzW2ldO1xuXG4gICAgICBpZiAoZW50aXR5LmhvdmVyYWJsZSAmJiBVdGlscy5kaXN0YW5jZShlbnRpdHksIHRoaXMpIDwgZW50aXR5LnJhZGl1cykgcmV0dXJuIGVudGl0eTtcblxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudHJhaWwucmVuZGVyKCk7XG5cbiAgICBhcHAubGF5ZXIuZmlsbFN0eWxlKHRoaXMuY29sb3IpLmZpbGxDaXJjbGUodGhpcy54LCB0aGlzLnksIHRoaXMuZG90UmFkaXVzKTtcblxuICAgIGlmICh0aGlzLmFjdGlvbiAmJiAhdGhpcy5lbnRpdHkuc2lsZW50KSB7XG5cbiAgICAgIHZhciBtb2QgPSBNYXRoLm1pbigxLCBhcHAuZWFzZSgyICogdGhpcy5ob3ZlclRpbWUsIFwib3V0Qm91bmNlXCIpKTtcblxuICAgICAgYXBwLmN0eC5zYXZlKCk7XG4gICAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLmVudGl0eS54LCB0aGlzLmVudGl0eS55KTtcblxuICAgICAgYXBwLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5hcmMoMCwgMCwgKHRoaXMuZW50aXR5LnJhZGl1cyArIDIpICogbW9kLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBhcHAuY3R4LnN0cm9rZSgpO1xuXG4gICAgICBhcHAuY3R4LmxpbmVXaWR0aCA9IDg7XG4gICAgICBhcHAuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmN0eC5nbG9iYWxBbHBoYSA9IDAuMjU7XG4gICAgICBhcHAuY3R4LmFyYygwLCAwLCB0aGlzLmVudGl0eS5yYWRpdXMgKyA4LCAwLCBNYXRoLlBJICogMilcbiAgICAgIGFwcC5jdHguc3Ryb2tlKClcbiAgICAgIGFwcC5jdHguZ2xvYmFsQWxwaGEgPSAxLjA7XG5cbiAgICAgIGFwcC5jdHgubGluZVdpZHRoID0gODtcbiAgICAgIGFwcC5jdHguYmVnaW5QYXRoKCk7XG4gICAgICBhcHAuY3R4LmFyYygwLCAwLCB0aGlzLmVudGl0eS5yYWRpdXMgKyA4LCAwLCB0aGlzLnByb2dyZXNzICogTWF0aC5QSSAqIDIpXG4gICAgICBhcHAuY3R4LnN0cm9rZSgpO1xuXG4gICAgICBhcHAuY3R4LnJlc3RvcmUoKTtcblxuICAgIH1cblxuXG5cbiAgfSxcblxuICBjYW5GaXJlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICghdGhpcy5nYW1lLmNoZWNrQm9udXMoXCJsYXNlclwiKSkgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuZmlyZUNvb2xkb3duID4gMCkgcmV0dXJuO1xuICAgIGlmICghdGhpcy50YXJnZXQpIHJldHVybjtcbiAgICBpZiAoVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy50YXJnZXQpID4gdGhpcy5yYW5nZSkgcmV0dXJuO1xuXG4gICAgdGhpcy5maXJlQ29vbGRvd24gPSB0aGlzLmZpcmVJbnRlcnZhbDtcblxuICAgIHRoaXMuZmlyZSgpO1xuXG4gIH0sXG5cbiAgZmlyZTogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5CdWxsZXQsIHtcbiAgICAgIHg6IHRoaXMueCxcbiAgICAgIHk6IHRoaXMueSxcbiAgICAgIHRlYW06IHRoaXMudGVhbSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICBkYW1hZ2U6IDIsXG4gICAgICBzcGVlZDogMTAwMFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLmdhbWUuYmVuY2htYXJrKSBhcHAuc291bmQucGxheShcImxhc2VyXCIpO1xuXG4gIH0sXG5cbiAgbW92ZVRvOiBmdW5jdGlvbihkZXN0aW5hdGlvbikge1xuXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuXG4gIH0sXG5cbiAgdXBkYXRlVG9vbHRpcDogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAodGhpcy5lbnRpdHkpIHtcbiAgICAgIGlmICh0aGlzLmVudGl0eS50b29sdGlwKSB0aGlzLmdhbWUudG9vbHRpcCA9IHRoaXMuZW50aXR5LnRvb2x0aXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZS50b29sdGlwID0gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxufSIsIkVOR0lORS5SZXNvdXJjZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLnNwZWVkID0gMzI7XG5cbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLmZvcmNlID0gNjQgKyBNYXRoLnJhbmRvbSgpICogMTI4O1xuXG4gIHRoaXMuZm9yY2UgKj0gMztcbiAgdGhpcy5mb3JjZURhbXBpbmcgPSB0aGlzLmZvcmNlO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMTA7XG5cbiAgdGhpcy52YWx1ZSA9IE1hdGgucmFuZG9tKCkgKiAzIHwgMDtcblxuICB0aGlzLnNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLnZhbHVlXTtcbn07XG5cbkVOR0lORS5SZXNvdXJjZS5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5SZXNvdXJjZSxcblxuICBxdW90YTogMC43LFxuXG4gIHNwcml0ZXM6IFtcbiAgICBbMzMzLCAxMDUsIDEwLCAxMF0sXG4gICAgWzMyMCwgMTA0LCAxMiwgMTJdLFxuICAgIFszMDMsIDEwMiwgMTYsIDE2XVxuICBdLFxuXG4gIHR5cGU6IFwicmVzb3VyY2VcIixcblxuXG4gIGNvbGxlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLnJlbW92ZSh0aGlzKTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJjb2luXCIpO1xuXG4gICAgdGhpcy5nYW1lLnBsYXllci5wb2tlKCk7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIGNvbG9yOiBcIiNmYzBcIixcbiAgICAgIHJhZGl1czogOCxcbiAgICAgIGF0dGFjaGVkVG86IHRoaXMsXG4gICAgICBkdXJhdGlvbjogMC4yNVxuICAgIH0pO1xuXG4gICAgdGhpcy5nYW1lLnBsYXllci5yZXNvdXJjZXMgKz0gdGhpcy52YWx1ZTtcblxuICB9LFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lICs9IGR0O1xuXG4gICAgdmFyIHBsYXllckRpc3RhbmNlID0gVXRpbHMuZGlzdGFuY2UodGhpcywgdGhpcy5nYW1lLnBsYXllcik7XG5cbiAgICBpZiAodGhpcy5mb3JjZSkge1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG4gICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5mb3JjZURpcmVjdGlvbikgKiB0aGlzLmZvcmNlICogZHQ7XG5cbiAgICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCgwLCB0aGlzLmZvcmNlIC0gdGhpcy5mb3JjZURhbXBpbmcgKiBkdCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb2tlZCAmJiB0aGlzLmdhbWUuY2hlY2tCb251cyhcIm1hZ25ldFwiKSkge1xuXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGguYXRhbjIodGhpcy5nYW1lLnBsYXllci55IC0gdGhpcy55LCB0aGlzLmdhbWUucGxheWVyLnggLSB0aGlzLngpO1xuXG4gICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuXG4gICAgICBpZiAoIXRoaXMuZm9yY2UpIHtcbiAgICAgICAgdGhpcy5zcGVlZCArPSAyNTYgKiBkdDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDEwMCkge1xuICAgICAgICB0aGlzLnBva2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEyODtcbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgaWYgKHRoaXMubGlmZXRpbWUgPiAwLjUpIHtcbiAgICAgIGlmIChwbGF5ZXJEaXN0YW5jZSA8IDMyKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpZmV0aW1lID4gdGhpcy5kdXJhdGlvbikgdGhpcy5nYW1lLnJlbW92ZSh0aGlzKTtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAuY3R4LnNhdmUoKTtcblxuICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcblxuICAgIGFwcC5jdHgucm90YXRlKHRoaXMubGlmZXRpbWUpO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICApO1xuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5CdXR0b24gPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIHJhZGl1czogMzJcblxuICB9LCBhcmdzKTtcblxuXG4gIHRoaXMuaW1hZ2UgPSBhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0O1xuXG59O1xuXG5FTkdJTkUuQnV0dG9uLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLkJ1dHRvbixcblxuICB0eXBlOiBcImJ1dHRvblwiLFxuXG4gIHBvaW50ZXJlbnRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpLnRvKHtcbiAgICAgIHJhZGl1czogMjRcbiAgICB9LCAwLjEpLnRvKHtcbiAgICAgIHJhZGl1czogMzJcbiAgICB9LCAwLjIsIFwib3V0U2luZVwiKTtcblxuICB9LFxuXG4gIGFjdGlvbjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGFwcC5zb3VuZC5wbGF5KFwibGFzZXJcIik7XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbigpIHtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cblxuICAgIGlmICh0aGlzLnNwcml0ZSkge1xuICAgICAgdmFyIHNjYWxlID0gdGhpcy5yYWRpdXMgLyAzMjtcblxuICAgICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICAgIGFwcC5jdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy55KTtcbiAgICAgIGFwcC5jdHguZHJhd0ltYWdlKHRoaXMuaW1hZ2UsXG4gICAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICAgICk7XG5cbiAgICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY291bnQpIHtcbiAgICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZm9udChcImJvbGQgMzJweCBBcmlhbFwiKS5maWxsU3R5bGUodGhpcy5jb2xvcikuZmlsbFRleHQodGhpcy5jb3VudCwgdGhpcy54LCB0aGlzLnkgLSB0aGlzLnJhZGl1cyAtIDQ4KTtcbiAgICB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5QYXJ0aWNsZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywge1xuICAgIHJhZGl1czogNFxuICB9LCBhcmdzKVxuXG4gIHRoaXMuc3ByaXRlSW5kZXggPSAwO1xuXG4gIHRoaXMucmVzZXQoKTtcblxufTtcblxuRU5HSU5FLlBhcnRpY2xlLnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlBhcnRpY2xlLFxuXG4gIHF1b3RhOiAwLjUsXG5cbiAgc3ByaXRlczogW1xuICAgIFsyNjAsIDE1MiwgNiwgNl0sXG4gICAgWzI2MCwgMTU5LCA1LCA1XSxcbiAgICBbMjYwLCAxNjUsIDUsIDVdLFxuICAgIFsyNjEsIDE3MSwgMywgM11cbiAgXSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmxpZmV0aW1lID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMC41O1xuXG4gICAgdGhpcy5kaXJlY3Rpb24gPSB0aGlzLmdhbWUucmFuZG9tKCkgKiA2LjI4O1xuICAgIHRoaXMuc3BlZWQgPSAzMiArIHRoaXMuZ2FtZS5yYW5kb20oKSAqIDEyODtcblxuICAgIHRoaXMuc3BlZWQgKj0gMztcblxuICAgIHRoaXMuZGFtcGluZyA9IHRoaXMuc3BlZWQgKiAyO1xuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG5cbiAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG5cbiAgICB0aGlzLnNwZWVkID0gTWF0aC5tYXgoMCwgdGhpcy5zcGVlZCAtIHRoaXMuZGFtcGluZyAqIGR0KTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxpZmV0aW1lIC8gdGhpcy5kdXJhdGlvbiwgMS4wKTtcblxuICAgIGlmICh0aGlzLnByb2dyZXNzID49IDEuMCkge1xuICAgICAgdGhpcy54ID0gMDtcbiAgICAgIHRoaXMueSA9IDA7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB9XG5cbiAgICB0aGlzLnNwcml0ZUluZGV4ID0gdGhpcy5wcm9ncmVzcyAqIHRoaXMuc3ByaXRlcy5sZW5ndGggfCAwO1xuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuXG4gICAgLy8gdmFyIHMgPSB0aGlzLnNpemUgKiAoMSAtIHRoaXMucHJvZ3Jlc3MpO1xuXG4gICAgLy8gaWYgKHMgPiAwKSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3MgPj0gMS4wKSByZXR1cm47XG5cbiAgICB0aGlzLmltYWdlID0gYXBwLmdldENvbG9yZWRJbWFnZShhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLmNvbG9yKTtcblxuICAgIC8vIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAvLyBhcHAuY3R4LmZpbGxSZWN0KHRoaXMueCAtIHMgLyAyLCB0aGlzLnkgLSBzIC8gMiwgcywgcylcblxuICAgIHZhciBzcHJpdGUgPSB0aGlzLnNwcml0ZXNbdGhpcy5zcHJpdGVJbmRleF07XG5cbiAgICBhcHAuY3R4LmRyYXdJbWFnZSh0aGlzLmltYWdlLCBzcHJpdGVbMF0sIHNwcml0ZVsxXSwgc3ByaXRlWzJdLCBzcHJpdGVbM10sXG4gICAgICB0aGlzLngsIHRoaXMueSwgc3ByaXRlWzJdLCBzcHJpdGVbM10pXG5cbiAgICAvLyB9XG5cbiAgfVxuXG59OyIsIkVOR0lORS5QbGFuZXQgPSBmdW5jdGlvbihhcmdzKSB7XG5cbiAgVXRpbHMuZXh0ZW5kKHRoaXMsIHtcblxuICAgIHJhZGl1czogNDgsXG4gICAgaHA6IDIwLFxuICAgIG1heDogMTAwLFxuICAgIHNoaXBzOiAwLFxuICAgIHJlcGFpclByb2dyZXNzOiAwLFxuICAgIHJlcGFpclRpbWU6IDQsXG4gICAgYXN0ZXJvaWRzU2hpZWxkOiB0cnVlLFxuICAgIHNoaWVsZFNjYWxlOiAwLjBcblxuICB9LCBhcmdzKTtcblxuICB0aGlzLm1heEhQID0gdGhpcy5ocDtcblxuICB0aGlzLmxpZmV0aW1lID0gMDtcblxufTtcblxuRU5HSU5FLlBsYW5ldC5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IEVOR0lORS5QbGFuZXQsXG5cbiAgdHlwZTogXCJwbGFuZXRcIixcblxuICBob3ZlcmFibGU6IFwicmVwYWlyXCIsXG5cbiAgc3ByaXRlOiBbMjAxLCAyMTUsIDEwNCwgMTA0XSxcblxuICBzaGllbGRTcHJpdGU6IFs0OTIsIDMyMCwgMTI0LCAxMjRdLFxuXG4gIHJlcGFpcjogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLmhwKys7XG5cbiAgfSxcblxuICBhcHBseURhbWFnZTogZnVuY3Rpb24oZGFtYWdlLCBhdHRhY2tlcikge1xuXG4gICAgdGhpcy5nYW1lLnNoYWtlKCk7XG5cbiAgICB0aGlzLmhwLS07XG5cbiAgICBpZiAodGhpcy5ocCA8PSAwICYmICF0aGlzLmdhbWUuYmVuY2htYXJrKSB0aGlzLmdhbWUuZ2FtZW92ZXIoKTtcblxuICAgIGlmICghdGhpcy5nYW1lLmJlbmNobWFyaykgYXBwLnNvdW5kLnBsYXkoXCJwbGFuZXRIaXRcIik7XG5cbiAgICB0aGlzLmdhbWUuYWRkKEVOR0lORS5DaXJjbGVFeHBsb3Npb24sIHtcbiAgICAgIHg6IGF0dGFja2VyLngsXG4gICAgICB5OiBhdHRhY2tlci55LFxuICAgICAgY29sb3I6IFwiI2EwNFwiLFxuICAgICAgcmFkaXVzOiAzMlxuICAgIH0pXG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkdDtcblxuICAgIHZhciBwcmV2U2hpZWxkID0gdGhpcy5hc3Rlcm9pZHNTaGllbGQ7XG4gICAgdGhpcy5hc3Rlcm9pZHNTaGllbGQgPSBmYWxzZTt0aGlzLmdhbWUuY2hlY2tCb251cyhcInNoaWVsZFwiKTtcblxuICAgIGlmIChwcmV2U2hpZWxkICE9PSB0aGlzLmFzdGVyb2lkc1NoaWVsZCkge1xuXG4gICAgICBhcHAudHdlZW4odGhpcykuZGlzY2FyZCgpLnRvKHtcbiAgICAgICAgc2hpZWxkU2NhbGU6IHRoaXMuYXN0ZXJvaWRzU2hpZWxkID8gMS4wIDogMC4wXG4gICAgICB9LCAwLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHNwYXduU2hpcDogZnVuY3Rpb24odHlwZSkge1xuXG4gICAgdmFyIHNoaXAgPSB0aGlzLmdhbWUuYWRkKEVOR0lORS5TaGlwLCB7XG4gICAgICB4OiB0aGlzLngsXG4gICAgICB5OiB0aGlzLnksXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAgdGVhbTogMSxcbiAgICAgIHBsYW5ldDogdGhpc1xuICAgIH0pO1xuXG4gICAgc2hpcC5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2O1xuICAgIHNoaXAuZm9yY2UgPSAyMDA7XG5cbiAgICB0aGlzLnNoaXBzKys7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLmxheWVyLmFsaWduKDAuNSwgMC41KTtcbiAgICBhcHAubGF5ZXIuZHJhd1JlZ2lvbihhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLnNwcml0ZSwgdGhpcy54LCB0aGlzLnkpO1xuICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZm9udChcImJvbGQgNDhweCBBcmlhbFwiKS5maWxsU3R5bGUoXCIjZmZmXCIpLmZpbGxUZXh0KHRoaXMuaHAsIHRoaXMueCwgdGhpcy55IC0gMjQpO1xuICAgIGFwcC5sYXllci5yZWFsaWduKCk7XG5cbiAgICBpZiAodGhpcy5hc3Rlcm9pZHNTaGllbGQgJiYgdGhpcy5zaGllbGRTY2FsZSA+IDApIHtcbiAgICAgIHZhciBzY2FsZSA9IHRoaXMuc2hpZWxkU2NhbGU7XG4gICAgICBhcHAuY3R4LnNhdmUoKTtcbiAgICAgIGFwcC5jdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gICAgICBhcHAuY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuICAgICAgYXBwLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuICAgICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5zaGllbGRTcHJpdGVbMF0sIHRoaXMuc2hpZWxkU3ByaXRlWzFdLCB0aGlzLnNoaWVsZFNwcml0ZVsyXSwgdGhpcy5zaGllbGRTcHJpdGVbM10sIC10aGlzLnNoaWVsZFNwcml0ZVsyXSAvIDIsIC10aGlzLnNoaWVsZFNwcml0ZVszXSAvIDIsIHRoaXMuc2hpZWxkU3ByaXRlWzJdLCB0aGlzLnNoaWVsZFNwcml0ZVszXSk7XG4gICAgICBhcHAuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgfVxuXG59OyIsIi8qIFRoZSBjb3VudGVyIGluIHRoZSB0b3AtbGVmdCBjb3JuZXIgaXM6XG5cbkFWRVJBR0UgRlJBTUUgVElNRSB8ICBERVZJQ0UgIFBPV0VSICAgfCBFTlRJVElFUyBDT1VOVFxuICAgICAgICAgICAgICAgICAgICAgKGJhc2VsaW5lRmFjdG9yKVxuKi9cblxuXG4vKiBSZWZlcmVuY2UgYmFzZWxpbmUgdG8gY2FsY3VsYXRlIGRldmljZSBwb3dlciAqL1xuXG5SRUZFUkVOQ0VfQkFTRUxJTkUgPSAzNzg7XG5cbi8qIFJlZmVyZW5jZSBmcmFtZSB0aW1lIHRvIHRlbGwgaG93IHdlbGwgdGhlIGdhbWUgaGFzIGJlZW4gb3B0aW1pemVkICovXG4vKiBNYWtlIGl0IGhpZ2hlciB0byBnaXZlIHVzZXIgbW9yZSBDUFUgcG93ZXIgKi9cblxuUkVGRVJFTkNFX0ZSQU1FX1RJTUUgPSAwLjg7XG5cbi8qIEhvdyBtdWNoIG9wdGltaXphdGlvbiB2YWx1ZSBvbmUgc2hpcCBkcmFpbnMgKi9cblxuU0hJUF9DUFVfQ09TVCA9IDAuMTtcblxuRU5HSU5FLkdhbWUgPSB7XG5cbiAgYm9udXNlczoge1xuXG4gICAgbWFnbmV0OiAwLjEsXG4gICAgbGFzZXI6IDAuMixcbiAgICBzaGllbGQ6IDAuNFxuXG4gIH0sXG5cbiAgY2hlY2tCb251czogZnVuY3Rpb24oa2V5KSB7XG5cbiAgICByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiB0aGlzLmNwdVJhdGlvID49IHRoaXMuYm9udXNlc1trZXldO1xuXG4gIH0sXG5cbiAgZXhwbG9zaW9uOiBmdW5jdGlvbih4LCB5LCBjb3VudCwgY29sb3IpIHtcblxuICAgIGlmICghdGhpcy5wYXJ0aWNsZXNQb29sKSB7XG5cbiAgICAgIHRoaXMucGFydGljbGVzUG9vbCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlID0gdGhpcy5hZGQoRU5HSU5FLlBhcnRpY2xlLCB7XG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFydGljbGVzUG9vbC5wdXNoKHBhcnRpY2xlKTtcblxuICAgICAgfVxuXG4gICAgICB0aGlzLnBhcnRpY2xlSW5kZXggPSAwO1xuXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY291bnQ7IGkrKykge1xuXG4gICAgICBpZiAoKyt0aGlzLnBhcnRpY2xlSW5kZXggPj0gdGhpcy5wYXJ0aWNsZXNQb29sLmxlbmd0aCkgdGhpcy5wYXJ0aWNsZUluZGV4ID0gMDs7XG5cbiAgICAgIHZhciBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzUG9vbFt0aGlzLnBhcnRpY2xlSW5kZXhdO1xuXG4gICAgICBwYXJ0aWNsZS54ID0geDtcbiAgICAgIHBhcnRpY2xlLnkgPSB5O1xuICAgICAgcGFydGljbGUuY29sb3IgPSBjb2xvcjtcblxuICAgICAgcGFydGljbGUucmVzZXQoKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHJhbmRvbTogZnVuY3Rpb24oKSB7XG5cbiAgICByZXR1cm4gdGhpcy5iZW5jaG1hcmsgPyAwLjUgOiBNYXRoLnJhbmRvbSgpO1xuXG4gIH0sXG5cbiAgYWRkOiBmdW5jdGlvbihjb25zdHJ1Y3RvciwgYXJncykge1xuXG4gICAgYXJncyA9IGFyZ3MgfHwge307XG5cbiAgICBhcmdzLmdhbWUgPSB0aGlzO1xuXG4gICAgdmFyIGVudGl0eSA9IG5ldyBjb25zdHJ1Y3RvcihhcmdzKTtcblxuICAgIHRoaXMuZW50aXRpZXMucHVzaChlbnRpdHkpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcblxuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oZW50aXR5KSB7XG5cbiAgICBlbnRpdHkuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICBzY2FsZUNvbWljQnViYmxlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuY29taWNTY2FsZSA9IDEuMDtcblxuICAgICRjb21pY2J1YmJsZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjb21pY2J1YmJsZVwiKTtcblxuICAgIHZhciB0d2VlbiA9IGFwcC50d2Vlbih0aGlzKS50byh7XG4gICAgICBjb21pY1NjYWxlOiAwLjVcbiAgICB9KTtcblxuICAgIHR3ZWVuLm9uc3RlcCA9IGZ1bmN0aW9uKGFwcCkge1xuXG4gICAgICAkY29taWNidWJibGUuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZShcIiArIGFwcC5jb21pY1NjYWxlICsgXCIsXCIgKyBhcHAuY29taWNTY2FsZSArIFwiKVwiO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgZW50ZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgYXBwLnJlbmRlcmVyLnNldFNtb290aGluZyhmYWxzZSk7XG5cbiAgICB0aGlzLnNjYWxlQ29taWNCdWJibGUoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFzZWxpbmVcIiwgYXBwLmJhc2VsaW5lKTtcblxuICAgIHRoaXMubXVzaWMgPSBhcHAubXVzaWMucGxheShcImR1c3RcIikudm9sdW1lKDAuNSkuZmFkZUluKDQpLmxvb3AoKTtcblxuICAgIHRoaXMuZ3JhZGllbnQgPSBhcHAuY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGFwcC5jZW50ZXIueCwgYXBwLmNlbnRlci55LCAwLCBhcHAuY2VudGVyLngsIGFwcC5jZW50ZXIueSwgYXBwLmNlbnRlci54KTtcblxuICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMCwgXCJ0cmFuc3BhcmVudFwiKTtcbiAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgxLjAsIFwiIzAwMFwiKTtcblxuICAgIHRoaXMucmVzZXQoKTtcblxuICB9LFxuXG4gIGxlYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMubXVzaWMuZmFkZU91dCgyKTtcblxuICB9LFxuXG4gIGdldFNjYWxlOiBmdW5jdGlvbihlbnRpdHkpIHtcblxuICAgIHJldHVybiAxIC0gTWF0aC5taW4oMS4wLCBVdGlscy5kaXN0YW5jZShlbnRpdHksIGFwcC5jZW50ZXIpIC8gKGFwcC53aWR0aCAqIDAuNSkpICogMC43NTtcblxuICB9LFxuXG4gIHNwYXduQXN0ZXJvaWQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xuICAgIHZhciByYWRpdXMgPSBhcHAud2lkdGggLyAyO1xuICAgIHZhciBveCA9IE1hdGguY29zKGFuZ2xlKSAqIHJhZGl1cztcbiAgICB2YXIgb3kgPSBNYXRoLnNpbihhbmdsZSkgKiByYWRpdXM7XG5cbiAgICB0aGlzLmFkZChFTkdJTkUuQXN0ZXJvaWQsIHtcbiAgICAgIHg6IGFwcC5jZW50ZXIueCArIG94LFxuICAgICAgeTogYXBwLmNlbnRlci55ICsgb3lcbiAgICB9KTtcblxuICB9LFxuXG4gIHJlc2V0VmlydHVhbFBvb2w6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy52aXJ0dWFsUG9vbCA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuXG4gICAgICB0aGlzLnZpcnR1YWxQb29sLnB1c2gobmV3IEVOR0lORS5TaGlwKHtcbiAgICAgICAgeDogTWF0aC5yYW5kb20oKSAqIGFwcC53aWR0aCxcbiAgICAgICAgeTogTWF0aC5yYW5kb20oKSAqIGFwcC5oZWlnaHQsXG4gICAgICAgIGdhbWU6IHRoaXMsXG4gICAgICAgIHRlYW06IGkgJSAyXG4gICAgICB9KSk7XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24oKSB7XG5cbiAgICB0aGlzLnNwYXduVGltZW91dCA9IDA7XG4gICAgdGhpcy5jcHVVc2FnZSA9IDA7XG4gICAgdGhpcy5jcHVCYXJQcm9ncmVzcyA9IDA7XG5cbiAgICB0aGlzLnVwZ3JhZGVzID0ge1xuXG4gICAgICBzcGVlZDogMSxcbiAgICAgIGRhbWFnZTogMSxcbiAgICAgIGxpZmU6IDFcblxuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0VmlydHVhbFBvb2woKTtcblxuICAgIGRlbGV0ZSB0aGlzLnBhcnRpY2xlc1Bvb2w7XG5cbiAgICB0aGlzLnNjb3JlID0gMDtcblxuICAgIHRoaXMud2F2ZSA9IDA7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcblxuICAgIHRoaXMuZW50aXRpZXMgPSBbXTtcblxuICAgIHRoaXMucGxheWVyUGxhbmV0ID0gdGhpcy5hZGQoRU5HSU5FLlBsYW5ldCwge1xuICAgICAgeDogYXBwLmNlbnRlci54LFxuICAgICAgeTogYXBwLmNlbnRlci55LFxuICAgICAgdGVhbTogMVxuICAgIH0pO1xuXG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgRU5HSU5FLkN1cnNvcih0aGlzLCAxLCB0aGlzLnBsYXllclBsYW5ldCk7XG4gICAgdGhpcy5wbGF5ZXIueCA9IGFwcC5jZW50ZXIueDtcbiAgICB0aGlzLnBsYXllci55ID0gYXBwLmNlbnRlci55O1xuXG4gICAgdGhpcy5zdGFycyA9IG5ldyBFTkdJTkUuQmFja2dyb3VuZFN0YXJzKHRoaXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblxuICAgICAgdGhpcy5zcGF3bkFzdGVyb2lkKCk7XG5cbiAgICB9XG5cbiAgICB2YXIgYnV0dG9ucyA9IFtcInNwZWVkXCIsIFwibGlmZVwiLCBcImRhbWFnZVwiXTtcblxuICAgIHRoaXMuYnV0dG9ucyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBrZXkgPSBidXR0b25zW2ldO1xuXG4gICAgICB0aGlzLmJ1dHRvbnNba2V5XSA9IHRoaXMuYWRkKEVOR0lORS5CdXR0b24sIHtcbiAgICAgICAgY29sb3I6IGRlZnMudGVhbUNvbG9yWzFdLFxuICAgICAgICB4OiBhcHAuY2VudGVyLnggLSA4MCArIGkgKiAxMDAsXG4gICAgICAgIHk6IGFwcC5oZWlnaHQgLSAxMDAsXG4gICAgICAgIHNwcml0ZTogZGVmcy5idXR0b25zW2tleV0sXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBjb3VudDogMSxcbiAgICAgICAgaG92ZXJhYmxlOiBcImJ1aWxkXCIsXG4gICAgICAgIHRvb2x0aXA6IGRlZnMudG9vbHRpcHNba2V5XVxuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLm5leHRXYXZlKCk7XG5cblxuICB9LFxuXG4gIGNwdUhpc3Rvcnk6IFtdLFxuXG4gIHN0ZXA6IGZ1bmN0aW9uKGR0KSB7XG5cbiAgICB2YXIgYmVmb3JlID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAvKiBzbG93IG1vdGlvbiAtIHdoZW4geW91IGNvbGxlY3QgZnJlZXplIHBvd2VydXAgKi9cblxuICAgIHRoaXMudGltZUZhY3RvciA9IDEuMDtcblxuICAgIGlmICh0aGlzLmZyZWV6ZUxpZmVzcGFuID4gMCkge1xuXG4gICAgICB0aGlzLmZyZWV6ZUxpZmVzcGFuIC09IGR0O1xuICAgICAgdGhpcy50aW1lRmFjdG9yID0gMC4xO1xuXG4gICAgfVxuXG4gICAgLyogdXBkYXRlIHRoZSBnYW1lIDEwIHRpbWVzIHRvIG1hZ25pdHVkZSByZXN1bHRzIGluIHByb2ZpbGVyICovXG5cbiAgICB2YXIgTUFHTklGWSA9IDEwO1xuXG4gICAgdmFyIHF1b3RhID0gMC4wO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG4gICAgICBxdW90YSArPSBlbnRpdHkucXVvdGEgfHwgMC43O1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IE1BR05JRlk7IGorKykge1xuICAgICAgICBlbnRpdHkuc3RlcChkdCAvIE1BR05JRlkpO1xuXG4gICAgICAgIGlmIChlbnRpdHkuZGVhZCkge1xuICAgICAgICAgIHRoaXMuZW50aXRpZXMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnF1b3RhID0gcXVvdGE7XG5cbiAgICB2YXIgZnJhbWVUaW1lID0gKHBlcmZvcm1hbmNlLm5vdygpIC0gYmVmb3JlKSAvIE1BR05JRlk7XG5cbiAgICAvKiBtZWFzdXJlIG9wdGltaXphdGlvbiAqL1xuXG4gICAgLyogSXQncyB0aGUgYXZlcmFnZSBvZiAxMDAgZnJhbWUgdGltZXMgKi9cblxuICAgIC8qXG5cbiAgICAgIGJhc2VsaW5lRmFjdG9yICAgICAgLSBiYXNlbGluZSB2cyByZWZlcmVuY2Ugc2FtcGxlIHRvIGdldCBkZXZpY2UgcG93ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiB0aGUgZGV2aWNlIGlzIG92ZXItcG93ZXJlZCB3ZSBhcnRpZmljaWFseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ha2UgZnJhbWVUaW1lIGhpZ2hlciB0byBtYWtlIGl0IG1vcmUgZmFpciBhbW9uZyB0aGUgcGxheWVyc1xuXG4gICAgICBvcHRpbWl6YXRpb25SYXRpbmcgIC0gcmVmZXJlbmNlIGZyYW1lIHRpbWUgZGl2aWRlZCBieSAoY3VycmVudCkgYXZlcmFnZSBmcmFtZSB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGljYXBlZCBieSBiYXNlbGluZUZhY3RvciAtIHRoaXMgZ2l2ZXMgYSBmYWN0b3Igb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3cgd2VsbCB1c2VyIG9wdGltaXplZCB0aGUgZ2FtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFrZSBSRUZFUkVOQ0VfRlJBTUVfVElNRSBoaWdoZXIgdG8gZ2l2ZSBwbGF5ZXIgTU9SRSBjcHUgb3V0cHV0XG5cbiAgICAqL1xuXG5cbiAgICB0aGlzLmNwdUhpc3RvcnkucHVzaChmcmFtZVRpbWUgLyBxdW90YSk7XG5cbiAgICBpZiAodGhpcy5jcHVIaXN0b3J5Lmxlbmd0aCA+IDYwKSB0aGlzLmNwdUhpc3Rvcnkuc2hpZnQoKTtcblxuICAgIHRoaXMuYXZlcmFnZUZyYW1lVGltZSA9IHRoaXMuYXZlcmFnZSh0aGlzLmNwdUhpc3RvcnkpO1xuXG4gICAgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcgPSAoKDAuOCAvIGFwcC5iYXNlbGluZSkgLyAodGhpcy5hdmVyYWdlRnJhbWVUaW1lKSk7XG5cbiAgICB0aGlzLnBsYXllci5zdGVwKGR0KTtcblxuICAgIC8qIHVzZSBvcHRpbWl6YXRpb24gcmVzdWx0cyB0byBhZmZlY3QgdGhlIGdhbWUgKi9cblxuICAgIHRoaXMuYXBwbHlPcHRpbWl6YXRpb24oZHQpO1xuXG5cbiAgfSxcblxuICBhdmVyYWdlOiBmdW5jdGlvbihhcnJheSkge1xuXG4gICAgaWYgKCFhcnJheS5sZW5ndGgpIHJldHVybiAwO1xuXG4gICAgdmFyIHN1bSA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdW0gKz0gYXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1bSAvIGFycmF5Lmxlbmd0aDtcblxuICB9LFxuXG4gIGFwcGx5T3B0aW1pemF0aW9uOiBmdW5jdGlvbihkdCkge1xuXG4gICAgdmFyIGNwdVVzYWdlID0gMDtcblxuICAgIC8qIGNhbGN1bGF0ZSAoYXJ0aWZpY2lhbCkgY3B1VXNhZ2Ugb2Ygc2hpcHNcbiAgICAgICBpZiBjcHVVc2FnZSBpcyBncmVhdGVyIHRoYW4gb3B0aW1pemF0aW9uUmF0aW5nXG4gICAgICAgZnJlZXplIGEgc2hpcFxuICAgICovXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgdmFyIGVudGl0eSA9IHRoaXMuZW50aXRpZXNbaV07XG5cbiAgICAgIGlmICghKGVudGl0eSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwKSkgY29udGludWU7XG4gICAgICBpZiAoIWVudGl0eS50ZWFtKSBjb250aW51ZTtcbiAgICAgIGlmIChlbnRpdHkuZnJlZSkgY29udGludWU7XG5cbiAgICAgIGNwdVVzYWdlICs9IFNISVBfQ1BVX0NPU1Q7XG5cbiAgICAgIGlmIChjcHVVc2FnZSA8IHRoaXMub3B0aW1pemF0aW9uUmF0aW5nKSB7XG5cbiAgICAgICAgZW50aXR5LmZyb3plbiA9IGZhbHNlO1xuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGVudGl0eS5mcm96ZW4gPSB0cnVlO1xuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvKiB0d2VlbiBjcHVVc2FnZSBpbnN0ZWFkIG9mIHNldHRpbmcgaXQgaW5zdGFudGx5IChsZXNzIGppdHRlcmluZykgKi9cblxuICAgIHRoaXMuY3B1VXNhZ2UgPSBVdGlscy5tb3ZlVG8odGhpcy5jcHVVc2FnZSwgY3B1VXNhZ2UsIE1hdGguYWJzKHRoaXMuY3B1VXNhZ2UgLSBjcHVVc2FnZSkgKiAwLjI1ICogZHQpO1xuICAgIHRoaXMucmVhbENwdVVzYWdlID0gY3B1VXNhZ2U7XG5cbiAgICAvKiB0aGF0J3MgdGhlIHZhbHVlIDAuMCAtIDEuMCB0aGF0IGNvcmVzcG9uZHMgd2l0aCB0aGUgeWVsbG93IHBvd2VyIGJhciAqL1xuXG4gICAgdGhpcy5jcHVSYXRpbyA9IDEgLSBNYXRoLm1pbigxLjAsIHRoaXMuY3B1VXNhZ2UgLyB0aGlzLm9wdGltaXphdGlvblJhdGluZyk7XG4gICAgdGhpcy5jcHVCYXJQcm9ncmVzcyA9IFV0aWxzLm1vdmVUbyh0aGlzLmNwdUJhclByb2dyZXNzLCB0aGlzLmNwdVJhdGlvLCAwLjIgKiBkdCk7XG5cbiAgICAvKiBzcGF3biBzaGlwcyBpZiB0aGVyZSBpcyBlbm91Z2ggcG93ZXIgKi9cblxuICAgIGlmICgodGhpcy5zcGF3blRpbWVvdXQgLT0gZHQpIDw9IDApIHtcblxuICAgICAgdGhpcy5zcGF3blRpbWVvdXQgPSAwLjU7XG5cbiAgICAgIC8vaWYgKHRoaXMuY3B1UmF0aW8gPiAwLjUpIHRoaXMucGxheWVyUGxhbmV0LnNwYXduU2hpcChcImZpZ2h0ZXJcIik7XG4gICAgICBpZiAodGhpcy5vcHRpbWl6YXRpb25SYXRpbmcgPiB0aGlzLnJlYWxDcHVVc2FnZSArIDAuMSkgdGhpcy5wbGF5ZXJQbGFuZXQuc3Bhd25TaGlwKFwiZmlnaHRlclwiKTtcblxuICAgIH1cblxuICB9LFxuXG4gIHNoYWtlOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuc2hha2VMaWZlc3BhbiA9IDAuNDtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oZHQpIHtcblxuICAgIGlmICghdGhpcy5hdmVyYWdlRnJhbWVUaW1lKSByZXR1cm47XG5cbiAgICBhcHAuY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiIzI4MjI0NVwiO1xuICAgIGFwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIC8vIGFwcC5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcbiAgICAvL2FwcC5jdHguZmlsbFJlY3QoMCwgMCwgYXBwLndpZHRoLCBhcHAuaGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLnNoYWtlTGlmZXNwYW4gPiAwKSB7XG4gICAgICB0aGlzLnNoYWtlTGlmZXNwYW4gLT0gZHQ7XG4gICAgICB2YXIgY2hhb3MgPSBVdGlscy5yYW5kb20oLTYsIDYpO1xuICAgICAgYXBwLmN0eC50cmFuc2xhdGUoY2hhb3MsIGNoYW9zKVxuICAgIH1cblxuICAgIHRoaXMuc3RhcnMucmVuZGVyKGR0KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB0aGlzLmVudGl0aWVzW2ldLnJlbmRlcigpO1xuXG4gICAgfVxuXG4gICAgdGhpcy5wbGF5ZXIucmVuZGVyKCk7XG5cbiAgICB0aGlzLnJlbmRlclRvb2x0aXAoKTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuICAgIGFwcC5jdHguZm9udCA9IFwiYm9sZCAxNnB4IEFyaWFsXCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFwiU0NPUkU6IFwiICsgdGhpcy5zY29yZSwgYXBwLndpZHRoIC0gMjAsIDIwKTtcblxuXG4gICAgdGhpcy5yZW5kZXJDUFVCYXIoKTtcbiAgICAvLyB0aGlzLnJlbmRlckJvbnVzZXMoKTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBhcHAuY3R4LmZvbnQgPSBcImJvbGQgNjRweCBBcmlhbFwiO1xuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmEwXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dCh0aGlzLnBsYXllci5yZXNvdXJjZXMsIGFwcC5jZW50ZXIueCAtIDE4MCwgYXBwLmhlaWdodCAtIDEzNCk7XG5cbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGFwcC5jdHguZm9udCA9IFwiYm9sZCAxNnB4IEFyaWFsXCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFxuICAgICAgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcudG9GaXhlZCgyKSArIFwiIHwgXCIgK1xuICAgICAgLy8gdGhpcy5iYXNlbGluZUZhY3Rvci50b0ZpeGVkKDIpICsgXCIgfCBcIiArXG4gICAgICB0aGlzLmVudGl0aWVzLmxlbmd0aCArICcgKyAnICtcbiAgICAgIHRoaXMucXVvdGEudG9GaXhlZCgxKSwgMTYsIDE2KTtcblxuICAgIGFwcC5jdHgucmVzdG9yZSgpO1xuXG4gIH0sXG5cbiAgYmFyV2lkdGg6IDIwMCxcblxuICByZW5kZXJDUFVCYXI6IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB2YXIgd2lkdGggPSAyMDA7XG4gICAgdmFyIGN1cnJlbnRXaWR0aCA9IHRoaXMuYmFyV2lkdGggKiB0aGlzLmNwdUJhclByb2dyZXNzO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIGRlZnMuZnJvemVuU3ByaXRlWzBdLCBkZWZzLmZyb3plblNwcml0ZVsxXSwgZGVmcy5mcm96ZW5TcHJpdGVbMl0sIGRlZnMuZnJvemVuU3ByaXRlWzNdLFxuICAgICAgYXBwLmNlbnRlci54IC0gdGhpcy5iYXJXaWR0aCAvIDIgLSAzMiwgMjQsIGRlZnMuZnJvemVuU3ByaXRlWzJdLCBkZWZzLmZyb3plblNwcml0ZVszXSk7XG5cblxuICAgIGFwcC5jdHguc3Ryb2tlU3R5bGUgPSBcIiNmYTBcIjtcbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHgubGluZVdpZHRoID0gMjtcblxuICAgIGFwcC5jdHguc3Ryb2tlUmVjdChhcHAuY2VudGVyLnggLSB0aGlzLmJhcldpZHRoIC8gMiwgMTYsIHRoaXMuYmFyV2lkdGgsIDMyKVxuICAgIGFwcC5jdHguZmlsbFJlY3QoYXBwLmNlbnRlci54IC0gdGhpcy5iYXJXaWR0aCAvIDIsIDE2LCBjdXJyZW50V2lkdGgsIDMyKVxuXG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmZmZcIjtcbiAgICBhcHAuY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgYXBwLmZvbnRTaXplKDE2KTtcbiAgICBhcHAuY3R4LmZpbGxUZXh0KFwiQVZBSUxBQkxFIENQVVwiLCBhcHAuY2VudGVyLngsIDI0KTtcblxuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgYXBwLmN0eC5maWxsU3R5bGUgPSBcIiNmYTBcIjtcblxuICAgIGFwcC5jdHguZmlsbFRleHQoXCIrIFwiICsgdGhpcy5vcHRpbWl6YXRpb25SYXRpbmcudG9GaXhlZCgyKSwgYXBwLmNlbnRlci54ICsgd2lkdGggLyAyICsgMTYsIDE2KTtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjYzQwXCI7XG4gICAgYXBwLmN0eC5maWxsVGV4dChcIi0gXCIgKyB0aGlzLnJlYWxDcHVVc2FnZS50b0ZpeGVkKDIpLCBhcHAuY2VudGVyLnggKyB3aWR0aCAvIDIgKyAxNiwgMzIpO1xuXG4gIH0sXG5cblxuICByZW5kZXJCb251c2VzOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuICAgIGFwcC5jdHgudHJhbnNsYXRlKGFwcC5jZW50ZXIueCAtIHRoaXMuYmFyV2lkdGggLyAyLCA1NCk7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBhcHAuY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cbiAgICB2YXIgaSA9IE9iamVjdC5rZXlzKHRoaXMuYm9udXNlcykubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuYm9udXNlcykge1xuXG4gICAgICB2YXIgdGhyZXNob2xkID0gdGhpcy5ib251c2VzW2tleV07XG5cbiAgICAgIHZhciB4ID0gdGhpcy5iYXJXaWR0aCAqIHRocmVzaG9sZDtcbiAgICAgIHZhciB5ID0gaSAqIDE2O1xuXG4gICAgICBhcHAuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5jaGVja0JvbnVzKGtleSkgPyAxLjAgOiAwLjQ7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuY3R4LmZpbGxSZWN0KHgsIDAsIDIsIHkpO1xuICAgICAgYXBwLmN0eC5maWxsUmVjdCh4LCB5LCAxNiwgMik7XG5cbiAgICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBhcHAuZm9udFNpemUoMTIpO1xuICAgICAgYXBwLmN0eC5maWxsVGV4dChkZWZzLmJvbnVzZXNba2V5XS50b1VwcGVyQ2FzZSgpLCB4ICsgMjAsIHkgLSA2KTtcblxuICAgICAgaS0tO1xuXG4gICAgfVxuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfSxcblxuXG4gIHJlbmRlclRvb2x0aXA6IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHJldHVybjtcblxuICAgIGFwcC5sYXllci50ZXh0QWxpZ24oXCJjZW50ZXJcIikuZmlsbFN0eWxlKFwiI2ZmZlwiKS5mb250KFwiMTZweCBBcmlhbFwiKS50ZXh0V2l0aEJhY2tncm91bmQodGhpcy50b29sdGlwLCBhcHAuY2VudGVyLngsIGFwcC5oZWlnaHQgLSA2NCwgXCIjMDAwXCIsIDE2KTtcblxuICB9LFxuXG4gIHBvaW50ZXJtb3ZlOiBmdW5jdGlvbihlKSB7XG5cbiAgICB0aGlzLnBsYXllci54ID0gZS54O1xuICAgIHRoaXMucGxheWVyLnkgPSBlLnk7XG5cbiAgfSxcblxuICB3cmFwOiBmdW5jdGlvbihlbnRpdHkpIHtcblxuICAgIGlmIChlbnRpdHkueCArIGVudGl0eS5yYWRpdXMgPCAwKSBlbnRpdHkueCA9IGFwcC53aWR0aCArIGVudGl0eS5yYWRpdXM7XG4gICAgaWYgKGVudGl0eS54IC0gZW50aXR5LnJhZGl1cyA+IGFwcC53aWR0aCkgZW50aXR5LnggPSAtZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgKyBlbnRpdHkucmFkaXVzIDwgMCkgZW50aXR5LnkgPSBhcHAuaGVpZ2h0ICsgZW50aXR5LnJhZGl1cztcbiAgICBpZiAoZW50aXR5LnkgLSBlbnRpdHkucmFkaXVzID4gYXBwLmhlaWdodCkgZW50aXR5LnkgPSAtZW50aXR5LnJhZGl1cztcblxuICB9LFxuXG4gIGtleWRvd246IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIG5leHRXYXZlOiBmdW5jdGlvbigpIHtcblxuICAgIGlmICh0aGlzLmJlbmNobWFyaykgcmV0dXJuO1xuXG4gICAgdGhpcy53YXZlKys7XG5cbiAgICB0aGlzLnNoaXBzTGVmdCA9IDA7XG5cbiAgICB2YXIgc3RyZWFtc1Bvc2l0aW9ucyA9IFtcbiAgICAgIFswLjAsIDEuMF0sXG4gICAgICBbMC4wLCAwLjVdLFxuICAgICAgWzAuMCwgMC4wXSxcbiAgICAgIFsxLjAsIDAuMF0sXG4gICAgICBbMS4wLCAwLjVdLFxuICAgICAgWzEuMCwgMS4wXVxuICAgIF07XG5cbiAgICB2YXIgZGlmZmljdWx0eSA9IHRoaXMud2F2ZSAvIDIwO1xuXG4gICAgVXRpbHMuc2h1ZmZsZShzdHJlYW1zUG9zaXRpb25zKTtcblxuICAgIHZhciBzdHJlYW1zQ291bnQgPSBNYXRoLm1pbigzLCAxICsgZGlmZmljdWx0eSkgKyAwLjMgfCAwO1xuICAgIHZhciBzaGlwc1BlclN0cmVhbSA9IE1hdGgubWluKDE2LCA0ICsgZGlmZmljdWx0eSAqIDQpIHwgMDtcblxuICAgIHZhciBwb3NzaWJsZVNoaXBzID0gW107XG5cbiAgICBpZiAodGhpcy53YXZlID4gMCkgcG9zc2libGVTaGlwcy5wdXNoKFwiY3JlZXAxXCIpO1xuICAgIGlmICh0aGlzLndhdmUgPiAzKSBwb3NzaWJsZVNoaXBzLnB1c2goXCJjcmVlcDJcIik7XG4gICAgaWYgKHRoaXMud2F2ZSA+IDYpIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwM1wiKTtcbiAgICBpZiAodGhpcy53YXZlID4gMTApIHBvc3NpYmxlU2hpcHMucHVzaChcImNyZWVwNFwiKTtcblxuICAgIGlmICh0aGlzLndhdmUgJSA1ID09PSAwKSBwb3NzaWJsZVNoaXBzID0gW1wiYm9zc1wiXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyZWFtc0NvdW50OyBpKyspIHtcblxuICAgICAgdmFyIHN0cmVhbSA9IHN0cmVhbXNQb3NpdGlvbnMucG9wKCk7XG5cbiAgICAgIHZhciB4ID0gc3RyZWFtWzBdICogYXBwLndpZHRoO1xuICAgICAgdmFyIHkgPSBzdHJlYW1bMV0gKiBhcHAuaGVpZ2h0O1xuXG4gICAgICB2YXIgc2hpcCA9IFV0aWxzLnJhbmRvbShwb3NzaWJsZVNoaXBzKTtcbiAgICAgIHZhciBzaGlwRGF0YSA9IGRlZnMuc2hpcHNbc2hpcF07XG4gICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHkgLSBhcHAuY2VudGVyLnksIHggLSBhcHAuY2VudGVyLngpO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNoaXBzUGVyU3RyZWFtOyBqKyspIHtcblxuICAgICAgICB2YXIgZW50aXR5ID0gdGhpcy5hZGQoRU5HSU5FLlNoaXAsIHtcbiAgICAgICAgICB0eXBlOiBzaGlwLFxuICAgICAgICAgIHg6IHggKyBNYXRoLmNvcyhhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHk6IHkgKyBNYXRoLnNpbihhbmdsZSkgKiBqICogMTAwLFxuICAgICAgICAgIHRlYW06IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaGlwc0xlZnQrKztcblxuICAgICAgICBpZiAoc2hpcERhdGEuYm9zcykge1xuXG4gICAgICAgICAgZW50aXR5LmhwID0gZW50aXR5Lm1heEhwID0gdGhpcy5zY29yZTtcbiAgICAgICAgICBlbnRpdHkuZGFtYWdlID0gdGhpcy5zY29yZSAvIDUwIHwgMDtcbiAgICAgICAgICBlbnRpdHkuc2NhbGUgPSAwLjUgKyB0aGlzLnNjb3JlIC8gMjAwO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfSxcblxuICByZXBhaXJTaGlwczogZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgc2hpcHMgPSBVdGlscy5maWx0ZXIodGhpcy5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuICAgICAgcmV0dXJuIChlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApICYmIGUudGVhbTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgc2hpcHNbaV0ucmVwYWlyKCk7XG5cbiAgICB9XG5cbiAgfSxcblxuICBvbmVuZW15ZGVhdGg6IGZ1bmN0aW9uKHNoaXApIHtcblxuICAgIHRoaXMuc2hpcHNMZWZ0LS07XG5cbiAgICBpZiAodGhpcy5zaGlwc0xlZnQgPD0gMCkgdGhpcy5uZXh0V2F2ZSgpO1xuXG4gIH0sXG5cbiAgcG9pbnRlcmRvd246IGZ1bmN0aW9uKGUpIHtcblxuICB9LFxuXG4gIGdhbWVvdmVyOiBmdW5jdGlvbigpIHtcblxuICAgIEVOR0lORS5HYW1lb3Zlci5zY29yZSA9IHRoaXMuc2NvcmU7XG5cbiAgICBhcHAuc2V0U3RhdGUoRU5HSU5FLkdhbWVvdmVyKTtcblxuXG4gIH1cblxufTsiLCJFTkdJTkUuUG93ZXJ1cCA9IGZ1bmN0aW9uKGFyZ3MpIHtcblxuICBVdGlscy5leHRlbmQodGhpcywgYXJncyk7XG5cbiAgdGhpcy5yYWRpdXMgPSAzMjtcblxuICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLnNwZWVkID0gMzI7XG5cbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2LjI4O1xuICB0aGlzLmZvcmNlID0gNjQgKyBNYXRoLnJhbmRvbSgpICogMTI4O1xuXG4gIHRoaXMuZm9yY2UgKj0gMztcbiAgdGhpcy5mb3JjZURhbXBpbmcgPSB0aGlzLmZvcmNlO1xuXG4gIHRoaXMubGlmZXRpbWUgPSAwO1xuICB0aGlzLmR1cmF0aW9uID0gMTA7XG5cbiAgdmFyIGtleXMgPSBbXCJyZXBhaXJcIiwgXCJtaXNzaWxlc1wiLCBcImZyZWV6ZVwiXTtcblxuICB2YXIgZnJlZWxhbmVyc0NvdW50ID0gVXRpbHMuZmlsdGVyKHRoaXMuZ2FtZS5lbnRpdGllcywgZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBlLmZyZWUgJiYgZSBpbnN0YW5jZW9mIEVOR0lORS5TaGlwO1xuICB9KS5sZW5ndGg7XG5cbiAgaWYgKGZyZWVsYW5lcnNDb3VudCA8IDIpIGtleXMucHVzaChcImZyZWVsYW5jZXJcIik7XG5cbiAgdGhpcy5rZXkgPSBVdGlscy5yYW5kb20oa2V5cyk7XG4gIHRoaXMuc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMua2V5XTtcblxufTtcblxuRU5HSU5FLlBvd2VydXAucHJvdG90eXBlID0ge1xuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuUG93ZXJ1cCxcblxuICBzcHJpdGU6IFsyMTYsIDE1OSwgMTQsIDE0XSxcblxuICB0eXBlOiBcInBvd2VydXBcIixcblxuICBzcHJpdGVzOiB7XG5cbiAgICBcInJlcGFpclwiOiBbMjQ1LCA4OSwgMjMsIDI1XSxcbiAgICBcImZyZWVsYW5jZXJcIjogWzI3NiwgNTEsIDMyLCAzMl0sXG4gICAgXCJmcmVlemVcIjogWzI0MiwgMTE5LCAxOSwgMjFdLFxuICAgIFwibWlzc2lsZXNcIjogWzMxMSwgMTMsIDI4LCAzMl1cblxuICB9LFxuXG4gIGNvbGxlY3Q6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy5nYW1lLmV4cGxvc2lvbih0aGlzLngsIHRoaXMueSwgMTYsIFwiI2ZmZlwiKTtcblxuICAgIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG5cbiAgICBpZiAoIXRoaXMuZ2FtZS5iZW5jaG1hcmspIGFwcC5zb3VuZC5wbGF5KFwiY29pblwiKTtcblxuICAgIHRoaXMuZ2FtZS5wbGF5ZXIucG9rZSgpO1xuXG4gICAgdGhpcy5nYW1lLmFkZChFTkdJTkUuVGV4dE91dCwge1xuICAgICAgeDogdGhpcy54LFxuICAgICAgeTogdGhpcy55LFxuICAgICAgdGV4dDogdGhpcy5rZXlcbiAgICB9KTtcblxuICAgIHN3aXRjaCAodGhpcy5rZXkpIHtcblxuICAgICAgY2FzZSBcImZyZWV6ZVwiOlxuXG4gICAgICAgIHRoaXMuZ2FtZS5mcmVlemVMaWZlc3BhbiA9IDQuMDtcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIm1pc3NpbGVzXCI6XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHRoaXMuZ2FtZS5hZGQoRU5HSU5FLk1pc3NpbGUsIHtcbiAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgIHRlYW06IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJyZXBhaXJcIjpcblxuICAgICAgICB0aGlzLmdhbWUucmVwYWlyU2hpcHMoKTtcblxuICAgICAgICBicmVhaztcblxuXG4gICAgICBjYXNlIFwiZnJlZWxhbmNlclwiOlxuXG4gICAgICAgIHZhciBzaGlwID0gdGhpcy5nYW1lLmFkZChFTkdJTkUuU2hpcCwge1xuICAgICAgICAgIHg6IHRoaXMueCxcbiAgICAgICAgICB5OiB0aGlzLnksXG4gICAgICAgICAgdHlwZTogXCJmcmVlbGFuY2VyXCIsXG4gICAgICAgICAgdGVhbTogMSxcbiAgICAgICAgICBmcmVlOiB0cnVlLFxuICAgICAgICAgIHBsYW5ldDogdGhpcy5nYW1lLnBsYXllclBsYW5ldFxuICAgICAgICB9KTtcblxuICAgICAgICBzaGlwLmZvcmNlRGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDY7XG4gICAgICAgIHNoaXAuZm9yY2UgPSAyMDA7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICAgIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG5cbiAgICB2YXIgcGxheWVyRGlzdGFuY2UgPSBVdGlscy5kaXN0YW5jZSh0aGlzLCB0aGlzLmdhbWUucGxheWVyKTtcblxuICAgIGlmICh0aGlzLmZvcmNlKSB7XG5cbiAgICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcbiAgICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcblxuICAgICAgdGhpcy5mb3JjZSA9IE1hdGgubWF4KDAsIHRoaXMuZm9yY2UgLSB0aGlzLmZvcmNlRGFtcGluZyAqIGR0KTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpZmV0aW1lID4gMC41KSB7XG4gICAgICBpZiAocGxheWVyRGlzdGFuY2UgPCAzMikge1xuICAgICAgICB0aGlzLmNvbGxlY3QoKTtcbiAgICAgICAgdGhpcy5nYW1lLnBsYXllci5yZXNvdXJjZXMrKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5saWZldGltZSA+IHRoaXMuZHVyYXRpb24pIHRoaXMuZ2FtZS5yZW1vdmUodGhpcyk7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGxpbmVhciA9IGFwcC5saWZldGltZSAlIDAuNSAvIDAuNTtcbiAgICB2YXIgc2NhbGUgPSAwLjggKyBNYXRoLnNpbihNYXRoLlBJICogbGluZWFyKSAqIDAuNDtcblxuICAgIGFwcC5jdHguc2F2ZSgpO1xuXG4gICAgYXBwLmN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLnkpO1xuXG4gICAgYXBwLmN0eC5zY2FsZShzY2FsZSwgc2NhbGUpO1xuXG4gICAgYXBwLmN0eC5kcmF3SW1hZ2UoYXBwLmltYWdlcy5zcHJpdGVzaGVldCxcbiAgICAgIHRoaXMuc3ByaXRlWzBdLCB0aGlzLnNwcml0ZVsxXSwgdGhpcy5zcHJpdGVbMl0sIHRoaXMuc3ByaXRlWzNdLCAtdGhpcy5zcHJpdGVbMl0gLyAyLCAtdGhpcy5zcHJpdGVbM10gLyAyLCB0aGlzLnNwcml0ZVsyXSwgdGhpcy5zcHJpdGVbM11cbiAgICApO1xuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5UZXh0T3V0ID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgZm9udFNpemU6IDI0LFxuICAgIHNjYWxlWDogMCxcbiAgICBzY2FsZVk6IDEuMCxcbiAgICB0ZXh0OiBcInZvaWRcIixcbiAgICBkdXJhdGlvbjogMi4wXG4gIH0sIGFyZ3MpO1xuXG4gIHZhciB0ZXh0b3V0ID0gdGhpcztcblxuICBhcHAudHdlZW4odGhpcylcbiAgICAudG8oe1xuICAgICAgc2NhbGVYOiAxLjBcbiAgICB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSwgXCJvdXRFbGFzdGljXCIpXG4gICAgLndhaXQodGhpcy5kdXJhdGlvbiAqIDAuNSlcbiAgICAudG8oe1xuICAgICAgc2NhbGVZOiAwLjBcbiAgICB9LCB0aGlzLmR1cmF0aW9uICogMC4yNSwgXCJvdXRDaXJjXCIpXG4gICAgLm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdGV4dG91dC5nYW1lLnJlbW92ZSh0ZXh0b3V0KTtcbiAgICB9KTtcblxuICAgIHR0dCA9IHRoaXM7XG5cbn07XG5cbkVOR0lORS5UZXh0T3V0LnByb3RvdHlwZSA9IHtcblxuICBjb25zdHJ1Y3RvcjogRU5HSU5FLlRleHRPdXQsXG5cbiAgc3ByaXRlOiBbMjE2LCAxNTksIDE0LCAxNF0sXG5cbiAgdHlwZTogXCJ0ZXh0b3V0XCIsXG5cbiAgc3RlcDogZnVuY3Rpb24oZHQpIHtcblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMuc2NhbGVYIHx8ICF0aGlzLnNjYWxlWSkgcmV0dXJuO1xuXG4gICAgYXBwLmN0eC5zYXZlKCk7XG5cbiAgICBhcHAuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSk7XG5cbiAgICBhcHAuZm9udFNpemUodGhpcy5mb250U2l6ZSk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgYXBwLmN0eC5zY2FsZSh0aGlzLnNjYWxlWCwgdGhpcy5zY2FsZVkpO1xuICAgIGFwcC5jdHguZmlsbFRleHQodGhpcy50ZXh0LCAwLCAwKVxuXG4gICAgYXBwLmN0eC5yZXN0b3JlKCk7XG5cbiAgfVxuXG59OyIsIkVOR0lORS5UcmFpbCA9IGZ1bmN0aW9uKHBhcmVudCwgYXJncykge1xuXG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgY29sb3I6IFwiIzBmY1wiLFxuICAgIHBvaW50czogW10sXG4gICAgbWF4UG9pbnRzOiA1LFxuICAgIHdpZHRoOiAxMCxcbiAgICBsaWZldGltZTogMCxcbiAgICBsaWZlc3BhbjogMCxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIGludGVydmFsOiAwLjE1LFxuICAgIHN0cm9rZTogdHJ1ZVxuICB9LCBhcmdzKTtcblxufTtcblxuRU5HSU5FLlRyYWlsLnByb3RvdHlwZSA9IHtcblxuICB6SW5kZXg6IDIwMCxcblxuICBxdW90YTogMC4zLFxuXG4gIHJlYWN0aW9uOiA4LFxuXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMucG9pbnRzID0gW107XG5cbiAgfSxcblxuICBzdGVwOiBmdW5jdGlvbihkZWx0YSkge1xuXG4gICAgdGhpcy5saWZldGltZSArPSBkZWx0YTtcblxuICAgIGlmIChVdGlscy5pbnRlcnZhbChcInBvaW50XCIsIHRoaXMuaW50ZXJ2YWwsIHRoaXMpKSB7XG5cbiAgICAgIGlmICghdGhpcy5wYXVzZWQpIHRoaXMucG9pbnRzLnB1c2godGhpcy5wYXJlbnQueCwgdGhpcy5wYXJlbnQueSk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHRoaXMucG9pbnRzLmxlbmd0aCA+IHRoaXMubWF4UG9pbnRzICogMikgfHxcbiAgICAgICAgKHRoaXMucGF1c2VkICYmIHRoaXMucG9pbnRzLmxlbmd0aCA+IDApXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5wb2ludHMuc2hpZnQoKTtcbiAgICAgICAgdGhpcy5wb2ludHMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAyXSA9IHRoaXMucGFyZW50Lng7XG4gICAgdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoIC0gMV0gPSB0aGlzLnBhcmVudC55O1xuXG4gICAgaWYodGhpcy5saWZlc3BhbiAmJiB0aGlzLmxpZmV0aW1lID4gdGhpcy5saWZlc3Bhbikge1xuICAgICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICAgIH1cblxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cbiAgICBpZih0aGlzLnBvaW50cy5sZW5ndGggPD0gMCkgcmV0dXJuO1xuXG4gICAgYXBwLmxheWVyLnNhdmUoKTtcbiAgICBhcHAubGF5ZXIuc3Ryb2tlU3R5bGUodGhpcy5jb2xvcik7XG4gICAgYXBwLmxheWVyLmxpbmVDYXAoXCJzcXVhcmVcIik7XG5cbiAgICAvLyBpZiAoIXRoaXMuc3Ryb2tlKSBhcHAubGF5ZXIuc3Ryb2tlU3R5bGUoXCJyZ2JhKDAsMCwwLDAuMSlcIik7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IHRoaXMucG9pbnRzLmxlbmd0aDsgaSArPSAyKSB7XG5cbiAgICAgIHZhciByYXRpbyA9IGkgLyAoMiAqIHRoaXMubWF4UG9pbnRzKTtcbiAgICAgIHZhciBweCA9IHRoaXMucG9pbnRzW2kgLSAyXTtcbiAgICAgIHZhciBweSA9IHRoaXMucG9pbnRzW2kgLSAxXTtcbiAgICAgIHZhciBueCA9IHRoaXMucG9pbnRzW2ldO1xuICAgICAgdmFyIG55ID0gdGhpcy5wb2ludHNbaSArIDFdO1xuICAgICAgYXBwLmxheWVyLmJlZ2luUGF0aCgpO1xuICAgICAgYXBwLmxheWVyLm1vdmVUbyhweCB8IDAsIHB5IHwgMCk7XG4gICAgICBhcHAubGF5ZXIubGluZVRvKG54IHwgMCwgbnkgfCAwKTtcbiAgICAgIGFwcC5sYXllci5hKHJhdGlvKS5saW5lV2lkdGgocmF0aW8gKiB0aGlzLndpZHRoKTtcbiAgICAgIGFwcC5sYXllci5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBhcHAubGF5ZXIucmVzdG9yZSgpO1xuXG5cbiAgfVxuXG59OyIsIkVOR0lORS5NaXNzaWxlID0gZnVuY3Rpb24oYXJncykge1xuXG4gIFV0aWxzLmV4dGVuZCh0aGlzLCB7XG4gICAgc3BlZWQ6IDQwMFxuICB9LCBhcmdzKTtcblxuICB0aGlzLmNvbG9yID0gZGVmcy50ZWFtQ29sb3JbdGhpcy50ZWFtXTtcbiAgdGhpcy5yYWRpdXMgPSA0O1xuICB0aGlzLmRpcmVjdGlvbiA9IDA7XG5cbiAgdGhpcy5mb3JjZSA9IDQwMDtcbiAgdGhpcy5mb3JjZURpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA2O1xuXG4gIHRoaXMudHJhaWwgPSBuZXcgRU5HSU5FLlRyYWlsKHRoaXMsIHtcbiAgICBpbnRlcnZhbDogMC4wNSxcbiAgICBtYXhQb2ludHM6IDEwLFxuICAgIGNvbG9yOiBcIiNmYTBcIlxuICB9KTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ2FtZS5lbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgdmFyIGUgPSB0aGlzLmdhbWUuZW50aXRpZXNbaV07XG5cbiAgICBpZiAoIShlIGluc3RhbmNlb2YgRU5HSU5FLlNoaXApKSBjb250aW51ZTtcblxuICAgIGlmIChlLm1pc3NpbGVUYXJnZXQpIGNvbnRpbnVlO1xuICAgIGlmIChlLnRlYW0gPT09IHRoaXMudGVhbSkgY29udGludWU7XG5cbiAgICBlLm1pc3NpbGVUYXJnZXQgPSB0aGlzO1xuICAgIHRoaXMudGFyZ2V0ID0gZTtcblxuICAgIGJyZWFrO1xuXG4gIH1cblxufTtcblxuRU5HSU5FLk1pc3NpbGUucHJvdG90eXBlID0ge1xuXG4gIHNwcml0ZTogWzE0NSwgMjUsIDYsIDM5XSxcblxuICBxdW90YTogMC41LFxuXG4gIGNvbnN0cnVjdG9yOiBFTkdJTkUuTWlzc2lsZSxcblxuICBzdGVwOiBmdW5jdGlvbihkdCkge1xuXG4gICAgaWYoIXRoaXMudGFyZ2V0KSByZXR1cm4gdGhpcy5kaWUoKTtcblxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5hdGFuMih0aGlzLnRhcmdldC55IC0gdGhpcy55LCB0aGlzLnRhcmdldC54IC0gdGhpcy54KTtcblxuICAgIHRoaXMueCArPSBNYXRoLmNvcyh0aGlzLmRpcmVjdGlvbikgKiB0aGlzLnNwZWVkICogZHQ7XG4gICAgdGhpcy55ICs9IE1hdGguc2luKHRoaXMuZGlyZWN0aW9uKSAqIHRoaXMuc3BlZWQgKiBkdDtcblxuICAgIHRoaXMuZm9yY2UgPSBNYXRoLm1heCh0aGlzLmZvcmNlIC0gZHQgKiA0MDAsIDApO1xuXG4gICAgdGhpcy54ICs9IE1hdGguY29zKHRoaXMuZm9yY2VEaXJlY3Rpb24pICogdGhpcy5mb3JjZSAqIGR0O1xuICAgIHRoaXMueSArPSBNYXRoLnNpbih0aGlzLmZvcmNlRGlyZWN0aW9uKSAqIHRoaXMuZm9yY2UgKiBkdDtcblxuXG4gICAgaWYgKFV0aWxzLmRpc3RhbmNlKHRoaXMsIHRoaXMudGFyZ2V0KSA8IHRoaXMucmFkaXVzICsgdGhpcy50YXJnZXQucmFkaXVzKSB7XG5cbiAgICAgIHRoaXMuaGl0KHRoaXMudGFyZ2V0KTtcblxuICAgIH1cblxuICAgIHRoaXMudHJhaWwuc3RlcChkdCk7XG5cblxuICB9LFxuXG4gIGhpdDogZnVuY3Rpb24odGFyZ2V0KSB7XG5cbiAgICB0YXJnZXQuYXBwbHlEYW1hZ2UoMTAgKyB0aGlzLmdhbWUuc2NvcmUgLyAxMCk7XG5cbiAgICB0aGlzLmRpZSgpO1xuXG4gIH0sXG5cbiAgZGllOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGVhZCA9IHRydWU7XG5cbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuXG4gICAgdGhpcy50cmFpbC5yZW5kZXIoKTtcblxuICB9XG5cbn07IiwiRU5HSU5FLkdhbWVvdmVyID0ge1xuXG4gIHNjb3JlOiA3MzcsXG4gIGhpc2NvcmU6IDIwMCxcblxuICBzdGFyT2ZmOiBbMzgyLCAxNzcsIDE1LCAxNl0sXG4gIHN0YXJPbjogWzMzOSwgMTY5LCAzNywgMzddLFxuXG4gIGVudGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5yZW5kZXJlci5zZXRTbW9vdGhpbmcodHJ1ZSk7XG5cblxuICAgIHZhciBoaXNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaXNjb3JlXCIpIHwgMDtcblxuICAgIGlmKGhpc2NvcmUgPCB0aGlzLnNjb3JlKSB7XG4gICAgIFxuICAgICAgdGhpcy5oaXNjb3JlID0gdGhpcy5zY29yZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzY29yZVwiLCBoaXNjb3JlKTtcblxuICAgIH1cblxuICAgIHRoaXMubXVzaWMgPSBhcHAubXVzaWMucGxheShcImdhbWVvdmVyXCIpLmZhZGVJbigzKS5sb29wKCk7XG5cbiAgICB0aGlzLmN1cnJlbnRTY29yZSA9IDA7XG4gICAgdGhpcy5zdGFycyA9IFtdO1xuICAgIHRoaXMuc2NvcmVPZmZzZXQgPSAtYXBwLndpZHRoO1xuICAgIHRoaXMuYWNoaWV2ZWRTdGFycyA9IE1hdGgubWluKDEwLCAodGhpcy5zY29yZSAvIDUwMCkgKiAxMCB8IDApO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cbiAgICAgIHRoaXMuc3RhcnMucHVzaCh7XG4gICAgICAgIHg6IGkgKiA2NCxcbiAgICAgICAgeTogNjQsXG4gICAgICAgIHNjYWxlOiAwXG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY2hpZXZlZFN0YXJzOyBpKyspIHtcblxuICAgICAgdmFyIHN0YXIgPSB0aGlzLnN0YXJzW2ldO1xuXG4gICAgICBhcHAudHdlZW4oc3Rhcikud2FpdChpICogMC4xKS50byh7XG4gICAgICAgIHNjYWxlOiAxLjAsXG4gICAgICAgIHk6IDY0XG4gICAgICB9LCAyLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuICAgIH1cblxuICAgIGFwcC50d2Vlbih0aGlzKS50byh7XG5cbiAgICAgIGN1cnJlbnRTY29yZTogdGhpcy5zY29yZSxcbiAgICAgIHNjb3JlT2Zmc2V0OiAwXG5cbiAgICB9LCAyLjUsIFwib3V0RWxhc3RpY1wiKTtcblxuXG4gIH0sXG5cbiAgc3RlcDogZnVuY3Rpb24oKSB7XG5cbiAgfSxcblxuICByZW5kZXJTdGFyczogZnVuY3Rpb24oeCwgeSkge1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblxuICAgICAgdmFyIHN0YXIgPSB0aGlzLnN0YXJzW2ldO1xuXG4gICAgICBhcHAubGF5ZXIuc2F2ZSgpO1xuXG4gICAgICBhcHAubGF5ZXIudHJhbnNsYXRlKHN0YXIueCArIHgsIHN0YXIueSArIHkpO1xuXG4gICAgICBhcHAubGF5ZXIuYWxpZ24oMC41LCAwLjUpO1xuXG4gICAgICBhcHAubGF5ZXIuZHJhd1JlZ2lvbihhcHAuaW1hZ2VzLnNwcml0ZXNoZWV0LCB0aGlzLnN0YXJPZmYsIDAsIDApO1xuXG4gICAgICBpZiAoc3Rhci5zY2FsZSA+IDApIHtcblxuICAgICAgICBhcHAubGF5ZXIucm90YXRlKGFwcC5saWZldGltZSk7XG4gICAgICAgIGFwcC5sYXllci5zY2FsZShzdGFyLnNjYWxlLCBzdGFyLnNjYWxlKTtcbiAgICAgICAgYXBwLmxheWVyLmRyYXdSZWdpb24oYXBwLmltYWdlcy5zcHJpdGVzaGVldCwgdGhpcy5zdGFyT24sIDAsIDApO1xuICAgICAgfVxuXG4gICAgICBhcHAubGF5ZXIucmVzdG9yZSgpO1xuXG4gICAgfVxuXG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjMjgyMjQ1XCI7XG5cbiAgICBhcHAuY3R4LmZpbGxSZWN0KDAsIDAsIGFwcC53aWR0aCwgYXBwLmhlaWdodCk7XG5cbiAgICBhcHAuY3R4LmRyYXdJbWFnZShhcHAuaW1hZ2VzLmhlbHAsIGFwcC5jZW50ZXIueCAtIGFwcC5pbWFnZXMuaGVscC53aWR0aCAqIDAuNSB8IDAsIDEwMClcblxuICAgIHRoaXMucmVuZGVyU3RhcnMoYXBwLmNlbnRlci54IC0gMzIwLCAwKTtcblxuICAgIGFwcC5mb250U2l6ZSg0OCk7XG5cbiAgICBhcHAuY3R4LmZpbGxTdHlsZSA9IFwiI2ZhMFwiO1xuICAgIGFwcC5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgIGFwcC5jdHguZmlsbFRleHQoXCJTQ09SRTogXCIgKyAodGhpcy5jdXJyZW50U2NvcmUgfCAwKSwgYXBwLmNlbnRlci54ICsgdGhpcy5zY29yZU9mZnNldCwgMTgwKVxuXG4gICAgYXBwLmZvbnRTaXplKDMyKTtcblxuICAgIGFwcC5jdHguZmlsbFN0eWxlID0gXCIjZjQwXCI7XG4gICAgYXBwLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgYXBwLmN0eC5maWxsVGV4dChcIkhJLVNDT1JFOiBcIiArICh0aGlzLmhpc2NvcmUgfCAwKSwgYXBwLmNlbnRlci54IC0gdGhpcy5zY29yZU9mZnNldCwgMjIwKVxuICB9XG5cbn07IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcblxuICBhcHAgPSBwbGF5Z3JvdW5kKHtcblxuICAgIHdpZHRoOiAxMDI0LFxuICAgIGhlaWdodDogNjQwLFxuXG4gICAgc21vb3RoaW5nOiB0cnVlLFxuXG4gICAgcGF0aHM6IHtcblxuICAgICAgYmFzZTogXCJodHRwOi8vbW96aWxsYS5naXRodWIuaW8vZGV2dG9vbHMtcGVyZi1nYW1lL1wiXG5cbiAgICB9LFxuXG5cbiAgICBmb250U2l6ZTogZnVuY3Rpb24oc2l6ZSkge1xuXG4gICAgICByZXR1cm4gdGhpcy5jdHguZm9udCA9IHNpemUgKyBcInB4ICdTcXVhZGEgT25lJ1wiO1xuXG4gICAgfSxcblxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIHRoaXMubG9hZEltYWdlcyhcInNwcml0ZXNoZWV0XCIsIFwiaGVscFwiLCBcInNwbGFzaFwiLCBcImZsYXJlXCIpO1xuICAgICAgdGhpcy5sb2FkU291bmQoXCJhY3Rpb25cIik7XG5cbiAgICAgIHRoaXMua2V5Ym9hcmQucHJldmVudERlZmF1bHQgPSBmYWxzZTtcblxuICAgICAgdGhpcy5zb3VuZCA9IHRoaXMuYXVkaW8uY2hhbm5lbChcInNvdW5kXCIpLnZvbHVtZSgwLjUpO1xuICAgICAgdGhpcy5tdXNpYyA9IHRoaXMuYXVkaW8uY2hhbm5lbChcIm11c2ljXCIpLnZvbHVtZSgwLjUpO1xuXG4gICAgICB0aGlzLmN0eCA9IGFwcC5sYXllci5jb250ZXh0O1xuXG4gICAgICB0aGlzLmdhbWUgPSBFTkdJTkUuR2FtZTtcblxuICAgIH0sXG5cbiAgICByZWFkeTogZnVuY3Rpb24oKSB7XG5cbiAgICAgIGFwcC5iYXNlbGluZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFzZWxpbmVcIikgfCAwO1xuXG4gICAgICBpZiAoZmFsc2UgJiYgYXBwLmJhc2VsaW5lKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZShFTkdJTkUuR2FtZSk7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgdGhpcy5zZXRTdGF0ZShFTkdJTkUuR2FtZW92ZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoRU5HSU5FLkJlbmNobWFyayk7XG5cbiAgICAgIH1cblxuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuXG4gICAgICB0aGlzLnN0YXRlLnJlbmRlcigwKTtcblxuICAgIH0sXG5cbiAgICBnZXRDb2xvcmVkSW1hZ2U6IGZ1bmN0aW9uKGtleSwgY29sb3IsIG1vZGUpIHtcblxuICAgICAgaWYgKHR5cGVvZiBtb2RlID09PSBcInVuZGVmaW5lZFwiKSBtb2RlID0gXCJoYXJkLWxpZ2h0XCI7XG5cbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBpbWFnZSA9IHRoaXMuaW1hZ2VzW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW1hZ2UgPSBrZXk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdG9yZWtleSA9IGtleSArIGNvbG9yO1xuXG4gICAgICBpZiAoIWltYWdlW3N0b3Jla2V5XSkge1xuXG4gICAgICAgIGlmICh0eXBlb2YgbWl4ID09PSBcInVuZGVmaW5lZFwiKSBtaXggPSAxO1xuXG4gICAgICAgIHZhciBiZWxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIGJlbG93Q3R4ID0gYmVsb3cuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgICAgIGJlbG93LndpZHRoID0gaW1hZ2Uud2lkdGg7XG4gICAgICAgIGJlbG93LmhlaWdodCA9IGltYWdlLmhlaWdodDtcblxuICAgICAgICBiZWxvd0N0eC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDApO1xuICAgICAgICBiZWxvd0N0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcInNvdXJjZS1pblwiO1xuICAgICAgICBiZWxvd0N0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgYmVsb3dDdHguZmlsbFJlY3QoMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XG5cbiAgICAgICAgaW1hZ2Vbc3RvcmVrZXldID0gYmVsb3c7XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGltYWdlW3N0b3Jla2V5XTtcblxuICAgIH0sXG5cbiAgICByb3VuZEFuZ2xlOiBmdW5jdGlvbihhbmdsZSkge1xuXG4gICAgICByZXR1cm4gVXRpbHMuZ3JvdW5kKGFuZ2xlIC0gTWF0aC5QSSAvIDE2LCBNYXRoLlBJIC8gOCk7XG5cbiAgICB9LFxuXG4gICAgdmlzaWJpbGl0eWNoYW5nZTogZnVuY3Rpb24oZSkge1xuXG4gICAgICBpZiAoZSA9PT0gXCJoaWRkZW5cIikge1xuXG4gICAgICAgIHRoaXMuc3RvcmVkU291bmRWb2x1bWUgPSB0aGlzLnNvdW5kLnZvbHVtZSgpO1xuICAgICAgICB0aGlzLnN0b3JlZE11c2ljVm9sdW1lID0gdGhpcy5tdXNpYy52b2x1bWUoKTtcblxuICAgICAgICB0aGlzLnNvdW5kLnZvbHVtZSgwKTtcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUoMCk7XG5cblxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLnNvdW5kLnZvbHVtZSh0aGlzLnN0b3JlZFNvdW5kVm9sdW1lKTtcbiAgICAgICAgdGhpcy5tdXNpYy52b2x1bWUodGhpcy5zdG9yZWRNdXNpY1ZvbHVtZSk7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICB9KTtcblxufSk7XG5cblxuXG52YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2UgfHwgd2luZG93LndlYmtpdFBlcmZvcm1hbmNlIHx8IERhdGU7XG5cbk1hdGguc2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbih4KSB7XG5cbiAgeCA9ICt4OyAvLyBjb252ZXJ0IHRvIGEgbnVtYmVyXG5cbiAgaWYgKHggPT09IDAgfHwgaXNOYU4oeCkpIHtcblxuICAgIHJldHVybiB4O1xuXG4gIH1cblxuICByZXR1cm4geCA+IDAgPyAxIDogLTE7XG5cbn07IiwiLyoqXG4gKiBUaGlzIGlzIGJhZCBhbmQgdW5vcHRpbWl6ZWQgY29kZSBqdXN0IGZvciB5b3UgdG8gZml4IDopXG4gKlxuICogR2V0IERldmVsb3BlciBFZGl0aW9uOiBodHRwczovL3d3dy5tb3ppbGxhLm9yZy9maXJlZm94L2RldmVsb3Blci9cbiAqXG4gKiAxLiBPcGVuIHRoZSBgUGVyZm9ybWFuY2VgIHRvb2wgaW4gRmlyZWZveCBEZXZlbG9wZXIgRWRpdGlvblxuICogMi4gU3RhcnQgcmVjb3JkaW5nIGEgcGVyZm9ybWFuY2UgcHJvZmlsZVxuICogMy4gUGxheSB0aGUgZ2FtZVxuICogNC4gU3RvcCBwcm9maWxpbmcgYW5kIGNoZWNrIHRoZSBDYWxsIFRyZWUgb3IgRmxhbWUgQ2hhcnQgZm9yIHRoZSBtYWxlZmljZW50XG4gKi9cblxuLyoqXG4gKiBGaW5kIG5lYXJlc3QgZW50aXR5IGZyb20gYSBsaXN0IG9mIGVudGl0aWVzXG4gKiBAcGFyYW0gIHtFbnRpdHl9IGZyb20gICAgIEVudGl0eVxuICogQHBhcmFtICB7RW50aXR5W119IGVudGl0aWVzIExpc3Qgb2YgZW50aXRpZXMgdG8gY29tcGFyZVxuICogQHJldHVybiB7RW50aXR5fSAgICAgICAgICBOZWFyZXN0IEVudGl0eVxuICovXG5VdGlscy5uZWFyZXN0ID0gZnVuY3Rpb24oZnJvbSwgZW50aXRpZXMpIHtcbiAgZm9yICh2YXIgb29wcyA9IDA7IG9vcHMgPCAxMDA7IG9vcHMrKykge1xuICAgIE1hdGguc3FydChvb3BzKTsgLy8gU29ycnkhXG4gIH1cblxuICB2YXIgZGlzdGFuY2VzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG8gPSBlbnRpdGllc1tpXTtcbiAgICBpZiAoZnJvbSA9PT0gdG8pIGNvbnRpbnVlO1xuICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UoZnJvbSwgdG8pO1xuICAgIGRpc3RhbmNlcy5wdXNoKHtcbiAgICAgIHRhcmdldDogdG8sXG4gICAgICBkaXN0YW5jZTogZGlzdGFuY2VcbiAgICB9KTtcbiAgfVxuICBpZiAoIWRpc3RhbmNlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgc29ydGVkRGlzdGFuY2VzID0gZGlzdGFuY2VzLnNvcnQoXG4gICAgZnVuY3Rpb24gc29ydERpc3RhbmNlcyhhLCBiKSB7XG4gICAgICByZXR1cm4gYS5kaXN0YW5jZSAtIGIuZGlzdGFuY2U7XG4gICAgfVxuICApO1xuICByZXR1cm4gc29ydGVkRGlzdGFuY2VzWzBdLnRhcmdldDtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgYHRlc3RgIGZ1bmN0aW9uXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZpbHRlclxuICogQHBhcmFtICB7RnVuY3Rpb259IHRlc3QgIEZ1bmN0aW9uIHRvIHRlc3QgZWFjaCBlbGVtZW50LCBpbnZva2VkIHdpdGggKGVsZW1lbnQpXG4gKiBAcmV0dXJuIHtBcnJheX0gICAgICAgQSBuZXcgYXJyYXkgd2l0aCBvbmx5IHBhc3NlZCBlbGVtZW5udHNcbiAqL1xuVXRpbHMuZmlsdGVyID0gZnVuY3Rpb24oYXJyYXksIHRlc3QpIHtcbiAgdmFyIHJlc3VsdCA9IGFycmF5LnNsaWNlKCk7IC8vIENsb25lIGFycmF5XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCF0ZXN0KHJlc3VsdFtpXSkpIHtcbiAgICAgIHJlc3VsdC5zcGxpY2UoaSwgMSk7IC8vIFJlbW92ZSBlbGVtZW50XG4gICAgICBpLS07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJldHVybnMgbmVhcmVzdCBzaGlwIG9mIG9wcG9zaXRlIHRlYW1cbiAqIEByZXR1cm4ge1NoaXB9IE5lYXJlc3QgZW5lbXkgc2hpcFxuICovXG5FTkdJTkUuU2hpcC5wcm90b3R5cGUuZ2V0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwb29sID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nYW1lLmVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVudGl0eSA9IHRoaXMuZ2FtZS5lbnRpdGllc1tpXTtcbiAgICBpZiAoIShlbnRpdHkgaW5zdGFuY2VvZiBFTkdJTkUuU2hpcCkpIGNvbnRpbnVlO1xuICAgIGlmIChlbnRpdHkudGVhbSAhPT0gdGhpcy50ZWFtKSBwb29sLnB1c2goZW50aXR5KTtcbiAgfVxuICAvLyBJcyBVdGlscy5uZWFyZXN0IGZhc3QgZW5vdWdoP1xuICByZXR1cm4gVXRpbHMubmVhcmVzdCh0aGlzLCBwb29sKTtcblxufTtcblxuLy8gV2UgdXBkYXRlIHRob3NlIGZvciBwb3NpdGlvbnMsIG1heWJlIHdlIGRvbid0IG5lZWQgaXQ/XG52YXIgYXhlcyA9IHtcbiAgeDogTWF0aC5jb3MsXG4gIHk6IE1hdGguc2luXG59O1xuXG4vKipcbiAqIFVwZGF0ZSBwb3NpdGlvbiBmb3IgYW4gZW50aXR5IHRoYXQgaGFzIHNwZWVkIGFuZCBkaXJlY3Rpb24uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGRpcmVjdGlvbiBBbmdsZSBnaXZlbiBpbiByYWRpYW5zXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlICAgICBEaXN0YW5jZSB0byBtb3ZlXG4gKi9cblV0aWxzLm1vdmVJbkRpcmVjdGlvbiA9IGZ1bmN0aW9uKGRpcmVjdGlvbiwgdmFsdWUpIHtcbiAgdmFsdWUgLz0gMTAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgZm9yICh2YXIgYXhpcyBpbiBheGVzKSB7XG4gICAgICB0aGlzW2F4aXNdICs9IGF4ZXNbYXhpc10odGhpcy5kaXJlY3Rpb24pICogdmFsdWU7XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKlxuICogVXBkYXRlIHNoaXAgcG9zaXRpb24gd2l0aCBjdXJyZW50IGRpcmVjdGlvbiBhbmQgc3BlZWRcbiAqIEBwYXJhbSAge051bWJlcn0gZHQgVGltZSBkZWx0YSBmb3IgY3VycmVudCBmcmFtZSBpbiBzZWNvbmRzXG4gKi9cbkVOR0lORS5TaGlwLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oZHQpIHtcbiAgaWYgKCF0aGlzLmZyb3plbikge1xuICAgIFV0aWxzLm1vdmVJbkRpcmVjdGlvbi5hcHBseSh0aGlzLCBbdGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkdF0pO1xuICB9XG5cbiAgaWYgKHRoaXMuZm9yY2UgPiAwKSB7XG4gICAgdGhpcy5mb3JjZSAtPSAyMDAgKiBkdDtcbiAgICBVdGlscy5tb3ZlSW5EaXJlY3Rpb24uYXBwbHkodGhpcywgW3RoaXMuZm9yY2VEaXJlY3Rpb24sIHRoaXMuZm9yY2UgKiBkdF0pO1xuICB9XG59O1xuXG4vKipcbiAqIEZyYW1lIHN0ZXAgZm9yIGEgcGFydGljbGVcbiAqIEBwYXJhbSAge051bWJlcn0gZHQgVGltZSBkZWx0YSBmb3IgY3VycmVudCBmcmFtZSBpbiBzZWNvbmRzXG4gKi9cbkVOR0lORS5QYXJ0aWNsZS5wcm90b3R5cGUuc3RlcCA9IGZ1bmN0aW9uKGR0KSB7XG4gIHRoaXMubGlmZXRpbWUgKz0gZHQ7XG4gIC8vIFVwZGF0ZSBwb3NpdGlvblxuICBmb3IgKHZhciBheGlzIGluIGF4ZXMpIHtcbiAgICB0aGlzW2F4aXNdICs9IGF4ZXNbYXhpc10odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZCAqIGR0O1xuICB9XG4gIHRoaXMuc3BlZWQgPSBNYXRoLm1heCgwLCB0aGlzLnNwZWVkIC0gdGhpcy5kYW1waW5nICogZHQpO1xuXG4gIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxpZmV0aW1lIC8gdGhpcy5kdXJhdGlvbiwgMS4wKTtcbiAgLy8gUHV0IHBhcnRpY2xlIG9mZnNjcmVlbiBmb3IgcG9vbGluZyBhbmQgdG8ga2VlcCByZW5kZXIgdGltZSBjb25zdGFudFxuICBpZiAodGhpcy5wcm9ncmVzcyA+PSAxLjApIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIH1cbiAgLy8gVXBkYXRlIGluZGV4IGZvciBjdXJyZW50IHNwcml0ZSB0byByZW5kZXJcbiAgdGhpcy5zcHJpdGVJbmRleCA9IE1hdGguZmxvb3IodGhpcy5wcm9ncmVzcyAqIHRoaXMuc3ByaXRlcy5sZW5ndGgpO1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9