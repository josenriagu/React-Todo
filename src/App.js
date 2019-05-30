import React from "react";
import Search from "./components/TodoComponents/Search";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

let initialtoDoCrate = [
  // {
  //   task: "Organize Garage",
  //   id: 1528817077286,
  //   completed: false
  // },
  // {
  //   task: "Bake Cookies",
  //   id: 1528817084358,
  //   completed: false
  // }
];

const localStorage = window.localStorage;
if (localStorage.getItem("todos-saved")) {
  initialtoDoCrate = JSON.parse(localStorage.getItem("todos-saved"));
} else {
  localStorage.setItem("todos-saved", JSON.stringify(initialtoDoCrate));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoCrate: initialtoDoCrate,
      newTodo: "",
      searchString: ""
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

    if (this.state.newTodo) {
      this.setState({
        toDoCrate: newtodoCrate,
        newTodo: ""
      });
    }
  };

  markCompleted = event => {
    let toDoCrateNew = this.state.toDoCrate.map(todo => {
      if (todo.id === parseInt(event.target.id)) {
        todo.completed = !todo.completed;
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

  saveTodos = () => {
    localStorage.setItem("todos-saved", JSON.stringify(this.state.toDoCrate));
  };

  searchTodo = event => {
    this.setState({
      searchString: event.target.value
    });
  };

  render() {
    this.saveTodos();
    return (
      <div className="app">
        <div className="search">
          <Search
            value={this.state.searchString}
            changeHandler={this.searchTodo}
          />
        </div>
        <div className="main">
          <h2>Welcome to your Todo App!</h2>
          <TodoList
            searchString={this.state.searchString}
            toDoCrate={this.state.toDoCrate}
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
      </div>
    );
  }
}

export default App;
