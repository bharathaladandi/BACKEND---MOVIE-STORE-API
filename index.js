const express = require("express");


const connection = require("./db");


const movieRouter = require("./routes/movie.routes");

const app = express();

app.use(express.json());

app.use("./movie", movieRouter);


app.listen(8080, async () => {
    try { 
        await connection()
    } catch (err) {
        console.log("error while connecting to db", err);
    }
    console.log("server listening running on port 8080");
})