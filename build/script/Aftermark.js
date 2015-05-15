ENGINE.Aftermark = {

  preheated: false,
  allResults: [],

  create: function() {

    app.layer.width = app.width = 640;
    app.layer.height = app.height = 640;
    //    app.layer.canvas.style.display = "none";

    ENGINE.Game.benchmark = true;
    ENGINE.Game.enter();

    if (!this.preheated) {
      ENGINE.Game.preheatScenario();
    } else {
      ENGINE.Game.benchmarkScenario();
    }

    this.qqq = 0;
    this.timeSum = 0;
    this.stepsPerLoop = 1;
    this.finishAt = this.stepsPerLoop * 1000;
    this.frameResults = [];

  },

  getAverage: function(frameResults) {

    var sum = 0;

    for (var i = 0; i < frameResults.length; i++) sum += frameResults[i];

    return sum / frameResults.length;

  },

  filterOut: function(results, tolerance) {
    var avg = this.getAverage(results);

    var toleranceAbs = avg * tolerance;

    for (var i = 0; i < results.length; i++) {

      if (Math.abs(results[i] - avg) > toleranceAbs) results.splice(i--, 1);

    }
  },

  getScore: function() {

    this.filterOut(this.frameResults, 0.25)

    var avg = this.getAverage(this.frameResults);


    if (!isNaN(avg)) {

      this.checkGlobalResults(avg);

    }

  },

  checkGlobalResults: function(avg) {

    this.allResults.push(avg);

    if (this.allResults.length > 50) {

      /*

      this.allResults.shift();

      var avg = this.getAverage(this.allResults);
      var diff = Utils.max(this.allResults) - Utils.min(this.allResults);
      var pc = (diff / avg) * 100;
      console.log(avg, diff, (pc | 0) + "%");
      */
      this.filterOut(this.allResults, 0.1)

      var avg = this.getAverage(this.allResults);
      console.log(avg)
      app.setState({});
    }

  },

  tick: false,

  step: function(dt) {

    this.tick = !this.tick;

    if (this.tick) return;

    var now = performance.now();

    var loops = this.preheated ? 10 : 5;

    for (var i = 0; i < loops; i++) {

      this.qqq++;

      ENGINE.Game.step(0.1);
      ENGINE.Game.render(0.1);

    }

    if (this.preheated) {

      var frameTime = performance.now() - now;

      this.frameResults.push(frameTime);

      if (this.qqq >= 10) {

        this.getScore();

        this.create();

      }
    }

    if (!this.preheated && this.qqq >= 110) {
      this.preheated = true;
      this.qqq = 0;
      ENGINE.Game.benchmarkScenario();

    }

  }


};