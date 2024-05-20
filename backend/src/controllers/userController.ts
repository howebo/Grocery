import GroceryItem from "../models/groceryItem";

// view
export const viewGroceryItem = async (req, res) => {

    try {
        const allItems = await GroceryItem.find();
        res.status(200).json({Grocery: allItems})
    } catch (error) {
        res.status(400).json({ error: `Failed To View ☹️, ${error.message}` });
    }
};

//book 
export const bookGroceryItems = async (req,res) => {

    try {
        const { items } = req.body // expecting {"items" : [ {id,quantity}, {id,quantity} ] }
        const bookedItems = [];
        let totalPrice = 0;
    
        for(const item of items){
            
            const groceryItem = await GroceryItem.findById(item.id);
            if(!groceryItem || groceryItem.inventory < item.quantity){
                return res.status(400).json({ error: 'Insufficient inventory or item not found ☹️' });
            }
            groceryItem.inventory -= item.quantity;
            totalPrice += groceryItem.price * item.quantity;
            await groceryItem.save();
            bookedItems.push({id: groceryItem._id, name: groceryItem.name, quantity: item.quantity});
        }
        res.status(200).json({ message: "Items Booked Successfully ✅","Items_Booked" : bookedItems, "Total_Price": totalPrice });
    } catch (error) {
        res.status(400).json({ error: `Failed To Book ☹️, ${error.message}` });
    }
};
