import React from "react";
import {Routes, Route} from 'react-router-dom'
import "./App.css";
import Categories from "./components/Categories";
import CategoriesList from "./components/CategoriesList";
import PostForm from "./components/PostForm";
import Footer from "./components/Footer";
import About from "./components/About";
import jobs from './components/Jobs.js'
import './categories.css';
import "./index.css";





// import Home from "./components/Home";




import "./Form.css";
import "./index.css";
function App() {
  return (
    <div className="App">

              <Categories />
{/* to be updated */}
        <Routes>

         <Route exact='true' path='/categories' element={<Categories />} ></Route>
          <Route path="/categoriesitem/:listId" element={<CategoriesList jobs={jobs.lists} />}></Route>
       </Routes>



    </div>
  );
}

export default App;
