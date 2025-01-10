'use strict';
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
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			age: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			company: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			roleId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'roles',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
      cityId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'cities',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			},
			createdAt: {
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
