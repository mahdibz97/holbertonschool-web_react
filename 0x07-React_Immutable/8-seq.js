import { Seq } from 'immutable';

const printBestStudents = (obj) => {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  let students = Seq(obj)
    .filter((subject) => subject.score > 70)
    .map((student) => {
      const newStudent = student;
      newStudent.firstName = capitalize(student.firstName);
      newStudent.lastName = capitalize(student.lastName);
      return newStudent;
    });
  students = students.toJS();
  console.log(students);
};

export default printBestStudents;
