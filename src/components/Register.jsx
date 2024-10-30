import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { postData } from '../helpers/postData'
import { useNavigate } from 'react-router-dom'
import { urlUsers } from '../constants/constant'
import UseForm from '../hooks/UseForm'

const Register = () => {
  const navigate = useNavigate();
  const [datosFormulario, handleChange, reset ] = UseForm({
    id: crypto.randomUUID(),
    name: '',
    email: '',
    password: '',
    productsBuyed: [],
    birthDate:'',
  })

  const userSignUp = async (e) => {
    e.preventDefault()
    console.log(datosFormulario)

    const user = {
      id: crypto.randomUUID(),
      name: datosFormulario.name,
      email: datosFormulario.email,
      password: datosFormulario.password,
      productsBuyed: [],
      birthDate:'',
    }
    await postData(urlUsers, user).then(navigate('/login'))
    
    reset()
  }

  return (
    <Paper component='div' sx={{ height: 'calc(100vh - 4rem)', textAlign: 'center', placeContent:'center', justifyContent:'center' }}>
      <Typography variant='h3'>
        Registro de Usuario
      </Typography>
      <Paper
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={userSignUp}
        sx={{ display: 'flex', flexDirection:'column', padding: '2rem', gap: '1rem' }}
      >
        <TextField
          type='text'
          id='name'
          name='name'
          variant='outlined'
          label='Ingrese Nombre'
          onChange={handleChange}
          value={datosFormulario.name}
        />
        <TextField
          type='email'
          id='email'
          name='email'
          variant='outlined'
          label='Ingrese Email'
          onChange={handleChange}
          value={datosFormulario.email}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          variant='outlined'
          label='Ingrese contraseña'
          onChange={handleChange}
          value={datosFormulario.password}
        />
        <Button variant='outlined' type='submit'>Registrar</Button>
      </Paper>
    </Paper>
  )
}

export default Register
