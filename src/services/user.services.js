const { user } = require('../models/user');
const { city } = require('../models/city');
const { role } = require('../models/role');

const getAllUserServices = async () => {
	return user.findAll({ include: [city, role] });
};

const createUserService = async (body) => {
	return user.create(body);
};

const getOneUserSevice = async (id) => {
	return await user.findByPk(id, { include: [city, role] });
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
