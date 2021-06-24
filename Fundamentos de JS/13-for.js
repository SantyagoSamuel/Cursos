var samuel = {
    nombre: 'Samuel',
    apellido: 'Cornelio',
    edad: 21,
    peso: 70
}

console.log(`al inicio del año ${samuel.nombre} pesa ${samuel.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

// const aumentarDePeso = function (persona) {
//     return persona += 200
// }
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

// const adelgazar = function (persona) {
//     return persona -= 200
// }
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var ramdom = Math.random()
    
    if (ramdom < 0.25) {
        aumentarDePeso(samuel)
    }else if (ramdom < 0.5) {
        adelgazar(samuel)
    }
}

console.log(`al final del año ${samuel.nombre} pesa ${samuel.peso.toFixed(2)}kg`)