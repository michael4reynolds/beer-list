import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import BeerList from '../BeerList';
import InputArea from '../InputArea';

const AppWrapper = styled.div`
  max-width: calc(380px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  margin-top: 15px;
`;

class App extends Component {
  state = {
    beers: [],
  }

  addItem = (name) => {
    this.setState({ beers: [...this.state.beers, name] });
  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />
        {React.Children.toArray(this.props.children)}
        <InputArea onSubmit={this.addItem}/>
        <BeerList items={this.state.beers}/>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
