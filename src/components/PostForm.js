import React, { useState } from "react";
import Axios from "axios";
import "../Form.css";
import { useNavigate } from "react-router-dom";

function Form({ setData, data }) {
  const [titleName, setTitleName] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");

  const navigate = useNavigate();


  const addEvent = () => {
    Axios.post("****", {
      name: titleName,
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
      <div className="signup-container">
        <div className="left-container">
          <h1>Jobs Finder</h1>
        </div>
        <div className="right-container">
          <header>
            <h1>Post a New Job </h1>
            <div className="set">
            </div>
            <div className="set">

            <div className="pets-name">
                <label htmlFor="events-name">Job Title</label>
                <input
                  id="events-name"
                  placeholder="Title..."
                  type="text"
                  value={titleName}
                  onChange={(e) => {
                    setTitleName(e.target.value);
                  }}
                  required
                ></input>
              </div>

              <div className="pets-breed">
                <label htmlFor="events-venue">Location</label>
                <input
                  id="events-venue"
                  placeholder="Location..."
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  required
                ></input>
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="events-venue">Salary Range</label>
                <input
                  id="events-tickets"
                  placeholder="Salary range..."
                  type="number"
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                  required
                ></input>
              </div>

                <div className="pets-birthday">
                  <label htmlFor="pets-birthday">Application Deadline</label>
                  <input
                    id="pets-birthday"
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                    required
                  ></input>
                </div>
            </div>

            <div className="pets-weight">
              <label htmlFor="pet-weight-0-25">Job Requirements</label>
              <div className="radio-container">
                <input
                  value={requirements}
                  placeholder="Job Requirements"
                  onChange={(e) => {
                    setRequirements(e.target.value);
                  }}
                  type="text"
                  required
                />
              </div>
              <label htmlFor="pet-weight-0-25">Job Description</label>
              <div className="radio-container">
                <input
                  type="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Job Description"
                  required
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button
                id="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <button id="next" onClick={addEvent}>
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
