import React from 'react';
import styled, { keyframes } from 'styled-components'



const StyledCharacters = styled.div`
    font-family: 'Fredoka One', cursive;
    border: 5px solid black;
    border-radius: 50%;
    background-color: #D2B48C;
    img{
        width: 10%;
        margin-top: 3%;
        margin-bottom: 2%;
        border-radius: 50%;
    }
    .species{
        margin-bottom: 3%;
    }
    .status{
        color: #eb5e34;
    }
`

const Characters = ({character}) => {
    
    return(
        <StyledCharacters>
           
                <img src={character.image} alt="haha"></img>
                <div className="name">Name: {character.name}</div>
                <div className="status">Status: {character.status}</div>
                <div className="species">Species: {character.species}</div>
           
        </StyledCharacters>

    )
}




export default Characters;