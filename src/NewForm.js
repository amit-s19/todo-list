import React, {Component} from 'react';
import './NewForm.css';
import uuid from 'uuid/v4';

class NewForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            task: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createTask({...this.state, id: uuid(), completed: false});
        this.setState({task: ''})
    }

    render() {
        return(
            <form className="NewForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Task</label>
                <input
                    type="text"
                    placeholder="New Task"
                    name="task"
                    id="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default NewForm;