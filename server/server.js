require('dotenv').config({
	path: process.env.NODE_ENV.trim() === "dev" ? ".env.envDevelopment" : ".env"
})

const express = require('express');
const app = express();
const userService = require('./service/userService');


app.use(express.json());
// app.use('/', require('./route/index'));
app.get('/',(req,res) => {res.send('it is Working!')})  
app.get('/user', async function (req, res, next) {
	try {
		const users = await userService.getUsers();
		res.json(users);
	} catch (e) {
		next(e);
	}
});
app.post('/user/login', async function (req, res, next) {
	try {
		const user = req.body;
		console.log("entrou wag ");
		const userLogin = await userService.userLogin(user);
		res.json(userLogin);
	} catch (e) {
		next(e);
	}
});

app.post('/user', async function (req, res, next) {
	try {
		const user = req.body;
		await userService.userRegister(user);
		res.json({message : "Usuário cadastrado com sucesso"});
	} catch (e) {
		next(e);
	}
});

app.use(function (error, req, res, next) {
	if (error.message === 'Email ou senha não estão corretos!') {
		return res.status(404).send(error.message);
	}
	if (error.message === 'Email já cadastrado') {
		return res.status(409).send({ message: error.message });
	}
	res.status(500).send(error.message);
});


app.listen(process.env.PORT || 3000, function () {
	console.log(`App inicializado `, process.env.PORT || 3000)
});

