import colors from 'colors';
import licenses from './licenses.js';
import installations from './installations.js'
import tableOfContents from './tableofcontents.js';

//Built-in affordance disappears on spacebar input, this is to supplement.
const cbFlair = [ 
    colors.green('(-- '),
    colors.green(' || '),
    colors.green(' --)'),
    colors.white('Arrows'),
    colors.white('Spacebar'),
    colors.white('Enter')
]

// Construction: (-- Use Arrows to navigate || Spacebar to choose || Enter to finish --)
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
        type: 'confirm',
        name: 'documentation', // #DOCUMENTATION
        message: colors.underline('Are you using github wiki for documentation?\n'),
        default: true
    },{
        type: 'checkbox',
        name: 'installation', // #INSTALLATION
        message: colors.underline('Does your project require installation? If so, how?\n') + colors.grey(' (- Note: Each choice will populate a template for you to fill out further -)\n') + checkboxGuideText,
        choices: installations,
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
            checked: false
        }],
    },{
        type: 'input',
        name: 'credits', // #CREDITS/COLLABORATORS
        message: colors.underline('List any collaborators and credit major packages:\n'),
        default: 'None'
    },{
        type: 'list',
        name: 'license', // #LICENSE
        message: colors.underline('What is the license you are using, or intend to use?\n') + colors.grey(' (- Note: Your choice will only really give you a pretty badge, you must ensure license information exists. -)\n'),
        choices: licenses,
        default: licenses[0]
    },{
        type: 'checkbox',
        name: 'tableOfContents', // #TABLE OF CONTENTS
        message: colors.underline('What Sections do you want in your Table of Contents?\n') + checkboxGuideText, 
        choices: tableOfContents
    }
];

export default questions;
