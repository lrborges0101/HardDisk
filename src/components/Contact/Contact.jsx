import React from 'react';

import { Container, Typography, TextField} from '@material-ui/core';

const Contact = () => {
  return (
    <>
    <Container maxWidth='md' style={{padding:'5%'}} >
        <Typography variant='h3' style={{textAlign:'center', marginBottom:'4%'}} >Contact Us</Typography>
        <TextField id="outlined-basic" label="E-mail" variant="outlined" placeholder='E-mail' style={{margin:'5%', display:'block'}} />
        <TextField  label="Send us a message!" variant="outlined"  multiline rows={10}
          defaultValue="" style={{margin:'5%', width:'65vw'}} />
    </Container>
      
    </>
  )
}

export default Contact
