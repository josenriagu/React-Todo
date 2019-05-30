import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    let style = this.props.completed
      ? { textDecoration: "line-through" }
      : { textDecoration: "initial" };
    return (
      <p
        className="todo"
        style={style}
        id={this.props.id}
        onClick={this.props.markCompleted}
      >
        {this.props.task}
      </p>
    );
  }
}
