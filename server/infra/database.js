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
		url : process.env.DATABASE_URL
	});
}


module.exports = db;