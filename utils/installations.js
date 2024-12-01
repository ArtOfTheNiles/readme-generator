/*
    name: is for inquirer.js
    value: is identical because inquirer sends this value in 'answers'
    output: is the output value for Markdown
*/
export const installations = [
    {
        name: `None`,
        value: `None`,
        output: `This project somehow requires no installation whatsoever.`,
        checked: false,
    },{
        name: `Other`,
        value: `Other`,
        output: `Installation information is incoming, please be patient while the project gets underway.`,
        checked: false,
    },{
        name: `Web-App(URL)`,
        value: `Web-App(URL)`,
        output: `This app can be run in a modern browser at the following [URL](https://).`,
        checked: true,
    },{
        name: `Desktop-App(Windows)`,
        value: `Desktop-App(Windows)`,
        output: `Download on the Windows App Store [Microsoft](https://apps.microsoft.com/).`,
        checked: true,
    },{
        name: `Desktop-App(MacOS)`,
        value: `Desktop-App(MacOS)`,
        output: `Download on the App Store [Apple](https://apps.apple.com/).`,
        checked: true,
    },{
        name: `Desktop-App(Linux)`,
        value: `Desktop-App(Linux)`,
        output: `This app can be run on [Linux](https://docs.kernel.org/).`,
        checked: false,
    },{
        name: `Terminal-App(Node)`,
        value: `Terminal-App(Node)`,
        output: `This app should be run in a terminal using Node.js, for more information visit [NodeJS](https://nodejs.org/en).`,
        checked: false,
    }

];

export default installations;