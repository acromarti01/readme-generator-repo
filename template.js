function createHTML(answers)
{
    const modified_choice = answers.license_choices.replaceAll(" ", "_");
    const html = 

`# ${answers.project_title}

![badges](https://img.shields.io/badge/license-${modified_choice}-brightgreen)

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${answers.installation_instructions}

## Usage

${answers.usage_information}

## License

Licensed under the <a href="">${answers.license_choices}</a>

## Contributing

${answers.contribution_guidelines}

## Tests

${answers.test_instructions}

## Questions

GitHub Profile: <a href="https://github.com/${answers.github}">https://github.com/${answers.github}</a>

Any additional question you can reach me at <u>${answers.email}</u>

`
return html;

}

module.exports = { generateProfile: (answers) => createHTML(answers) }