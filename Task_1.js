const Car = {
    name: 'Vaz',
    engine: '1.6',
    year: 2008,
    fabricator: 'Russian Federation'
}

getObjectValues(Car);

function getObjectValues(obj) {
    for (let key in obj)
        if (obj.hasOwnProperty(key)){
        console.log(key);
    }
}