import React, { Component } from 'react';

class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: 0,
      input: "",
      task: ""
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleOnChange() {
    this.setState({
      // input: e.target.value
    })
  }

  handleAdd() {
    this.setState({
      task: this.state.input,
      id: this.state.id++
    })
  }


  render() {
    return (
      <div>
        <h1>My To Do List:</h1>
        <input onChange></input>
        <button onClick>Add Task</button>
      </div>
    )
  }
}

export default ToDoList;