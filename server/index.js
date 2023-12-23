const express = require('express');
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('./connectDB');
const User = require('./models/User');
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connects to DB
connectDB();


app.listen(5000, () => {
	console.log("listening from port 5000");
})

app.get("/", async (req, res) => {
	res.send("Hello World");
})

// creates a new user
app.post("/signup", async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user);
    }catch(e){
        console.error(e);
    }
})



app.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(!user) {
            res.status(401).json({msg: "Wrong email!"});
        } else if(user.password != req.body.password) {
            res.status(402).json({msg: "Wrong password!"});
        } else {
            res.status(200).json(user);
        }
    }catch(e){
        console.error(e);
    }
})