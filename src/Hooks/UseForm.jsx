import React, { useState } from "react";

const UseForm = ({ initialState = {} }) => {
  const [datosFormulario, setDatosFormulario] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  };

  const reset = () => {
    setDatosFormulario(initialState);
  };

  return [datosFormulario, handleChange, reset];
};

export default UseForm;
