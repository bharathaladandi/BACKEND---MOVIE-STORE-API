const express = require("express");


const connection = require("./db");




app.use(express.json());

const movieRouter = require("./routes/movie.routes");




app.listen(8080, async () => {
    try {
        await connection
    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log("server running on port 8080");
})