// Mongoose is an npm package that makes modeling data in mongodb easier
const mongoose = require('mongoose');

// Collection name is tests, mongoose converts test to tests when it connects. Collection name as test would not work
// Creates a model called Expenditure using the mongoose model convention
const Expenditure = mongoose.model('test', {

    // Attributes of the model

    DATE: {
       // type: String,
        type: Date,
        required: false

    },
    SEQ: {
        type: Number,
        required: false

    },
    PAYEE: {
        type: String,
        required: false,
      
    },
    CATEGORY: {
        type: String,
        required: false,
      

    },
    AGENCY: {
        type: String,
        required: false
    },
    FUNDING: {
        type: String,
        required: false
    },
    TRAN_NO: {
        type: Number,
        required: false
    },
    PO_NO: {
        type: Number,
        required: false
    },
    CHECK_NO: {
        type: Number,
        required: false
    },
    CANCEL_IND: {
        type: String,
        required: false
    },
    TRANS_AMT: {
        type: Number,
        required: false
    },
    RANDOM: {
        type: String,
        required: false
    },
    IMPORT_DATE: {
        type: String,
        required: false
    },
    FYEAR: {
        type: String,
        required: false
    },
    FPERIOD: {
        type: Number,
        required: false
    },
    SOURCE: {
        type: String,
        required: false
    }
 
 
    

});

// Exports the model so that other files can use it
module.exports = Expenditure;