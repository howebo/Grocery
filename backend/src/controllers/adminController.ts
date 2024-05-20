import GroceryItem from "../models/groceryItem";

// add
export const addGroceryItem = async (req, res) => {
  try {
    const addedItem = new GroceryItem(req.body);
    await addedItem.save();
    res.status(201).json({ message: "Added ✅", item: addedItem });
  } catch (error) {
    res.status(400).json({ error: `Failed To Add ☹️, ${error.message}` });
  }
};
// view
export const viewGroceryItem = async (req, res) => {
  try {
    const allItems = await GroceryItem.find();
    res.status(200).json({ Grocery: allItems });
  } catch (error) {
    res.status(400).json({ error: `Failed To View ☹️, ${error.message}` });
  }
};

// update
export const updateGroceryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return updatedItem
      ? res.status(200).json({ "Updated Item": updatedItem })
      : res.status(404).json({ error: "Item not found ☹️" });
  } catch (error) {
    res.status(400).json({ error: `Failed To Update ☹️, ${error.message}` });
  }
};

// remove
export const removeGroceryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await GroceryItem.findByIdAndDelete(id);
    return deletedItem
      ? res.status(200).json({ message: "Item removed successfully" })
      : res.status(404).json({ error: "Item not found ☹️" });
  } catch (error) {
    res.status(400).json({ error: `Failed To Delete ☹️, ${error.message}` });
  }
};

// manage 
export const updateInventory = async (req,res) => {
  try {
    const {id} = req.params;           //admin/manage/:id
    const { inventory } = req.body;    // expecting {"inventory":50}

    if(typeof inventory !== 'number' || inventory < 0){
      res.status(400).json({message: "Invalid inventory value ☹️"})
    }
    // const item = 
    const updatedItem = await GroceryItem.findByIdAndUpdate(id, {inventory}, {new: true});
    return updatedItem ? res.status(200).json({ "Updated Item": updatedItem }) : res.status(404).json({ error: "Item not found ☹️" });
  } catch (error) {
    res.status(400).json({ error: `Failed To Update ☹️, ${error.message}` });
  }
}