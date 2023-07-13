import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav(props){
  return <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    {/* <Link to="/register">Register</Link>
    <Link to="/login">Login</Link> */}
    <Link to="/favorites">Favs</Link>
    <SearchBar onSearch={props.onSearch} />
    <button onClick={props.out}>LOGOUT</button>
  </div>
}