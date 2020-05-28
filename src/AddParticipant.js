import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class AddParticipant extends React.Component {
  render() {
    return(
      <React.Fragment>
        <InputGroup id="nameInputGroup" size="sm" className="mb-3">
          <InputGroup.Prepend>
            <Button type="submit" disabled={this.props.addParticipantButtonDisabled} onClick={this.props.handleAddParticipant} variant="outline-secondary">Add Player</Button>
          </InputGroup.Prepend>
          <InputGroup.Prepend>
            <Button type="button" onClick={this.props.handleClear} variant="outline-secondary">Clear</Button>
          </InputGroup.Prepend>
          <FormControl  id="nameFormControl" placeholder="Enter Name" onChange={this.props.handleUpdateNewParticipant} type="text" aria-label="Add Player" aria-describedby="inputGroup-sizing-sm" value={this.props.initValue} />
        </InputGroup>
      </React.Fragment>
    )
  }
}

export default AddParticipant;