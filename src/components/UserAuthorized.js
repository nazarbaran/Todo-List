import React from "react";
import Clock from "react-live-clock";

import robot from "../assets/robot.svg";
import pointer from "../assets/pointerRight.svg";
import TodoList from "./TodoList";

const UserAuthorized = () => {
  return (
    <div className="user">
      <div className="user__main">
        <Clock
          className="user__main--time"
          format={"HH:mm"}
          ticking={true}
          timezone={"Europe/Kiev"}
        />
        <div className="user__main--container">
          <img src={robot} alt="robot" className="user__main--container-img" />
          <div className="user__main--container-header">
            Glad to see you {localStorage.getItem("name")}!
          </div>
        </div>
        <div className="user__main--subheader">
          <div className="user__main--subheader-text">
            Here`s your ToDo list
          </div>
          <img
            src={pointer}
            alt="Right"
            className="user__main--subheader-img"
          />
        </div>
      </div>

      <TodoList />
    </div>
  );
};

export default UserAuthorized;
