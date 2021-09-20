import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './CourseList.css'

const CourseShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});

export default CourseShape;
