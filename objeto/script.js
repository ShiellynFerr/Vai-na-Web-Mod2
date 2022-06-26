let dado = [ "joão", "debora", "kelly"] 
console.log(dado)
let casa = [ "rio ", "sp", "ba"] 
console.log(casa)


let dados = [ "joão", 19 , "Rio"] 
console.log(dados)

//dados.unshift('lindo')
dados.pop()
console.log(dados)


dados.shift()
console.log(dados)

dados.push('sp')
console.log(dados)

dados.splice( 1,2, `Os amigos de joão são ${dado}, e eles são felizes` )
console.log(dados)

dados.unshift('kelly')
console.log(dados)



const Paula = [{
  nome:"stefany", 
  idade:33,
  cidade: "brasilia",
},

{
  nome:"leandro", 
  idade:23,
  cidade:"rio",
},

{
  nome:"kelly", 
  idade:22,
  cidade:"sp",
}, 
{
  nome:"vitoria", 
  idade:23,
  cidade:"olinda",
}, 

]

console.log(Paula[2].cidade)
console.log(Paula[3].cidade)
console.table(Paula)





const cadastro = [{
  nome: 'Aline',
  idade: 30,
  cidade: 'rj',
  comidaFavorita: "pizza"
},
{
  nome: 'Jordan',
  idade: 22,
  cidade: 'fortaleza'
}
]
console.log(cadastro[1].nome)
console.log(cadastro[0].comidaFavorita)



const tabela =[{
  nome:"david",
  idade:20,
},
{
  nome:"kelly",
  idade:20
}]

console.log(tabela[1].nome)


const cadastros = [{
  nome: 'Leticia',
  idade: 22,
  cidade: 'Bertioga',
},
{
  nome: 'Guto',
  idade: 30,
  cidade: 'Rio',
},
{
  nome: 'João',
  idade: 20,
  cidade: 'São Paulo',
},]
console.log(cadastros[1].nome)


let variavel = 'David'

const dados1 = {
    nome: variavel,
    idade:19,
    endereço:'portugal',
    dinheiro:20.100,
    amigos:['João','paulinha', 'vitória' ]
}


dados1.comidaFavorita = 'carne assada' // adicionando uma propriedade no objeto
delete dados1.dinheiro // deletando uma propriedade no  objeto

console.table(dados1)