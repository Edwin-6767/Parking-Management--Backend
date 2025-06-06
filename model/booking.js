const mongoose=require('mongoose');


const bookingschema=new mongoose.Schema(
    {
        "booking_id":{type:String,required:true},
        "user_id":{type:String,required:true},
        "slot_id":{type:String,required:true},
    })