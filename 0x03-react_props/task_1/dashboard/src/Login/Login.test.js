import React from 'react';
import { expect } from 'chai';
import Login from './Login.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<Login/>);

describe('my Login component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders 2 inputs', () => {
    const input = wrapper.find('input');
    expect(input).to.have.length(2);
  });

  it('renders 2 labels', () => {
    const label = wrapper.find('label');
    expect(label).to.have.length(2);
  });
});
