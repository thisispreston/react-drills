import React from 'react';
import './App.css'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      list: ['Zeus', 'Athena', 'Ares', 'Apollo', 'Artemis']
    }
  }

  render () {
    return (
      <div className='App'>
        {this.state.list.map((e, i) => <h2 key={i}>{e}</h2>)}
      </div>
    )
  }
}

export default App;
