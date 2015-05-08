ENGINE.States = function (parent, states) {

  this.current = null;
  this.parent = parent;
  this.states = states;
  this.instances = { };

};

ENGINE.States.prototype = {
  
  constructor: ENGINE.State,

  /* create a local copy of a state so we can use `this` to hold data */

  getInstance: function(key) {
    
    if(!this.instances[key]) {
      this.instances[key] = Object.create(this.states[key]);
      this.instances[key].key = key;      
      this.instances[key].parent = this;
    }

    return this.instances[key];

  },

  set: function(key) {

    if(this.current && this.current.leave) this.current.leave(this.parent);

    this.current = this.getInstance(key);

    if(this.current.enter) this.current.enter(this.parent);

  },

  step: function(delta) {
    
    if(this.current && this.current.step) this.current.step(this.parent, delta);

  }

};
