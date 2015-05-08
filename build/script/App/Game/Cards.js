app.game.cards = {

  create: function() {

    ENGINE.Events.call(this);

  },

  get deck() {
    return app.game.player.cards;
  },

  wireframes: {},

  getWireframe: function(key) {
    if (!this.wireframes[key]) {

      var ship = SHIPS[key];

      var surface = FLAT.polygonFromImage(app.images["models/" + ship.image]);

      this.wireframes[key] = new FLAT.Model({
        surface: surface,
        height: ship.height,
        scale: ship.radius * 2,
        color: "#fff",
        alpha: 0.5,
        sides: false,
        roof: true
      });

    }

    return this.wireframes[key];
  },

  start: function() {

    var chimney = FLAT.polygonFromImage(app.images["models/chimney"]);

    this.player = app.game.players[1];
    this.team = 1;

    this.dropIndicator = new FLAT.Model({
      surface: chimney,
      height: 60,
      scale: 60,
      color: "#fff",
      alpha: 0.5,
      wireframe: true,
      shadow: false,
      childrenShadow: true,
      sides: false
    });


    this.gui = app.game.gui.add({
      width: 6 * 100,
      height: 190,
      background: "rgba(0,0,0,0.1)",
      padding: 20,
      x: 100
    });

    for (var key in this.deck) {

      var count = this.deck[key].count;

      for (var i = 0; i < count; i++) {

        this.addCard(key);

      }

    }

    this.alignGUI();
    this.alignCards();

    this.gui.sort();
  },

  cardImages: {},

  resourcesBackgrounds: {
    "cadets": [224, 76, 30, 24],
    "blocks": [258, 76, 38, 16],
    "energy": [300, 76, 30, 24]
  },

  resourcesRegions: {
    "cadets": [232, 34, 91, 16],
    "blocks": [232, 52, 91, 16],
    "energy": [232, 16, 91, 16]
  },

  getCardImage: function(key) {

    if (!this.cardImages[key]) {

      var cardData = CARDS[key];
      var temp = cq.temp(91, 200);

      var resource = cardData.resource;

      temp.fillStyle(defs.resourcesBackgrounds[resource]);
      temp.fillRect(0, 16, 91, 200);
      temp.drawRegion(app.images.cards, cardData.image, 2, 16);
      temp.drawRegion(app.images.cards, this.resourcesRegions[resource], 0, 0);

      temp.font("16px 'Squada One'");
      temp.textAlign("center");
      temp.fillStyle(defs.resourcesTextColors[resource]);
      temp.fillText(cardData.cost, 45, 15);

      var textWidth = temp.measureText(key).width;

      var scale = Math.min(1, 80 / textWidth);

      temp.save();
      temp.translate(45, 134);
      temp.scale(scale, scale);

      temp.fillStyle(defs.resourcesTextColors[resource]);
      temp.fillText(key, 0, 0);

      temp.restore();


      /*
            temp.drawRegion(app.images.cards, cardData.image, 0, 32);
            temp.drawRegion(app.images.cards, [232, 108, 91, 35], 0, 0);

            temp.font("16px 'Squada One'");
            temp.textAlign("center");


            if (cardData.cadets) {
              temp.drawRegion(app.images.cards, this.resourcesBackgrounds.cadets, 2, 4);
              temp.fillStyle(defs.resourcesTextColors.cadets);
              temp.fillText(cardData.cadets, 2 + 15, 17);
            }

            if (cardData.blocks) {
              temp.drawRegion(app.images.cards, this.resourcesBackgrounds.blocks, 26, 4);
              temp.fillStyle(defs.resourcesTextColors.blocks);
              temp.fillText(cardData.materials, 26 + 19, 17);
            }

            if (cardData.energy) {
              temp.drawRegion(app.images.cards, this.resourcesBackgrounds.energy, 58, 4);
              temp.fillStyle(defs.resourcesTextColors.energy);
              temp.fillText(cardData.energy, 58 + 15, 17);
            }
      */


      this.cardImages[key] = temp.cache();
    }

    return this.cardImages[key];

  },

  addCard: function(key) {

    app.playSound("pullCard");

    var cardData = CARDS[key];

    var card = this.gui.add(GUI.Element, {
      card: key,
      cardData: CARDS[key],
      style: "card",
      width: 90,
      height: 145,
      color: "#000",
      fontSize: 30,
      image: this.getCardImage(key),
      tooltip: cardData.tooltip
    });

    card.on("mouseenter", this.cardEnter.bind(this));
    card.on("mouseleave", this.cardLeave.bind(this));
    card.on("mousedown", this.pickCard.bind(this));
    card.on("dragstart", this.dragStart.bind(this));
    card.on("mouseup", this.dropCard.bind(this));
    card.on("drop", this.dropCard.bind(this));

    return card;
  },


  cardsOrder: {
    cadets: 1,
    blocks: 0,
    energy: 2
  },

  sortCards: function(a, b) {

    var orderA = app.game.cards.cardsOrder[a.cardData.resource];
    var orderB = app.game.cards.cardsOrder[b.cardData.resource];

    if (orderA !== orderB) return orderA - orderB;

    if (a.card !== b.card) return (a.card < b.card ? -1 : 1);


    return 0;

  },

  alignCards: function() {

    this.gui.children.sort(this.sortCards);

    var elements = Utils.filter(this.gui.children, {
      dragging: false
    });

    var groups = {};
    var groupsCount = 0;

    var x = 0;

    var fold = 64;
    var margin = 90 - fold;

    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];

      x += fold;

      element.x = x;
      element.y = 0;

    }


    /* margin focused card */

    var index = elements.indexOf(this.focusCard);

    if (index > -1) {

      for (var i = 0; i < index; i++) {
        elements[i].x -= margin;
      }

      for (var i = index + 1; i < elements.length; i++) {
        elements[i].x += margin;
      }
    }


    this.gui.sort();



  },

  STACKINGalignCards: function() {

    var elements = Utils.filter(this.gui.children, {
      dragging: false
    });

    var groups = {};
    var groupsCount = 0;

    var x = 0;

    for (var i = 0; i < elements.length; i++) {

      var key = elements[i].card;

      if (!groups[key]) {

        groups[key] = {
          index: groupsCount,
          x: x,
          count: 0
        }

        x += 60;

        groupsCount++;
      }

    }

    /* margin focused card */

    var keys = Object.keys(groups);
    var index = keys.indexOf(this.focusGroup);

    if (index > -1) {

      for (var i = 0; i < index; i++) {
        var key = keys[i];
        groups[key].x -= 30;
      }

      for (var i = index + 1; i < keys.length; i++) {
        var key = keys[i];
        groups[key].x += 30;
      }
    }



    for (var i = 0; i < elements.length; i++) {

      var element = elements[i];

      var group = groups[element.card];

      element.x = group.x;
      element.y = -group.count * 6;
      element.zIndex = group.count;
      group.x - group.count;

      group.count++;

    }

    this.gui.sort();



  },

  alignGUI: function() {
    this.gui.align("center", "bottom");
    this.gui.y -= 32;
  },

  resize: function() {
    this.alignGUI();
  },

  cardEnter: function(element) {
    this.focusGroup = element.card;
    this.focusCard = element;
    this.alignCards();
  },

  cardLeave: function(element) {
    this.focusGroup = false;
    this.focusCard = false;

    this.alignCards();
  },

  dragStart: function() {

    console.log("PICK CARD");

    app.playSound("pickCard");

    this.cardElement.zIndex = 255;
    this.cardElement.hidden = true;
    this.alignCards();

  },

  pickCard: function(cardElement) {
    this.card = cardElement.card;
    this.cardElement = cardElement;

    this.cardData = CARDS[this.card];

    ENGINE.TimeFactors.set(app.game, "placingCard", 0.1);


    this.dragStartPosition = {
      x: app.mouse.x - this.cardElement.x,
      y: app.mouse.y - this.cardElement.y
    };
  },

  disbandCard: function() {
    return this.player.disbandCard(this.card);
  },

  dropCard: function() {

    ENGINE.TimeFactors.set(app.game, "placingCard", 1.0);

    if (!this.card) return;

    var result = false;
    var cardDisbanded = false;
    if (app.mouse.y > app.height - 48) {
      var disbandResult = this.disbandCard();
      app.playSound("disbandCard");
      if (disbandResult === true) cardDisbanded = true;
      else cardDisbanded = false;
    } else if (this.dropTarget) {
      result = app.game.useCard({
        card: this.card,
        team: 1,
        x: app.game.cursor.x,
        y: app.game.cursor.y,
        target: this.dropTarget
      });

    } else {
      app.sound.say("invalid target");
    }

    if (result !== true) {

      if (cardDisbanded) {

      } else {
        
        app.playSound("cancelCard");

        if (result === false) {

        } else {
          app.sound.say(result);
        }
      }

      this.cardElement.hidden = false;
    } else {
      app.sound.say(this.card);
      app.playSound("playCard");
    }

    this.card = false;
    this.cardData = false;
    this.cardElement = false;
    this.dropTarget = false;
    this.alignCards();
  },

  update: function() {

  },

  step: function(delta) {

    if (this.card) {
      this.dropTarget = this.getDropTarget(app.game.cursor.x, app.game.cursor.y);
    }

  },

  render: function() {

    if (this.dropTarget) {
      app.layer.save();
      app.layer.lineWidth(1 + this.dropTarget.radius / 10 | 0).strokeStyle("rgba(255,255,255,0.5)").strokeCircle(this.dropTarget.x, this.dropTarget.y - this.dropTarget.z, this.dropTarget.radius * defs.dropMod + 10);
      app.layer.restore();
    }

  },

  postrender: function(delta) {

    if (this.card) {
      this.renderDroppableAreas();

    }

    this.gui.render(0, 0);

    if (this.card) {

      // var wireframe = this.getWireframe("plane");

      // wireframe.render(app.layer, app.game.cursor.x, app.game.cursor.y, 50);

      var cardData = CARDS[this.card];

      app.layer.save();
      app.layer.translate(app.mouse.x, app.mouse.y);
      app.layer.strokeStyle("#fff").setLineDash([20, 20]).strokeCircle(0, 0, defs.dropRadius);

      var region = cardData.image;

      app.layer.scale(0.5, 0.5)
      app.layer.drawRegion(app.images.cards, region, -region[2] / 2, -region[3] * 1.25);
      app.layer.restore();



      // var wireframe = this.getWireframe("plane");

      // wireframe.render(app.layer, app.game.cursor.x, app.game.cursor.y, 50);



    }
  },

  filter: function(entity, requirements, team) {


    if (requirements.enemy === true && entity.team === team) return false;
    if (requirements.enemy === false && entity.team !== team) return false;

    if (requirements.air !== undefined && entity.air !== requirements.air) return false;
    if (requirements.water !== undefined && entity.water !== requirements.water) return false;
    if (requirements.sub !== undefined && entity.sub !== requirements.sub) return false;

    return true;

  },

  getEntities: function(requirements, team) {

    var _requirements = Utils.extend({}, requirements);

    if (requirements.group) {
      var entities = app.game.entities.groups[_requirements.group];
      delete _requirements.group;
    } else {
      var entities = app.game.entities;
    }

    var pool = [];

    for (var i = 0; i < entities.length; i++) {
      if (this.filter(entities[i], _requirements, team)) {
        pool.push(entities[i]);
      }
    }

    return pool;
  },

  getDropTarget: function(x, y) {

    var accept = this.cardData.accept;
    var reject = this.cardData.reject;

    /* check drop position against rejected radiuses */

    if (reject && reject.entitiesInRadius) {

      for (var i = 0; i < reject.entitiesInRadius.length; i++) {
        var requirements = reject.entitiesInRadius[i];
        var entities = this.getEntities(requirements, 1);

        for (var j = 0; j < entities.length; j++) {
          var entity = entities[i];

          if (Utils.distance(x, y, entity.x, entity.y - entity.z) < defs.dropRadius + requirements.radius + entity.radius) return false;

        }
      }

    }

    /* get acceptable entities */

    if (accept.entities) {

      var entities = this.getAcceptableEntities(accept.entities);

      for (var j = 0; j < entities.length; j++) {
        var entity = entities[j];

        if (Utils.distance(x, y, entity.x, entity.y - entity.z) < entity.radius * defs.dropMod + defs.dropRadius * (1 / app.game.scale)) return entity;
      }

    }

    return false;

    /* get acceptable entities */

    /* if not get ground */

    /* check position/entity against radiuses */



  },

  getAcceptableEntities: function(conditions) {

    var entities = [];

    for (var i = 0; i < conditions.length; i++) {
      var requirements = conditions[i];
      entities = entities.concat(this.getEntities(requirements, 1));
    }

    return entities;
  },


  renderDroppableAreas: function() {

    var accept = this.cardData.accept;
    var reject = this.cardData.reject;

    var mask = cq.temp(app.layer.width, app.layer.height);

    // mask.clear("#a00");
    mask.lineCap("round").lineJoin("round");

    if (accept.entities) {

      var entities = this.getAcceptableEntities(accept.entities);

      mask.save();
      mask.scale(app.game.scale, app.game.scale);

      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];

        mask.setLineDash([entity.radius / 3 | 0]);
        mask.lineWidth(1 + entity.radius / 10 | 0);

        mask.fillStyle(entity.color).a(0.1).fillCircle(entity.x - app.game.x, entity.y - entity.z - app.game.y, entity.radius * defs.dropMod);
        mask.strokeStyle(entity.color).a(0.7).strokeCircle(entity.x - app.game.x, entity.y - entity.z - app.game.y, entity.radius * defs.dropMod);
      }

      mask.restore();

    }

    if (reject && reject.entitiesInRadius) {

      var entities = [];

      for (var i = 0; i < reject.entitiesInRadius.length; i++) {
        var requirements = reject.entitiesInRadius[i];
        entities = entities.concat(this.getEntities(requirements, 1));

        mask.save();
        mask.scale(app.game.scale, app.game.scale);

        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          mask.fillStyle("#000").fillCircle(entity.x - app.game.x, entity.y - entity.z - app.game.y, entity.radius + requirements.radius);
        }

        mask.restore();
      }



    }


    app.layer.save();
    app.layer.a(1.0);
    app.layer.globalCompositeOperation("normal");
    app.layer.drawImage(mask.canvas, 0, 0);
    app.layer.restore();

  },

  mousemove: function(e) {

    if (this.cardElement) {
      this.cardElement.x = e.x - this.dragStartPosition.x;
      this.cardElement.y = e.y - this.dragStartPosition.y;
      this.cardElement.cancelAnimation();
    }

  },

  mouseup: function(e) {
  },

  mousedown: function(e) {



    /* 
    app.game.spawn({
      x: app.game.cursor.x, 
      y: app.game.cursor.y,
      team: 0,
      key: "plane"
    });
    */
  },

  carddropped: function() {

  },

  cardused: function(args) {

  },

  globalevent: function(args) {

    switch (args.event) {

      case "cardPull":

        if (args.player === this.player) {
          var element = this.addCard(args.key);
          element.y = 2200;
          element.cancelAnimation();
          this.alignCards();
        }

        break;

      case "cardUsed":

        if (args.player !== this.player) return;

        var element = this.cardElement || Utils.find(this.gui.children, {
          card: args.key
        });

        if (element) element.parent.remove(element);

        this.alignCards();

        break;

      case "disbandCard":

        if (args.player !== this.player) return;

        element = this.cardElement || Utils.find(this.gui.children, {
          card: args.key
        });

        if (element) element.parent.remove(this.cardElement);

        this.alignCards();

        break;

    }


  }

};

app.game.modules.push(app.game.cards);

/*

  states 

    free
    card in hand


*/
app.game.cards.create();

Utils.extend(app.game.cards, ENGINE.Events.prototype);