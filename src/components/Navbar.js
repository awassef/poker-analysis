import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

function Navbar() {
  return (
    <div >
    {/* <div>Navbar</div> */}
    
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#35654d"}}>
        <Toolbar>
        <Avatar src='/logo.jpg' variant='no' sx={{ height: '70px', width: '70px', marginRight:"20px"}}></Avatar>
          <Typography variant="h4" component="div" style={{fontFamily:"Lato"}} sx={{ flexGrow: 1 }}>
            Poker Analysis
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar

