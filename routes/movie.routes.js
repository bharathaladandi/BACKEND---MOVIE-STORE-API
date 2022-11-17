const { Router } = require("express");

const MovieModel = require("../models/Movie");


const movieRouter = Router();




movieRouter.get("/searchbytitle/:title", async (req, res) => {

    let title = req.params.title;
    console.log('title:', title);

    const movies = await MovieModel.find({ title: new RegExp(title, "i") });
    res.send(movies)

});
movieRouter.get("/", async (req, res) => {

    const movies = await MovieModel.find();
    res.send(movies);

});
movieRouter.get("/search", async (req, res) => {
    const { query, perPage, pageNo } = req.query;
    console.log('pageNo:', pageNo)
    console.log('perPage:', perPage)
    // console.log(req);
    console.log("query", query);

    const movies = await MovieModel.find({ title: new RegExp(query, "i") }).skip((pageNo - 1) * perPage).limit(perPage);
    // console.log('movies:', movies)
    res.send(movies);

});

movieRouter.post("/", async (req, res) => {

    const movie = await new MovieModel(req.body);
    movie.save((err, success) => {

        if (err) {
            return res.status(501).send({ message: "Something went wrong while saving to db" });

        }


        res.status(201).send(success);

    })
});

movieRouter.delete("/:title", async (req, res) => {

    let title = req.params.title;
    // console.log('title:', title);

    const movie = await MovieModel.findOneAndDelete({ title });

    res.send(movie);

});
movieRouter.patch("/:title", async (req, res) => {

    let title = req.params.title;
    console.log('title:', title);

    const movie = await MovieModel.findOneAndUpdate({ title }, req.body, { new: true });

    res.send(movie);

});



module.exports = movieRouter;