"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Plants",
			[
				{
					name: "Tomato",
					confidence: 95.5,
					recall: 92.3,
					mAP50: 90.1,
					mAP50_95: 85.6,
					all_disease: [1, 2, 3],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Potato",
					confidence: 88.2,
					recall: 89.7,
					mAP50: 86.4,
					mAP50_95: 80.2,
					all_disease: [2, 4],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Cucumber",
					confidence: 91.8,
					recall: 90.5,
					mAP50: 88.7,
					mAP50_95: 83.9,
					all_disease: [3, 5],
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Plants", null, {});
	},
};
