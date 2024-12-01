// Expects Boolean + URL
export const formatDocumentation = ( documentation, repo = 'https://') => {
    if(!documentation){ return ''};

    //Currently setting to github default wiki directory
    const directory = repo + '/wiki';
    const flavorText = `Catch up on [Project Documentation](${directory}) here`;
    return `## Documentation\n\n${flavorText}\n`
}

export default formatDocumentation;