
alert ("¡Participá en nuestro sorteo. Adiviná hace cuántos años estamos trabajando para ustedes y ganá un voucher con un 20% de descuento en el producto que quieras llevarte! Tenés 3 oportunidades. ¡Elegí bien!")

let tryAgain = true;
let contador = 0;

do {
    let userAnswer = prompt ("Ingrese un número.");
    let answer = "15";

    if (userAnswer === answer) {
        alert ("¡Tu respuesta " +answer+ " es correcta! Ganaste un voucher!");
        tryAgain = false;
    } else {
        alert ("Tu respuesta no es correcta.");
    }

    if (contador === 2) {
        tryAgain = false;
        alert ("¡Ya fue tu 3er intento! La próxima será. ¡Gracias por participar!")
    }

    contador++;

} while (tryAgain);


   