const express = require('express');
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const User = require('./models/User');
const cors = require('cors');
app.use(cors());
app.use(express.json());

// handle db connection
var connecionString ="mongodb+srv://na707413:123password123@cluster0.8aeumbk.mongodb.net/test" 

try {
    mongoose.connect(connecionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connection succesful!");
} catch(error) {
    console.error(error);
}


app.listen(5000, () => {
	console.log("listening from port 5000");
})

app.get("/", async (req, res) => {
	res.send("Hello World");
})

app.post("/users", async (req, res) => {
    try{
        console.log(req.body);
        const user = User.create(req.body)
        res.status(200).json(user);
    }catch(e){
        console.log(e);
    }
})