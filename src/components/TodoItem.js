import React from "react";

import close from "../assets/close.svg";

const TodoItem = props => {
  return (
    <div className="todoList__container--item">
      <div className="todoList__container--item-text">{props.item}</div>
      <img
        src={close}
        alt=""
        className="todoList__container--item-done"
        onClick={props.removeTodo}
      />
    </div>
  );
};

export default TodoItem;
