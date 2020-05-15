const randomPositionInPolygon = require('./index.js');

test('Exception', () => {
    let exception = false;

    try{
        randomPositionInPolygon()
    }catch(e){
        exception =  true;
    }

    expect(exception).toEqual(true);
});

test('Square', () => {

    const polygon = `{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[0, 0.0], [10.0, 0.0], [10, 10],
               [0.0, 10.0], [0, 0.0] ]]
      }
    }`
    let i = 0;
    while(i<10){
        const position = randomPositionInPolygon(JSON.parse(polygon))
        
        expect(position).toHaveLength(2);
        expect((position[0]>0 && position[0]<10)).toEqual(true);
        expect((position[1]>0 && position[1]<10)).toEqual(true);
        i++;
    }

});

test('Square', () => {

    const polygon = `    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [0, 0.0], [10.0, 0.0], [10, 20],
               [0.0, 20], [0, 0.0] ]]
      }
    }`
    let i = 0;
    while(i<10){
        const position = randomPositionInPolygon(JSON.parse(polygon))
        
        expect(position).toHaveLength(2);
        expect((position[0]>0 && position[0]<10)).toEqual(true);
        expect((position[1]>0 && position[1]<20)).toEqual(true);
        i++;
    }

});