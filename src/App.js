import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true , isDeleted: true},
         { description: 'Throw the dishes away', isCompleted: false,isDeleted: false },
         { description: 'Buy new dishes', isCompleted: false , isDeleted: false}
       ],
       newTodoDescription: ''
     };
   }

    handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
    }

    handleSubmit(e) {
     e.preventDefault();
     if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
    }

   toggleComplete(index) {
   const todos = this.state.todos.slice();
   const todo = todos[index];
   todo.isCompleted = todo.isCompleted ? false : true;
   this.setState({ todos: todos });
   }

   deleteTodo(index) {
    const newTodos = this.state.todos.filter(index,todo) => (todo[index].isDeleted ===false));
    this.setState({ todos: newTodos });
  }

  render() {
    return (
      <div className="App">
      <ul>
      { this.state.todos.map( (todo, index) =>
        <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } />
        <ToDo key={ index } description={ todo.description } isDeleted={ todo.isDeleted } deleteTodo={ this.deleteTodo } />
      )}
      </ul>
      <form onSubmit={ (e) => this.handleSubmit(e) }>
           <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
      </form>
      </div>
    );
  }
}

export default App;
