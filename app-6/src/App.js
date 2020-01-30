import React from 'react';
import ToDo from './Components/ToDo.js'
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userInput: '',
      displayedList: [],
    }
  }

handleChange = (val) => {
  this.setState({userInput: val})
}

handleClick = () => {
    this.setState({
      userInput: '',
      displayedList: [...this.state.displayedList, this.state.userInput],
    });
  }

  render () {
    let list = this.state.displayedList.map((e, i) => {
      return <ToDo key={i} task={e} />;
    })

    return (
      <div className="App">
        <h1 className='header'>My to-do list:</h1>

        <div>
          <input
            onChange={e => this.handleChange(e.target.value)}
            placeholder="To-do Item"  
          />
          <button onClick={this.handleClick}>ADD</button>
        </div>

        {list}
      </div>
    )
  }
}

export default App;
