const express = require("express");
// const { faker } = require('@faker-js/faker');


const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require("./configs/mongoose.config");

const Routes = require("./routes/faker.routes");
Routes(app);

app.listen(port, () => console.log(`We're live on port ${port}`));