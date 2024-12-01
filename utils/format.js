import formatLicense from './formatLicense.js';

//This function expects the output from ./utils/questions.js
export const format = (answers) => {
    // TODO: plan to format all strings through this fucntion
    return `This is what Raw answers looks like:
${answers}

Licensing Section:
${formatLicense(answers.license)}
`
};

const formatInstallation = () => {
//TODO: known installation methods, web, node, executable
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

// Expects an array of specific values
const formatTableOfContents = ( toc ) => {
    if(toc.length === 0){
        return;
    }

    const summary = toc.Summary ? '- [Summary](#summary)\n': '';
    const installation = toc.Installation ? '- [Installation](#installation)\n': '';
    const usage = toc.Usage ? '- [Usage](#usage)\n': '';
    const contribution = toc.Contribution ? '- [Contribution](#contribution)\n': '';
    const collaboration = toc.Collaboration ? '- [Collaboration](#collaboration)\n': '';
    const credits = toc.Credits ? '- [Credits](#credits)\n': '';
    const license = toc.License ? '- [License](#license)\n': '';

// (Template Literal Indent)
return `## Table of Contents

${summary}${installation}${usage}${contribution}${collaboration}${credits}${license}

`
};

const sectionBreak = () => {
return`================================================================

`
}

export default format;