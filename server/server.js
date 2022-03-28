const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongodb = require('mongodb');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index/html");
});

app.post

app.post("/submit", (req, res) => {
	if (
		req.body.captcha === undefined ||
		req.body.captcha === "" ||
		req.body.captcha === null
	) {
		return res.json({ "success": false, "msg": "Please tick!" });
	}

	const secretKey = process.env.REACT_APP_SECRET_KEY;

	const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;

	request(verifyUrl, (err, response, body) => {
		body = JSON.parse(body);

		if (body.success !== undefined && !body.success) {
			return res.json({ "success": false, "msg": "Failed!" });
		}

		return res.json({ "success": true, "msg": "Success!" });
	});
});

app.listen(5000, () => {
	console.log("Server started on port 5000");
});
