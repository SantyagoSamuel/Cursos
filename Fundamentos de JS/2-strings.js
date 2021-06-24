var nombre = 'Sam', apellido = 'Santiago'


var nombreMayusculas = nombre.toUpperCase()  //to MAYUSCULAS
var apellidoMinusculas = apellido.toLowerCase()   //to minusculas

var primerLetraNombre = nombre.charAt(0)  //S
var secondLetraNombre = nombre.charAt(1)  //a
var tercerLetraNombre = nombre.charAt(2) //m

var cantidadLetrasNombre = nombre.length  //num de caracteres del STRING

var str = apellido.substr(0, 5)  //"Santi"  (sub-string de apellido)

//Concatenacion
var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}` //Interpolación de texto 



