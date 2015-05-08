ENGINE.Body = {

  create: function(o) {

    o.direction = 0;
    o.desiredDirection = 0;
    o.x = 0;
    o.y = 0;
    o.velocity = 0;
    o.rotationSpeed = Math.PI;
    o.rotationSpeedMod = 1.0;
    o.force = 0;
    o.forceDirection = 0;
    o.velocityMod = 1.0;
    o.forceDamping = 1;

  },

  step: function(o, delta) {

    o.direction = Utils.circWrapTo(o.direction, o.desiredDirection, o.rotationSpeed * o.rotationSpeedMod * delta);

    o.x += Math.cos(o.direction) * o.velocity * delta * o.velocityMod;
    o.y += Math.sin(o.direction) * o.velocity * delta * o.velocityMod;

    if (o.force) {
      o.force = Utils.moveTo(o.force, 0, (1 + o.force) * o.forceDamping * delta);
      o.x += Math.cos(o.forceDirection) * o.force * delta;
      o.y += Math.sin(o.forceDirection) * o.force * delta;
    }

    if (o.shape) {
      o.box = [o.x - o.radius, o.y - o.radius - o.altitude, o.radius, o.radius + o.altitude];
    }

  },

  applyForce: function (o, force, direction) {

    o.force = force;
    o.forceDirection = direction;
    
  }


};