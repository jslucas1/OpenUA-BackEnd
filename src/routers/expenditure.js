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



// Recieves JSON object from the midlle layer, does a search query with variables from the JSON object, sends back data from database to middle layer
router.get('/expenditures/:payee', async (req, res) => {
    try {

        //var category = req.query.category

      //   const payees = req.query.payees 
        const payees = req.params.payee

        //var amounts = req.query.amounts
        //var transNumber = req.query.transNumber
        //var startDate = req.query.startDate
        //var poNumber = req.query.poNumber
        //var checkNumber = req.query.checkNumber
        //var agency = req.query.agency
        //var fundingSource = req.query.fundingSource
        //var checkNumber = req.query.checkNumber
        //var endDate = req.query.endDate
        

  




      //  const myExpenditure = new Expenditure(req.body);
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
    


       
        // const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_STARTDATE": { $gte: startDate }, "EXPENDITURES_ENDDATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye } }] })


        const myExpenditures = await Expenditure.find({"EXPENDITURES_PAYE": payees})
       // const myExpenditures = await Expenditure.find({})
        res.send(myExpenditures)

    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


// Gets expenditures by id
router.get('/expenditures/:id', (req, res) => {
   const _id = req.params.id;
   Expenditure.findById(_id).then((myExpenditure) => {
       if(!myExpenditure) {
           return res.status(404).send();
       } 
       res.send(myExpenditure)
   }).catch((e) => {
       res.status(500).send();
   })

})

 router.get('/expenditures/search/home', (req, res) => {
    Expenditure.find({'EXPENDITURES_PAYEE': 'Ty McElroy'}).then((myExpenditures) => {
        res.send(myExpenditures);
    }).catch((e) => {
        res.status(500).send();
    })
})


module.exports = router