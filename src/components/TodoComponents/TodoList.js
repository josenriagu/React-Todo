import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todo.map(todo => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              markCompleted={this.props.markCompleted}
            />
          );
        })}
      </div>
    );
  }
}
