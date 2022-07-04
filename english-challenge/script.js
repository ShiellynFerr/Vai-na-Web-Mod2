//Crie 3 variáveis, cada uma com um array:
//- Comedy
//-Action
//-Fantasy

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
//-title:
//-director:
//-year: 

//Array Comedy

let comedy = [{
    title:'Love Hard',
    director: 'Hernan Jimenez',
    year: 2021
},
{
    title:'Bridesmaids',
    director: 'Paul Feig',
    year: 2011
},
{
    title:'The Hangover',
    director: 'Todd Phillips',
    year: 2009
}
];

//Array Action
let action = [{
    title:'White Chicks',
    director: 'Keenan Ivory Wayans',
    year: 2004
},
{
    title: 'Extraction',
    director: 'Sam Hargrave',
    year: 2020
},
{
    title: 'Extraction',
    director: 'Sam Hargrave',
    year: 2020
},
{
    title: 'Star Trek',
    director: 'J.J. Abrams',
    year: 2009
}
];

//Array Fantasy
let fantasy = [{
    title:'Mean Girls',
    director: 'Mark Waters',
    year: 2004
},
{
    title:'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    director: 'Andrew Adamson',
    year: 2005
},
{
    title:'The Wizard of Oz',
    director: 'Victor Fleming',
    year: 1939
},
];

//*DESAFIO EXTRA* 

//Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

if(action[1].title === 'Extraction'){
    console.log('MY FAVORIT MOVIE IS Extraction')
} else {
    console.log('NOT EVEN 5 STARS...')
}