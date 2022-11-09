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



     </div>
  )
}

export default Categories
