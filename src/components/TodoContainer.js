import React, { Component } from 'react';
import Todo from './Todo.js';

export default class TodoContainer extends Component {
  render() {
    return (
      <ul className="Todo-list">
        {this.props.todos.map(todo => {
          return (
            <Todo
              checked={todo.isComplete}
              name={todo.name}
              key={todo.id}
              id={todo.id}
              handleToggle={this.props.handleToggle}
            />
          );
        })}
      </ul>
    );
  }
}
