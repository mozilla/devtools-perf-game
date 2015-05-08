ENGINE.Ai = function(cursor) {

  this.state = {};
  this.cursor = cursor;

};

ENGINE.Ai.prototype = {

  constructor: ENGINE.Ai,

  set: function(key) {

    if (this.state && this.state.leave) this.state.leave(this.cursor);

    this.state = defs.ai[key];

    if (this.state && this.state.enter) this.state.enter(this.cursor);

  },

  step: function(dt) {

    if(this.state && this.state.step) this.state.step(this.cursor, dt);

  }

};