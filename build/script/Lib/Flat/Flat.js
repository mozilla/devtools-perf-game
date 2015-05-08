FLAT = {

  star: [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ],

  distance: function(x1, y1, x2, y2) {
    if (arguments.length > 2) {
      var dx = x1 - x2;
      var dy = y1 - y2;

      return Math.sqrt(dx * dx + dy * dy);
    } else {
      var dx = x1.x - y1.x;
      var dy = x1.y - y1.y;

      return Math.sqrt(dx * dx + dy * dy);
    }
  },

  copyPolygon: function(polygon) {
    var result = [];

    for (var i = 0; i < polygon.length; i++) {
      result.push([polygon[i][0], polygon[i][1]]);
    }

    return result;
  },

  translatePolygon: function(polygon, x, y) {

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      vertex[0] += x;
      vertex[1] += y;
    }

    return polygon;
  },

  scalePolygon: function(polygon, scaleX, scaleY) {

    var separate = scaleY !== undefined;

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      if (separate) {
        vertex[0] *= scaleX;
        vertex[1] *= scaleY;
      } else {
        vertex[0] *= scaleX;
        vertex[1] *= scaleX;
      }
    }

    return polygon;
  },


  randomPolygon: function(vertices) {

    var angleStep = Math.PI * 2 / vertices;

    var polygon = [];

    var angleOffset = Math.PI * 2 * Math.random();

    for (var i = 0; i < vertices; i++) {

      var angle = angleOffset + i * angleStep - Math.random() * angleStep * 0.5;
      var r = 0.5 + Math.random() * 0.5;
      var x = Math.cos(angle) * r;
      var y = Math.sin(angle) * r;

      polygon.push([x, y]);

    }

    this.trimPolygon(polygon);
    this.normalizePolygon(polygon);

    return polygon;
  },

  regularPolygon: function(vertices) {

    var angleStep = Math.PI * 2 / vertices;

    var polygon = [];

    for (var i = 0; i < vertices; i++) {

      var angle = i * angleStep;
      var x = 0.5 + Math.cos(angle) * 0.5;
      var y = 0.5 + Math.sin(angle) * 0.5;

      polygon.push([x, y]);

    }

    return polygon;
  },

  trimPolygon: function(polygon) {

    var data = this.getPolygonData(polygon);

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      vertex[0] -= data.left;
      vertex[1] -= data.top;
    }

    return polygon;

  },

  normalizePolygon: function(polygon) {

    var data = this.getPolygonData(polygon);

    var proportion = data.width / data.height;
    var proportion = Math.max(data.width, data.height);
    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      vertex[0] /= proportion;
      vertex[1] /= proportion;

      // vertex[0] *= proportion;

    }

    return polygon;

  },

  setPolygonQuality: function(polygon, quality) {

    var maxRange = quality;
    var minRange = 1 - quality;

    var next = [];

    for (var i = 0; i < polygon.length; i++) {

      var a = polygon[i];
      var b = polygon[i + 1];

      if (!b) break;

      var distance = this.distance(a[0], a[1], b[0], b[1]);

      if (distance > minRange) continue;

      next.push(a);

    }


    return next;

  },

  scalePolygon: function(polygon, scaleX, scaleY) {

    var separate = scaleY !== undefined;

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      if (separate) {
        vertex[0] *= scaleX;
        vertex[1] *= scaleY;
      } else {
        vertex[0] *= scaleX;
        vertex[1] *= scaleX;
      }
    }

    return polygon;
  },

  getPolygonData: function(polygon) {

    var data = {
      left: false,
      right: false,
      top: false,
      bottom: false
    };

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      if (data.left === false || vertex[0] < data.left) data.left = vertex[0];
      if (data.right === false || vertex[0] > data.right) data.right = vertex[0];
      if (data.top === false || vertex[1] < data.top) data.top = vertex[1];
      if (data.bottom === false || vertex[1] > data.bottom) data.bottom = vertex[1];

    }

    data.width = Math.abs(data.left - data.right);
    data.height = Math.abs(data.top - data.bottom);

    data.centerX = data.width / 2;
    data.centerY = data.height / 2;

    return data;
  },

  vectorize: function(image) {

    var mask = cq(image).colorToMask("#fff");
    var width = image.width;
    var height = image.height;

    var visited = [];

    for (var i = 0; i < mask.length; i++) visited[i] = false;

    /* step one - find any non transparent pixel */

    var start = -1;

    for (var i = 0; i < mask.length; i++) {

      if (mask[i]) {
        start = i;
        break;
      }

    }

    /* step two - GO GO GO */

    var i = start;
    var prev = start;
    var prevOffset = -1;

    if (start < 0) {
      throw "There is no start";
      return;
    }

    var done = false;

    var path = [];
    var push = false; /* push if we are going out of straight line */

    while (!done) {

      /* find next */

      visited[i] = true;

      var x = i % width;
      var y = i / width | 0;

      /* push previous point - not current - because we want 
         a pixel right before changing the direction */
         
      if (push) path.push([prev % width, prev / width | 0]);

      var hasNext = false;
      push = false;

      for (var j = 0; j < this.star.length; j++) {

        var offset = this.star[j];

        var nx = x + offset[0];
        var ny = y + offset[1];

        if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;

        var ni = ny * width + nx;

        if (!visited[ni] && mask[ni]) {
          prev = i;
          i = ni;
          hasNext = true;

          /* here we can already detect straight lines using offset */

          if (j !== prevOffset) {
            prevOffset = j;
            push = true;
          }

          break;
        } else if (ni === start && prev !== start) {
          hasNext = true;
          done = true;
          break;
        }

      }

      if (!hasNext) {
        throw new Exception("there is a hole in a path");
        break;
      }

    }

    return path;

  },

  optimizePolygon: function(polygon) {
    var result = [];

    for (var i = 0; i < polygon.length - 1; i++) {
      var a = polygon[i];

      result.push(a);

      var conflict = false;
      var b = polygon[i + 1];

      if ((d = Utils.distance(a[0], a[1], b[0], b[1])) < 0.01) {
        conflict = true;
      }

      if (conflict) result.pop();
    }

    return result;
  },

  polygonFromImage: function(image) {

    if (!image.vectorized) {

      var temp = cq.temp(image);

      var transparent = temp.getPixel(0, 0);
      temp.trim(transparent);
      temp.removeColor(transparent);
      var texture = temp.cache();
      temp.outline();

      var path = this.vectorize(temp.canvas);

      var normalized = this.normalizePolygon(path);

      //    normalized = this.optimizePolygon(normalized);
      //    console.log("OPTIMIZATION RESULT", 100 * path.length / normalized.length);

      image.vectorized = normalized;
    }


    return image.vectorized;

    return {
      model: normalized,
      texture: texture
    };
  },


  buffer: []



}