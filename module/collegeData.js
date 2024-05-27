const fs = require('fs');                     // Importing file system module to read file

class Data {                                  // Inserting class for student and course data
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let datagathering = null;

function initialize() {                                                     // inserting function which read json data 
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {     // It will read the students.json data
            if (err) {
                reject("not able to read students.json");
                return;
            }
            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {     // It will read courses.json data
                if (err) {
                    reject("not able to read courses.json");
                    return;
                }
                datagathering = new Data(JSON.parse(studentData), JSON.parse(courseData));   // It will create new data class which is parsed 
                resolve();
            });
        });
    });
}

function getAllStudents() {                                 // Inserting function to return students
    return new Promise((resolve, reject) => {
        if (datagathering.students.length > 0) {
            resolve(datagathering.students);
        } else {
            reject("no results returned");
        }
    });
}

function getTAs() {                                          // Inserting function to return students which are TAs
    return new Promise((resolve, reject) => {
        const tas = datagathering.students.filter(student => student.TA);
        if (tas.length > 0) {
            resolve(tas);
        } else {
            reject("no results returned");
        }
    });
}

function getCourses() {                                      // Inserting function to return courses
    return new Promise((resolve, reject) => {
        if (datagathering.courses.length > 0) {
            resolve(datagathering.courses);
        } else {
            reject("no results returned");
        }
    });
}

module.exports = {                                          // To make the data available to other files, I am exporting the functions are as follows 
    initialize,
    getAllStudents,
    getTAs,
    getCourses

};
