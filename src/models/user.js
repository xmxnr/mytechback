'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.belongsTo(models.role);
			User.belongsTo(models.city);
		}
	}
	User.init(
		{
			userName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			firstName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			age: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			mail: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			company: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			phoneNumber: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			roleId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'role',
					key: 'id',
				},
			},
			cityId: {
				type: DataTypes.STRING,
				allowNull: false,
				references: {
					model: 'city',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
