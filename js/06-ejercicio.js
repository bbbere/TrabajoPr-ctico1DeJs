// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const numero1 = parseInt(prompt ('Ingresa un número'))
const numero2 = parseInt(prompt ('Ingresa otro número'))

if (numero1 > numero2) {
    document.write(`${numero1} es el mayor de los dos números ingresados`);
} else if (numero2 > numero1) {
    document.write(`${numero2} es el mayor de los dos números ingresados`);
} else {
    document.write('Ambos números son iguales');
}