import React from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class GuessInput extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Col md="auto">
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Prepend>
              <Button disabled={true} variant="outline-secondary">{this.props.name}</Button>
            </InputGroup.Prepend>
            <FormControl  disabled={this.props.disabled}
                          aria-label="Player Name Label"
                          aria-describedby="inputGroup-sizing-sm"
                          // defaultValue=""
                          placeholder="Enter guess here..."
                          onChange={e => this.props.handleAddParticipantGuess(this.props.name, e.target.value)}
                          value={this.props.value}
            />
          </InputGroup>
        </Col>
      </React.Fragment>
    )
  }
}

export default GuessInput;