import React from 'react';
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import './Comentario.css';
import imgUser from '../assets/user.png'


const Comentario = props => {
  
    return <div className="Comentario">
         <img class="avatar" src={imgUser} alt={props.nome} />
        <div class="conteudo"> 
            <p class="nome" >{props.nome}</p>
            <p class="email" >{props.email}</p>
            <p class="message" >{props.children}</p>
            <p class="data" >{formatRelative(props.data, new Date(), { locale: ptBR })}</p>
            <button onClick={props.onRemove}>&times;</button>  
        </div>    
    </div>
};

export default Comentario;