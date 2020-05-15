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

test('Square', () => {

    const polygon = ` {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
            [
            [
                [
                -47.900390625,
                -14.944784875088372
                ],
                [
                -51.591796875,
                -19.91138351415555
                ],
                [
                -41.11083984375,
                -21.309846141087192
                ],
                [
                -43.39599609375,
                -15.390135715305204
                ],
                [
                -47.900390625,
                -14.944784875088372
                ]
            ],
            [
                [
                -46.6259765625,
                -17.14079039331664
                ],
                [
                -47.548828125,
                -16.804541076383455
                ],
                [
                -46.23046874999999,
                -16.699340234594537
                ],
                [
                -45.3515625,
                -19.31114335506464
                ],
                [
                -46.6259765625,
                -17.14079039331664
                ]
            ],
            [
                [
                -44.40673828125,
                -18.375379094031825
                ],
                [
                -44.4287109375,
                -20.097206227083888
                ],
                [
                -42.9345703125,
                -18.979025953255267
                ],
                [
                -43.52783203125,
                -17.602139123350838
                ],
                [
                -44.40673828125,
                -18.375379094031825
                ]
            ]
            ]
        ]}
    }`

    const position = randomPositionInPolygon(JSON.parse(polygon))
        
    expect(position).toBeDefined();


});
