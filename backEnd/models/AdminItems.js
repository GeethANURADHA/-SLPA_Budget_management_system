import mongoose from "mongoose";

const AdminItemsSchema = new mongoose.Schema(
  {
    Itemname: String,
    Quantity: String,
    Itemcode: String,
  },
  { timestamps: true }
);

const AdminItems = mongoose.model("Adminitems", AdminItemsSchema);
export default AdminItems;

