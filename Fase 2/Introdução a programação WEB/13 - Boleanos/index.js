/* 
    Aula de Booleanos
*/

const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 9.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2.3
    }
];

const alunosDaTurmaB = [
    {
        nome: "André",
        nota: 10
    },
    {
        nome: "Pedro",
        nota: 4.8
    },
    {
        nome: "Adriano",
        nota: 9.5
    }
];

function calculaMedia(alunos) {
    let soma = 0;
    for (let aluno of alunos) {
        soma += aluno.nota;
    }
    return (soma / alunos.length);
}

const mediaA = calculaMedia(alunosDaTurmaA);
const mediaB = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns!`);
    } else {
        console.log('A media é menor que 5.');
    }
}

enviaMensagem(mediaA, "A");
enviaMensagem(mediaB, "B");

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviamensagemReprovado(aluno);
    }
}

function enviamensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`);
    }
}

alunoReprovado(alunosDaTurmaA);
alunoReprovado(alunosDaTurmaB);

// Exibe dados tabulares como uma tabela
console.table(alunosDaTurmaA);