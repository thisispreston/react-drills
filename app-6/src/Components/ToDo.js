import React from 'react';
import '../App.css';

class ToDo extends React.Component {

  render () {
    return (
      <div>{this.props.task}</div>
    )
  }
}

export default ToDo;