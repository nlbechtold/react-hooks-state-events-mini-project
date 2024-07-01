import React from "react";
import { CATEGORIES } from "../data";
import {useState} from "react";
import { TASKS } from "../data";

function NewTaskForm({TASKS, setList}) { 
  const [cats, setCats] = useState(CATEGORIES);

  const handleSubmit =(e)=> {
    e.preventDefault()
    const newTask = {
      text: e.target.text.value,
      category: e.target.category.value,
    }
    
    console.log((e.target.text.value))
  console.log((e.target.category.value))
   
  const formList = [...TASKS,newTask]

  setList(formList)
}
const formCat = CATEGORIES.map((category) => 
  <option key={category} value={category}>{category}</option> )
    console.log()
    console.log("I submit");
  
 
//   function formClick = 
//   // const dropdownBtn = cats.map((cat) => (
//   //     <button key={cat} className="btn" onClick={() => {(cat)}}>{cat}</button>
//   )
// )
  
  return (
    <form className="new-task-form" onSubmit={(e)=>handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category"> {formCat} </select>
        {/* <button className="select" onClick={console.log(CATEGORIES)()} />=>dropdownBtn(CATEGORIES)}>X</button> */}
        </label>
    {/* <input type="submit" value="Add task"/> */}
    <button  type= "submit"> Add Task</button>
      
    </form>
  )

}



export default NewTaskForm;


