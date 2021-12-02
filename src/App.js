import React, { useState } from 'react'
import { Row, Divider, Button } from 'antd'
import './App.css'
import foodsJSON from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import SearchBar from './components/SearchBar'

function App() {
  const [foods, setFoods] = useState(foodsJSON)
  const [searchFood, setSearchFood] = useState('')
  const [filteredFoods, setFilteredFoods] = useState([])
  const [showAll, setShowAll] = useState(true)

  const showFoods = showAll
  ? foods
  : filteredFoods

  const addNewFood = (food) => {
    setFoods(foods => [food, ...foods])
  }

  const handleFoodSearch = (event) => {
    let searchFood = event.target.value 
    let filteredFoods = foods.filter(food => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase())
    })
    setSearchFood(food => food = searchFood)
    if (searchFood === '') {
      setShowAll(all => all = showFoods)
    } else {
      setFilteredFoods(food => food = filteredFoods)
      setShowAll(!showAll)
    }
  }

  const handleDelete = (key) => {
    console.log(key)
    let editedFoodList = foods.filter((food, index) => index !== key)
    setFoods(editedFoodList)
  }

  return (
    <div className='App'>
    <div className='form-div'>
      <AddFoodForm
        addNewFood={addNewFood}
      />
    </div>
    <div className='hide-btn-div'>
      <Button> Hide Form / Add New Food </Button>
    </div>
    <div className='searchbar-div'>
      <SearchBar searchFood={searchFood} handleFoodSearch={handleFoodSearch} />
    </div>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.map((food, index) => (
          <div key={index}>
            <FoodBox food={food} id={index} handleDelete={handleDelete} />
          </div>
        ))}
      </Row>
    </div>
  )
}
export default App
