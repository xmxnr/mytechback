const { user } = require('../models');

const getAllUserServices = async () => {
	return user.findAll();
};

const createUserService = async (body) => {
	return user.create(body);
};

const getOneUserSevice = async (id) => {
	return await user.findByPk(id);
};

const updateUserService = async (body, id) => {
	return await user.update(body, { where: { id }, returning: true });
};

const deleteUserService = async (id) => {
	return await user.destroy({ where: { id } });
};

module.exports = {
	getAllUserServices,
	createUserService,
	getOneUserSevice,
	updateUserService,
	deleteUserService,
};
