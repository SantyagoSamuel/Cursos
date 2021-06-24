class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this. apellido
        var { nombre, apellido } = this

        console.log(`hola, me llamo ${nombre} ${apellido}`)

        if (fn) {
            fn (nombre, apellido, false)
        }
    }

    SoyAlto() {
        return this.altura >= 1.70 
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a)`)
        if (fn) {
            fn (this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabia que eras desarrollador/a`)
    }
}

var Sam = new Persona('Samuel', 'Cornelio', 1.65)
var Kokun = new Desarrollador('Erick', 'Batrez', 1.68)
var Jaimen = new Persona('Jaime', 'Chavez', 1.73)
var Alets = new Persona('Alex', 'Tellez', 1.82)
var LuiZ = new Desarrollador('Luis', 'Neyra', 1.65)


Sam.saludar()
Kokun.saludar(responderSaludo)
Jaimen.saludar(responderSaludo)
Alets.saludar(responderSaludo)
LuiZ.saludar(responderSaludo)