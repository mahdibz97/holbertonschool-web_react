import React from 'react';
import { expect } from 'chai';
import App from './App.js';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<App/>);

describe('my app component', () => {
  it('contains the Notifications component', () => {
    const component = wrapper.find('Notifications');
    expect(component).to.have.length(1);
  });

  it('contains the Header component', () => {
    const component = wrapper.find('Header');
    expect(component).to.have.length(1);
  });

  it('contains the Login component', () => {
    const component = wrapper.find('Login');
    expect(component).to.have.length(1);
  });
  it('contains the Footer component', () => {
    const component = wrapper.find('Footer');
    expect(component).to.have.length(1);
  });
});
