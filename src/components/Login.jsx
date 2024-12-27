import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../data/db";
import UseForm from "../Hooks/UseForm";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  // Estado para manejar las credenciales del formulario
  const [credentials, handleChange, reset] = UseForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      // Buscar al usuario en la base de datos simulada
      const user = db.users.find(
        (user) =>
          user.email === credentials.email &&
          user.password === credentials.password
      );

      if (user) {
        // Mostrar un mensaje de bienvenida
        Swal.fire({
          icon: "success",
          title: "Inicio de sesión exitoso",
          text: `¡Bienvenido, ${user.name}!`,
        });

        navigate("/home");

        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error de inicio de sesión",
          text: "Credenciales incorrectas. Por favor, verifica tu email y contraseña.",
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema con el inicio de sesión. Inténtalo más tarde.",
      });
    }
  };

  return (
    <Paper
      component="div"
      sx={{
        height: "calc(100vh - 4rem)",
        textAlign: "center",
        placeContent: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography variant="h3">Inicio de Sesión</Typography>
      <Paper
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleLogin}
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        <TextField
          type="email"
          id="email"
          name="email"
          variant="outlined"
          label="Ingrese Email"
          onChange={handleChange}
          value={credentials.email}
          required
        />
        <TextField
          type="password"
          id="password"
          name="password"
          variant="outlined"
          label="Ingrese Contraseña"
          onChange={handleChange}
          value={credentials.password}
          required
        />
        <Button variant="outlined" type="submit">
          Iniciar Sesión
        </Button>
      </Paper>

      <Typography variant="body2">
        ¿No tienes una cuenta?{" "}
        <Button onClick={() => navigate("/register")}>Regístrate</Button>
      </Typography>
    </Paper>
  );
};

export default Login;
