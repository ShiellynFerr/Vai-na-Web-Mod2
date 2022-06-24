let frase = 'Gatos são os melhores amigos dos humanos';

frase.replace('amigos', 'inimigos');

console.log(frase);


let nome = 'João';

if(nome.substring(0,1) === 'L') {
    console.log('Seu nome começa com L');
} else {
    console.log('Seu nome não começa com L')
}

function oi() {
    console.log('Olá mundo');
}

oi();

function mostrarNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

mostrarNome('Shiellyn');


//criar uma função que exibe uma mensagem no console
function clima() {
    console.log('O clime está frio');
   }
   
   clima()

//criar uma função que recebe um nome como parâmetro e o exiba no console

function sobrenome(sobrenome){
    console.log(`meu sobrenoe é ${sobrenome}`)
}

sobrenome('Ferreira')