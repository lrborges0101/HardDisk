import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DrawerComp from './DrawerComp';
import { Routes } from 'react-router-dom';


import UseStyles from './Styles'
import Cart from '../Cart/Cart';



const Navbar = ({totalItems}) => {
      

     const theme = useTheme()
     const isMatch = useMediaQuery(theme.breakpoints.down('md'));
     const classes = UseStyles();
     const location = useLocation();

  return (
    <div>
       <AppBar position='fixed' className={classes.appBar} color='inherit'>

              <Toolbar>

         
              {isMatch ? (<>
                <Typography component={Link} to="/" style={{textDecoration:'none'}} >Hard Disk</Typography>
                <DrawerComp/> </>):(<>

                <MenuItem className={classes.button} >USD
<KeyboardArrowDownIcon/>
</MenuItem>
<MenuItem className={classes.button} >
PC's
</MenuItem>
<MenuItem className={classes.button} >
GAMES
</MenuItem>
<MenuItem className={classes.button} >
  COMPONENTS
</MenuItem>

                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit' >

                
                 Hard Disk

                </Typography>
             
             
                <div className={classes.grow1} >
                <MenuItem component={Link} to="/" className={classes.button} >Home</MenuItem>
                <MenuItem component={Link} to="aboutus" className={classes.button} >About</MenuItem>
                <MenuItem component={Link} to="contact" className={classes.button} >Contact</MenuItem>
                </div>
              </>  )}

              <div className={classes.grow} />
                <MenuItem className={classes.button} ><FavoriteBorderIcon/></MenuItem>
                <MenuItem className={classes.button} ><PersonAddIcon fontSize='medium' /></MenuItem>
                {location.pathname ==="/" && (
                <div className={classes.button} >
                     <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary"  >
                             <ShoppingCart/>
                        </Badge>
                     </IconButton>
                </div>)}

              </Toolbar>
          
       </AppBar>
    </div>
  )
}

export default Navbar
