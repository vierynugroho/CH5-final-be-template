require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const errorController = require("./controllers/errorController");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/public`));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(router);

app.use(errorController.onLost);
app.use(errorController.onError);

module.exports = app;
