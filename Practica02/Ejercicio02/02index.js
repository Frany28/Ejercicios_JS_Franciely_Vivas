/*
2) Crea una funcion que sirva como una calculadora y reciba dos numeros
y una operacion y retorne el resultado y posteriormente imprima el resultado
*/

function calculo(resultado = 0) {
  let operacion = prompt("Ingrese su operación matemática:");
  resultado = eval(operacion);
  return resultado;
}

// Llamada a la función y almacenamiento del resultado
resultado = calculo();
alert("El resultado es " + resultado);
