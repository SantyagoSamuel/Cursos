//SCOPE GLOBAL

var nombre = "Seth"; //en scope global

//SCOPE LOCAL

function funApellido(){
    let apellido = "Cornelio"; //en scope local
    return apellido;
}

console.log(`${nombre} ${funApellido()}`); //FORMA CORRECTA de llamar el valor de apellido
console.log(`${nombre} ${apellido}`);  //FORMA INCORRECTA
