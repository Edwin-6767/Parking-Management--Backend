const express= require('express');
const { addfloors, addslots,addbuildings,updateBuilding,updatefloor,updateslot,getallbuildings} = require('../controller/BuildingController');


const router = express.Router();
router.post('/addfloors', addfloors);
router.post('/addslots', addslots);
router.post('/addbuildings', addbuildings);
router.patch('/updateBuilding/:id', updateBuilding);
router.patch('/updatefloor/:id', updatefloor);
router.patch('/updateslot/:id', updateslot);
router.get('/getallbuildings', getallbuildings);


module.exports = router;

