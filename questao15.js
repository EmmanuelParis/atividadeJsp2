const matriz = [
    [15, 2, 9],
    [33, 72, 29],
    [100, 5, 2]
];



function somaMatriz(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

console.log(somaMatriz(matriz))