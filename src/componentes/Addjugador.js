import "./FormAddJugador.css"
import "./addJugador.css"

import { useState } from "react";


export default function Addjugador(){

    const[ocultar,setOultar]=useState(true);
    const mostrar=()=>{
        setOultar(!ocultar)
    }


    return(
        <div>
        
            <button className="Boton-agregar" id="boton-agregar"onClick={mostrar}>Agregar Jugador</button>
            
            
            
            { ocultar ===false?
            <div id="form-add-jugador">
              <form  method="post" className="Form-Add-Jugador">
                <h1 className="Crea-tu-Jugador">Crea tu Jugador!</h1>
        <label htlmFor="Imagen-Jugador" className='casillero-agregar-jugadores'>
            Imagen del Jugador
            <input type="file" name="img-jugador" id="img-jugador" required className="casillero-agregar-jugadores" accept="image/*"></input>
        </label>
        <label htmlFor="Nombre-jugador" className='casillero-agregar-jugadores'>
            Nombre Del Jugador:
            <input type="text" name="Nombre-jugador" id="nombre-jugador" required className="casillero-agregar-jugadores"></input>
        </label>
        <label htmlFor="Equipo-jugador" className='casillero-agregar-jugadores'>
            Equipo Del Jugador:
            <input type="text" name="Equipo-jugador" id="equipo-jugador" required className="casillero-agregar-jugadores"></input>
            
        </label>
        <label htmlFor="Posicion">Seleccione Posicion:
            <select name="Posicion" id="posicion-jugador" required className="casillero-agregar-jugadores"> 
                <option value="Arquero"> Arquero </option>
                <option value="Defensor"> Defensor</option>
                <option value="Mediocampista">Mediocampista </option>
                <option value="Delantero"> Delantero</option>
            </select>
            </label>
            <input className='Boton-crear-jugador' type="submit" value="Crear Jugador"></input>
            </form>
        </div>:"" } 
        
        </div>
    )
}
//los :"" al lado del div son muy importantes