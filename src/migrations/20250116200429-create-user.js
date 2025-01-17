'use strict';

const { SMALLINT } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			firstName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			lastName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			age: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			mail: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			company: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			phoneNumber: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			roleId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Roles',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			cityId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Cities',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Users');
	},
};
