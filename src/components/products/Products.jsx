import React, { useState } from "react";
import { Grid,TextField, Typography, Container } from '@material-ui/core';
import { Skeleton } from "@mui/material";


import Product from "./product/Product";
import UseStyles from './Style'
import Slider from "../Slider/Slider";
import FilterProduct from "../FilterProduct/FilterProduct";



 

  
 

   const Products = ({categories, onAddToCart}) =>{
    console.log({categories})

    const [resultSearch, setSearchResult]= useState([])

    

    const classes = UseStyles()
   
    return(
        <>
         <Slider/>
         <FilterProduct onAddToCart={onAddToCart} categories={categories} resultSearch={resultSearch} setSearchResult={setSearchResult} />
         {!resultSearch.length && (
            <>
                <Container>

                    {categories.map((category)=>{
                        return(
                            <div key={category.id}>
                                  <Container style={{marginTop: '20px'}}>
                                
                            <main className={classes.content}> 
                            <Typography className={classes.headline} variant="h3" component='h2' >{category.name}</Typography>  
                         <div className={classes.toolbar} />

                    <Grid container justify="center" space={4} >
                        {category.productsData.map((product)=> (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}> 
                            
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                            
                            ))}
                    </Grid>

                </main>
                </Container>
                            </div>
                          
                        )
                    })}
                  

         </Container>
            </>
         )}
         
                
         
        
        </>
       
    );
   }

   export default Products;