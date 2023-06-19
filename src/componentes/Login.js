import './Login.css'
export default Login;


  function Login(){


    
    return(
        <div className='Login'>
            <h1>Inicia sesion</h1>
            
            <form  method="POST" className="Formulario" action='http://localhost:3090/Logeo'>
        <label htmlFor="Usuario" className='casillero'>
            Usuario:
            <input type="text" name="nombreUsuario" id="Usuario" required className="casillero"></input>
        </label>
        <label htmlFor="Contraseña" className='casillero'>
            Contraseña:
            <input type="password" name="password" id="contraseña" required className="casillero"></input>
            <input className='boton' type="submit" value="Inicia sesion"></input>
        </label>
            </form>
        
        </div>
    )
}