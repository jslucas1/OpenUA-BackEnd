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
router.get('/expenditures/:payee/:amount/:transactionNumber/:poNumber/:checkNumber/:agency/:funding/:startDate/:endDate', async (req, res) => {
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
        //var category = req.params.category
        var startDate = req.params.startDate
        var endDate = req.params.endDate

      

        if (payee === "HJGTSCnullvalue")
        {
            payee = { $exists: true }
           
        }

        if (amount === "HJGTSCnullvalue")
        {
            amount =  { $exists: true } 
            
        } 

        if (transactionNumber === "HJGTSCnullvalue") {
            transactionNumber = { $exists: true }

        } 

        if (poNumber === "HJGTSCnullvalue") {
            poNumber = { $exists: true }

        }

        if (checkNumber === "HJGTSCnullvalue") {
            checkNumber = { $exists: true }

        }

        if (agency === "HJGTSCnullvalue") {
            agency = { $exists: true }

        }

        if (funding === "HJGTSCnullvalue") {
            funding = { $exists: true }

        }

        if (startDate === "HJGTSCnullvalue") {
            startDate = "00-Jan"

        }

        if (endDate === "HJGTSCnullvalue") {
            endDate = "99-Jan"

        }


        //if (category === "HJGTSCnullvalue") {
        //    category = { $exists: true }

        //}


   
        var myVar = "Jacquelin" + " " + "Paige" + " " + "Sims"
                      
        // const myExpenditures = await Expenditure.find({ $and: [{ "DATE": { $gte: startDate }, "DATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye } }] })
                                                                                                                                                                                  // db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )

       // This works
       // const myExpenditures = await Expenditure.find({    "PAYEE": payee, "TRANS_AMT": amount, "TRAN_NO": transactionNumber, "PO_NO": poNumber, "CHECK_NO": checkNumber, "AGENCY": agency, "FUNDING": funding})
        const myExpenditures = await Expenditure.find({ "PAYEE": payee, "TRANS_AMT": amount, "TRAN_NO": transactionNumber, "PO_NO": poNumber, "CHECK_NO": checkNumber, "AGENCY": agency, "FUNDING": funding, $and: [{ "DATE": { $gte: startDate } }, { "DATE": { $lte: endDate } }] })
        console.log(category)
       
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