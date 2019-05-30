import React, { Component } from "react";
import "./Todo.css";

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="...todo"
          value={this.props.value}
          onChange={this.props.changeHandler}
          onKeyPress={this.props.addOnEnter}
        />
        <button onClick={this.props.addTodo}>Add Todo</button>
        <button onClick={this.props.clearTodo}>Clear Completed</button>
      </div>
    );
  }
}
