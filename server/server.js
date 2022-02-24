const express = require('express');
const app = express();
const port = 3000


app.use(express.json());
app.use('/', require('./route/index'));
app.use(function (error, req, res, next) {
	if (error.message === 'Email ou senha não estão corretos!') {
		return res.status(404).send(error.message);
	}
	if (error.message === 'Email já cadastrado') {
		return res.status(409).send(error.message);
	}
	res.status(500).send(error.message);
});


app.listen(port, function() {
	console.log(`App inicializado `, port)
});

