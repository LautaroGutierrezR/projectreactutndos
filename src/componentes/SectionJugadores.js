import Card from "./Card"
export default function SectionJugadores ({datos}){




    return(
        <section className="section-Jugadores">
            
           
            {datos.map((dato)=>{return <Card key={dato.id} info={dato}/>})
            }
            
        </section>
    )

        }