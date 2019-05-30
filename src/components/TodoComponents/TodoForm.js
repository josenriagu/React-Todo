import React from "react";
import "./Todo.css";

// method 1: class component
// export default class TodoForm extends Component {
//   render() {
//     return (
//       <div className="todoform">
//         <input
//           type="text"
//           placeholder="...enter a task"
//           value={this.props.value}
//           onChange={this.props.changeHandler}
//           onKeyPress={this.props.addOnEnter}
//         />
//         <button onClick={this.props.addTodo}>Add Todo</button>
//         <button onClick={this.props.clearTodo}>Clear Completed</button>
//       </div>
//     );
//   }
// }

// method 2: functional component: preferrable when we do not need state of any class methods
const TodoForm = props => {
  return (
    <div className="todoform">
      <input
        type="text"
        placeholder="...enter a task"
        value={props.value}
        onChange={props.changeHandler}
        onKeyPress={props.addOnEnter}
      />
      <div className="button-wrapper">
        <button onClick={props.addTodo}>Add</button>
        <button onClick={props.clearTodo}>Clear</button>
      </div>
    </div>
  );
};

export default TodoForm;
