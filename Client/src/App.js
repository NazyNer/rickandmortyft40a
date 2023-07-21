import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from "axios"
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';
import './App.css';

function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const [access, setAccess] = useState(false);
   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/onSearch/${id}`).then((respuesta) => {
         if (respuesta.data.name) {
            if (characters.some(pj => pj.id === respuesta.data.id)) {
               window.alert('¡Este personaje ya fue agregado!');
            } else {
               setCharacters((oldChars) => [...oldChars, respuesta.data]);
            }
         }
      }).catch((err) => {
         console.log(err);
         window.alert(err.response.data.error);
      });
   }
   function onClose(id) {
      setCharacters(characters.filter(pj => {
         return pj.id !== id
      })
      );
   }
   const navigate = useNavigate();
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '12345678';
   function logout() {
      setAccess(false);
      navigate('/');
   }
   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
      else{
         alert("Email o Password incorrectos!!")
      }
   }
   useEffect(() => {!access && navigate('/')}, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} out={logout}/>
         }
         <Routes>
            <Route path='/' element={
               <Form login={ login }/>
            } />
            <Route path='/*' element={
               <h1>No existe esta pag</h1>
            } />
            <Route path='/home' element={
               <Home characters={characters} onClose={onClose} />
            } />
            <Route path='/about' element={
               <About />
            } />
            <Route path='/detail/:id' element={
               <Detail />
            } />
            <Route path='/favorites' element={
               <Favorites />
            }/>
            <Route path='/login' element={
               <Form login={ login }/>
            } />
         </Routes>
      </div>
   );
}

export default App;