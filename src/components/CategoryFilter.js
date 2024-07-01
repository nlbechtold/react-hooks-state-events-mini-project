// import React from "react";
import { CATEGORIES } from "../data";
import React, {useState} from "react";
import Task from "./Task";

// const filteredItems = Task.filter((item)=>{
//   if (Task.category === category || category === "All"){
//     return true
//   }
//   return false
// })

function CategoryFilter({fil}) {
  console.log(CATEGORIES)
  const [cats, setCats] = useState(CATEGORIES);
  
  const buttonList = cats.map((cat) => (
      <button key={cat} className="btn" onClick={() => {fil(cat)}}>{cat}</button>
  ));
  return (
    <div className="categories">
      <h5>Category Filter</h5>
{buttonList}
{/* {filteredItems} */}
    
    </div>
  );
}

export default CategoryFilter;
