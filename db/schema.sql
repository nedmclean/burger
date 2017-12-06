CREATE DATABASE burgers;
USE burgers;

-- Create the table plans.
CREATE TABLE plans
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');
