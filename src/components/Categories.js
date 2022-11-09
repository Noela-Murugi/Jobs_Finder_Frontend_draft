import React, { useState }from 'react'
import { Link} from 'react-router-dom'


import jobs from './Jobs.js'

const Categories = () => {

  const [search, setSearch] = useState('')

  const filteredList =
  jobs.lists.filter(list => list.title.toLowerCase().includes(search.toLowerCase()))

  return (

    <div >
      <div className='categories-input'>
      <input
      type={'text'}
      placeholder={'Search'}
      value={search}
      onChange={(e) => setSearch(e.target.value)} />
      </div>

        <div className='categories'>

         {filteredList.map(list => (
          <ul key={list.id}>
            <Link to={`/categoriesitem/${list.id}`}>
          <li >
            <img alt={list.title} src={list.image}></img>
            <br></br>
            <br></br>
            <h3>{list.title}</h3>
          </li>
          </Link>

      </ul>
      ))}
        </div>


     </div>
  )
}

export default Categories
