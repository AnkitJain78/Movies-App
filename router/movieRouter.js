const express = require("express");
const {
  ErrorController,
  HomeController,
  SearchController,
  MovieController
} = require("../controllers/movieController");
const Router = express.Router();
Router.get("/", HomeController);
Router.get("/search", SearchController);
Router.post("/movies", MovieController);
Router.get("*", ErrorController);
module.exports = Router;
