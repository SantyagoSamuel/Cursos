//------------------------------------------GLOBAL-----------------------------------------------
var nombre = 'Samuel'

function imprimirMayusculas (){
    nombre = nombre.toUpperCase()
    console.log(nombre + ' funcion 1')
}

imprimirMayusculas() 

nombre //'SAMUEL' --- La funcion afecta a la variable global -nombre-, es decir, modifica su valor
 

//--------------------------------------------LOCAL------------------------------------------------

nombre = 'Samuel'

// n es la variable local dentro de la funcion, de este modo no se afecta la variable global -nombre-

function imprimirMayusculas2 (n){ //La variable local parametro de la funcion tambien puede se puede llamar nombre
    n = n.toUpperCase()
    console.log(n + ' funcion 2')
}

imprimirMayusculas2(nombre)

nombre // 'Samuel' si llamamos el valor de la variable despues de ejecutar la función 
//seguiremos viendo su valor original, pues la funcion afecto a la variable n y no a nombre






window.nombre // es para llamar una variable global dentro de una funcion

