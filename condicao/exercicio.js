//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 20;

if(idade >= 18) {
    console.log('Você pode beber bebida alcoolica');
} else [
    console.log('Você não pode beber bebida alcoolica')
]

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = true;

if(idade >= 18 && humano == true){
    console.log(`Você é humano e possui ${idade} anos de idade`);
}


//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let janeiro = true;
let dezembro = false;

if(janeiro === true || dezembro == true) {
    console.log("FELIZ ANIVERSÁRIO")
} else {
    console.log('Você não faz aniversário nem em Janeiro e nem em Dezembro');
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = 'Shiellyn';
console.log(nome[0]);

if(nome[0] == 'R') {
    console.log(`Seu nome começa com a letra R`);
} else {
    console.log(`Seu nome não começa com a letra R, seu nome começa com a letra ${nome[0]}`);
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = 'Ferreira';

if(sobrenome.length > 6 || nome[0] == 'E') {
    console.log(`${sobrenome} é um sobrenome que possui mais de 6 letras e seu nome começa com a letra ${nome[0]}`);
} else {
    console.log(`${nome} começa com a letra E e ${sobrenome} não é um sobrenome que possui mais de 6 letras e seu nome começa com a letra ${nome[0]}`);
}

