import React, { useState } from 'react';

const UpdateItemForm = ({ item, handleUpdateItem }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleUpdateItem(item._id, { name, price });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div style={{margin:"5px"}}>
            <h4>Update Grocery Item</h4>
            <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input className="input" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Price" required />
            <button className="btn-update-item" type="submit">Update Item</button>
        </div>
    </form>
  );
};

export default UpdateItemForm;
