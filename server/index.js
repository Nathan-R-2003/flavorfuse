const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors);
app.use(express.json());

app.listen(5000, () => {console.log("listening from port 5000")});

app.post("/", async (req, res) => {
	res.json("Hello World");
})