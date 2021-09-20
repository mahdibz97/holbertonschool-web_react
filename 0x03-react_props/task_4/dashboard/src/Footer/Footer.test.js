import React from 'react';
import { expect } from 'chai';
import Footer from './Footer.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<Footer/>);

describe('my Footer component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('renders the text Copyright', () => {
    expect(wrapper.text()).include('Copyright');
  });
});
