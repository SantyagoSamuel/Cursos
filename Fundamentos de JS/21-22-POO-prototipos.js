//constructor - prototipo Persona
function Persona (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    // return this   //viene implicito en un objeto, no se pone
}

Persona.prototype.saludar = () => {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.SoyAlto = () => this.altura >= 1.70

// la palabra reservada "new" llama un nuevo objeto con el prototipado de el constructor "Persona"
var Sam = new Persona('Samuel', 'Cornelio', 1.65)
var Kokun = new Persona('Erick', 'Batrez', 1.68)
var Jaimen = new Persona('Jaime', 'Chavez', 1.73)
var Alets = new Persona('Alex', 'Tellez', 1.82)
var LuiZ = new Persona('Luis', 'Neyra', 1.65)

// sam.saludar()
