const usersData = require('../data/usersData');

exports.getUsers = function () {
	return usersData.getUser();
};

exports.userLogin = async function (user) {
	const userLogin = await usersData.userLogin(user);
	if(userLogin){
		return userLogin;
	}
	throw new Error('Email ou senha não estão corretos!');
};


exports.userLogin = async function (user) {
	const userLogin = await usersData.userLogin(user);
	if(userLogin){
		return userLogin;
	}
	throw new Error('Email ou senha não estão corretos!');
};

exports.userRegister = async function (user) {
	try {
		await usersData.userRegister(user);
	} catch (error) {
		if(error.message.includes("users_email_key")){
			throw new Error('Email já cadastrado'); 
		}
	}
};



// exports.getPost = async function (id) {
// 	const post = await usersData.getPost(id);
// 	if (!post) throw new Error('Post not found');
// 	return post;
// };

// exports.savePost = async function (post) {
// 	const existingPost = await usersData.getPostByTitle(post.title);
// 	if (existingPost) throw new Error('Post already exists');
// 	return usersData.savePost(post);
// };

// exports.deletePost = function (id) {
// 	return usersData.deletePost(id);
// };

// exports.updatePost = async function (id, post) {
// 	await exports.getPost(id);
// 	return usersData.updatePost(id, post);
// };
