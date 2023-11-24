import React from "react";

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon);
    
    const { imgSrc, name } = pokemon;

    return (
        <>
        <figure>
            {imgSrc ? (
                <img src={imgSrc} alt={name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{name}</figcaption>
        </figure>
        </>
    );
}



export default PokemonCard;