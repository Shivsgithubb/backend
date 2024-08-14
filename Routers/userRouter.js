const express = require('express');

const Model = require('../models/userModel');

const router = express.Router();

router.post('/add',(req,res) => {
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});



//getall
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

    });

// : denotes url parameter
router.get('/getbyid/:id',(req,res) => {
    Model.findById(req.params.id)
    .then((result)=> {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update
router.get('/update',(req,res) => {
    res.send('Responses from user update');
});

//delete
router.delete('/delete/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result)=> {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;

//getall
//getbyid
//update
//delete