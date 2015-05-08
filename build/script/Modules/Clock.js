ENGINE.Clock = function(args) {

  Utils.extend(this, {
    width: 100,
    height: 100,
    ticktock: false,
    ticks: 6
  }, args);

  this.center = {
    x: this.width / 2 | 0,
    y: this.height / 2 | 0
  };

  this.radius = Math.min(this.width, this.height) / 2 | 0;

  this.tickAngle = Math.PI * 2 / this.ticks;

  this.refresh();

};

ENGINE.Clock.prototype = {

  setPlayer: function(player) {
    this.player = player;
  },

  refresh: function() {
    var temp = cq.temp(this.width, this.height);

    temp.fillStyle("#aaa");
    temp.fillCircle(this.center.x, this.center.y, this.radius);

    temp.fillStyle("#ccc");
    temp.fillCircle(this.center.x, this.center.y, this.radius - 6);

    temp.fillStyle("#888");
    temp.fillCircle(this.center.x, this.center.y, 4);

    this.cache = temp.cache();

  },

  step: function(delta) {
    this.timeFactor = 1 - this.player.moveTimeout / this.player.moveInterval;

    this.tick = this.timeFactor * this.ticks | 0;

    if (this.lastTick !== this.tick) {
      this.ticktock = !this.ticktock;
      this.lastTick = this.tick;
  //    app.sound.play(this.ticktock ? "tick" : "tock");
      var sound = app.sound.play("tock");
    
      app.sound.setPlaybackRate(sound, 2.4 + Math.random() * 0.1);

    }


  },

  postrender: function() {

    app.layer.drawImage(this.cache, this.x, this.y);


    app.layer.textAlign("center").fillStyle("#eee").font(64).textBaseline("top").fillText(this.player.moves, this.x + this.center.x, this.y + this.center.y - app.layer.fontHeight() / 2 - 2);
    app.layer.textAlign("center").fillStyle("#888").font(64).textBaseline("top").fillText(this.player.moves, this.x + this.center.x, this.y + this.center.y - app.layer.fontHeight() / 2);

    var pos = Utils.sincos(this.tickAngle * this.tick - Math.PI / 2, this.radius - 10);


    app.layer.beginPath();
    app.layer.lineWidth(3).strokeStyle("#888");
    app.layer.moveTo(this.x + this.center.x, this.y + this.center.y);
    app.layer.lineTo(this.x + this.center.x + pos.x, this.y + this.center.y + pos.y);
    app.layer.stroke();

    app.layer.beginPath();
    app.layer.lineWidth(6).strokeStyle("#c40");
    
    var start = Math.PI * 1.5;

    app.layer.arc(this.x + this.center.x, this.y + this.center.y, this.radius, start ,start + this.timeFactor * Math.PI * 2 );
    app.layer.stroke();


  },

  globalevent: function(e) {

    switch (e.event) {
      case "nextTurn":
        if (e.team !== this.player.team) return;
        break;
    }

  }

};