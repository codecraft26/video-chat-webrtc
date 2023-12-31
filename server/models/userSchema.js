const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
  },
  password: {
    type:String,
  },
  email:{
    type: String,
    required: true,
  }


});








module.exports = mongoose.model('User', userSchema);