let jugada = ["🥌", "📋", "✂️"]
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function eleccion(mensaje, player){
    for (let i = 0; i < jugada.length; i++) {
        if (i + 1 == player) {
            alert("La jugada "+mensaje+" es: "+jugada[i])
            break
        }
    }
}
function combate(player1, player2){
    if(player1 == player2){
        alert("Empate")
        return " "
    } 
    else if((player1 == 1 && player2 == 3)|| (player1 == 2 && player2 == 1) || (player1 == 3 && player2 == 2)){
        alert("Ganaste")
        return "triunfo"
    }          
    else if((player1 == 1 && player2 == 2)|| (player1 == 2 && player2 == 3) || (player1 == 3 && player2 == 1)){
        alert("Perdiste")
        return "perdida"
    }
    else{
        alert("Elegiste mal")
        return " "
    }
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let resultado
while (triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Elija su jugada: 1 para piedra, 2 para papel, 3 para tijera", jugador)
    //alert("La jugada del jugador es: "+ jugador)
    eleccion("del jugador", jugador)
    eleccion("de la PC", pc)
    //combate
    resultado = combate(jugador, pc)
    if(resultado == "triunfo")
        triunfos += 1
    else if(resultado == "perdida")
        perdidas += 1
    else
        continue
}
alert("Ganaste "+triunfos+" veces y perdiste "+perdidas+" veces.")