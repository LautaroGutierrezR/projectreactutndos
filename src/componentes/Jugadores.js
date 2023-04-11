import Addjugador from "./Addjugador";
import Card from "./Card";
import Navegation from "./Navegation";
import FormAddJugador from "./FormAddJugador";
import { useEffect,useState } from "react";



export default function Jugadores(){
let[datos,setDatos]=useState([]);

const traerInfo=async()=>{
 let info=await   fetch("http://localhost:3090/ListaJugadores")
    .then((res)=>res.json())
    .then((data)=>setDatos(data))
    .catch((err)=> console.log(err))

   return info 
}

useEffect(()=>{
    traerInfo()

    setTimeout(()=>{console.log(datos)},5000)//ejecutar una funcion luego de un cierto tiempo(seg)
    // let alumnos=[....]
    // setDatos(alumnos)
},[])



    return(
        <div>
            <Navegation></Navegation>
            <Addjugador></Addjugador>
        
            
            <Card></Card>
        </div>
    )
        
    
}