import React from 'react';

const Form = ({ text, setText, todos, setTodos, setStatus }) => {
  const textHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: text,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          onChange={textHandler}
          type="text"
          value={text}
          className="todo-input"
        />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
