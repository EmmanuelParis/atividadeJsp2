var readline = require('readline-sync');

const frutas = [];

while (true) {
    var fruta = readline.question("Adicione uma fruta [0 - Sair]: ")
    if (fruta == 0){
        break;
    }
    frutas.push(fruta);
}

function atualizarFruta(fruta){
    return frutas.splice(1, 1, fruta);
}

console.log(frutas);

atualizarFruta('FRUTATESTE');

console.log(frutas);


