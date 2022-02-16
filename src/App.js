import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';
import React, { Component } from 'react';


class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Joel',
        email: 'joel.luis.pinto1@ibm.com',
        data: new Date(2020, 3, 21),
        message: 'Ola, tudo bem sim ....'
      }, 
      {
        nome: 'Maria',
        email: 'maria@ibm.com',
        data: new Date(2022, 1, 21),
        message: 'Ola, tudo bem?'
      }
    ]
  }

  adicionandoComentario = () => {
    console.log("Adicionando um comentario");
    const novoComentario = {
      nome: 'Leo',
      email: 'Leo@ibm.com',
      data: new Date(),
      message: 'Cheguei!!!'
    }

    this.setState({ comentarios: [...this.state.comentarios, novoComentario] });

  }

   render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map( (c, i) => (
          <Comentario 
              key={i}
              nome={c.nome}
              email={c.email}
              data={c.data} >
         {c.message}
       </Comentario>
        ))}
        <button onClick={this.adicionandoComentario}>Adicionar um Comentário</button>
      </div>
    );
   }
}

export default App;
