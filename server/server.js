const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/count"));

const dbo = require("./db/conn");


app.listen(port, () => {
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log(`Server started on port ${port}`);
});
