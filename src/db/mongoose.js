// Mongoose is an npm package that makes modeling data in mongodb easier
const mongoose = require('mongoose');

// This is the connection URL that was used for testing purposes, it connects to a cloud mongodb database. "m15C4pst0n3" was the password for the
// cloud account, "@cluster0-z4nqv.azure.mongodb.net" was the cluster address that the database was in, and "TestUAOpen" was the name
// of the database
const connectionURL = 'mongodb+srv://OpenAdmin:m15C4pst0n3@cluster0-z4nqv.azure.mongodb.net/TestUAOpen?retryWrites=true&w=majority';

// Connection string to connect to the database hosted on MongoDB, connection string uses mongoose npm package
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
