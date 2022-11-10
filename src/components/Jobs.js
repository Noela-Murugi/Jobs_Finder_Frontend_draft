import React from 'react'

export default function Jobs({job}) {
  return (
    <tr>
        <td>{job.image}</td>
        <td>{job.title}</td>
        <td>{job.location}</td>
        <td>{job.deadline}</td>
        <td>{job.requirment}</td>
        <td>{job.description}</td>
        <td>{job.salary}</td>  
    </tr>
  )
}
