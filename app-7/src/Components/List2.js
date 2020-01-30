import React from 'react'
import List3 from "./List3.js"

class List2 extends React.Component {

  render() {
    let list = this.props.tasks.map((e, i) => {
      return <List3 key={i} task={e} />
    })
    
    return <div>{list}</div>
  }
}

export default List2