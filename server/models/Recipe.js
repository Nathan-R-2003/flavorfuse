const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	recipe: {
		type: String,
		require: true
	}

})

const Recipe = mongoose.model("Recipe", Schema);

module.exports = Recipe;