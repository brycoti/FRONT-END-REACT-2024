const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un entero: ', (input) => {
    let numero = parseInt(input);

    if (isNaN(numero) || numero < 2 || numero > 10) {
        console.log("Escribe un numero entre 50 y 100");
        
    } else {
        console.log(`El número ingresado es: ${numero}`);
        rl.close();
    }
});