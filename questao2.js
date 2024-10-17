var readline = require('readline-sync');

var num = readline.questionInt("Digite um numero inteiro: ")

function somaAteN(num){
    var soma = 0;

    for (; num != 0; num--){
        soma += num 
    }
    
    return soma
}

console.log("A soma dos numeros até chegar em 1 é:", somaAteN(num));
