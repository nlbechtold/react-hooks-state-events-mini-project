import React from "react";
import { TASKS } from "../data";
// import data from "../data"
// import React, {useState} from "react";

function Task({text, category, onRemove}) { 
  // const[delete] = useState(false)
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>onRemove(text)}>X</button>
    </div>
  );
}

export default Task;

// import React,{useState} from "react";

// function Item({ text, category }) {
//   const [inDelete,delete] = useState(false)

//   return (
//     <li className={inCart?"in-cart":""}>
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className={delete?"remove":"add"} onClick={()=>setInCart(!inCart)}>{inCart?"Remove from Cart":"Add to Cart"}</button>
//     </li>
//   );
// }