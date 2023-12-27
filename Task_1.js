const Car = {
    name: 'Vaz',
    engine: '1.6',
    year: 2008,
    fabricator: 'Russian Federation'
}

getObjectValues(Car);

function getObjectValues(obj) {
    for (var key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}