const mongoose = require('mongoose');
const validator = require('validator');

const Expenditure = mongoose.model('expenditures', {

    EXPENDITURES_DATE: {
        type: String,
        required: false

    },
    EXPENDITURES_SEQ: {
        type: Number,
        required: false

    },
    EXPENDITURES_PAYEE: {
        type: String,
        required: false
    },
    EXPENDITURES_CATEGORY: {
        type: String,
        required: false

    },
    EXPENDITURES_AGENCY: {
        type: String,
        required: false
    },
    EXPENDITURES_FUNDING_SOURCE: {
        type: String,
        required: false
    },
    EXPENDITURES_TRANSACTION_NUMBER: {
        type: Number,
        required: false
    },
    EXPENDITURES_PO_NUMBER: {
        type: Number,
        required: false
    },
    EXPENDITURES_CHECK_NUMBER: {
        type: Number,
        required: false
    },
    EXPENDITURES_CANCEL_IND: {
        type: String,
        required: false
    },
    EXPENDITURES_TRANS_AMOUNT: {
        type: Number,
        required: false
    },
    EXPENDITURES_RANDOM: {
        type: String,
        required: false
    },
    EXPENDITURES_IMPORT_DATE: {
        type: String,
        required: false
    },
    EXPENDITURES_FYEAR: {
        type: String,
        required: false
    },
    EXPENDITURES_FPERIOD: {
        type: Number,
        required: false
    },
    EXPENDITURES_SOURCE: {
        type: String,
        required: false
    }
 
 
    

});

module.exports = Expenditure;