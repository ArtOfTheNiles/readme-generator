import licenses from './licenses.js'

// License Strings
const ls = [
    'Licensed under the ',
    '(LICENSE.txt) license. '
]

export const formatLicense = ( licenseChoice ) => {

    let output = '';
    if(!licenseChoice || licenseChoice == `None`){
        output = 'This project is currently unlicensed, tell your friends!';
    }else if(licenseChoice == `Other`){
        output = 'Licensing information is coming soon! Please be patient while the project gets started.';
    }else{
        output = `${ls[0]}${licenseChoice.value}${ls[1]}${licenseChoice.badge}`;
    }

    return `## License\n\n${output}\n`
};

export default formatLicense;
