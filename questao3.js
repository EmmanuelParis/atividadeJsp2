var readline = require('readline-sync');

var idade = readline.questionInt("Digite sua idade: ")

if (idade >=  18){
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}