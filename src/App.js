import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SetupBar from './SetupBar'
import Title from './Title';
import GuessManager from './GuessManager';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddParticipant = this.handleAddParticipant.bind(this);
    this.handleUpdateNewParticipant = this.handleUpdateNewParticipant.bind(this);
    this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this);
    this.handleClearNewParticipant = this.handleClearNewParticipant.bind(this);
    this.handleGenerateGuessList = this.handleGenerateGuessList.bind(this);
    this.handleDisableGuessInput = this.handleDisableGuessInput.bind(this);
    this.handleEnableGuessInput = this.handleEnableGuessInput.bind(this);
    this.handleDisableAddingParticipant = this.handleDisableAddingParticipant.bind(this);
    this.handleAddParticipantGuess = this.handleAddParticipantGuess.bind(this);
    this.handleSetCorrectAnswer = this.handleSetCorrectAnswer.bind(this);
    this.handleAnswerInputDisabled = this.handleAnswerInputDisabled.bind(this);
    this.state = {
      participants: [], // List of participant names
      newParticipant: "", // Participant name currently being entered
      addParticipantStatus: "", // Result of participant name evaluation => matching already added name, might add more later...
      guessList: [], // The order in which Participant will provide their guess
      guessInputDisabled: false, // Cannot enter more guesses
      addParticipantButtonDisabled: false, // Cannot add new participant when newParticipant name is matching an existing one
      participantGuesses: {}, // Holds each Participants' guess along with the order in which Participant will provide their guess
      correctAnswer: "", // The expected answer to which all guesses will be compared to
      guessResults: {}, // Result sorted in ascending order the delta between the correct answer and a participant's guess
      answerInputDisabled: true // State whether correct answer input box should be disabled
    };
  }

  handleSetCorrectAnswer(e) {
    this.setState({correctAnswer: e.target.value}, this.evaluateGuesses);
  }

  handleAddParticipantGuess(key, value) {
    var newParticipantGuesses = this.state.participantGuesses;
    newParticipantGuesses[key] = value;
    this.setState((state) => ({
      participantGuesses: newParticipantGuesses
    }))
  }

  handleDisableGuessInput() {
    this.setState({guessInputDisabled: true});
  }

  handleEnableGuessInput() {
    this.setState({guessInputDisabled: false});
  }

  handleAnswerInputDisabled(disabled) {
    var newState = disabled;
    this.setState((state) => ({
      answerInputDisabled: newState
    }));
  }

  handleUpdateNewParticipant(e) {
    var newName = e.target.value;
    this.setState({newParticipant: newName});
    this.updateAddParticipantStatus(newName);
  }

  updateAddParticipantStatus(name) {
    if (this.nameExists(name)) {
      this.handleDisableAddingParticipant();
    } else {
      this.handleEnableAddingParticipant();
    }
  }

  handleDisableAddingParticipant() {
    this.setState({
      addParticipantStatus: "This Name Already Exists",
      addParticipantButtonDisabled: true
    });
  }

  handleEnableAddingParticipant() {
    this.setState({
      addParticipantStatus: "",
      addParticipantButtonDisabled: false
    });
  }

  nameExists(name) {
    return this.state.participants.indexOf(name) !== -1
  }

  handleClearNewParticipant() {
    this.setState({newParticipant: ""})
  }

  handleAddParticipant(e) {
    if (this.state.newParticipant !== "") {
      this.setState((state) => ({
        participants: [...state.participants, state.newParticipant],
        newParticipant: "",
        addParticipantStatus: "",
      }))
    }
  }

  removeParticipant(name) {
    var oldParticipants = Array.from(this.state.participants);
    var index = oldParticipants.indexOf(name);
    if (index !== -1) {
      oldParticipants.splice(index, 1);
      this.setState({participants: oldParticipants});
    }
  }

  handleRemoveParticipant(e) {
    var name = e.target.value;
    this.removeParticipant(name);
    this.updateAddParticipantStatus(this.state.newParticipant);
  }

  handleGenerateGuessList() {
    this.initializeGuessManager();
  }

  initializeGuessManager() {
    this.initializeGuessOrder();
    this.initializeGuessAnswer();
  }

  initializeGuessOrder() {
    var newParticipantGuesses = {};
    var newGuessList = Array.from(this.state.participants);
    this.shuffleArray(newGuessList).forEach((participant) => {
      newParticipantGuesses[participant] = ""
    });
    this.setState((state) => ({
      participantGuesses: newParticipantGuesses,
      guessInputDisabled: false
    }));
  }

  initializeGuessAnswer() {
    this.setState({
      correctAnswer: "",
      answerInputDisabled: true
    });
  }

  shuffleArray(input) {
    // Borrowed from here: https://gist.github.com/guilhermepontes/17ae0cc71fa2b13ea8c20c94c5c35dc4
    return input.map(a => [Math.random(), a])
                .sort((a, b) => a[0] - b[0])
                .map(a => a[1]);
  }

  evaluateGuesses() {
    if (this.props.correctAnswer !== "") {
      var newResults = this.state.guessResults;
      Object.keys(this.state.participantGuesses).forEach((participant) => {
        newResults[participant] = this.state.correctAnswer - this.state.participantGuesses[participant];
      });
      this.setState((state) => ({
        guessResults: newResults
      }));
    }
  }

  render() {
    return(
      <Container>
        <Row><h1>Quiz Helper</h1></Row>
        <Row><Title title={'Setup'} /></Row>
        <Row>
          <SetupBar participants={this.state.participants}
                    handleAddParticipant={this.handleAddParticipant}
                    handleUpdateNewParticipant={this.handleUpdateNewParticipant}
                    initValue={this.state.newParticipant}
                    handleRemoveParticipant={this.handleRemoveParticipant}
                    handleClearNewParticipant={this.handleClearNewParticipant}
                    addParticipantStatus={this.state.addParticipantStatus}
                    handleGenerateGuessList={this.handleGenerateGuessList}
                    handleEnableGuessInput={this.handleEnableGuessInput}
                    addParticipantButtonDisabled={this.state.addParticipantButtonDisabled}
          />
        </Row>
        <hr />
        <Row><Title title={'Guess Manager'} /></Row>
        <Row>
          <GuessManager guessInputDisabled={this.state.guessInputDisabled}
                        handleDisableGuessInput={this.handleDisableGuessInput}
                        handleAnswerInputDisabled={this.handleAnswerInputDisabled}
                        handleAddParticipantGuess={this.handleAddParticipantGuess}
                        participantGuesses={this.state.participantGuesses}
                        handleSetCorrectAnswer={this.handleSetCorrectAnswer}
                        guessResults={this.state.guessResults}
                        correctAnswer={this.state.correctAnswer}
                        answerInputDisabled={this.state.answerInputDisabled}
          />
        </Row>
      </Container>
    )
  }
}

export default App;