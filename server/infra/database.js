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
		connectionString :  process.env.DATABASE_URL + "?sslmode=require",
		ssl: { rejectUnauthorized: true, requestCert : true }

	});
}


module.exports = db;