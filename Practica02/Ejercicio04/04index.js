function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

var medidaVal = ["cm", "mm", "m", "dam", "hm", "dm"];

let base = prompt("Por favor, ingrese el valor de la base del triángulo:");
let altura = prompt("Por favor, ingrese el valor de la altura del triángulo:");

// Convertir los valores ingresados a números
base = parseFloat(base);
altura = parseFloat(altura);

var medida = prompt(
  "Ingresa la unidad de longitud (cm, mm, m, dam, hm, dm): "
).toLowerCase();

if (!medidaVal.includes(medida)) {
  alert("Unidad de longitud incorrecta");
} else if (isNaN(altura) || altura <= 0) {
  alert("Por favor, ingrese un valor válido para la altura del triángulo.");
} else if (isNaN(base) || base <= 0) {
  alert("Por favor, ingrese un valor válido para la base del triángulo.");
} else {
  let resultado = calcularAreaTriangulo(base, altura);

  alert("El área del triángulo es: " + resultado + " " + medida + "²");
}
