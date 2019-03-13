import React from "react";

import add from "../assets/add.svg";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: JSON.parse(localStorage.getItem("List")) || [
        {
          item: "",
          time: ""
        }
      ],
      item:"",
      time:"",
      editedItem: "",
      itemError: false,
    };
  }

  handleChange = e => {
    const item = e.target.value;
    this.setState({
      ...this.state,
      item: item
    });
  };

  addTodo = () => {
    const item = this.state.item;
    const currentTime = new Date()
    const minutes = ('0'+currentTime.getMinutes()).slice(-2);
    const time = currentTime.getHours() + ":" + minutes;
    
    if (item.length === 0) {
      this.setState({ itemError: true });
    } else {
      const localList = JSON.parse(localStorage.getItem("List"));
      if (localList.length < 0) {
        localStorage.setItem("List", JSON.stringify([item]));
      } else {
        localList.push({item,time});
        localStorage.setItem("List", JSON.stringify(localList));
      }
      this.setState(({
        List: localList,
        item: "",
        itemError: false
      }));
    }
  };

  removeTodo = index => {
    const localList = JSON.parse(localStorage.getItem("List"));
    localList.splice(index, 1);
    localStorage.setItem("List", JSON.stringify(localList));
    this.setState({
      List: localList
    });
  };

  render() {
    const ListItems = this.state.List.map((todo,index) => {
      return(
        <TodoItem
          item={todo.item}
          time={todo.time}
          List={this.state.List}
          onChange={this.itemChange}
          removeTodo={this.removeTodo.bind(this, index)}
          key={index}
        />
      )
    });
    if (this.state.List.length === 0) {
      return (
        <div className="todoList">
          <div className="todoList__empty">Add a new Task!</div>
          <div className="todoList__container">
            <div
              className={
                this.state.itemError
                  ? "todoList__container--error-visible"
                  : "todoList__container--error"
              }
            >
              Todo Field can`t be empty
            </div>
            <div className="todoList__container--wrap">
              <input
                className="todoList__container--wrap-input"
                placeholder="Task"
                onChange={this.handleChange}
                value={this.state.item}
              />
              <img
                src={add}
                alt="add"
                className="todoList__container--wrap-add"
                onClick={this.addTodo}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="todoList">
          <div className="todoList__header">
            <div className="todoList__header--amount">
              You have {this.state.List.length} things to do
            </div>
          </div>
          <div className="todoList__container">
            <div
              className={
                this.state.itemError
                  ? "todoList__container--error-visible"
                  : "todoList__container--error"
              }
            >
              Todo Field can`t be empty
            </div>
            {ListItems}
            <div className="todoList__container--wrap">
              <input
                className="todoList__container--wrap-input"
                placeholder="Task"
                onChange={this.handleChange}
                value={this.state.item}
              />
              <img
                src={add}
                alt="add"
                className="todoList__container--wrap-add"
                onClick={this.addTodo}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TodoList;
