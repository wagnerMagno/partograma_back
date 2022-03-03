const pgp = require('pg-promise')();


let db;
db = pgp({
	url : process.env.DATABASE_URL
});

module.exports = db;