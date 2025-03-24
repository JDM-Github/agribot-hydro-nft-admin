"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const hashedPassword = await bcrypt.hash("123", 10);

		return queryInterface.bulkInsert(
			"Users",
			[
				{
					profileImage: "",
					userName: "user1",
					email: "user1@example.com",
					password: hashedPassword,
					publicKey:
						"-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAufW1bKmQxlYnVaWRHUxy\r\nasRYuJHT+SF63vPakEiS35/FGLQAo9aF1uX+e4mmdOxptXLdpGVifWOzmJUs6tbp\r\ndky2pJ/pHmGYJKRIzgJwq4O6WHGa5JjUIiBReASiQBqNK647ofUGj9AOsClW87fL\r\nhulcn1NuFc5jhOGM3IsGEzx6GNXKsUgETRyuYp97cOSMR6Y0hi18NC6vJ3uZfNz3\r\n/TJPTF1Jgetpoqv5aML3cKKy/OGxlmGM2DWw0F8WOMcqZrIH+Uh5lRAOHR9AGWxd\r\nFz0E4QjJcWDp8aZHWxprwJow2XtWlYpVWz9/fQNQlmTY8OdK7V4/3eT1TK+/tfFJ\r\n1wIDAQAB\r\n-----END PUBLIC KEY-----\r\n",
					privateKey:
						"-----BEGIN RSA PRIVATE KEY-----\r\nMIIEowIBAAKCAQEAufW1bKmQxlYnVaWRHUxyasRYuJHT+SF63vPakEiS35/FGLQA\r\no9aF1uX+e4mmdOxptXLdpGVifWOzmJUs6tbpdky2pJ/pHmGYJKRIzgJwq4O6WHGa\r\n5JjUIiBReASiQBqNK647ofUGj9AOsClW87fLhulcn1NuFc5jhOGM3IsGEzx6GNXK\r\nsUgETRyuYp97cOSMR6Y0hi18NC6vJ3uZfNz3/TJPTF1Jgetpoqv5aML3cKKy/OGx\r\nlmGM2DWw0F8WOMcqZrIH+Uh5lRAOHR9AGWxdFz0E4QjJcWDp8aZHWxprwJow2XtW\r\nlYpVWz9/fQNQlmTY8OdK7V4/3eT1TK+/tfFJ1wIDAQABAoIBAEayHbXgxPRR/oQ1\r\n/HQqAvmKCbypW+/DhaXLCRV/Ma8oW1Ln47JltN4c8+FdVFXxJsLfl1mPXaETzUw9\r\nsiTZbUoXIfx1+rcdHS0Y88C19sWNv8Mt9Vfgrg0HQlGhWVmLfo3ToEITF9qGm37n\r\nSHJBNnPktdywaBKMMxNqeBXEGJwo42IJNLjce5lsS4l31isj/+5YmOc7+62OQCbl\r\nOhwo0lf7k45puTynKGhDUl+UmhSvjPPsN6W8UsYntDwySQRN7RcgX4acsoDEi9Vu\r\n1olOY7FPvrSDNMAGCZH4WMiA05iQqVC22OPcuK5ZeZ5mwm5F98n/cmLFCgk0R4Ax\r\nZ2RR5ZkCgYEA+MkAkcourD3O9TbNk8yuLKic6knFRWoql1AFbLkYIDMpltf4gMOQ\r\nOvH2bKEiBSSke/ssHQSCug6UBeVBwI3BPcdGA0OIbf4qwTP+CRmkKn7Yrexk096H\r\nYXvFSHUI/WQk4gP5bJM9d6DWWo3U74AOGVmqYDrhqPGePieZIhAhGvsCgYEAv1pJ\r\nZ0h48pCgAWLG16yoGyVAmO70rv1z+trEKVwYdIZqYNSDSKRgiPYmZJsWTMunEQvU\r\nD2rbVb89F7M+kmWq/LEz/iT5W5CTfDd4Htyh2gIDh3C99mILxXkTQ2H3npPRIuJe\r\nufynLV5TPQpio6iBiFfByc4Pa5ySAL1IGqpp1dUCgYAVS896q133bIsMvpY2cqzu\r\nMbjM7Wevm3jt3vG37tg72WVT/kTNcPAlu5Smk9x/qDVUT5nlGf++wYS2RHuuafQC\r\nv84kdWF2WO18AGFckg9Ve+o8aSHwaPoZxCiNHUeZuTrXBhQR0UDPvrraoY16uvF6\r\nBgzpk+DBP32WQHmBSvQqhQKBgQC5tjGpaL/hgxWXYrtjFHGurs/r3XZh4yBN5UYe\r\ncgBWDyJtSbMErGv4YRVP7OiOrdQ+CgHM2MN4i/sJ5m+i+8MgLgcs78uG32EUXG1b\r\nXnxCrlOofnYPCocsJ17Xtdvx7ro5pgOTdC74LCSTCGJFPcRBhBJS/ocexL06tHmn\r\nT58Z5QKBgHE4ePCNHQ+QeYNWpxfEXrJpGY+PKFZqeGeSDN5YBBLHjsp3TmFj8/Ox\r\nSAgLOlre5UtOXyzLaw3POxWsRgbcdRuRdx0DuCOGOua9qVyp6OXogGaB2hg0CFl4\r\n6vXdjXZZAsPc409DLPZZy6ocH0IFl4zrNgg6JsYQb9ue++cvAoCS\r\n-----END RSA PRIVATE KEY-----\r\n",
					allChatIds: [],
					isVerified: true,
					verificationCode: "123456",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					profileImage: "",
					userName: "user2",
					email: "user2@example.com",
					password: hashedPassword,
					publicKey:
						"-----BEGIN PUBLIC KEY-----\r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAt5WoB7j7WWu5L7iqhV72\r\nnWjhLsEge9f43n5QgMKBBsIVwI67psApoXy8STCiuhubWWQA34Jv663MURqHtugy\r\nHOQ0EBxu3veumS62U8nzht76Qv70Xyf7Buh83o8tbTnOjBygAHeqWkvkxEJrXieh\r\nivmjCl1c0LnPMZCKdSnDC1bRzGUp3axrnwjAPvzBXAISOfvVbUQ+94GAUALObhkU\r\n9YzXas//waQHonTATPBcfVO6ejVdSsmV4TPFtbRV6EB0Pjq0EsDpfw5BRZkKzZYh\r\nUjqMFXpKsDFId7CGVVaWtpoh0/66tP+ybGPaX2724ZGRLbbi6s364Z4PPOQqADVV\r\nUQIDAQAB\r\n-----END PUBLIC KEY-----\r\n",
					privateKey:
						"-----BEGIN RSA PRIVATE KEY-----\r\nMIIEogIBAAKCAQEAt5WoB7j7WWu5L7iqhV72nWjhLsEge9f43n5QgMKBBsIVwI67\r\npsApoXy8STCiuhubWWQA34Jv663MURqHtugyHOQ0EBxu3veumS62U8nzht76Qv70\r\nXyf7Buh83o8tbTnOjBygAHeqWkvkxEJrXiehivmjCl1c0LnPMZCKdSnDC1bRzGUp\r\n3axrnwjAPvzBXAISOfvVbUQ+94GAUALObhkU9YzXas//waQHonTATPBcfVO6ejVd\r\nSsmV4TPFtbRV6EB0Pjq0EsDpfw5BRZkKzZYhUjqMFXpKsDFId7CGVVaWtpoh0/66\r\ntP+ybGPaX2724ZGRLbbi6s364Z4PPOQqADVVUQIDAQABAoIBAAkT58BDAb2/FYQC\r\nMv9fjd0EfL8HunQZPrN8xj0JsSDdC7+O50FEdwKG1RYe5ysB9rVtvBvROrjKCiR4\r\nBf4xvtmeIKNrzoEsuOfW7xnXTnkMsU4LBpkmdFOX/yWvqYDBRyD3QOOpByXKIyyf\r\ntqisF8E0HR9j9LUW/QNvyOLoft4idirJ/4C3PcGNc413jv8zCDQBCRWfJCHumORu\r\nKmu1lxVmKbsmuFqY6Z+PDHNkhw4jnqK1jE7AkY5u79BbJ0brUsjsfHCLqag4cmoz\r\nBgDLfvWEHewvak3uy0Z+yKRWSC+WEVQ/RoVfm/lzbgDwJv/r4D34bj34k2D5ahFA\r\nzorB0KkCgYEA9H263nT2qeMODFNkYjjeBQ9S34Q2dBKRh/upEjJChvmoyIcFJM44\r\nL5LAztHMTf/VrmAjTWGxokO8COSszXRBhOLeX1Wqpb7wL2zNt85zrwyS0wP9/vap\r\ne5kS/JLv3kNbfTzQWrCHgiPOC1PPRYy+3S8uL6GwtEkhc/yu2Z2EKOkCgYEAwDn2\r\n/NHTc7igEy/34cm5Q9Hl1Kt3ujNLUwafZxq/UPMc0TKntgY2Hk/Qso35NvQDgsxz\r\nhgRgiRPV5v9iMQHn/W2vtBhy7BAiIJuWEvRFxIRaZkPtmSTesMXskuJF0P/CsXtR\r\nCJry3QaUr8hqILESZr9LBDTG8ZxOCMv0Rqx3iCkCgYAkEEO3OqODzbUtxkNBZcgC\r\nEQ+VXsg1eOO0nj+DKpy7kin+YkQ0+KI7Cjecij/LpZgcX5v1dxqfp8Qdv7VpnONp\r\nOZm5kEZaqn59UFxL540S3hTuQWF+8V1wmNS/IuF09JSTNZw6NF3YqXVkIFmrlaY1\r\ntBbo+b256iugEz6rZNuwuQKBgGfeqoSgiQcN64mSsPpTu4VXJT7OzKpTz0701Cut\r\ne1WtmJO+MHueTZ4BeP8S0miMYF1MRtxS/yrzCfGBbDiZFBeQLpI9Z9QBP7+o8uYZ\r\nEp4G+qYp7HiFQMP6n0Qbeqhdm4G15eqld7hRNwTpYdd6dzwH/+ws7Jdf45bDRqLt\r\nzMVJAoGAHTbPXcxUwjiLV+dfYVGqUhZXPq2CG2LtuYbufZn9Pr+anb/DpA6QjO3U\r\nmA34uAwBQ1n3ajaMeBC78gCZ70wbwJDhBnYlOD0S9LHzja9DvhwDoIdPquiBJ9uu\r\nGDAXb6HelDLai3Txam6cpoOhPQF2Jt+vR/5BGD4Xzmn00/w/WOg=\r\n-----END RSA PRIVATE KEY-----\r\n",
					allChatIds: [],
					isVerified: true,
					verificationCode: "654321",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					profileImage: "",
					userName: "user3",
					email: "user3@example.com",
					password: hashedPassword,
					publicKey:
						"-----BEGIN PUBLIC KEY-----\IC KEY-----\r\n",
					privateKey:
						"-----BEGIN RSA PRIVATE KEY-----\r\nMlOD0S9LHzja9DvhwDoIdPquiBJ9uu\r\nGDAXb6HelDLai3Txam6cpoOhPQF2Jt+vR/5BGD4Xzmn00/w/WOg=\r\n-----END RSA PRIVATE KEY-----\r\n",
					allChatIds: [],
					isVerified: true,
					verificationCode: "2313",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", {
			username: { [Sequelize.Op.in]: ["test1", "test2"] },
		});
	},
};
