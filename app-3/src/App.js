import React from 'react';
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      userInput: '',
      masterList: ['Zeus', 'Hera', 'Ares', 'Poseidon', 'Hermes', 'Hades'],
      displayedList: [],
    }
  }

  updateList = (val) => {
    this.setState({userInput: val})
  }

  render () {
    let arr = this.state.masterList.filter(e => e.includes(this.state.userInput)).map(e => <h2>{e}</h2>)
    
    return (
      <div className='App'>
        <input onChange={e => this.updateList(e.target.value)}/>
        <div>{arr}</div>
      </div>
    )
  }
}

export default App;
