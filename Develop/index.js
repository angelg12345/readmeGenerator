// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = ([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'write a short description of your project'
    },
    {
        type: 'input',
        name: 'license',
        message:'which kind of license would you like?',
        choices:['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'provide instructions and examples for use.'
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>{
        writeToFile("README.md", generateMarkdown({...responses}));
    })
}

// Function call to initialize app
init();

