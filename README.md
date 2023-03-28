# Employee-Tracker
A command line interface application that allows users to access and change employee directories in a mysql database

## Description
An employee-tracker application in node.js that utilizes mysql and inquirer to create an easy to use interface for accessing and manipulating an employee database.  Given a series of inquirer prompts the user is able to access records for all employees, roles, and departments in the database and make changes to any table.

# User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Installation
The user will need to run npm install in order to install the inquirer, express, and mysql packages.

## Usage

Video Demonstration: https://drive.google.com/file/d/1KrQxfx68UQ5in1Ws9wQsVkjJvsYsVgEt/view

Github Repository: https://github.com/JpBaer/Employee-Tracker