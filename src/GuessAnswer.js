import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Title from "./Title"

class GuessAnswer extends React.Component {
  constructor(props){
    super(props);
    this.handleAnswerInput = this.handleAnswerInput.bind(this)
    // this.state = {
    //   inputDisabled: true
    // };
  }

  handleAnswerInput(){
    // this.setState({inputDisabled: false});
    this.props.handleAnswerInputDisabled(false);
    this.props.handleDisableGuessInput();
  }

  render() {
    return(
      <React.Fragment>
        <Container>
          <Title title={'Correct Answer'} />
          <Button as={Col} onClick={this.handleAnswerInput} variant="dark">Freeze</Button>
          <FormControl  id="answerFormControl"
                        placeholder="Enter correct answer..."
                        type="text"
                        aria-label="Correct Answer"
                        aria-describedby="inputGroup-sizing-sm"
                        disabled={this.props.answerInputDisabled}
                        onChange={this.props.handleSetCorrectAnswer}
                        value={this.props.correctAnswer}
          />
        </Container>
      </React.Fragment>
    )
  }
}

export default GuessAnswer;