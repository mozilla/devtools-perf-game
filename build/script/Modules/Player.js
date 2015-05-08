ENGINE.Player = function(args) {

  Utils.extend(this, args);

  this.cadets = 8;
  this.blocks = 8;
  this.energy = 8;

  this.moves = 2;
  this.moveInterval = this.moveTimeout = 5;

  this.home.set({
    team: this.team
  });

  this.pool = new ENGINE.ShuffleBag({
    gliders: 1,
    bomber: 1,
    fighter: 1,
    /*
        interceptor: 1,
        fighter: 1,
        bomber: 1,
        tinkerEngines: 1,
        tinkerFirerate: 1,
        wrench: 1,
        paratroopers: 1,
        missile: 1,
        antiMissile: 1,
        soldiers: 1,
        fortification: 1
        */
  });

  this.cards = {};

  for (var i = 0; i < 3; i++) this.pullCard();

  app.game.modules.push(this);

  this.queue = [];

  this.home.addSoldiers(20, this.team);

  this.color = defs.teamsColors[this.team];

};


ENGINE.Player.prototype = {

  addResources: function(resource, amount) {

    var prev = this[resource];

    this[resource] = Math.min(10, this[resource] + amount);

    app.game.proxy("globalevent", {
      team: this.team,
      player: this,
      all: this[resource],
      change: this[resource] - prev,
      resource: resource,
      event: "resources"
    });

  },

  removeResources: function(resource, amount) {

    this[resource] -= amount;

    app.game.proxy("globalevent", {
      team: this.team,
      player: this,
      all: this[resource],
      change: -amount,
      resource: resource,
      event: "resources"
    });

  },

  get population() {
    return this.home.population;
  },

  pullCard: function() {

    var key = this.pool.pull();

    if (!this.cards[key]) {
      this.cards[key] = {
        count: 0
      };
    }

    this.cards[key].count++;

    app.game.proxy("globalevent", {
      team: this.team,
      player: this,
      key: key,
      event: "cardPull"
    });

    return key;

  },

  getCardsCount: function() {
    var result = 0;
    for (var key in this.cards) {
      result += this.cards[key].count;
    }

    return result;
  },

  endTurn: function() {

    if (this.moves < 2) {
      this.moves++;

      if (app.game.player.team == this.team) {
        var sound = app.playSound("nextMove");
        // app.sound.setPlaybackRate(sound, 0.5);
      }

    }

    var cardsCount = this.getCardsCount();

    if (cardsCount < 5) this.pullCard();

    app.game.proxy("globalevent", {
      team: this.team,
      player: this,
      event: "nextTurn"
    });

    this.addResources("blocks", 1);
    this.addResources("cadets", 1);
    this.addResources("energy", 1);


  },

  step: function(delta) {


    this.moveTimeout -= delta;

    if (this.moveTimeout <= 0) {

      this.moveTimeout = this.moveInterval;

      this.endTurn();

    }

    if (this.ai) this.aiStep(delta);

  },

  hasCard: function(key) {
    return this.cards[key] && this.cards[key].count > 0;
  },

  canUse: function(key) {

    var check = ENGINE.CARDSAI[key];

    if (!check) return false;

    return check(this);
  },

  globalevent: function(args) {

    if (!this.ai) return;

    switch (args.event) {
      case "cardUsed":

        var card = CARDS[args.key];
        var pool = [];

        if (card.counters) {

          for (var i = 0; i < card.counters.length; i++) {
            var key = card.counters[i];
            if (this.hasCard(key) && this.canUse(key)) pool.push(key);
          }

          this.aiDelay = Math.min(this.aiDelay, 1 + Math.random() * 2);
          this.queue.push(Utils.random(pool));

        }

        break;
    }

  },

  aiDisbandRandomCard: function() {

    var key = this.randomCard();

    if (this.disbandCard(key) === true) {
      this.aiDisbandTimeout = 8;
    };

  },

  aiUseCard: function(key) {

    var target = ENGINE.CARDSAI[key](this);

    var result = app.game.useCard({
      card: key,
      team: this.team,
      target: target
    });

    if (result === true) {
      this.aiDisbandTimeout = 4;
    }

    return result;

  },

  disbandCard: function(key) {

    if (!this.cards[key].count) return false;
    if (this.moves <= 0) return "out-of-moves";

    this.cards[key].count--;
    this.moves--;

    app.game.proxy("globalevent", {
      team: this.team,
      player: this,
      key: key,
      event: "disbandCard"
    });

    return true;

  },

  makesSense: function(key) {
    var card = CARDS[key];

    if (!card.makesSense) return true;

    return card.makesSense(this);

  },

  randomCard: function() {

    return Utils.random(Object.keys(this.cards));
  },

  aiStep: function(delta) {

    if (this.aiDelay > 0) {
      this.aiDelay -= delta;
      return;
    }

    var cardUsed = false;

    if (this.queue.length) {
      // this.home.notes.add("Queue: " + this.queue.join(", "));
    }

    for (var i = 0; i < this.queue.length; i++) {

      var key = this.queue[i];
      var target;

      if (this.hasCard(key) && (target = this.canUse(key))) {

        var result = this.aiUseCard(key);

        if (result === true) {
          this.home.notes.add("Using " + key);
          this.queue.splice(i--, 1);
        }

      } else {
        this.queue.splice(i--, 1);
        this.home.notes.add("I don't have " + key);
      }

    }

    if (this.aiDelay > 0) return;

    if (!this.queue.length && this.moves > 0) {

      this.aiDelay = 2 + Math.random() * 2;

      var key = this.randomCard();

      this.home.notes.add("I've picked " + key);

      var error = "";

      if (this.makesSense(key) && this.hasCard(key) && this.canUse(key)) this.aiUseCard(key);
      else if (this.getCardsCount() > 4) {
        this.disbandCard(key);
        this.home.notes.add("but I had to disband it because " + error);
      }

    }



  }


};