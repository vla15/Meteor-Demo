import React from 'react';
import { todoContainer } from '../api/todos';
import Todo from './Todo';

export default class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  componentDidMount() {
    Tracker.autorun(() => {
      const todos = todoContainer.find({}).fetch()
      this.setState({list: todos});
    })
  }
  
  deleteTodo(id) {
    todoContainer.remove({_id: id});
  }

  completeTodo(id, state) {
    todoContainer.update({_id: id}, { $set: {done: !state}})
  }

  render() {
    return (
      <div>
      {this.state.list.map(val => {
        return (
          <Todo key={val._id} {...val} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
        )
      })}
      </div>
    )
  }
}