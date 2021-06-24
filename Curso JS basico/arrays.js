var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.length);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

//PUSH
//Agregar elementos al array en la ultima posicion
var masFrutas = frutas.push("Uvas");
console.log(frutas);

//POP
//Eliminar el elemento de la ultima posición del array frutas[4]-("Uvas")
//var ultimo = frutas.pop("Uvas");
var ultimo = frutas.pop(frutas);
console.log(frutas);

//UNSHIFT
//Agregar elementos al array en la primera posicion
var nuevaLongitud = frutas.unshift("Uvas");
console.log(frutas);

//SHIFT
//Eliminar el elemento de la primera posicion del array frutas[0]
//var borrarFruta = frutas.shift("Uvas");
var borrarFruta = frutas.shift(frutas);
console.log(frutas);

//INDEXOF
//buscar elementos en el array (posicion)
var posicion = frutas.indexOf("Cereza");
console.log(frutas);