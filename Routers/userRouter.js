const express = require('express');

const router = express.Router();

router.get('/add',(req,res) => {
    res.send('Responses from user add');
});

//getall
router.get('/getall',(req,res) => {
    res.send('Responses from user add');
});

//getbyid
router.get('/getbyid',(req,res) => {
    res.send('Responses from user add');
});

//update
router.get('/update',(req,res) => {
    res.send('Responses from user add');
});

//delete
router.get('/delete',(req,res) => {
    res.send('Responses from user add');
});

module.exports = router;

//getall
//getbyid
//update
//delete