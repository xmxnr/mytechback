const {
	getAllCityServices,
	createCityService,
	getOneCityService,
} = require('../services/city.services');
const catchError = require('../utils/catchError');

const getAll = catchError(async (req, res) => {
	const results = await getAllCityServices.findAll();
	return res.json(results);
});

const create = catchError(async (req, res) => {
	const result = await createCityService.create(req.body);
	return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await getOneCityService.findByPk(id);
	if (!result) return res.sendStatus(404);
	return res.json(result);
});

const remove = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await model.destroy(id);
	if (!result) return res.sendStatus(404);
	return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
	const { id } = req.params;
	const result = await model.update(req.body, id);
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
