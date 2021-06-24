//-------------------------------OBJETOS--------------------------------
var Samuel = { //OBJETO Samuel
    nombre: 'Samuel',     //ATRIBUTOS
    apellido: 'Cornelio',
    edad: 21
}

var Dibu = { //OBJETO Dibu
    nombre: 'Luis Fernando',   //ATRIBUTOS
    apellido: 'Torres',
    edad: 22
}

//-------------------------------PARAMETRO-->--ATRIBUTO-------------------------
function imprimirMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(`${nombre} funcion 1`)
}

imprimirMayusculas(Samuel.nombre)
imprimirMayusculas(Dibu.nombre)

//-------------------------------PARAMETRO-->--OBJETO------------------------------
function imprimirMayusculas2 (persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(`${nombre} funcion 2`)
}

imprimirMayusculas2(Samuel)
imprimirMayusculas2(Dibu)

//-------------------PARAMETRO-->--OBJETO--(Sin declarar la variable nombre)-----------------------
function imprimirMayusculas3 (persona) {
    console.log(`${persona.nombre.toUpperCase()} funcion 3`)
}

imprimirMayusculas3(Samuel)
imprimirMayusculas3(Dibu)

//----------------------------------------PARAMETRO-==-ATRIBUTO-OBJETO-----------------------------------------------
//Ultimas versiones de JS
//en el parametro indicamos entre llaves el atributo del objeto que llamamos en la funcion

function imprimirMayusculas4 ({ nombre }) {      
    console.log(`${nombre.toUpperCase()} funcion 4`)
}

imprimirMayusculas4(Samuel) //VARIABLE PARAMETRO
imprimirMayusculas4(Dibu)  //VARIABLE PARAMETRO
imprimirMayusculas4({ nombre: 'Kevin'}) //OBJETO PARAMETRO --> Podemos definir un nuevo objeto en el parametro
imprimirMayusculas4() //SIN PARAMETRO --> Error
imprimirMayusculas4({ apellido: 'Zip'})//OBJETO SIN EL ATRIBUTO QUE SOLICITA EL PARAMETRO (NOMBRE) --> Error