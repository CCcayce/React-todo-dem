// import React from 'react';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from './components/Toodo';
import './App.css';

function App (props) {
  function addTask (name) {
    console.log(name);
  }
  const taskList = props.tasks.map(task => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));
  const buttonList = props.tasks.map(item=> (
    <FilterButton key={item.id} />
  ))
  console.log(props);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      
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
