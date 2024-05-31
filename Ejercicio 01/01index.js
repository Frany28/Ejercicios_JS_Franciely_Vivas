/* 1) Realizar un programa que permita determinar si un número es par o impar */
var op = prompt("Introduce un número");

if (op !== null) {
  op = parseInt(op, 10);
  if (!isNaN(op)) {
    if (op % 2 === 0) {
      alert("El número " + op + " es un número par");
    } else {
      alert("El número " + op + " es un número impar");
    }
  } else {
    alert("Por favor, introduce un número válido");
  }
} else {
  alert("No se introdujo ningún número");
}