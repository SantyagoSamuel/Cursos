//****** IF ******
if (true) {
    console.log("Hola");
}

//****** ELSE ******
if (false) {
    console.log("Hola");
}else {
    console.log("soy falso");
}


//****** IF ELSE *******
var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu 1ra votación");
}else if (edad > 18) {
    console.log("Puedes votar de nuevo");
}else {
    console.log("no puedes votar");
}


//*****TERNARIO (IF ELSE)******
//condition ? true: false;

var num = 1;

var resultado = num === 1 ? "si soy un uno": "no soy un uno";

console.log(resultado);