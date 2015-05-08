ENGINE.Entities = function() {

  this.children = [];
  this.groups = {};
  this.index = 0;
  this.queue = [];

};

ENGINE.Entities.prototype = {

  enqueue: function() {
    var item = Array.prototype.slice.call(arguments);

    item.timeout = item.pop();

    this.queue.push(item);
  },

  all: function(filter, group) {
    var children = group ? this.groups[group] : this.children;

    return Utils.filter(children, filter);
  },

  add: function(object) {

    var args = {};

    for (var i = 1; i < arguments.length; i++) {
      Utils.extend(args, arguments[i]);
    }

    /* create new object */

    if (typeof object === "function") {

      args.index = ++this.index;
      args.collection = this;

      var entity = new object(args);

    }

    /* adopt existing object */
    else {

      entity = object;
      entity.index = ++this.index;
      entity.collection = this;

    }


    this.children.push(entity);

    this.dirty = true;

    this.last = entity;

    if (entity.groups) {
      for (var i = 0; i < entity.groups.length; i++) this.addToGroup(entity, entity.groups[i]);
    }

    return entity;

  },

  createGroup: function(group) {
    if (this.groups[group]) return;
    this.groups[group] = [];
  },

  addToGroup: function(entity, group) {

    this.createGroup(group);

    this.groups[group].push(entity);

  },

  cleanup: function() {

    this.dirtyGroups = {};

    for (var i = 0, len = this.children.length; i < len; i++) {

      var entity = this.children[i];

      if (entity._remove) {

        if (entity.groups) {
          for (var j = 0; j < entity.groups.length; j++) {
            this.dirtyGroups[entity.groups[j]] = true;
          }
        }

        this.children.splice(i--, 1);
        len--;
      }

    }

    /* cleanup groups */

    for (var key in this.dirtyGroups) {
      var group = this.groups[key];

      for (var i = 0, len = group.length; i < len; i++) {

        var entity = group[i];

        if (entity._remove) {
          group.splice(i--, 1);
          len--;
        }

      }

    }

    this.sort();

    this.dirty = false;

  },

  sort: function() {

    this.children.sort(function(a, b) {

      if (a.zIndex !== b.zIndex) {
        return (a.zIndex | 0) - (b.zIndex | 0);
      }

      if (a.y !== b.y) {
        return a.y - b.y;
      }

      return (a.index > b.index) ? 1 : (a.index < b.index ? -1 : 0);


    });

  },

  remove: function(entity) {

    entity._remove = true;

    if (entity._kill) entity._kill();

    this.dirty = true;

  },

  step: function(delta) {

    /* process queue */

    for (var i = 0; i < this.queue.length; i++) {

      var item = this.queue[i];

      if ((item.timeout -= delta) <= 0) {
        this.add.apply(this, item);
        this.queue.splice(i--, 1);
      }

    }

    if (this.dirty) this.cleanup();

    for (var i = 0; i < this.children.length; i++) {

      var entity = this.children[i];

      var prevInView = entity.inView;

      if (entity.box) {
        entity.inView = Utils.rectInRect(entity.box[0], entity.box[1], entity.box[2], entity.box[3], app.game.x, app.game.y, app.game.cameraWidth, app.game.cameraHeight) || app.game.gameover;
      } else {
        entity.inView = true;
      }

      if (!prevInView && entity.inView && entity.enterview) entity.enterview();
      if (prevInView && !entity.inView && entity.leaveview) entity.leaveview();

      if (this.children[i].step) this.children[i].step(delta);

    }


    this.sort();

  },

  render: function(delta) {

    for (var i = 0; i < this.children.length; i++) {

      var entity = this.children[i];

      if (!entity.inView) continue;
      if (entity.render) entity.render(delta);

      if (entity.box) {
        //       app.layer.lineWidth(1).strokeStyle("#f00").strokeRect(entity.box[0]  | 0, entity.box[1] | 0, entity.box[2], entity.box[3]);
      }

    }

  }

}