// 3) Crea una funcion que te permita calcular el area de un cuadrado

function calcularAreaCuadrado(lado) {
  return lado * lado;
}

var medidaVal = ["cm", "mm", "m", "dam", "hm", "dm"];
let lado = prompt("Por favor, ingrese el valor del lado del cuadrado:");

// Convertir el valor ingresado a un número
lado = parseFloat(lado);

var medida = prompt(
  "Ingresa la unidad de longitud (cm, mm, m, dam, hm, dm): "
).toLowerCase();

if (!medidaVal.includes(medida)) {
  alert("Unidad de longitud incorrecta");
} else if (isNaN(lado) || lado <= 0) {
  alert("Por favor, ingrese un valor válido para el lado del cuadrado.");
} else {
  let area = calcularAreaCuadrado(lado);
  alert("El área del cuadrado es: " + area + " " + medida + "²");
}
