ENGINE.ShuffleBag = function(items) {
  this.items = items;
  this.reset();
};

ENGINE.ShuffleBag.prototype = {

  shuffle: function(array) {
    var counter = array.length,
      temp, index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);

      counter--;

      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  },

  reset: function() {
    this.pool = [];

    if (this.items instanceof Array) {
      this.pool = this.pool.concat(this.items);
    } else {
      for (var key in this.items) {
        var count = this.items[key];

        for (var j = 0; j < count; j++) {
          this.pool.push(key);
        }
      }
    }

    this.shuffle(this.pool);
  },

  pull: function(count) {


    if (count) {
      var result = [];
      
      for (var i = 0; i < count; i++) result.push(this.pull());

    } else {
      var result = this.pool.pop();
      if (this.pool.length === 0) this.reset();
    }

    return result;
  }
};