const mongoose = require('mongoose');

const url = "mongodb+srv://vs6828208:mongodb123@cluster0.xwkj2.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

// connect to the database

// asynchronous - returns a promise

mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
}).catch((err) => {
    console.log(err);
});