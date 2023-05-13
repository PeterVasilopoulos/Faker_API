const mongoose = require("mongoose");

const dbName = "fakerApiDb";

const uri = `mongodb://127.0.0.1/${dbName}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Link established to database: ${dbName}`))
.catch((err) => console.log("It's over lad!", err));