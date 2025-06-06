const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
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
  vehiclenum: {
    type: String,
    required: true
  },
  mobilenumber: {
    type: String,
    required: true
  },
  userrole: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
    Imageurl: {
      type: String,
      default: 'https://www.w3schools.com/howto/img_avatar.png'
    }
    
});
  
const User = mongoose.model('User', userSchema);

  module.exports =User