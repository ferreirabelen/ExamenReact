import { useState } from "react"
import Card from "./Card"
import './index.css';


function Form(){


    const [nombre, setNombre] = useState("")
    const [personaje, setPersonaje] = useState("")
    const [msj, setMsj] = useState(false)


    function guardarNombre(e){
        setNombre(e.target.value)
    }

    function guardarPersonaje(e){
        setPersonaje(e.target.value)
    }

    function validarNombre(user){
        const sinEspacios = user.trim()
        if(sinEspacios.length > 3){
            return true
        }else{
            alert("por favor chequear que la informacion sea correcta")
        }
    }

    function validarPersonaje(personaj){
        if(personaj.length >= 6 ){
            return true
        }else{
            alert("por favor chequear que la informacion sea correcta")
        }
    }

    function onSubmitFormulario(e){
        e.preventDefault()

        if(validarNombre(nombre) && validarPersonaje(personaje)){
            setMsj("Se guardo con exito")
        }else{
            console.log("no se guardo con exito")
        }

    }

    return(
        <>
        
        <form onSubmit={onSubmitFormulario} className="FORM">
        <h1>GUERRA DE LAS GALAXIAS★</h1>
        <p>En este examen vamos a saber quien es tu personaje favorito de la Saga!!</p>
            <input
            type="text"
            placeholder="Ingresar tu nombre"
            value={nombre}
            onChange={guardarNombre}
            />

            <input
            type="text"
            value={personaje}
            placeholder="Ingresar tu personaje favorito de la Saga :)"
            onChange={guardarPersonaje}
            />

        <button type="submit">Enviar</button>
        </form>
        


        { msj ? <Card nombre={nombre} personaje={personaje}/> : null}

        </>

        
    )
}

export default Form