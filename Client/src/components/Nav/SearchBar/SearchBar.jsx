import React, { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {

   const [pj, setPj] = useState("");
   const handleChange = (event) => {
      setPj(event.target.value);
   };

   return (
      <div className={style.SearchBar}>
         <input type='text' placeholder="Busca un personaje..." onChange={handleChange} value={pj}/>
         <button onClick={() => { props.onSearch(pj)}}>Agregar</button> 
      </div>
   );
}
