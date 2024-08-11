const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    title : String,
    brand : { type: String},
    model : { type: String },
    price : { type: number, default: Date.now }
    image : String,
    createdAt : {type : Date, default : Date.now}
});

module.exports = model('users', mySchema); // user is collection name