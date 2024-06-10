/* 1) Realizar un programa que permita determinar si un número es par o impar */
//ciclo do-while para validar los valores
  do {
    var op = prompt("Introduce un número: ");
    op = parseInt(op); // Convertir el valor ingresado a un número entero
    //isNaN usada para verificar si el valor ingresado es un numero y enviara true o false "is not a number"
    if (isNaN(op)){
      alert("Por favor, ingresa un número válido.");
    }
  } while (isNaN(op));
//Detetminar si el numero es par o impar
  if (op % 2 == 0) {
    alert("El número " + op + " es un número par.");
  } else {
    alert("El número " + op + " es un número impar.");
  }
