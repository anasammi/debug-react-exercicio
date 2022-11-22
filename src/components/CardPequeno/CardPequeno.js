import React from 'react';
import { LayoutCardPequeno, TituloCardPequeno, InfosCardPequeno,ImgCardPequeno} from "./styles"

function CardPequeno(props) {
    console.log(props)
    return(
        <LayoutCardPequeno>
            <ImgCardPequeno src={props.image} />
            <InfosCardPequeno>
                <TituloCardPequeno>{props.name}</TituloCardPequeno>
                <p>{props.description}</p>
            </InfosCardPequeno>
        </LayoutCardPequeno>
    )
        
}

export default CardPequeno