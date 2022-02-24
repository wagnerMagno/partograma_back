const database = require('../infra/database');

exports.getUser = function () {
	return database.query('select * from users');
};

exports.userLogin = function (user) {
	return database.oneOrNone('select * from users where email = $1 and password = $2', [user.email, user.password]);
};

exports.userRegister = function (user) {
	return database.oneOrNone(`INSERT INTO public.users( name, password, email, date_birth, profession, city)
	   VALUES ( $1, $2, $3, $4, $5, $6)`
		, [user.name, user.password,  user.email, user.dateBirth, user.profession, user.city]);
};
