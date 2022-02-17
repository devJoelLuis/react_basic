import React from 'react';
import './Comentario.css';
import imgUser from '../assets/user.png'


const Comentario = props => {
  
    return <div className="Comentario">
         <img class="avatar" src={imgUser} alt={props.nome} />
        <div class="conteudo"> 
            <p class="nome" >{props.nome}</p>
            <p class="email" >{props.email}</p>
            <p class="message" >{props.children}</p>
            <p class="data" >{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>  
        </div>    
    </div>
};

export default Comentario;