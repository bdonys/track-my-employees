INSERT INTO departments (name) VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id) VALUES
    ('Sales Lead', 100000.00),
    ('Salesperson', 80000.00),
    ('Lead Engineer', 150000.00),
    ('Software Engineer', 120000.00),
    ('Accountant', 125000.00, 3),
    ('Legal Team Lead', 250000.00),
    ('Lawyer', 190000.00);


INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 2, 1),
    ('Ashley', 'Rodriguez', 3),
    ('Kevin', 'Tupik', 4, 3),
    ('Sarah', 'Lourd', 6, 5),
    ('Tom', 'Allen', 7, 5),
    ('Samantha', 'Jones', 8, 6);

