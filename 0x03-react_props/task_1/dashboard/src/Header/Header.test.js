import React from 'react';
import { expect } from 'chai';
import Header from './Header.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<Header/>);

describe('my Header component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders an img', () => {
    const img = wrapper.find('img');
    expect(img).to.have.length(1);
  });

  it('renders a h1', () => {
    const h1 = wrapper.find('h1');
    expect(h1).to.have.length(1);
  });
});
