const mongoose = require('mongoose');
const floorschema=new mongoose.Schema(
    {
        "building_id":String,
        "floor_name":String,
        "section":
        [
            {
            "section_name": String,
            },
           
        ]


        },
    )
const floor=mongoose.model('floor',floorschema);
module.exports=floor;