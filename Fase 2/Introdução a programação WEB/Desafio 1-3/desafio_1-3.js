/* 
    Resolução do desafio 03 
    - Usuários e tecnologias
    - Busca por tecnologia
    -Soma de despesas e receitas
*/

//Usuários e tecnologias
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function imprimeInfoUsuarios(usuarios) {
    for (usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
    }
}

imprimeInfoUsuarios(usuarios)

//Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
    for (tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true
        }
    }
    return false
}

//Busca por tecnologia com operador ternario
function checaSeUsuarioUsaCSSTernario(usuario) {
    let usaCss
    for (tecnologia of usuario.tecnologias) {
        usaCss = tecnologia == 'CSS' ? true : false
    }
    return usaCss
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

//Soma de despesas e receitas
const usuarios2 = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return (somaReceitas - somaDespesas)
}

function somaNumeros(numeros) {
    let soma = 0
    for (numero of numeros) {
        soma += numero
    }
    return soma
}

function exibeSaldo(usuarios) {
    for (usuario of usuarios) {
        const saldo = calculaSaldo(usuario.receitas, usuario.despesas)
        if (saldo > 0) {
            console.log(`${usuario.nome} possui saldo POSITIVO de R$${saldo}`)
        } else {
            console.log(`${usuario.nome} possui saldo NEGATIVO de R$${saldo}`)
        }
    }
}

exibeSaldo(usuarios2)
