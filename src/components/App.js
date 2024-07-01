// import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import React, {useState} from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // function filterList ({item}) { 
    const [list, setList] = useState(TASKS);

    const [cat, setCat] = useState("All");
    console.log(list)
    console.log(cat)
    
    // const filterList1 = list.filter(item) {
      const newListFil = list.filter((item) => {
       if (cat === item.category || cat === "All") {
      return true 
       }
       else {
        return false
       }
      
      });
      console.log(newListFil)
      
      // setList();
    
    
        
          // const newListFil = list.filter((item) => item.text);
    

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter fil = {setCat}/>
      <NewTaskForm setCat= {setCat} setList= {setList} list ={list} TASKS = {TASKS}/>
      <TaskList setList = {setList} list = {list} filList = {newListFil}/>
      
    </div>
  );

}

export default App;
