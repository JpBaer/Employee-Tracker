DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL

)