import React from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core';
import './style.css'


const SelectCategory = ({selectedCategory, onChange, categories}) => {
  return (
    <FormControl className='formControl'>
        <Select value={selectedCategory.id} onChange={onChange}>
            {categories.map((category)=>(
                <MenuItem key={category.id} value={category.id} >
                    {category.name}
                </MenuItem>
            ))}

        </Select>

    </FormControl>
  )
}

export default SelectCategory
