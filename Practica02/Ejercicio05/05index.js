//  5) Crea una funcion que te permita calcular la hipotenusa de un triangulo

function calcularHipotenusa(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

let a = parseFloat(
  prompt("Por favor, ingrese el valor del primer cateto (a): ")
);
let b = parseFloat(
  prompt("Por favor, ingrese el valor del segundo cateto (b): ")
);

if (isNaN(a) || a <= 0) {
  alert("Por favor, ingrese un valor válido para el primer cateto (a).");
} else if (isNaN(b) || b <= 0) {
  alert("Por favor, ingrese un valor válido para el segundo cateto (b).");
} else {
  let hipotenusa = calcularHipotenusa(a, b);

  alert("La hipotenusa del triángulo es: " + hipotenusa.toFixed(2));
}
