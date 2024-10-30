import React, { useEffect, useState } from 'react'
import { getData } from '../helpers/getData';
import { urlUsers } from '../constants/constant';

import { TextField, Grid2, Button, IconButton, Avatar, styled, Typography, patch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useNavigate } from 'react-router-dom';
import { patchData } from '../helpers/patchData';

const Profile = () => {
  const [profile, setProfile] = useState([])
  const idUser = sessionStorage.getItem('idUser');
  console.log(idUser);
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    birthDate: "",
});


    //Solicitud HTTP to get profiles
    useEffect(() => {
      const getProfiles = async()=>{
        try {
          const response = await getData(`${urlUsers}/${idUser}`)
          setProfile(response.data)
          setUserData({
            name: response.data.name,
            email: response.data.email,
            password: response.data.password,
            birthDate: response.data.birthDate,
        })
        console.log(userData)

          console.log(profile)
        } catch (error) {
          console.error('error en el getUsers', error) 
        }
      }
      getProfiles()
    }, [])
  
 
  const [isEditing, setIsEditing] = useState({
      name: false,
      email: false,
      password: false,
      birthDate: false,
  });

  const handleInputChange = (e) => {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value,
    });
};

const toggleEditing = (field) => {
    setIsEditing((prev) => ({
        ...prev,
        [field]: !prev[field],
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  let obj = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      birthDate: userData.birthDate,
  }

  await patchData(urlUsers, idUser, obj, 'patch')

  console.log('User Data Submitted: ', obj);

};

const goBack = (e) => {
  e.preventDefault()
  navigate(`/home`)

}

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center' }}>

    <Grid2 container spacing={6} direction="column" padding={8}>

    <IconButton aria-label="delete" size="small" onClick={goBack} style={{position:'fixed',left:'10%'}}>
        <ArrowBackIosRoundedIcon fontSize="inherit" />
    </IconButton>

        <Grid2 sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" component="h2"> Profile</Typography>
            <Avatar
                alt="Remy Sharp"
                src={userData.image}
                sx={{ width: 64, height: 64 }} />
        </Grid2>

        <Grid2 item>
            <div style={{ position: 'relative', width: 'max-content' }}>
                <TextField
                    name="name"
                    label="Nombre"
                    variant="outlined"
                    value={userData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing.name}
                    sx={{
                        width: '358px',
                        height: '44px',
                        background: '#F2F2F2',
                        borderRadius: '10px',

                    }}
                />
                <IconButton
                    onClick={() => toggleEditing('name')}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </Grid2>

        <Grid2 item>
            <div style={{ position: 'relative', width: 'max-content' }}>
                <TextField
                    name="email"
                    label="Correo"
                    variant="outlined"
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing.email}
                    sx={{
                        width: '358px',
                        height: '44px',
                        background: '#F2F2F2',
                        borderRadius: '10px',
                    }}
                />
                <IconButton
                    onClick={() => toggleEditing('email')}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </Grid2>


        <Grid2 item>
            <div style={{ position: 'relative', width: 'max-content' }}>
                <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    type='password'
                    value={userData.password}
                    onChange={handleInputChange}
                    disabled={!isEditing.password}
                    sx={{
                        width: '358px',
                        height: '44px',
                        background: '#F2F2F2',
                        borderRadius: '10px',
                    }}
                />
                <IconButton
                    onClick={() => toggleEditing('password')}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </Grid2>

        {/* Campo Fecha de Nacimiento */}
        <Grid2 item>
            <div style={{ position: 'relative', width: 'max-content' }}>
                <TextField
                    name="birthDate"
                    label="Fecha de Nacimiento"
                    variant="outlined"
                    type='text'
                    value={userData.birthDate}
                    onChange={handleInputChange}
                    disabled={!isEditing.birthDate}
                    sx={{
                        width: '358px',
                        height: '44px',
                        background: '#F2F2F2',
                        borderRadius: '10px',
                    }}
                />
                <IconButton
                    onClick={() => toggleEditing('birthDate')}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '10px',
                    }}
                >
                    <EditIcon />
                </IconButton>
            </div>
        </Grid2>

        {/* Botón Submit */}
        <Grid2 item>
            <Button color='success' variant="contained" type="submit">
                Save
            </Button>
        </Grid2>
    </Grid2>
</form>
  )
}

export default Profile