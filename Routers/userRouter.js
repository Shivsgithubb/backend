const express = require('express');

const router = express.Router();

router.post('/add',(req,res) => {
    console.log(req.body);
    res.send('Responses from user add');
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