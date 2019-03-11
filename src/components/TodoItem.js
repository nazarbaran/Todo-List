import React from "react";

import close from "../assets/close.svg";

const TodoItem = props => {
  return (
    <div className="todoList__container--item">
      <div className="todoList__container--item-textwrap">
        <div className="todoList__container--item-textwrap-text"> {props.item}</div>
        <span className="todoList__container--item-textwrap-date">Added at {props.time}</span>
      </div>
      <div className="todoList__container--item-btnwrap">
        <img
          src={close}
          alt=""
          className="todoList__container--item-btnwrap-remove"
          onClick={props.removeTodo}
        />
      </div>
    </div>
  );
};

export default TodoItem;
