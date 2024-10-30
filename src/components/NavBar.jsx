import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FreshPrince from '../assets/Príncipe fresco.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';




export default function NavBar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem('isLoggedIn', false)
        setIsLoggedIn(false)
        navigate('/')
        
    }

    const userControl =()=>{
        if(isLoggedIn){
            navigate('/profile')
        }else{
            navigate('/login')
        }
    }

    console.log(isLoggedIn)

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar >

                    <Typography component="div" sx={{ flexGrow: 1, width: '200px' }}>
                        <NavLink to={'/'}>
                        <img src={FreshPrince} height={'40px'} />
                        </NavLink>
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexGrow: 1 }}>
                        {isLoggedIn && (
                            <>
                                <NavLink to={'/home'}>
                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d' }}>
                                        SHOP
                                    </Typography>
                                </NavLink> <br />
                                <NavLink to={'/collection'}>
                                    <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d' }}>
                                        COLLECTIONS
                                    </Typography>
                                </NavLink>
                            </>
                        )}

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', flexGrow: 1 }}>
                        <Button onClick={logOut} color='error'><LogoutIcon /> </Button>
                        <Button><ShoppingBagOutlinedIcon /></Button>
                        <Button onClick={userControl}><PersonOutlineOutlinedIcon /></Button>

                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
