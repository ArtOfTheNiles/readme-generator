

// Expects a SPECIFIC array of values
export const formatContribution = ( input, repo = 'https://' ) => {
    if(input.length === 0){ return ''};

    const formatFlavor = 'For those interested, here are ways that you can contribute to the project:' + '\n';
    //Currently setting to github's default directories
    const bugText = [
        `* [Submit bugs or make requests]`,
        `/issues`,     
        `, It's always good to have more eyes.` + '\n'
    ];
    const revText = [
        `* [Review code progression]`,
        `/pulls`,     
        `, and see how the project has progressed.` + '\n'
    ];
    const donText = [
        `* [Keep the project alive]`,
        `https://ko-fi.com/artoftheniles#`,
        `, donations are always welcome, but never expected.` + '\n\n'
    ];

    const donateButton = `    <a href='https://ko-fi.com/V7V116V0Z9' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>`;


    const outBugReport = input.includes('bugReport') ? `${bugText[0]}(${repo}${bugText[1]})${bugText[2]}` : '';
    const outReview = input.includes('review') ? `${revText[0]}(${repo}${revText[1]})${revText[2]}`: '';

    //Currently no default destination for donations
    const outDonations = input.includes('donations') ? `${donText[0]}(${donText[1]})${donText[2]}` + donateButton : '';
    const output = outBugReport + outReview + outDonations;

    return`## Contribution\n\n${formatFlavor}\n${output}\n`
};

export default formatContribution;