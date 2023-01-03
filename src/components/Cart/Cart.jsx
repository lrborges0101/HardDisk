import React from 'react'

import { Typography,Container,Button, Grid } from '@mui/material';
import { CallMissedSharp } from '@material-ui/icons';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';



const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {

     
    const isEmpty =  !(cart.line_items && cart.line_items.length);

      const classes = useStyles()

    const EmptyCart = () =>(
      <div className={classes.emptyCard} >
         <Typography variant='subtitle1' >You have no items in your shoppimg cart, 
        <Link component to ="/" className={classes.link} >start adding some</Link>!
        </Typography>
      </div>
       
  
    );

    const FilledCart = () => (
             <>
                 <Grid container spacing={3} >
                         {cart.line_items.map((item)=>(
                          <Grid item xs={12} sm={4} key={item.id} >
                            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                          </Grid>
                          ))}
                  </Grid>
                   <div className={classes.cardDetails} >
                            <Typography variant='h4'>Subtotal:{cart.subtotal.formatted_with_symbol}   </Typography>
                            
                            <div>
                                <Button className={classes.emptyButton} size="large" type='button' variant ="contained" color="secondary" onClick={handleEmptyCart } >Empty Cart</Button>
                                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type='button' variant ="contained" color="primary" >Checkout</Button>
                            </div>
                    </div>
             </>
    )
  return (
    <Container>
        <div className={CallMissedSharp.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
        {isEmpty ?<EmptyCart /> :  <FilledCart/> }
    </Container>
  )
}

export default Cart
