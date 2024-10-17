const numeros = [1, 3, 5, 6, 9, 12];

function multiploDeTres(numeros) {
    const multiploTres = [];

    for (const numero of numeros) {
        if (numero % 3 === 0) {
            multiploTres.push(numero);
        }
    }

    console.log("Múltiplos de 3:", multiploTres);
    console.log("Total:", multiploTres.length);
}

multiploDeTres(numeros);
