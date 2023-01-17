const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    title: String,
    year : Number,
    genre: [String],
    director: [String],
    ast: [String]
});

