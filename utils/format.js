import formatLicense from './formatLicense.js';
import colors from 'colors';
import tableOfContents from './tableofcontents.js';

const checkup = function (answers) {
    console.log(colors.bgCyan('This is how things are looking in Format: '));
    console.log(colors.bgCyan(answers.projectName));
    console.log(colors.bgCyan(answers.repository));
    console.log(colors.bgCyan(answers.summary));
    console.log(colors.bgCyan(answers.documentation));
    console.log(colors.bgCyan(answers.installation));
    console.log(colors.bgCyan(answers.usage));
    console.log(colors.bgCyan(answers.contribution));
    console.log(colors.bgCyan(answers.credits));
    console.log(colors.bgCyan(answers.license));
    console.log(colors.bgCyan(answers.tableOfContents));
}

//This function expects the output from ./utils/questions.js
export const format = (answers) => {
const temp = checkup(answers);

const outputName = answers.projectName;
const outputDate = new Date();
const repo = answers.repository;
const outputSummary = answers.summary;
const outputDocumentation = formatDocumentation(answers.documentation, repo); //send bool + url
const outputInstallation = formatInstallation(answers.installation);
const outputUsage = formatUsage(answers.usage);
const outputContribution = formatContribution(answers.contribution);
const outputCredits = formatCredits(answers.credits);
const outputLicense = formatLicense(answers.license);
const outputTableOfContents = formatTableOfContents(answers.tableOfContents);



//NOTE: the values that JS pulls from a template literal cannot be complex objects, only simple ones like string, number, etc.
return `# ${outputName}

${outputSummary}

${outputTableOfContents}

${outputInstallation}

${outputUsage}

${outputDocumentation}

${outputContribution}

${outputCredits}

${outputLicense}

---
###### Last updated on: ${outputDate}
`
};


const formatInstallation = () => {
return `## Installation


`
};

// This function expects a URL
const formatDocumentation = ( documentation ) => {
    if(!documentation){ return ''};

return `## Documentation

${documentation ? `Read the [Documentation](${documentation}) here.` : ''}
`
}

// This function expects URLs
const formatContribution = ( bugReport, review, donations, url = 'https://' ) => {
    if(!bugReport && !review && !donations){ return ''};

    const outBugReport = bugReport ? `* [Submit bugs or make requests](${url}/issues)\n`: '';
    const outReview = review ? `* [Review code progression](${url}/pulls)\n`: '';
    const outDonations = donations ? `* [Keep the project alive](about:blank)\n`: '';

return`## Contribution

For those interested, here are ways that you can contribute to the project:
${outBugReport}${outReview}${outDonations}
`
};

const formatCredits = ( credits ) => {
    console.log(colors.yellow('This is where format Credits should happen.'));
    return `## Credits\n\n${credits}\n`;
}

const formatUsage = ( usage ) => {
    console.log(colors.yellow('This is where format Usage should happen.'));
    return `## Usage\n\n${usage}\n`;
}

// Expects an array of values
const formatTableOfContents = ( toc ) => {
    if(toc.length === 0){
        return;
    }else{
        const output = [''];
        toc.forEach(element => {
            const currentElement = tableOfContents.find(({ name }) => name === element);
            currentElement ? output.push(currentElement.output + '\n') : output.push('');
            console.log('This is the current element' + currentElement);
        });
    }
    return `## Table of Contents\n\n${output}\n`
};

export default format;

