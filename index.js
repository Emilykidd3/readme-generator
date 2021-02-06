// Include packages needed for this application and links to other js files
const inquirer = require('inquirer');
const writePage = require('./develop/utils/page-template.js');
const writeFile = require('./develop/utils/generate-file.js');

// questions to ask in command line
const questions = [
    {
        type:'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: validateAnswers
    },
    {
        type:'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
              return (true)
            }
            console.log("\t Enter a valid email")
            return (false)
        }
    },
    {
        type:'input',
        name: 'projectName',
        message: "What is your project's name?",
        validate: validateAnswers
    },
    {
        type:'input',
        name: 'description',
        message: 'Please write a short description of your project',
        validate: validateAnswers
    },
    {
        type:'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache 2.0', 'GNU', 'MIT', 'BSD', 'Boost 1.0', 'Eclipse', 'None']
    },
    {
        type:'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type:'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type:'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
        validate: validateAnswers
    },
    {
        type:'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?',
        validate: validateAnswers
    }
];

// function to ask questions
const init =  () => {
    return inquirer.prompt(questions)
    .then(questionAnswers => {
        let templateData = writePage(questionAnswers);
        return writeFile(templateData)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
};

// validates answers to question to make sure there is input
var validateAnswers = function(input) {
    if (input) {
        return true;
    } else {
        console.log('Please enter a response');
        return false;
    }
};

// runs function
init();