// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero
parseInt(numero = prompt("Ingrese un numero: "))

if(numero % 2 == 0 )
    document.write("<p>El numero: "+numero+ ' Es divisible en 2 </p>')
else if(numero % 3 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 3 </p>')
else if(numero % 5 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 5 </p>')
else if(numero % 7 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 7 </p>')