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

//getall
router.get('/getall',(req,res) => {
    res.send('Responses from user getall');
});

// : denotes url parameter
router.get('/getbyid/:id',(req,res) => {
    console.log(req.params.id);
    res.send('Responses from user getbyid');
});

//update
router.get('/update',(req,res) => {
    res.send('Responses from user update');
});

//delete
router.get('/delete',(req,res) => {
    res.send('Responses from user delete');
});

module.exports = router;

//getall
//getbyid
//update
//delete