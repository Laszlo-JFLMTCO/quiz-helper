import React from 'react'
import Button from 'react-bootstrap/Button'

class NewRound extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  };

  handleButtonClick() {
    this.props.handleGenerateGuessList();
    this.props.handleEnableGuessInput();
  }

  render() {
    return(
      <React.Fragment>
        <Button onClick={this.handleButtonClick} variant="dark">Start New Round</Button>
      </React.Fragment>
    )
  }
}

export default NewRound;