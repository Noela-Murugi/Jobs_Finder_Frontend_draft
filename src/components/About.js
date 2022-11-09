import React from "react";

function About() {
  return (
    <>
      <div id="about" className="container-fluid">
        <div className="row">
          <h2>About us</h2>
          <p>
            Ever had a tough time finding your next job? Well, look no further,
            <br />
            Job Finder is here to make your job hunting way simpler.
            <br /> Say goodbye to having to stress yourself, we've got you
            sorted.
          </p>
        </div>
      </div>
      <div className="row">
        <h2>Our Values</h2>
        <strong>MISSION:</strong> <br></br> Our mission is to make job hunting
        easy for everyone, <br /> connecting YOU with millions of potential
        employers around the globe.
        <br /> Relax you don't have to dread the process anymore!!
        <br />
        <p>
          {" "}
          <strong>VISION:</strong> <br></br> Our vision at Job Finder is to help
          make job hunting as effortless <br />
          and as smooth as possible for those just starting out and also to
          experienced veterans.
          <br /> Find a job, at the comfort of your home.
        </p>
      </div>
    </>
  );
}
export default About;
