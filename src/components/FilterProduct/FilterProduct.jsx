import React from 'react'
import { Grid, Paper, Container, InputBase, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import SelectCategory from './SelectCategory'
import './style.css'
import { useState } from 'react'
import { commerce } from '../../lib/commerce'
import Product from '../products/product/Product'



const defaultCategory = {id: 0, name: 'All'} 

const FilterProduct = ({onAddToCart, categories, resultSearch, setSearchResult}) => {
    const [resultMessage, setResultMessage] = useState('')
    const [keyword, setKeyword] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

    const handleSelectChange = (event)=>{
        const {value} = event.target;
        const category = categories.find((cat)=>cat.id === value)
        setSelectedCategory(category)
    };

    const handleInputChange = (event) =>{
        if(!keyword || !event.target.value){
            setResultMessage(''); 
            setSearchResult([]); 
            setSelectedCategory(defaultCategory);
        }
        setKeyword(event.target.value)
    };
    const onSubmoit = async (e) => {
        e.preventDefault();
        if (!keyword) {
          setResultMessage("You have to enter a product name");
        }
        if (keyword) {
          try {
            const categoryId = selectedCategory.id
              ? { category_id: selectedCategory.id }
              : {};
            const { data } = await commerce.products.list({
              query: keyword,
              ...categoryId,
            });
            if (!data) {
              setResultMessage("No result match");
              setSearchResult([]);
              return;
            }
            setResultMessage("");
            setSearchResult(data);
          } catch (error) {
            setSearchResult([]);
          }
        }
      };
    
    
  return (
    <div className="filter-bar">
      <Container>
        <Paper component="form" className="root" onSubmit={onSubmoit}>
          <SelectCategory
            categories={[defaultCategory, ...categories]}
            selectedCategory={selectedCategory}
            onChange={handleSelectChange}
          />
          <InputBase
            className="input"
            onChange={handleInputChange}
            placeholder="Search for a product"
            inputProps={{ "aria-label": "Search for a product" }}
          />
          <IconButton type="submit" aria-label="search">
            <Search />
          </IconButton>
        </Paper>
        {resultMessage && <p className="result-message">{resultMessage}</p>}
       
        {!!resultSearch.length && (
          <div>
            <Grid container spacing={4}>
              {resultSearch.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Container>
    </div>
  );
}

export default FilterProduct
