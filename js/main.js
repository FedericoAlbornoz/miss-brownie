
// Desafío Complementario 1

// alert ("¡Participá en nuestro sorteo. Adiviná hace cuántos años estamos trabajando para ustedes y ganá un voucher con un 20% de descuento en el producto que quieras llevarte! Tenés 3 oportunidades. ¡Elegí bien!")

// let tryAgain = true;
// let contador = 0;

// do {
//     let userAnswer = prompt ("Ingrese un número.");
//     let answer = "15";

//     if (userAnswer === answer) {
//         alert ("¡Tu respuesta " +answer+ " es correcta! Ganaste un voucher!");
//         tryAgain = false;
//     } else {
//         alert ("Tu respuesta no es correcta.");
//     }

//     if (contador === 2) {
//         tryAgain = false;
//         alert ("¡Ya fue tu 3er intento! La próxima será. ¡Gracias por participar!")
//     }

//     contador++;

// } while (tryAgain);




// Desafío Entregable 1

let precio = 0;
let cantidadProductos = 0;
let precioFinal = 0;
let inicio = false;

let productos = alert("¡Bienvenidx a Miss Brownie! ¿Qué desea comprar? Chequeá nuestra selección de productos:\n - Brownies y Alfajores \n - Cookies \n - Tartas y Lingotes");

const compra = (a, b) => a * b;

do {

    let elegirProducto = prompt("Ingrese el número del producto que desea comprar:\n 1. Brownie con Dulce de Leche y Merengue x12u $1100.\n 2. Brownie de Chocolate con Oreo y Dulce de Leche x12u $1200.\n 3. Brownie de Chocolate Blanco con Oreo x12u $1100.\n 4. Alfajores de Maicena x12u $650.\n 5. Alfajor con Ganache y Nueces x10u $800.\n 6. Alfajor Marroc x10u $800.\n 7. Cookies Americanas con Chips $740.\n 8. Cookies Rellenas de Nutella $980.\n 9. Red Velvet Cookies $850.\n 10. Lingote de Chocolate y Frambuesa $2900.\n 11. Lingote de Limón $2900.\n 12. Crumble de Manzana $2500.\n 13. Pastafrola $2000.\n 14. Lemon Pie $2300.\n 15. Red Velvet $3300.");

    let cantidadProductos = prompt("¿Cuántos querés comprar? Recordá que algunos productos se venden por docena. Leé atentamente los ítems.");

    switch (elegirProducto) {
        case "1":
            precio = 1100;
            break;
        case "2":
            precio = 1200;
            break;
        case "3":
            precio = 1100;
            break;
        case "4":
            precio = 650;
            break;
        case "5":
            precio = 800;
            break;
        case "6":
            precio = 800;
            break;
        case "7":
            precio = 740;
            break;
        case "8":
            precio = 980;
            break;
        case "9":
            precio = 850;
            break;
        case "10":
            precio = 2900;
            break;
        case "11":
            precio = 2900;
            break;
        case "12":
            precio = 2500;
            break;
        case "13":
            precio = 2000;
            break;
        case "14":
            precio = 2300;
            break;
        case "15":
            precio = 3300;
            break;
        default:
            alert ("El número ingresado no corresponde a una opción.");
            precio = 0;
            break;
    }

    let precioFinal = compra (precio, cantidadProductos);

    alert ("El valor final de la compra es de: $"+precioFinal);
    console.log (precioFinal);

    inicio = confirm ("¿Querés seguir comprando nuestros productos?")

    
} while (inicio);
   














   