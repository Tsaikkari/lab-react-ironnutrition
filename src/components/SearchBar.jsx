import React from 'react'
import { Input } from 'antd'

const SearchBar = ({ searchFood, handleFoodSearch }) => {

  return (
    <div>
      <label htmlFor='searchFood'>Search</label>
      <Input
        type='text'
        name='searchFood'
        id='searchFood'
        value={searchFood}
        placeholder='Enter search'
        onChange={handleFoodSearch}
      />
    </div>
  )
}

export default SearchBar
