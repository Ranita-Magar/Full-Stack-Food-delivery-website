import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, default: "FoodProcessing" }, //whenever a new order will be places , status will be Food Processing
  date: { type: Date, default: Date.now() },
  payment: { type: Boolean, default: false },
});

// const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
