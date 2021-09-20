import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';
import 'jsdom-global/register';

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <Header /> Component", () => {
	
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<Header shouldRender />,
			{ context: AppContext }
		);
	});

	it("<Header /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("the <Header /> component render img", () => {
		expect(wrapper.find('img')).to.have.lengthOf(1);
    });
    
    it("the <Header /> component render h1", () => {
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	});

	it("Verify that the logoutSection is not created with default context", () => {
		expect(wrapper.find('#logoutSection')).to.have.lengthOf(0);
	});

	it("user defined (isLoggedIn is true and an email is set). Verify that the logoutSection is created", () => {
		const context = {
			user: {
				email: 'atef@atef.io',
				password: 'atef',
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		wrapper = mount(<AppContext.Provider value={context}><Header /></AppContext.Provider>);
		expect(wrapper.find('#logoutSection')).to.have.lengthOf(1);
	});

	it('Check logout() is called', () => {
        
        const context = {
			user: {
				email: 'atef@atef.io',
				password: 'atef',
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const logOutSpy = jest.spyOn(context, 'logOut');
		wrapper = mount(<AppContext.Provider value={context}><Header /></AppContext.Provider>);
		wrapper.find('#logoutSection a').simulate("click");
        expect(logOutSpy.mock.calls.length).to.equal(1);
    });

});
