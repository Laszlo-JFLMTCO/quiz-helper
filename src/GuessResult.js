import React from 'react'
import Container from 'react-bootstrap/Container'
import Title from './Title'
import OneResult from './OneResult'

class GuessResult extends React.Component {
  render() {
    var outputList = []
    if (this.props.correctAnswer !== "") {
      outputList = Object.keys(this.props.participantGuesses).sort((a,b) => Math.abs(this.props.participantGuesses[a] - this.props.correctAnswer) - Math.abs(this.props.participantGuesses[b] - this.props.correctAnswer)).map((participant) => 
        <OneResult key={participant} participant={participant} result={this.props.participantGuesses[participant] - this.props.correctAnswer} />
      );
    }

    return(
      <React.Fragment>
        <Container>
          <Title title={'Results'}/>
          {outputList}
        </Container>
      </React.Fragment>
    );
  }
}

export default GuessResult;