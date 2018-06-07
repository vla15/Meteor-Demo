import React from 'react';
import {todoContainer} from '../api/todos';
import TodoListComponent from './TodoList';


export default class HelloMeteor extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
  }

  handleChange(e) {
    const todo = this.refs.input.value
    this.setState({ todo: todo })
  }

  handleClick() {
    const todo = this.state.todo;
    const done = false;
    todoContainer.insert({todo, done}, (err, done) => {
    })
    this.setState({todo: ''})
    this.refs.input.value = '';
  }


  render() {
    return (
      <div> 
        <button onClick={this.handleClick.bind(this)}>Add</button>
        <input onChange={this.handleChange.bind(this)} ref='input'/>
        <h1>{this.state.todo}</h1>
        <TodoListComponent />
      </div>
    )
  }
}