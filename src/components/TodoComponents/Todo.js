import React from "react";
import "./Todo.css";

// export default class Todo extends Component {
//   render() {
//     let style = this.props.completed
//       ? { textDecoration: "line-through", color: "gray", fontSize: "1.4rem" }
//       : { textDecoration: "initial", color: "black", fontSize: "1.5rem" };
//     return (
//       <p
//         className="todo"
//         style={style}
//         id={this.props.id}
//         onClick={this.props.markCompleted}
//       >
//         {this.props.task}
//       </p>
//     );
//   }
// }

const Todo = props => {
  let style = {
    textDecoration: props.completed ? "line-through" : "initial",
    color: props.completed ? "red" : "black",
    fontSize: props.completed ? "1.4rem" : "1.5rem"
  };
  return (
    <p
      className="todo"
      style={style}
      id={props.id}
      onClick={props.markCompleted}
    >
      {props.task}
    </p>
  );
};

export default Todo;
