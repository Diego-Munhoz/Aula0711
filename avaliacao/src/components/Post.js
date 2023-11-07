import React from 'react';
import '../Post.css'

const Post = ({titulo, Image, descricao, categoria}) => {
    return(
    <div className='blog'>
        <h1>{titulo}</h1>
        <img src={Image} alt='Imagem'/>
        <p className='descricao'>{descricao}</p>
        <p className='categoria'>{categoria}</p>
    </div>
    )
}

export default Post;