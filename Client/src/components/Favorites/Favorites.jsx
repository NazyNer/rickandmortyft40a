import { connect, useSelector, useDispatch } from 'react-redux'
import style from './Favorites.module.css'
import Card from '../Cards/card/Card';
import { filterCards, orderCards, reset } from '../../redux/actions/actions';
import { useState } from 'react';

function Favorites(props) {

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [booleano, setBooleano] = useState(false)
  const [all, setAll] = useState(true)
  function handleOrder(event) {
    dispatch(orderCards(event.target.value))
    setBooleano(!booleano)
  }
  console.log(useSelector((state) => state))
  function allCharacter() {
    dispatch(reset())
    setBooleano(!booleano)
    setAll(true)
  }

  function handleFilter(event) {
    if (event.target.value !== '') {
      dispatch(filterCards(event.target.value))
      if (all) {
        setAll(false)
      }
    }
    setBooleano(!booleano)
  }
  
  return ( 
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select value={''} id='Filter' onChange={handleFilter}>
          {all ? <option selected></option> : null}
          <option value="unknow">UNKNOW</option>
          <option value="Genderless">GENDERLEES</option>
          <option value="Female">FEMALE</option>
          <option value="Male">MALE</option>
        </select>
        <button onClick={allCharacter}>All Character</button>
      </div>
    
    <div className = {style.container}>
    {props.favorites?.map((char) => (
        <Card
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
        />
      ))}
      </div>

    </div>
    );
}

export function mapStateToProps(state) {
  return {
    favorites: state.favorites
  }
}
export default connect(mapStateToProps, null)(Favorites)