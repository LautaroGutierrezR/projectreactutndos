import './Navegation.css';
export default Navegation;

function Navegation(){
    return(
        <div className="Navegation">
            <ul>
                <li>⚽</li>
                <li className='elementos-lista'>Inicio</li>
                <li>⚽</li>
                <li className='elementos-lista'>Jugadores</li>
                <li>⚽</li>
                <li className='elementos-lista' >Comentarios</li>
                
            </ul>  
        </div>
    );
}