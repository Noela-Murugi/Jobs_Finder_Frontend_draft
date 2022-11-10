import React,{useState} from 'react'
// import images from './images/job.png'
// import images from './images/job.png'
import Jobs from './Jobs'
import "../JobList.css"


export default function JobList({job}) {
  const [jobs, setJobs] = useState ([])

  const postJob = job => {
    if (!job.text || /^\ s*$/.test(job.text)) {
      return;
    }
    const newJobs = [job, ...jobs]

    setJobs(newJobs)

  }
  {jobs.map ((data)=>(
    <Jobs
    key={data.id}
    job={data}
    />
  ))}
  // {jobs.map= ((job)=> 
  // <div className='job component'>
  //   //   <div className ="job image">
  //   //    <img src='../job.png'/>
  //   //   </div>
  //   //   <div>
  //   //     <p>Full Time Job </p>
  //   //     <p>${}</p>
  //   //   </div>
  //   //   <button>Job Details</button>
  //   // </div> )}

  return (
    <div className='job component'>
      <h1>A LIST OF JOBS</h1>
      <div className ="job image">
       <img src='../job.png'/>
      </div>
      <div>
        <p>Full Time Job </p>
        <p>$ 100000</p>
      </div>
      <button>Job Details</button>
    </div>
  );
}

// export default function JobList() {
//   return
// }

// export default JobList;