import React from 'react';
import ReactDOM from 'react-dom';
import './Notifications.css';

export default class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.html) {
      return (
      <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
    );
  } else {
    return (
    <li data-notification-type={this.props.type}>{this.props.value}</li>
  );
    }
  }
}
