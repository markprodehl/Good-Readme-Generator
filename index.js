// - [ ] Prompt the user
// - [ ] Fetch GitHub Data
// - [ ] Print GitHub Data
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const writeFile = util.promisify(fs.writeFile);
const markdown = []
    // ask user for github username
inquirer
    .prompt([{
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        // {
        //     type: "input",
        //     message: "This is the BADGE question that I don't understand",
        //     name: "badge",
        // },
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
        // {
        //     type: "list",
        //     message: "What kind of license will your project have?",
        //     name: "license",
        //     choices: ["MIT", "Apache 2.0", "Mozilla Public License 2.0", "GPL", "BSD", "None"]
        // },
        // {
        //     type: "input",
        //     message: "List the names of the people contributing to the project",
        //     name: "contributors",
        // },
        // {
        //     type: "input",
        //     message: "What tests will you run?",
        //     name: "tests",
        // },
        // {
        //     type: "input",
        //     message: "Will your users need to answer any questions?",
        //     name: "questions",
        // },


    ])
    .then(answers => {
        console.log(answers)
            //create variables from the user

        // const projectTitle = answers.projectTitle


        //calling on the GitHub API
        const url = `https://api.github.com/users/${answers.username}`;
        // use axios to fetch GitHub user data
        return axios.get(url);
    })
    .then(response => {
        console.log(response)

        const { avatar_url, login } = response.data;
        // lines 68-69 will do the same thing as line 66 above.
        // const avatar = url = response.data.avatar_url;
        // const login = repsonse.data.login;
        // render markdown with an image
        const markdown = [`# Readme!
        \n ![${login} avatar](${avatar_url}),
        \n # Username: ${login}
        \n # Email: 
        
         
                
        `]

        // save markdown to file
        return writeFile("output/readme.md", markdown);
    })
    .then(() => {
        console.log("created readme")
    })
    .catch(error => {
        console.log("Could not create file.")
        process.exit(1);
    });