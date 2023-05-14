// Import faker controller
const FakerController = require("../controllers/faker.controller");

// Get new user
module.exports = (app) => {
    app.get("/api/users/new", FakerController.createUser);
}

// Get new company
module.exports = (app) => {
    app.get("/api/companies/new", FakerController.createCompany);
}

// Get new company and user
module.exports = (app) => {
    app.get("/api/user/company", FakerController.createUser, FakerController.createCompany);
}