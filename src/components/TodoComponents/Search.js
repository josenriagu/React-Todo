import React from "react";
import './Todo.css';

const Search = props => {
  return (
    <input
      type="text"
      placeholder="...search todos"
      value={props.value}
      onChange={props.changeHandler}
    />
  );
};

export default Search;
