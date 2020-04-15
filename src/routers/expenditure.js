// Express is an npm package that is used to launch the web server
const express = require('express')
// Uses Expenditure model 
const Expenditure = require('../models/expenditure');
// Creates an express router to make the API call on
const router = new express.Router()
// Use file system API to write errors to a file
const fs = require('fs');





// Example of a post call method
//router.post('/expenditures', (req, res) => {
//    const myExpenditure = new Expenditure(req.body);

//    myExpenditure.save().then(() => {
//        res.status(201).send(myExpenditure);
//    }).catch((e) => {
//        res.status(400).send(e);
//    })
//})



// Recieves JSON object from the midlle layer, does a search query with variables from the JSON object, 
// sends back data from database to middle layer
router.get('/expenditures/:payee/:amount/:transactionNumber/:poNumber/:checkNumber/:agency/:funding/:category/:startDate/:endDate', async (req, res) => {
    try {

        // Takes data sent from the front end through the URL and creates a variable for each search parameter
        var payee = req.params.payee
        var amount = req.params.amount 
        var transactionNumber = req.params.transactionNumber
        var poNumber = req.params.poNumber
        var checkNumber = req.params.checkNumber
        var agency = req.params.agency
        var funding = req.params.funding
        var category = req.params.category
        var startDate = req.params.startDate
        var endDate = req.params.endDate

      
        // If search variable is left blank, a wildcard null value is used because empty strings can't be passed through 
        // the URL. If a search variable has a null value, the search is done where that search variable simply exists 
        // instead of searching for a specific value
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
            startDate = "2000-01-01T00:00:00.000+00:00"

        }

        if (endDate === "HJGTSCnullvalue") {
            endDate = "2100-01-01T00:00:00.000+00:00"

        }


        if (category === "HJGTSCnullvalue") {
            category = { $exists: true }

        }
        
        //  Conducts a search in the Expenditure database using all of the search parammeters and sends the result to 
        //  the variable myExpenditures
        const myExpenditures = await Expenditure.find({ "PAYEE": payee, "TRANS_AMT": amount, "TRAN_NO": transactionNumber, "PO_NO": poNumber, "CHECK_NO": checkNumber, "AGENCY": agency, "FUNDING": funding, "CATEGORY": category, $and: [{ "DATE": { $gte: startDate } }, { "DATE": { $lte: endDate } }] })
                       
        // This API call then sends the reponse from the database back to where ever it was called from
        res.send(myExpenditures)

       

        // Catches any errors, prints the error to the console and sends a 500 message error
        // Include error notepad file with error date time,
    } catch (e) {

        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        var day = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        var currentTime = year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;   
        
        fs.writeFileSync('C:/OpenBackEnd/LogFile.txt', "Date: " + currentTime + "\n" + "Error: " + e);
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




module.exports = router