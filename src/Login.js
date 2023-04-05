import './Login.css'
export default Login;


  function Login(){
    return(
        <div className='Login'>
            <h1>Inicia sesion</h1>
            
            <form  method="post" className="Formulario">
        <label for="Usuario" className='casillero'>
            Usuario:
            <input type="text" name="Usuario" id="Usuario" required className="casillero"></input>
        </label>
        <label for="Contraseña" className='casillero'>
            Contraseña:
            <input type="password" name="contraseña " id="contraseña" required className="casillero"></input>
            <input className='boton' type="submit" value="Inicia sesion"></input>
        </label>
            </form>
        
        </div>
    )
}