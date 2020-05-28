import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ParticipantList from './ParticipantList'
import AddParticipant from './AddParticipant'
import NewRound from './NewRound'
import SetupBarStatus from './SetupBarStatus'

class SetupBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="align-items-center">
            <SetupBarStatus status={this.props.addParticipantStatus} />
          </Row>
          <Row className="align-items-center">
          <Col>
            <AddParticipant handleAddParticipant={this.props.handleAddParticipant}
                            handleUpdateNewParticipant={this.props.handleUpdateNewParticipant}
                            initValue={this.props.initValue}
                            handleClear={this.props.handleClearNewParticipant}
                            addParticipantButtonDisabled={this.props.addParticipantButtonDisabled}
            />
          </Col>
          <Col>
            <NewRound handleGenerateGuessList={this.props.handleGenerateGuessList} handleEnableGuessInput={this.props.handleEnableGuessInput} />
          </Col>

          </Row >
          <ParticipantList participants={this.props.participants} handleRemoveParticipant={this.props.handleRemoveParticipant} />
        </Container>
      </React.Fragment>
    )
  }
}

export default SetupBar;