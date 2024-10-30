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
import { NavLink } from 'react-router-dom';



export default function NavBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar >

                    <Typography component="div" sx={{ flexGrow: 1, width: '200px' }}>
                        <img src={FreshPrince} height={'40px'} />
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-evenly',  flexGrow:1 }}>
                        <NavLink>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d'}}>
                            SHOP 
                        </Typography>
                        </NavLink> <br/>
                        <NavLink>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d' }}>
                            COLLECTIONS
                        </Typography>
                        </NavLink>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse', flexGrow:1 }}>
                        
                        <Button><ShoppingBagOutlinedIcon /></Button>
                        <Button><PersonOutlineOutlinedIcon /></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
