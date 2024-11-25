const movies = [
    {
      title: "Dune: Part Two",
      director: "Denis Villeneuve",
      released: 2024,
      review: "The best film of 2024. Can't wait for the next one" 
    },
    { title: "Fight Club",
      director: "David Fincher",
      released: 1999,
      review: "One of my favorite films ever"
    }
];

const { Router } = require('express');
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "My Movies", movies: movies });
});

module.exports = indexRouter;
