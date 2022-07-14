let username = prompt("Por favor, ingresá tu nombre:");

alert("¡Hola, " + username + "! Te doy la bienvenida. \n\nEste programa calcula el factorial de un número ingresado y muestra el resultado por consola. \n\nAl ingresarse un número negativo, el programa finaliza.");

let numero = parseInt(prompt("¿De qué número querés calcular su factorial?"));
let primerNumero = numero
let factorial = numero;

while (numero > 1) {
    factorial = factorial * (numero - 1);
    numero--;
}

if (numero == 0) {
    console.log(numero + "! = 1")
} else if (numero > 0) {
    console.log(primerNumero + "! = " + factorial);
} else {
    console.log("No puedo calcular el factorial de un número negativo.");
}