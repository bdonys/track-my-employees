const inquirer = require('inquirer');
const db = require('./db/db');

const menuStack = [];
async function init() {
    try {
        while (true) {
            const answer = await inquirer.prompt({
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit'
                ]
            });
            switch (answer.action) {
                case 'View all departments':
                    const departments = await db.viewDepartments();
                    console.table(departments);
                    break;
                case 'View all roles':
                    const roles = await db.viewRoles();
                    console.table(roles);
                    break;
                case 'View all employees':
                    const employees = await db.viewEmployees();
                    console.table(employees);
                    break;
                case 'Add a department':
                    const addDepartmentName = await inquirer.prompt({
                        type: 'input',
                        name: 'name',
                        message: 'What is the name of the department?'
                    });
                    await db.addDepartment(addDepartmentName);
                    console.log('Department has been added.')
                    break;
                case 'Add a role':
                    const addRole = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'title',
                            message: 'What is the title of the role?'
                        },
                        {
                            type: 'input',
                            name: 'salary',
                            message: 'What is the salary of the role?'
                        },
                        {
                            type: 'input',
                            name: 'department_id',
                            message: 'What is the department id of the role?'
                        },
                    ]);
                    await db.addRole(addRole);
                    console.log('Role has been added.')
                    break;
                case 'Add an employee':
                    const addEmployee = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'first_name',
                            message: 'What is the first name of the employee?'
                        },
                        {
                            type: 'input',
                            name: 'last_name',
                            message: 'What is the last name of the employee?'
                        },
                        {
                            type: 'input',
                            name: 'role_id',
                            message: 'What is the role id of the employee?'
                        },
                        {
                            type: 'input',
                            name: 'manager_id',
                            message: 'What is the manager id of the employee?'
                        },
                    ]);
                    await db.addEmployee(addEmployee);
                    console.log('Employee has been added.')
                    break;
                case 'Update an employee role':
                    const employeeId = await inquirer.prompt({
                        type: 'input',
                        name: 'employee_id',
                        message: 'What is the id of the employee?'
                    });
                    const roleId = await inquirer.prompt({
                        type: 'input',
                        name: 'role_id',
                        message: 'What is the id of the role?'
                    });
                    await db.updateEmployeeRole(employeeId, roleId);
                    console.log('Employee role has been updated.')
                    break;
                case 'Exit':
                    connection.end();
                    break;
                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
            if (answer.action !== 'Go back') {
                menuStack.push(answer.action); // Add the current menu to the stack
            }
        }

    }
    catch (err) {
        console.log(err)
    }
};

init();
