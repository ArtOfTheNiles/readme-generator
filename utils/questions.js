import colors from 'colors';

//Built-in affordance disappears on spacebar input, this is to supplement.
//Maybe refactor this out.
const cbFlair = [ 
    colors.green('(-- '),
    colors.green(' || '),
    colors.green(' --)'),
    colors.white('Arrows'),
    colors.white('Spacebar'),
    colors.white('Enter')
]

const checkboxGuideText = colors.grey(` ${cbFlair[0]} Use ${cbFlair[3]} to navigate ${cbFlair[1]} ${cbFlair[4]} to choose ${cbFlair[1]} ${cbFlair[5]} to finish ${cbFlair[2]}\n`);


export const questions = [
    {
        type: 'input',
        name: 'projectName', // #NAME
        message: colors.underline('What is your project called?\n'),
        default: 'Project-Name'
    },{
        type: 'input',
        name: 'repository', // #REPOSITORY
        message: colors.underline('Provide a link to your project repository:\n'),
        default: 'https://github.com/ArtOfTheNiles/readme-generator'
    },{
        type: 'input',
        name: 'summary', // #SUMMARY
        message: colors.underline('Describe your project in a few sentences.\n') + colors.grey('  Why does it need to be built? What problems does it solve? What does it help you learn?\n'),
        default: 'Here is a little bit about the project...'
    },{
        type: 'checkbox',
        name: 'installation', // #INSTALLATION
        message: colors.underline('Does your project require installation? If so, how?\n') + colors.grey(' (- Note: Each choice will populate a template for you to fill out further -)\n') + checkboxGuideText,
        choices: [
            'Web-App(URL)',
            'Desktop-App(Windows)',
            'Desktop-App(MacOS)',
            'Desktop-App(Linux)',
            'Terminal-App(Node)'
        ],
    },{
        type: 'input',
        name: 'usage', // #USAGE
        message: colors.underline('Describe the steps to using your project, how does a user get from A to B?\n') + colors.gray('It is the peak of hubris to think people will understand your program with no directions.\n'),
        default: 'To begin, just...'
    },{
        type: 'checkbox',
        name: 'contribution', // #CONTRIBUTION
        message: colors.underline('What are some ways that other can contribute to the development of your project?\n') + checkboxGuideText,
        choices: [{
            name:'bug-reports',
            checked: true
        },{
            name:'code-review',
            checked: true
        },{
            name:'donations',
        }],
    },{
        type: 'input',
        name: 'credits', // #CREDITS/COLLABORATORS
        message: colors.underline('List any collaborators and credit major packages:\n'),
        default: 'None'
    },{
        type: 'list',
        name: 'license', // #LICENSE
        message: colors.underline('What is the license you are using, or intend to use?\n'),
        choices: [
            'None',
            'Apache 2.0',
            'GNU General Public License v3.0',
            'Creative Commons 0 v1.0',
            'MIT',
            'Other'
        ],
        default: 'None'
    },{
        type: 'checkbox',
        name: 'tableOfContents', // #TABLE OF CONTENTS
        message: colors.underline('What Sections do you want in your Table of Contents?\n') + checkboxGuideText, 
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
