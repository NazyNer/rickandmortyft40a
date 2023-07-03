import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import React , { useState } from 'react';
import axios from "axios"

function App() {
   const [ characters, setCharacters ] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then((respuesta) => {
         if (respuesta.data.name) {
            setCharacters((oldChars) => [...oldChars, respuesta.data]);
         }
      }).catch((err) =>{
         window.alert('¡No hay personajes con este ID!');
         console.log(err)
      });
   }

   function onClose(id) {
      setCharacters(characters.filter(pj => {
         return pj.id !== id
      })
      );
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
