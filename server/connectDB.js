const mongoose = require('mongoose');

const connecionString ="mongodb+srv://na707413:123password123@cluster0.8aeumbk.mongodb.net/test" 

const connectDB = async()=>{
    try {
        await mongoose.connect(connecionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(error) {
        console.error(error);
    }
}

module.exports = connectDB