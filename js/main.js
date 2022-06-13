
alert ("Participá en nuestro sorteo. Adiviná hace cuántos años estamos trabajando para ustedes y ganá un voucher con un 20% de descuento en el producto que quieras llevarte! Elegí bien!")

let tryAgain = true;

do {
    let userAnswer = prompt ("Ingrese un número.");
    let answer = "15";

    if (userAnswer === answer) {
        alert ("Tu respuesta " +answer+ " es correcta! Ganaste un voucher!");
        tryAgain = false;
    } else {
        alert ("Tu respuesta no es correcta!");
    }
    
} while (tryAgain);


   