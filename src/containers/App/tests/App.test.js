import React from 'react';
import { shallow } from 'enzyme';
import App from '../';

describe('App Container', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>,
    ])).toEqual(true);
  });
});

