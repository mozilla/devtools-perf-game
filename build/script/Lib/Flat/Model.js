FLAT.Model = function(description) {

  Utils.extend(this, {

    alpha: 1.0,
    wireframe: false,
    color: "#aaa",
    rotation: 0,
    scale: 1.0,
    globalScale: 1.0,
    roofStyle: "solid",
    overrideColor: false,
    x: 0.5,
    y: 0.5,
    pivotX: 0,
    pivotY: 0,
    pitch: 0,
    alignX: 0.5,
    alignY: 0.5,
    lightingStrength: 1.0,
    sides: true,
    roof: true,
    shadow: true,
    zOffset: 0,
    
    childrenShadow: false,

    wiggle: false,
    lineWidth: 3,
    hidden: false,

    bottomScale: 1.0,
    bottomScaleX: 1.0,
    bottomScaleY: 1.0,

    topScale: 1.0,
    topScaleX: 1.0,
    topScaleY: 1.0

  }, description);

  // this.outline = this.color;

  if (description.topScaleX === undefined) {
    this.topScaleX = this.topScale;
  }

  if (description.topScaleY === undefined) {
    this.topScaleY = this.topScale;
  }


  if (description.bottomScaleX === undefined) {
    this.bottomScaleX = this.bottomScale;
  }

  if (description.bottomScaleY === undefined) {
    this.bottomScaleY = this.bottomScale;
  }


  this.topScaleMod = this.topScaleX * this.topScaleY;
  this.bottomScaleMod = this.bottomScaleX * this.bottomScaleY;

  this.refresh();


};

