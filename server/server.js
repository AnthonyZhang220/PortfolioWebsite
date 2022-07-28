const express = require("express");
const cors = require("cors");
const router = express.Router();
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());
app.use(require("./routes/count"));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const dbo = require("./db/conn");

//POST route
router.post("/recaptcha", async (req, res) => {
	const { captchaToken } = req.body;

	//sends secret key and response token to google
	await axios.post(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${captchaToken}`
	);

	//check response status and send back to client
	if (res.status(200)) {
		res.send("Human");
	} else {
		res.send("Robot");
	}
});

app.listen(port, () => {
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log(`Server started on port ${port}`);
});
