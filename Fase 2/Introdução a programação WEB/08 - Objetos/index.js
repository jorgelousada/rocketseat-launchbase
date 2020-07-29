  
/* 
    Aula sobre Objetos
    Objeto é uma coleção de propriedades que recebem valores ou funcionalidades.
*/

// Objeto em JS
const aluno01 = {
    nome: "Mayk", // Propriedade 1
    nota: 9.8     // Propriedade 2
}

const aluno02 = {
    nome: "Diego",
    nota: 10
}

const aluno03 = {
    nome: "Fulano",
    nota: 2.3
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

//Console é um objeto e log é um metodo deste objeto.
console.log(media);