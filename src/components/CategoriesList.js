import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesItem = ({ jobs }) => {

  const params = useParams()
  console.log(params)
  console.log(jobs)

  
}

export default CategoriesItem

