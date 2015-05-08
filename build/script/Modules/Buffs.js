ENGINE.Buffs = function(parent) {

  this.parent = parent;
  this.list = [];

};

ENGINE.Buffs.prototype = {

  add: function(args) {

    this.list.push(args);

    this.parent.update();

  },

  calculate: function() {

    for (var i = 0; i < this.list.length; i++) {

      var buff = this.list[i];

      this.applyBuff(buff);

    }

  },

  applyBuff: function(buff) {

    for (var key in buff) {

      defs.buffs[key](this.parent, buff[key]);

      // this.parent[key] = this.parse(buff[key], this.parent[key]);

    }

  }

};