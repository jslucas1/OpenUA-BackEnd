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
router.get('/expenditures/:payee/:amount', async (req, res) => {
    try {

        // const payee = req.query.payees 

        var payee = req.params.payee
        var amount = req.params.amount 

        if (req.params.amount === "")
        {
            var amount = "null"
        }
        else
        {
            var amount = req.params.amount
          
        }     
      
        //if (payee = "")
        //{
        //    payee = { $exists: true }
           
        //}
        if (amount === "null")
        {
            amount =  { $exists: true } 
            
        } 



        var myVar = "Jacquelin" + " " + "Paige" + " " + "Sims"
                      
        // const myExpenditures = await Expenditure.find({ $and: [{ "EXPENDITURES_STARTDATE": { $gte: startDate }, "EXPENDITURES_ENDDATE": { $lte: endDate }, "EXPENDITURES_PAYE": { $eq: paye } }] })

       
        const myExpenditures = await Expenditure.find({ "PAYEE": payee, "TRANS_AMT": amount })
        
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