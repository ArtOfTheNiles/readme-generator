import colors from 'colors';

export const questions = [
    {// #NAME
        type: 'input',
        name: 'project-name',
        message: colors.underline('What is your project called?')
    },{// #REPOSITORY
        type: 'input',
        name: 'repository',
        message: colors.underline('Provide a link to your project repository:'),
        default: 'https://github.com/ArtOfTheNiles/readme-generator'
    },{// #SUMMARY
        type: 'input',
        name: 'summary',
        message: colors.underline('Describe your project in a few sentences. Why does it need to be built? What problems does it solve? What does it help you learn?')
    },{// #INSTALLATION
        type: 'input',
        name: 'installation',
        message: colors.underline('Does your project require installation? If so, how?'),
        default: 'No installation required'
    },{// #USAGE
        type: 'input',
        name: 'usage',
        message: colors.underline('Describe the steps to using your project, how does a user get from A to B?'),
        default: 'It is the peak of hubris to think people will understand your program with no directions.'
    },{// #CONTRIBUTION
        type: 'checkbox',
        name: 'contribution',
        message: colors.underline('What are some ways that other can contribute to the development of your project?'),
        choices: [{
            name:'bug-reports',
            checked: true
        },{
            name:'code-review',
            checked: true
        },{
            name:'donations',
        }],
    },{// #CREDITS/COLLABORATORS
        type: 'input',
        name: 'credits',
        message: colors.underline('List any collaborators and credit major packages:'),
        default: 'None'
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
        message: colors.underline('What Sections do you want in your Table of Contents?') + colors.grey('(Use Arrows to navigate | Spacebar to choose | Enter to finish)'), //Built-in affordance disappears on input, this is to supplement.
        choices: [{
            name:'Summary',
            checked: true
        },
        {
            name:'Installation',
            checked: true
        },
        {
            name:'Usage',
            checked: true
        },
        {
            name:'Contribution',
            checked: true
        },
        {
            name:'Collaboration',
            checked: true
        },
        {
            name:'Credits',
            checked: true
        },
        {
            name:'License',
            checked: true
        }]
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

