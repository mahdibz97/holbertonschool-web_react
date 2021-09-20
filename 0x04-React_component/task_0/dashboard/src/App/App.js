import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils'



export default class App extends React.Component {
render () {
  this.listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]
  this.listNotifications = [
    {id: 1, type: 'default', value: "New course available"},
    {id: 2, type: 'urgent', value: "New resume available"},
    {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
  ]
  return (
    <React.Fragment>
      <Notifications listNotifications={this.listNotifications}/>
      <div className="App">
        <Header />
        <div className="App-body">
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login/>}
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
