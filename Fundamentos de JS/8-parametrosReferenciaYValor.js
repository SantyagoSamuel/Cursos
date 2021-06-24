var samuel = {
    nombre: 'Samuel',
    apellido: 'Santyago',
    edad: 21
}
var dibu = {
    nombre: 'Luis',
    apellido: 'Torres',
    edad: 22
}

//retornar un nuevo objeto de una funcion

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

var samuelMasViejo = cumpleanos(samuel)