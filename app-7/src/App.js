import React from 'react'
import './App.css'
import List1 from './Components/List1.js'
import List2 from './Components/List2.js'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      displayedList: [],
    }
  }

  handleClick = (val) => {
    this.setState({displayedList: [...this.state.displayedList, val]})
  }

  render () {
    return (
      <div className="App">
        <h1>My To-do list:</h1>
        <List1 add={this.handleClick}/>
        <List2 tasks={this.state.displayedList}/>
      </div>
    )
  }
}

export default App;
