// function heredaDe (prototipoHijo, prototipoPadre) {
//     var fn = function () {}
//     fn.prototype = prototipoPadre.prototype
//     prototipoHijo.prototype = new fn
//     prototipoHijo.prototype.constructor = prototipoHijo
// }


// function Persona (nombre, apellido, altura) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.altura = altura
// }

// Persona.prototype.saludar = function() {
//     console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
// }

// Persona.prototype.SoyAlto = function()  {
//     return this.altura >= 1.70 
// }

// function Desarrollador(nombre, apellido) {
//     this.nombre = nombre
//     this.apellido = apellido
// }

// // heredaDe(Desarrollador, Persona)

// Desarrollador.prototype.saludar = function() {
//     console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a)`)
// }

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    SoyAlto() {
        return this.altura >= 1.70 
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Desarrollador(a)`)
    }
}


// var Sam = new Persona('Samuel', 'Cornelio', 1.65)
// var Kokun = new Desarrollador('Erick', 'Batrez', 1.68)
// var Jaimen = new Persona('Jaime', 'Chavez', 1.73)
// var Alets = new Persona('Alex', 'Tellez', 1.82)
// var LuiZ = new Persona('Luis', 'Neyra', 1.65)