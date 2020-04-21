// Mongoose is an npm package that makes modeling data in mongodb easier
const mongoose = require('mongoose');

// Jeff's database, name of paye document is paye with single e, should be changed in future to two e's
const connectionURL = 'mongodb+srv://OpenAdmin:m15C4pst0n3@cluster0-z4nqv.azure.mongodb.net/TestUAOpen?retryWrites=true&w=majority';

// Connection string to connect to the database hosted on MongoDB, connection string uses mongoose npm package
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
