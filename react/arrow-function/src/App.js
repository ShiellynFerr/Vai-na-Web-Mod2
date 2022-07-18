import React, {Component} from "react";

class App extends Component{
state ={
  nome: ['Larissa', 'Shiellyn', 'Fernanda', 'Thayssa']
}

Multi = () => 5 * 2;

Mensagem = () => {
  return(
    <div>
      <p>Eu estou aprendendo React</p>
      <p>Eu estou aprendendo Javascript</p>
    </div>
  )
}

  render(){
    return(
      <div>
       <p>{this.Mensagem()}</p>
       {this.Multi()}
      </div>
    )
  }
}

export default App;

