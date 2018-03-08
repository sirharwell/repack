import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    fetch('/api/items')
      .then( res => res.json() )
      .then( todos => this.setState({ todos }) )
  }

  addItem = (name) => {
    let item = { name }
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
      .then( todo => {
        const { todos } = this.state;
        this.setState({ todos: [...todos, todo] })
      })
  }

  updateTodo = (id) => {
    fetch(`/api/items/${id}`, { method: 'PUT' })
      .then( res => res.json() )
      .then( item => {
        let todos = this.state.todos.map( t => {
          if (t.id === id)
            return item
          return t
        })

        this.setState({ todos })
      })

  }

  deleteTodo = (id) => {
    fetch(`/api/items/${id}`, { method: 'DELETE' })
      .then( () => {
        const { todos } = this.state
        this.setState({
          todos: todos.filter( t => t.id !== id )
        })
      })
  }


  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
