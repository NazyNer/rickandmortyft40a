import { Link } from 'react-router-dom';
import style from './Card.module.css';
import Detail from '../../Detail/Detail';
import { addFavorite, deleteFavorite } from '../../../redux/actions/actions';
import { connect } from 'react-redux';


function Card(props) {


   function handleFavorite() {
      // const objAction = addFavorite(props);
   }

   return (
      <div className={style.Card}>
         
         isFav ? (
            <button onClick={handleFavorite}>🤍</button>
         )
         
         <button onClick={() => props.onClose(props.id)}>X</button>
         <img  className={style.imgAvatar} src={props.image} alt='' />
         <hr />
         <hr />
         <div className={style.CardInfo}>
            <Link to={`/detail/${props.id}`} element={
               <Detail/>
               } >
               <h2>{props.name}</h2>
               <h2>{props.species}</h2>
               <h2>{props.status}</h2>
            </Link>
         </div>
      </div>
   );
}
export default connect("")(Card);