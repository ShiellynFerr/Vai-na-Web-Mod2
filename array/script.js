 // Crie um array que receba 5 itens e exiba no console.

 let doces = ['Chocolate', 'bolo', 'pé de moleque', 'pudim', 'dunnots'];
 console.log(doces);


// Utilize um método para adicionar um nome ao inicio do array.

doces.unshift('Goiabada');
console.log(doces);


// Utilize um método para remover o último nome do array.

doces.pop();
console.log(doces);


// Utilize um método para adicionar dois nomes ao fim do array.

doces.push('Maçã do amor', 'Caramelo');
console.log(doces);


// Utilize um método para remover o primeiro nome do array.

doces.shift()
console.log(doces);


// Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4];
console.log(numbers);

numbers.sort((a,b) =>{
        return a - b;
})

console.log(numbers);
