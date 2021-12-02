import React from 'react'
import { Card, Col, Button } from 'antd'

const FoodBox = ({ food, handleDelete, id }) => {
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 400, margin: 10 }}
      >
        <img src={food.image} height={150} alt={food.name} width={180} />
        <p>Calories: {food.calories} </p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings}</b> kcal
        </p>
        <Button onClick={() => handleDelete(id)} type='primary'>Delete</Button>
      </Card>
    </Col>
  )
}

export default FoodBox
