import { Fragment } from "react"
import "./Eliminar.css"
export default function Eliminar(){
    return(
        <Fragment>
<section className="div-form">
<form  method="POST" className="Form-Eliminar" action="http://localhost:3090/BorrarJugador">
<h1 className="EliminarJugador">Eliminar Jugador</h1>


<label htmlFor="Nombre-jugador" className='Label'>
A quien eliminamos?
<input type="text" placeholder="Nombre del jugador" name="Nombre_JugadorDeleteado" id="nombre-jugador" required className="casillero-agregar-jugadores"></input>
</label>





<input className='Boton-eliminar-jugador' type="submit" value="Eliminar Jugador"></input>
</form>
</section>
  </Fragment>
)}