import React, { useState, useEffect } from "react";
import Products from "./components/products/Products"
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";
import Cart from "./components/Cart/Cart";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from "./components/CheckoutForm/Checkout/Checkout";

import Slider from "./components/Slider/Slider";
import Footer from "./components/footer/Footer";
import { Category } from "@material-ui/icons";
import AboutUs from "./components/About Us/AboutUs";
import Contact from "./components/Contact/Contact";

    const App = () =>{

       const [categories, setCategories] = useState([])
       const [cart, setCart] = useState({ line_items: [] })
       const [order, setOrder] = useState({})
       const [errorMessage, setErrorMessage] = useState('')
       

       const fetchProducts = async () => {
            const { data: categoriesData } = await commerce.categories.list()
            const { data: products} = await commerce.products.list(); 
            setCategories(
                categoriesData.reduce((acc,category) =>{
                return [
                    ...acc,{
                        ...category,
                        productsData: products.filter((product)=>
                        product.categories.find((cat)=> cat.id === category.id)
                        ),
                    },
                ];
            }, [])
            )
            

           
       }

       const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    
    }

       const handleAddToCart = async (productId, quantity) => {
        setCart(await commerce.cart.add(productId, quantity));
}

       const handleUpdateCartQty = async (productId, quantity) =>{
        setCart( await commerce.cart.update(productId, {quantity}))
            
       }

       const handleRemoveFromCart = async (productId) => {
        setCart(await commerce.cart.remove(productId))

        
       }

       const handleEmptyCart = async () => {
        setCart( await commerce.cart.empty());

        
       }

        const refreshCart = async () => {
            const newCart = await commerce.cart.refresh()

            setCart(newCart)

        }

       const handlecaptureCheckout = async (checkoutTokenId, newOrder) =>{
          try {
            
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder) 
          
            setOrder(incomingOrder)
            refreshCart()
        
        } catch (error) {
            setErrorMessage(error.data.error.message)
          }

       } 

       useEffect(() => {
        
              fetchProducts();
              fetchCart();
              

       }, []);




       console.log(cart)

       



    
         
        return(
       
      <Router>

        <div>
            <Navbar categories={categories} totalItems={cart.total_items} ></Navbar>
            

                <Routes>
                         <Route path='/' element={< Products categories={categories} onAddToCart ={handleAddToCart} />} >
                            </Route>
                            
                        <Route path='/cart' element={<Cart cart={cart} handleUpdateCartQty={handleUpdateCartQty}
                             handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />} >
                            </Route>
                        <Route path="/checkout" element={<Checkout cart={cart} order={order} onCaptureCheckout={handlecaptureCheckout} error={errorMessage} />} >

                         </Route>
                          <Route path="/aboutus" element={<AboutUs/>}>

                          </Route>
                          <Route path="contact" element={<Contact/>} >

                          </Route>
                </Routes>
               <Footer/>
            </div>
      </Router>
                
      
             
        )
    }

    export default App;