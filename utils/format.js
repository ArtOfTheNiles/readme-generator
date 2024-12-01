import formatLicense from './formatLicense.js';
import formatTableOfContents from './formatTableOfContents.js';
import formatInstallation from './formatInstallations.js';
import formatContribution from './formatContribution.js';
import formatDocumentation from './formatDocumentation.js';

// Main Function:
export const format = (answers) => {

    // Get each variable with a chance to modify:
    const outputName = answers.projectName;
    const repo = answers.repository;
    const outputSummary = answers.summary;
    const outputTableOfContents = formatTableOfContents(answers.tableOfContents);
    const outputInstallation = formatInstallation(answers.installation);
    const outputUsage = formatUsage(answers.usage);
    const outputDocumentation = formatDocumentation(answers.documentation, repo);
    const outputContribution = formatContribution(answers.contribution, repo);
    const outputCredits = formatCredits(answers.credits);
    const outputLicense = formatLicense(answers.license);
    const outputDate = new Date();


const outputFormat = `# ${outputName}\n
${outputSummary}\n\n\n
${outputTableOfContents}\n\n\n
${outputInstallation}\n\n\n
${outputUsage}\n\n\n
${outputDocumentation}\n\n\n
${outputContribution}\n\n\n
${outputCredits}\n\n\n
${outputLicense}\n---\n
###### First created on: ${outputDate}
`

    return outputFormat;
};

// Expects a string
const formatCredits = ( credits ) => {
    return `## Credits\n\n${credits}\n`;
}

// Expects a string
const formatUsage = ( usage ) => {
    return `## Usage\n\n${usage}\n`;
}

export default format;

