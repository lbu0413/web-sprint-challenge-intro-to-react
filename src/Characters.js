import React from 'react';
import styled, { keyframes } from 'styled-components'



const StyledCharacters = styled.div`
    font-family: 'Fredoka One', cursive;
    border: 1px solid white;
    border-radius: 2%;
    background-color:#D3D3D3;

    img{
        width: 10%;
        margin-top: 3%;
        margin-bottom: 2%;
        border-radius: 50%;
        
    }
    img:hover{
        transition: all .5s;
        transform:scale(2);
    }
    .species{
        margin-bottom: 3%;
    }
    .status{
        color: #eb5e34;
    }
    .name:hover{
        transform:scale(1.5);
        transition: .5s;
        color: #2F4F4F;
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