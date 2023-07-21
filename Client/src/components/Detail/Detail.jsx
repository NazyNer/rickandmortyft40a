import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function Detail() {

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(()=>{
    axios(`http://localhost:3001/character/${id}`).then((response) => {
      if (response.data) {
        console.log(response.data)
        setCharacter(response.data);
      }else{
        window.alert("No hay personaje con ese ID")
      }
    }
    ).catch(err => console.log(err));
    //desmontaje
    return () => {
      console.log("desmontaje")
    };
  }, []);
    return (
      <div>
        <h1>Soy {character.name}</h1>
        <img src={character.image} alt={character.name} width="200px" height="200px" />
        <p>Especie: {character.species ? character.species : "👽Desconocido👾"}</p>
        <p>Estado: {character.status ? character.status : "💀Desconocido💀"}</p>
        <p>Genero: {character.gender ? character.gender : "🚹Desconocido🚺"}</p>
        <p>Origen: {character.origin?.name}</p>
      </div>
    );
}