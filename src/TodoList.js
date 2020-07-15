import React, {Component} from 'react';
import "./TodoList.css";
import Todo from './Todo';
import NewForm from './NewForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.createTask = this.createTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    createTask(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask]
        })
    }

    removeTask(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        });
    }

    updateTask(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, task: updatedTask}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        });
        this.setState({todos: updatedTodos});
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return(
                <Todo                
                    key={todo.id}
                    id={todo.id} 
                    task={todo.task} 
                    completed={todo.completed}
                    updateTask={this.updateTask}
                    removeTask={this.removeTask} 
                    toggleCompletion={this.toggleCompletion}
                />
            ); 
        })
        return(
            <div className="TodoList">
                <h1>Todo List! 
                    <span> Made in react with <i class="em em-black_heart" ></i></span>
                </h1>
                <ul>{todos}</ul>
                <NewForm createTask={this.createTask} />
            </div>
        );
    }
}

export default TodoList;