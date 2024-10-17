var readline = require('readline-sync');

var num1 = readline.questionFloat("Digite o primeiro numero: ");
var num2 = readline.questionFloat("Digite o segundo numero: ");

var soma = num1+num2

console.log("Soma dos numeros: ",soma);

if (num1 > num2){
    console.log("O numero", num1, "é o maior!");
} else {
    console.log("O numero", num2, "é o maior!");
}

if (soma % 2 == 0){
    console.log("A soma é par");
} else {
    console.log("A soma é ímpar");
    
}