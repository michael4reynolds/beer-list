import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = props => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
      meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
      ]}
    />
    {React.Children.toArray(props.children)}
    <InputArea/>
    <BeerList/>
  </AppWrapper>
  );

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
