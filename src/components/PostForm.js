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

 
export default Form;
