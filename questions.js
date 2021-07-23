module.exports = {
     qs : [        
        {
            type: 'input',
            name: 'project_title',
            message: 'Please enter the name of the project? '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter what does your project do specifically? '
        },
        {
            type: 'input',
            name: 'installation_instructions',
            message: 'Please enter the steps required to install your project? '
        },
        {
            type: 'input',
            name: 'usage_information',
            message: 'Please enter usage information about the project? '
        },    
        {
            type: 'list',
            name: 'license_choices',
            message: 'Which LICENSE will be added for the project? ',
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
            ],
            loop: false
        },        
        {
            type: 'input',
            name: 'contribution_guidelines',
            message: 'Please enter the project contribution guidlines? '
        },
        {
            type: 'input',
            name: 'test_instructions',
            message: 'Please enter the project test instructions? '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username? '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email? '
        },        
        
    ]
}
