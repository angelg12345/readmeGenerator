
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = ([
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?'
    },
    {
        type: 'list',
        name: 'license',
        message:'which kind of license would you like?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },

]);


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


function init() {
    inquirer.prompt(questions).then((responses) =>{
        writeToFile("README.md", generateMarkdown({...responses}));
    })
}

// Function call to initialize app
init();

