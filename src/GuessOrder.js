import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import GuessInput from './GuessInput'
import Title from './Title';

class GuessOrder extends React.Component {
  render() {
    var guessList = Object.keys(this.props.participantGuesses).map((participant) =>
      <GuessInput key={participant}
                  name={participant}
                  value={this.props.participantGuesses[participant]}
                  disabled={this.props.guessInputDisabled}
                  handleAddParticipantGuess={this.props.handleAddParticipantGuess}
      />
    );
    return(
      <React.Fragment>
        <Container>
          <Row>
            <Title title={'Input Order'}/>
          </Row>
          <Row>{guessList}</Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default GuessOrder;