var readline = require('readline-sync');

var num = readline.questionInt("Digite um numero: ")

function numeroPrimo(numero){

    var divisores = 0;

    for(var i = 1; i <= numero; i++){
        if(numero%i==0)
            divisores++
    }

    if(divisores == 2){
        console.log("É primo");
    } else {
        console.log("Não é primo");
    }
}

numeroPrimo(num)