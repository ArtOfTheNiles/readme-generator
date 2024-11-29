// TODO: Include packages needed for this application
import fs from 'node:fs';
import colors from 'colors';
import inquirer from 'inquirer';

import { questions } from './utils/questions.js';
import format from './utils/format.js';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./exports/${fileName}`, data);
}

// TODO: Create a function to initialize app
function init() {
console.log(colors.rainbow('Start the Party!'));
  inquirer.prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(colors.zalgo(answers)); //wth does zalgo mean? Somehow we don't even get here!
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  console.log(colors.zalgo('this is after the prompts...'));
}

// Function call to initialize app
init();
