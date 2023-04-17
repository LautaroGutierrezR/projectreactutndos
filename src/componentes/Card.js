import "./card.css"


export default function Card({datos}){

    return(
        <div className="Tarjeta">
            
              <img className="Imagen" src={datos.Imagen} alt={datos.Imagen} />
           
            <h1 className="Nombre-jugador"> {datos.Nombre} </h1>
            <ul className="Lista">
                <li className="elementos-listaa">Nacimiento: {datos.Fecha}</li>
                <li className="elementos-listaa">Equipo:{datos.Equipo}</li>
                <li className="elementos-listaa">Posicion:{datos.Posicion}</li>
            </ul>

        </div>
    )
}