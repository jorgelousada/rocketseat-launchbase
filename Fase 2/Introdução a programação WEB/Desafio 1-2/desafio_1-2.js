/* 
    Resolução do desafio 02 
    - Construção e impressão de objetos
    - Vetores e objetos
*/

//Construção e impressão de objetos
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`)


//Vetores e objetos
const programador = {
    nome: 'Jorge',
    idade: 33,
    tecnologias: [{ nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)