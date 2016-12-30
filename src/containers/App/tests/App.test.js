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
    const wrapper = shallow(<App/>);
    expect(wrapper.state('beers')).toEqual([]);
  });

  it('adds items to the list', () => {
    const wrapper = shallow(<App/>);
    wrapper.instance().addItem('Sam Adams');
    expect(wrapper.state('beers')).toEqual(['Sam Adams']);
  });


  it('passes addItem to InputArea', () => {
    const wrapper = shallow(<App/>);
    const inputArea = wrapper.find('InputArea');
    const addItem = wrapper.instance().addItem;
    expect(addItem).toBeDefined();
    expect(inputArea.prop('onSubmit')).toEqual(addItem);
  });


  it('binds addItem function to InputArea', () => {
    const wrapper = shallow(<App/>);
    const inputArea = wrapper.find('InputArea');
    inputArea.prop('onSubmit')('Sam Adams');
    expect(wrapper.state('beers')).toEqual(['Sam Adams']);
  });
});
