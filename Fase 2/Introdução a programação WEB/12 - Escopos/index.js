/* 
    Aula de escopos:
    Escopo global: pode ser acessado de qualquer escopo do código
    Escopo de bloco: a variavel só pode ser acessada dentro do escopo em 
                     que ela foi criada e dentro dos escopos filhos
    Return: retorna valor da variavel e encerra a execução da função. 
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
        nota: 7
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
    
    // Alterando variavel de escopo global
    alunos[0].teste = "teste";
    
    // Return finaliza a execução da função
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