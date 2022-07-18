alert("¡Hola! ¡Bienvenido de vuelta! \n\nEste programa le pedirá ingresar por teclado tres números y los devolverá en orden ascendente.")

function pedirPrimerNumero() {
    let primerNumero = parseInt(prompt("Ingrese el primer número:"));
    console.log("Fue ingresado el número " + primerNumero + ".");
    return primerNumero;
}

function pedirSegundoNumero() {
    let segundoNumero = parseInt(prompt("Ingrese el segundo número:"));
    console.log("Fue ingresado el número " + segundoNumero + ".");
    return segundoNumero;
}

function pedirTercerNumero() {
    let tercerNumero = parseInt(prompt("Ingrese el tercer número:"));
    console.log("Fue ingresado el número " + tercerNumero + ".");
    return tercerNumero;
}

function ordenarNumeros(firstNumber, secondNumber, thirdNumber) {

    firstNumber = pedirPrimerNumero();
    secondNumber = pedirSegundoNumero();
    thirdNumber = pedirTercerNumero();

    if (firstNumber <= secondNumber && firstNumber <= thirdNumber && secondNumber <= thirdNumber) {
        return "[" + firstNumber + ", " + secondNumber + ", " + thirdNumber + "]";
    } else if (firstNumber >= secondNumber && firstNumber <= thirdNumber && secondNumber <= thirdNumber) {
        return "[" + secondNumber + ", " + firstNumber + ", " + thirdNumber + "]";
    } else if (firstNumber <= secondNumber && firstNumber <= thirdNumber && secondNumber >= thirdNumber) {
        return "[" + firstNumber + ", " + thirdNumber + ", " + secondNumber + "]";
    } else if (firstNumber <= secondNumber && firstNumber >= thirdNumber && secondNumber >= thirdNumber) {
        return "[" + thirdNumber + ", " + firstNumber + ", " + secondNumber + "]";
    } else if (firstNumber >= secondNumber && firstNumber >= thirdNumber && secondNumber <= thirdNumber) {
        return "[" + secondNumber + ", " + thirdNumber + ", " + firstNumber + "]";
    } else {
        return "[" + thirdNumber + ", " + secondNumber + ", " + firstNumber + "]";
    }
}

let numerosOrdenados = ordenarNumeros();
console.log(numerosOrdenados);
alert("Orden de los números de manera ascendente: " + numerosOrdenados);

function preguntar() {
    return parseInt(prompt("¿Desea continuar? \n\n1: Reiniciar el programa. \n2: Finalizar el programa. \n"));
}

var option = preguntar();

while (option == 1) {
    let numerosOrdenados = ordenarNumeros();
    console.log(numerosOrdenados);
    alert("Orden de los números de manera ascendente: " + numerosOrdenados);
    option = preguntar();
}

console.log("El programa ha finalizado.");
alert("¡Hasta luego!");