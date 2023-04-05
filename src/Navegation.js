import './Navegation.css';
import { Link } from 'react-router-dom';
export default Navegation;

function Navegation(){
    return(
        <div className="Navegation">
            <ul>
                <li>⚽</li>
          <Link to="/" className='link'>     <li className='elementos-lista'>Inicio</li>   </Link>
                <li>⚽</li>
                <li className='elementos-lista'>Jugadores</li>
                <li>⚽</li>
                <li className='elementos-lista' >Comentarios</li>
                
            </ul>  
        </div>
    );
}