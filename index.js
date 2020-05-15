'use strict';

const bbox = require('@turf/bbox').default;
const random = require('@turf/random');
const booleanPointInPolygon = require('@turf/boolean-point-in-polygon').default;

/**
 * Return random position inside geoJson Feature<(Polygon|MultiPolygon)>.
 * @param {Feature<(Polygon|MultiPolygon)>} polygon
 * @returns {Array<number>} Position [longitude, latitude]
 * @throws {Exception}
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 * var positionRandom = randomPositionInPolygon();
 *
 */
function randomPositionInPolygon(polygon) {
  if(!polygon || !polygon.type || polygon.type !== 'Feature' || ['Polygon','MultiPolygon'].indexOf(polygon.geometry.type) === -1) {
    throw new Error('param polygon must be a Feature<(Polygon|MultiPolygon)>')
  }
  let  position;
  const bboxObj = bbox(polygon);
  do {
    position = random.randomPosition(bboxObj)
  }
  while (!booleanPointInPolygon(position, polygon));

  return position;
}

module.exports = randomPositionInPolygon;