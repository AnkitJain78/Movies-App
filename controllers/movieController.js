const { MovieApi } = require("../api/apiConfig");
const { Config } = require("../config/config");

module.exports.HomeController = function (req, res) {
  res.render("home");
};
module.exports.SearchController = function (req, res) {
  res.render("search");
};
module.exports.ErrorController = function (req, res) {
  res.render("error");
};
module.exports.MovieController = function (req, res) {
  const { movieName } = req.body;
  const params = {
    query: movieName,
    api_key: process.env.API_KEY
  };
  MovieApi.get('/search/movie', { params }).then((response) => {
    let responseData = JSON.parse(response.data);
    responseData.results.forEach((element) => {
      if (element.overview.length == 0) {
        element.overview =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam reiciendis voluptatibus error harum distinctio temporibus, quasi voluptatem ullam ut quaerat praesentium quae!";
      }
    });
    res.render("movie", { recipe: responseData.results, name: movieName });
  });
};
