SUITE.run(app);

var SUITE = {

  fps: 0,

  run: function(app) {

    var canvas = document.create("Canvas");
    var context = canvas.getContext("2d");

    document.body.appendChild(canvas);

    app.create(canvas, context);

    var last = Date.now();

    function update() {

      requestAnimationFrame(update);

      var now = Date.now();
      var dt = (now - last) / 1000;
      last = now;

      app.step(dt);
      app.render(dt);

      SUITE.fps = 1000 / (Date.now() - now);

    }

    requestAnimationFrame(update);

  }

};