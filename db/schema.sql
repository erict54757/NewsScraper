DROP DATABASE IF EXISTS newsScrape_db;
CREATE DATABASE newsScrape_db;
USE newsScrape_db;





CREATE TABLE Accounts
(
	id int NOT NULL AUTO_INCREMENT,
    uuid varchar(200),
	first_name varchar(30) NOT NULL,
	last_name varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	account_key varchar(8) NOT NULL,
	PRIMARY KEY (id)
);
CREATE TABLE Notes
(
	id int NOT NULL AUTO_INCREMENT,
	note varchar(255) NOT NULL, 
	User_id int,
	Scrapes_id int,
	PRIMARY KEY (id),
	FOREIGN KEY(User_id) REFERENCES accounts(id),
	FOREIGN KEY(Scrapes_id) REFERENCES Scrapes(id)
);

CREATE TABLE Scrapes
(
	id int NOT NULL AUTO_INCREMENT,
	headline varchar(255) NOT NULL, 
	link varchar(255) NOT NULL,
	Scrapper_id int,
	PRIMARY KEY(id),
	FOREIGN KEY(Scrapper_id) REFERENCES accounts(id)
);