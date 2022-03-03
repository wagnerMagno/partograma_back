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
);	

create table bed (
	id serial PRIMARY KEY,
	id_user integer, 
	number integer,
	name_pacient varchar(100) Not Null,
	age integer, 
	dum varchar(50),
	medication varchar(200),
	comorbidity varchar(200),
	amount_baby integer,
	BCF1 integer,
	BCF2 integer,
	BCF3 integer,
	du varchar(12),
	afu varchar(10), 
	apag_cervical varchar(10),
	presentation1 varchar(20),
	presentation2 varchar(20),
	presentation3 varchar(20),
	pa varchar(20),
	hgt varchar(20),
	complaint varchar(200),
	is_active boolean default true,
	CONSTRAINT fk_id_user
      FOREIGN KEY(id_user) 
	  REFERENCES users(id)
);	

create table partogram (
	id serial PRIMARY KEY,
	id_bed integer, 
	Dilation integer,
	Contraction varchar(1),
	FCF integer, 
	start_tay varchar(15),
	real_time varchar(15),
	registration_time varchar(5),
	handbag varchar(1),
	LA varchar(10),
	oxytocin varchar(10),
	CONSTRAINT fk_id_bed
      FOREIGN KEY(id_bed) 
	  REFERENCES bed(id)
);	

