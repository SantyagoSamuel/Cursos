/*OBJETOS
JS es un lenguaje que está diseñado en un paradigma de objetos*/


//Ejemplo objeto:
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021
}
//Acceder a una propiedad del objeto
miAuto.modelo;
//Imprime: Corolla




//Se pueden agregar propiedades que van a hacer una función, se les llama metodos de objetos.
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2021,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto();
//imprime: Auto Corolla 2021