/* 
    OPERADORES LÓGICOS
    &&  "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    ||  "OU" Uma das condicções deve ser verdadeira
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição. 
*/

console.log(5 == 5 && 6 == 6);  //True
console.log(5 == 5 && 6 != 6);  // False

console.log(5 != 5 || 6 == 6);  //True
console.log(5 == 5 || 6 != 6);  //True

console.log(!(5>6));    //True
console.log(!(5<6));    //False

/* 
    OPERADORES ARITIMETICOS
    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração
*/
console.log(2*2);   //4
console.log(2/2);   //1
console.log(2%1.5); //0.5
console.log(2+2);   //4
console.log(2-2);   //0

// Resolução do desafio com operadoores lógicos
const idade = 18;

//Verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if (!(idade>= 18) || idade == 17) {
    console.log("Bloquear Entrada.");
} else {
    console.log("Deixar entrar.");
}

//Se a pessoa tiver 17 anos, avista para voltar quando maior de idade
if (idade === 17) {
    console.log('Volte quando tiver de 18 anos.')
}