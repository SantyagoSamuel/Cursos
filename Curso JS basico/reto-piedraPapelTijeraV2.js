var pregunta = prompt("ingresa tu opción: piedra, papel o tijera");
var user = pregunta.toLowerCase();

var options = ["piedra", "papel", "tijeras"];
var cpu = options[Math.floor(Math.random()*3)];

if (user!="papel" && user!="piedra" && user!="tijeras"){
    console.log("¡VALOR INVALIDO!, debe introducir una de las siguientes opciones: piedra, papel, tijeras");
}else{
    console.log("Has escogido: " + user);
    console.log("la computadora ha escogido: " + cpu);
}

|
function play(user, cpu) {
    switch(true){
        case (user==="piedra" && cpu==="tijeras"):
            console.log("Has ganado con: "+user);
            break;
        case (user==="papel" && cpu==="piedra"):
            console.log("Has ganado con: "+user);
            break;
        case (user==="tijeras" && cpu==="papel"):
            console.log("Has ganado con: "+user);
            break;

        case (cpu==="piedra" && user==="tijeras"):
            console.log("Has perdido contra: "+cpu);
            break;
        case (cpu==="papel" && user==="piedra"):
            console.log("Has perdido contra: "+cpu);
            break;
        case (cpu==="tijeras" && user==="papel"):
            console.log("Has perdido contra: "+cpu);
            break;
        
        default:
            console.log("Empate");
    }
}

play(user,cpu);