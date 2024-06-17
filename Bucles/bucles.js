// introducir numero entere 50 y 100, si no vuelve a pedirlo

let numero = parseInt(prompt("Introduce un numero entre 50 y 100"));

while (isNaN(numero) || numero < 50 || numero > 100) {
    alert("Introduce un numero entre 50 y 100");
    numero = parseInt(prompt("Introduce un numero entre 50 y 100"));
}