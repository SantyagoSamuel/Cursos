var aurelio = {
    nombre: 'Aurelio',
    apellido: 'Raul',
    altura: 1.75,
    cantidadDeLibros: 123
}

var santi = {
    nombre: 'Samuel',
    apellido: 'Cornelio',
    altura: 1.65,
    cantidadDeLibros: 90
}

var robert = {
    nombre: 'Roberto',
    apellido: 'Carlos',
    altura: 1.85,
    cantidadDeLibros: 47
}

var chris = {
    nombre: 'Christopher',
    apellido: 'Rivadeneyra',
    altura: 1.67,
    cantidadDeLibros: 104
}

var timo = {
    nombre: 'Alexis',
    apellido: 'Gomez',
    altura: 1.82,
    cantidadDeLibros: 156
}

var pune = {
    nombre: 'Zaid',
    apellido: 'Cornelio',
    altura: 0.80,
    cantidadDeLibros: 164
}

var personas = [aurelio, santi, robert, chris, timo, pune]

var acum = 0

// for (var i = 0; i < personas.length; i++) {
//     acum = acum + personas[i].cantidadDeLibros
// }

// const reducer = (acum, persona) => {
//     return acum + persona.cantidadDeLibros
// }
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros

var totalLibros = personas.reduce(reducer, 0)

console.log(`en total todos tienen ${totalLibros} libros`)