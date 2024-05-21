import React, { useState, useEffect } from 'react';
import { getGroceryItems } from '../services/api';
import ItemList from './ItemList';

const UserDashboard = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await getGroceryItems();
        setItems(response.Grocery);
      }catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1 style={{display:"flex", justifyContent:"center", marginBottom:"55px"}}>User Dashboard</h1>
      <ItemList
        items={items}
        from="user"
      />
    </div>
  );
};

export default UserDashboard;
