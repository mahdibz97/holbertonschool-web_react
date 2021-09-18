"use strict";
exports.__esModule = true;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
exports.createEmployee = function (salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
};
function isDirector(employee) {
    return (employee instanceof Director);
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (employee instanceof Director) {
        return (employee.workDirectorTasks());
    }
    else if (employee instanceof Teacher) {
        return (employee.workTeacherTasks());
    }
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return "Teaching Math";
    }
    else if (todayClass === 'History') {
        return "Teaching History";
    }
}
exports.teachClass = teachClass;
