function createHTML(answers)
{
    const html = 

`# ${answers.project_title}

## Description


## Table of Contents


## Installation


## Usage


## License

Licensed under the <a href="./LICENSE">MIT</a> license


## Contributing


## Tests


## Questions

GitHub Profile: <a href="https://github.com/${answers.github}">https://github.com/${answers.github}</a>

`
return html;

}

module.exports = { generateProfile: (answers) => createHTML(answers) }