ENGINE.Smudge = function(args) {

  Utils.extend(this, {
    direction: 0,
    desiredDirection: 0,
    color: "#fff",
    points: [],
    speed: 700,
    rotationSpeed: 4,
    superRotationSpeed: 24,
    maxPoints: 10,
    lifespan: 5,
    width: 10
  }, args);

  this.delta = 0;

  this.waypoint = this.path.pop();
};

ENGINE.Smudge.prototype = {
  zIndex: 200,

  reaction: 8,

  step: function(delta) {

    this.delta += delta;



    if (this.waypoint) {
      this.desiredDirection = Utils.lookAt(this.x, this.y, this.waypoint[0], this.waypoint[1]);
      this.direction = Utils.circWrapTo(this.direction, this.desiredDirection, this.rotationSpeed * delta);

      if (Utils.distance(this.x, this.y, this.waypoint[0], this.waypoint[1]) < this.reaction + this.speed * delta) {
        this.firstWaypoint = false;
        this.waypoint = this.path.pop();
        this.rotationSpeed = this.superRotationSpeed;
      }


    } else {
      if ((this.lifespan -= delta) < 0 && !this.points.length) {
        this.collection.remove(this)
      };
    }

    if (this.lifespan < 0) this.speed += delta * 200;

    if (Utils.interval("point", 0.05, this)) {
      if (this.lifespan > 0) this.points.push(this.x, this.y);

      if (this.points.length > this.maxPoints * 2 || this.lifespan < 0) {
        this.points.shift();
        this.points.shift();
      }
    }



    this.x += Math.cos(this.direction) * this.speed * delta;
    this.y += Math.sin(this.direction) * this.speed * delta;

  },

  render: function() {

    app.layer.save();
    app.layer.strokeStyle(this.color);
    app.layer.lineCap("square");
    for (var i = 2; i < this.points.length; i += 2) {
      var px = this.points[i - 2];
      var py = this.points[i - 1];
      var nx = this.points[i];
      var ny = this.points[i + 1];
      app.layer.beginPath();
      app.layer.moveTo(px, py);
      app.layer.lineTo(nx, ny);
      // app.layer.a(i / 10);
      app.layer.lineWidth(i * 0.1 * this.width);
      app.layer.stroke();
    }

    app.layer.restore();


  }

};