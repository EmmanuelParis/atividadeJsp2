var readline = require('readline-sync');

var num = readline.questionInt("Digite um numero: ");

function fatorial(num){

    var fatorial = 1;

    for (; num != 1; num--){
        fatorial *= num
    }

    return fatorial
}

console.log("Fatorial:", fatorial(num));
