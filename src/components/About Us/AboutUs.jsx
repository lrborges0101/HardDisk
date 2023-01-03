import React from 'react'

import { Typography, Container } from '@mui/material'

const AboutUs = () => {
  return (
    <>
    <Container maxWidth="md" style={{  marginTop:'2%',}} >
        <Typography style={{ textAlign:'center', marginTop:'8%',}} variant='h4'>About Me Me</Typography>
        <Typography style={{fontSize:'1.2rem', padding:'5%', marginBottom:'2%'}}>"Thank you for visiting Hard Disk! We are an online store that has been in business for 5 years and are dedicated to providing our customers with the best shopping experience possible.<br/>

Our team is made up of passionate individuals who are committed to offering high-quality products at affordable prices. We specialize in technology and are always on the lookout for new and exciting items to add to our selection.<br/>

We understand that shopping online can be intimidating, which is why we go above and beyond to ensure that our customers feel comfortable and confident when shopping with us. Our customer service team is always available to answer any questions you may have and provide assistance with your order.<br/>

In addition to providing excellent customer service, we are also dedicated to giving back to our community. <br/>

Thank you for choosing Hard Disk for all of your technology and hardware needs. We look forward to serving you and hope you have a wonderful shopping experience with us!"</Typography>
    </Container>
      
    </>
  )
}

export default AboutUs
