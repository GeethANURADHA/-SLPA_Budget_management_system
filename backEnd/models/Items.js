import mongoose from "mongoose";

const ItemsSchema = new mongoose.Schema(
  {
    Itemname: String,
    Division: String,
    Quantity: String,
    AdminID: String,
    ReqDate: Date,
    Itemcode: String,
  },
  { timestamps: true }
);

const Items = mongoose.model("items", ItemsSchema);
export default Items;
