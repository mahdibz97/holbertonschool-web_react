import React from 'react';
import { expect } from 'chai';
import Notifications from './Notifications';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line

const wrapperf = shallow(<Notifications/>);
const wrappert = shallow(<Notifications displayDrawer={true}/>);

describe('my Notifications component when displayDrawer is false', () => {
  it('renders without crashing', () => {
    expect(wrapperf).to.have.length(1);
  });
  it('menu item is being displayed when displayDrawer is false', () => {
    expect(wrapperf.find('div.menuItem')).to.have.length(1);
  });
  it('div.Notifications is not being displayed \
  when displayDrawer is false', () => {
    expect(wrapperf.find('div.Notifications')).to.have.length(0);
  });
});

describe('my Notifications component when displayDrawer is true', () => {
  const NotificationItems = wrappert.find('NotificationItem');
  it('menu item is being displayed when displayDrawer is true', () => {
    expect(wrappert.find('div.menuItem')).to.have.length(1);
  });
  it('div.Notifications is being displayed when displayDrawer is true', () => {
    expect(wrappert.find('div.Notifications')).to.have.length(1);
  });
  it('renders NotificationItem', () => {
    expect(NotificationItems).to.have.length(3);
  });

  it('renders NotificationItem', () => {
    expect(NotificationItems.first().html()).to.equal('<li data-notification-type=\"default\">New course available</li>');
  });

  const p = wrappert.find('p');

  it('renders a paragraph with a certain content', () => {
    expect(p.text()).to.equal('Here is the list of notifications');
  });

});
