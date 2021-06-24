//METODOS DE RECORRIDOS DE ARRAYS

//ARRAY de Objetos
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];



//--------------------------------------FILTER-----------------------------------------------
//.filter : nos permite filtrar solo los elementos que deseamos (según ciertos criterios)
// y devolverlos en un nuevo array.

var articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo <= 500;
});

articulosFiltrados;

//-----------------------------------------MAP------------------------------------------------
//.map : crea un nuevo array con los resultados de la llamada a la función indicada
// aplicados a cada uno de sus elementos.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

nombreArticulos;

//-----------------------------------------FIND-------------------------------------------------

/*diferencia entre find y filter:

El método find () devuelve el primer valor que coincide de la colección.
Una vez que coincida con el valor en los resultados, 
no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. 
Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.*/

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

encuentraArticulo;

//------------------------------------------FOR EACH -----------------------------------------------
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//--------------------------------------------SOME---------------------------------------------------
//regresa solo True o False
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos;
//imprime: true

//---------------------------------------------PUSH---------------------------------------------------
//El método .push() nos permite agregar uno o más elementos al final de un array.

let numArray = [1,2,3,4,5];

function newNum() {
    numArray.push(6,7);
    console.log(numArray);
}

newNum();

//Ahora con string
let txtArray = ["Ian", "Dibu", "Kevin", "Robert"];

function addCharacters () {
    txtArray.push("Koku", "Luiz", "Chris");
    console.log(txtArray);
}

addCharacters();

//----------------------------------------------SHIFT----------------------------------------------------

//.shift() eliminar el primer elemento de un array, 
//es decir, elimina el elemento que esté en el índice 0.

let array = [1,2,3,4,5];
console.log(array);

let arrayShift = array.shift();

console.log(arrayShift);

//----------------------------------------------POP--------------------------------------------------------

/*El método .pop() eliminará el último elemento de un array.
En este sentido, si tenemos un array de 5 elementos, 
pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.*/

let arrayPop = array.pop();
 console.log(arrayPop);