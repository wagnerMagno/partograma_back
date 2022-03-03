const pgp = require('pg-promise')();


let db;
if(process.env.NODE_ENV.trim() === "dev"){
	db = pgp({
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		database: process.env.DB_NAME
	});
	
}else{
	db = pgp({
		connectionString :  "postgres://hjugfhemgjfcyc:2d91de46491ad5432d3db9b678ceb8b62226f2b4c804a5098dd3644b8dbaf218@ec2-34-230-110-100.compute-1.amazonaws.com:5432/dcr8gjir0jie4f"
	});
}


module.exports = db;