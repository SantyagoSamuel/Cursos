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


var personas = [aurelio, santi, robert, chris, timo, pune]

/*** Acceso a los atributos: ***/
personas[0]           // {nombre: "Aurelio", apellido: "Raul", altura: 1.75}
personas[0].nombre    // 'Aurelio'
personas[0]['nombre'] // 'Aurelio'

for (var i = 0; i < personas.length; i++) {
    // console.log(personas[i])
    persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}