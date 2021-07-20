function createHTML(answers)
{
    const html = 

`# ${answers.project_title}

## Description


## List Of Technologies


## ScreenShot


## License

Licensed under the <a href="./LICENSE.md">MIT</a> license.

`
return html;

}


module.exports = {
    generateProfile: (answers) => {
        return createHTML(answers);
    }
}