FLAT.Model.prototype = {

  constructor: FLAT.Model,


  setTopScale: function(scale) {
    this.needRefresh = true;

    this.topScaleX = scale;
    this.topScaleY = scale;
    this.topScale = scale;
  },

  refresh: function() {
    this.darker = cq.color(this.color).shiftHsl(0, 0, -0.1).toHex();
    this.lighter = cq.color(this.color).shiftHsl(0, 0, +0.25).toHex();

    this.top = this.copy(this.surface);
    this.bottom = this.copy(this.surface);

    this.adjustPolygon(this.top);
    this.adjustPolygon(this.bottom);

    this.scalePolygon(this.top, this.scale * this.topScaleX, this.scale * this.topScaleY);
    this.scalePolygon(this.bottom, this.scale * this.bottomScaleX, this.scale * this.bottomScaleY);

    this.scalePolygon(this.top, this.globalScale);
    this.scalePolygon(this.bottom, this.globalScale);

    this.children = [];

    var data = this.getPolygonData(this.surface);

    this.width = this.scale;
    this.depth = data.height;

    //this.board = cq.color(this.color).shiftHsl(0, 0, -0.3).a(0.8).toRgba();

    if (this.roof === true) this.roof = {};

    if (this.roof) {
      Utils.defaults(this.roof, {
        fill: this.color,
        stroke: this.color,
        lineWidth: this.lineWidth
      });
    }

  },

  getPoint: function(x, y, z) {

    return {
      x: this.topCenterX,
      y: this.topCenterY
    };

    return {
      x: this.topCenterX + Math.cos(rotation) * this.topData.width * x,
      y: this.topCenterY + Math.sin(rotation) * this.topData.height * y
    }
  },

  applyPivot: function(polygon, amountX, amountY) {
    var data = this.getPolygonData(polygon);


    amountX = (1 - Math.abs(amountX));
    amountY = (1 - Math.abs(amountY));

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      if (amountX) {
        vertex[1] *= amountX;
        vertex[1] += data.centerY * (1 - amountX);
      }

      if (amountY) {
        vertex[0] *= amountY;
        vertex[0] += data.centerX * (1 - amountY);
      }
    }

    return this.adjustPolygon(polygon);
  },

  applyPivotY: function(polygon, amount) {
    var data = this.getPolygonData(polygon);

    amount = (1 - Math.abs(amount));

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      var distance = vertex[0] / data.width;

      vertex[0] *= amount * distance;
      vertex[0] += data.centerX * (1 - amount);
    }

    return this.adjustPolygon(polygon);
  },


  xpivotX: function(polygon, amount) {
    var data = this.getPolygonData(polygon);

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];


      var distance = Math.abs(vertex[1] - data.centerY);

      if (amount < 0) {
        /*
        if (vertex[1] < data.centerY) {
          vertex[1] -= amount * distance * 0.5;
        } else {
          vertex[1] += amount * distance * 0.5;
        }
        */
      } else {

      }

      if (vertex[1] < data.centerY) {
        vertex[1] += Math.abs(amount) * distance * 0.5;
      } else {
        vertex[1] -= Math.abs(amount) * distance * 0.5;
      }

    }

    return polygon;
  },

  add: function(description) {

    var model = new FLAT.Model(Utils.extend({}, description, {
      globalScale: this.globalScale,
      height: description.height * description.scale,
      parent: this,
      pivot: this.pivot,
      root: this.root || this
    }));

    this.children.push(model);

    return model;
  },

  adjustPolygon: function(polygon) {

    var data = this.getPolygonData(polygon);

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      vertex[0] -= data.left;
      vertex[1] -= data.top;
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

    data.centerX = data.width * this.alignX;
    data.centerY = data.height * this.alignY;

    return data;
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

  rotatePolygon: function(polygon, angle) {

    var data = this.getPolygonData(polygon);

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      polygon[i] = Utils.rotate(vertex[0], vertex[1], data.centerX, data.centerY, angle);

    }

    return polygon;
  },

  rotatePolygon2: function(polygon, angle, x, y) {

    var data = this.getPolygonData(polygon);

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      polygon[i] = Utils.rotate(vertex[0], vertex[1], x, y, angle);

    }

    return polygon;
  },

  rotatePolygonZ: function(polygon, amount) {

    var data = this.getPolygonData(polygon);
    var angle = Math.PI * amount;

    for (var i = 0; i < polygon.length; i++) {

      var vertex = polygon[i];

      // vertex[1] -= (vertex[1] - data.centerY) * Math.sin(0.5 * Math.PI * amount);
      vertex[1] -= (vertex[1] - data.centerY) * amount;

      // vertex[1] = vertex[1] * Math.cos(angle);
      //vertex[0] = vertex[0] * Math.sin(angle) + vertex[1] * Math.cos(angle);


    }

    return polygon;
  },


  sortPolygon: function(polygon) {

    polygon.sort(function(a, b) {
      if (a[1] != b[1]) return a[1] - b[1];
      else return a[0] - b[0];

    });

  },

  getOrder: function(polygon) {

    var copy = this.copy(polygon);
    var result = [];

    for (var i = 0; i < copy.length; i++) {
      copy[i].i = i;
    }

    this.sortPolygon(copy);

    for (var i = 0; i < copy.length; i++) result.push(copy[i].i);

    return result;
  },


  copy: function(polygon) {
    var result = [];

    for (var i = 0; i < polygon.length; i++) {
      result.push([polygon[i][0], polygon[i][1]]);
    }

    return result;
  },

  shades: {},

  getColor: function(color, distance, func) {

    if (this.overrideColor) return this.overrideColor;

    if (!this.shades[color]) this.shades[color] = {};

    distance = (distance / 0.15 | 0) * 0.15;

    if (!this.shades[color][distance]) {

      var tempColor = cq.color(color);

      if (!func)
        this.shades[color][distance] = tempColor.shiftHsl(-distance * 0.1, -distance * 0.2, -distance * 0.3).toHex();
      else
        this.shades[color][distance] = tempColor.shiftHsl(0, 0, -distance * 0.2).toHex();

    }

    return this.shades[color][distance];
  },

  render: function(layer, x, y, z, rotation, pivotX, pivotY, pitch) {

    if (this.clip) z -= this.height;

    if (this.needRefresh) {
      this.refresh();
      this.needRefresh = false;
    }

    if (this.hidden) return;

    z += this.zOffset;

    pivotX = pivotX || 0;
    pivotY = pivotY || 0;
    rotation = rotation || 0;
    pitch = pitch || 0;

    rotation += this.rotation;
    pivotX += this.pivotX;
    pivotY += this.pivotY;
    pitch = this.pitch;

    layer.lineCap("round").lineJoin("round").lineWidth(this.lineWidth);

    var bakedTop = this.copy(this.top);
    var bakedBottom = this.copy(this.bottom);

    this.bakedTop = bakedTop;
    //this.scalePolygon(bakedBottom, app.game.sinmod(4) * 2);

    if (pivotX || pivotY) {
      this.applyPivot(bakedTop, pivotX, pivotY);
      this.applyPivot(bakedBottom, pivotX, pivotY);
    }

    var topData = this.getPolygonData(bakedTop);
    var bottomData = this.getPolygonData(bakedBottom);

    this.topData = topData;

    this.rotatePolygon(bakedTop, rotation);
    this.rotatePolygon(bakedBottom, rotation);

    if (this.wiggle) var s = 0.8 + app.game.sinmod(2, 2) * 0.2;
    else var s = 1.0;

    this.finalHeight = this.height * s;
    this.wobbleHeight = this.height - this.height * s;

    // this.rotatePolygonZ(bakedTop, s);
    // this.rotatePolygonZ(bakedBottom, s);

    //this.translatePolygon(bakedTop, -topData.centerX, -topData.centerY - this.height * s * this.globalScale);
    this.translatePolygon(bakedTop, -topData.centerX, -topData.centerY - this.finalHeight);

    if (pivotX) {
      var angle = rotation + Math.PI / 2;

      //      (Math.PI * 0.5 * (pivotX > 0 ? -1 : 1));
      var r = pivotX * this.height * 2;

      this.pivotXAngle = angle;
      this.pivotRange = r;

      //if (pivotX > 0) r *= 2.5;

      this.translatePolygon(bakedTop, Math.cos(angle) * r, Math.sin(angle) * r);
      // this.translatePolygon(bakedBottom, Math.cos(angle) * r, Math.sin(angle) * r);


    }

    if (pivotY) {
      var angle = rotation;

      //      (Math.PI * 0.5 * (pivotX > 0 ? -1 : 1));
      var r = pivotY * this.height * 2;

      this.pivotYAngle = angle;
      this.pivotRange = r;

      //if (pivotX > 0) r *= 2.5;

      this.translatePolygon(bakedTop, Math.cos(angle) * r, Math.sin(angle) * r);
      // this.translatePolygon(bakedBottom, Math.cos(angle) * r, Math.sin(angle) * r);



    }

    this.translatePolygon(bakedBottom, -bottomData.centerX, -bottomData.centerY);

    if (this.parent && (this.root.childrenShadow || this.childrenShadow)) this.renderPolygon(bakedBottom, layer, x, y - z + 2, false, "rgba(0,0,0,0.5)", 4);

    if ((this.shadow && z > 0 && !this.parent) || this.forceShadow) {
      //this.renderPolygon(bakedBottom, layer, x, y - z + 50, "rgba(0,0,0,0.5)", false);
      this.renderPolygon(this.topScaleMod > this.bottomScaleMod ? bakedTop : bakedBottom, layer, x, y, "rgba(0,0,0,0.5)", false);
    }


    /* values for children */

    if (pivotX) {
      this.offsetX = Math.cos(this.pivotXAngle) * this.pivotRange;
      this.offsetY = Math.sin(this.pivotXAngle) * this.pivotRange;
    }

    if (pivotY) {
      this.offsetX = Math.cos(this.pivotYAngle) * this.pivotRange;
      this.offsetY = Math.sin(this.pivotYAngle) * this.pivotRange;
    }

    if (!pivotX && !pivotY) {
      this.offsetX = 0;
      this.offsetY = 0;
    }

    if (pitch) {
      var angle = pitch * Math.PI * 2;
      //this.translatePolygon(bakedTop, -topData.centerX, -topData.centerY)
      //this.rotatePolygon(bakedTop, pitch * Math.PI * 2);

      var cx = (bottomData.centerX - topData.centerX) / 2;
      var cy = (bottomData.centerY - topData.centerY) / 2;

      this.rotatePolygon2(bakedTop, angle, cx, cy);

      this.scalePolygon(bakedTop, Math.cos(pitch * Math.PI * 0.5), Math.sin(pitch * Math.PI * 0.5));


      // this.translatePolygon(bakedBottom, -bottomData.centerX, -bottomData.centerY)
      this.rotatePolygon2(bakedBottom, angle, cx, cy);


      // this.scalePolygon(bakedBottom, Math.cos(angle) * 0.5 + 0.5, Math.sin(angle) * 0.5 + 0.5);
      //this.rotatePolygon(bakedBottom, pitch * Math.PI * 2);
    }

    this.topCenterX = this.offsetX + x;
    this.topCenterY = this.offsetY - this.finalHeight + y - z;

    /* pre children */

    for (var i = 0; i < this.children.length; i++) {

      var c = this.children[i];

      if (!c.pre) continue;

      var childX = Math.cos(rotation) * (c.x - 0.5) * this.width;
      var childY = Math.sin(rotation) * (c.x - 0.5) * this.width;

      c.render(layer, childX + this.offsetX + x, childY + this.offsetY + y, z + this.finalHeight, rotation, pivotX, pivotY, pitch);
    }


    /* render outline */

    if (this.clip) {
      layer.save();
      var temp = this.copy(bakedTop);
      this.translatePolygon(temp, 0, -z);
      layer.polygon(temp);
      layer.clip();
    }


    if (this.outline) {
      this.renderPolygon(bakedBottom, layer, x, y - z, false, this.outline, this.lineWidth * 2);
      this.renderPolygon(bakedTop, layer, x, y - z, false, this.outline, this.lineWidth * 2);
    }


    /* render walls */

    var order = this.getOrder(bakedBottom);
    this.order = order;

    // layer.setLineDash([30, 30])

    layer.save();
    layer.translate(x | 0, y - z | 0);

    if (this.alpha < 1) layer.a(this.alpha);

    if (this.sides || this.wireframe) {
      for (var j = 0; j < order.length; j++) {

        var i = order[j];

        if (rotation > Math.PI && pivotX > 0)
          var ni = Utils.wrap(i + 1, 0, bakedTop.length);
        else if (rotation < Math.PI && pivotX < 0)
          var ni = Utils.wrap(i + 1, 0, bakedTop.length);
        else if (rotation > Math.PI && rotation < Math.PI * 1.5)
          var ni = Utils.wrap(i + 1, 0, bakedTop.length);
        else if (rotation < Math.PI * 0.5)
          var ni = Utils.wrap(i + 1, 0, bakedTop.length);
        else
          var ni = Utils.wrap(i - 1, 0, bakedTop.length);

        var top = bakedTop[i];
        var bottom = bakedBottom[i];
        var topNext = bakedTop[ni];
        var bottomNext = bakedBottom[ni];


        var distance = 0.5 * Math.min(this.lightingStrength, (bottom[1] + bottomData.centerY) / bottomData.height);
        distance += 0.25 * Math.min(this.lightingStrength, (bottom[0] + bottomData.centerX) / bottomData.width);
        distance = Math.max(0, distance);
        // distance = Math.max(0.5, distance);


        // var distance = 1 - Math.min(1, (bottom[1] + bottomData.centerY) / bottomData.height);

        // var distance = bottom[0] / bottomData.height;

        /*
              var rni = Utils.wrap(i - 1, 0, bakedTop.length);

              var a = Utils.atanxy(bakedBottom[ni][0] - bakedBottom[i][0], bakedBottom[ni][1] - bakedBottom[i][1]) / (Math.PI);
              distance = Math.abs(Utils.circWrappedDistance(Utils.wrap(a, 0, 1), 0));

              */

        var color = this.getColor(this.color, distance);
        // var distance = Utils.distance(bottom[0] + bottomData.centerX, bottom[1] + bottomData.centerY, bottomData.centerX, bottomData.height) / bottomData.height;

        layer.fillStyle(color);
        // layer.strokeStyle("rgba(255,255,0,0.2)");

        var poly = [
          [top[0] | 0, top[1] | 0],
          [bottom[0] | 0, bottom[1] | 0],
          [bottomNext[0] | 0, bottomNext[1] | 0],
          [topNext[0] | 0, topNext[1] | 0]
        ];


        layer.beginPath();

        layer.moveTo(top[0] | 0, top[1] | 0);
        layer.lineTo(bottom[0] | 0, bottom[1] | 0);
        layer.lineTo(bottomNext[0] | 0, bottomNext[1] | 0);
        layer.lineTo(topNext[0] | 0, topNext[1] | 0);

        /*
              layer.moveTo(top[0] | 0, top[1] | 0);
              layer.lineTo(topNext[0] | 0, topNext[1] | 0);
              layer.lineTo(bottomNext[0] | 0, bottomNext[1] | 0);
              layer.lineTo(bottom[0] | 0, bottom[1] | 0);
        */
        layer.closePath();
        if (this.wireframe) layer.strokeStyle(this.color).stroke();
        if (this.sides) layer.fill();

      }

    }

    if (this.texture) {
      layer.rotate(rotation);
      layer.scale(0.9, 0.9)
      layer.drawImage(this.texture, -this.texture.width / 2, -this.texture.height / 2);
    }

    layer.restore();

    if (this.roof) {
      var fill = false;
      var stroke = false;

      if (this.roof.fill) fill = this.getColor(this.roof.fill, this.pivotY, true);
      if (this.roof.stroke) stroke = this.getColor(this.roof.stroke, this.pivotY, true);
      if (this.roof.alpha === undefined) this.roof.alpha = 1.0;

      this.renderPolygon(bakedTop, layer, x, y - z, fill, stroke, this.roof.lineWidth, this.roof.alpha);

    }

    for (var i = 0; i < this.children.length; i++) {

      var c = this.children[i];

      if (c.pre) continue;

      var childX = Math.cos(rotation) * (c.x - 0.5) * this.width;
      var childY = Math.sin(rotation) * (c.x - 0.5) * this.width;

      c.render(layer, childX + this.offsetX + x, childY + this.offsetY + y, z + this.finalHeight, rotation, pivotX, pivotY);
    }


    if (this.clip) layer.restore();

    this.ready = true;
    // layer.fillStyle("#ff0").fillCircle(x, y, 4);
  },

  renderPolygon: function(polygon, layer, x, y, fill, stroke, lineWidth, alpha) {


    if (lineWidth === undefined) lineWidth = this.lineWidth;
    if (alpha === undefined) alpha = 1.0;

    layer.save();

    layer.lineWidth(lineWidth);
    layer.translate(x | 0, y | 0);

    layer.a(this.alpha * alpha);

    layer.beginPath();
    layer.moveTo(polygon[0][0] | 0, polygon[0][1] | 0)

    for (var i = 1; i < polygon.length; i++) {
      layer.lineTo(polygon[i][0] | 0, polygon[i][1] | 0);
    }

    layer.closePath();
    //layer.globalCompositeOperation("source-over")
    //layer.fillStyle("#000").fill();

    //layer.globalCompositeOperation("overlay")
    //layer.fillStyle("#000").fill();
    //layer.lineWidth(4).strokeStyle("#fff").stroke();

    if (stroke) layer.ra().strokeStyle(stroke).stroke();
    if (fill) layer.fillStyle(fill).fill();



    for (var i = 0; false && i < polygon.length; i++) {
      var t = this.order.indexOf(i) + "/" + i;
      layer.fillStyle("#000")
      layer.fillText(t, polygon[i][0], polygon[i][1]);

      layer.fillStyle("#fff")
      layer.fillText(t, polygon[i][0], polygon[i][1] - 1);
    }

    layer.restore();

  }



};