// import React from 'react';
import React, { useState } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from './components/Toodo';
import './App.css';
import { nanoid } from "nanoid";

function App (props) {
  const [tasks, setTasks] = useState(props.tasks);
  function addTask (name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false}
    setTasks([...tasks, newTask])
  }
  const taskList = tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ))
  // const taskList = props.tasks.map(task => (
  //   <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  // ));
  const buttonList = props.tasks.map(item=> (
    <FilterButton key={item.id} />
  ))
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
