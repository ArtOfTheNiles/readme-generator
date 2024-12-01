import installations from "./installations.js";

// Expects an array of values from installations.js
export const formatInstallation = ( input ) => {
    if(input.length === 0){ return; }

    const temp = [''];
    input.forEach(element => {
        const currentElement = installations.find(({ name }) => name === element);
        currentElement ? temp.push(currentElement.output + '\n') : temp.push('');
    });
    const output = temp.map(x => x).join(''); //Output the array without separators

    return `## Installation\n\n${output}\n`
};

export default formatInstallation;