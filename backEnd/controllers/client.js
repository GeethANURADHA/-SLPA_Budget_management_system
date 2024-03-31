import Staff from "../models/Staff.js";
import Attendance from "../models/Attendance.js";
import Items from "../models/Items.js";
import AdminItems from "../models/AdminItems.js";


export const getStaffs = async (req , res) =>{
  
  try{
    const staffs = await Staff.find();
    res.status(200).json(staffs);
  }catch(error){
    res.status(404).json({message: error.message});
  }
};


export const getStaffById = async (req, res) => {
  try {
    const staffs = await Staff.findById(req.params.id);
    res.json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const saveStaff = async (req, res) => {
    const staffs = new Staff(req.body);
    try {
      const insertStaff = await staffs.save();
      res.status(201).json(insertStaff);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //update 

export const updateStaff = async (req, res) => {
  try {
    const updatestaff = await Staff.updateOne (
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatestaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete 

export const  deleteStaff = async (req, res) => {
  try {
    const deletestafffs = await Staff.deleteOne({ _id: req.params.id });
    res.status(200).json(deletestafffs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//add attendance
 export const AttendanceSubmit = async (req, res) => {
  const attendances = new Attendance(req.body);
   try {
     const insertedStaffAttendance = await attendances.save();
     res.status(201).json(insertedStaffAttendance);
   } catch (error) {
    res.status(400).json({ message: error.message });
  }
 };


export const saveAttendance = async(req, res) => {
  const attendances = new Attendance(req.body);
  try {
    const insertedAttendances = await attendances.save();
    res.status(201).json(insertedAttendances);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //get all attendance
 export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.status(200).json(attendances);
    } catch (error) {
    res.status(400).json({ message: error});
    }
  };


  //items

  //additems

  export const saveItems = async (req, res) => {
    const items = new Items(req.body);
    try {
      const insertItems = await items.save();
      res.status(201).json(insertItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //show items
  export const getItems = async (req, res) => {
    try {
      const items = await Items.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  //update items
  export const getItemsById = async (req, res) => {
    try {
      const items = await Items.findById(req.params.id);
      res.json(items);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const updateItems = async (req, res) => {
    try {
      const updateItems = await Items.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
      res.status(200).json(updateItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //delete items
  export const deleteItems = async (req, res) => {
    try {
      const deleteItems = await Items.deleteOne({ _id: req.params.id });
      res.status(200).json(deleteItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //saveAdminItems

    export const saveAdminItems = async (req, res) => {
      const adminitems = new AdminItems(req.body);
      try {
        const insertItems = await adminitems.save();
        res.status(201).json(insertItems);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };

      //show Admin items
  export const getAdminItems = async (req, res) => {
    try {
      const adminitems = await AdminItems.find();
      res.status(200).json(adminitems);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

    //update items
  export const getAdminItemsById = async (req, res) => {
    try {
      const getadminitems = await AdminItems.findById(req.params.id);
      res.json(getadminitems);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

    export const updateAdminItems = async (req, res) => {
      try {
        const adminupdateItems = await AdminItems.updateOne(
          { _id: req.params.id },
          { $set: req.body }
        );
        res.status(200).json(adminupdateItems);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };

      //delete items
  export const deleteAdminItems = async (req, res) => {
    try {
      const deletadminItems = await AdminItems.deleteOne({ _id: req.params.id });
      res.status(200).json(deletadminItems);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };