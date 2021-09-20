import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import closeIcon from '../assets/close-icon.png'
import NotificationItemShape from './NotificationItemShape'

export default class Notifications extends React.Component {
  render () {
    if (this.props.listNotifications.length == 0) {
      this.nots = <NotificationItem value="No new notification for now"/>
    } else {
      this.nots = this.props.listNotifications.map((n) => (
        <NotificationItem key={n.id} type={n.type} value={n.value} html={n.html}/>
      ))
    }
    return (
      <div className='notification-section'>
      <div className='menuItem'>Your notifications</div>
      {
        this.props.displayDrawer === true &&
        <div className='Notifications'>
        <button aria-label="Close" onClick={() => { console.log("Close button has been clicked")}}
        style={{position: "absolute", top: 25, right: 25, height: "20px", width: "20px", backgroundColor: "white", border: "none", outline: "none"}}>
        <img style={{height: "20px", width: "20px", position: "absolute", left: 0, top: 0}} src={closeIcon} alt="close icon"/>
        </button>
        {this.props.listNotifications.length > 0 && <p>Here is the list of notifications</p>}
        <ul>
        {this.nots}
        </ul>
        </div>
      }
      </div>
    );
  }
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}
