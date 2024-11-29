import colors from 'colors';
export const questions = [
    {
        type: 'input',
        name: 'project-name',
        message: colors.underline('What is your project called?')
    },{
        type: 'input',
        name: 'summary',
        message: colors.underline('Describe your project in a few sentences. Why does it need to be built? What problems does it solve? What does it help you learn?')
    },{
        type: 'input',
        name: '',
        message: ''
    },{// #LICENSE
        type: 'list',
        name: 'license',
        message: colors.underline('What is the license you want to have, or already have for this project?'),
        choices: [
            'None',
            'Apache 2.0',
            'GNU General Public License v3.0',
            'Creative Commons 0 v1.0',
            'MIT',
            'Other'
        ],
        default: 'None'
    },{// #TABLE OF CONTENTS
        type: 'checkbox',
        name: 'table-of-contents',
        message: colors.underline('What Sections do you want in your Table of Contents?'),
        choices: [
            'None',
            'Apache 2.0',
            'GNU General Public License v3.0',
            'Creative Commons 0 v1.0',
            'MIT',
            'Other'
        ],
        default: 'None'
    }
];

export default questions;

// #INSTALLATION
// Does your code require installation? y/n
// if Y: How do you install your code?

// #CONTRIBUTION
// Are there ways to contribute to your codebase? y/n
// if Y: 

// #USAGE
// How do you use your code? Walk through instructions and samples are advised. (Further editing will likely be necessary)

// #COLLABORATORS
// List any collaborators


// 

// #ToC
// Would you like to include a table of contents? y/n
// if Y: --include the code to populate the table!

