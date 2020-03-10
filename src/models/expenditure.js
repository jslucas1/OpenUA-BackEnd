const mongoose = require('mongoose');


// Collection name is tests, mongoose converts test to tests when it connects. Collection name as test would not work
const Expenditure = mongoose.model('expenditure', {

    //EXPENDITURES_DATE: {
    //    type: String,
    //    required: false

    //},
    //EXPENDITURES_SEQ: {
    //    type: Number,
    //    required: false

    //},
    //EXPENDITURES_PAYEE: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_CATEGORY: {
    //    type: String,
    //    required: false

    //},
    //EXPENDITURES_AGENCY: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_FUNDING_SOURCE: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_TRANSACTION_NUMBER: {
    //    type: Number,
    //    required: false
    //},
    //EXPENDITURES_PO_NUMBER: {
    //    type: Number,
    //    required: false
    //},
    //EXPENDITURES_CHECK_NUMBER: {
    //    type: Number,
    //    required: false
    //},
    //EXPENDITURES_CANCEL_IND: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_TRANS_AMOUNT: {
    //    type: Number,
    //    required: false
    //},
    //EXPENDITURES_RANDOM: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_IMPORT_DATE: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_FYEAR: {
    //    type: String,
    //    required: false
    //},
    //EXPENDITURES_FPERIOD: {
    //    type: Number,
    //    required: false
    //},
    //EXPENDITURES_SOURCE: {
    //    type: String,
    //    required: false
    //}




    DATE: {
        type: String,
        required: false

    },
    SEQ: {
        type: Number,
        required: false

    },
    PAYEE: {
        type: String,
        required: false,
        lowercase: true
    },
    CATEGORY: {
        type: String,
        required: false,
        lowercase: true

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

module.exports = Expenditure;