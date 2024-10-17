const alunos = [{nome: 'Ana', nota: 8 }, {nome: 'Carlos', nota: 5 }, {nome: 'João', nota: 7 }];

function resultadoAlunos(alunos){

    for(var aluno of alunos)
        if(aluno.nota >= 7) {
            console.log(aluno.nome +":"+" Aprovado");
        } else {
            console.log(aluno.nome +":"+" Reprovado");
        }

}

resultadoAlunos(alunos);