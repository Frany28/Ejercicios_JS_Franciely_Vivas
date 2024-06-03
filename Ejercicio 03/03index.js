/*   3) Realiza un programa que funcione como un semaforo, en donde se pueda ingresar un color y se muestre un mensaje dependiendo del color, 
si es verde imprima "Continua", amarillo imprima "despacio" o rojo "detente", sino es ninguno imprima "error"*/
//Matriz de opciones
var opciones = ["verde", "amarillo", "rojo"];

//ciclo do-while para validar los valores
do {
  var color = prompt("Ingresa el color (verde,amarillo,rojo):").toLowerCase();
  if(!opciones.includes(color))
  {
    alert("ERROR. La opcion no es valida, escribió: " + color);
  } 
} while (!opciones.includes(color));

// Determinar el resultado del juego
if (color==opciones[0]) {
  alert("Continua");
  }else if(color==opciones[1])
  {
    alert("Despacio");
  }else if(color==opciones[2])
    {
      alert("Detente");
    }
