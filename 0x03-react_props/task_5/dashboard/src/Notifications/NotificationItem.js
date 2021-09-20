import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Notifications.css';

export default class NotificationItem extends React.Component {
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

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string,
  value: PropTypes.string
}
NotificationItem.defaultProps = {
  type: 'default'
}
