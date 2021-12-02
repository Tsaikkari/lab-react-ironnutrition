import React, { useState } from 'react'
import { Input } from 'antd'

const AddFoodForm = ({ addNewFood }) => {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewFood((food) => {
      return {
        ...food,
        [name]: value,
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()

    const food = {
      name: newFood.name,
      image: newFood.image,
      calories: newFood.calories,
      servings: newFood.servings,
    }

    addNewFood(food)
    setNewFood({
      name: '',
      image: '',
      calories: 0,
      servings: 0,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Food</h1>
      <label htmlFor='name' id='name'>
        Name
      </label>
      <Input
        value={newFood.name}
        name='name'
        id='name'
        type='text'
        onChange={handleChange}
      />

      <label htmlFor='image' id='image'>
        Image
      </label>
      <Input
        value={newFood.image}
        name='image'
        id='image'
        type='text'
        onChange={handleChange}
      />

      <label htmlFor='calories' id='calories'>
        Calories
      </label>
      <Input
        value={newFood.calories}
        name='calories'
        id='calories'
        type='number'
        onChange={handleChange}
      />

      <label htmlFor='servings' id='servings'>
        Servings
      </label>
      <Input
        value={newFood.servings}
        name='servings'
        id='servings'
        type='number'
        onChange={handleChange}
      />

      <button type='submit'>Create</button>
    </form>
  )
}

export default AddFoodForm
