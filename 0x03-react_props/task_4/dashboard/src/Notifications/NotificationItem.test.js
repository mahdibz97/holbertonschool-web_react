import React from 'react';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const props1 = {
  type: "default",
  value: "test",
};

const wrapper = mount(<NotificationItem {...props1}/>);

describe('my NotificationItem component', () => {
  it('renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('has type=default', () => {
    expect(wrapper.prop('type')).to.equal('default');
  });

  it('has value=test', () => {
    expect(wrapper.prop('value')).to.equal('test');
  });

});


const props2 = {
  type: "urgent",
  html: {__html: '<u>test</u>' }
};
const wrapper2 = mount(<NotificationItem {...props2}/>);

describe('my NotificationItem component', () => {

  it('has type=default', () => {
    expect(wrapper2.prop('type')).to.equal('urgent');
  });

  it('has html: {__html: \'<u>test</u>\' }', () => {
    expect(JSON.stringify(wrapper2.prop('html'))).to.equal(JSON.stringify({__html: '<u>test</u>' }));
  });

});
