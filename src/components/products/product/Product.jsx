import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IcoBotton, IconButton} from '@material-ui/core';
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons';



import UseStyles from './styles';
import Products from '../Products';

const Product = ({product, onAddToCart}) => {
   const classes = UseStyles();
  
   
    return (
    <Card className={classes.root}>
        <CardMedia   className={classes.media} image ={product.image.url} title={product.name}/>
        <CardContent>
            
            <div className={classes.cardContent} >
                <Typography variant="h5" gutterBottom>
                    {product.name}
                   
                </Typography>
                <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                </Typography>

            </div>
            <Typography dangerouslySetInnerHTML={{__html: product.description}} variant ="" color="textSecondary"/>
                
            
            </CardContent>  
            <CardActions disableSpacing className={classes.CardActions}>
              <IconButton aria-label='Add to Cart' onClick={()=> onAddToCart(product.id, 1)} >
                <AddShoppingCart/>
              </IconButton>
            </CardActions>

    </Card>
  )
}

export default Product
