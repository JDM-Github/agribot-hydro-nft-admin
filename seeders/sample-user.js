"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const hashedPassword = await bcrypt.hash("123", 10);

		return queryInterface.bulkInsert(
			"AdminUsers",
			[
				{
					fullName: "John Dave Pega",
					username: "JDM",
					email: "jdmaster888@gmail.com",
					bio: "Administrator",
					profileImage: "",
					socialLinks: JSON.stringify({}),
					password: hashedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: "Baby Joy Maquilla",
					username: "Bajoy",
					email: "",
					bio: "Administrator",
					profileImage: "",
					socialLinks: JSON.stringify({}),
					password: hashedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: "Twinnie Hipolito",
					username: "Twinnie",
					email: "",
					bio: "Administrator",
					profileImage: "",
					socialLinks: JSON.stringify({}),
					password: hashedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: "Lowella Marie Golez",
					username: "Lowella",
					email: "",
					bio: "Administrator",
					profileImage: "",
					socialLinks: JSON.stringify({}),
					password: hashedPassword,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("AdminUsers", {
			username: {
				[Sequelize.Op.in]: ["JDM", "Bajoy", "Twinnie", "Lowella"],
			},
		});
	},
};
