import "./FormAddJugador.css"
export default function FormAddJugador(){


    return(
        <div id="form-add-jugador">
              <form  method="post" className="Form-Add-Jugador">
                <h1 className="Crea-tu-Jugador">Crea tu Jugador!</h1>
        <label for="Imagen-Jugador" className='casillero-agregar-jugadores'>
            Imagen del Jugador
            <input type="file" name="img-jugador" id="img-jugador" required className="casillero-agregar-jugadores" accept="image/png"></input>
        </label>
        <label for="Nombre-jugador" className='casillero-agregar-jugadores'>
            Nombre Del Jugador:
            <input type="text" name="Nombre-jugador" id="nombre-jugador" required className="casillero-agregar-jugadores"></input>
        </label>


        <label for="Nacimiento-jugador" className='casillero-agregar-jugadores'>
            Nacimiento Del Jugador:
            <input type="date" name="nacimiento-jugador" id="nacimiento-jugador" required className="casillero-agregar-jugadores"></input>
        </label>


        <label for="Equipo-jugador" className='casillero-agregar-jugadores'>
            Equipo Del Jugador:
            <input type="text" name="Equipo-jugador" id="equipo-jugador" required className="casillero-agregar-jugadores"></input>
            
        </label>
        <label for="Posicion">Seleccione Posicion:
            <select name="Posicion" id="posicion-jugador" required className="casillero-agregar-jugadores"> 
                <option value="Arquero"> Arquero </option>
                <option value="Defensor"> Defensor</option>
                <option value="Mediocampista">Mediocampista </option>
                <option value="Delantero"> Delantero</option>
            </select>
            </label>
            <input className='Boton-crear-jugador' type="submit" value="Crear Jugador"></input>
            </form>
        </div>
    )
}

