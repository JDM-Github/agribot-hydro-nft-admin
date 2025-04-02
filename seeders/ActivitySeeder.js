
// Author: JDM
// Created on: 2025-04-01T08:22:48.211Z

"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Activities",
			[
				{
					type: "robot-update",
					repo: "Test",
					details:
						"Calibrated soil moisture sensor for better accuracy",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					type: "object-detection-model",
					repo: "Test",
					details: "Trained AI to detect early-stage leaf diseases",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					type: "classification-model",
					repo: "Test",
					details: "Fixed motor response issue in autonomous sprayer",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					type: "segmentation-model",
					repo: "Test",
					details:
						"Improved segmentation accuracy for leaf disease detection",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},
	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Activities", null, {});
	},
};
