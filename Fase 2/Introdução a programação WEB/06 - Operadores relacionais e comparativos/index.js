/* 
    OPERADORES DE COMPARAÇÃO:
    >       MAIOR
    <       MENOR
    >=      MAIOR IGUAL A
    <=      MENOR IGUA A
    ==      IGUAL A
    ===     IGUAL A E DO MESMO TIPO
    !=      DIFERENTE DE 
    !===    DIFERENTE DE E DO MESMO TIPO
*/

console.log(4 == "4");  //True
console.log(4 === "4"); //False
console.log(4 != "5");  //True
console.log(4 !== "5"); //True

//DESAFIO 01

const idade = 17;

//Verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (idade>= 18) {
    console.log("Deixar entrar.");
} else {
    console.log("Bloquear Entrada.");
}

//Se a pessoa tiver 17 anos, avista para voltar quando maior de idade
if (idade === 17) {
    console.log('Volte quando tiver de 18 anos.')
}