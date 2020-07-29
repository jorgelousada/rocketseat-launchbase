/* 
    Criar um programa que calcula a média das notas entre os alunos e 
    envia mensagem do calculo da média.

    */
   const aluno01 = 'Jorge'
   const notaAluno01 = 8.8
   
   const aluno02 = 'Mayk'
   const notaAluno02 = 10.0
   
   const aluno03 = 'Francisco'
   const notaAluno03 = 5.5
   
   const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média for maior que 5 parabenizar a turma.

// Estrutura condicional
if(media >= 5){
    console.log(`A nota foi de ${media}. Parabéns!`)
}else{
    console.log('A média é menor que 5. Estudem mais!')
}


