import React from 'react';
// import './ImagemButton.css'
import {ContainerImagemVerMais, ImgVerMais} from './styled'

function ImagemButton(props) {



    return (
        <ContainerImagemVerMais>
            <ImgVerMais src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ContainerImagemVerMais>

    )
}

export default ImagemButton;