const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form", { pageTitle: "Add new movie" });
});

module.exports = newRouter;
