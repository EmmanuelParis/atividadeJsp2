var readline = require('readline-sync');

const numeros = []

while (true) {
    var num = readline.questionInt("Digite um numero [0 - Sair]: ")
    if (num == 0){
        break
    }
    numeros.push(num)
}

function somarArray(numeros){

    var valorInicial = 0;

    const somaNumeros = numeros.reduce((acumulador, valor) => acumulador + valor, valorInicial);

    return somaNumeros
}

console.log(somarArray(numeros));
