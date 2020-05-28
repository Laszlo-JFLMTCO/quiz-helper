import React from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Participant extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Col md="auto">
          <InputGroup size="sm" className="mb-3">
            <FormControl aria-label="Player Name Label" aria-describedby="inputGroup-sizing-sm" readOnly defaultValue={this.props.name} />
            <InputGroup.Prepend>
              <Button value={this.props.name} onClick={this.props.handleRemoveParticipant} variant="outline-secondary">X</Button>
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
      </React.Fragment>
    )
  }
}

export default Participant;