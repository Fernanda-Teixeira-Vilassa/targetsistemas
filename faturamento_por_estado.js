// Valores de faturamento mensal por estado
const faturamentoEstados = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
};

// Calcular o valor total mensal
const totalMensal = Object.values(faturamentoEstados).reduce((total, valor) => total + valor, 0);

// Calcular o percentual de representação de cada estado
const percentuais = {};
for (const estado in faturamentoEstados) {
    percentuais[estado] = (faturamentoEstados[estado] / totalMensal) * 100;
}

// Imprimir os resultados
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
