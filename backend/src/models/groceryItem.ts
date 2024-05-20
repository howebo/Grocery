import mongoose from "mongoose";

const groceryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
});

const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);

export default GroceryItem;
