function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = annio;
}

var autoNuevo = new auto("Volskwagen", "Jetta", 2020);
var autoNuevo2 = new auto("Mazda", "modelo 6", 2021);
var autoNuevo3 = new auto("Lamborgini", "aventador", 2020);

console.log(autoNuevo);
console.log(autoNuevo2);
console.log(autoNuevo3);