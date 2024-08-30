// Escribe un programa que pida un número y diga si es divisible por 2
const numero = prompt('Ingrese un número');

if (numero % 2 === 0) {
    document.write(`El ${numero} es divisible por 2.`);
  } else {
    document.write(`El ${numero} no es divisible por 2.`);
  }