import "./card.css"


export default function Card(){

    return(
        <div className="Tarjeta">
            <div className="Imagen">

            </div>
            <h1 className="Nombre-jugador">Nombre jugador </h1>
            <ul className="Lista">
                <li className="elementos-listaa">Nacimiento</li>
                <li className="elementos-listaa">Equipo</li>
                <li className="elementos-listaa">Posicion</li>
            </ul>

        </div>
    )
}