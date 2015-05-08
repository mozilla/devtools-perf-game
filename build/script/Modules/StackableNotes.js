ENGINE.StackableNotes = function(parent, args) {

  Utils.extend(this, {
    background: "#000",
    color: "#fff",
    parent: parent,
    width: parent.width,
    notes: [],
    stackHeight: 0,
    offsetX: 0,
    offsetY: 0
  }, args);

};

ENGINE.StackableNotes.prototype = {

  notePadding: 4,

  add: function(text, color, background) {

    var bounds = app.layer.font(24).textBoundaries(text, this.width - this.notePadding * 2);
    var width = app.layer.font(24).measureText(text).width;
    bounds.height = 32;
    bounds.height += this.notePadding * 2;

    this.stackHeight += bounds.height;

    var note = {
      width: width + this.notePadding * 2,
      height: bounds.height,
      text: text,
      y: -this.stackHeight,
      lifespan: 4,
      background: background || this.background,
      color: color || this.color
    };

    note.targetY = note.y;
    note.y -= 16;

    this.notes.push(note);
  },

  renderNote: function(i, x, y) {
    x += this.offsetX;
    y += this.offsetY;

    var note = this.notes[i];

    y += note.y;

    app.layer.save();
    app.layer.translate(x, y + note.height);
    app.layer.font(24);

    if (note.lifespan < 0.25) {
      var mod = note.lifespan / 0.25;
      app.layer.scale(mod, mod);
    }

    var width = note.width;

    app.layer.fillStyle(note.background);
    app.layer.fillRect(-width / 2, -note.height, width, note.height);
    app.layer.fillStyle(note.color);
    app.layer.textAlign("center");
    app.layer.fillText(note.text, 0, this.notePadding - note.height);

    app.layer.restore();

  },

  render: function(x, y) {

    for (var i = 0; i < this.notes.length; i++) {
      this.renderNote(i, x, y)
    }

  },

  step: function(delta) {

    for (var i = 0; i < this.notes.length; i++) {
      var note = this.notes[i];

      if ((note.lifespan -= delta) <= 0) {
        this.stackHeight -= note.height;
        for (var j = i + 1; j < this.notes.length; j++) {
          this.notes[j].targetY += note.height;
        }
        this.notes.splice(i--, 1);

      }

      note.y = Utils.moveTo(note.y, note.targetY, delta * Math.max(32, Math.abs(note.y - note.targetY) * 10));

    }

  }

};