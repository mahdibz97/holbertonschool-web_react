import React from 'react';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line

describe('my CourseListRow component when isHeader IS true', () => {
  it('a check to test the component renders one cell with colspan = \
  when isHeader is true and textSecondCell does not exist', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'first cell'
    };
    const wrapper = shallow(<CourseListRow {...props}/>);
    expect(wrapper.html()).to.equal("<tr><th id=\"first-th\" colSpan=\"2\">first cell</th></tr>");
  });

  it('a check to test the component renders two cells\
  when textSecondCell is present', () => {
    const props = {
      isHeader: true,
      textFirstCell: 'first cell',
      textSecondCell: 'second cell'
    };
    const wrapper = shallow(<CourseListRow {...props}/>);
    expect(wrapper.find('th')).to.have.length(2);
  });

});

describe('my CourseListRow component when isHeader IS false', () => {
  it('a check to test the component renders correctly\
  two td elements within a tr element', () => {
    const props = {
      isHeader: false,
      textFirstCell: 'first cell',
      textSecondCell: 'second cell'
    };
    const wrapper = shallow(<CourseListRow {...props}/>);
    expect(wrapper.find('td')).to.have.length(2);
  });

});
