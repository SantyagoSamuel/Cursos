var samuel = {
    nombre: 'Samuel',
    apellido: 'Cornelio',
    edad: 15,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero === true) {
        console.log('ingeniero')
    }

    if (persona.cocinero) {
        console.log('cocinero')
    }

    if (persona.cantante) {
        console.log('cantante')
    }

    if (persona.dj) {
        console.log('dj')
    }

    if (persona.guitarrista) {
        console.log('guitarrista')
    }

    if (persona.drone) {
        console.log('drone')
    }
    
}

//RETO
const MAYORIA_EDAD = 18



//de una Funcion normal a una ARROW FUNCTION--------------------------------------------

// const mayorDeEdad = function(persona) {
//     return persona.edad >= MAYORIA_EDAD
// }


// const mayorDeEdad = persona => {
//     return persona.edad >= MAYORIA_EDAD
// }


// const mayorDeEdad = persona =>  persona.edad >= MAYORIA_EDAD


const mayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD

const menorDeEdad = ({ edad }) => edad < 18



//---------------------------------------------------------
function imprimirMayorDeEdad(persona) {
    if (!menorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!mayorDeEdad(persona))
    console.log('ACCESO DENEGADO')
}