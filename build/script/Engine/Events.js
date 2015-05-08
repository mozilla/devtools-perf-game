ENGINE.Events = function() {

  this.listeners = {};

};

ENGINE.Events.prototype = {
  on: function(event, callback) {
    if (typeof event === "object") {
      for (var i in event) {
        this.on(i, event[i]);
      }
      return this;
    }

    if (!this.listeners[event]) this.listeners[event] = [];

    this.listeners[event].push(callback);

    return this;
  },

  off: function(event, callback) {

    if (arguments.length === 0) {
      this.listeners = [];
      return;
    }

    for (var i = 0, len = this.listeners[event].length; i < len; i++) {
      if (this.listeners[event][i]._remove) {
        this.listeners[event].splice(i--, 1);
        len--;
      }
    }
  },

  trigger: function(event) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (this["handle" + event]) this["handle" + event].apply(this, args);

    if (this.listeners["event"])
      for (var i = 0, len = this.listeners["event"].length; i < len; i++) {
        this.listeners["event"][i].apply(this, arguments);
      }

    if (this.listeners[event])
      for (var i = 0, len = this.listeners[event].length; i < len; i++) {
        this.listeners[event][i].apply(this, args);
      }
  }
};