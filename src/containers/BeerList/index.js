import React, { Component } from 'react';

class BeerList extends Component {
  state = {
    beers: [],
  }

  addItem(name) {
    this.setState({ beers: [...this.state.beers, name] });
  }

  render() {
    return (
      <ul/>
    );
  }
}

export default BeerList;
