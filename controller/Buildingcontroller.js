const building = require('../model/building');
const floor = require('../model/floors');
const slot = require('../model/slots');


addbuildings = async (req, res) => {
    const buildingData = req.body;
    const newBuilding = new building(buildingData);

    try {
        await newBuilding.save();
        res.status(200).json({ message: 'Building added successfully', building: newBuilding });
    } catch (error) {
        res.status(500).json({ message: 'Error adding building', error });
    }
}

addfloors = async (req, res) => {
    const floorData = req.body;
    const newFloor = new floor(floorData);

    try {
        await newFloor.save();
        res.status(200).json({ message: 'Floor added successfully', floor: newFloor });
    } catch (error) {
        res.status(500).json({ message: 'Error adding floor', error });
    }
}
 
addslots = async (req, res) => {
    const slotData = req.body;
    const newSlot =await slot.insertMany(slotData);

        res.status(200).json({ message: 'Slot added successfully', slot: newSlot });
   
}

addmulbuildings = async (req, res) => {
    const buildingsData = req.body;  // array of building objects   
    try {
        const newBuildings = await building.insertMany(buildingsData);
        res.status(200).json({ message: 'Buildings added successfully', buildings: newBuildings });
    } catch (error) {
        res.status(500).json({ message: 'Error adding buildings', error });
    }
}


updateBuilding = async (req, res) => {
    const buildingId = req.params.id;  // building ID from URL params
    const updateData = req.body;       // partial data to update

    try {
        const updatedBuilding = await building.findByIdAndUpdate(
            buildingId,
            { $set: updateData },         // only update the provided fields
            { new: true, runValidators: true }  // return updated doc, validate schema
        );

        if (!updatedBuilding) {
            return res.status(404).json({ message: 'Building not found' });
        }

        res.status(200).json({ message: 'Building updated successfully', building: updatedBuilding });
    } catch (error) {
        res.status(500).json({ message: 'Error updating building', error });
    }
}



updatefloor = async (req, res) => {
    const floorId = req.params.id; 
    const updateData = req.body;
    try {
        const updatedFloor = await floor.findByIdAndUpdate(
            floorId,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        if (!updatedFloor) {
            return res.status(404).json({ message: 'Floor not found' });
        }

        res.status(200).json({ message: 'Floor updated successfully', floor: updatedFloor });
    } catch (error) {
        res.status(500).json({ message: 'Error updating floor', error });   
    }
}


updateslot = async (req, res) => {
    const slotId = req.params.id;   
    const updateData = req.body;
    try {
        const updatedSlot = await slot.findByIdAndUpdate(
            slotId,
            { $set: updateData },
            { new: true, runValidators: true }
            );
        if (!updatedSlot) {
            return res.status(404).json({ message: 'Slot not found' });
            }
        res.status(200).json({ message: 'Slot updated successfully', slot: updatedSlot });
    }

    catch (error) {
        res.status(500).json({ message: 'Error updating slot', error });
    }

}

deleteBuilding = async (req, res) => {
    const buildingId = req.params.id;  // building ID from URL params

    try {
        const deletedBuilding = await building.findByIdAndDelete(buildingId);
        if (!deletedBuilding) { 
            return res.status(404).json({ message: 'Building not found' });
        }
        res.status(200).json({ message: 'Building deleted successfully', building: deletedBuilding });
        } catch (error) {
        res.status(500).json({ message: 'Error deleting building', error });
    }
}

deletefloor = async (req, res) => {
    const floorId = req.params.id;  
    try {
        const deletedFloor = await floor.findByIdAndDelete(floorId);
        if (!deletedFloor) {
            return res.status(404).json({ message: 'Floor not found' });
        }
        res.status(200).json({ message: 'Floor deleted successfully', floor: deletedFloor });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting floor', error });
    }
}

deleteSlot = async (req, res) => {
    const slotId = req.params.id; 
    try {
        const deletedSlot = await slot.findByIdAndDelete(slotId);
        if (!deletedSlot) {
            return res.status(404).json({ message: 'Slot not found' });
        }
        res.status(200).json({ message: 'Slot deleted successfully', slot: deletedSlot });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting slot', error });
    }
}



getallbuildings = async (req, res) => {
    try {
        const buildings = await building.find();
        res.status(200).json({ message: 'Buildings retrieved successfully', buildings });   
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving buildings', error });
    }   
}


getallfloors = async (req, res) => {
    try {
        const floors = await floor.find();
        res.status(200).json({ message: 'Floors retrieved successfully', floors });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving floors', error });
    }
}


getallslots = async (req, res) => {
    try {
        const slots = await slot.find();
        res.status(200).json({ message: 'Slots retrieved successfully', slots });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving slots', error });
    }
}



getBuildingById = async (req, res) => {
    const buildingId = req.params.id;  // building ID from URL params
    try {
        const buildingData = await building.findById
            (buildingId);
        if (!buildingData) {
            return res.status(404).json({ message: 'Building not found',hi: buildingId });
        }
        res.status(200).json({ message: 'Building retrieved successfully', buildingData });
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving building', error });
    }
}

getFloorById = async (req, res) => {
    const floorId = req.params.id;  // floor ID from URL params
    try {
        const floorData = await floor.findById(floorId);
        if (!floorData) {
            return res.status(404).json({ message: 'Floor not found' });
        }
        res.status(200).json({ message: 'Floor retrieved successfully', floorData });
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving floor', error });
    }
}


getSlotById = async (req, res) => {
    const slotId = req.params.id;  // slot ID from URL params
    try {
        const slotData = await slot.findById(slotId);
        if (!slotData) {
            return res.status(404).json({ message: 'Slot not found' });
        }
        res.status(200).json({ message: 'Slot retrieved successfully', slotData });
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving slot', error });
    }
}

getBuildingStructure = async (req, res) => {
  try {
    const buildingId = req.params.id; // assuming route is /building/:id/details

    const building = await Building.findById(buildingId);
    if (!building) return res.status(404).json({ message: 'Building not found' });

    const floors = await Floor.find({ building_id: buildingId });

    const floorData = await Promise.all(floors.map(async (floor) => {
      const sections = floor.section;

      const sectionData = await Promise.all(sections.map(async (section) => {
        const slots = await Slot.find({
          floor_id: floor._id,
          section_id: section._id?.toString() || section._id // handle cases with no ObjectId
        });

        return {
          section_name: section.section_name,
          section_id: section._id,
          slots: slots.map(slot => ({
            slot_name: slot.slot_name,
            startSession: slot.startSession,
            endSession: slot.endSession,
            status: slot.status,
            slot_id: slot._id
          }))
        };
      }));

      return {
        floor_name: floor.floor_name,
        floor_id: floor._id,
        sections: sectionData
      };
    }));

    res.json({
      building_id: building._id,
      building_name: building.name,
      address: building.address,
      floors: floorData
    });
  } catch (error) {
    console.error('Error fetching building details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = {
    addbuildings,
    addfloors,
    addslots,
    addmulbuildings,
    updateBuilding,
    updatefloor,
    updateslot,
    getBuildingById,
    getFloorById,
    getSlotById,
    deleteBuilding,
    deletefloor,
    deleteSlot,
    getallbuildings,
    getallfloors,
    getallslots,
    getBuildingStructure


};


