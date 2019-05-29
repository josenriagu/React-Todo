import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const InitialtoDoCrate = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoCrate: InitialtoDoCrate,
      newTodo: ""
    };
  }

  changeTodo = event => {
    this.setState({
      newTodo: event.target.value
    });
  };

  addTodo = () => {
    const newTodo = {
      task: this.state.newTodo,
      id: Date.now(),
      completed: false
    };

    const newtodoCrate = this.state.toDoCrate.concat(newTodo);

    this.setState({
      toDoCrate: newtodoCrate,
      newTodo: ""
    });
  };

  markCompleted = event => {
    let toDoCrateNew = this.state.toDoCrate.map(todo => {
      if (todo.id === parseInt(event.target.id)) {
        todo.completed = true;
      }
      return todo;
    });

    this.setState({
      toDoCrate: toDoCrateNew
    });
  };

  clearTodo = event => {
    let uncompletedTodo = this.state.toDoCrate.filter(todo => !todo.completed);

    this.setState({
      toDoCrate: uncompletedTodo
    });
  };

  addOnEnter = event => {
    let keyPressed = event.keyCode ? event.KeyCode : event.which;
    if (keyPressed === 13) {
      this.addTodo();
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
          todo={this.state.toDoCrate}
          markCompleted={this.markCompleted}
        />
        <TodoForm
          value={this.state.newTodo}
          changeHandler={this.changeTodo}
          addTodo={this.addTodo}
          clearTodo={this.clearTodo}
          addOnEnter={this.addOnEnter}
        />
      </div>
    );
  }
}

export default App;
