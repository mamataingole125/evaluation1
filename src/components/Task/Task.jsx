import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import { useState } from "react";
import style from "./task.module.css"

const Task = ({todoss,Deletetodo}) => {
  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
     

     
       />
   
      <div data-cy="task-text">
     
     <p>{todoss.value}</p>
      </div>
      {/* Counter here */}
       <Counter />
      <button data-cy="task-remove-button" 
     onClick={()=>Deletetodo(todoss.id)
     }
      >✕</button>
    </li>
  );
};

export default Task;
