var edad = 21

edad = edad + 1
edad += 1


//----------
peso = 70
peso = peso - 2
peso -= 2

var sandwich = 1
peso = peso + sandwich
peso += sandwich

var jugarFutbol = 3
peso = peso - jugarFutbol
peso -= jugarFutbol

//------------

var precioVino = 200.3
//var precioVino = precioVino * 3  //600.9000000000001

//var total = precioVino * 100 * 3 / 100
var total2 = Math.round(precioVino * 100 * 3) / 100 //la funcion Math.round() redondea numeros decimales
var totalStr = total2.toFixed(3) // toFixed() hace que aparezcan los numeros decimales que le indiques en "STRING"
var total2 = parseFloat(totalStr) // para pasar de STRING a FLOAT

//-------------

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas 