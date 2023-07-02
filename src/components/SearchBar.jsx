import style from './Styles/SearchBar.module.css';
export default function SearchBar(props) {
   return (
      <div className={style.SearchBar}>
         <input type='text' placeholder="Busca un personaje..."/>
         <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
