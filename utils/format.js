//This function expects the output from ./utils/questions.js
export const format = (answers) => {
    // TODO: plan to format all strings through this fucntion
    return `${answers}
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

const formatLicense = ( licenseChoice ) => {
    let output = '';
switch (licenseChoice){
    case 'None':
        output = 'This project is currently unlicensed, tell your friends!';
    break;
    case 'Apache 2.0':
        output = 'Licensed under the [Apache 2.0](LICENSE.txt) license.';
    break;
    case 'GNU General Public License v3.0':
        output = 'Licensed under the [GNU General Public License v3.0](LICENSE.txt) license.';
    break;
    case 'Creative Commons 0 v1.0':
        output = 'Licensed under the [Creative Commons Zero v1.0](LICENSE.txt) license.';
    break;
    case 'MIT':
        output = 'Licensed under the [MIT](LICENSE.txt) license.';
    break;
    default:
        output = 'Licensing information is coming soon! Please be patient while the project gets started.';
}

// (Template Literal Indent)
return `## License

${output}
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