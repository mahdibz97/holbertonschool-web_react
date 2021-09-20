import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';
import { mount } from 'enzyme';
import 'jsdom-global/register';
import AppContext from '../App/AppContext'

StyleSheetTestUtils.suppressStyleInjection();

describe("Testing the <Footer /> Component", () => {
	
	let wrapper;

	const contextDefault = {
		user: {
			email: '',
			password: '',
			isLoggedIn: false,
		},
		logOut: () => {},
	};

	const context = {
		user: {
			email: 'atef@atef.io',
			password: 'atef',
			isLoggedIn: true,
		},
		logOut: () => {},
	};

	beforeEach(() => {
		wrapper = shallow(<Footer shouldRender />);
	});

	it("<Footer /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
    });
    
    it("<Footer /> renders at least the text: Copyright", () => {
		expect(wrapper.children('p').html()).to.include('Copyright');
	});

	it("verify that the link is not displayed when the user is logged out within the context", () => {
		wrapper = mount(<AppContext.Provider value={contextDefault}><Footer></Footer></AppContext.Provider>)
		expect(wrapper.find("a")).to.have.lengthOf(0);
	});

	it("verify that the link is not displayed when the user is logged out within the context", () => {
		wrapper = mount(<AppContext.Provider value={context}><Footer></Footer></AppContext.Provider>)
		expect(wrapper.find("a")).to.have.lengthOf(1);
	});

});
