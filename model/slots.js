const mongoose = require('mongoose');
const { startSession } = require('./user');
const slotschema=new mongoose.Schema(
    {
        floor_id:{type:String,required:true},
        section_id:{type:String,required:true},
        slot_name:{type:String,required:true},
        startSession:{type:String,required:true},
        endSession:{type:String,required:true},
        status:{type:String,default:"available",enum:["available","booked"]},

    })
const slot=mongoose.model('slot',slotschema);
module.exports=slot;


