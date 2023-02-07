const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    title: String,
    year : Number,
    genre: [String],
    director: [String],
    cast: [String],
    plot: String,
    image: String,
    rating: Number,
    runtime: String
});

const MovieModel = mongoose.model("movie", movieSchema);


module.exports = MovieModel;