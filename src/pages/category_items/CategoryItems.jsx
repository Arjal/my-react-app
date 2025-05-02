import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useApiHooks } from '../../hooks/apiHooks';


export default function CategoryItems() {
  const { label } = useParams();

  const nav = useNavigate();

  const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/filter.php', { c: label });





  if (load) {
    return <h1>Loading......</h1>
  }

  console.log(data);

  return (
    <div >

      <h1>Items in "{label}"</h1>
      <div className='grid grid-cols-4 gap-5 p-5'>
        {data && data.meals.map((meal) => {
          return <div
            onClick={() => nav(`/item-detail/${meal.idMeal}`)}
            className='cursor-pointer space-y-3'
            key={meal.idMeal} >
            <h1 className='font-bold '>{meal.strMeal}</h1>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              onError={(e) => e.target.src = 'https://www.themealdb.com/images/ingredients/Chicken.png'}
            />
            {/* <p>Meal ID: {meal.idMeal}</p> */}
          </div>
        })}
      </div>

    </div>
  )
}