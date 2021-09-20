import React from 'react';
import { expect } from 'chai';
import CourseList from './CourseList';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<CourseList/>);
describe('my CourseList component', () => {
  it('CourseList renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('CourseList renders the 5 different rows', () => {

    expect(wrapper.find('CourseListRow')).to.have.length(5);
  });

});
