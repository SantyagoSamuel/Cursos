var opcion1 = "Piedra";
var opcion2 = "Papel";
var opcion3 = "Tijeras";

function jugar(user,cpu) {
    if (user!=cpu) {
        if (user === "Piedra" && cpu === "Tijeras") {
            console.log("El usuario ha ganado con " + user);
        }else if (user === "Papel" && cpu === "Piedra"){
            console.log("El usuario ha ganado con " + user);
        }else if (user === "Tijeras" && cpu === "Papel"){
            console.log("El usuario ha ganado con " + user);
        }else if (cpu === "Piedra" && user === "Tijeras"){
            console.log("El usuario ha perdido contra " + cpu);
        }else if (cpu === "Papel" && user === "Piedra"){
            console.log("El usuario ha perdido contra " + cpu);
        }else if (cpu === "Tijeras" && user === "Papel"){
            console.log("El usuario ha perdido contra " + cpu);
        }
    }else{
        console.log("Empate");
    }
}

jugar(opcion1,opcion2);