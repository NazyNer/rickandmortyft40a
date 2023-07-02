import Card from './Card';
import style from './Styles/Cards.module.css';
export default function Cards({ characters }) {
   return <div className={style.Cards}>
      {characters.map((pj) => (
         <Card
         key={pj.id}
         name={pj.name}
         status={pj.status}
         species={pj.species}
         gender={pj.gender}
         origin={pj.origin.name}
         image={pj.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      ))}
   </div>;
}
