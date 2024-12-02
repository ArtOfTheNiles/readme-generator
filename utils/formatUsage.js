// TODO: Switch this to a user input in inquirer. 
const videoLink = `<iframe title="vimeo-player" src="https://player.vimeo.com/video/1035076639?h=01f084c303" width="640" height="360" frameborder="0" allowfullscreen></iframe>`
// Expects a string
export const formatUsage = ( usage ) => {
    return `## Usage\n\n${usage}\n${videoLink}\n`;
};

export default formatUsage;