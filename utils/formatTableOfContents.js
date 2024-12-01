import tableOfContents from "./tableofcontents.js";

// Expects an array of values from tableofcontents.js
export const formatTableOfContents = ( toc ) => {
    if(toc.length === 0){ return; }

    const temp = [''];
    toc.forEach(element => {
        const currentElement = tableOfContents.find(({ name }) => name === element);
        currentElement ? temp.push(currentElement.output + '\n') : temp.push('');
    });
    const output = temp.map(x => x).join(''); //Output the array without separators
    
    return `## Table of Contents\n\n${output}\n`
};

export default formatTableOfContents;