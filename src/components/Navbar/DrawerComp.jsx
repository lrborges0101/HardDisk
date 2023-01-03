import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, ListItemButton, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const DrawerComp = () => {
   const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)} >
        <List>
            

            <ListItemButton>
                <ListItemIcon>
                <ListItemText>
                PC's
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                <ListItemText>
                GAMES
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                <ListItemText>
                COMPONENTS
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <Divider />

            <ListItemButton component={Link} to="/" >
                <ListItemIcon>
                <ListItemText>
                Home
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton component={Link} to="aboutus">
                <ListItemIcon>
                <ListItemText>
                About
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
                <ListItemIcon>
                <ListItemText>
                Contact
                </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
       <MenuIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp
