import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../data/db";
import UseForm from "../Hooks/UseForm";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([...db.users]); // Estado local inicializado con db.users
  const [datosFormulario, handleChange, reset] = UseForm({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    password: "",
    productsBuyed: [],
    birthDate: "",
  });

  const userSignUp = (e) => {
    e.preventDefault();

    // Verifica si el usuario ya existe
    const userExists = usuarios.some(
      (user) => user.email === datosFormulario.email
    );
    if (userExists) {
      Swal.fire({
        icon: "error",
        title: "Error de registro",
        text: "El email ya está registrado. Por favor, utiliza otro.",
      });
      return;
    }

    // Crear nuevo usuario
    const newUser = { ...datosFormulario };

    const updatedUsers = [...usuarios, newUser];
    setUsuarios(updatedUsers);
    db.users = updatedUsers;

    // Muestra alerta de éxito
    Swal.fire({
      icon: "success",
      title: "Registro exitoso",
      text: `¡Bienvenido, ${datosFormulario.name}!`,
    });

    navigate("/login");

    reset();

    console.log("Usuarios registrados:", db.users);
  };

  return (
    <Paper
      component="div"
      sx={{
        height: "calc(100vh - 4rem)",
        textAlign: "center",
        placeContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Registro de Usuario</Typography>
      <Paper
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={userSignUp}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <TextField
          type="text"
          id="name"
          name="name"
          variant="outlined"
          label="Ingrese Nombre"
          onChange={handleChange}
          value={datosFormulario.name}
        />
        <TextField
          type="email"
          id="email"
          name="email"
          variant="outlined"
          label="Ingrese Email"
          onChange={handleChange}
          value={datosFormulario.email}
        />
        <TextField
          type="password"
          id="password"
          name="password"
          variant="outlined"
          label="Ingrese contraseña"
          onChange={handleChange}
          value={datosFormulario.password}
        />
        <Button variant="outlined" type="submit">
          Registrar
        </Button>
      </Paper>
    </Paper>
  );
};

export default Register;
