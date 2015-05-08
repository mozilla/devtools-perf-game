GUI.Element = function(args) {

  ENGINE.Events.call(this);

  Utils.extend(this, {
    layer: GUI.layer,
    font: "16px arial",
    fontSize: 32,
    padding: 0,
    scroll: 0,
    textAlign: "left",
    color: "#fff",
    background: false,
    x: 0,
    y: 0,
    zIndex: 0,
    children: [],
    dragging: false,
    textShadow: false,
    textShadowOffsetY: 1,
    scale: 1.0,
    hidden: false
  }, args);

  this.realX = this.targetX = this.x;
  this.realY = this.targetY = this.y;

  this.font = this.fontSize + "px 'Squada One'";

  if (args.style) Utils.extend(this, GUI.styles[args.style]);

  Utils.extend(this, args);

  var temp = cq.temp();

  temp.font(this.font);

  this.fontHeight = temp.fontHeight()
  this.lineHeight = this.fontHeight + 4;

  if (this.height) {
    this.scrollable = true;
  }

  if (this.text) {

    if (!this.width) {
      this.autosize = true;
      this.width = temp.measureText(this.text).width + this.padding * 2;
      if (!this.height) this.height = this.lineHeight + this.padding * 2;
    } else if (!this.height) {
      this.wordwrap = true;
      this.height = temp.textBoundaries(this.text, this.width - this.padding * 2).lines * this.lineHeight + this.padding * 2;
    }

  }

  this.refresh();

  this.notes = new ENGINE.StackableNotes(this);

};

