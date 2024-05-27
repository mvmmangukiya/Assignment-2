/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Meet Mangukiya Student ID: 147162234 Date: 26/05/2024
*
********************************************************************************/ 


const collegeData = require('./modules/collegeData');   // Importing module collegeData


collegeData.initialize()                                // Reading jSON files 
    .then(() => {
        console.log("Initialization successful");
        return collegeData.getAllStudents();
    })

    .then(function(students) {
        console.log("Successfully retrieved " + students.length + " students");
        return collegeData.getCourses();
    })

    .then(function(courses) {
        console.log("Successfully retrieved " + courses.length + " courses");
        return collegeData.getTAs();
    })

    .then(function(tas) {
        console.log("Successfully retrieved " + tas.length + " TAs");
    })

    .catch(function(err) {                              // printing error during the process 
        console.log(err);
    });
