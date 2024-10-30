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



export default function NavBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#FFFFFF' }}>
                <Toolbar >

                    <Typography  component="div" sx={{ flexGrow: 0.1, width: '200px' }}>
                        <img src={FreshPrince} height={'40px'} />
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d' }}>
                            SHOP
                        </Typography>
                        <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: '#1d1d1d' }}>
                            COLLECTIONS
                        </Typography>
                    </div>
                    <div>
                        <Button><PersonOutlineOutlinedIcon /></Button>
                        <Button><ShoppingBagOutlinedIcon /></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
