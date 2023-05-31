import "./cardm.css"
export default function CardMongo({datosMongo}){

    return(
        <div className="TarjetaM">
            
              <img className="ImagenM" alt="algo" src= {`./imagenes/${datosMongo.Imagen}`} />
           
            <h1 className="Nombre-jugadorM"> {datosMongo.Nombre} </h1>
            <ul className="ListaM">
                <li className="elementos-listaaM">Nacimiento:{datosMongo.Nacimiento} </li>
                <li className="elementos-listaaM">Equipo:{datosMongo.Equipo}</li>
                <li className="elementos-listaaM">Posicion:{datosMongo.Posicion}</li>
            </ul>

        </div>
    )
}