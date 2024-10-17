var readline = require('readline-sync');

const numeros = []

while (true) {
    var num = readline.questionInt("Digite um numero [0 - Sair]: ")
    if (num == 0){
        break
    }
    numeros.push(num)
}

function numerosQuadrados(numeros){

    const listaNumerosQuadrados = [];

    for(var numero of numeros){
        if (numero > 10){
            listaNumerosQuadrados.push(numero**2);
        }
    }

    return listaNumerosQuadrados
}

console.log(numeros);

console.log(numerosQuadrados(numeros));
