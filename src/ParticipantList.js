import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Participant from './Participant'
import ParticipantListTitle from './ParticipantListTitle'

class ParticipantList extends React.Component {
  render() {
    var participants = this.props.participants
    var listItems = participants.map((name) =>
      <Participant key={name} name={name} handleRemoveParticipant={this.props.handleRemoveParticipant} />
    );
    
    return(
      <React.Fragment>
        <Container>
          <Row>
            <ParticipantListTitle count={this.props.participants.length}/>
          </Row>
          <Row>{listItems}</Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default ParticipantList;