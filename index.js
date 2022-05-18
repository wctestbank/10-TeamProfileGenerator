const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

// classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let employeeData = {
    manager: {},
    engineers: [],
    interns: []
};

function startApp() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Enter the team manager\'s name.'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter manager\'s employee ID.'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter manager\'s email.'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Enter manager\'s Office Number.'
            }
        ])
        .then(managerData => {

            // deconstructs output and creates manager object to add the employee data
            let { managerName, managerId, managerEmail, managerOfficeNumber } = managerData;
            employeeData.manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);

            addTeam();

        });
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engiName',
                message: 'Enter the engineer\'s name.'
            },
            {
                type: 'input',
                name: 'engiId',
                message: 'Enter engineer\'s employee ID.'
            },
            {
                type: 'input',
                name: 'engiEmail',
                message: 'Enter engineer\'s email.'
            },
            {
                type: 'input',
                name: 'engiGithub',
                message: 'Enter engineer\'s Github.'
            }
        ])
        .then(engiData => {
            // deconstructs output and creates engineer object to add the employee data
            let { engiName, engiId, engiEmail, engiGithub } = engiData;
            employeeData.engineers.push(new Engineer(engiName, engiId, engiEmail, engiGithub));

            addTeam();
            
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter the intern\'s name.'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Enter intern\'s employee ID.'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter intern\'s email.'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Enter intern\'s School.'
            }
        ])
        .then(internData => {
            // deconstructs output and creates engineer object to add the employee data
            let { internName, internId, internEmail, internSchool } = internData;
            employeeData.interns.push(new Intern(internName, internId, internEmail, internSchool));
            console.log(employeeData);

            addTeam();
        });
}

function addTeam() {

    inquirer
        .prompt(
            {
                type: 'list',
                name: 'choice',
                message: 'Choose what type of employee to add:',
                choices: ['engineer', 'intern', 'EXIT']
            }
        )
        .then(response => {
            let { choice } = response;

            if (choice == 'engineer'){
                addEngineer();
            }
            else if (choice == 'intern'){
                addIntern();
            }
            else {
                writeToFile(JSON.stringify(employeeData));
            }
        });

}

// write to html function
function writeToFile(data) {
    fs.writeFile(`./dist/TeamProfile.txt`, data, err => {
        if (err) throw err;
    }
    );
}

//console.log(employeeData);
startApp();


