import React, { Component } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

class InputArea extends Component {
  state = {
    text: '',
  }

  setText = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <Input value={this.state.text} onChange={this.setText}/>
        <Button>Add</Button>
      </div>
    );
  }
}

export default InputArea;
