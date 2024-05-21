import React, { useState, useEffect } from 'react';
import { getGroceryItems, addGroceryItem, updateGroceryItem, removeGroceryItem, updateInventory } from '../services/api';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

const AdminDashboard = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await getGroceryItems();
      setItems(response.Grocery);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async (item) => {
    try {
      await addGroceryItem(item);
      window.alert('Item added successfully');
      fetchItems();
    } catch (error) {
      window.alert(`Failed to add item: ${error.message}`);
      console.error(error.message);
    }
  };

  const handleUpdateItem = async (id, data) => {
    try {
      await updateGroceryItem(id, data);
      window.alert('Item updated successfully');
      fetchItems();
    } catch (error) {
      window.alert(`Failed to update item: ${error.message}`);
      console.error(error.message);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      await removeGroceryItem(id);
      window.alert('Item removed successfully');
      fetchItems();
    } catch (error) {
      window.alert(`Failed to remove item: ${error.message}`);
      console.error(error.message);
    }
  };

  const handleUpdateInventory = async (id, inventory) => {
    try {
      await updateInventory(id, inventory);
      window.alert('Inventory updated successfully');
      fetchItems();
    } catch (error) {
      window.alert(`Failed to update inventory: ${error.message}`);
      console.error(error.message);
    }
  };

  return (
    <div>
      <h1 style={{display:"flex", justifyContent:"center"}}>Admin Dashboard</h1>
      <AddItemForm handleAddItem={handleAddItem} />
      <ItemList
        from="admin"
        items={items}
        onUpdateItem={handleUpdateItem}
        onRemoveItem={handleRemoveItem}
        onUpdateInventory={handleUpdateInventory}
      />
    </div>
  );
};

export default AdminDashboard;
