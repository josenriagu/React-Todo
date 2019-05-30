import React from "react";
import Todo from "./Todo";
import './Todo.css';

// export default class TodoList extends Component {
//   render() {
//     return (
//       <div className="todolist">
//         {this.props.toDoCrate.map(todo => {
//           return (
//             <Todo
//               key={todo.id}
//               id={todo.id}
//               task={todo.task}
//               completed={todo.completed}
//               markCompleted={this.props.markCompleted}
//             />
//           );
//         })}
//       </div>
//     );
//   }
// }

const TodoList = props => {
  return (
    <div className="todolist">
      {props.toDoCrate.filter(todo => todo.task.includes(props.searchString)
      ).map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            markCompleted={props.markCompleted}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
