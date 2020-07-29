/* 
    Aula sobre Vetores
*/

// É possivel ter um vetor de objetos já que objeto é um tipo.
const alunos = [
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
console.log(alunos);

// Ou um vetor de Strings
const nomesDeAlunos = ["Mayk","Diego","Fulano"];
console.log(nomesDeAlunos);

//Acessando as propriedades dos objetos em um vetor
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

//Console é um objeto e log é um metodo deste objeto.
console.log(`A média da turma foi de: ${media}`);