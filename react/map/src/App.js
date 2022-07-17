import React, {Component} from 'react';

class App extends Component {
  state = {
    dev:[
      {nome: 'Shiellyn', age: 20, team: 'Frontend'},
      {nome:'Caroline', age: 22, team: 'Frontend'},
      {nome: 'Maria', age: 26, team: 'Backend'},
      {nome: 'Thais', age: 23, team:  'Backend'}
    ],
    paises: [
      { pais: 'Brasil', idioma: 'portugues', comida: 'Arroz e feijão' },
      { pais: 'Holanda', idioma: 'holandês', comida: 'Stamppot' },
      { pais: 'Alemanha', idioma: 'Alemão', comida: 'Sauerkraut' },
      { pais: 'Canada', idioma: 'Inglês/Francês', comida: 'Poutine' }
    ],
    cachorros: [
      {nome: 'Dengo', idade: 4, raca: 'Poddle', cor: 'Branco'},
      {nome: 'Mel', idade: 3, raca: 'SRD', cor: 'Caramelo'},
      {nome: 'Teddy', idade: 2, raca: 'SRD', cor: 'Preto e Branco'}
    ],
    filmes: [
      {nome: 'Resgate', genero:'ação', ano: 2020},
      {nome: 'jurassic world', genero:'ação', ano: 2015},
      {nome: 'Avatar', genero:'Fantasia', ano: 2009}
    ],
    praias: [
      {nome: 'Praia dos Carneiros', localidade: 'Pernambuco'},
      {nome: 'Praia de Copacabana', localidade: 'Rio de Janeiro'},
      {nome: 'Praia Grande', localidade: 'São Paulo'}
    ],
    Cantores:[
      {nome: 'Anitta', idade: 28, musica: 'Envolver'},
      {nome: 'Danny Ocean', idade: 29, musica: 'Fuera del Mercado'},
      {nome: 'Maria Becerra', idade: 22, musica: 'No eres tu soy yo'},
    ]
  }

  render(){
    return(
      <section>
    {this.state.dev.map((rastreador =>(
    <p>Meu nome é {rastreador.nome} tenho {rastreador.age} anos de idade
     e minha área preferida do desenvolvimento é o {rastreador.team} </p>
      )))}
      <div>
        {this.state.paises.map((rastreador =>(
          <p>No {rastreador.pais} o idioma falado é o {rastreador.idioma} e um dos pratos típicos é o {rastreador.comida}</p>
        )))}
      </div>
      <div>
        {this.state.cachorros.map((rastreador =>(
          <p>Eu tenho um cachorro(a) chamado(a) {rastreador.nome} ele(a) tem {rastreador.idade} anos de idade
           a raça dele é {rastreador.raca} e a cor do seu pelo  é {rastreador.cor}</p>
        )))}
      </div>
      <div>
        {this.state.filmes.map((rastreador =>(
          <p>Eu gosto do filme {rastreador.nome} do gênero {rastreador.genero} que foi lançado no ano de {rastreador.ano}</p>
        )))}
      </div>
      <div>
        {this.state.praias.map((rastreador =>(
          <p>A {rastreador.nome} fica em {rastreador.localidade}</p>
        )))}
      </div>
      <div>
        {this.state.Cantores.map((rastreador =>(
          <p>{rastreador.nome} tem {rastreador.idade} anos de idade e canta a música {rastreador.musica}</p>
        )))}
      </div>
      </section>
    )
  }
}


export default App;
