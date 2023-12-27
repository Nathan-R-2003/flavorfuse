const express = require('express');
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const connectDB = require('./connectDB');
const User = require('./models/User');
const Recipe = require('./models/Recipe');
const cors = require('cors');
var bcrypt = require('bcryptjs');
app.use(cors());
app.use(express.json());

// connects to DB
connectDB();


app.listen(5000, () => {
	console.log("listening from port 5000");
})

// Global middleware function (logs the time, along with request method and route)
app.use( (req, res, next) => { 
    //console.log('Time:', Date.now(), '; Request Type:', req.method);
    console.log('Request Type:', req.method, ', Route:', req.path);
    next()
})

app.get("/", async (req, res) => {
	res.send("Hello World");
})

// creates a new user
app.post("/signup", async (req, res) => {
    try{
        const verify = await User.findOne({email: req.body.email});

        if(verify != null)
        {
            res.status(200).json({msg: "Email in use!"})
            return;
        }

        var salt = bcrypt.genSaltSync(10);
		var hash = bcrypt.hashSync(req.body.password, salt);

        const user = await User.create({name: req.body.name,
                                        email: req.body.email, 
                                        password: hash})
        res.status(200).json({msg: "User created!", name: user.name, email: user.email});
    }catch(e){
        console.error(e);
    }
})



app.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});

        if(!user) {
            res.status(200).json({msg: "Wrong email!"});
            return;
        } else if(!bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json({msg: "Wrong password!"});
            return;
        } else {
            res.status(200).json({msg: "Correct info!", name: user.name, id: user._id});
        }
    }catch(e){
        console.error(e);
    }
})

app.post('/new_recipe', async (req,res) =>{
    try{
        const recipe = await Recipe.create(req.body);

        if(recipe == null)
            res.status(200).json({msg: "Something went wrong!"})

        res.status(200).json({msg: "Recipe created succesfully!"});

    }catch(e){
        console.error(e);
    }
})

app.get('/get_recipes', async (req,res) => {
    try{
        const recipes = await Recipe.find();

        res.status(200).json(recipes);

    }catch(e){
        console.error(e)
    }
})

    