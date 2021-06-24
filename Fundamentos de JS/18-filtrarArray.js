var aurelio = {
    nombre: 'Aurelio',
    apellido: 'Raul',
    altura: 1.75 
}

var santi = {
    nombre: 'Samuel',
    apellido: 'Cornelio',
    altura: 1.65
}

var robert = {
    nombre: 'Roberto',
    apellido: 'Carlos',
    altura: 1.85
}

var chris = {
    nombre: 'Christopher',
    apellido: 'Rivadeneyra',
    altura: 1.67
}

var timo = {
    nombre: 'Alexis',
    apellido: 'Gomez',
    altura: 1.82
}

var pune = {
    nombre: 'Zaid',
    apellido: 'Cornelio',
    altura: 0.80
}



const esAlta = persona => persona.altura >= 1.8 
const esBaja = persona => persona.altura < 1.8

var personas = [aurelio, santi, robert, chris, timo, pune]

// var personasAltas = personas.filter(function(){
//     return personas.altura > 1.8
// })
var personasAltas = personas.filter(esAlta)
console.log(personasAltas)

var personasBajas = personas.filter(esBaja)
console.log(personasBajas)