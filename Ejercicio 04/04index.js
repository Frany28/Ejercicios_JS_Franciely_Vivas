/*4) Realiza una calculadora que permita realizar 
las operaciones basicas (suma, resta, multiplicacion y division) con dos numeros, debe preguntarte el numero1, 
el numero2 y la operacion que deseas realizar*/

// Matriz de operaciones válidas
var operacionesValidas = ["suma", "resta", "multiplicacion", "division"];
var resultado;

// Solicitar el primer número y validarlo
do {
    var numero1 = parseFloat(prompt("Ingresa el primer número:"));
    if (isNaN(numero1)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (isNaN(numero1));

// Solicitar el segundo número y validarlo
do {
    var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (isNaN(numero2)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (isNaN(numero2));

// Solicitar la operación y validarla
do {
    var operacion = prompt("Ingresa la operación que deseas realizar (suma, resta, multiplicacion, division)").toLowerCase();
    if (!operacionesValidas.includes(operacion)) {
        alert("Operación no válida. Intenta de nuevo.");
    }
} while (!operacionesValidas.includes(operacion));

// Realizar la operación y mostrar el resultado
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        break;
    case "resta":
        resultado = numero1 - numero2;
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        break;
    case "division":
        if (numero2 === 0) {
            resultado = "Error: División por cero";
        } else {
            resultado = numero1 / numero2;
        }
        break;
    default:
        resultado = "Operación no válida";
}

alert("El resultado de la " + operacion + " es: " + resultado);