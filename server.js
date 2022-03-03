require('dotenv').config({  
	path: process.env.NODE_ENV.trim() === "dev" ? ".env.envDevelopment" : ".env"
  })

const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./server/route/index'));

app.use(function (error, req, res, next) {
	if (error.message === 'Email ou senha não estão corretos!') {
		return res.status(404).send(error.message);
	}
	if (error.message === 'Email já cadastrado') {
		return res.status(409).send({message :error.message});
	}
	res.status(500).send(error.message);
});


app.listen( process.env.PORT || 3000, function() {
	console.log(`App inicializado novo `, process.env.PORT || 3000)
});

