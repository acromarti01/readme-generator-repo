function createHTML(answers)
{
    const html = 

`# ${answers.project_title}

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

Licensed under the <a href="./LICENSE">MIT</a> license


## Contributing


## Tests


## Questions

GitHub Profile: <a href="https://github.com/${answers.github}">https://github.com/${answers.github}</a>

Any additional question you can reach me at <u>${answers.email}</u>

`
return html;

}

module.exports = { generateProfile: (answers) => createHTML(answers) }