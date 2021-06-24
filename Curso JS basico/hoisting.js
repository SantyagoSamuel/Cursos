//Copiar y pegar los fragmentos de codigo en la consola del navegador 
//para ver la interaccion de cada fragmento




//DECLARACION de la var
var miNombre; //Se declara la Variable
miNombre = "Santiago"; //Se inicializa la Variable

var miNombre = "Santiago";// Declarar e Inicializar




//*****HOISTING CON VARIABLES*****

//HOISTING:(Llamar variables sin haberlas declarado)
console.log(miNombre2); //llamas la var miNombre2
var miNombre2 = "Samuel"; //Después se declara






//LO QUE SUCEDE EN EL NAVEGADOR (HOISTING)
var miNombre3 = undefined;  //Cuando una variable no se ha declarado, el navegador la declara y le asigna el valor UNDEFINED
console.log(miNombre3 + "Soy ese hoisting"); //Se llama la variable miNombre3 con el valor UNDEFINED que le asignó el navegador
//miNombre = "Santi"; //se declara la variable miNombre3 y se le asigna un valor string ("Santi")






//*****HOISTING CON FUNCIONES*****

hey();

function hey(){
    console.log("Hola " + miNombre4);
}

var miNombre4 = "Santi";

//******LO QUE SUCEDE EN EL NAVEGADOR******

//1.Declara funciones
//1.2 Declara variables
//2.
hey();
//3.encuentra:
function hey(){
    console.log("Hola " + miNombre4);
}
//4.Encuentra: miNombre4 y como no está declarada la lleva al 1.2
//Declara la variable:
var miNombre4 = "Santi";