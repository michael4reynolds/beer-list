import React from 'react';
import { shallow } from 'enzyme';
import App from '../';
import BeerList from '../../BeerList';
import InputArea from '../../../components/InputArea';

describe('App Container', () => {
  it('should render InputArea and BeerList', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <BeerList/>,
    ])).toEqual(true);
  });


  it('should start wirh an empty list', () => {
    const wrapper = shallow(<BeerList/>);
    expect(wrapper.state('beers')).toEqual([]);
  });
});
