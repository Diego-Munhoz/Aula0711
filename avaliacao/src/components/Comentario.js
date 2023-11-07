import React from 'react';
import '../Comentario.css'

const Comentario = ({image, nome, comentario}) => {
    return(
        <div className='comentario'>
            <div className='username'>
                <img className='img' src={image} alt='Imagem'/>
                <h2>{nome}</h2>
            </div>
            <p>{comentario}</p>
        </div>
    )
}

export default Comentario;