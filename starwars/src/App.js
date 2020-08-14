import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')

    .then(res => {
      setCharacterList(res.data.results)
    })
    // .catch(err => {
    //   debugger
    // })
  },[])

const StyledHeader = styled.h1`
  font-weight:bold;
  font-style:italic;
  font-size:300%;
  text-align:center;
  border-bottom:2px solid black;
  padding:1%;
`
 


  return (
    <div className="App">
      <StyledHeader className = 'Header'>CHARACTERS</StyledHeader>
      {characterList.map(a => {
        return    <Character character = {a}/>
      })}
    </div>
    );
}

export default App;
