import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import Home from "../Home/Home.jsx";

export default function Nav(props){
  return <div>
    <Link to="/home" element={
      <Home />
    }>Home</Link>
    <Link to="/about">About</Link>
    <SearchBar onSearch={props.onSearch} />
  </div>
}