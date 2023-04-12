import Addjugador from "./Addjugador";
import Card from "./Card";
import Navegation from "./Navegation";
import FormAddJugador from "./FormAddJugador";
import { useEffect,useState } from "react";
import SectionJugadores from "./SectionJugadores";
import  "./Jugadores.css"


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

useEffect(()=>{console.log(datos)},[datos])//cada vez que se modifique datos lo pone en pantalla

    return(
        <div>
            <Navegation></Navegation>
            <Addjugador></Addjugador>
        
           <div className="Cartas-locas"> 
            {datos.map((dato)=>{
          return <Card key={datos.indexOf(dato)} datos={dato} />
           })}
           </div>
            
        </div>
    )
        
    
}