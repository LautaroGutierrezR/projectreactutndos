import "./update.css"
export default function Update(){
    const modificarDato=async(event)=>{
        event.preventDefault();
        let formData =  {NombreJugadorActualizar:event.target[0].value,select:event.target[1].value,Dato_Actualizado:event.target[2].value}
        let formJSON= JSON.stringify(formData)
        console.log(formData)
        const response = await fetch("http://localhost:3090/ModificarJugador" ,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:formJSON
          })
          if(response.ok){

          }
    }
    return(
<div className="div-forma" onSubmit={(event)=>{modificarDato(event)}} >
<form  className="Form-Update" >
<h1 className="Actualizar">Actualizar Jugador</h1>


<label htmlFor="Nombre-jugadorA" className='Labela'>
A quien modificamos?
<input type="text" placeholder="Nombre del jugador" name="NombreJugadorActualizar" id="nombre-jugadorA" required className="casillero-nombreA"></input>
</label>

<label  className="conteiner-campo" htmlFor="campo">Campo a modificar:

            <select className="select" name="select" id="select">
                
                <option value="Nombre"> Nombre</option>
                <option value="Nacimiento"> Fecha </option>
                <option value="Equipo">Equipo</option>
                <option value="Posicion">Posicion</option>
            </select>

</label>
<label htmlFor="Dato Actualizado" className='Label'>
Dato actualizado
<input type="text" placeholder="Dato actualizado" name="Dato_actualizado" id="nombre-jugador" required className="casillero-dato-actualizado"></input>
</label>


<input className='Boton-actualizar-jugador' type="submit" value="Actualizar Dato"></input>
</form>
</div>
)}