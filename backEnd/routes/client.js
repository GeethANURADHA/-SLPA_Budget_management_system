import  express  from "express";
import {
  getStaffs,
  saveStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
  saveAttendance,
  AttendanceSubmit,
  saveItems,
  getItems,
  getItemsById,
  updateItems,
  deleteItems,
  saveAdminItems,
  getAdminItems,
  getAdminItemsById,
  updateAdminItems,
  deleteAdminItems,

} from "../controllers/client.js";

const router = express.Router();

//staff form

router.post("/staffs",saveStaff);
router.get("/staffs", getStaffs);
router.get("/staffs/:id",getStaffById)
router.patch("/staffs/:id",updateStaff)
router.delete("/staffs/:id", deleteStaff);


//attendance form

router.post("/attendances", saveAttendance);
router.post("/attendances", AttendanceSubmit);

//items form
router.post('/items', saveItems); // save items
router.get('/items', getItems); // get items
router.get("/items/:id", getItemsById);
router.patch("/items/:id", updateItems);
router.delete("/items/:id", deleteItems);

//adminitems form
router.post("/Adminitems", saveAdminItems); // save items
router.get("/Adminitems", getAdminItems); // get items
router.get("/Adminitems/:id", getAdminItemsById);
router.patch("/Adminitems/:id", updateAdminItems);
router.delete("/Adminitems/:id", deleteAdminItems);


export default router;