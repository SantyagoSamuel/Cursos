var samuel = {
    nombre: 'Samuel',
    apellido: 'Cornelio',
    edad: 21,
    peso: 70
}

console.log(`al inicio del año ${samuel.nombre} pesa ${samuel.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365
const META = samuel.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (samuel.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(samuel)
    }
    if (realizaDeporte()) {
        adelgazar(samuel)
    }
    dias++
}


console.log(`pasaron ${dias} días hasta que ${samuel.nombre} adelgazó 3kg`)