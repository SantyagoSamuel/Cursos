var players = [];

function createPlayer(Nickname, Team, Position) {
    this.nickname = Nickname;
    this.team = Team;
    this.position = Position;
}

for(var i = 0; i < 20; i++){
    var nickname = prompt("inserta el NICKNAME del jugador");
    var team = prompt("inserta el EQUIPO del jugador");
    var position = prompt("inserta la POSICION del jugador");

    players.push(new createPlayer(nickname, team, position));
}

for(var i = 0; i < players.length; i++){
    console.log(players[i]);
}