import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../';
import BeerList from '../../BeerList';
import InputArea from '../../InputArea';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

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

  it('renders the items', () => {
    const wrapper = mount(<App/>);
    wrapper.instance().addItem('Sam Adams');
    wrapper.instance().addItem('Resin');
    expect(wrapper.find('li').length).toBe(2);
  });
});

describe('InputArea', () => {
  it('should contain an input and a button', () => {
    const wrapper = shallow(<InputArea/>);
    // console.log(wrapper.debug());
    expect(wrapper.containsAllMatchingElements([
      <Input/>,
      <Button>Add</Button>,
    ])).toEqual(true);
  });

  it('should accept input', () => {
    const wrapper = mount(<InputArea/>);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'Resin' } });
    expect(input.prop('value')).toEqual('Resin');
  });

  it('should call onSubmit when Add is clicked', () => {
    const addItem = jest.fn();
    const wrapper = mount(<InputArea onSubmit={addItem}/>);
    wrapper.setState({ text: 'Octoberfest' });
    const addButton = wrapper.find('button');
    addButton.simulate('click');
    expect(addItem).toHaveBeenCalled();
    expect(addItem).toHaveBeenCalledWith('Octoberfest');
  });
});

describe('BeerList', () => {
  it('should render 0 items', () => {
    const wrapper = mount(<BeerList items={[]}/>);
    expect(wrapper.find('li').length).toBe(0);
  });

  it('should render undefined items', () => {
    const wrapper = mount(<BeerList items={undefined}/>);
    expect(wrapper.find('li').length).toBe(0);
  });

  it('should render the items', () => {
    const items = ['Sam Adams', 'Resin', 'Octoberfest'];
    const wrapper = mount(<BeerList items={items}/>);
    expect(wrapper.find('li').length).toBe(3);
  });
});

