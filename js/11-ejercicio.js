// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const numero = parseInt(numero = prompt("Ingrese un numero: "))

if(numero % 2 == 0 )
    document.write("<p>El numero: "+numero+ ' Es divisible en 2 </p>')
if(numero % 3 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 3 </p>')
if(numero % 5 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 5 </p>')
if(numero % 7 == 0)
    document.write("<p>El numero: "+numero+ ' Es divisible en 7 </p>')