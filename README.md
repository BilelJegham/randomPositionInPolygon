
Random position in polygon
===

Return random position inside geoJson `Feature<(Polygon|MultiPolygon)>`.

See [Turf.js](https://turfjs.org/)


## Install

```bash
npm install random-position-in-polygon
# OR
yarn add random-position-in-polygon
```

## Usage

`randomPositionInPolygon(polygon: Feature<(Polygon|MultiPolygon)>): Array<number>`
### Params
 - `polygon` : geoJson `Feature<PolygonMultiPolygon>` or geoJson `Feature<MultiPolygon>`
### Params
 - `position` : `{Array<number>}` Position [longitude, latitude]

## Exemple
```js
const randomPositionInPolygon = require('random-position-in-polygon');
const polygon = `{
    "type": "Feature",
    "properties": {},
    "geometry": {
    "type": "Polygon",
    "coordinates": [[
          [0, 0.0], [10.0, 0.0], [10, 20],
               [0.0, 20], [0, 0.0] ]]
    }
}`

const positionRandom = randomPositionInPolygon(JSON.parse(polygon))
```
under [MIT license](https://github.com/BilelJegham/randomPositionInPolygon/blob/master/LICENSE)
