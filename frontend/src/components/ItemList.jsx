import React, { useState } from "react";
import UpdateItemForm from "./UpdateItemForm";
import { bookGroceryItems } from "../services/api";

const ItemList = ({ from, items, onUpdateItem, onRemoveItem, onUpdateInventory }) => {
  const [quantity, setQuantity] = useState(0);
  const [cartedItems, setCartedItems] = useState([]);

  const addHandle = (id) => {
    window.alert("Item Added");
    setCartedItems([...cartedItems, { id, quantity }]);
  };

  const bookItem = async () => {
    try {
      await bookGroceryItems(cartedItems);
      window.alert("Item Booked ✅");
      setCartedItems([]); // Clear cart after booking
    } catch (error) {
      console.error(error.message);
      window.alert("Failed to book items ❌");
    }
  };

  return (
    <div>
      <h2 style={{display:"flex", justifyContent:"center"}}>Grocery Items</h2>
      <ul>
        {items.map((item) => (
          <li className="item-list" key={item._id}>
            <p style={{fontFamily:"monospace", fontSize:22, margin:"5px", padding:"10px"}}>
              {item.name.toUpperCase()} - ₹{item.price} - {item.inventory} in stock
            {from === "admin" && (
              <>
                <button className="btn-rm"
                  onClick={() => onRemoveItem(item._id)}
                >
                  Remove
                </button>
                <UpdateItemForm item={item} handleUpdateItem={onUpdateItem} />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const newInventory = parseInt(e.target.inventory.value, 10);
                    onUpdateInventory(item._id, newInventory);
                  }}
                >
                    <div style={{margin:"5px"}}>
                        <input
                            className="input"
                            type="number"
                            name="inventory"
                            placeholder="New Inventory"
                            required
                        />
                        <button className="btn-update-inventory" type="submit">Update Inventory</button>
                    </div>
                </form>
              </>
            )}
            </p>
            {from === "user" && (
              <>
                <input
                  className="input-view"
                  type="number"
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
                <button className="btn-add-view" type="button" onClick={() => addHandle(item._id)}>
                  Add
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      {from === "user" && (
        <div style={{display:"flex", justifyContent:"center", margin:"35px"}}>
        <button className="btn-add" type="button" onClick={bookItem}>
          Book
        </button>
        </div>
      )}
    </div>
  );
};

export default ItemList;
