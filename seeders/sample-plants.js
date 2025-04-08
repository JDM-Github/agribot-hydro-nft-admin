"use strict";

const { faker } = require("@faker-js/faker");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const plants = Array.from({ length: 5 }).map(() => ({
			name: faker.person.firstName(),
			description: faker.lorem.sentence(),
			image: faker.image.url({ width: 200, height: 200 }),
			latest_precision: faker.number.float({
				min: 80,
				max: 99,
				precision: 0.1,
			}),
			latest_recall: faker.number.float({ min: 80, max: 99, precision: 0.1 }),
			latest_f1_score: faker.number.float({
				min: 80,
				max: 99,
				precision: 0.1,
			}),
			latest_accuracy: faker.number.float({ min: 80, max: 99, precision: 0.1 }),
			latest_version: "ModelV1.0.4",
			all_version: ["ModelV1.0.0", "ModelV1.0.1", "ModelV1.0.2", "ModelV1.0.3", "ModelV1.0.4"],
			all_precision: [faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 })],
			all_recall: [faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 })],
			all_f1_score: [faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), 	faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 })],
			all_accuracy: [faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 }), faker.number.float({ min: 80, max: 99, precision: 0.1 })],
			all_images: Array.from(
				{ length: faker.number.int({ min: 1, max: 5 }) },
				() => faker.image.url({ width: 200, height: 200 })
			),
			createdAt: new Date(),
			updatedAt: new Date(),
		}));

		return queryInterface.bulkInsert("Plants", plants, {});
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Plants", null, {});
	},
};
