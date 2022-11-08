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

              
        </div>
      </div>
    </div>
  );
}
export default Form;
