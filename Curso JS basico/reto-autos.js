var autos = [];

function auto(Marca, Modelo, Anio) {
    this.marca = Marca;
    this.modelo = Modelo;
    this.anio = Anio;
}

for(var i = 0; i < 30; i++){
    var marca = prompt("ingresa la marca del auto");
    var modelo = prompt("ingresa el modelo del auto");
    var anio = prompt("ingresa el año del auto");

    autos.push(new auto(marca, modelo, anio));
}

for(var i = 0; i < autos.length; i++){
    console.log(autos[i]);
}