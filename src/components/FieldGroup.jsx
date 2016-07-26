import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

class FieldGroup extends Component {
  render() {
    return (
    <FormGroup controlId={this.props.id}>
      <ControlLabel>{this.props.label}</ControlLabel>
      <FormControl 
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
       />
      {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
    </FormGroup>
  );
  }
}

export default FieldGroup;