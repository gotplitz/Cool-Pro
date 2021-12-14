const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  usertype: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  companyname: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  phonenumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
