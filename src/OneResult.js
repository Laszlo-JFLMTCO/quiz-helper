import React from 'react'

class OneResult extends React.Component{
  render() {
    return(
      <React.Fragment>
        <p>{this.props.participant}: with delta of {this.props.result}</p>
      </React.Fragment>
    );
  }
}

export default OneResult;