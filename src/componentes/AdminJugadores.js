import Card from "./Card";
import Navegation from "./Navegation";

import { useEffect,useState,Fragment } from "react";


import  "./Jugadores.css"
import CardMongo from "./CardMongo";
import Eliminar from "./Eliminar";
import Update from "./update";
import Footer from "./Futer";


export default function AdminJugadores(){


    //Base Json cartas//
let[datos,setDatos]=useState([]);

const traerInfo=async()=>{
 let info=await   fetch("http://localhost:3090/ListaJugadores")
    .then((res)=>res.json())
    .then((data)=>setDatos(data))
    .catch((err)=> console.log(err))

   return info 
}

//useEffect(()=>{
    

    //setTimeout(()=>{console.log(datos)},5000)//ejecutar una funcion luego de un cierto tiempo(seg)
    // let alumnos=[....]
    // setDatos(alumnos)
//},[])

useEffect(()=>{console.log(datos)},[datos])//cada vez que se modifique datos lo pone en pantalla


//FUNCION MONGODB CARTAS


let[datosMongo,setDatosMongo]=useState([]);

const traerInfoMong0=async()=>{
 let info=await   fetch("http://localhost:3090/InfoCompleta")
    .then((res)=>res.json())

    .then(data=>setDatosMongo(data))
    .catch((err)=> console.log(err))

   return info 
}

useEffect(()=>{
    traerInfoMong0();traerInfo();

    
},[])

useEffect(()=>{console.log(datosMongo)},[datosMongo])//cada vez que se modifique datos lo pone en pantalla




    return(
        <Fragment>
        
            <div className="navi">
            <Navegation></Navegation>
            </div>
            <h1>ADMINISTRADOR</h1>
           <div className="Cartas-locas"> 
            {datos.map((dato)=>{
          return <Card key={datos.indexOf(dato)} datos={dato} />
           })}
           </div>
            
            <div className="Cartas-locas"> 
            {datosMongo.map((dato)=>{
          return <CardMongo key={datosMongo.indexOf(dato)} datosMongo={dato} />
           })}
           </div>
           <div className="AdminTools">
           <Update></Update>
           <Eliminar></Eliminar>
          
           </div> 
           <Footer></Footer>
        
        </Fragment>
    )
        
    
}