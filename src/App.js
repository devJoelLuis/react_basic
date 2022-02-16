import logo from './logo.svg';
import './App.css';

import Comentario from './components/Comentario';


function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="João" email="joão@gmail.com" data={new Date(2020, 3, 19)} >
         Olá tudo bem
      </Comentario>
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2020, 3, 21)}>
         Olá tudo bem sim;
      </Comentario>
    </div>
  );
}

export default App;
