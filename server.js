const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Set up database connection
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'may050996',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

//Create a set of inquirer prompts to navigate through the database

//put this in a function so it can continually call itself until quit is selected
const Nav = () => {
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            choices: ['Return to main menu','Exit'],
            name: 'options' 
        }
    ]).then((options) => {
        if(options.options === 'Return to main menu'){
            MainMenu()
        }
        else{
            return
        }
    })
}


const MainMenu = () => {
inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments','View all roles','View all employees','Add a department','Add a role','Add an employee','Update an employee role','Exit'],
        name: 'options'
    },
   
]).then((data) =>
{
    if(data.options === 'View all departments'){
        db.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
            console.log(err);
          });
        Nav();
    }
    if(data.options === 'View all roles'){
        db.query('SELECT * FROM roles', function (err, results) {
            console.log(results);
            console.log(err);
          });
        Nav();
    }
    if(data.options === 'View all employees'){
        db.query('SELECT * FROM employees', function (err, results) {
            console.log(results);
            console.log(err);
          });
        Nav();
    }
    if(data.options === 'Add a department'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter new department name',
                name: 'department'
            }
        ]).then((newDepartment)=>{
            console.log('-------------New department added--------------')
            console.log(newDepartment)
            db.query(`INSERT INTO departments (department_name) VALUES (?)`,[newDepartment.department])
        }).then(()=> Nav())
        
    }
    if(data.options === 'Add a role'){
        db.query('SELECT * FROM departments', function (err, results) {
            console.log(results);
            console.log(err);
          })
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter a new job title',
                name: 'job_title'
            },
            {
                type: 'input',
                message: 'Enter the salary for this role',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'Enter the id (shown above) of the department that this role belongs too',
                name: 'department'
            }
        ]).then((newRole) => 
        {
            console.log('------------New role added-------------')
            console.log(newRole)
            db.query(`INSERT INTO roles (job_title, salary, department_id) VALUES (?,?,?)`, [newRole.job_title, newRole.salary, newRole.department])
        }).then(()=> Nav());
    }
    if(data.options === 'Add an employee'){
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter the employees first name',
                name: 'first_name'
            },
            {
                type: 'input',
                message: 'Enter the employees last name',
                name: 'last_name'
            },
            {
                type: 'input',
                message: 'Enter this employees job title',
                name: 'job_title'
            },
            {
                type: 'input',
                message: 'Enter this employees salary',
                name: 'salary'
            },
            {
                type: 'input',
                message: 'Who is this employees manager?',
                name: 'manager'
            }
        ]).then((newEmployee) => {
            console.log('-----------New Employee Added------------')
            console.log(newEmployee)
            db.query(`INSERT INTO employees (first_name, last_name, job_title, salary, manager) VALUES (?,?,?,?,?)`, [newEmployee.first_name, newEmployee.last_name, newEmployee.job_title, newEmployee.salary, newEmployee.manager])
        }).then(()=> Nav());
    }

    if(data.options === 'Update an employee role'){
        db.query('SELECT * FROM employees', function (err, results) {
            console.log(results);
            console.log(err);
          });
        inquirer.prompt([
            {
                type: 'input',
                message: `Enter the id of the employee you'd like to update`,
                name: 'employee_id'
            },
            {
                type: 'input',
                message: 'Enter the new job_title for this employee',
                name: 'updated_job_title'
            },
            {
                type: 'input',
                message: 'Enter the employees new salary',
                name: 'updated_salary'
            }

        ]).then((employee_update)=>{
            db.query('UPDATE employees SET job_title = ?, salary = ? WHERE id = ?',[employee_update.updated_job_title, employee_update.updated_salary, employee_update.employee_id])

        }).then(() => Nav());
    }
    if(data.options === 'Exit'){
        return
    }
})}


MainMenu()