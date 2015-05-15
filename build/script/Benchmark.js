ENGINE.Benchmark = {

  create: function() {

    this.gradient = app.layer.createRadialGradient(app.center.x, app.center.y, 0, app.center.x, app.center.y, app.center.x);
    this.gradient.addColorStop(0.0, "transparent");
    this.gradient.addColorStop(1.0, "#000");


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
  },

  enter: function() {
    this.iotaCount = this.app.baseline ? Math.floor(this.app.baseline * 0.7) : 1;
    this.app.baseline = 0;
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'benchmark',
      'eventAction': 'start'
    });
    this.reset();
  },

  // Called between benchmark loops
  reset: function() {
    this.steps = 0;
    this.frameTimes.length = 0;
    this.skipCount = 0;
    // JIT warmup settings (run unbound loops)
    if (!this.didWarmup) {
      this.app.unbound = true;
      this.app.immidiate = false;
    } else {
      this.app.unbound = false;
      this.app.immidiate = true;
    }
    if (this.iotaList.length == 0) {
      this.addIotas(this.iotaCount);
    }
  },

  step: function(dt) {
    this.iotaList.forEach(function(iota) {
      iota.step(dt);
    });

    if (!this.didWarmup) {
      // State: JIT Warmup
      this.stepWarmUp();
    } else if (app.frameTime) {
      // Stresstesting
      this.stepStressTest()
    }
  },

  stepWarmUp: function() {
    this.steps++;
    if (this.steps > 1100) {
      this.app.unbound = false;
      this.app.immidiate = true;
      this.didWarmup = true;
    }
  },

  stepStressTest: function() {
    var add = 1;
    var frameTimes = this.frameTimes;
    var MAX_FRAMES = 45;
    var MIN_FRAMES = 15;
    var COST = 8;
    var ERROR = 0.25;
    var frameTime = app.frameTime;
    if (frameTimes.unshift(frameTime) > MAX_FRAMES) {
      frameTimes.length = MAX_FRAMES;
    }
    if (frameTimes.length >= MIN_FRAMES) {
      var sample = this.analyze(frameTimes);
      var score = this.iotaList.length;
      if (!this.runCount) {
        console.log(score + ';' + frameTime.toFixed(2));
      }
      if (sample.rse <= ERROR && sample.mean > COST) {
        this.pushScore(score);
        return;
      }
      if (sample.rse > ERROR || sample.mean > COST) {
        console.log('Skip #' + this.skipCount);
        this.skipCount++;
        if (this.skipCount > 60) {
          console.log(
            '[RESET STEP] High sampling error %f%% or mean %fms for %d entities.',
            sample.rse * 100, sample.mean, score
          );
          this.iotaCount = Math.floor(this.lastScore * 0.7);
          this.skipResetCount++;
          if (this.skipResetCount > 10) {
            ga('send', {
              'hitType': 'event',
              'eventCategory': 'benchmark',
              'eventAction': 'skipResetCount'
            });
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
    var SAVE_SCORES = 5;
    var MIN_SCORES = 10;
    var MAX_SCORES = 15;
    var ERROR = 0.05;

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
        ga('send', {
          'hitType': 'event',
          'eventCategory': 'benchmark',
          'eventAction': 'baseline',
          'eventValue': Number(this.app.baseline),
          'nonInteraction': true
        });
        ga('send', {
          'hitType': 'event',
          'eventCategory': 'benchmark',
          'eventAction': 'baseline-std-error',
          'eventValue': Number(this.app.baselineErr),
          'nonInteraction': true
        });
        ga('send', {
          'hitType': 'event',
          'eventCategory': 'benchmark',
          'eventAction': 'runs',
          'eventValue': this.runCount,
          'nonInteraction': true
        });
        this.scores.splice(SAVE_SCORES);
        this.finalize(false);
        return;
      } else {
        console.log(
          '[SCORE RESET] Standard error %f%% too high in score samples.',
          rse * 100
        );
        this.resetCount++;
        if (this.resetCount > 10) {
          this.scores.splice(0);
          console.log(
            '[BAIL] Too many [RESET SCORE].',
            rse * 100
          );
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
      this.app.setState(ENGINE.Game);
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
    layer.clear("#222");

    app.layer.fillStyle(this.gradient).fillRect(0, 0, app.width, app.height);

    this.iotaList.forEach(function(iota) {
      iota.render(layer);
    });



    layer
      .fillStyle('#fff')
      .font("14px 'arial'")
      .fillText('Stress test #' + this.runCount, 5, 15)
      .fillText('Entities: ' + this.iotaList.length, 5, 30)
      .fillText('Frametime:' + app.frameTime.toFixed(1), 5, 45);
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

  scorePerformance: function(frameTime, referenceCount) {
    var FRAMES = 60;
    var score = frameTime / referenceCount;
    var scoreStack = this.scoreStack;
    if (scoreStack.unshift(sample) > FRAMES) {
      scoreStack.length = FRAMES;
    }
    if (scoreStack.length < FRAMES) {
      return 0.0;
    }
    var sample = this.analyze(scoreStack);

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

  render: function(layer) {


    layer.save();
    layer.translate(this.x | 0, this.y | 0);
    layer.align(0.5, 0.5);
    // layer.a(this.alpha);
    layer.fillStyle("#f00").fillRect(this.x, this.y, 64, 64);
    layer.fillStyle("#fff").fillCircle(this.x, this.y, 64 * this.alpha);
    layer.rotate(this.angle);
    layer.drawRegion(app.images.spritesheet, this.region, 0, 0);
    layer.restore();
  },

  destroy: function() {
    this.app = null;
    this.parent = null;
  }
}