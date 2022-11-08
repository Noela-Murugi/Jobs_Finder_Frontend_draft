import React, { useState } from "react";
import Axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";

function Form({ setData, data }) {
  const [jobTitle, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDeadline] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const navigate = useNavigate();

  const responseEvent = () => {
    Axios.post("api", {
      name: jobTitle,
      salary: salary,
      description: description,
      date: date,
      location: location,
      requirements: requirements,
    }).then((res) => {
      setData([...data, res.data]);
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="form">
      <div className="jobs-container">
        <div className="containerA">
          <h1>Jobs Finder</h1>
        </div>
        <div className="containerB">
          <header>
            <h1>Post a New Job </h1>
            <div></div>
            <div className="set">
              <div className="jobs-title">
                <label htmlFor="j-title">Job Title</label>
                <input id="j-title" placeholder="Title..." type="text" value={jobTitle}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                ></input>
              </div>

              <div className="jobs-location">
                <label htmlFor="j-location">Location</label>
                <input id="j-location" placeholder="Location..." type="text" value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className="set">
              <div className="jobs-location">
                <label htmlFor="j-location">Salary Range</label>
                <input id="j-salary" placeholder="Salary range..." type="number" value={salary}
                 onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  required
                ></input>
              </div>
              <div className="jobs-deadline">
                <label htmlFor="jobs-deadline">Application Deadline</label>
                <input id="jobs-deadline" type="date" value={date} onChange={(e) => {
                    setDeadline(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>

            <div className="jobs-requirements">
              <label htmlFor="jobs-requirements-0-25">Job Requirements</label>
              <div className="radio-container">
                <input value={requirements} placeholder="Job Requirements" onChange={(e) => {
                    setRequirements(e.target.value);
                  }}
                  type="text"
                  required
                />
              </div>
              <label htmlFor="jobs-requirements-0-25">Job Description</label>
              <div className="radio-container">
                <input type="text" value={description}
                onChange={(e) => { setDescription(e.target.value);
                 }}
                  placeholder="Job Description"
                  required
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button id="back" onClick={() => { navigate("/");
              }}
              >
                Back
              </button>
              <button id="next" onClick={responseEvent}>
                Post
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
export default Form;
