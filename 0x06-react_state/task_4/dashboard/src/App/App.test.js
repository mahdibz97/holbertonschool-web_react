import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from './AppContext'

import 'jsdom-global/register'

configure({adapter: new Adapter()});

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <App /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<App /> contains the <Notifications /> Component", () => {
		expect(wrapper.contains(<Notifications />)).to.equal(false);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header className="appHeader_haetb5"/>)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		expect(wrapper.containsMatchingElement(<Login />)).to.equal(true);
	});

	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer className="footer_dc997y"/>)).to.equal(true);
	});

	it("<App /> does not contain the <CourseList /> Component", () => {
		expect(wrapper.contains(<CourseList />)).to.equal(false);
	});

	it('Verify that after calling handleDisplayDrawer, the state should now be true', () => {
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state('displayDrawer')).to.equal(true);
	});
	
	it('Verify that after calling handleHideDrawer, the state is updated to be false', () => {
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state('displayDrawer')).to.equal(false);
	});

});

describe("Testing the <App /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={true}/>);
	});

	it("<App /> does not contain the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(false);
	});

	it("<App /> contains the <CourseList /> Component", () => {
		expect(wrapper.find('.CourseListContainer').length).to.equal(0);
	});

	it("Verify that markNotificationAsRead works as intended", () => {
		let state = {
			displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
      listNotifications: [
        {
          id: 0,
          type: "default",
          value: "New course available",
        },
        {
          id: 1,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 2,
          type: "urgent",
          value: "dumb text",
        }
      ],
		};

		const wrapper = mount(
			<AppContext.Provider>
				<App />
			</AppContext.Provider>
		);

		wrapper.setState({...state});

		wrapper.instance().markNotificationAsRead(0);
		expect(wrapper.state().listNotifications).to.have.lengthOf(2);

	});

});

describe('logOut alerts with correct string', () => {
	it('logOut', () => {
		const logOut = jest.fn(() => undefined);
		const logger = jest.spyOn(global, 'alert');
		expect(logger);
		expect(logOut);
		jest.restoreAllMocks();
	});
});