INSERT INTO departments (department_name)
VALUES ("Software Development"),
       ("Finance"),
       ("Human Resources"),
       ("Marketing"),
       ("Management"),
       ("Public Relations");

INSERT INTO employees (first_name,last_name,job_title,salary,manager)
VALUES ('Jeffery','Jefferson','Accountant',90000,'Paul Moneyfingers'),
('Mark','Monopolyman','CEO',12000000,'Nobody'),
('Paul', 'Moneyfingers','Lead Accountant', 135000,'Mark Monopolyman'),
('Pete','Python','Software Developer',125000,'Mark Monopolymqn'),
('Addy','Adverson','Digital Marketer', 80000, 'Mark Monopolyman');


INSERT INTO roles (job_title, salary, department_id)
VALUES ('Accountant',90000,2),
('Lead Accountant', 135000,2),
('Software Developer',125000,1),
('CEO',12000000,5),
('Digital Marketer',80000,4);
       
       