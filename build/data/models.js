defs.models.powerplant = function(args) {

  // var polygon = FLAT.polygonFromImage(app.images["models/powerplant"]);
  var polygon = FLAT.regularPolygon(8);

  FLAT.scalePolygon(polygon, 1.0, 0.8);

  var result = Utils.extend({
    surface: polygon,
    topScale: 0.7,
    scale: 0.4,
    height: 100,
    color: "#aaa",
    lightingStrength: 1,
    sides: true,
    roof: {
      lineWidth: 8,
      fill: "#004",
      alpha: 0.7
    }
  }, args);


  return result;

};

defs.models.factory = function(args) {

  var polygon = FLAT.polygonFromImage(app.images["models/factory"]);

  FLAT.scalePolygon(polygon, 1.0, 0.8);

  var result = Utils.extend({
    surface: polygon,
    scale: 0.4,
    height: 100,
    color: "#aaa",
    lightingStrength: 1,
    sides: true,
    roof: {
      lineWidth: 8
    }
  }, args);


  return result;

};

defs.models.quarry = function(args) {

  var polygon = FLAT.polygonFromImage(app.images["models/quarry"]);

  FLAT.scalePolygon(polygon, 1.0, 0.8);

  var result = Utils.extend({
    surface: polygon,
    bottomScale: 0.1,
    scale: 0.5,
    height: 100,
    color: "#855",
    clip: true,
    lightingStrength: 1,
    rotation: Math.random() * 6,
    sides: true,    
    roof: {
      lineWidth: 16,      
      fill: false
    }


  }, args);


  return result;

};

defs.models.chimney = function(args) {

  // var polygon = FLAT.polygonFromImage(app.images["models/powerplant"]);
  var polygon = FLAT.regularPolygon(6);

  FLAT.scalePolygon(polygon, 1.0, 0.8);

  var result = Utils.extend({
    surface: polygon,
    scale: 0.1,
    height: 300,
    color: "#aaa",
    lightingStrength: 1,
    sides: true,
    
    roof: {
      lineWidth: 3,
      fill: "#004",
      alpha: 0.7
    }
  }, args);


  return result;

};
