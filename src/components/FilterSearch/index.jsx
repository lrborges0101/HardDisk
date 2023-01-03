import React, {useState} from "react";
import {
  Grid,
  Paper,
  Container,
  InputBase,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import SelectCategory from "./SelectCategory";
import { commerce } from "../../lib/commerce";
import Product from "../products/product/Product";
import "./style.css";

 const defaultCategory = {id: 1, name:'All'}

const FilterProduct = () => {

    const [selectCategory, setSelectedCategory] = useState(defaultCategory)

    const handleSelectChange = (event)=>{
        const categories = commerce.categories.list().then((category) => console.log(category.name));
        const {value} = event.target;
        const category = categories.find((cat)=>cat.id ===value)
        setSelectedCategory(category)
    }
  return (
    <div className="filter-bar">
      <Container>
        <Paper component="form" className="root" onSubmit={()=>{}}>
          <SelectCategory
            /* categories={[defaultCategory, ...categories]} */
            selectCategory={selectCategory}
            onChange={handleSelectChange}
          />
          <InputBase
            className="input"
            onChange={()=>{}}
            placeholder="Search for a product"
            inputProps={{ "aria-label": "Search for a product" }}
          />
          <IconButton type="submit" aria-label="search">
            <Search />
          </IconButton>
        </Paper>
        {/* {resultMessage && <p className="result-message">{resultMessage}</p>}
        
        {searchResult.length && (
          <div>
            <Grid container spacing={4}>
              {searchResult.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                  <Product product={product} addProduct={addProduct} />
                </Grid>
              ))}
            </Grid>
          </div>
        )} */}
      </Container>
    </div>
  )
}

export default FilterProduct
