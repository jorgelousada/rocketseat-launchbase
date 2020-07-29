/* 
    Resolução do desafio 01 
    - Cálculo de IMC
    - Cálculo de aposentadoria
*/

// Cálculo de IMC
const nomeImc = 'Priscila'
const pesoImc = 55
const alturaImc = 1.65
const sexoImc = 'femenino'

const imc = (pesoImc / (alturaImc * alturaImc))

if (imc >= 30) {
    console.log(`${nomeImc} você está acima do peso!`)
} else {
    console.log(`${nomeImc} você não está acima do peso!`)
}


// Cálculo de aposentadoria
/* const nomeAposentadoria = "Silvana";
const sexo = "F";
const idade = 56;
const contribuicao = 29; */

const nomeAposentadoria = "Manoel";
const sexo = "M";
const idade = 50;
const contribuicao = 35;

if (sexo == 'F' && contribuicao >= 30 || sexo == 'F' && (idade + contribuicao) >= 85) {
    console.log(`${nomeAposentadoria} você pode se aposentar`)
} else if (sexo == 'M' && contribuicao >= 35 || sexo == 'M' && (idade + contribuicao) >= 95) {
    console.log(`${nomeAposentadoria} você pode se aposentar`)
} else {
    console.log(`${nomeAposentadoria} você não pode se aposentar`)
}