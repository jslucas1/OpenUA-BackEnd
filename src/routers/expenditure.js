const express = require('express')
const Expenditure = require('../models/expenditure');
const router = new express.Router()

// =====================================================
//                Expenditure flow path
// =====================================================
//router.post('/expenditures', (req, res) => {
//    const myExpenditure = new Expenditure(req.body);

//    myExpenditure.save().then(() => {
//        res.status(201).send(myExpenditure);
//    }).catch((e) => {
//        res.status(400).send(e);
//    })
//})

//router.put('/expenditures/:id', (req, res) => {
//    const myExpenditure = new Expenditure(req.body);
//    const myId = myExpenditure._id;
//    Expenditure.findOneAndUpdate({"_id": myId}, {"$set": {"favorite": myGame.favorite,
//                                                   "EXPENDITURES_DATE": myExpenditure.EXPENDITURES_DATE,
//                                                   "EXPENDITURES_SEQ": myExpenditure.EXPENDITURES_SEQ
//                                                //   continue this pattern for the other fields
//                                                }}, 
//        {new: true}).then((myExpenditure) => {
//        res.send(myExpenditure);
//    }).catch((e) => {
//        res.status(500).send();
//    })
//})


//Update by ID
//router.put('/expenditures/:id', (req, res) => {
//    const myExpenditure = new Expenditure(req.body);


//    const myId = myExpenditure._id;
//    Expenditure.findOneAndUpdate({ "_id": myId }, {
//        "$set": {
//            "favorite": myGame.favorite,
//            "EXPENDITURES_DATE": myExpenditure.EXPENDITURES_DATE,
//            "EXPENDITURES_SEQ": myExpenditure.EXPENDITURES_SEQ
//            //   continue this pattern for the other fields
//        }
//    },
//        { new: true }).then((myExpenditure) => {
//            res.send(myExpenditure);
//        }).catch((e) => {
//            res.status(500).send();
//        })
//})



// Gets all expenditures
//router.get('/expenditures', (req, res) => {
//    Expenditure.find({}).then((myExpenditures) => {
//        res.send(myExpenditures);
//    }).catch((e) => {
//        res.status(500).send();
//    })
//})





// Recieves JSON object from the midlle layer, does a search query with variables from the JSON object, sends back data from database to middle layer
router.get('/expenditures', async (req, res) => {
    try {

        const myExpenditure = new Expenditure(req.body);
        // const myId = myExpenditure._id;
        //const myId = myExpenditure._id;
        //console.log(myId)
        var startDate = myExpenditure.EXPENDITURES_STARTDATE;
        var endDate = myExpenditure.EXPENDITURES_ENDDATE;
        //var category = myExpenditure.EXPENDITURES_CATEGORY;
        var paye = myExpenditure.EXPENDITURES_PAYE;
        //var transAmount = myExpenditure.EXPENDITURES_TRANS_AMOUNT;

        //var date = myExpenditure.EXPENDITURES_DATE;
        //var seq = myExpenditure.EXPENDITURES_SEQ;
        //var paye = myExpenditure.EXPENDITURES_PAYE;
        //var category = myExpenditure.EXPENDITURES_CATEGORY;
        //var agency = myExpenditure.EXPENDITURES_AGENCY;
        //var fundingSource = myExpenditure.EXPENDITURES_FUNDING_SOURCE;
        //var poNumber = myExpenditure.EXPENDITURES_PO_NUMBER;
        //var checkNumber = myExpenditure.EXPENDITURES_CHECK_NUMBER;
        //var cancelInd = myExpenditure.EXPENDITURES_CANCEL_IND;
        //var transAmount = myExpenditure.EXPENDITURES_TRANS_AMOUNT;
        //var random = myExpenditure.EXPENDITURES_RANDOM;
        //var importDate = myExpenditure.EXPENDITURES_IMPORT_DATE;
        //var fYear = myExpenditure.EXPENDITURES_FYEAR;
        //var fPeriod = myExpenditure.EXPENDITURES_FPERIOD;
        //var source = myExpenditure.EXPENDITURES_SOURCE;
        //fPeriod = null;
        //console.log(source)
        x = "";
        y = "";


        // const myExpenditures = await Expenditure.find({ EXPENDITURES_SOURCE: source, EXPENDITURES_FPERIOD: fPeriod, EXPENDITURES_FYEAR: fYear, EXPENDITURES_IMPORT_DATE: importDate, EXPENDITURES_RANDOM: random, EXPENDITURES_TRANS_AMOUNT: transAmount, EXPENDITURES_CANCEL_IND: cancelInd, EXPENDITURES_PO_NUMBER: poNumber, EXPENDITURES_DATE: date, EXPENDITURES_SEQ: seq, EXPENDITURES_PAYE: paye, EXPENDITURES_CATEGORY: category, EXPENDITURES_TRANS_AMOUNT: transactionAmount, EXPENDITURES_TRANSACTION_NUMBER: transactionNumber, EXPENDITURES_PO_NUMBER: POnumber, EXPENDITURES_CHECK_NUMBER: checkNumber, EXPENDITURES_AGENCY: agency, EXPENDITURES_FUNDING_SOURCE: fundingSource})
        // const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_PAYE": paye, "EXPENDITURES_SOURCE": source, $or: [{ "EXPENDITURES_FPERIOD": fPeriod }, { "EXPENDITURES_FPERIOD": { $ne: "" } } ]  } ]  } )
        //  const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_STARTDATE": { $gte: startDate }, "EXPENDITURES_ENDDATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye }, "EXPENDITURES_SOURCE": { $eq: source, $ne: "" } }] })
        // const myExpenditures = await Expenditure.find({ $or: [{ "EXPENDITURES_PAYE": { $eq: paye } }, { "EXPENDITURES_PAYE": { $ne: "" }  } ] } )
        // const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_STARTDATE": { $gte: startDate }, "EXPENDITURES_ENDDATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye } }] })



        const myExpenditures = await Expenditure.find({})
        res.send(myExpenditures)

    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


// Gets expenditures by id
//router.get('/expenditures/:id', (req, res) => {
//    const _id = req.params.id;
//    Expenditure.findById(_id).then((myExpenditure) => {
//        if(!myExpenditure) {
//            return res.status(404).send();
//        } 
//        res.send(myExpenditure)
//    }).catch((e) => {
//        res.status(500).send();
//    })

// })

 router.get('/expenditures/search/home', (req, res) => {
    Expenditure.find({'EXPENDITURES_PAYEE': 'Ty McElroy'}).then((myExpenditures) => {
        res.send(myExpenditures);
    }).catch((e) => {
        res.status(500).send();
    })
})


module.exports = router