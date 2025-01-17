const catchError = require('../utils/catchError');
const user = require('../models/user');
const {
	getAllUserServices,
	createUserService,
	getOneUserSevice,
	deleteUserService,
	updateUserService,
} = require('../services/user.services.js');

const getAll = catchError(async (req, res) => {
	const results = await getAllUserServices();
	return res.json(results);
});

const create = catchError(async (req, res) => {
	const result = await createUserService(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await getOneUserSevice(id);
	if (!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await deleteUserService(id);
	if (!result) return res.sendStatus(404);
	return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await updateUserService(req.body, id);
	if (result[0] === 0) return res.sendStatus(404);
	return res.json(result[1][0]);
});

module.exports = {
	getAll,
	create,
	getOne,
	remove,
	update,
};
