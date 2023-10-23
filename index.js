// TODO: Include packages needed for this application
const generateMarkdown = require('./Developer/utils/generateMarkdown');
const fs = require('fs');
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?",
    },
    {
        type: "input",
        name: "installation",
        message: "What is your project installation?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project usage?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What is your project contributing?",
    },
    {
        type: "input",
        name: "tests",
        message: "What is your project tests?",
    },
    {
        type: "input",
        name: "questions",
        message: "What is your project questions?",
    },
    {
        type: "input",
        name: "license",
        message: "What is your project license?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your project github?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your project email?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}


// TODO: Create a function to initialize app
function init() {
    //whe fileName and data is being called initialize app
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    });
}


// Function call to initialize app

init();