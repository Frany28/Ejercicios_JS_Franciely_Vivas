/* 2) Realiza un piedra papel o tijera en donde dos jugadores ingresen su opcion y se determine quien gana*/
//Matriz de opciones
var opciones = ["piedra", "papel", "tijera"];
//ciclo do-while para validar los valores
do {
  jug01 = prompt("Jugador 01, elige tu opción (piedra, papel, tijera):").toLowerCase();
  jug02 = prompt("Jugador 02, elige tu opción (piedra, papel, tijera):").toLowerCase();

  if (!opciones.includes(jug01)) {
    alert("La opción del jugador 01 no es válida, escribió: " + jug01);
  }
  
  if (!opciones.includes(jug02)) {
    alert("La opción del jugador 02 no es válida, escribió: " + jug02);
  }
  
} while (!opciones.includes(jug01) || !opciones.includes(jug02));

// Determinar el resultado del juego
if (jug01 == jug02) {
  alert("Empate! Ambos jugadores eligieron: " + jug01);
  } else if ((jug01 == "piedra" && jug02 == "tijera") || (jug01 == "papel" && jug02 == "piedra") || (jug01 == "tijera" && jug02 == "papel")) 
    {
      alert("Jugador 01 gana con " + jug01 + " contra " + jug02);
      } else{
        alert("Jugador 02 gana con " + jug02 + " contra " + jug01);
      }