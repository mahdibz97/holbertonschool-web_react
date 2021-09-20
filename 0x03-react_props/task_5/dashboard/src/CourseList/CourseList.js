import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import './CourseList.css'

export default class CourseList extends React.Component {
  render() {
    if (this.props.listCourses.length == 0) {
      this.Courses = <CourseListRow textFirstCell="No course available yet"/>
    } else {
      this.Courses = this.props.listCourses.map((c, index) => (
          <CourseListRow key={c.id} textFirstCell={c.name} textSecondCell={c.credit}/>
        ))
  }

    return (
      <table id="CourseList">
      <thead>
      <CourseListRow textFirstCell="Available courses" isHeader={true}/>
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true}/>
      </thead>
      <tbody>
      {this.Courses}
      </tbody>
      </table>
    );
  }
}
CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}
CourseList.defaultProps = {
  listCourses: []
}
