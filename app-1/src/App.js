import React from 'react';
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userInput: '',
    }
  }

  handleChange = (val) => {
    this.setState({userInput: val})
  }

  render () {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)}/>
        <div>{this.state.userInput}</div>
      </div>
    )
  }
}

export default App;
