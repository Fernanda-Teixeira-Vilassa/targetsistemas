const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

rl.question("Digite uma string para inverter: ", function(minhaString) {
    const stringInvertida = inverterString(minhaString);
    console.log("String invertida:", stringInvertida);
    rl.close();
});

