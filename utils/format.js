const format = ({  }) => {
    // TODO: plan to format all strings through this fucntion
    return `
    `
};

const formatInstallation = () => {
//TODO: known installation methods, web, node, executable
return `## Installation


`
};

// This function takes in a URL
const formatDocumentation = ( documentation ) => {
return `## Documentation

${documentation ? `Read the [Documentation](${documentation}) here.` : ''}
`
}

// This function takes in URLs
const formatContribution = ( bugReport, review ) => {
`## Contribution

For those interested, here are ways that you can contribute to the project:
${bugReport ? `* [Submit bugs or make requests](${bugReport})` : ''}
${review ? `* [Review code progression](${review})` : ''}
`
};

// TODO: This function should ideally choose from an enumerated list. How to do in Inquirer?
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
return `## License

${output};
`
};

const formatTableOfContents = () => {
    //TODO: Add functionality beyond notes
return `## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
`
};

const sectionBreak = () => {
    return`
================================================================

`
}

export default format;