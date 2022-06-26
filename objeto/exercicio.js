
// Crie um objeto que receba ao menos três propriedades sobre você.
let dados = {
    nome: 'Shiellyn',
    idade: 20,
    altura: 1.57
}

console.log(dados)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

dados.cidade = 'São Paulo';
console.log(dados)

// Remova uma propriedade desse objeto.

delete dados.idade

//Mostre no console todas as propriedades desse objeto.

console.log(dados);

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const cadastros = [{
    nome: 'Maria',
    idade: 22,
    telefone: 954939800,
    amigos: ['Laura', 'khuan', 'Vitória', 'João']
  },
  {
    nome: 'Bruno',
    idade: 30,
    telefone: 97096052,
    amigos:['Roberto', 'Karol', 'Gabriela', 'Fernando']
  },
  {
    nome: 'Bruna',
    idade: 20,
    telefone: 94309781,
    amigos:['Vinicius', 'Roberta', 'Carol', 'Mariana']
  },
  {
    nome: 'Gabriel',
    idade: 22,
    telefone: 934941922,
    amigos: ['Leornardo', 'Lucas', 'Maria', 'Matheus']
  },
  {
    nome: 'Shiellyn',
    idade: 20,
    telefone: 954939800,
    amigos: ['Khamily', 'Aryane', 'Maria', 'Gabriel']
  }
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastros[0].amigos[2]);
console.log(cadastros[1].amigos[0]);
console.log(cadastros[2].amigos[1]);
console.log(cadastros[3].amigos[3]);
console.log(cadastros[4].amigos[3]);
