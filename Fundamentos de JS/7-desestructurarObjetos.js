var Samuel = { 
    nombre: 'Samuel',     
    apellido: 'Cornelio',
    edad: 21
}

var Dibu = { 
    nombre: 'Luis Fernando',   
    apellido: 'Torres',
    edad: 22
}

function imprimirMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirMayusculas(Samuel)
imprimirMayusculas(Dibu)


//--------------------------------------------RETO-------------------------------------------------
console.log(' ')
console.log('----RETO----')
var Me = { 
    nombre: 'Samuel',     
    apellido: 'Cornelio',
    edad: 21
}

var Friend = { 
    nombre: 'Luis',   
    apellido: 'Torres',
    edad: 22
}

// function imprimirNombreYEdad(persona) {
//     var { nombre } = persona
//     var { apellido } = persona
//     var { edad } = persona
//     console.log(`Hola mi nombre es: ${nombre} ${apellido}, y tengo ${edad} años`)
// }

function imprimirNombreYEdad(persona) {
    var { nombre, apellido, edad } = persona
    console.log(`Hola mi nombre es: ${nombre} ${apellido}, y tengo ${edad} años`)
}
    
imprimirNombreYEdad(Me)
imprimirNombreYEdad(Friend)