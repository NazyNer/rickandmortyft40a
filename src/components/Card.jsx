import style from './Styles/Card.module.css';

export default function Card(props) {
   console.log(props)
   return (
      <div className={style.Card}>
         <button onClick={props.onClose}>X</button>
         <img  className={style.imgAvatar} src={props.image} alt='' />
         <img  className={style.imgPortal} src='http://localhost:3000/static/media/portal.3b03c3ab43b90370accc.png' alt='Portal de informacion'/>
         <div className={style.CardInfo}>
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
            <h2>{props.origin}</h2>
            <h2>{props.status}</h2>
         </div>
      </div>
   );
}
