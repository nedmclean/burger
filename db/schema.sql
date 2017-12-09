CREATE DATABASE sausage_db;
USE burger_db;

-- Create the table plans.
CREATE TABLE sausages
(
id int NOT NULL AUTO_INCREMENT,
sausage_type varchar(255) NOT NULL,
devoured BOOLEAN,
date TIMESTAMP,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (plan) VALUES ('Plan to fight a ninja.');
