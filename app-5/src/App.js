import React from 'react';
import './App.css'
import Meme from './Components/Meme.js'


class App extends React.Component {
  constructor (props) {
    super (props)

    this.state = {

    }
  }

  render () {
    return (
      <div className='App'>
        <Meme url="https://media.tenor.com/images/f2ef98e6c4a2ce5acc846bdf0c51901b/tenor.gif" />
      </div>
    )
  }

}

export default App;
