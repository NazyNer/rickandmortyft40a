import './App.css';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import React , { useState } from 'react';
import axios from "axios"
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App() {
   const [ characters, setCharacters ] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then((respuesta) => {
         if (respuesta.data.name) {
            if (characters.some(pj => pj.id === respuesta.data.id)) {
               window.alert('¡Este personaje ya fue agregado!');
            }else{
               setCharacters((oldChars) => [...oldChars, respuesta.data]);
            }
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
         <Routes>
            <Route path='/*' element={
               <h1>No existe esta pag</h1>
            }/>
            <Route path='/home' element={
               <Home characters={characters} onClose={onClose}/>
            }/>
            <Route path='/about' element={
               <About />
            }/>
            <Route path='/detail/:id' element={
               <Detail />
            }/>
         </Routes>
      </div>
   );
}

export default App;