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
    ],
    novoComentario: {
      nome: '',
      email: '',
      message: ''
    }
  }

  adicionandoComentario = (event) => {
    event.preventDefault();
  /*   console.log("Adicionando um comentario");
    const novoComentario = {
      nome: 'Leo',
      email: 'Leo@ibm.com',
      data: new Date(),
      message: 'Cheguei!!!'
    } */

    const novoComentario = { ...this.state.novoComentario,  data: new Date()};
    this.setState({ 
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: {nome: '', email: '', message: ''}
    });

  }

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter( c => c !== comentario);
    this.setState({comentarios: lista});
  }

  digitacao = evento => {
    console.log(evento);
    const {value, name} = evento.target;
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
  }

   render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map( (comentario, i) => (
          <Comentario 
              key={i}
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data} 
              onRemove={this.removerComentario.bind(this, comentario)}
          >  
         {comentario.message}
       </Comentario>
        ))}
        <form method="post" onSubmit={this.adicionandoComentario}>
          <h2>Adicionar comentario</h2>
          <div>
            <input 
                type="text" 
                name="nome" 
                value={this.state.novoComentario.nome}
                onChange={this.digitacao}
                placeholder="Digite seu nome" 
            />
          </div>
          <div>
            <input 
              type="text" 
              name="email" 
              placeholder="Digite seu email" 
              onChange={this.digitacao}  
              value={this.state.novoComentario.email} />
          </div>
          <div>
            <textarea 
              name="message" 
              rows="4" 
              onChange={this.digitacao}  
              value={this.state.novoComentario.message}
            ></textarea>
          </div>
          <button type="submit">Adicionar Comentario</button>
        </form>
      </div>
    );
   }
}

export default App;
