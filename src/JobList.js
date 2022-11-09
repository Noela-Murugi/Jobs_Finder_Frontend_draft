import React from 'react'
import images from './images/job.png'
import ""


export default function JobList() {
  return (
    <div className='job component'>
      <h1>A LIST OF JOBS</h1>
      <div className ="job image">
      <img src ={images} alt=""/>
      </div>
      <div>
        <p>Full Time Job </p>
        <p>$ 100000</p>
      </div>
      <button>Job Details</button>

    </div>
  );
}

// export default JobList;