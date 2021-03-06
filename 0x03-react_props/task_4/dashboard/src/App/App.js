import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
render () {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
        {this.props.isLoggedIn ? <CourseList/> : <Login/>}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
 }
}


App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn: false
}
