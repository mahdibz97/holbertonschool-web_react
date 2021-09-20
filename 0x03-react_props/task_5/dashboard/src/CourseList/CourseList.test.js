import React from 'react';
import { expect } from 'chai';
import CourseList from './CourseList';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line
const wrapper = shallow(<CourseList/>);
describe('my CourseList component when listCourses is not passed', () => {
  it('CourseList renders without crashing', () => {
    expect(wrapper).to.have.length(1);
  });

  it('CourseList renders 3 different rows', () => {

    expect(wrapper.find('CourseListRow')).to.have.length(3);
  });

});

const wrapper_emp = shallow(<CourseList listCourses={[]}/>);
describe('my CourseList component when listCourses is empty', () => {
  it('CourseList renders without crashing', () => {
    expect(wrapper_emp).to.have.length(1);
  });

  it('CourseList renders 3 different rows', () => {

    expect(wrapper_emp.find('CourseListRow')).to.have.length(3);
  });
});

const wrapper_full = shallow(<CourseList listCourses={[{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}]}/>);
describe('my CourseList component when listCourses is passed corretly', () => {
  it('CourseList renders without crashing', () => {
    expect(wrapper_full).to.have.length(1);
  });

  it('CourseList renders 5 different rows', () => {

    expect(wrapper_full.find('CourseListRow')).to.have.length(5);
  });
});
