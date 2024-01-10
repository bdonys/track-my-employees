const connection = require('../config/connection');

async function viewDepartments() {
    try {
        const [rows] = await connection.query('SELECT * FROM departments');
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function viewRoles() {
    try {
        const [rows] = await connection.query('SELECT * FROM roles');
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function viewEmployees() {
    try {
        const [rows] = await connection.query('SELECT * FROM employees');
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function addDepartment(department) {
    try {
        const [rows] = await connection.query('INSERT INTO departments SET ?', department);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function addRole(role) {
    try {
        const [rows] = await connection.query('INSERT INTO roles SET ?', role);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function addEmployee(employee) {
    try {
        const [rows] = await connection.query('INSERT INTO employees SET ?', employee);
        return rows;
    } catch (err) {
        console.log(err);
    }
}

async function updateEmployeeRole(employeeId, roleId) {
    try {
        const [result] = await connection.query('UPDATE employees SET role_id = ? WHERE id = ?', [roleId, employeeId]);
        return result.affectedRows > 0;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};