import licenses from './licenses.js'

// License Strings
const ls = [
    'Licensed under the ',
    '(LICENSE.txt) license. '
]

export const formatLicense = ( inputLicense ) => {

    let output = '';
    if(!inputLicense || inputLicense == `None`){
        output = 'This project is currently unlicensed, tell your friends!';
    }else if(inputLicense == `Other`){
        output = 'Licensing information is coming soon! Please be patient while the project gets started.';
    }else{
        const currentLicense = licenses.find(({ name }) => name === inputLicense);
        output = `${ls[0]}${currentLicense.value}${ls[1]}\n\n${currentLicense.badge}`;
    }

    return `## License\n\n${output}\n`
};

export default formatLicense;
