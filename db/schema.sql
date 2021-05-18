-- Drops the habithelper database if it exists currently --
DROP DATABASE IF EXISTS habithelper;
-- Creates the "habithelper" database --
CREATE DATABASE habithelper;

USE habithelper;

CREATE TABLE gratitude(
id INT AUTO_INCREMENT NOT NULL,
userId INT NOT NULL,
gratefulFor VARCHAR(255) NOT NULL,
dayOf DATE,
PRIMARY KEY (id),
FOREIGN KEY (userId) references users (id)
);

CREATE TABLE reading(
id INT AUTO_INCREMENT NOT NULL,
userId INT NOT NULL,
book VARCHAR(255) NOT NULL,
pages INT NOT NULL,
dayOf DATE,
PRIMARY KEY (id),
FOREIGN KEY (userId) references users (id)
);

CREATE TABLE exercise(
id INT AUTO_INCREMENT NOT NULL,
userId INT NOT NULL,
exercise VARCHAR(255) NOT NULL,
located VARCHAR(255) NOT NULL,
dayOf DATE, 
PRIMARY KEY (id),
FOREIGN KEY (`userId`) references `users` (`id`)
);

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

