import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <CourseList /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<CourseList />);
	});

	it("<CourseList /> renders three NotificationItem", () => {
		const listCourses = [
			{id: 1, name: "ES6", credit: 60},
			{id: 2, name: "Webpack", credit: 20},
			{id: 3, name: "React", credit: 40}
		]
		wrapper = shallow(<CourseList listCourses={listCourses}/>);
		expect(wrapper.find('CourseListRow')).to.have.lengthOf(5);
	});

	it("<CourseList /> is rendered without crashing", () => {
		const listCourses = [
			{id: 1, name: "ES6", credit: 60},
			{id: 2, name: "Webpack", credit: 20},
			{id: 3, name: "React", credit: 40}
		  ]
		wrapper = shallow(<CourseList listCourses={listCourses}/>);
		expect(wrapper).to.not.be.an('undefined');
	});
});
