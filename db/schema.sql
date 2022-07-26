DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(6,0) NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_dept FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER DEFAULT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id)
);