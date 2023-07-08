import { Link } from 'react-router-dom';
import style from './Card.module.css';
import Detail from '../../Detail/Detail';
import { addFavorite, deleteFavorite } from '../../../redux/actions/actions';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';


function Card({name, species, status, image, id, onClose, gender, origin, deleteFavorite, addFavorite, favorites }) {
   const [isFav, setIsFav] = useState(false)

   function handleFavorite() {
      // const objAction = addFavorite(props);
      if (isFav) {
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({name, species, status, image, id, gender, origin})
      }
   };

   useEffect(() =>{
      favorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true)
         } 
      });
   }, [favorites]);

   return (
      <div className={style.Card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>💖</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         {
            onClose ? <button onClick={() => onClose(id)}>X</button> : null
         }
         <img  className={style.imgAvatar} src={image} alt='' />
         <hr />
         <hr />
         <div className={style.CardInfo}>
            <Link to={`/detail/${id}`} element={
               <Detail/>
               } >
               <h2>{name}</h2>
               <h2>{species}</h2>
               <h2>{status}</h2>
            </Link>
         </div>
      </div>
   );
}
export function mapDispatchToProp(dispatch){
   return{
      addFavorite: function(obj){
         dispatch(addFavorite(obj))
      },
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}
export function mapStateToProps(globalState){
   return{
      favorites: globalState.favorites
   }
}

export default connect(mapStateToProps, mapDispatchToProp)(Card);