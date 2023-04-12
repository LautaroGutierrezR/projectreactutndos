import{BrowserRouter,Routes,Route}from "react-router-dom"
import Jugadores from "./Jugadores"
import Inicio from "./Inicio"
import Login from "./Login"
import Navegation from "./Navegation"

export default function Routeo(){
    return(
        <BrowserRouter>

                 <Routes>
                        <Route path="/" element={<Inicio/>}/>
                        <Route path="/Login" element={<Login/>}/>
                        <Route path="/Jugadores" element={<Jugadores/>}/>
                 </Routes>

        </BrowserRouter>
    )
}