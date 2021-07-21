module.exports = {
     qs : [        
        {
            type: 'input',
            name: 'project_title',
            message: 'What is the name of the project? '
        }, 
        {
            type: 'list',
            name: 'license_choices',
            message: 'Which LICENSE? ',
            choices: ["Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                `BSD 2 Clause "Simplified" License`,
                `BSD 3 Clause "New" or "Revised" License`,
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense"
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username? '
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? '
        },        
        
    ]
}
