import './Inicio.css'
import { Link } from 'react-router-dom'

export default function Inicio(){
    return(
        <div className='Inicio'>
            <h1>Bienvenido</h1>
            <div className="botones">
         <Link to="/Navegation">    <button className="boton-invitado">Ingresar como invitado</button> </Link> 
           <Link to="/Login">  <button className="boton-administrador">Soy administrador</button>  </Link>
            </div>
        </div>
    )
}