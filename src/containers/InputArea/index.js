import React, { Component, PropTypes } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

class InputArea extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  setText = (e) => {
    this.setState({ text: e.target.value });
  }

  handleClick = () => {
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <Input value={this.state.text} onChange={this.setText}/>
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    );
  }
}

export default InputArea;
