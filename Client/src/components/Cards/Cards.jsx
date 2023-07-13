import Card from './card/Card';
import style from './Cards.module.css';
export default function Cards({ characters, onClose }) {
   return <div className={style.Cards}>
      {characters.map((pj) => (
         <Card
         key={pj.id}
         id={pj.id}
         name={pj.name}
         status={pj.status}
         species={pj.species}
         gender={pj.gender}
         origin={pj.origin.name}
         image={pj.image}
         onClose={onClose}
         />
      ))}
   </div>;
}
