ENGINE.Collisions = function(entities) {

  this.entities = entities;

};

ENGINE.Collisions.prototype = {

  step: function(delta) {

    var details, collision;

    /* COLLIDABLE_B - bullets, crates - we put them first as they are less likely to be 24/7 in game */

    var groupA = this.entities.children;

    /* ships */

    var groupB = this.entities.children;

    for (var i = 0, lenA = groupA.length; i < lenA; i++) {


      var a = groupA[i];

      if (!a.collidable) continue;

      for (var j = 0, lenB = groupB.length; j < lenB; j++) {
        var b = groupB[j];

        if (!b.collidable) continue;

        if (a.index === b.index) continue;

        collision = false;

        if (a._remove || b._remove) continue;

        if (Math.abs(a.box[0] - b.box[0]) > a.box[2] + b.box[2]) continue;
        if (Math.abs(a.box[1] - b.box[1]) > a.box[3] + b.box[3]) continue;

        if (Utils.rectInRect(a.box[0], a.box[1], a.box[2], a.box[3], b.box[0], b.box[1], b.box[2], b.box[3])) {
          var mask = a.shape | b.shape;

          /* CIRCLE vs CIRCLE */

          if (mask === ENGINE.CIRCLE) {
            collision = (details = Utils.distance(a.x, a.y- a.z, b.x, b.y - b.z)) < a.radius + b.radius;
          }

          /* LINE vs CIRCLE */

          else if ((mask & ENGINE.CIRCLE) && (mask & ENGINE.LINE)) {

            var condition = a.shape & ENGINE.LINE;
            var line = condition ? a : b;
            var circle = condition ? b : a;


            var intersection = Utils.lineCircleIntersection(line.x, line.y, line.ex, line.ey, circle.x, circle.y, circle.radius);
            details = intersection;
            collision = intersection.intersects;
          }

          /* CIRCLE vs POINT */

          else if ((mask & ENGINE.CIRCLE) && (mask & ENGINE.POINT)) {

            var condition = a.shape & ENGINE.POINT;
            var point = condition ? a : b;
            var circle = condition ? b : a;

            collision = (details = Utils.distance(circle.x, circle.y, point.x, point.y)) < circle.radius;
          }

          /* RECT vs RECT */

          else if (mask === ENGINE.RECT) {
            collision = true;
          }

        }

        if (collision) {
          if (a.collision) a.collision(b, details);
          if (b.collision) b.collision(a, details);
        }

      }
    }

  }

};
