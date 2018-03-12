-- Create the database burgers
CREATE DATABASE burgers;
USE `burgers`;

-- Create the table burgers
CREATE TABLE `burgers`
(
	`id` int(10) NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);