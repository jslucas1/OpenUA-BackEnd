const express = require('express')
const Expenditure = require('../models/expenditure');
const router = new express.Router()

// =====================================================
//                Expenditure flow path
// =====================================================
router.post('/expenditures', (req, res) => {
    const myExpenditure = new Expenditure(req.body);

    myExpenditure.save().then(() => {
        res.status(201).send(myExpenditure);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

router.put('/expenditures/:id', (req, res) => {
    const myExpenditure = new Expenditure(req.body);
    const myId = myExpenditure._id;
    Expenditure.findOneAndUpdate({"_id": myId}, {"$set": {"favorite": myGame.favorite,
                                                   "EXPENDITURES_DATE": myExpenditure.EXPENDITURES_DATE,
                                                   "EXPENDITURES_SEQ": myExpenditure.EXPENDITURES_SEQ
                                                //   continue this pattern for the other fields
                                                }}, 
        {new: true}).then((myExpenditure) => {
        res.send(myExpenditure);
    }).catch((e) => {
        res.status(500).send();
    })
})

router.get('/expenditures', (req, res) => {
    Expenditure.find({}).then((myExpenditures) => {
        res.send(myExpenditures);
    }).catch((e) => {
        res.status(500).send();
    })
})

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