import React from 'react';
import { expect } from 'chai';
import Notifications from './Notifications';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getLatestNotification } from '../utils/utils'


Enzyme.configure({ adapter: new Adapter() });
// to run all tests, please type "npm run test a" in the command line

const wrapperf = shallow(<Notifications/>);

describe('my Notifications component when displayDrawer is false\
and listNotifications is not passed', () => {
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

const wrappert = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);

describe('my Notifications component when displayDrawer is true\
and listNotifications is empty', () => {
  const NotificationOneItem = wrappert.find('NotificationItem');
  it('renders without crashing', () => {
    expect(wrappert).to.have.length(1);
  });
  it('menu item is being displayed when displayDrawer is true', () => {
    expect(wrappert.find('div.menuItem')).to.have.length(1);
  });
  it('div.Notifications is being displayed when displayDrawer is true', () => {
    expect(wrappert.find('div.Notifications')).to.have.length(1);
  });
  it('renders only one NotificationItem', () => {
    expect(NotificationOneItem).to.have.length(1);
  });

  it('renders (No new notification for now)', () => {
    expect(NotificationOneItem.first().html()).to.equal('<li data-notification-type=\"default\">No new notification for now</li>');
  });

  it('does NOT render the paragraph (Here is the list of notifications)', () => {
    expect(wrappert.find('p')).to.have.length(0);
  });
});

const wrappern = shallow(<Notifications displayDrawer={true} listNotifications={[{id: 1, type: 'default', value: "New course available"}, {id: 2, type: 'urgent', value: "New resume available"}, {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}]}/>);

describe('my Notifications component when displayDrawer is true\
and listNotifications is passed correctly', () => {
  const NotificationItems = wrappern.find('NotificationItem');
  it('renders only one NotificationItem', () => {
    expect(wrappern.find('NotificationItem')).to.have.length(3);
  });

  const p = wrappern.find('p');

  it('renders a paragraph with a certain content', () => {
    expect(p.text()).to.equal('Here is the list of notifications');
  });
});
