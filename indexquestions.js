// TODO: import fs, path and inquirer modules
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")

//this is a test line


// TODO: import api and generateMarkdown modules from ./utils/

// TODO: Add inquirer question objects to questions array. This should
// include all the necessary questions for the user.
inquirer.prompt([{
        type: "input",
        message: "what is your GitHub username?",
        name: "userName",
    },
    {
        type: "input",
        message: "This is the BADGE question that I don't know how to do yet",
        name: "badge",
    },
    {
        type: "input",
        message: "Can you tell me what your project title is?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Please, provide a detailed description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "List the items you would like to include in your Table Of Contents",
        name: "tableOfContents",
    },
    {
        type: "list",
        message: "What kind of license will your project have?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "Mozilla Public License 2.0", "GPL", "BSD", "None"]
    },
    {
        type: "input",
        message: "List the names of the people contributing to the project",
        name: "contributors",
    },
    {
        type: "input",
        message: "What tests will you run?",
        name: "tests",
    },
    {
        type: "input",
        message: "Would you user need to answer any questions?",
        name: "questions",
    },



])


// Example question:
// {
//   type: "input",
//   name: "github",
//   message: "What is your GitHub username?"
// }
const questions = [];

// TODO: Write function to synchronously write data in the
// current working directory to file named for the fileName parameter.
// The data parameter is the text to write to the file.
function writeToFile(fileName, data) {}

// TODO: Use inquirer to prompt the user for each question in the
// questions array. Then call api.getUser to fetch the user profile
// data from GitHub. Finally generate the markdown and use writeToFile
// to create the README.md file.
function init() {

}

init();