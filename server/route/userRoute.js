const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

router.get('/user', async function (req, res, next) {
	try {
		const users = await userService.getUsers();
		res.json(users);
	} catch (e) {
		next(e);
	}
});

router.post('/user/login', async function (req, res, next) {
	try {
		const user = req.body;
		console.log("entrou wag ");
		const userLogin = await userService.userLogin(user);
		res.json(userLogin);
	} catch (e) {
		next(e);
	}
});


router.post('/user', async function (req, res, next) {
	try {
		const user = req.body;
		await userService.userRegister(user);
		res.json({message : "Usuário cadastrado com sucesso"});
	} catch (e) {
		next(e);
	}
});

// router.post('/users', async function (req, res, next) {
// 	const post = req.body;
// 	try {
// 		const newPost = await userService.savePost(post);
// 		res.status(201).json(newPost);
// 	} catch (e) {
// 		next(e);
// 	}
// });

// router.put('/users/:id', async function (req, res, next) {
// 	const post = req.body;
// 	try {
// 		await userService.updatePost(req.params.id, post);
// 		res.status(204).end();
// 	} catch (e) {
// 		next(e);
// 	}
// });

// router.delete('/users/:id', async function (req, res, next) {
// 	try {
// 		await userService.deletePost(req.params.id);
// 		res.status(204).end();
// 	} catch (e) {
// 		next(e);
// 	}
// });

module.exports = router;
