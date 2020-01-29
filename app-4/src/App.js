import React from 'react';
import './App.css'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange1 = (val) => {
    this.setState({username: val})
  }

  handleChange2 = (val) => {
    this.setState({password: val})
  }

  alertUser = () => {
    alert(`Username: ${this.state.username}  Password: ${this.state.password}`)
  }

  render () {
    return (
      <div className='App'>
        <input onChange={e => this.handleChange1(e.target.value)}/>
        <input onChange={e => this.handleChange2(e.target.value)}/>
        <button onClick={this.alertUser}>Login</button>
      </div>
    )
  }

}

export default App;
