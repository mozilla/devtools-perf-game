/*

Put unoptimized versions of functions there.
If you want to test optimized vs unoptimized
just comment out a function or put a random letter in its name...


As you will put more and more bottlenecks you will have to adjust
how much does it affect available power so unoptimized game can run at least
one ship. Modify this factor is in Game.js

REFERENCE_FRAME_TIME = 0.8;

*/

/*

  Distance is an example of a risky optimization target

  1) Execution time is neglectible
  2) If you unoptimize then optimize such cheap function you will get enormous boost
     that will render the rest of optimization unnecessary
  3) This method literally affects half of the logic in the game
     The results are unpredictable
  4) I might not be right ;)

*/

Utils.distance = function(a, b) {

  var dx = a.x - b.x;
  var dy = a.y - b.y;

  return Math.sqrt(dx * dx + dy * dy);

};

/* I think we should put a comment before any function hoisted for optimization
   that will tell what return value is actually expected by the method */

/**
 * Find nearest entity from a list of entities
 * @param  {Entity} from     Entity
 * @param  {Entity[]} entities List of entities to compare
 * @return {Entity}          Nearest Entity
 */
Utils.nearest = function(from, entities) {
  var result = null;
  var distances = [];
  for (var i = 0; i < entities.length; i++) {
    var to = entities[i];
    if (from === to) continue;

    var distance = this.distance(from, to);
    distances.push({
      target: to,
      distance: distance
    });
  }

  var min = -1;

  function sortDistances(a, b) {
    return a.distance - b.distance;
  }

  var sortedDistances = distances.sort(sortDistances);
  if (sortedDistances.length) {
    return sortedDistances[0].target;
  }
  return null;
};

/* Functional programming \o/
   This one is actually an optimized version
*/

Utils.filter = function(array, test) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) result.push(array[i]);
  }
  return result;
};

/**
 * This one is not
 */

Utils.filter = function(array, test) {
  var result = array.slice();
  for (var i = 0; i < result.length; i++) {
    if (!test(result[i])) {
      result.splice(i, 1);
      i--;
    }
  }
  return result;
};

/* returns nearest ship of opposite team */

ENGINE.Ship.prototype.getTarget = function() {
  var pool = [];
  for (var i = 0; i < this.game.entities.length; i++) {
    var entity = this.game.entities[i];
    if (!(entity instanceof ENGINE.Ship)) continue;
    if (entity.team !== this.team) pool.push(entity);
  }

  /* ANOTHER WARNING  - we have already unoptimized Utils.nearest
     this adds up to unpredictable scale of results */
  return Utils.nearest(this, pool);

};

var axes = {
  x: Math.cos,
  y: Math.sin
};

Utils.moveInDirection = function(direction, value) {
  value /= 100;

  for (var i = 0; i < 100; i++) {
    for (var axis in axes) {
      this[axis] += axes[axis](this.direction) * value;
    }
  }

};

ENGINE.Ship.prototype.move = function(dt) {
  if (!this.frozen) {
    Utils.moveInDirection.apply(this, [this.direction, this.speed * dt]);
  }

  if (this.force > 0) {
    this.force -= 200 * dt;
    Utils.moveInDirection.apply(this, [this.forceDirection, this.force * dt]);
  }
};

ENGINE.Particle.prototype.step = function(dt) {
  this.lifetime += dt;

  for (var axis in axes) {
    this[axis] += axes[axis](this.direction) * this.speed * dt;
  }

  this.speed = Math.max(0, this.speed - this.damping * dt);

  this.progress = Math.min(this.lifetime / this.duration, 1.0);

  if (this.progress >= 1.0) {
    this.x = 0;
    this.y = 0;
    this.progress = 0;
  }

  this.spriteIndex = Math.floor(this.progress * this.sprites.length);

}