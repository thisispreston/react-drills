import React from 'react'


class Meme extends React.Component {
  
  render () {
    return (
      <div>
        <img src={this.props.url}/>
        <div className='caption'>One COMPONENT to rule them all</div>
      </div>
    )
  }
}

export default Meme;