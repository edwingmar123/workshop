import React, { useState } from 'react'

const UseForm = ({ initialState = {} }) => {
    const [datosFormulario, setDatosFormulario] = useState({initialState});//recibe un objeto sin definir
    
    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDatosFormulario({ ...datosFormulario, [e.target.name]: e.target.value });//borre 
    }
    
    const reset = ()=>{
        setDatosFormulario(initialState);//le asigna el dato inicial
    }

    return [datosFormulario, handleChange, reset]//array
}


export default UseForm