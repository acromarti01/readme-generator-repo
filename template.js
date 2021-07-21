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


## Tests


## Questions

GitHub Profile: <a href="https://github.com/${answers.github}">https://github.com/${answers.github}</a>

Any additional question you can reach me at <u>${answers.email}</u>

`
return html;

}

module.exports = { generateProfile: (answers) => createHTML(answers) }