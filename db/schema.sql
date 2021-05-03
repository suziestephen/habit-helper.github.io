-- Drops the habithelper database if it exists currently --
DROP DATABASE IF EXISTS habithelper;
-- Creates the "habithelper" database --
CREATE DATABASE habithelper;

USE habithelper;

CREATE TABLE habits(
id INT AUTO_INCREMENT NOT NULL,
habitName VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE history(
id INT AUTO_INCREMENT NOT NULL,
habitId VARCHAR(255) NOT NULL,
habit VARCHAR(255) NOT NULL,
book VARCHAR(255) NOT NULL,
pages INT AUTO_INCREMENT NOT NULL,
exercise VARCHAR(255) NOT NULL,
gratefulFor VARCHAR(255) NOT NULL,
dayOf DATE,
PRIMARY KEY (id)
FOREIGN KEY (habitId) references habit (id)
);