GUI.Element.prototype = {

  textAlignToRatio: {
    left: 0,
    center: 0.5,
    right: 1.0
  },

  align: function(x, y) {

    var parent = this.parent || app;
    var padding = parent.padding || 0;

    var pos = Utils.align(0, 0, parent.width - padding * 2, parent.height - padding * 2, this.width, this.height, x, y, x, y);

    if (x) this.x = pos.x;
    if (y) this.y = pos.y;

  },

  add: function(constructor, args) {

    if (constructor.constructor === Object) {
      args = constructor;
      constructor = GUI.Element;
    }

    if (typeof constructor === "object") {
      var element = constructor;
      element.parent = this;
      element.layer = this.layer;
    } else {
      var element = new constructor(Utils.extend({
        parent: this,
        layer: this.layer
      }, args));
    }

    this.children.push(element);

    return element;
  },

  remove: function(element) {

    var index = this.children.indexOf(element);

    this.children.splice(index, 1);

  },

  step: function(delta) {

    this.animatePosition(delta);

    for (var i = 0; i < this.children.length; i++) {

      this.children[i].step(delta);

    }


    if (this.tooltipElement) {
      this.tooltipElement.step(delta);
    }

    this.notes.step(delta);
  },

  contains: function(x, y) {
    return Utils.pointInRect(x, y, this.x, this.y, this.width, this.height);
  },

  showTooltip: function() {

    if (!this.tooltip) return;

    var tooltip = new GUI.Element({
      text: this.tooltip,
      x: this.x + this.width / 2 - this.width,
      y: this.y,
      width: this.width * 2,
      background: "#003",
      fontSize: 14,
      wordwrap: true,
      padding: 8
    });

    tooltip.y = this.y - tooltip.height;
    tooltip.cancelAnimation();
    tooltip.y = this.y - tooltip.height - 16;

    this.tooltipElement = tooltip;

  },

  hideTooltip: function() {
    if (!this.tooltip) return;

    this.tooltipElement = false;

  },

  mousedown: function(e) {

    this.pressedElement = this.hoveredElement;
    this.pressedElement.pressed = true;
    this.pressedElement.trigger("mousedown", this.pressedElement);

    this.pressedElement.mouseDownPosition = {
      x: e.x,
      y: e.y
    };

    return this.pressedElement;

  },

  getElementUnderCursor: function(x, y) {

    if (x < 0 || y < 0 || x > this.width || y > this.height) return false;

    var result = this;

    x -= this.padding;
    y -= this.padding;

    for (var i = this.children.length - 1; i >= 0; i--) {

      var element = this.children[i];

      if (element.contains(x, y)) {
        return element.getElementUnderCursor(x - element.x, y - element.y);
      }
    }

    return result;
  },


  mouseup: function(e) {

    if (this.pressedElement) {

      /* draggable */

      if (this.pressedElement.dragging) {
        this.pressedElement.dragging = false;
        this.pressedElement.trigger("drop", this.pressedElement, {
          x: e.x,
          y: e.y
        });
      }

      this.pressedElement.trigger("mouseup", this.pressedElement);
      this.pressedElement.pressed = false;

      this.pressedElement = false;

    }


  },

  mousemove: function(e) {

    var element = this.getElementUnderCursor(e.x - this.x, e.y - this.y);

    var prevHoveredElement = this.hoveredElement;

    if (element) {

      this.hoveredElement = element;

    } else {

      this.hoveredElement = false;

    }

    if (prevHoveredElement && this.hoveredElement !== prevHoveredElement) {
      prevHoveredElement.trigger("mouseleave", prevHoveredElement);
      prevHoveredElement.hovered = false;
      prevHoveredElement.hideTooltip();

    }

    if (element && !element.hovered) {
      element.hovered = true;
      element.trigger("mouseenter", element);
      element.showTooltip();
    }

    /* draggable */

    if (this.pressedElement) {

      if (!this.pressedElement.dragging) {

        if (GUI.distance(this.pressedElement.mouseDownPosition, e) > 10) {

          this.pressedElement.dragging = true;
          this.pressedElement.trigger("dragstart", this.pressedElement);

        }

      }

    }


    return element;

  },

  call: function(method, args) {
    for (var i = 0; i < this.children.length; i++) {
      var element = this.children[i];

      if (element[method]) element[method](args);
    }
  },

  one: function(method, args) {
    for (var i = this.children.length - 1; i >= 0; i--) {
      var element = this.children[i];

      if (element[method]) {
        var result = element[method](args);

        if (result) return element;
      }
    }

    return false;
  },

  refresh: function() {

    var temp = cq.temp(this.width, this.height);
    temp.clear(this.background || false);

    if (this.image) {
      if (this.imageRegion) temp.drawRegion(this.image, this.imageRegion, 0, 0);
      else temp.drawImage(this.image, 0, 0);
    }

    if (this.text) {

      temp.textAlign(this.textAlign);
      temp.textBaseline("top");
      temp.font(this.font);

      if (this.wordwrap) {

        if (this.textShadow) temp.fillStyle(this.textShadow).wrappedText(this.text, this.padding, this.padding + this.textShadowOffsetY, this.width - this.padding * 2, this.lineHeight);
        temp.fillStyle(this.color).wrappedText(this.text, this.padding, this.padding, this.width - this.padding * 2, this.lineHeight);

      } else {

        var x = this.padding + this.textAlignToRatio[this.textAlign] * (this.width - this.padding * 2) | 0;
        var y = this.height / 2 - this.fontHeight / 2 | 0;

        if (this.textShadow) temp.fillStyle(this.textShadow).fillText(this.text, x, y + this.textShadowOffsetY);

        temp.fillStyle(this.color).fillText(this.text, x, y);

      }

    }


    this.cache = temp.cache();

  },

  render: function(x, y, delta) {

    if (this.hidden) return;

    if (this.scale != 1) {
      this.layer.save();
      this.layer.translate(x + this.realX, y + this.realY);
      this.layer.scale(this.scale, this.scale);
      this.layer.drawImage(this.cache, 0, 0);
      this.layer.restore();
    } else {
      this.layer.drawImage(this.cache, x + this.realX, y + this.realY);
    }


    if (this.pressed) {
//      this.layer.fillStyle("rgba(255,255,0,0.5)").fillRect(x + this.realX, y + this.realY, this.width, this.height);
    }


    if (this.dragging) {
      this.layer.fillStyle("rgba(0,0,255,0.5)").fillRect(x + this.realX, y + this.realY, this.width, this.height);
    }


    if (this.hovered) {
      // this.layer.fillStyle("rgba(255,255,255,0.25)").fillRect(x + this.realX, y + this.realY, this.width, this.height);
    }

    for (var i = 0; i < this.children.length; i++) {
      var element = this.children[i];
      element.render(x + this.realX + this.padding, y + this.realY + this.padding);
    }

    if (this.tooltipElement) {
      this.tooltipElement.render(x, y);
    }

    this.notes.render(this.x + x + this.width / 2, this.y + y);

  },

  sort: function() {

    return;

    this.children.sort(function(a, b) {

      // return (a.zIndex | 0) - (b.zIndex | 0);

      if (a.zIndex !== b.zIndex) {
        return (a.zIndex | 0) - (b.zIndex | 0);
      }

      if (a.y !== b.y) {
        return a.y - b.y;
      }

      return a.x - b.x;

    });

  },


  cancelAnimation: function() {
    this.realX = this.targetX;
    this.realY = this.targetY;


    for (var i = 0; i < this.children.length; i++) {
      var element = this.children[i];
      element.cancelAnimation();
    }
  },

  animatePosition: function(delta) {

    if (this.targetX !== this.realX) {
      var animSpeed = Math.max(16, 24 * Utils.distance(this.realX, this.realY, this.targetX, this.targetY));
      this.realX = Utils.moveTo(this.realX, this.targetX, animSpeed * delta);
      this.animating = true;
    } else if (this.targetY !== this.realY) {
      var animSpeed = Math.max(1000, 10 * Utils.distance(this.realX, this.realY, this.targetX, this.targetY));
      this.realY = Utils.moveTo(this.realY, this.targetY, animSpeed * delta);
      this.animating = true;
    } else {
      if (this.animating) {
        this.animating = false;
        if (this.onAnimationFinish) {
          this.onAnimationFinish.call(this);
          this.onAnimationFinish = false;
        }
      }
    }

  },

  set x(x) {
    this.targetX = x | 0;
  },

  get x() {
    return this.targetX;
  },

  set y(y) {
    this.targetY = y | 0;
  },

  get y() {
    return this.targetY;
  }

};

Utils.extend(GUI.Element.prototype, ENGINE.Events.prototype);