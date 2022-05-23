import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({AddValue}) => {
  const [value,setValue]=useState("")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"
      value={value}
      placeholder="Add task..." onChange={(e)=>setValue(e.target.value)}/>
      <button data-cy="add-task-button"
      
      onClick={()=>{
        // console.log(value);
        AddValue(value)
        setValue("")
      }
     }
    
      >+</button>
    </div>
  );
};

export default AddTask;
