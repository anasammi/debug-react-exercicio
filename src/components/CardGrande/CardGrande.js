import React from 'react';
import {LayoutCardGrande, ImgCardGrande, InfosCardGrande, TituloCardGrande} from './styles';

export function CardGrande(props) {
    console.log("card grande", props)
    
    return (
        <LayoutCardGrande>
            <ImgCardGrande src={ props.image } />
            <InfosCardGrande>
                <TituloCardGrande>{ props.name }</TituloCardGrande>
                <p>{ props.descricao }</p>
            </InfosCardGrande>
        </LayoutCardGrande>
    )
}