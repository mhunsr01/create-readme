// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateMarkdown = ({yourname, email, projectname, description, usage, license, contribute, repo, tests}) =>
  `
## ${projectname}
   
## Description
    ${description}

## Table of Contents

    Installation: (#installation)

    Usage: (#usage)

    License: (#license)

    Contribute:(#contribute)

    Test: (#test)

    Questions: (#questions)


    Installation: 
    
    To install the necessary dependencies, run the following commands

    ...
    npm i
    ...

    ## Usage: 
    
    ${usage}

    ## License: 
    
    ${license}

    ## Contribute: 
    
    ${contribute}

    ##  Test: 
    To run tests, use the following command:

    ${tests}

    ## Questions: 
    
    If you have any questions about the repo, open an issue or contact me directly at ${email}.
    You can find more of my work, ${yourname}, at github.com/${repo}.`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'yourname',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'What is your projects title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the install dependencies?',
    },
    {
      type: 'list',
      name: 'license',
     message: 'What kind of license should your project have?',
     choices: ['MIT', 'ISC', 'GNU', 'Boost', 'MPL'], 
     
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repository?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'how can a user contribute to the repo?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What are the commands to run a test?',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'What is your Github?',
    },
  ])
  .then((answers) => {
    const readMeContent = generateMarkdown(answers);
    writeToFile("readme.md", readMeContent)
  }
 );



 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created ' + fileName + '!')
  )};
 
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
