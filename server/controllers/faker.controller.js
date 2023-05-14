// Create new user
module.exports = (req, res) => {
    const newPerson = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        _id: faker.database.mongodbObjectId()
    }

    res.json(newPerson);
}

// Create new company
module.exports = (req, res) => {
    
}