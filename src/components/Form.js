import React from "react";

function Form (props) {
  function handleSubmit (e) {
    e.preventDefault();
    props.addTask("Say hello!");
  }
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg" onClick={handleSubmit} >
        Add
      </button>
    </form>
  );
}

export default Form;