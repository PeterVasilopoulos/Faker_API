const express = require("express");
const {faker} = require("@faker-js/faker");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./configs/mongoose.config");

const Routes = require