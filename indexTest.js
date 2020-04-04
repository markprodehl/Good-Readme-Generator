// - [ ] Prompt the user
// - [ ] Fetch GitHub Data
// - [ ] Print GitHub Data
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
const writeFile = util.promisify(fs.writeFile);

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
        // {
        //     type: "checkbox",
        //     message: "Check all of items you would like to include in your Table Of Contents",
        //     name: "tableOfContents",
        //     choices: ["Installation", "Usage", "License", "Contributing", "Tests", "Questions", "Contact"]
        // },
        {
            type: "input",
            message: "Provide the installation instructions here",
            name: "installation",
        },
        {
            type: "input",
            message: "What will your application be used for?",
            name: "usage",
        },
        {
            type: "list",
            message: "What kind of license does your project have?",
            name: "license",
            choices: ["MIT", "Apache 2.0", "Mozilla Public License 2.0", "GPL", "BSD", "None"]
        },
        {
            type: "input",
            message: "List the names of the people contributing to the project",
            name: "contributing",
        },
        {
            type: "input",
            message: "What tests have been used to ensure that your application is working as intended?",
            name: "tests",
        },
        {
            type: "input",
            message: "Will your users need to answer any questions?",
            name: "questions",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "contact",
        },



    ])
    .then(answers => {
        console.log(answers)

        //calling on the GitHub API
        console.log(answers.projectTitle)
        const url = `https://api.github.com/users/${answers.username}`;
        // use axios to fetch GitHub user data
        return axios.get(url)
            .then(response => {
                console.log(response)

                const { avatar_url, login } = response.data;
                // lines 68-69 will do the same thing as line 66 above.
                // const avatar = url = response.data.avatar_url;
                // const login = repsonse.data.login;
                // render markdown with an image
                const markdown = [`![${login} avatar](${avatar_url})
            \n # ${answers.projectTitle}                                     
            \n ## Description:
            \n ${answers.description}
            \n ## Table Of Contents
            \n ### 1. Installation
            \n ### 2. Usage
            \n ### 3. License
            \n ### 4. Contributing
            \n ### 5. Tests
            \n ### 6. Questions
            \n ### 7. Contact
            \n ## Installation
            \n ${answers.installation}
            \n ## Usage
            \n ${answers.usage}
            \n ## License
            \n ![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)
            \n ${answers.license}
            \n ## Contributing
            \n ${answers.contributing}
            \n ## Tests
            \n ${answers.tests}
            \n ## Questions
            \n ${answers.questions}
            \n ## Contact
            \n ${answers.contact}           
            \n ### GitHub Username: ${login}

            

                                
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
    })