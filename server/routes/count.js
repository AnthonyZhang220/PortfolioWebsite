const express = require("express");

// countRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /count.
const countRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
countRoutes.route("/count").get(function (req, res) {
	let db_connect = dbo.getDb("COUNT");
	db_connect
		.collection("count")
		.find({})
		.toArray(function (err, result) {
			if (err) throw err;
			res.json(result);
		});
});

// This section will help you update a count by like.
countRoutes.route("/update/like").post(function (req, response) {
	let db_connect = dbo.getDb();
	let newvalues = {
		$inc: {
			like: 1,
		},
	};
	db_connect.collection("count").updateOne({}, newvalues, function (err, res) {
		if (err) throw err;
		response.json(res);
	});
});

// This section will help you update a count by fav.
countRoutes.route("/update/fav").post(function (req, response) {
	let db_connect = dbo.getDb();
	let newvalues = {
		$inc: {
			fav: 1,
		},
	};
	db_connect
		.collection("count")
		.updateOne({}, newvalues, function (err, res) {
			if (err) throw err;
			response.json(res);
		});
});

module.exports = countRoutes;
