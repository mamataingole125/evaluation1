import React from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader"
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import { useState } from "react";
import { v4 as uuidv4} from "uuid"


const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos,setTodos]=useState([])

const AddValue=(newtodo)=>{
console.log(newtodo)
  setTodos([...todos,{
    id:uuidv4(),
    value:newtodo
  }])
}

const Deletetodo=(id)=>{
  setTodos(todos.filter((todos)=> todos.value !=id))
}

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader/>
      <AddTask
      
      AddValue={AddValue}/>
      <Tasks  todos={todos} Deletetodo={Deletetodo}/>
    </div>
  );
};

export default TaskApp;
