CREATE DATABASE partograma
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

create table users (
	id serial PRIMARY KEY,
	name varchar(100) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	dateBirth TIMESTAMP,
	profession varchar(50), 
	city varchar(100),
	typeUser varchar(50)
)	