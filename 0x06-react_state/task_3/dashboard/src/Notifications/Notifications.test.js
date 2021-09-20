import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <Notifications /> Component", () => {
	
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(<Notifications />);
	});
	
	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});
	
	it("<Notifications /> renders three NotificationItem", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('NotificationItem')).to.have.lengthOf(0);
	});
	
	it("<Notifications /> render the text 'Here is the list of notifications'", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
	});
	
	it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('ul').childAt(0).html()).to.equal('<li data-priority="default" class="list_1r1eah5-o_O-liDefault_1tsdo2i">New course available</li>');
	});
	
	it("<Notifications /> the menu item is being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div')).to.have.length(2);
	});
	
	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		expect(wrapper.find('div')).to.have.length(2);
	});
	
	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div')).to.have.length(3);
	});
	
	it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div')).to.have.length(3);
	});
	
	it("Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
		wrapper = shallow(<Notifications/>);
		expect(wrapper).to.not.be.an('undefined');
	});
	
	it("the component renders it correctly and with the right number of NotificationItem", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('NotificationItem')).to.have.length(3);
	});
	
	it("listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.contains(<p>No new notification for now</p>)).to.equal(true);
	});

	it("Verify that clicking on the menu item calls handleDisplayDrawer", () => {
		const mockDisplay = jest.fn(() => {});
		const mockHide = jest.fn(() => {});
		
		const props = {
			displayDrawer: false,
			handleDisplayDrawer: mockDisplay,
			handleHideDrawer: mockHide,
		};

		wrapper = shallow(<Notifications {...props} />);

		wrapper.find('.menuItem_1nwbcum p').at(0).simulate('click');

		expect(mockDisplay.mock.calls.length).to.equal(1);
	});

	it("Verify that clicking on the button calls handleHideDrawer", () => {
		const mockDisplay = jest.fn(() => {});
		const mockHide = jest.fn(() => {});

		const listNotifications = [
			{ id: 1, type: 'default', value: 'New course available' },
			{ id: 2, type: 'urgent', value: 'New resume available' },
		];
		const props = {
			listNotifications: listNotifications,
			displayDrawer: true,
			handleDisplayDrawer: mockDisplay,
			handleHideDrawer: mockHide,
		};

		wrapper = shallow(<Notifications {...props} />);

		wrapper.find('button').at(0).simulate('click');

		expect(mockHide.mock.calls.length).to.equal(1);
	});
	
});
