// Write your Character component here
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import '../App.css';

function Character({character}){

   const StyledDiv = styled.div`
        margin:2%;
        text-align:left;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border:2px solid black;
        border-radius:25px;
        padding:1%;
        background-image:linear-gradient(to right, purple, #cc3399);
        transition:background-image 0.5s ease;
        color:#f5d6eb;
        
        &&:hover{
            background-image:linear-gradient(to left, purple, #cc3399);
        }

        .mass{
            font-weight:bold;
            font-size:larger;
        }
    `

    return (
        <div className = 'Character'>
            <StyledDiv>
                <div>
                    <h1>{character.name}</h1>
                    <p>Height: {character.height}cm</p>
                </div>
                <div className = 'mass'>
                    <p>Weight: {character.mass}kg</p>
                </div>
            </StyledDiv>
        </div>
    )
}

export default Character