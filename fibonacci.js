function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (a <= numero) {
        if (a === numero) {
            return true;
        }
        const temp = a;
        a = b;
        b = temp + b;
    }
    return false;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número para verificar se está na sequência de Fibonacci: ", function(numero) {
    numero = parseInt(numero);
    if (verificaFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
    }
    rl.close();
});
