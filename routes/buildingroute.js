const express= require('express');
const { addfloors, addslots,addbuildings,addmulbuildings,updateBuilding,updatefloor,updateslot,getallbuildings,getBuildingById,getBuildingStructure,addmultipleslot} = require('../controller/Buildingcontroller');


const router = express.Router();
router.post('/addfloors', addfloors);
router.post('/addslots', addslots);
router.post('/addbuildings', addbuildings);
router.patch('/updateBuilding/:id', updateBuilding);
router.patch('/updatefloor/:id', updatefloor);
router.patch('/updateslot/:id', updateslot);
router.get('/getallbuildings', getallbuildings);
router.post('/addmulbuildings', addmulbuildings);
router.get('/getBuildingById/:id', getBuildingById);
router.get('/getBuildingStructure/:id', getBuildingStructure);
router.post('/addmultipleslot', addmultipleslot);

module.exports = router;

