//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
const numero1 = parseInt(prompt ('Ingresa el primer número'));
const numero2 = parseInt(prompt ('Ingresa el segundo número'));
const numero3 = parseInt(prompt ('Ingresa el tercer número'));

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

document.write(`El mayor de los tres números es ${mayor}`);