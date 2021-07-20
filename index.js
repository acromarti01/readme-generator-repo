const file_system = require('fs');
const inquirer = require('inquirer');
const { promisify } = require('util');
const writeFileAsync  = promisify(file_system.writeFile);

/*  Modularization/Exports/Imports
    assign the generateProfile function in template.js to a variable
    Original way: const generateProfile = require('/templates').generateProfile;
    Shorthand way......  */
const { generateProfile } = require('./template');
const { qs } = require('./questions');

const getUserInfo = () => {
    inquirer.prompt(qs)
    .then(answers => generateProfile(answers))
    .then(html => writeFileAsync('./README.md', html))
    .catch(err => console.log(err))
    .finally(() => console.log('Operation Complete'));
}
getUserInfo();










/*  Async/node's util.promisfy  */
