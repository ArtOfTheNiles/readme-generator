import fs from 'node:fs';
import colors from 'colors';
import inquirer from 'inquirer';

import { questions } from './utils/questions.js';
import format from './utils/format.js';

const startMessage = [
  colors.red('! Warning: '),
  colors.yellow('This program is currently limited to '),
  colors.yellow.underline('github.com'),
  colors.yellow(' repositories'),
  colors.red(' (!)')
]

//This program just writes READMEs
function writeToFile(data) {
  const parseData = JSON.stringify(data);
    fs.writeFile('./exports/README.md', parseData, function (error){
    if(error) {
      console.error('Problem writing file: ', error)
    };
    console.log(colors.yellow("I should have written a file!")); //Not getting here.
  });
}

function init() {
  console.log(startMessage.join(''));

  inquirer.prompt(questions)
  .then((answers) => {
    const outputData = format(answers);
    console.log(`This is what 'answers' looks like before the write to file function\n${answers}`);
    writeToFile(answers);
    })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

init();
