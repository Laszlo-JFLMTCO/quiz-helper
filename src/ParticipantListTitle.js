import React from 'react'
import Badge from 'react-bootstrap/Badge'

class ParticipantListTitle extends React.Component {
  render() {
    return(
      <React.Fragment>
        <h3>
          Participants{' '}<Badge variant="secondary">{this.props.count}</Badge>
        </h3>
      </React.Fragment>
    )
  }
}

export default ParticipantListTitle;