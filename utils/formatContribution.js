import colors from 'colors';

// Expects a SPECIFIC array of values
export const formatContribution = ( input, repo = 'https://' ) => {
    if(input.length === 0){ return ''};

    //Currently setting to github's default directories
    const flavorText = 'For those interested, here are ways that you can contribute to the project:' + '\n';
    const outBugReport = input.includes('bugReport') ? `* [Submit bugs or make requests](${repo}/issues)` + '\n': '';
    const outReview = input.includes('review') ? `* [Review code progression](${repo}/pulls)` + '\n': '';

    //Currently no default destination for donations
    const outDonations = input.includes('donations') ? `* [Keep the project alive](https://) All donations are greatly appreciated!` + '\n': '';
    const output = outBugReport + outReview + outDonations;

    return`## Contribution\n\n${flavorText}\n${output}\n`
};

export default formatContribution;