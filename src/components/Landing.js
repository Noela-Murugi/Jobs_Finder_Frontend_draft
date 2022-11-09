import React from "react";
import "../Landing.css";

function Landing() {
  return (
    <div id="landing" className="container-fluid text-center bg-grey">
      <h1>
        Find A <span className="anything">Job</span> That <br></br>
        <span className="anything"> Matches</span> <br></br> Your Passion
      </h1>
      <h3>
        Hand-picked opportunities to work from home, remotely, freelance,
        <br></br>
        full-time, part-time, contract and internships.
      </h3>
      <img src="https://media.istockphoto.com/id/1365606637/photo/shot-of-a-young-businesswoman-using-a-digital-tablet-while-at-work.jpg?b=1&s=170667a&w=0&k=20&c=iQ8qVJ5m8VrC_CwdNlzqAwKVE4r7SOdV2UZoWrGcmSQ=" />
    </div>
  );
}

export default Landing;
