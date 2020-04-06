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
router.get('/expenditures/:payee/:amount/:transactionNumber/:poNumber/:checkNumber/:agency/:funding', async (req, res) => {
    try {

        // const payee = req.query.payees 
        // /:amount/:transactionNumber/:poNumber/:checkNumber/:agency/:funding

        var payee = req.params.payee
        var amount = req.params.amount 
        var transactionNumber = req.params.transactionNumber
        var poNumber = req.params.poNumber
        var checkNumber = req.params.checkNumber
        var agency = req.params.agency
        var funding = req.params.funding

        if (payee === "*")
        {
            payee = { $exists: true }
           
        }

        if (amount === "*")
        {
            amount =  { $exists: true } 
            
        } 

        if (transactionNumber === "*") {
            transactionNumber = { $exists: true }

        } 

        if (poNumber === "*") {
            poNumber = { $exists: true }

        }

        if (checkNumber === "*") {
            checkNumber = { $exists: true }

        }

        if (agency === "*") {
            agency = { $exists: true }

        }

        if (funding === "*") {
            funding = { $exists: true }

        }
   
        var myVar = "Jacquelin" + " " + "Paige" + " " + "Sims"
                      
        // const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_STARTDATE": { $gte: startDate }, "EXPENDITURES_ENDDATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye } }] })

       
        const myExpenditures = await Expenditure.find({    "PAYEE": payee, "TRANS_AMT": amount, "TRAN_NO": transactionNumber, "PO_NO": poNumber, "CHECK_NO": checkNumber, "AGENCY": agency, "FUNDING": funding})
       //  const myExpenditures = await Expenditure.find({ "PAYEE": payee, "TRANS_AMT": amount })
       // const myExpenditures = await Expenditure.find({})
       
        res.send(myExpenditures)

    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


 // Gets expenditures by id
//router.get('/expenditures/:id', (req, res) => {
//   const _id = req.params.id;
//   Expenditure.findById(_id).then((myExpenditure) => {
//       if(!myExpenditure) {
//           return res.status(404).send();
//       } 
//       res.send(myExpenditure)
//   }).catch((e) => {
//       res.status(500).send();
//   })

//})

 router.get('/expenditures/search/home', (req, res) => {
    Expenditure.find({'EXPENDITURES_PAYEE': 'Ty McElroy'}).then((myExpenditures) => {
        res.send(myExpenditures);
    }).catch((e) => {
        res.status(500).send();
    })
})


module.exports = router