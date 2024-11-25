const movies = [
    {
      title: "Dune: Part Two",
      rating: "10/10",
      review: "The best film of 2024. Can't wait for the next one" 
    },
    { title: "Fight Club",
      rating: "10/10",
      review: "One of my favorite films ever"
    }
];

const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Movies Shelf", movies: movies });
});

indexRouter.post("/new", (req, res) => {
  newMovieTitle = req.body.title;
  newMovieRating = req.body.rating;
  newMovieReview = req.body.review;
  movies.push({ title: newMovieTitle, rating: newMovieRating, review: newMovieReview });

  res.redirect("/");
});

module.exports = indexRouter;
