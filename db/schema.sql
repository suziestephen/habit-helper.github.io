-- Drops the habithelper database if it exists currently --
DROP DATABASE IF EXISTS habithelper;
-- Creates the "habithelper" database --
CREATE DATABASE habithelper;

USE habithelper;

CREATE TABLE gratitude(
id INT AUTO_INCREMENT NOT NULL,
habit VARCHAR(255) NOT NULL,
gratefulFor VARCHAR(255) NOT NULL,
dayOf DATE,
PRIMARY KEY (id)
);

CREATE TABLE reading(
id INT AUTO_INCREMENT NOT NULL,
habit VARCHAR(255) NOT NULL,
book VARCHAR(255) NOT NULL,
pages VARCHAR(255) NOT NULL,
dayOf DATE,
PRIMARY KEY (id)
);

CREATE TABLE exercise(
id INT AUTO_INCREMENT NOT NULL,
habit VARCHAR(255) NOT NULL,
exercise VARCHAR(255) NOT NULL,
located VARCHAR(255) NOT NULL,
dayOf DATE, 
PRIMARY KEY (id)
);

