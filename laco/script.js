// let contador = 1;

// while(12 >= contador) {
//  console.log(contador);
//  contador+=1
// }


// for(let count = 1; count >= 12; count+=2);{
//     console.log(count)
// }

//Criar um loop que conte todos os números ímpares de 1 até 100 usando for e while

let numero = 1

while (100 >= numero){
    console.log (numero)
    numero +=2
}

// Descrição
// Nesta atividade o desafio está em transformar os dados fornecidos na entrada. Caso possível utilize uma abordagem funcional na resolução.
// Sua missão é implementar a função maioresQue5Invertido que:

// Recebe como argumento um número
// Retorna um novo número composto pelos dígitos maiores que 5 que integram o argumento, em ordem inversa.
// Caso nenhum dígito do argumento seja maior que 5, null deve ser retornado

function maioresQue5Invertido(num) {
    //insira aqui o seu código
    const invertido = num
      .toString()
      .split('')
      .filter((n) => n > 5)
      .reverse()
      .join('');
  
    if (invertido) {
      return Number(invertido);
    } else return null;
  }



