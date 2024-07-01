
import { TASKS } from "../data";
import React, {useState} from "react";
import Task from "./Task"

function TaskList({taskItem, list, setList, filList}) { 
  // const [list, setList] = useState(TASKS);
  function remove(text) {
    const newList = list.filter((item) => item.text !== text);
    
    setList(newList);
    }

  return (
    <div className="tasks">
  {filList.map((taskItem) => <Task text={taskItem.text} category={taskItem.category} onRemove={remove} /> )}

    </div>
  );
}

export default TaskList;
