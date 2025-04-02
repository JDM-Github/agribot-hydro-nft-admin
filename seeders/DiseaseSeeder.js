
// Author: JDM
// Created on: 2025-04-01T16:13:09.641Z
"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const diseases = Array.from({ length: 5 }).map(() => ({
			name: faker.person.firstName(),
			description: faker.lorem.sentence(),
			image: faker.image.url({ width: 200, height: 200 }),
			confidence: faker.number.float({
				min: 80,
				max: 99,
				precision: 0.1,
			}),
			recall: faker.number.float({ min: 80, max: 99, precision: 0.1 }),
			mAP50: faker.number.float({ min: 80, max: 99, precision: 0.1 }),
			mAP50_95: faker.number.float({ min: 75, max: 95, precision: 0.1 }),
			all_images: Array.from(
				{ length: faker.number.int({ min: 1, max: 5 }) },
				() => faker.image.url({ width: 200, height: 200 })
			),
			createdAt: new Date(),
			updatedAt: new Date(),
		}));

		return queryInterface.bulkInsert("Diseases", diseases, {});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Diseases", null, {});
	},
};
