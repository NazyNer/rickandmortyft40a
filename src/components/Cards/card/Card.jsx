import { Link } from 'react-router-dom';
import style from './Card.module.css';
import Detail from '../../Detail/Detail';


export default function Card(props) {

   return (
      <div className={style.Card}>
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
