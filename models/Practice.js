const mongoose = require('mongoose');

// define a schema for the game model
// this and all other models inherit from mongoose.Schema

const tableSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Doh! You forgot to put in the game title for the name',
  },
  Age: {
    type: Number,
  },
});

// before it is saved, it will run this function
tableSchema.pre('save', function (next) {
  // ! must use 'function' above so 'this' refers to correct object

});

// make the class public ruz
module.exports = mongoose.model('Practice', tableSchema);
