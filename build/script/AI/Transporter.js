Utils.extend(defs.actions, {

  returnResources: function(ship, delta, data) {

    if (!ship.hasCargo) return false;

    ship.destination = ship.home;

    if (Utils.distance(ship, ship.home) < 32) {
      ship.unloadCargo();
    }

    return true;

  },

  getCargo: function(ship, delta, data) {

    if (!data.crate) return false;
    if (data.crate._remove) return false;

    ship.destination = data.crate;

    if (Utils.distance(data.crate, ship) < 32) {
      ship.hasCargo = true;
      data.crate.collection.remove(data.crate);
      data.crate.take();
    }

    return true;
  },

  findCargo: function(ship, delta, data) {


    data.crate = Utils.min(ship.collection.groups.crates, ship.getDistanceFrom, ship);


  }



});