import React from 'react'
import Col from 'react-bootstrap/Col'
import GuessOrder from './GuessOrder'
import GuessAnswer from './GuessAnswer'
import GuessResult from './GuessResult'

class GuessManager extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Col>
          <GuessOrder guessInputDisabled={this.props.guessInputDisabled}
                      handleAddParticipantGuess={this.props.handleAddParticipantGuess}
                      participantGuesses={this.props.participantGuesses}
          />
        </Col>
        <Col>
          <GuessAnswer  handleDisableGuessInput={this.props.handleDisableGuessInput}
                        handleAnswerInputDisabled={this.props.handleAnswerInputDisabled}
                        handleSetCorrectAnswer={this.props.handleSetCorrectAnswer}
                        correctAnswer={this.props.correctAnswer}
                        answerInputDisabled={this.props.answerInputDisabled}
          />
        </Col>
        <Col>
          <GuessResult participantGuesses={this.props.participantGuesses}
                       correctAnswer={this.props.correctAnswer}
          />
        </Col>
      </React.Fragment>
    )
  }
}

export default GuessManager;