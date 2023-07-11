import { connect, useSelector, useDispatch } from 'react-redux'
import style from './Favorites.module.css'
import Card from '../Cards/card/Card';
import { filterCards, orderCards, reset } from '../../redux/actions/actions';
import { useState } from 'react';

function Favorites(props) {

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const [booleano, setBooleano] = useState(false)
  function handleOrder(event) {
    dispatch(orderCards(event.target.value))
    setBooleano(!booleano)
  }
  function handleFilter(event) {
    if (event.target.value === 'Reset') {
      dispatch(reset());
    } else {
      dispatch(filterCards(event.target.value))
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

        <select onChange={handleFilter}>
          <option value="Reset">RESET</option>
          <option value="unknow">UNKNOW</option>
          <option value="Genderless">GENDERLEES</option>
          <option value="Female">FEMALE</option>
          <option value="Male">MALE</option>
        </select>
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