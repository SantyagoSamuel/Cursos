//FOR
var estudiantes = ["Koku", "LuiZ", "Alets", "Jaimen"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}




//FOR OF
var estudiantes2 = ["Koku", "LuiZ", "Alets", "Jaimen"];

function saludarEstudiantes2(estudiante2) {
    console.log(`Hola, ${estudiante2}`);
}

for(var estudiante2 of estudiantes2){
    saludarEstudiantes2(estudiante2);
}