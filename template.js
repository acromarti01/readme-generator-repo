function createHTML(answers)
{
    const modified_choice = answers.license_choices.replaceAll(" ", "_");
    const html = 

`# ${answers.project_title}

![badges](https://img.shields.io/badge/license-${modified_choice}-brightgreen)

## Description


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation


## Usage


## License

Licensed under the <a href="">${answers.license_choices}</a>


## Contributing

This project follows the "Fork-and-Pull" Git workflow......

1. Fork a GitHub repository
2. Clone the forked repository to your local system
3. Add a Git remote for the original repository
4. Create a feature branch in which to place your changes
5. Make your changes to the new branch
6. Commit the changes to the branch
7. Push the branch to GitHub

Any additional guidlines are added here:

${answers.contribution_guidelines}


## Tests


## Questions

GitHub Profile: <a href="https://github.com/${answers.github}">https://github.com/${answers.github}</a>

Any additional question you can reach me at <u>${answers.email}</u>

`
return html;

}

module.exports = { generateProfile: (answers) => createHTML(answers) }