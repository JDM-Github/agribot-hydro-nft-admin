"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface
			.bulkInsert("YoloObjectDetections", [
				{
					version: "ModelV1.0.0",
					accuracy: 0.92,
					recall: 0.89,
					precision: 0.9,
					f1_score: 0.895,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					version: "ModelV1.0.1",
					accuracy: 0.94,
					recall: 0.9,
					precision: 0.92,
					f1_score: 0.91,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					version: "ModelV1.0.2",
					accuracy: 0.95,
					recall: 0.92,
					precision: 0.91,
					f1_score: 0.915,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					version: "ModelV1.0.3",
					accuracy: 0.96,
					recall: 0.93,
					precision: 0.94,
					f1_score: 0.935,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					version: "ModelV1.0.4",
					accuracy: 0.97,
					recall: 0.94,
					precision: 0.96,
					f1_score: 0.95,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			])
			.then(() => {
				return queryInterface.bulkInsert("YoloStageClassifications", [
					{
						version: "ModelV1.0.0",
						accuracy: 0.88,
						recall: 0.85,
						precision: 0.87,
						f1_score: 0.86,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.1",
						accuracy: 0.9,
						recall: 0.86,
						precision: 0.89,
						f1_score: 0.87,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.2",
						accuracy: 0.91,
						recall: 0.88,
						precision: 0.86,
						f1_score: 0.87,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.3",
						accuracy: 0.92,
						recall: 0.89,
						precision: 0.91,
						f1_score: 0.9,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.4",
						accuracy: 0.93,
						recall: 0.9,
						precision: 0.92,
						f1_score: 0.91,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
				]);
			})
			.then(() => {
				return queryInterface.bulkInsert("MaskRCNNSegmentations", [
					{
						version: "ModelV1.0.0",
						accuracy: 0.91,
						recall: 0.88,
						precision: 0.89,
						f1_score: 0.885,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.1",
						accuracy: 0.93,
						recall: 0.9,
						precision: 0.91,
						f1_score: 0.905,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.2",
						accuracy: 0.94,
						recall: 0.91,
						precision: 0.93,
						f1_score: 0.92,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.3",
						accuracy: 0.95,
						recall: 0.93,
						precision: 0.94,
						f1_score: 0.935,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
					{
						version: "ModelV1.0.4",
						accuracy: 0.96,
						recall: 0.94,
						precision: 0.95,
						f1_score: 0.945,
						createdAt: new Date(),
						updatedAt: new Date(),
					},
				]);
			});
	},
	down: async (queryInterface, Sequelize) => {
		return Promise.all([
			queryInterface.bulkDelete("YoloObjectDetections", null, {}),
			queryInterface.bulkDelete("YoloStageClassifications", null, {}),
			queryInterface.bulkDelete("MaskRCNNSegmentations", null, {}),
		]);
	},
};
