import React from 'react'
import { Container, Grid, Box, Link } from '@material-ui/core'
import git from '../../Assets/git.png'
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer style={{height:'1vh'}}>
        <Box style={{fontFamily:'arial', boxShadow: '-2px -9px 8px -10px rgba(0,0,0,0.75)',  marginTop:'2%'}}
           px={{xs: 3, sm: 10}}
           py={{xs: 5, sm:10}}
          >
         <Container maxWidth='lg' >
            <Grid container spacing={5} >
              <Grid item xs={12} sm={4}  >
            <Box borderBottom={1} >Help</Box>
            <Box><Link href='contact' color='inherit' >
            Contact
            </Link></Box>
            <Box><Link href='contact' color='inherit' >
            Support
            </Link>
            </Box>
            <Box><Link href='aboutus' color='inherit' >
            Privacy
            </Link></Box>
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1} >Account</Box>
            <Box><Link href='/' color='inherit' >
            Register
            </Link></Box>
           
        </Grid>
        <Grid item xs={12} sm={4}>
            <Box borderBottom={1} >Messages</Box>
            <Box><Link href='/' color='inherit' >
            BackUp
            </Link></Box>
            <Box><Link href='/' color='inherit' >
            History
            </Link></Box>
            <Box>
                <Link href='/' color='inherit' >
                Roll
                </Link></Box>
        </Grid>  
            </Grid>
          <Box textAlign='center' fontSize='20px' pt={{xs: 5, sm:10}} pb={{xs: 5, sm:0}}>
            Hard Disk &reg; {new Date().getFullYear()}
            <Link href='https://github.com/lrborges0101' target="_blank"    >
                <img className='git'  src={git} alt="" />
            </Link>
          </Box>
    </Container>
        </Box>
        
    </footer>
    
      
    </>
  )
}

export default Footer
