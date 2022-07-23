INSERT INTO departments
    (name)
VALUES
('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles
    (title, salary, department_id)
VALUES
('Sales Lead', 90000, 1),
('Salesperson', 75000, 1),
('Lead Engineer', 120000, 2),
('Software Engineer', 95000, 2),
('Account Manager', 125000, 3),
('Accountant', 105000, 3),
('Legal Team Lead', 115000, 4),
('Lawyer', 175000, 4);

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Terry', 1, 0),
('Cristiano', 'Ronaldo', 2, 1),
('Lionel', 'Messi', 2, 1),
('John', 'Doe', 3, 0);