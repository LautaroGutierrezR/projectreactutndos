import Card from "./Card"



 

export default function SectionJugadores ({datos}){




    return(
        <section className="Section-Jugadores">
            
           
            {datos.map((dato)=>{
          return <Card key={datos.indexOf(dato)} datos={dato} />
           })}
            
        </section>
    )}