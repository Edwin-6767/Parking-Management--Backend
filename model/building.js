const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({ 
  name: { type: String, required: true },
  address: { type: String, required: true },
    owner: { type: String, },
    user_id: { type: String, required: true },
    starttime:{type:String,default: '00:00'},
    endtime: { type:String ,default: '23:59' },
    vehicletype: { type: [String], enum: ['two-wheeler', 'four-wheeler'], },
    amount: 
        [
           { "two-wheeler": Number},
          
           { "four-wheeler":  Number}
        ],
    imageurl: { type: String, default: 'https://example.com/default-building-image.jpg' },


})


const Building = mongoose.model('Building', buildingSchema);
module.exports = Building;

