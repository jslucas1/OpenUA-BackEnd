const mongoose = require('mongoose');

//const connectionURL = 'mongodb://127.0.0.1:27017/swami';  //that's the localhost IP and port

// Jeff's database, name of paye document is paye with single e, should be changed in future to two e's
/*const connectionURL = 'mongodb+srv://swamiapp:Rolltide1!@cluster0-s02ok.mongodb.net/Open-UA?retryWrites=true&w=majority'; *///that's the mongo url
const connectionURL = 'mongodb+srv://OpenAdmin:m15C4pst0n3@cluster0-z4nqv.azure.mongodb.net/TestUAOpen?retryWrites=true&w=majority';



//const connectionURL = 'mongodb+srv://OpenAdmin:Rolltide1@cluster0-z4nqv.azure.mongodb.net/Open-UA?retryWrites=true&w=majority';
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
