import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesItem = ({ jobs }) => {

  const params = useParams()
  console.log(params)
  console.log(jobs)

  return (
    <div key={jobs.id}>

      {jobs.map(list => (
        list.id === parseInt(params.listId) &&

        <div className='categoriesitem'>
          <img alt={list.title} src={list.image}></img>
          <div className='details-categories'>
            <div>
              <h1>{list.title}</h1>
              <br></br>
            </div>


          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoriesItem

