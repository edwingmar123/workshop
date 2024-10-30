import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import useForm from '../hooks/useForm'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { urlUsers } from '../constants/constant'

const Login = ({ setIsLoggedIn }) => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await fetch(urlUsers).then(response => response.json())
        console.log(users)
        setUsers(users)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

  const { formValues, handleInputChange, resetFormValues } = useForm({
    email: '',
    password: ''
  })

  const userLogin = async e => {
    e.preventDefault()
    const userExists = users.find(
      u => u.email === formValues.email && u.password === formValues.password
    )
  
    if (userExists) {
      localStorage.setItem('isLoggedIn', 'true')
      setIsLoggedIn(true)
      navigate('/')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Email o Contraseña Incorrectos',
        showConfirmButton: false,
        timer: 1500
      })
    }
    resetFormValues()
  }

  return (
    <Paper
      component='div'
      sx={{
        height: 'calc(100vh - 4rem)',
        textAlign: 'center',
        placeContent: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography variant='h3'>Inicio de Sesión</Typography>
      <Paper
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={userLogin}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          gap: '1rem'
        }}
      >
        <TextField
          type='email'
          id='email'
          name='email'
          variant='outlined'
          label='Ingrese Email'
          onChange={handleInputChange}
          value={formValues.email}
        />
        <TextField
          type='password'
          id='password'
          name='password'
          variant='outlined'
          label='Ingrese contraseña'
          onChange={handleInputChange}
          value={formValues.password}
        />
        <Button variant='outlined' type='submit'>
          Ingresar
        </Button>
      </Paper>
    </Paper>
  )
}

export default Login