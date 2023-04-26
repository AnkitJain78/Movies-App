const express = require("express");
const { engine } = require("express-handlebars");
const dotenv = require("dotenv");
dotenv.config();
const Router = require("./router/movieRouter");
const { handlebars } = require("hbs");
const PORT = process.env.PORT || 5000;
const app = express();
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    extname: ".hbs",
    helpers: {
      trimString: function (passedString) {
        var theString = passedString.substring(0, 150);
        return new handlebars.SafeString(theString);
      },
      getPosterPath: function (path) {
        if (path === null) {
          return "https://cringemdb.com/img/movie-poster-placeholder.png";
        } else {
          return `https://image.tmdb.org/t/p/original/${path}`;
        }
      }
    }
  })
);
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", Router);
app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
