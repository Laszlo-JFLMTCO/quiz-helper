import React from 'react'

class Title extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h2>{this.props.title}</h2>
      </React.Fragment>
    )
  }
}

export default Title;