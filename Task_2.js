const Car = {
    name: 'Vaz',
    engine: '1.6',
    year: 2008,
    fabricator: 'Russian Federation'
}

console.log(isProperty(Car, 'fabricator'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true
    } else {
        return false
    }
}