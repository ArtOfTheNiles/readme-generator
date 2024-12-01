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
    fs.writeFile('./exports/README.md', data, function (error){
    if(error) {
      console.error('Problem writing file: ', error)
    };
    console.log(colors.rainbow("File created successfully!"));
  });
}

function init() {
  console.log(startMessage.join(''));

  inquirer.prompt(questions)
  .then((answers) => {
    let outputData = '';
    try {
        outputData = format(answers);
    } catch (error) {
        console.trace(colors.bgRed("There is an error! " + colors.yellow(error)));
    }
    writeToFile(outputData);
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
