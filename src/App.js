import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './Characters'

const App = () => {
  
  const [characterData, setCharacterData] = useState([]);
  console.log(characterData);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacterData(res.data.results);
        
      })
      .catch(err => {
        // debugger;
      })
  },[])

  return (
    <div className="App">
      <h1>Rick And Morty API</h1>
      {characterData.map((chr) => {
        return <Characters character={chr}/>
      })}
    </div>
  );
}

export default App;
