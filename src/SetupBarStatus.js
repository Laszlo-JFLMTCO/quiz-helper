import React from 'react'

class SetupBarStatus extends React.Component {
  render() {
    return(
      <React.Fragment>
        <p>{this.props.status}</p>
      </React.Fragment>
    )
  }
}

export default SetupBarStatus;