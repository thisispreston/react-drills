import React, { Component } from "react"

class List1 extends React.Component {
  constructor() {
    super();

    this.state = {
      input: "",
    }
  }

  handleInputChange = (val) => {
    this.setState({input: val})
  }

  handleAdd = () => {
    this.props.add(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new item"
          onChange={e => this.handleInputChange(e.target.value)}
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    )
  }
}

export default List1