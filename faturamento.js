const fs = require('fs');

function calcularEstatisticasFaturamento(faturamentoMensal) {
    // Encontrar o menor e o maior valor de faturamento
    const menorValor = Math.min(...faturamentoMensal);
    const maiorValor = Math.max(...faturamentoMensal);

    // Calcular a média mensal, ignorando os dias sem faturamento
    const faturamentoDiasValidos = faturamentoMensal.filter(valor => valor > 0);
    const mediaMensal = faturamentoDiasValidos.reduce((acc, cur) => acc + cur, 0) / faturamentoDiasValidos.length;

    // Contar o número de dias em que o faturamento diário foi superior à média mensal
    const diasAcimaDaMedia = faturamentoDiasValidos.filter(valor => valor > mediaMensal).length;

    return { menorValor, maiorValor, diasAcimaDaMedia };
}

// Carregar os dados do arquivo JSON
const faturamentoMensal = JSON.parse(fs.readFileSync('faturamento_mensal.json', 'utf8'));

const { menorValor, maiorValor, diasAcimaDaMedia } = calcularEstatisticasFaturamento(faturamentoMensal);

console.log(`Menor valor de faturamento: ${menorValor}`);
console.log(`Maior valor de faturamento: ${maiorValor}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
